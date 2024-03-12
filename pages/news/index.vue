<template>
  <div class="container">
    <h2 class="title-underlined">
      お知らせ
    </h2>
    <div>
      <div
        v-for="(n, index) in sortedNews.slice(0,100)"
        :key="n.news_id"
        class="border-top"
        :class="{
          'border-bottom': index === sortedNews.length - 1
        }"
      >
        <news-item :news="n" />
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import moment from 'moment';

export default {
  async asyncData({ app }) {
    const studio = await app.$zenplaceApi.getStudio();
    const news = await app.$zenplaceApi.getNewsInCategory('info');
    const alerts = await app.$zenplaceApi.getNewsInCategory('alert');
    return {
      studio,
      news,
      alerts,
    };
  },

  computed: {
    filteredNews() {
      const all = this.news
        .concat(this.alerts);
      return _.filter(all, (n) => n.brand_id === 4 || n.brand_id === 1);
    },

    sortedNews() {
      return _.sortBy(this.filteredNews, (n) => -moment(n.indication_start_date).valueOf);
    },

  },

};
</script>

<style>

</style>
