<template>
  <section
    id="TrialForm"
    class="c-trialform bg-white l-new-container"
  >
    <div class="c-trialform-wrap">
      <div class="c-trialform-head">
        <h2 class="text-center mb-5">
          スタジオ選択
        </h2>
        <div class="c-trialform-head_steps mb-5">
          <div class="step1 active current">
            スタジオ選択
          </div>
          <div class="step2">
            レッスン選択
          </div>
          <div class="step3">
            情報入力
          </div>
          <div class="step4">
            予約完了
          </div>
        </div>
      </div>
      <p class="text-left mb-5">
        ご希望のスタジオを選んで、体験レッスンを予約しましょう。
      </p>
      <div class="c-trialform-body">
        <div class="lesson">
          <span class="head">レッスン種類</span>
          <b-checkbox v-model="typeFilters.pilates">
            ピラティス
          </b-checkbox>

          <b-checkbox v-model="typeFilters.yoga">
            ヨガ
          </b-checkbox>
        </div>

        <span class="head">駅名から検索</span>
        <b-input
          v-model="textFilter"
          :debounce="400"
          type="search"
          placeholder="例）新宿"
          class="bg-grey"
        />

        <span class="head">エリアから探す</span>
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

        <div
          v-show="prefectureId"
          class="c-trialform-area"
        >
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

      <div class="c-trialform-result">
        <div class="row">
          <div class="col small">
            <span v-if="selectedPrefecture">
              {{ selectedPrefecture.prefecture_name }}
            </span>
            <span v-if="selectedArea">&gt;</span>
            <span v-if="selectedArea">
              {{ selectedArea.area_name }}
            </span>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <ul class="list-inline">
              <!-- Text filter -->
              <li
                v-if="textFilter"
                class="badge badge-info pl-3 mx-1"
                :class="`badge-studiosearch-textfilter`"
              >
                {{ textFilter }}
                <button
                  type="button"
                  class="close c-badge-close"
                  aria-label="Remove"
                  @click="textFilter = ''"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div class="row">
          <div class="col-8 text-muted small">
            検索結果: {{ filteredStudios.length }} 店舗
          </div>
          <div class="col-4">
          <!-- <a
            class="btn btn-secondary small"
            @click="$bvModal.show('studio-detail-filter')"
          >
            条件変更
          </a> -->
          </div>
        </div>
      </div>

      <div class="container-except-sm">
        <div class="pt-2">
          <transition-group
            name="studio-list"
            tag="div"
          >
            <div
              v-for="(studio, index) in filteredStudios"
              :key="studio.studio_id"
            >
              <div
                v-if="studio.area_id"
                :class="{
                  'border-bottom': index === filteredStudios.length - 1
                }"
                class="border-top"
              >
                <studio-trial
                  :studio="studio"
                  :show-facilities="false"
                />
              </div>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '~assets/scss/newvariables';

