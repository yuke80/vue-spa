<template>
  <div class="p-schedule">
    <h1 class="col-12 title-bg-gray">
      レッスンスケジュール
    </h1>
    <div class="text-center mb-5">
      スタジオを選ぶとレッスンスカレンダーを表示します
    </div>
    <!-- <div class="container-except-sm"></div> -->
    <div class="container">
      <div class="form-inline col-md-6 mb-4">
        <div class="form-group align-items-center">
          <label class="font-weight-bold">レッスン種類：</label>
        </div>
        <div class="form-group align-items-center">
          <b-checkbox v-model="typeFilters.pilates">
            ピラティス
          </b-checkbox>
        </div>

        <div class="form-group align-items-center">
          <b-checkbox v-model="typeFilters.yoga">
            ヨガ
          </b-checkbox>
        </div>
      </div>

      <div class="form-group col-md-6 mb-4">
        <div class="">
          <label class="font-weight-bold mb-0">エリアを絞り込む：</label>
        </div>

        <div class="">
          <b-select
            v-model="prefectureId"
            class="bg-grey o-center-select"
          >
            <option :value="null">
              都道府県
            </option>
            <option
              v-for="prefecture in prefecturesWithStudios"
              :key="prefecture.prefecture_id"
              :value="prefecture.prefecture_id"
            >
              {{ prefecture.prefecture_name }}
            </option>
          </b-select>
        </div>
      </div>

      <div
        v-show="prefectureId"
        class="form-group col-md-6 mb-4"
      >
        <!-- <div class="">
          <label>エリア</label>
        </div> -->
        <div class="">
          <b-select
            v-model="areaId"
            class="bg-grey o-center-select"
          >
            <option :value="null">
              エリア
            </option>
            <option
              v-for="area in filteredAreas"
              :key="area.area_id"
              :value="area.area_id"
            >
              {{ area.area_name }}
            </option>
          </b-select>
        </div>
      </div>

      <div
        class="form-group col-md-6 mb-4"
      >
        <div>
          <label class="font-weight-bold mb-0">スタジオ：</label>
        </div>
        <div class="">
          <b-select
            v-model="studioId"
            class="bg-grey o-center-select"
            @change="setCarender"
          >
            <option :value="null">
              選択してください
            </option>
            <optgroup
              v-for="(studios, group) in groupStudio"
              :key="group"
              :value="group"
              :label="studios[0].prefecture_name"
            >
              <option
                v-for="studio in studios"
                :key="studio.studio_id"
                :value="studio.studio_id"
              >
                {{ getStudioDropdownLavel(studio.studio_id) }}
              </option>
            </optgroup>
          </b-select>
        </div>
      </div>

      <div class="form-inline col-md-6 mb-4">
        <div class="form-group align-items-center">
          <label class="font-weight-bold">グレード：</label>
        </div>
        <div class="form-group align-items-center">
          <b-checkbox v-model="gradeFilters.g01">
            01
          </b-checkbox>
        </div>
        <div class="form-group align-items-center">
          <b-checkbox v-model="gradeFilters.g02">
            02
          </b-checkbox>
        </div>
        <div class="form-group align-items-center">
          <b-checkbox v-model="gradeFilters.g03">
            03
          </b-checkbox>
        </div>
        <!--<div class="form-group align-items-center">
          <b-checkbox v-model="gradeFilters.g04">
            ０４
          </b-checkbox>
        </div>-->
      </div>
    </div>

    <div
      v-if="studioId"
      class="p-studio-schedule container-except-sm"
    >
      <lesson-calendar
        ref="calendar"
        :schedules="schedules"
        :studio="studio"
        :closed-days="closedDays"
        @changed="refetch"
      />
    </div>

    <b-modal
      id="studio-detail-filter"
      hide-footer
      centered
    >
      <template v-slot:modal-title>
        条件追加
      </template>

      <b-button
        class="mt-3"
        block
        @click="$bvModal.hide('studio-detail-filter')"
      >
        適用
      </b-button>
    </b-modal>
  </div>
</template>

<script>
import moment from 'moment';
import _ from 'lodash';
import { mapState } from 'vuex';

