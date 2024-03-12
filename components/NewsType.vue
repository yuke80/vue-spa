<template>
  <span
    class="badge"
    :class="`badge-news-${newsType}`"
  >
    {{ $store.state.newsTypeNames[news.news_type] }}
  </span>
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
@import "node_modules/bootstrap/scss/mixins";
@import '~assets/scss/variables';

.badge-news-info {
  border: $zenblue 1px solid;
  color: $zenblue;
}
.badge-news-ws {
  border: $zengreen 1px solid;
  color: $zengreen;

}
.badge-news-alert {
  border: $zenred 1px solid;
  color: $zenred;
}
.badge-news-report {
  // TODO: change
  border: gray 1px solid;
  color: gray;
}

</style>
