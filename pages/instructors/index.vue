<template>
  <div>
    <h1 class="title-bg-gray">
      エデュケーター一覧
    </h1>

    <div class="container">
      <div class="row p-4">
        <div class="col">
          名前（アルファベット）で検索
          <b-input
            v-model="textFilter"
            :debounce="400"
            type="search"
            placeholder="例）arisa"
          />
        </div>
      </div>

      <div class="row p-4">
        指導区分
        <div class="col">
          <b-checkbox v-model="typeFilters.pilates">
            ピラティス
          </b-checkbox>
        </div>
        <div class="col">
          <b-checkbox v-model="typeFilters.yoga">
            ヨガ
          </b-checkbox>
        </div>
        <div class="col">
          <b-checkbox v-model="typeFilters.other">
            その他
          </b-checkbox>
        </div>
      </div>

      <div class="row p-4">
        スペシャルスキル
        <div class="col">
          <b-checkbox v-model="filters.basi_faculty">
            basiファカルティ
          </b-checkbox>
          <b-checkbox v-model="filters.yw_certification">
            YW認定講師
          </b-checkbox>
          <b-checkbox v-model="filters.english_ok">
            English Lessons Available
          </b-checkbox>
        </div>
      </div>

      <div class="text-muted text-small">
        検索結果: {{ filteredInstructors.length }}人
      </div>

      <!-- <nuxt-link
      v-for="instructor in limitedInstructors"
      :key="instructor.user_id"
      class="media p-2 alert alert-light border"
      :to="`/instructors/${instructor.user_id}`"
    >
      <img loading="lazy"
        class="mr-3"
        :src="instructor.image_face"
        width="64"
        height="64"
      >
      <div class="media-body">
        <h5 class="mt-0">
          {{ instructor.nick_name }}
        </h5>

        <div>
          <instructor-brand :instructor="instructor" />
          <studio-name
            v-if="instructorStudio(instructor)"
            :studio="instructorStudio(instructor)"
          />
        </div>

        <div>
          {{ instructor.profile_title }}
        </div>
        <div>
          {{ instructor.profile }}
        </div>
        <instructor-badges :instructor="instructor" />
      </div>
    </nuxt-link> -->

      <div class="d-flex flex-wrap">
        <div
          v-for="instructor in limitedInstructors"
          :key="instructor.user_id"
          class="col-4 col-md-2 mb-5"
          :to="`/instructors/${instructor.user_id}`"
        >
          <!-- TODO: find solution for nice size -->
          <nuxt-link :to="`/instructors/${instructor.user_id}`">
            <div
              class="img text-center"
              style="width: 100%"
            >
              <instructor-shido
                :instructor="instructor"
                class="c-instructor--brand-pos"
              />
              <b-img-lazy
                :src="instructor.image_face"
                width="100%"
              />
            </div>
            <div class="text-center my-2">
              {{ instructor.nick_name }}
            </div>
          </nuxt-link>
        </div>
      </div>

      <div
        v-if="instructorsToShow < filteredInstructors.length"
        class="my-5"
      >
        <!-- TODO: make this infinite scroll maybe? -->
        <a
          class="btn c-button text-white"
          @click="instructorsToShow += 30"
        >
          もっと表示する
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  head() {
    return {
      title: 'エデュケーター一覧',
      meta: [
        { hid: 'description', name: 'description', content: 'zen placeのエデュケーター一覧です。ヨガ・ピラティス・その他ワークアウトの有資格インストラクターが300名以上在籍。元看護師、理学療法士、ダンサーなどさまざまなバックグランドを持つ個性豊かなWholebody Educatorがお待ちしています。 ' },
        { hid: 'keywords', name: 'keywords', content: 'zen, インストラクター, エデュケーター, ぜん' },
      ],
      link: [
        { rel: 'canonical', href: 'https://www.zenplace.co.jp/instructors' },
      ],
    };
  },

  scrollToTop: true,

  async asyncData({ app, params }) {
    const [instructors, studios] = await Promise.all([
      app.$zenplaceApi.getInstructors(params.studioId),
      app.$zenplaceApi.getStudios(),
    ]);
    return {
      instructors,
      studios,
    };
  },

  data() {
    const textFilter = this.$route.query.filter
      ? this.$route.query.brand
      : '';

    const filters = {};
    filters.basi_faculty = !!this.$route.query.basi_faculty;
    filters.yw_certification = !!this.$route.query.yw_certification;
    filters.english_ok = !!this.$route.query.yw_certification;

    return {
      textFilter,
      instructorsToShow: 30,
      filters,
      typeFilters: {
        yoga: true,
        pilates: true,
        other: true,
      },
    };
  },

  computed: {
    limitedInstructors() {
      return this.filteredInstructors.slice(0, this.instructorsToShow);
    },

    filteredInstructors() {
      const validInstructors = this.instructors.filter((i) => [1, 2, 4, 5].includes(i.brand_id));
      const sortedInstructors = _.sortBy(validInstructors, (i) => i.nick_name);
      let filtered = sortedInstructors;

      if (!this.typeFilters.pilates) {
        filtered = filtered.filter((i) => ![102].includes(i.shido_type));
      }
      if (!this.typeFilters.yoga) {
        filtered = filtered.filter((i) => ![101].includes(i.shido_type));
      }
      if (!this.typeFilters.other) {
        filtered = filtered.filter((i) => i.shido_type !== 103 && i.shido_type);
      }

      if (this.textFilter) {
        filtered = filtered.filter((i) => {
          const matchIdx = i.nick_name.toLowerCase().indexOf(this.textFilter.toLowerCase());
          return matchIdx >= 0;
        });
        filtered = _.sortBy(filtered, (i) => {
          const matchIdx = i.nick_name.toLowerCase().indexOf(this.textFilter.toLowerCase());
          return matchIdx;
        });
      }

      _.each(this.filters, (val, key) => {
        if (val) {
          filtered = filtered.filter((i) => i[key]);
        }
      });

      return filtered;
    },
  },

  watch: {
    textFilter(val) {
      // TODO: generate query in separate method
      const query = _.merge({}, this.$route.query);

      if (!val) {
        delete (query.filter);
      } else {
        query.filter = val;
      }

      return this.$router.push({ query });
    },

    // eslint-disable-next-line func-names
    'filters.basi_faculty': function (val) {
      // TODO: generate query in separate method
      const query = _.merge({}, this.$route.query);

      if (!val) {
        delete (query.basi_faculty);
      } else {
        query.basi_faculty = true;
      }

      return this.$router.push({ query });
    },

    // eslint-disable-next-line func-names
    'filters.yw_certification': function (val) {
      // TODO: generate query in separate method
      const query = _.merge({}, this.$route.query);

      if (!val) {
        delete (query.yw_certification);
      } else {
        query.yw_certification = true;
      }

      return this.$router.push({ query });
    },

    // eslint-disable-next-line func-names
    'filters.english_ok': function (val) {
      // TODO: generate query in separate method
      const query = _.merge({}, this.$route.query);

      if (!val) {
        delete (query.english_ok);
      } else {
        query.english_ok = true;
      }

      return this.$router.push({ query });
    },
  },

  methods: {
    instructorStudio(instructor) {
      return _.find(this.studios, (s) => s.studio_id === instructor.studio_id);
    },
  },
};
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/mixins";
@import '~assets/scss/variables';

.img {position: relative;}
.c-instructor--brand-pos {
  position: absolute;
  bottom: 4%;
  left:4%;
  z-index: 10;
  // position: relative;
  // top: 120px;
  // left: 2px;
}

@media (min-width: map-get($grid-breakpoints, 'sm')) {
  // .c-instructor--brand-pos {
  //   position: relative;
  //   top: 220px;
  //   left: 50%;
  //   margin-left: -25%;
  // }
}
</style>
