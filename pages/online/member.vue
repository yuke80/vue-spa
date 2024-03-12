<template>
  <div class="p-online">
    <section class="p-online-mv pb-5">
      <div class="l-new-container">
        <div class="circle">
          NEW
        </div>
        <h1 class="copy-ja">
          <span class="d-block pb-3">オンラインでヨガ・ピラティス</span>
          オンライン専用会員
        </h1>
        <p><br>全国約100スタジオの全ての<br class="d-none d-sp-block">レッスンが受講可能</p>
        <nuxt-link
          v-scroll-to="'#price'"
          to
          class="btn-blue"
        >
          オンライン会員になる
        </nuxt-link>
      </div>
    </section>
    <section class="p-online-intro py-5">
      <div
        class="l-new-container py-5 mx-auto"
        style="max-width:1000px;"
      >
        <p class="pb-5">
          近くにスタジオがない方、今は外出を控えている方も、入会からカウンセリングまで全てオンラインで完結することができ、ご自宅からzen placeのレッスンを受講することが可能です。
        </p>
        <div class="pb-5 online-recommend">
          <div class="bg-white">
            <h2 class="font-weight-bold pb-5 text-center">
              こんな方におすすめ！
            </h2>
            <div class="content">
              <p class="font-weight-bold pb-3">
                ヨガ・ピラティスをやりたいけど
              </p>
              <ul>
                <li>近くにスタジオがない。。。</li>
                <li>時間が読めない。。。</li>
                <li>移動が大変。。。</li>
                <li>レッスン動画だと続かない。。。</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="p-online-about"
    >
      <div class="l-new-container py-5">
        <div class="cf" />
        <h2 class="c-header-border-left py-5">
          zen place<br class="sp">オンラインの特徴
        </h2>
        <div class="cf" />
        <h3 class="pb-3 pl-md-5">
          家で本格的にヨガ・ピラティスのレッスンが受けられます。
        </h3>
        <div class="row my-5">
          <div class="col-12 col-md-4 mb-3 p-0">
            <img
              src="~assets/images/online/member/online_01.jpg"
              loading="lazy"
              class="w-100"
            >
          </div>
          <div class="col-12 col-md-6 mb-3 bg-white py-5">
            <h4 class="pb-3">
              ヨガ・ピラティスの専門スタジオからライブ中継
            </h4>
            <p>
              全国約100スタジオ・週3000スタジオグループレッスンが受講可能！<br>
              早朝6:00-よる23:00まで幅広く豊富なレッスンをご用意しています。
            </p>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-12 col-md-4 mb-3 p-0">
            <img
              src="~assets/images/online/member/online_02.jpg"
              loading="lazy"
              class="w-100"
            >
          </div>
          <div class="col-12 col-md-6 mb-3 bg-white py-5">
            <h4 class="pb-3">
              インストラクターがLIVEで動きを見てしっかりコミュニケーション！
            </h4>
            <p>スタジオとLIVEなので、しっかりコミュニケーションをとりながら参加できます。</p>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-12 col-md-4 mb-3 p-0">
            <img
              src="~assets/images/online/member/online_03.jpg"
              loading="lazy"
              class="w-100"
            >
          </div>
          <div class="col-12 col-md-6 mb-3 bg-white py-5">
            <h4 class="pb-3">
              全てオンラインで完結！
            </h4>
            <p>入会手続きからレッスン、カウンセリングまでスタジオに来ることなく、ご自宅から行っていただけます。</p>
          </div>
        </div>
      </div>
    </section>
    <section class="c-new-service bg-blue text-white py-5">
      <div class="l-new-container py-5">
        <h2 class="mb-5">
          オンライン・フリー会員限定
        </h2>
        <div class="row">
          <div class="col-12 col-md-4 mb-3">
            <img
              src="~assets/images/online/member/online-private.jpg"
              loading="lazy"
              class="w-100"
            >
          </div>
          <div class="col-12 col-md-8 info">
            <h3 class="font-weight-bold py-3">
              オンラインカウンセリング＆<br>プライベートレッスン
            </h3>
            <p class="text-white">
              オンラインでもしっかりサポートします。「オンラインフリー」会員限定にインストラクターと一緒に個人レッスンができます。レベル、状態や目標に合わせて、オリジナルメニューを行います。
            </p>
          </div>
        </div>
      </div>
    </section>
    <section
      id="price"
      class="p-online-price"
    >
      <div class="container py-5">
        <h2 class="c-header-border-left py-5">
          料金プラン
        </h2>
        <div class="cf" />
        <div class="price-group mx-auto pb-5">
          <p class="text-left pb-3">
            ※価格が全て税込です。
          </p>

          <div class="plan-cont">
            <div class="pb-3">
              <span class="plan-name">
                オンラインフリー</span> <span class="p-price float-right"> 14,960<span>円/月</span></span>
            </div>
            <div class="plan-info">
              <strong>オンライングループレッスン受け放題</strong><br>
              + オンラインカウンセリング1回（3ヶ月に1回）<br>
              + オンラインプライベートレッスン1回（3ヶ月に1回）<br>
            </div>
          </div>
          <div class="plan-cont">
            <div class="pb-3">
              <span class="plan-name">
                オンライン 月6</span> <span class="p-price float-right"> 13,200<span>円/月</span></span>
            </div>
            <div class="plan-info">
              <strong>オンライングループレッスン受講月6回</strong><br>
            </div>
          </div>
          <div class="plan-cont">
            <div class="pb-3">
              <span class="plan-name">
                オンライン 月4</span> <span class="p-price float-right">  9,625<span>円/月</span></span>
            </div>
            <div class="plan-info">
              <strong>オンライングループレッスン受講月4回</strong><br>
            </div>
          </div>

          <div class="mt-5 other-lesson">
            <p>初回のカウンセリングは受講方法、レッスンメニュー、目標などについてのご案内になります。</p>
            <p>スタジオでのレッスンはチケット購入で受講可能です。詳しくはスタジオにお問い合わせください。</p>
          </div>
        </div>
        <div class="choose-type my-5 py-5 px-3 mx-auto">
          <h3 class="pb-5 text-center font-weight-bold">
            オンライン専用会員になる
          </h3>
          <b-button
            pill
            class="d-block mx-auto btn-member"
            onclick="location.href='/register_online/mail_auth.php?type=pilates'"
          >
            入会手続きへ
          </b-button>

          <!-- <b-modal
            v-model="show"
            size="lg"
            centered
            hide-header
            title="初回カウンセリング"
          >
            <div class="container py-5">
              <h3 class="pb-5 text-center font-weight-bold">
                初回レッスン
              </h3>
              <p class="pb-3">
                初めて受講されるご希望のレッスンタイプを選んでください。ご入会後に受講方法、メニューなどについて案内いたします。
              </p>
              <div class="row mx-auto text-center btn-row">
                <div class="col-6 px-2 mb-5">
                  <a
                    href="https://www.zenplace.co.jp/register_online/mail_auth.php?type=pilates"
                    class="btn-blue_border"
                    style="max-width:300px;"
                  >ピラティス</a>
                </div>
                <div class="col-6 px-2 mb-5">
                  <a
                    href="https://www.zenplace.co.jp/register_online/mail_auth.php?type=yoga"
                    class="btn-blue_border"
                    style="max-width:300px;"
                  >ヨガ</a>
                </div>
              </div>
              <p class="info-txt">
                ※ご入会後にヨガ・ピラティス、全てのレッスンが受講できます。
              </p>
            </div>
            <template #modal-footer>
              <div class="w-100 text-center">
                <b-button
                  variant="light"
                  size="sm"
                  class="p-3"
                  @click="show=false"
                >
                  ページに戻る
                </b-button>
              </div>
            </template>
          </b-modal> -->
        </div>
      </div>
    </section>

    <section
      class="p-online-about"
    >
      <div class="l-new-container py-5">
        <h2 class="c-header-border-left py-5">
          zen placeの<br>オンラインレッスン
        </h2>
        <div class="cf" />
        <div class="c-nums-white">
          <div class="c-nums-white_single">
            全国約100スタジオ、<br class="d-sp-none">週3,000以上の<br
              class="d-none d-sp-block"
            >
            スタジオグループ<br
              class="d-sp-none"
            >レッスンをLive中継
          </div>
          <div class="c-nums-white_single">
            参加時間は<br class="d-sp-none">早朝6時〜22時まで<br class="d-sp-none">選び放題！
          </div>
          <div class="c-nums-white_single">
            双方向の<br class="d-sp-none">Live Streamingで<br class="d-sp-none">見てもらえる
          </div>
        </div>
      </div>
    </section>
    <section class="p-online-video">
      <div class="l-new-container">
        <h2 class="c-header-orange-border">
          <span class="orange">30秒</span>でわかる
          <div>
            zen placeオンラインレッスン
          </div>
        </h2>
        <div>
          <b-embed
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/H9u_-qMeqlY?rel=0"
            allowfullscreen
          />
        </div>
      </div>
    </section>

    <section class="p-online-usage bg-light-gray">
      <div class="l-new-container">
        <h2 class="c-header-border-left py-5">
          流れ
        </h2>
        <div class="cf" />
        <div class="row online-flow">
          <div class="col-10 mx-auto mb-5">
            入会手続き
          </div>

          <div class="col-10 mx-auto mb-5">
            初回カウンセリング<br>
            日程調整
          </div>
          <div class="col-10 mx-auto mb-5">
            初回オンラインカウンセリング（30分）
          </div>
          <div class="col-10 mx-auto mb-5">
            オンラインレッスン予約
          </div>
        </div>
      </div>
    </section>

    <section
      class="p-online-section"
    >
      <h2 class="c-header-border-bottom mb-5">
        {{ faq.title }}
      </h2>
      <div class="l-new-container pb-5">
        <FaqSingle
          v-for="(f, i) in faq.qa"
          :key="i"
          :qa="f"
        />
      </div>
    </section>
  </div>