export default {
  scrollToTop: true,

  head() {
    return {
      title: 'レッスンスケジュール',
      meta: [
        { hid: 'description', name: 'description', content: 'zen placeスタジオのレッスンスケジュールです。店舗を選ぶとスケジュールを表示します。ご予約にはログインが必要です。はじめての方の体験レッスンご予約は、体験レッスン専用のご予約フォーム、または総合受付にお問合せください。' },
        { hid: 'keywords', name: 'keywords', content: 'レッスンスケジュール, ゼンプレイス' },
      ],

    };
  },

  async asyncData({ app }) {
    // TODO: move to store and use that at first
    const studio = await app.$zenplaceApi.getStudio(1);
    const schedules = await app.$zenplaceApi.getStudioSchedule(studio.studio_id);
    const closedDays = await app.$zenplaceApi.getStudioClosedDays(studio.studio_id);
    const studios = await app.$zenplaceApi.getStudios();
    return {
      studio,
      schedules,
      closedDays,
      studios,
    };
  },

  data() {
    const prefectureId = this.$route.query.prefecture_id
      ? parseInt(this.$route.query.prefecture_id, 10)
      : null;
    const areaId = this.$route.query.area_id
      ? parseInt(this.$route.query.area_id, 10)
      : null;
    const studioId = this.$route.query.studio_id
      ? parseInt(this.$route.query.studio_id, 10)
      : null;
    const firstDay = moment(new Date()).format('YYYY-MM-DD');

    return {
      prefectureId,
      areaId,
      studioId,
      firstDay,
      typeFilters: {
        pilates: true,
        yoga: true,
      },
      gradeFilters: {
        g01: true,
        g02: true,
        g03: true,
        g04: true,
      },
      locales: {
        hot: 'ホット',
        normal: '常温',
      },
      localizedStudioBrands: {
        pilates: 'ピラティス',
        basi: 'ピラティス',
        yoga: 'ヨガ',
        strong: 'ホットヨガ',
      },
    };
  },

  computed: {
    ...mapState([
      'prefectures',
      'areas',
      'brands',
    ]),

    prefecturesWithStudios() {
      const prefectureIds = _.compact(_.map(this.studios, (s) => s.prefecture_id));
      return _.filter(this.prefectures, (p) => prefectureIds.includes(p.prefecture_id));
    },

    filteredAreas() {
      return _.filter(this.areas, (a) => a.prefecture_id === this.prefectureId);
    },

    filteredStudios() {
      let { studios } = this;
      if (this.prefectureId) {
        studios = studios.filter((s) => s.prefecture_id === this.prefectureId);

        if (this.areaId) {
          studios = studios.filter((s) => s.area_id === this.areaId);
        }
      }

      if (!this.typeFilters.pilates) {
        // TODO: pilates & pilates, needs to be fixed on api level
        studios = studios.filter((s) => s.studio_type && (s.studio_type.indexOf('pilates') < 0 && s.studio_type.indexOf('pilatis') < 0));
      }

      if (!this.typeFilters.yoga) {
        studios = studios.filter((s) => s.studio_type && s.studio_type.indexOf('yoga') < 0);
      }

      if (!this.gradeFilters.g01) {
        studios = studios.filter((s) => s.grade_name !== '０１');
      }

      if (!this.gradeFilters.g02) {
        studios = studios.filter((s) => s.grade_name !== '０２');
      }

      if (!this.gradeFilters.g03) {
        studios = studios.filter((s) => s.grade_name !== '０３');
      }

      if (!this.gradeFilters.g04) {
        studios = studios.filter((s) => s.grade_name !== '０４');
      }

      // Finally sort by zip code
      return _.sortBy(studios, (s) => s.zip);
    },

    groupStudio() {
      const group = [];
      this.filteredStudios.forEach((studio) => {
        if (!Array.isArray(group[studio.prefecture_id])) group[studio.prefecture_id] = [];
        group[studio.prefecture_id][studio.slug] = studio.studio_id;
      });
      let i = 0;
      const group_studio = [];
      Object.keys(group).forEach((pref) => {
        let j = 0;
        group_studio[i] = [];
        Object.keys(group[pref]).forEach((slug) => {
          if (group[pref][slug] > 0) group_studio[i][j] = { studio_id: group[pref][slug], prefecture_name: this.prefectureName(Number(pref)) };
          j += 1;
        });
        i += 1;
      });
      return group_studio;
    },

    sortedStudios() {
      return _.sortBy(this.filteredStudios, (d) => d.studio_name);
    },

    selectedPrefecture() {
      return _.find(this.prefectures, (p) => p.prefecture_id === this.prefectureId);
    },

    selectedArea() {
      return _.find(this.areas, (a) => a.area_id === this.areaId);
    },
  },

  watch: {

    areaId(val) {
      // TODO: generate query in separate method
      const query = _.merge({}, this.$route.query);

      if (!val) {
        delete (query.area_id);
        this.areaId = null;
      } else {
        query.area_id = this.areaId;
      }

      return this.$router.push({ query });
    },

    prefectureId(val, prevval) {
      // TODO: generate query in separate method
      const query = _.merge({}, this.$route.query);

      // if value changed, delete areaId
      if (val !== prevval) {
        delete (query.area_id);
        this.areaId = null;
      }

      if (!val) {
        delete (query.prefecture_id);
        this.prefectureId = null;
      } else {
        query.prefecture_id = this.prefectureId;
      }

      this.$router.push({ query });
    },

  },

  created() {
  },

  methods: {
    replaceGradeName(grade_name) {
      return grade_name
        ? grade_name
          .replace('０１', '01')
          .replace('０２', '02')
          .replace('０３', '03')
          .replace('０４', '04')
        : '';
    },
    prefectureName(id) {
      let temp = '';
      this.prefectures.forEach((p) => {
        if (p.prefecture_id === id) temp = p.prefecture_name;
      });
      return temp;
    },

    getStudioDropdownLavel(studioId) {
      let ddLavel;
      this.studios.forEach((studio) => {
        if (studioId === studio.studio_id) {
          // Brand type might be comma separated list so use the first one
          const brandType = this.getBrandType(studio);
          ddLavel = `${studio.studio_name} ${this.localizedStudioBrands[brandType]} ${this.replaceGradeName(studio.grade_name)}`;
        }
      });
      return ddLavel;
    },

    getBrandType(studio) {
      if (studio.brand_type != null) {
        return studio.brand_type.split(',')[0];
      }
      return (studio.brand_id === 1 || studio.brand_id === 2) ? 'pilates' : 'yoga';
    },

    async refetch(date) {
      this.firstDay = date;
      const schedules = await this.$zenplaceApi.getStudioSchedule(this.studioId, moment(date).format('YYYY-MM-DD'));
      const closedDays = await this.$zenplaceApi.getStudioClosedDays(this.studioId);
      const studio = await this.$zenplaceApi.getStudio(this.studioId);
      this.studio = studio;
      this.schedules = schedules;
      this.closedDays = closedDays;
    },

    async setCarender() {
      if (this.studioId > 0) {
        const schedules = await this.$zenplaceApi.getStudioSchedule(this.studioId, this.firstDay);
        const closedDays = await this.$zenplaceApi.getStudioClosedDays(this.studioId);
        const studio = await this.$zenplaceApi.getStudio(this.studioId);
        this.studio = studio;
        this.schedules = schedules;
        this.closedDays = closedDays;

        this.$refs.calendar.defaultDay(this.firstDay);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "node_modules/bootstrap/scss/mixins";
@import '~assets/scss/variables';
.c-badge-close {
  height: 12px;
  margin-top: -4px;
  margin-left: 0.25em;
}

.zen-select {
  background-color: #ddd;
}

.c-studio-item {
  margin-right: 10px;
}
.studio-list-enter-active, .studio-list-leave-active {
  transition: all 0.25s;
}
.studio-list-enter, .studio-list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(150px);
}
.custom-select, .form-control, input {
  font-size: 16px;
}
.custom-checkbox label{margin-right: 2rem;}

// ヘッダー高さが違うため、スタジオページ内スケジュールを上書き
.c-lesson-calendar-nav {
  top: 0px;
}
@media (max-width: map-get($grid-breakpoints, 'sm')) {
  .is-scrolled .c-lesson-calendar-nav {
    top: 0px;
    }
}
// ヘッダー高さが違うため、スタジオページ内スケジュールを上書きここまで
</style>
