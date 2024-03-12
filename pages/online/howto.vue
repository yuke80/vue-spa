<template>
  <div class="p-online-private">
    <div class="container">
      <h1 class="sub-main-title text-center pt-5 pb-3">
        ビデオ会議システム「Zoom」をはじめて利用される会員様へ<br>
      </h1>
      <section class="section-pb">
        <div class="py-5 mb-4">
          <h2 class="text-center pb-5">
            〜Zoomの使い方〜
          </h2>
          <img
            src="~assets/images/online/howto/zoom_applogo.png"
            alt="zoom app"
            style="max-width:150px"
            class="d-block w-100 mx-auto"
          >
          <h4 class="pt-5 pb-3">
            ＜ 事前の準備 ＞
          </h4>

          <p class="pb-5">
            オンライン・レッスンで使う「パソコン」または「スマートフォン」にZoomをダウンロードします。<br>
            <br>
            <b>▼ パソコンの場合</b> <br>
            <img
              src="~assets/images/online/howto/pc_zoom.png"
              alt="PCの場合"
              style="border:1px solid #e3e3e3; max-width:500px;"
              class="w-100 d-block my-3"
            >
            ①
            URLから「ミーティング用Zoomクライアント」の下のダウンロードをクリック。<br>
            <a
              href="https://zoom.us/download#client_4meeting"
              class="blue-link"
              target="_blank"
            >https://zoom.us/download#client_4meeting</a><br><br>
            ② 「実行」をクリック。ダウンロードが始まり100%になるまで待ちます。<br><br>
            ③ ダウンロードが完了したら「無料サインアップは無料です」のボタンから、ご自身のアカウント登録を行います。<br><br><br>
            <b>▼ スマートフォンの場合</b><br><br>
            ① アプリをダウンロードします<br>
            <a
              href="https://play.google.com/store/apps/details?id=us.zoom.videomeetings&hl=ja"
              class="btn btn-primary p-3 w-100 btn-download"
              target="_blank"
            >Android用ダウンロード</a>
            <a
              href="https://apps.apple.com/jp/app/zoom-cloud-meetings/id546505307"
              class="btn btn-primary p-3 w-100 btn-download"
              target="_blank"
            >iPhone用ダウンロード</a><br><br class="pc">
            ② ダウンロードが完了したら、無料サインアップをします。
          </p>
          <h4 class="pb-3">
            ＜ レッスン受講 ＞
          </h4>
          <p>
            ① レッスン開始10分前に、マイページ > 予約レッスン詳細に「オンライン出席」というボタンが青くなり押せるようになります。
          </p>
          <div class="row">
            <div class="col-md-6 col-12">
              <span class="d-block text-center font-weight-bold pb-3">PC</span><img
                src="~assets/images/online/howto/pc_mypage.png"
                alt=""
                class="w-100 d-block mx-auto mb-3 pc-img"
              >
            </div>
            <div class="col-md-6 col-12">
              <br class="sp">
              <span class="d-block text-center font-weight-bold pb-3">スマホ</span><img
                src="~assets/images/online/howto/sp_mypage.png"
                alt=""
                class="w-100 d-block mx-auto mb-3 sp-img"
              >
            </div>
          </div>
          <p class="pt-5">
            ② ボタンをクリックすると、そのままZoomレッスンのRoomに入室できます。<br>
          </p>
        </div>
      </section>
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
  </div>
</template>

<script>
export default {

};
</script>

<style scoped lang="scss">
p{line-height: 2.5rem;}
a.blue-link{color:#0066a4; text-decoration:underline;}
.btn-download{max-width:250px; display:inline-block; font-weight:bold; margin:10px; background-color:#0e71eb;}
.pc-img{border:1px solid #e3e3e3; max-width:400px;}
.sp-img{border:1px solid #e3e3e3; max-width:300px;}
.sp{display:none;}
@media screen and(max-width:767px) {
.pc{display:none;}
.sp{display:block;}
.btn-download{max-width:250px; display:block; font-weight:bold; margin:15px auto;}
.sp-img{ max-width:100%;}
}
</style>