.c-trialform{

  &-wrap{
    max-width: 740px;
    margin-left: auto;
    margin-right: auto;
    padding: 60px 32px;

    @include sp{
      padding: pv(60) 0 pv(40);
    }
  }

  &-head_steps,
  &-body,
  &-result{

    .head{
      display: block;
      font-weight: bold;
      margin-top: 16px;
    }
    input, select{
      display: block;
      margin-top: 12px;
    }
  }
  &-head{
    margin-bottom: 40px;

    p{
      text-align: center;
      font-size: 3rem;
      color: $blue;
      font-weight: bold;
      margin-bottom: 32px;

      @include sp{
        font-size: pv(20);
        margin-bottom: pv(30);
        letter-spacing: pv(-2);
      }
    }

    &_steps{
      display: flex;
      justify-content: center;

      div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        margin: 0 20px;
        font-size: 14px;
        font-weight: bold;
        color: $blue;
        position: relative;

        @include sp{
          margin: 0 pv(6);
          font-size: pv(10);
          white-space: nowrap;
        }

        &:before{
          content: '';
          display: block;
          background-size: contain;
          position: relative;
          z-index:10;
          background-repeat: no-repeat;
          width: 20px;
          height: 20px;
          margin: 20px 20px 30px;
          border-radius: 50%;
          background-color: #bfbfbf;

          @include sp{
            width: pv(20);
            height: pv(20);
            margin: pv(15) pv(15) pv(23);
          }
        }

        &.active:before{
          background-color:$blue;
        }

        &.current:before{
          width: 60px;
          height: 60px;
          margin: 0 0 10px;

          @include sp{
            width: pv(50);
            height: pv(50);
            margin-bottom: pv(8);
          }
        }

        &.step1.current:before{background-image: url('~assets/images/trialform/step1.svg');}
        &.step2.current:before{background-image: url('~assets/images/trialform/step2.svg');}
        &.step3.current:before{background-image: url('~assets/images/trialform/step3.svg');}
        &.step4.current:before{background-image: url('~assets/images/trialform/step4.svg');}

        &:not(:first-child):after{
          content: '';
          display: block;
          height: 2px;
          width: 120px;
          position: absolute;
          top: 29px;
          background: #bfbfbf;
          right: 50%;
          z-index: 0;

          @include sp{
            width: pv(60);
            top: pv(24);
          }
        }

        &.active:after{
          background: $blue;
          z-index: 1;
        }
      }
    }
  }

  &-body{
    margin-bottom: 24px;

    .lesson{
      display: flex;
      align-items: center;

      @include sp{
        flex-wrap: wrap;
      }

      .head{
        margin-top: 0;

        @include sp{
          font-size: pv(14);
          width: 100%;
        }
      }

      .custom-control{

        @include sp{
          padding-left: 0;
          padding-right: pv(16);
          padding-top: pv(16);
        }

        &-label{
          padding-left: 3rem;

          &:after, &:before{
            width: 2.4rem;
            height: 2.4rem;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
          }
        }
      }

    }

    input, select{
      padding: 1rem 1.5rem;
      height: unset;
      text-align-last: left;
    }
  }

  &-result{
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    ul{
      margin-bottom: 0;
    }

    .badge{
      display: inline-flex;
      align-items: center;
      margin-left: 8px;

      button{
        margin-left: 10px;
      }
    }
  }

  .container-except-sm{
    padding: 0;
    max-height: 600px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, .1);
    }

    &::-webkit-scrollbar-thumb {
      background-color: $blue;
      border-radius: 10px;
      box-shadow:0 0 0 1px rgba(255, 255, 255, .3);
    }
  }
}

.studio-list-enter-active, .studio-list-leave-active {
  transition: all 0.25s;
}
.studio-list-enter, .studio-list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(150px);
}
</style>

<script>
import _ from 'lodash';
import { mapState } from 'vuex';

