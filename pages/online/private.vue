<template>
  <div class="p-online-private">
    <div class="container">
      <h1 class="sub-main-title text-center pt-5 pb-3">
        ビデオ会議システム「zoom」をはじめて利用される会員様へ<br>
      </h1>
      <section class="section-pb">
        <div class="py-5 mb-4">
          <h2 class="text-center pb-5">
            〜zoomの使い方〜
          </h2>
          <h4 class="pb-3">
            ＜ 事前の準備 ＞
          </h4>
          <p class="pb-5">
            オンライン・レッスンで使う「パソコン」または「スマートフォン」にzoomをダウンロードします。<br>
            <br>
            ▼ パソコンの場合<br>
            ① URLから「ミーティング用Zoomクライアント」の下のダウンロードをクリック。<br>
            <a
              href="https://zoom.us/download#client_4meeting"
              class="blue-link"
              target="_blank"
            >https://zoom.us/download#client_4meeting</a><br>
            ② 「実行」をクリック。ダウンロードが始まり100%になるまで待ちます。<br>
            ③ ダウンロードが完了したら「無料サインアップは無料です」のボタンから、ご自身のアカウント登録を行います。<br><br>
            ▼ スマートフォンの場合<br>
            ① アプリをダウンロードします<br>
            Android：<a
              href="https://play.google.com/store/apps/details?id=us.zoom.videomeetings&hl=ja"
              class="blue-link"
              target="_blank"
            >https://play.google.com/store/apps/details?id=us.zoom.videomeetings&hl=ja</a><br>
            iPhone：<a
              href="https://apps.apple.com/jp/app/zoom-cloud-meetings/id546505307"
              class="blue-link"
              target="_blank"
            >https://apps.apple.com/jp/app/zoom-cloud-meetings/id546505307</a><br>
            ② ダウンロードが完了したら、無料サインアップをします。
          </p>
          <h4 class="text-center pt-5">
            ＜ よくある質問 ＞
          </h4>
          <div

            role="tablist"
            class="py-5"
          >
            <b-card
              no-body
              class="mb-1"
            >
              <b-card-header
                header-tag="header"
                class="p-1"
                role="tab"
              >
                <b-button
                  v-b-toggle.accordion-1a
                  block
                  variant="info"
                >
                  <span class="question-span">Q. </span>zoomが繋がりません。
                </b-button>
              </b-card-header>
              <b-collapse
                id="accordion-1a"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  インターネットが繋がっていないまたはアプリのアップデートが必要な場合があります。このようなトラブルはスムーズに受講できないことがありますので、レッスン前にご確認ください。
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card
              no-body
              class="mb-1"
            >
              <b-card-header
                header-tag="header"
                class="p-1"
                role="tab"
              >
                <b-button
                  v-b-toggle.accordion-1b
                  block
                  variant="info"
                >
                  <span class="question-span">Q. </span>レッスン中はカメラをOFFにしても良いですか？
                </b-button>
              </b-card-header>
              <b-collapse
                id="accordion-1b"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  はい、ON（マットやご自身の動きが映る形でのご参加）を推奨しておりますが、OFFでのご参加でも大丈夫です。
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card
              no-body
              class="mb-1"
            >
              <b-card-header
                header-tag="header"
                class="p-1"
                role="tab"
              >
                <b-button
                  v-b-toggle.accordion-1c
                  block
                  variant="info"
                >
                  <span class="question-span">Q. </span>途中でネットやアプリの問題でレッスンルームから離脱してしまいましたが、再度参加できますか？
                </b-button>
              </b-card-header>
              <b-collapse
                id="accordion-1c"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  はい、再入場は可能です。
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card
              no-body
              class="mb-1"
            >
              <b-card-header
                header-tag="header"
                class="p-1"
                role="tab"
              >
                <b-button
                  v-b-toggle.accordion-1d
                  block
                  variant="info"
                >
                  <span class="question-span">Q. </span>レッスンのレコーディングしても大丈夫ですか？
                </b-button>
              </b-card-header>
              <b-collapse
                id="accordion-1d"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  レッスンのレコーディングはお控えください。<br>
                  レッスンの映像や音声につきましては弊社の著作物となるため、ご自身のSNSやYouTube、ブログなどにはご使用いただけません。
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card
              no-body
              class="mb-1"
            >
              <b-card-header
                header-tag="header"
                class="p-1"
                role="tab"
              >
                <b-button
                  v-b-toggle.accordion-1e
                  block
                  variant="info"
                >
                  <span class="question-span">Q. </span>通信量はどれくらいかかりますか？
                </b-button>
              </b-card-header>
              <b-collapse
                id="accordion-1e"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  お使いの端末によって変動しますが、150MB（15分）〜400MB（50分）ほどになります。
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped lang="scss">
@import '~assets/scss/newvariables';

