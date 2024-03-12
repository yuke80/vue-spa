<template>
  <div class="p-studio">
    <PageHeader
      title="スタジオ一覧"
      :img="headerImg"
    />
    <Breadcrumb :breadcrumbs="breadcrumbs" />
    <div class="l-new-container">
      <div class="search-area">
        <p class="title">
          <img
            src="~assets/images/studio/icon-search.webp"
            alt=""
          ><span>詳細検索</span>
        </p>
        <div class="box">
          <div class="box1">
            <input
              v-model="textFilter"
              type="text"
              name="textFilter"
              placeholder="スタジオ名・駅名で検索"
            >
            <div class="selectWrap">
              <select
                ref="select"
                v-model="prefectureId"
              >
                <option :value="null">
                  都道府県で検索
                </option>
                <option
                  v-for="prefecture in prefecturesWithStudios"
                  :key="prefecture.prefecture_id"
                  :value="prefecture.prefecture_id"
                >
                  {{ prefecture.prefecture_name }}
                </option>
              </select>
            </div>
            <button
              :class="{ active: isActive }"
              @click="active"
            >
              フィルター
            </button>
          </div>
          <div
            v-if="isActive"
            class="box2"
          >
            <div>
              <dl>
                <dt>タイプ</dt>
                <dd>
                  <b-checkbox v-model="typeFilters.pilates">
                    ピラティス
                  </b-checkbox>
                  <b-checkbox v-model="typeFilters.yoga">
                    ヨガ
                  </b-checkbox>
                  <b-checkbox v-model="typeFilters.hot">
                    ホットヨガ
                  </b-checkbox>
                </dd>
              </dl>

              <dl>
                <dt>設備</dt>
                <dd>
                  <span
                    v-for="facilityType in facilityTypes"
                    :key="facilityType.facility_id"
                  >
                    <b-checkbox
                      v-if="facilityType.facility_name=='シャワー' && (typeFilters.yoga==true || typeFilters.hot==true)"
                      v-model="facilityFilters"
                      :value="facilityType.facility_id"
                    >
                      {{ facilityType.facility_name }}
                    </b-checkbox>
                    <b-checkbox
                      v-else-if="facilityType.facility_name!='シャワー' && facilityType.facility_name!='マシン' && facilityType.facility_name!='マシングループ'"
                      v-model="facilityFilters"
                      :value="facilityType.facility_id"
                    >
                      {{ facilityType.facility_name }}
                    </b-checkbox>

                  </span>
                </dd>
              </dl>

              <dl>
                <dt>レッスンタイプ</dt>
                <dd>
                  <span
                    v-for="lessonType in lessonTypes"
                    :key="lessonType.index"
                  >
                    <b-checkbox
                      v-model="lessonTypesFilters"
                      :value="lessonType.code"
                    >
                      {{ lessonType.name_short }}
                    </b-checkbox>

                  </span>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          v-if="filteredStudios.length > 0"
          class="pt-2"
        >
          <transition-group
            name="studio-list"
            tag="div"
          >
            <div
              v-for="(studio, index) in filteredStudios"
              :key="studio.studio_id"
            >
              <p
                v-if="index == 0"
                class="pref"
              >
                {{ studio.pref }}
              </p>
              <p
                v-else-if="filteredStudios[index - 1].pref !== studio.pref"
                class="pref border-top"
              >
                {{ studio.pref }}
              </p>
              <div
                class="border-top"
                :class="{
                  'border-bottom': index === filteredStudios.length - 1,
                }"
              >
                <studio
                  :studio="studio"
                  :show-facilities="true"
                />
              </div>
            </div>
          </transition-group>
        </div>
        <div
          v-else
          class="pt-2"
        >
          <p class="message">
            該当のスタジオがありませんでした。
          </p>
        </div>
      </div>
      <!-- 動画 -->
      <div class="ytb-content pt-0 pt-md-5">
        <iframe
          loading="lazy"
          class="ytb-iframe"
          src="https://www.youtube.com/embed/PSz8sLOwuCw"
          title="zen placeのスタジオってどんなスタジオ？スタジオだけに目を向けて紹介！"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import { mapState } from 'vuex';
import PageHeader from '~/components/PageHeader.vue';

const headerImg = require('@/assets/images/studio/header.webp');

