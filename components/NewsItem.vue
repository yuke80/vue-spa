<template>
  <nuxt-link
    :to="`/news/${newsType}/${news.news_id}`"
    class="media py-4 px-3 c-news-preview"
    :class="`c-news c-news-${newsType}`"
  >
    <div class="media-body">
      <div>
        <news-type :news="news" />
        {{ news.indication_start_date | dateDots }}
      </div>
      <h5 class="mt-3">
        {{ news.title }}
      </h5>
    </div>

    <div class="arrow">
      ＞
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

<style lang="scss">
@import '~assets/scss/newvariables';

  .media-body {
    h5 {
      @include sp{
        font-size: pv(16);
      }
    }
  }
.c-news-preview{
  align-items: center;
}
.arrow{
  display: block;
  width: 0.7em;
    height: 0.7em;
    border-top: 2px solid #2e6eac;
    border-right: 2px solid #2e6eac;
    padding: 0 !important;
    transform: rotate(45deg);
    text-indent: -9999px;
}

</style>