p{line-height: 2.5rem;}
a.blue-link{color:#0066a4; text-decoration:underline;}

/*--FAQ--*/
.lp-faq h2{position:relative; font-family: $mincho;
color:#0065a3;}

.card, .card-header{border:none; border-radius:0; background-color: #fff!important;}

.card-header .btn:after {
       font-family: icomoon!important;
        content: "\e900";
    position: absolute;
    text-align: center;
    font-size: 25px;
    right: 15px;
    bottom: 20px;
    line-height:30px;
    color: #0065a3;
     -moz-transition: all .5s ease;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
      -ms-transform: rotate(-180deg);
    -moz-transform: rotate(-180deg);
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg);
}
 .card-header .btn.collapsed:after {
     -ms-transform: rotate(0);
    -moz-transform: rotate(0);
    -webkit-transform: rotate(0);
    transform: rotate(0);
}

.card-header .btn{
  position:relative;
  margin:0 auto;
  max-width:800px;
  border-radius: 0;
  text-align:left;
    padding: 20px 10px ;
    font-size: 18px;
    border: none;
    color:#333;
    font-weight: normal;
    background-color: #fff;
     -webkit-box-shadow: 2px 1px 10px -8px rgba(0,0,0,0.75);
-moz-box-shadow: 2px 1px 10px -8px rgba(0,0,0,0.75);
box-shadow: 2px 1px 10px -8px rgba(0,0,0,0.75);
}
.card-header .btn:focus, .card-header .btn:active, .btn-info:focus, .btn-info:active, .btn-info:not(:disabled):not(.disabled):active, .card-header .btn:not(:disabled):not(.disabled):active {
  color:#0065a3;
  background-color: #fff!important;
  border:none;
  box-shadow:none;

}
.card-body{max-width:800px; margin:0 auto;}
.card-header .btn .question-span{color:#0065a3; font-size:25px; display:inline-block; padding-right:10px;}

@media screen and (max-width:768px){

/*--faq--*/

.card-header .btn:after {
    position:absolute;
    display:block;
    bottom:10px;
    left:0;
    right:0;
    text-align:center;
    font-size:20px;
    line-height:15px;
    color: #0065a3;
     -moz-transition: all .5s ease;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
}

 .card-header .btn.collapsed:after {
     -ms-transform: rotate(0);
    -moz-transform: rotate(0);
    -webkit-transform: rotate(0);
    transform: rotate(0);
}

.card-header .btn{
  position:relative;
  margin:0 auto;
  max-width:800px;
  border-radius: 0;
  text-align:left;
    padding: 20px 10px 35px 10px;
    font-size: 16px;
    border: none;
    color:#333;
    font-weight: normal;
    background-color: #fff;
     -webkit-box-shadow: 2px 1px 10px -8px rgba(0,0,0,0.75);
-moz-box-shadow: 2px 1px 10px -8px rgba(0,0,0,0.75);
box-shadow: 2px 1px 10px -8px rgba(0,0,0,0.75);
}

}
</style>
