<template>
  <div class="p-workshops container pb-5">
    <div class="my-5 academy-block p-4 mx-auto">
      <div class="">
        <strong class="d-block text-center pb-3">zen place academyについて</strong>
        <img
          loading="lazy"
          src="~assets/images/top_new/pilates/pilatesno1-01.jpg"
          alt=""
          style="width:120px; "
          class="d-block mx-auto float-left pr-3 py-2"
        >
        <p class="pb-3 text-muted">
          知識を深めたい方に学びの場も提供しています。ピラティス・ヨガインストラクター資格コースや様々なワークショップを開催しています。
        </p>
        <a
          href="https://academy.zenplace.co.jp/"
          class="d-block text-right pb-3"
          style="text-decoration:underline;"
        >
          詳細はこちら
        </a>
      </div>
    </div>

    <h2 class="pt-5 title-underlined">
      <span class="d-block pb-3">ワークショップ・特別レッスン</span>お知らせ
    </h2>

    <div>
      <div
        v-for="(n) in sortedNews.slice(0,7)"
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
    const workshops = await app.$zenplaceApi.getNewsInCategory('ws');
    return {
      studio,
      workshops,
    };
  },

  computed: {

    filteredNews() {
      return _.filter(this.workshops, (n) => n.brand_id === 1 || n.brand_id === 4);
    },

    sortedNews() {
      return _.sortBy(this.filteredNews, (n) => -moment(n.indication_start_date).valueOf);
    },

  },

};
</script>

<style>

h2 span{ font-size:1.8rem;}
.academy-block{ background-color:#f3f3f3; max-width:800px;}

@media screen and (max-width:768px){

}

</style>
