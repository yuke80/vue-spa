<template>
  <div class="p-news">
    <PageHeader
      title="お知らせ"
      :img="headerImg"
    />

    <div class="container py-5">
      <div
        v-if="newsPiece"
        class="mb-3"
      >
        <news-type :news="newsPiece" /><br>
        {{ newsPiece.indication_start_date | dateDots }}
      </div>
      <h2 v-if="newsPiece">
        {{ newsPiece.title }}
      </h2>
      <hr class="mb-5">
      <div
        v-if="newsPiece.news_image_1"
        class="text-center"
      >
        <img
          :src="newsPiece.news_image_1"
          alt=""
          class="w-100"
          style="max-width:500px;"
        >
      </div>
      <div
        v-if="newsPiece"
      >
        <div class="row pt-5">
          <div class="col">
            <div
              class="p-news-main-text"
              v-html="newsPiece.detail"
            />
          </div>
        </div>
        <div
          v-if="newsPiece.news_type === 103"
          class="my-5 workshop-block p-4"
        >
          <span class="d-block text-center block-title title-underlined mb-5 pt-3 pb-2">詳細情報</span>
          <p class="font-weight-bold pb-3">
            {{ newsPiece.title }}
          </p>
          <p><span class="ws-cat">担当者</span> {{ newsPiece.tanto }}</p>
          <p><span class="ws-cat">日付</span> {{ newsPiece.date_append }}</p>
          <p><span class="ws-cat">開催スタジオ</span>{{ newsPiece.studio }}</p>
          <p><span class="ws-cat">参加費用</span> {{ newsPiece.price }}</p>
          <p>
            <span
              v-if="(newsPiece.application_inquiry).includes('http')"
            >
              <a
                :href="newsPiece.application_inquiry"
                target="_blank"
                class="d-block mx-auto text-center btn-apply mt-5"
              >お申し込みはこちら
                <fa-icon
                  icon="caret-right"
                  size="1x"
                  class="ml-2"
                /></a>
            </span>
            <span v-else>{{ newsPiece.application_inquiry }}</span>
          </p>
        </div>
      </div>
      <div
        v-else
        class="row"
      >
        <div class="col">
          お知らせはありません。<br>
          <br>
        </div>
      </div>

      <nuxt-link
        to="/news"
        style="text-decoration:underline;"
      >
        一覧に戻る
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue';
import NewsType from '@/components/NewsType.vue';

const headerImg = require('@/assets/images/common/faq.jpg');

export default {
  layout: 'new',

  components: {
    PageHeader,
    NewsType,
  },

  async asyncData({
    app, params, route, redirect,
  }) {
    // categoryInfo以外のお知らせも/news/info/{newsId}でアクセス
    const isInfoCategory = params.category === 'info';
    if (!isInfoCategory) {
      return redirect({
        name: route.name,
        params: {
          ...params,
          category: 'info',
        },
      });
    }

    const newsPiece = await app.$zenplaceApi.getNewsById(params.newsId);
    return {
      newsPiece,
    };
  },

  data() {
    return {
      headerImg,
    };
  },

};
</script>

<style>
a {word-break: break-all;}
.p-news-main-text,.p-news-main-text h4, .p-news-main-text a {font-size: 16px;}
.workshop-block{
  font-size:1.6rem;
  background-color:#f1f1f1;
  font-family:$gothic;
}
.block-title{font-size:2rem;}
.ws-cat{background-color:#0265a4; padding:3px; color:#fff; text-align:center; width:100px; display:inline-block; font-size:1.5rem; margin-right:10px; font-weight:bold;}
.btn-apply{background-color:#333; color:#fff; padding:15px; max-width:350px; transition: ease-in .2s; }
.btn-apply:hover{color:#fff; background-color:#0265a4; }
</style>