export default {
  scrollToTop: true,

  data() {
    const prefectureId = this.$route.query.prefecture_id
      ? parseInt(this.$route.query.prefecture_id, 10)
      : null;
    const areaId = this.$route.query.area_id
      ? parseInt(this.$route.query.area_id, 10)
      : null;
    const brandFilter = this.$route.query.brand
      ? this.$route.query.brand
      : null;
    const facilityFilters = this.$route.query.facility
      ? this.$route.query.facility.split(',')
      : [];
    const textFilter = this.$route.query.filter
      ? this.$route.query.filter
      : '';

    const hot = this.$route.query.temperature_hot
      ? true
      : null;
    const normal = this.$route.query.temperature_normal
      ? true
      : null;

    return {
      prefectureId,
      areaId,
      brandFilter,
      facilityFilters,
      textFilter,
      studios: [],
      typeFilters: {
        pilates: true,
        yoga: true,
      },
      temperatureFilters: {
        hot,
        normal,
      },
      locales: {
        hot: 'ホット',
        normal: '常温',
      },
    };
  },
  computed: {
    ...mapState([
      'prefectures',
      'areas',
      'brands',
      'facilityTypes',
    ]),

    selectedTemperatureFilters() {
      const selected = _.map(this.temperatureFilters, (v, k) => (v ? k : null));
      return _.compact(selected);
    },

    selectedBrand() {
      const brand = _.find(this.$store.state.brandsNew, (b) => b.brand_type === this.brandFilter);
      return brand;
    },

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

      if (this.textFilter) {
        studios = studios.filter((s) => s.studio_name.indexOf(this.textFilter) >= 0);
      }

      if (!this.typeFilters.pilates) {
        // TODO: pilates & pilates, needs to be fixed on api level
        studios = studios.filter((s) => s.studio_type && (s.studio_type.indexOf('pilates') < 0 && s.studio_type.indexOf('pilatis') < 0));
      }

      if (!this.typeFilters.yoga) {
        studios = studios.filter((s) => s.studio_type && s.studio_type.indexOf('yoga') < 0);
      }

      // TODO: make this filtering happen only when yoga!?
      if (this.selectedTemperatureFilters.length > 0) {
        studios = studios.filter((s) => {
          const temperatures = (s.hot_or_normal || '').split(',');
          if (this.selectedTemperatureFilters.includes('hot') && this.selectedTemperatureFilters.includes('normal')) {
            return temperatures.includes('hot') && temperatures.includes('normal');
          }
          if (this.selectedTemperatureFilters.includes('hot')) {
            return temperatures.includes('hot');
          }
          if (this.selectedTemperatureFilters.includes('normal')) {
            return temperatures.includes('normal');
          }
          return true;
        });
      }

      if (this.brandFilter) {
        studios = _.filter(studios, (s) => {
          const brandTypes = (s.brand_type || '').split(',');
          // in case of pilates, show also basi
          if (this.brandFilter === 'pilates') {
            return brandTypes.includes('pilates')
              || brandTypes.includes('basi');
          }
          return brandTypes.includes(this.brandFilter);
        });
      }

      // Facility filters must include ALL checked
      if (this.facilityFilters.length > 0) {
        studios = studios.filter((s) => {
          const types = (s.facility_type || '').split(',');
          let found = true;
          _.each(this.facilityFilters, (filter) => {
            if (!types.includes(filter)) {
              found = false;
            }
          });
          return found;
        });
      }

      // Finally sort by zip code
      return _.sortBy(studios, (s) => s.studio_id);
    },

    sortedStudios() {
      return _.sortBy(this.filteredStudios, (d) => d.studio_simple_name);
    },

    selectedPrefecture() {
      return _.find(this.prefectures, (p) => p.prefecture_id === this.prefectureId);
    },

    selectedArea() {
      return _.find(this.areas, (a) => a.area_id === this.areaId);
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

    'temperatureFilters.hot': function (val) {
      const query = _.merge({}, this.$route.query);
      if (!val) {
        delete query.temperature_hot;
        this.temperatureFilters.hot = null;
      } else {
        query.temperature_hot = true;
      }
      this.$router.push({ query });
    },
    'temperatureFilters.normal': function (val) {
      const query = _.merge({}, this.$route.query);
      if (!val) {
        delete query.temperature_normal;
        this.temperatureFilters.normal = null;
      } else {
        query.temperature_normal = true;
      }
      this.$router.push({ query });
    },

    brandFilter(val) {
      // TODO: generate query in separate method
      const query = _.merge({}, this.$route.query);

      if (!val) {
        delete (query.brand);
      } else {
        query.brand = this.brandFilter;
      }

      this.$router.push({ query });
    },

    facilityFilters(val) {
      // TODO: generate query in separate method
      const query = _.merge({}, this.$route.query);

      if (!val || !val.length) {
        delete (query.facility);
      } else {
        query.facility = this.facilityFilters.join(',');
      }

      this.$router.push({ query });
    },
  },
  async mounted() {
    await this.asyncData();
  },

  methods: {
    async asyncData() {
      // TODO: move to store and use that at first
      const studios = await this.$zenplaceApi.getStudios();
      this.studios = studios;
    },
    removeFacilityFilter(facilityId) {
      this.facilityFilters = this.facilityFilters.filter((ff) => ff !== facilityId);
    },

    getFacilityName(facilityId) {
      const facility = _.find(this.facilityTypes, (d) => d.facility_id === facilityId);
      if (!facility) {
        return facilityId;
      }
      return facility.facility_name;
    },
  },

};
</script>
