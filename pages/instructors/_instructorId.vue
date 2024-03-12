<template>
  <div>
    <h1 class="title-bg-gray">
      エデュケーター紹介
    </h1>
    <div class="container">
      <h2 class="title-underlined mb-5">
        {{ instructor.nick_name }}
      </h2>
      <div class="text-center mb-4">
        <instructor-shido :instructor="instructor" />
        <instructor-badges :instructor="instructor" />
      </div>

      <div class="row">
        <div class="col-md-3">
          <img
            loading="lazy"
            :src="instructor.image_face"
            class="img-fluid"
          >
        </div>

        <div class="col-md-9">
          <h5
            class="text-gray"
            v-html="profileTitle"
          />

          <div>
            <b>■ 資格</b>
            {{ instructor.qualification }}
          </div>

          <div>
            <b>■ 所属スタジオ</b>
            <nuxt-link :to="`/studios/${studio.slug}`">
              <studio-name :studio="studio" />
            </nuxt-link>
          </div>
          <div
            v-if="instructor.hometown"
            class="hometown"
          >
            <b>■ 出身地:</b>
            <!-- special property of 99 means abroad -->
            <span v-if="instructor.hometown === 99">外国</span>
            <span v-else>{{ instructorHometown.prefecture_name }}</span>
          </div>

          <div
            class="my-3"
            v-html="profileText"
          />

        <!-- TODO: shido_type, ir_other, basi_faculty, yw_certification -->
        </div>
      </div>

      <!-- do not show lessons if none -->
      <div v-if="schedules && schedules.length > 0">
        <div class="row mt-5">
          <div class="col-3">
            日時
          </div>
          <div class="col-3">
            クラス名
          </div>
          <div class="col-3">
            スタジオ
          </div>
          <div class="col-3 text-center">
            予約
          </div>
        </div>
        <div
          v-for="schedule in limitedSchedules"
          :key="schedule.schedule_id"
          class="row border-bottom instructor-schedule py-3"
          :class="schedule.empty_count == 0 ? 'bg-grey' : ''"
        >
          <div class="col-3">
            {{ schedule.lesson_date | dateNoYear }}
            ({{ schedule.lesson_date | weekdayOnly }})
            <br>
            {{ schedule.start_time | timeWithoutSeconds }} -
            {{ schedule.end_time | timeWithoutSeconds }}
          </div>
          <div class="col-3">
            <schedule-capacity :schedule="schedule" />
            <schedule-type :schedule="schedule" />
            <br>
            {{ schedule.special_class_name ||
              schedule.lesson_name ||
              schedule.level_name ||
              schedule.lm_name }}
          </div>
          <div class="col-3">
            <nuxt-link :to="`/studios/${schedule.studio_id}`">
              <studio-name
                v-if="studioMap[schedule.studio_id]"
                :studio="studioMap[schedule.studio_id]"
              />
            </nuxt-link>
          </div>
          <div class="col-3 text-center p-2">
            <a
              v-if="schedule.empty_count > 0"
              :href="schedule.registration_url"
              target="_blank"
              class="btn btn-primary"
            >
              予約<br><small>(ログイン)</small>
            </a>
            <a
              v-else
              :href="schedule.registration_url"
              target="_blank"
              class="btn btn-secondary"
            >
              キャンセル待ち登録<br><small>(ログイン)</small>
            </a>
          </div>
        </div>

        <div
          v-if="schedulesToShow < schedules.length"
          class="my-5"
        >
          <a
            class="btn c-button text-white"
            @click="schedulesToShow += 20"
          >
            もっと表示する
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  head() {
    return {
      title: this.metaInstructorTitle,
      meta: [
        { hid: 'description', name: 'description', content: this.metaInstructorDescription },
        { hid: 'keywords', name: 'keywords', content: 'zen, インストラクター, プロフィール' },
      ],
      link: [
        { rel: 'canonical', href: this.instructorCanonical },
      ],
    };
  },

  async asyncData({ app, params }) {
    const instructor = await app.$zenplaceApi.getInstructor(params.instructorId);
    const studio = await app.$zenplaceApi.getStudio(instructor.studio_id, { progress: false });
    return {
      instructor,
      studio,
    };
  },

  data() {
    return {
      schedules: [],
      schedulesToShow: 10,
      studioMap: {},
      classTypeNames: {
        101: 'プライベート',
        102: 'グループ',
      },
    };
  },

  computed: {

    instructorCanonical() {
      return `https://www.zenplace.co.jp/instructors/${this.$route.params.instructorId}`;
    },
    // Seems there are newlines here, so lets replace and show html
    profileTitle() {
      if (!this.instructor.profile_title) return '';
      return this.instructor.profile_title.replace('\r\n', '<br>').replace('\n', '<br>');
    },

    profileText() {
      if (!this.instructor.profile) return '';
      return this.instructor.profile.replace(/\n/g, '<br>');
    },

    instructorHometown() {
      if (!this.instructor.hometown) return '';
      return _.find(this.$store.state.prefectures, (p) => p.prefecture_id === this.instructor.hometown);
    },
    metaInstructorTitle() {
      return `インストラクター${this.instructor.nick_name}プロフィール`;
    },
    metaInstructorDescription() {
      return `インストラクター${this.instructor.nick_name}の紹介ページです。zen placeにはヨガ・ピラティス・その他ワークアウトの有資格インストラクターが300名以上在籍。元看護師、理学療法士、ダンサーなどさまざまなバックグランドを持つ個性豊かなWholebody Educatorがお待ちしています。`;
    },
    limitedSchedules() {
      return this.schedules.slice(0, this.schedulesToShow);
    },
  },
  async created() {
    // Get schedules postponed since this is bit slow and we need to get each studio also
    this.schedules = await this.$zenplaceApi.getInstructorSchedules(this.$route.params.instructorId, 100);

    const studioIds = _.uniq(this.schedules.map((s) => s.studio_id));
    const studios = await Promise.all(studioIds.map((sid) => this.$zenplaceApi.getStudio(sid)));
    this.studioMap = {};
    _.each(studios, (s) => {
      this.studioMap[s.studio_id] = s;
    });
  },

};
</script>

<style>
 .main-content .instructor-schedule a.btn {
   width: 100%;
 }
@media (max-width: 575px) {
 .main-content .instructor-schedule {
   font-size: 1.3rem;
   }
 .main-content .instructor-schedule a.btn {
   font-size: 1.3rem;
   padding: 0.375rem;
 }
}
</style>