</template>

<script>
import FaqSingle from '~/components/FaqSingle.vue';

const headerImg = require('@/assets/images/common/faq.jpg');

export default {
  head() {
    return {
      title: 'オンライン専用会員',
      meta: [
        { hid: 'og:title', property: 'og:title', content: 'オンライン専用会員' },
        { hid: 'description', name: 'description', content: 'ヨガピラティスをやりたいけど近くにスタジオがない方、今は外出を控えている方におすすめ！ご自宅から専門スタジオのレッスンをオンラインで受講ができます。' },
        { hid: 'og:description', property: 'og:description', content: 'ヨガピラティスをやりたいけど近くにスタジオがない方、今は外出を控えている方におすすめ！ご自宅から専門スタジオのレッスンをオンラインで受講ができます。' },
        { hid: 'og:image', property: 'og:image', content: 'https://www.zenplace.co.jp/og-online.jpg' },
        { hid: 'keywords', name: 'keywords', content: 'zen place, オンライン, 地方' },
      ],
      link: [
        { rel: 'canonical', href: 'https://www.zenplace.co.jp/online/member' },
      ],
    };
  },
  components: {
    FaqSingle,
  },

  data() {
    return {
      show: false,
      headerImg,
      faq: {
        title: 'よくある質問',
        qa: [
          {
            q: 'ピラティススタジオで登録してもヨガのオンラインレッスンも受けられますか？',
            a: 'はい、ヨガ、ピラティス全てのレッスンに参加できます！',
          },
          {
            q: 'オンラインのレッスンは受け放題ですか？',
            a: 'プランによって予約できる数が異なります。レッスン受け放題はオンラインフリープランになります。',
          },
          {
            q: 'レッスン中にカメラをOFFにしても良いですか？',
            a: 'はい、ON（マットやご自身の動きが映る形でのご参加）を推奨しておりますが、OFFでのご参加でも大丈夫です。',
          },
          {
            q: 'オンラインでもインストラクターさんが動きを見てくれますか？',
            a: 'はい、インストラクターが画面を確認する際に動きをチェックします。',
          },
        ],
      },
    };
  },
};
</script>

