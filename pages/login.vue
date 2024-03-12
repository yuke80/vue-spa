<template>
  <div class="">
    <div class="container py-5">
      <h1 class="py-5 text-center">
        会員ログイン
      </h1>
      <div class="my-5">
        <h2 class="mt-3 col-12">
          ■ アプリのご案内
        </h2>
        <p class="mt-5 d-block col-12">
          チケット残数確認や、zen placeの姉妹ブランドのレッスン予約も再ログイン不要で簡単にできます。
        </p>

        <img
          src="~assets/images/info/info_app.jpg"
          alt=""
          class="w-100 d-block mx-auto"
          style="max-width:600px;"
        >

        <h3
          class="pt-5 pb-3 font-weight-bold text-center t-blue"
        >
          ダウンロードはこちらから
        </h3>
        <div
          class="row mx-auto"
          style="max-width:700px;"
        >
          <a
            href="https://apps.apple.com/jp/app/id1473804275"
            target="_blank"
            class="d-block col-12 col-md-6 mx-auto btn-blue p-3 text-center zp-service-link"
          >iPhoneの方はこちら</a>

          <a
            href="https://play.google.com/store/apps/details?id=info.zenjp.zenplace"
            target="_blank"
            class="d-block col-12 col-md-6 mx-auto btn-blue p-3 text-center zp-service-link"
          >Androidの方はこちら</a>
        </div>
      </div>
      <hr>
      <div class="py-5">
        <h2 class="mt-3 col-12">
          ■ ブラウザ版マイページ
        </h2>
        <p class="mt-5 pb-3 d-block col-12">
          モバイル・PCのブラウザでマイページへのアクセスはこちら。
        </p>
        <a
          href="https://mypage.zenplace.co.jp/login/"
          target="_blank"
          class="d-block col-12 mx-auto col-md-3 btn-blue text-center p-3 zp-service-link"
        >マイページへ</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '会員ログイン',
      meta: [
        { hid: 'description', name: 'description', content: 'zen placeスタジオをいつもご利用ありがとうございます。レッスンのご予約はこちらのページから所属ブランドのログイン画面へどうぞ。電話や専用アプリもぜひご利用ください。スタジオでお会いできるのを楽しみにしています！' },
        { hid: 'keywords', name: 'keywords', content: 'ログイン,予約, ぜん' },
      ],

    };
  },
};

</script>

<style scoped>
a.zp-service-link{max-width: 250px; margin:10px auto; font-weight: 700; line-height: 47px;}
a.zp-service-link span{font-size:10px; font-weight:100; font-size:1.1rem;}

h2{font-size:20px; font-weight:bold;}
.t-blue{color:#006fb1;}
h3{font-size:18px;}

@media  only screen and (max-width: 600px){
  a.zp-service-link{margin:10px auto; line-height: 32px;}
}
</style>