export default {
  scrollToTop: true,

  head() {
    return {
      title: 'スタジオ一覧',
      link: [
        { rel: 'canonical', href: 'https://www.zenplace.co.jp/studios' },
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            '東京・大阪を中心に、全国100店舗以上あるスタジオ一覧です。ピラティス専門、ヨガ専門、ホットヨガ、高強度トレーニングスタジオなど、どのスタジオも相互利用が可能です。自宅の近くや職場の近くなど、気分やご都合に合わせてお楽しみください。',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'スタジオ, 一覧, ゼンプレイス',
        },

      ],
    };
  },
  components: {
    PageHeader,
  },

  async asyncData({ app }) {
    // TODO: move to store and use that at first
    const studios = await app.$zenplaceApi.getStudios();
    // TODO: studio一覧取得API側で追加パラメタが指定された場合に返すようにする
    //       (SPA側で情報を加工して付加するのは避けたい。enterprise-api-v2に移設する際にその作業を含める)
    const [glStudios, pvStudios, mgStudios] = await Promise.all([
      app.$zenplaceApi.getStudios({ lesson_types: ['GL'] }),
      app.$zenplaceApi.getStudios({ lesson_types: ['PV'] }),
      app.$zenplaceApi.getStudios({ lesson_types: ['MG'] }),
    ]);
    studios.map((studio) => {
      studio.has_gl_lesson = glStudios.map((s) => s.studio_id).includes(studio.studio_id);
      studio.has_pv_lesson = pvStudios.map((s) => s.studio_id).includes(studio.studio_id);
      studio.has_mg_lesson = mgStudios.map((s) => s.studio_id).includes(studio.studio_id);
      return studio;
    });
    return {
      studios,
    };
  },
  layout: 'new',

  data() {
    const facilityFilters = this.$route.query.facility
      ? this.$route.query.facility.split(',')
      : [];
    const lessonTypesFilters = this.$route.query.lesson_type
      ? this.$route.query.lesson_type.split(',')
      : [];
    const textFilter = this.$route.query.filter ? this.$route.query.filter : '';
    const prefectureId = this.$route.query.prefecture_id
      ? parseInt(this.$route.query.prefecture_id, 10)
      : null;

    return {
      headerImg,
      textFilter,
      prefectureId,
      facilityFilters,
      lessonTypesFilters,
      typeFilters: {
        pilates: true,
        yoga: true,
        hot: true,
      },
      isActive: false,
    };
  },

  computed: {
    ...mapState(['prefectures', 'areas', 'brands', 'facilityTypes', 'lessonTypes']),

    // 都道府県の選択肢を取得
    prefecturesWithStudios() {
      const prefectureIds = _.compact(
        _.map(this.studios, (s) => s.prefecture_id),
      );

      return _.filter(this.prefectures, (p) => prefectureIds.includes(p.prefecture_id));
    },
    filteredStudios() {
      let { studios } = this;
      if (this.textFilter) {
        studios = studios.filter(
          (s) => s.studio_name.indexOf(this.textFilter) >= 0,
        );
      }

      if (this.prefectureId) {
        studios = studios.filter((s) => s.prefecture_id === this.prefectureId);
      }

      if (!this.typeFilters.yoga) {
        // ヨガ検索対象外
        if (!this.typeFilters.hot) {
          studios = studios.filter(
            (s) => s.brand_type
            && (s.brand_type.indexOf('pilates') >= 0
            || s.brand_type.indexOf('basi') >= 0),
          );
        } else {
          studios = studios.filter((s) => s.hot_or_normal && s.hot_or_normal.indexOf('hot') >= 0);
        }
      }
      if (!this.typeFilters.pilates) {
        // ピラティス検索対象外
        studios = studios.filter(
          (s) => s.brand_type
          && (s.brand_type.indexOf('yoga') >= 0
          || s.brand_type.indexOf('strong') >= 0),
        );
      }
      if (this.facilityFilters.length > 0) {
        studios = studios.filter((s) => {
          const types = (s.facility_type || '').split(',');
          let found = true;
          _.each(this.facilityFilters, (filter) => {
            if (!this.typeFilters.pilates) {
              if (filter === 'm' || filter === 'mg') {
                found = true;
              }
            } else if (!this.typeFilters.yoga) {
              if (filter === 'sh') {
                found = true;
              }
            } else if (!types.includes(filter)) {
              found = false;
            }
          });
          return found;
        });
      }
      if (this.lessonTypesFilters.length > 0) {
        studios = studios.filter((s) => {
          const hasLessonTypes = [];
          if (s.has_gl_lesson) { hasLessonTypes.push('GL'); }
          if (s.has_mg_lesson) { hasLessonTypes.push('MG'); }
          if (s.has_pv_lesson) { hasLessonTypes.push('PV'); }
          return hasLessonTypes.filter((type) => this.lessonTypesFilters.includes(type)).length > 0;
        });
      }

      return _.sortBy(studios, (s) => s.prefecture_id);
    },
    breadcrumbs() {
      return {
        data: [
          {
            name: 'TOP',
            path: '/',
          },
          {
            name: 'スタジオ一覧',
          },
        ],
      };
    },
  },

  methods: {
    active() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
<style lang='scss'>
@import '~assets/scss/newvariables';
.p-studio {
  h1.studio-h1 {
    font-size: 2.3rem;
  }
  .c-badge-close {
    height: 12px;
    margin-top: -4px;
    margin-left: 0.25em;
  }
  .studio-info {
    margin: auto;
    max-width: 400px;
  }
  .studio-info img {
    width: 100%;
  }
  .zen-select {
    background-color: #ddd;
  }
  .message{
    padding-top: 2em;
  }

  .c-studio-item {
    margin-right: 10px;
  }
  .studio-list-enter-active,
  .studio-list-leave-active {
    transition: all 0.25s;
  }
  .studio-list-enter, .studio-list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateX(150px);
  }
  .custom-select,
  .form-control,
  input {
    font-size: 16px;
  }
  .pref {
    padding-top: 2em;
    padding-bottom: 0.5em;
    &.border {
      border-top: 1px solid #dee2e6;
    }
  }
  .search-area {
    background: #f0f3f5;
    padding: 40px 50px 50px;
    @include tab{
      padding: 1em;
    }
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        height: auto;
        width: 24px;
      }
      span{
      color: $blue;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      margin-left: .5em;
      }
    }
    .box {
      background: $white;
      > div {
        padding: 20px;
        &:nth-child(1) {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        &:nth-child(2) {
          border-top: 1px solid #cccccc;
        }
        input[type='text'] {
          appearance: none;
          border: 1px solid #cdd6dd;
          height: 40px;
          padding: 0.5em 1em;
          width: 45%;
          &::placeholder {
            color: #cdd6dd;
          }
          @include tab{
            margin-bottom: 1em;
            width: 100%;
          }
        }
        .selectWrap {
          width: calc(50% - 10em);
          min-width: 10em;
          position: relative;
          @include tab{
            width: 50%;
          }
          &::before {
            content: '';
            border-top: 2px solid #98a6b5;
            border-right: 2px solid #98a6b5;
            display: block;
            height: 6px;
            position: absolute;
            right: 1em;
            transform: rotate(135deg);
            top: calc(50% - 3px);
            width: 6px;
            z-index: 1;
          }
        }
        select {
          appearance: none;
          background: transparent;
          border: 1px solid #cdd6dd;
          color: #707070;
          height: 40px;
          padding: 0.5em 1em;
          position: relative;
          min-width: 10em;
          width: 100%;
          z-index: 2;
        }

        dl {
          display: flex;
          @include tab{
            display: block;
          }
          dt {
            color: $blue;
            width: 10em;
             @include tab{
           width: 100%;
          }
          }
          dd {
            width: calc(100% - 10em);
            @include tab{
           width: 100%;
          }
            div {
              display: inline-block;
              padding-right: 2em;
              margin-bottom: 0.5em;
            }
          }
        }
        &.box1 {
          button {
            appearance: none;
            background-color: $blue;
            background-image: url('~assets/images/studio/icon_filter.svg');
            background-position: 10% center;
            background-size: auto 40%;
            background-repeat: no-repeat;
            border: none;
            color: $white;
            margin-left: 3em;
            padding-left: 1.5em;
            width: 8em;

            @include tab{
              margin-left: 0;
              width: 7em;
            }
            @include sp{
              font-size: pv(12);
              width: 8em;
            }

          }
        }
        &.box2 {
          position: relative;
          min-height: 6em;
        }
      }
    }
  }
  .badge.badge-temperature-hot {
    width: 7em;
  }
}
</style>
