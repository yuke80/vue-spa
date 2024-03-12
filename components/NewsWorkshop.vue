<template>
  <nuxt-link
    :to="`/news/${newsType}/${news.news_id}`"
    class="c-workshop_single"
  >
    <div class="head d-flex align-items-center">
      <span class="label-dark mr-4">ワークショップ</span>
      <time>
        {{ news.indication_start_date | dateDots }}
      </time>
    </div>
    <div class="title d-flex flex-fill justify-content-between">
      <div
        v-if="news.news_image_1"
        class="pr-3"
        style="width:130px;"
      >
        <img
          :src="news.news_image_1"
          class="w-100"
          style="height:auto;"
        >
      </div>
      <div class="mr-3">
        {{ news.title }}
      </div>
      <img
        class="ml-auto"
        loading="lazy"
        style="height: 1em; margin-top: 0.5rem; width: auto;"
        src="~assets/images/common/icon_arrow-right.svg"
      >
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      required: true,
    },
  },

  computed: {
    newsType() {
      return this.$store.state.newsTypes[this.news.news_type];
    },
  },

};
</script>

<style lang="scss" scoped>
@import '~assets/scss/newvariables';

.p-top-workshop-news{

    padding-top: 100px;
    padding-bottom: 80px;

    @include sp{
      padding: pv(50) pv(25) pv(40);
    }

    h2{
      margin-bottom: 5rem;

      @include sp{
        margin-bottom: pv(36);
      }
    }

    .c-workshop_single{
      display: block;
      font-size: 1.8rem;
      max-width: 800px;
      margin-left: auto;
      padding-bottom: 2rem;
      margin-bottom: 2.6rem;
      margin-right: auto;
      border-bottom: 1px solid $gray-70;
      :last-child {
        margin-bottom: 0;
      }

      @include sp{
        padding-bottom: pv(12);
        margin-bottom: pv(17);
      }

      .head{
        margin-bottom: 1rem;
        font-size: 1.3rem;

        .label-dark{
        display: inline-block;
        background: #353535;
        color: #fff;
        padding: .3em 1.2em;
        }

        .time{
          font-size: 1.6rem;

        }

        @include sp{
          justify-content: space-between;

          .label-dark{
            font-size: pv(14);
            padding: pv(7) pv(9);
          }
        }
      }

      .title{
        line-height: 1.6;
        font-size: 1.8rem;

        @include sp{
          font-size: pv(14);
          line-height: pv(25);
        }
      }

      img{
        height: 1em;
        margin-top: .5rem;
        width: auto;
      }

    }// .c-news_single
    .safety{
      margin-top: 6rem;
      max-width: 440px;
      margin-left: auto;
      margin-right: auto;

      @include sp{
        margin-top: pv(30);
      }

      img{
        width: 100%;
      }
    }

  }// .p-top-worshop

</style>