<style scoped lang="scss">
@import '~assets/scss/newvariables';

.p-online{

  &-mv{
    padding-top: 80px;
    background: url('~assets/images/online/mv-bg@2x.jpg')no-repeat center/cover;

    @include sp{
      background-image: url('~assets/images/online/mv-bg-sp@2x.jpg');
      padding-top: pv(36);
    }
    .circle{
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      color: $orange;
      font-weight: bold;
      background: white;
      border-radius: 50%;
      width: 100px;
      height: 100px;
      margin-bottom: 20px;

      @include sp{
        font-size: pv(22);
        margin-bottom: pv(40);
      }
    }

    .copy{

      &-en{
        width: 500px;
        margin-bottom: 12px;
        max-width: 90%;

        @include sp{
          width: pv(260);
          margin-bottom: pv(10);
        }

        img{
          width: 100%;
        }
      }

      &-ja{
        font-size: 36px;
        color: #2e6eac;
        margin-bottom: 12px;
        font-weight:bold;

        @include sp{
          font-size: pv(35);
          margin-bottom: pv(4);
        }

        span{
          font-size:1.5rem;
          font-weight:normal;
        }
      }
    }

    p{
      font-size: 18px;

      @include sp{
        font-size: pv(16);
      }
    }

    .scroll{
      text-align: center;

      .c-scrollitem{
        color: white!important;

        &-item:after{
          background: white!important;
        }

        @include sp{
          color: black!important;

          &-item:after{
            background: black!important;
          }
        }
      }
    }
  }

  &-about{
    padding: 120px 32px;
    background: #ECECEC;
    position: relative;
    overflow: hidden;

    @media screen and(max-width: 640px){
      padding: pv(0) pv(25) 0;
    }

    h2{
      margin-top: -120px;
      padding-bottom: 110px;

      @media screen and(max-width: 740px){
        margin-top: 6vw;
        padding-bottom: 3vw;
      }
    }

   h3{
     font-size:2rem;
     }

    h4{
      font-family:$gothic;
      font-weight:bold;
      color:#2e6eac;
      }

    .bg-white{background-color:#fff; padding:20px;}

    .l-new-container{
      position: relative;
      padding: 40px 0 20px!important;
      max-width: 1200px!important;

      &:before{
        content: '';
        display: block;
        background: white;
        height: 300%;
        width: 100%;
        position: absolute;
        right: 100%;
        top: 50%;
        transform: translateY(-50%);

        @media screen and(max-width: 600px){
          display: none;
        }
      }
    }

    .copy{
      color: $blue;
      font-size: 32px;
      font-weight: bold;
      position: relative;
      margin-top: 1em;
      z-index: 10;

      @media screen and(max-width: 600px){
        font-size: pv(16);
        margin-top: pv(35);
      }

      img{
        width: 500px;
        height: auto;
        position: absolute;
        left: 7.5em;
        top: -2em;
        z-index: -1;

        @media screen and(max-width: 600px){
          width: pv(160);
          left: pv(25);
          top: pv(58);
        }
      }
    }

    .c-nums-white{
      @media screen and(max-width: 1160px){
        font-size: 20px!important;
      }
      @media screen and(max-width: 960px){
        &_single{
          padding-left: 20px!important;
          padding-right: 20px!important;
        }
      }

      @media screen and(max-width: 600px){
        display: block;
        margin-top: pv(50)!important;
      }
    }

  }

  &-video{
    padding: 80px 0;
    @include sp{
      padding: pv(50) 0 pv(40);
    }

    .c-header-orange-border{
      padding: 30px 0;
      margin-bottom: 30px!important;

      @include sp{
        padding: pv(18) 0;
        margin-bottom: pv(34)!important;
        font-size: pv(16);
        line-height: 1;

        .orange{
          font-size: pv(25);
        }
      }
    }
  }

  .online-recommend{

    .bg-white{
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    padding: 80px 30px;
    box-shadow: 0 3px 15px rgba(0, 0, 0, .16);

    .content{
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;

      p{font-size: 18px;}

      ul{
        li{
          font-size: 18px;
          line-height: 1.5;
          margin: 10px 0;
          font-weight: bold;
          &:before{
            content: '●';
            display: inline-block;
            color: #e93842;
            font-size: .9em;
            margin-right: .8em;
          }
        }
      }
    }

    @include sp{
      padding: pv(32) pv(18);

      ul{
        padding-left: pv(30);

        li{
          font-size: pv(16)!important;
          text-indent: pv(-14);
          margin-left: pv(68);
        }
      }
    }
  }

  }

  .p-online-price{

    .price-group{
    max-width:800px;

       .tokuten{color:#2e6eac; display: none;}

       .plan-cont{
         padding:15px 0;
         border-bottom: solid 1px #e4e4e4;

       .plan-name{
          text-align:left;
          font-size:2rem;
          line-height:3rem;
          font-weight:bold;
          color:#2e6eac;
        }

         span.p-price{
          display:block;
          color:#333;
          font-size:2rem;
          font-weight:bold;

          span{
            font-size:1.3rem;
          }
        }

        }

    }

    .choose-type{
      font-family:$gothic;
      background-color:#fff5ed;
      max-width:600px;

      h3{color: #bb570d;}

     .btn-row{
       max-width:600px;

       }

      .btn-member{
       background-color: #ef751f;
       border: 1px solid #ef751f;
       color: #fff;
       font-weight: bold;
       font-size: 2rem;
       padding: 15px;
       width: 100%;
       max-width: 300px;

       &:hover{
  background-color: #f3924c;
       border: 1px solid #f3924c;
       }
       }

    }
  }

  .c-new-service{
     h2{
       background-color:#fff;
       color:#2e6eac;
       padding:10px 5px;
       max-width: 415px;
       font-weight:bold;

       @include sp{
        font-size: 6.5vw;
       }
      }

      h3{font-family: $gothic;}

    .info{
      max-width: 50%;

      @include sp{
        max-width: 100%;
      }

    }
  }

  &-voice{
    padding: 80px 0;

    @include sp{
      padding: pv(60) 0 pv(40);
    }

    h2{
      margin-bottom: 30px;
    }

    .sp-slide{
      @include sp{
        width: pv(350);
        overflow-x: scroll;
      }
    }

    &-wrap{
      display: flex;
      justify-content: space-between;
      margin-bottom: 40px;

      @include sp{
        justify-content: flex-start;
        width: pv(1025);
        margin-bottom: pv(20);
      }
    }

    &_single{
      width: 32%;

      @include sp{
        width: pv(325);
        margin-right: pv(15);
      }

      img{
        margin-bottom: 24px;
        @include sp{
          margin-bottom: pv(20);
        }
      }

      h3{
        font-weight: bold;
        color: $blue;
        margin-bottom: 0;
        line-height: 1.8;

        @include sp{
          font-size: pv(16);
          margin-bottom: pv(10);
        }
      }

      p{
        font-size: 16px;
        line-height: 2;

        @include sp{
          font-size: pv(14);
        }
      }
    }
  }

  &-usage{
    padding: 80px 0;
    margin-bottom: 80px;

    @include sp{
      padding: pv(60) 0 pv(11);
    }

    h2, p{
      margin-bottom: 30px;

      @include sp{
        margin-bottom: pv(30);
      }
    }

    .c-nums-white_single{
      font-size: 23px!important;

      @include sp{
        font-size: pv(14)!important;
      }
    }
  }

  &-section{
    @include sp{
      margin-bottom: pv(40);
    }
    .text-center{
      margin: 80px 0;

      @include sp{
        margin: pv(60) 0 pv(40);
      }

      h2{
        margin-bottom: 40px;

        @include sp{
          margin-bottom: pv(22);
        }
      }
    }
  }

  .online-flow div{
    background-color:#fff;
    font-family:$gothic;
    position:relative;
    font-weight:bold;
    padding:20px;
    font-size:2rem;
    color:#2e6eac;
    text-align:center;
    }

   .online-flow div::after {
    content: '';
    display: block;
    position: absolute;
    margin: auto;
    text-align: center;
    left: 0;
    right: 0;
    bottom: -20px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 10px 0 10px;
    border-color: #2e6eac transparent transparent transparent;

     }
    }

</style>
