<template>
  <div class="p-studio-schedule container-except-sm pt-5">
    <div id="Breadcrumb">
      <div class="l-new-container">
        <ul>
          <li class="">
            <a
              href="/"
              class="nuxt-link-active"
            > TOP </a>
          </li>
          <li class="flex-1">
            <nuxt-link to="/studios">
              スタジオ一覧
            </nuxt-link>
          </li>
          <li class="flex-1">
            <nuxt-link :to="`/studios/${$route.params.studioId}`">
              <studio-name
                :studio="studio"
                :show-zenplace-prefix="true"
              />
            </nuxt-link>
          </li>
          <li>
            <span>スケジュール</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="text-center mt-5 pt-5">
      <div>
        <fa-icon
          icon="calendar-alt"
          class="c-studio-page-icon"
          size="3x"
        />
      </div>
      <h1 class="title-underlined mt-4 pb-3">
        スケジュール
      </h1>
      <p class="sub-title">
        早朝から夜まで豊富なレッスン。ライフスタイルに合わせてレッスンをお選びいただけます。<br class="pc">朝のレッスン受講で気持ちよく1日をはじめ、夜は1日の疲れをリフレッシュなど組み合わせも自由！<br class="pc">下のボタンクリックでレッスンの種類ごとのスケジュールに切り替わります。
      </p>
    </div>

    <client-only>
      <lesson-calendar
        :schedules="schedules"
        :studio="studio"
        :closed-days="closedDays"
        @changed="refetch"
      />
    </client-only>

    <div style="text-align:center; margin: 15px auto; padding:20px 15px">
      <nuxt-link
        to="/online"
        style="text-align:center; display:block; margin:0 auto; max-width:400px;"
        target="_blank"
      >
        <img
          src="~assets/images/studio/sls_ban.jpg"
          alt="zen place studio live streaming"
          style="width:100%; max-width:400px;"
        >
      </nuxt-link>
    </div>
    <div class="container pb-5">
      <b-embed
        type="iframe"
        aspect="16by9"
        src="https://www.youtube.com/embed/H9u_-qMeqlY?rel=0"
        allowfullscreen
      />
    </div>
    <div class="container py-5">
      <h2 class="pb-5 text-center">
        オンラインレッスン<br class="sp">予約方法
      </h2>
      <b-embed
        type="iframe"
        aspect="16by9"
        src="https://www.youtube.com/embed/u1cxhXpjIGI?rel=0"
        allowfullscreen
      />
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  head() {
    return {
      title: this.metaStudioTitleSchedule,
    };
  },

  scrollToTop: true,

  async asyncData(context) {
    const { app, params } = context;
    const studio = await app.$zenplaceApi.getStudio(params.studioId);
    const schedules = await app.$zenplaceApi.getStudioSchedule(studio.studio_id);
    const closedDays = await app.$zenplaceApi.getStudioClosedDays(studio.studio_id);
    return {
      studio,
      schedules,
      closedDays,
    };
  },

  computed: {

    metaStudioTitleSchedule() {
      const brandTypes = (this.studio.brand_type || '').split(',');
      if (brandTypes.includes('basi')) {
        return `ピラティススタジオ ${this.studio.studio_name} スケジュール - zen place`;
      }
      if (brandTypes.includes('pilates')) {
        return `ピラティススタジオ ${this.studio.studio_name} スケジュール - zen place`;
      }
      if (brandTypes.includes('yoga')) {
        return `ヨガスタジオ ${this.studio.studio_name} スケジュール - zen place`;
      }
      if (brandTypes.includes('strong')) {
        return `ホットヨガスタジオ ${this.studio.studio_name} スケジュール - zen place`;
      }
      return `${this.studio.studio_name}スタジオ スケジュール - zen place`;
    },
  },

  methods: {
    async refetch(date) {
      const schedules = await this.$zenplaceApi.getStudioSchedule(this.studio.studio_id, moment(date).format('YYYY-MM-DD'));
      this.schedules = schedules;
    },
  },

};
</script>

<style lang="scss" scoped>
@import "node_modules/bootstrap/scss/mixins";
@import '~assets/scss/variables';
@import "~assets/scss/newvariables";

.p-studio-schedule {
  font-size: 8px;
}

.btn-white{max-width: 80px;}

@media (min-width: map-get($grid-breakpoints, 'sm')) {
  .p-studio-schedule {
    font-size: 12px;

  }
}

#Breadcrumb{
  padding: 0;
  @include sp{
    font-size: 2.66667vw;
  }
  ul{
    flex-wrap: wrap;
    li{
      span{
        &::after{
          display: none;
        }
      }
    }
  }

}
.sub-title {
  padding: 0 15px;
  margin-bottom: 5rem;
  color: #535353;
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 1.5;
  @include sp {
   font-size: 1.5rem;
  }
  .pc { display:  block;}
  .sp { display: none;}
@media screen and (max-width: 768px) {
  .pc { display: none;}
  .sp { display: block;}
}

}
</style>
