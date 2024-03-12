<template>
  <div class="p-about">
    <PageHeader
      title="zen placeとは"
      :img="headerImg"
    />
    <Breadcrumb :breadcrumbs="breadcrumbs" />

    <section class="p-about-mv">
      <div class="c-column-alternate2">
        <div class="c-column-alternate2-single">
          <div class="l-new-container">
            <div class="bg-white">
              <h2 class="c-header-border-left small">
                zen placeとは
              </h2>
              <div class="cf" />
              <p class="pt-5">
                2003年にBASIのRaelにあったことから始まった、19年間にわたって、世界トップのピラティス、ヨガの教育機関から学んできた伝統、そしてそこからの革新。<br>
                1,000人以上のエデュケーターが学び続けている学びの伝統、研修の充実。<br>アカデミー部門という知識をさらに学ぶための機関をもって、さらにピラティス、ヨガ以外のマインドフルネスやアレクサンダーテクニークやその他ウェルビーイングにつながる知識を学ぶ伝統。<br><br>
                最終的に、ぶれずに、こころを追求してきていること。<br>
                身体だけではなく、こころを常に追求してきた会社であること。
              </p>
              <nuxt-link
                to="/about/history"
                class="btn-blue_border"
              >
                ZEN PLACEの歴史
              </nuxt-link>
            </div>
          </div>
        </div>

        <div class="c-column-alternate2-single">
          <div class="l-new-container">
            <div class="bg-white">
              <h2 class="c-header-border-left small">
                本当の自分に出会い、<br>
                ココロもカラダも満たされ、<br>
                豊かになっていく
              </h2>
              <div class="cf" />
              <p>
                zen placeは、ジムやランニングのような「その場だけ健康になるレッスン」は提供しません。<br>
                提供するのは、一人ひとりが自分のココロ・カラダと向き合い、本当の自分に出会える場所。<br><br>
                レッスン中にも瞑想の時間、自分の身体と向き合える時間を多く取ります。<br>
                様々な動きを通して自分の心の動き、身体のあり方、変化に気づき、変わっていく。<br><br>
                身体だけでなくココロもポジティブになり、自分らしく豊かな心を持つ人が、一人でも多く増えることを願っています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /.p-about-mv -->

    <section class="p-about-pilatesyoga pb-5">
      <div class="l-new-container">
        <h2 class="c-header-border-left">
          zen placeのサービス
        </h2>
      </div>
      <div class="p-about-pilatesyoga">
        <div class="p-about-pilatesyoga-single">
          <div class="l-new-container">
            <div class="bg-white">
              <h3>
                zen place ピラティス
              </h3>
              <p>
                世界トップのピラティス流派であるBASIピラティスから学び、その他の世界トップの流派であるBalanced Bodyとも提携し、さらに深くピラティスを学び、講演会などにPolestarピラティスの創始者ブレントアンダーソンなどを呼ぶなど、世界中のトップピラティス指導者から学び続けてきた伝統。<br>
                zen place pilatesは、筋トレ、フィットネスなどに変化したピラティスではなく、正統派で本物の「<strong>ピュア・ピラティス</strong>」です。<br>
                「ピュア・ピラティス」はいままでと違う身体の使い方で、今までとは違う自分に導きます。
              </p>
              <nuxt-link
                to="/pilates"
                class="btn-blue_border"
              >
                zen place ピラティスをもっと知る
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="p-about-pilatesyoga-single">
          <div class="l-new-container">
            <div class="bg-white">
              <h3>
                zen place ヨガ
              </h3>
              <p>
                zen place yogaは、ストレッチや体操、筋トレやフィットネスを目的としたヨガではありません。瞑想を起点に「本当の自分」を知り、明るく、前向きにウェルビーイングに生きていくために考え抜いたzen placeオリジナルの正統派のハタヨガ、その名も「<strong>モダン・ヨガ</strong>」です。
              </p>
              <nuxt-link
                to="/yoga"
                class="btn-blue_border"
              >
                zen place ヨガをもっと知る
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="p-about-pilatesyoga-single">
          <div class="l-new-container">
            <div class="bg-white">
              <h3>
                zen place アカデミー
              </h3>
              <p>
                ヨガピラティス・ボディワークの講座を中心に年間200本以上のワークショップを開催。<br>
                初心者からピラティス・ヨガ経験者・講師資格を取りたい方まで、広く学べる場を提供しています。
              </p>
              <a
                href="https://www.bodymindspiritresearchlab.com/"
                class="btn-blue_border"
                target="_blank"
              >
                zen place アカデミーへ
              </a>
            </div>
          </div>
        </div>
        <div class="p-about-pilatesyoga-single pb-0">
          <div class="l-new-container">
            <div class="bg-white">
              <h3 class="c-header-border-left small">
                あらゆる事業を通じて<br>
                本当の意味で、豊かに生きる人を増やす
              </h3>
              <div class="cf" />
              <p>
                ピラティス・ヨガ事業にとどまらず、心や身体をより深く学ぶアカデミー事業、一生を豊かに生きるサポートをする訪問看護・リハビリデイサービス事業、単に病気を治すだけではなく、豊かな人生、ウェルビーイングを目指すためのクリニックやアプリ事業。<br>
                あらゆる事業を通じて「本当の意味で生きている、豊かさを生きる人」を増やします。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /.p-about-pilatesyoga -->

    <div class="ytb-content container pb-5">
      <h4 class="mb-3 ytb-title">
        ZEN PLACEをご紹介！
      </h4>
      <iframe
        loading="lazy"
        class="ytb-iframe"
        src="https://www.youtube.com/embed/Mt1asqfDjAE"
        title="zen placeとは"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>

    <section
      id="zen-place-reason"
      class="p-about-reasons"
    >
      <div class="l-new-container">
        <h2 class="c-header-border-left">
          zen placeが選ばれる理由
        </h2>
        <div class="cf" />
        <div class="wrap">
          <div class="p-about-reasons-single">
            <div class="img" />
            <div class="content">
              <h3>
                <div class="subtitle">
                  BASIピラティス唯⼀のライセンシー
                </div>
                ピラティス・ヨガ先進国の様々な教育団体と提携<br>
                世界最先端のノウハウを、凝縮・洗練してお届け
              </h3>
              <p>
                ピラティス、ヨガ、そしてウェルビーイングの先進国である欧米のさまざまな教育団体と提携し、最新の情報を取り入れています。<br><br>
                ピラティスは、世界30か国以上、650か所以上でおこなわれているピラティス指導者養成コースの最大手BASIピラティスと提携。世界中の指導者年間10人以上が来日（現在はオンライン）し、研修しています。<br>
                またピラティス器具の最大手BALANCED BODYの教育プログラムも提供しています。<br><br>
                ヨガは、全米で最も歴史があり、最も多くの有名指導者を輩出したヨガワークスと提携して、世界中のヨガ指導者から学んでいます。
              </p>
            </div>
          </div>
          <div class="p-about-reasons-single">
            <div class="img" />
            <div class="content">
              <h3>
                <div class="subtitle">
                  月間1,000以上 / 全国94以上
                </div>
                圧倒的レッスン数を、<br>ライフスタイルに合わせて
              </h3>
              <p>
                主要都市を中心に、94以上のスタジオを構えています。レッスン時間も朝6時〜夜22時までと、ほぼ1日レッスンを受ける事ができます。家の近くで休日に、仕事帰りに、出張のついでに。あなたの好きな時間・場所で受けられます。
              </p>
            </div>
          </div>
          <div class="p-about-reasons-single">
            <div class="img" />
            <div class="content">
              <h3>
                <div class="subtitle">
                  グループ / 個別 / オンライン…
                </div>
                知れば知るほど意識が変わる<br>
                ワークショップや養成講座など、豊富な学びの場を提供
              </h3>
              <p>
                ただ受けるだけでは満足しない。通常のグループレッスン/プライベートレッスン以外にも、もっとピラティス・ヨガを深く学び、取り入れたい。そんな方向けに豊富な学びの場を提供しております。<br><br>
                例えば、ヨガピラティス・ボディワークの講座を中心に年間200本以上のワークショップを開催するzen place academyや、私たちが提供する世界基準のピラティス・ヨガメソッドを直接学び、資格取得のできるインストラクター養成講座を開放しています。<br><br>
                ピラティス・ヨガ好きが更に学べる場が、ここzen placeにあります。
              </p>
            </div>
          </div>
          <div class="p-about-reasons-single">
            <div class="img" />
            <div class="content">
              <h3>
                <div class="subtitle">
                  会うたびにワクワクがもらえる
                </div>
                あなたの理想に寄り添う、<br>Whole Body Educator
              </h3>
              <p>
                zen placeでは、講師をインストラクターとは呼ばず、Whole Body Educator(身体の教育者 / エデュケーター)と呼びます。レッスンを提供して終わりではなく、レッスン中の1人1人の身体の状態をしっかりと見て、正しい身体の使い方になるよう丁寧に指導します。また、エデュケーター達もピラティスを通していきいきとエネルギッシュな人ばかり。会うだけでもエネルギーをもらえる、そんな存在です。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="c-btns">
        <nuxt-link
          to="/studios"
          class="btn-white btn-with-arrow"
        >
          スタジオ一覧を見る
        </nuxt-link>
        <nuxt-link
          to="/instructors"
          class="btn-white btn-with-arrow"
        >
          インストラクター
        </nuxt-link>
      </div>
    </section>
    <!-- /.-about-reasons -->

    <section class="p-about-voice bg-white">
      <div class="l-new-container">
        <h2 class="c-header-border-left">
          ご利用者の声
        </h2>
        <div class="cf mb-5" />
        <VoiceList />
        <nuxt-link
          to="/voice"
          class="btn-blue_border mx-auto"
        >
          もっと見る
        </nuxt-link>
      </div>
    </section>

    <CtaLower />
    <KnowmoreZenplace />
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue';
import CtaLower from '~/components/CtaLower.vue';
import VoiceList from '~/components/VoiceList.vue';
import KnowmoreZenplace from '~/components/KnowmoreZenplace.vue';

const headerImg = require('@/assets/images/about/about-header.jpg');

export default {
  layout: 'new',
  head() {
    return {
      title: 'zen placeとは',
      meta: [
        { hid: 'og:title', property: 'og:title', content: 'zen placeとは' },
        { hid: 'description', name: 'description', content: 'zen placeは、世界最先端を学べるピラティス・ヨガスタジオ。世界最先端のメソッドを常に凝縮・アップデートし、レッスンを受けた方が自分の心・身体の変化に気づいてココロとカラダが満たされ、豊かに生きる人が増える場所を提供しています。' },
        { hid: 'og:description', property: 'og:description', content: 'zen placeは、世界最先端を学べるピラティス・ヨガスタジオ。世界最先端のメソッドを常に凝縮・アップデートし、レッスンを受けた方が自分の心・身体の変化に気づいてココロとカラダが満たされ、豊かに生きる人が増える場所を提供しています。' },
        { hid: 'og:image', property: 'og:image', content: 'https://www.zenplace.co.jp/og-about.jpg' },
        { hid: 'keywords', name: 'keywords', content: '問い合わせ, zen place, よくある質問' },
      ],
      link: [
        { rel: 'canonical', href: 'https://www.zenplace.co.jp/about' },
      ],
    };
  },
  components: {
    PageHeader,
    CtaLower,
    VoiceList,
    KnowmoreZenplace,
  },
  data() {
    return {
      headerImg,
    };
  },
  computed: {
    breadcrumbs() {
      return {
        data: [
          {
            name: 'TOP',
            path: '/',
          },
          {
            name: 'zen placeとは',
          },
        ],
      };
    },
  },
};
</script>

<style lang="scss">
@import '~assets/scss/newvariables';

.p-about{

  .c-btns{
    @include sp{
      padding: 0!important;
      display: block!important;

      a{
        margin-bottom: pv(12)!important;
      }
    }
  }

  .c-yourstyle{

    &_single{
      @include sp{
        &:nth-child(2){
          margin: 0 0 6.4vw!important;
        }
      }
    }
  }

  .tabH-on{
    display: none;

    @media screen and(max-width:1024px){
      display: block;
    }
  }

  &-mv{

    h2{
      color: $blue;
    }

    .c-column-alternate2-single{
      background-position-y: top;
      p{
        padding-top: 24px;
        padding-right: 24px!important;
      }
      &:nth-of-type(1){background-image: url('~assets/images/about/mv-1.jpg');}
      &:nth-of-type(2){background-image: url('~assets/images/about/mv-2.jpg');}

      @media screen and(max-width:768px){
        padding-top: 300px!important;
      }

      @include sp{
        padding: pv(210) 0 0!important;

        .bg-white{
          padding: pv(30) pv(25)!important;

          h3{
            font-size: pv(20)!important;
            line-height: 1.5!important;
            margin-bottom: pv(2)!important;

            .subtitle{
              font-size: pv(14)!important;
              margin-bottom: pv(10);
            }
          }

          p{
            padding:0!important;
          }
        }
      }
    }
  } // .p-about-mv

  &-value{
    padding: 120px 0;
    background: url('~assets/images/about/value-bg.jpg')no-repeat center/ cover;
    p{
      color: white;
      text-align: center;
      font-size: 18px;
      line-height: 2;
      margin-bottom: 36px;
    }
  } // .p-about-value

  &-recommend{
    padding: 80px 0;

    h2{
      margin-bottom: 40px;
    }

    .target{

      &-wrap{
        display: flex;
        justify-content: center;
      }

      &-single{
        max-width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 40px 40px;

        .img{
          max-width: 240px;
          width: 100%;
          margin-bottom: 32px;
        }

        h3{
          color: $blue;
          font-weight: bold;
          margin-bottom: 24px;
        }

        p{
          line-height: 2;
        }
      }
    }
  } // .p-about-recommend

  &-reasons{
    padding: 80px 0;
    background: #ececec;

    @include sp{
      padding: pv(40) 0;
    }

    h2{
      margin-bottom: 60px;
      @include sp{
        margin-bottom: pv(30);
        font-size: 6.53vw!important;
      }
    }

    &-single{
      display: flex;
      margin-bottom: 16px;

      &:nth-child(1) .img{background-image: url('~assets/images/about/reason-1.jpg');}
      &:nth-child(2) .img{background-image: url('~assets/images/about/reason-2.jpg');}
      &:nth-child(3) .img{background-image: url('~assets/images/about/reason-3.jpg');
      background-position-x: 65%;}
      &:nth-child(4) .img{background-image: url('~assets/images/about/reason-4.jpg');}

      &:nth-child(1) .content{background-image: url('~assets/images/about/01.png');}
      &:nth-child(2) .content{background-image: url('~assets/images/about/02.png');}
      &:nth-child(3) .content{background-image: url('~assets/images/about/03.png');}
      &:nth-child(4) .content{background-image: url('~assets/images/about/04.png');}

      .img{
        width: 45%;
        background-size: cover;
      }

      .content{
        flex: 1;
        background: white;
        padding: 40px 50px 30px;
        background-size: 150px;
        background-position: 96% bottom;
        background-repeat: no-repeat;

        h3{
          font-weight: bold;
          line-height: 1.6;
          border-bottom: 1px solid black;
          margin-bottom: 16px;
          display: inline-block;
          padding-bottom: 8px;
          font-size: 2.4rem;

          .subtitle{
            color: $blue;
            font-size: 16px;
            margin-bottom: 8px;
          }
        }

        p{
          font-size: 14px;
          line-height: 2.3;
        }
      }

      @media screen and(max-width:768px){
        flex-direction: column;

        .img{
          padding-bottom: 40%;
          width: 100%;
        }

        .content{
          h3{
            br{
              display: none;
            }
          }
        }
      }

      @include sp{
        .img{
          padding-bottom: 40%;
          width: 100%;
        }

        .content{
          padding: pv(30) pv(25) pv(25);
          background-size: pv(120);

          h3{
            font-size: pv(20);
            margin-bottom: pv(16);

            br{
              display: block;
            }

            .subtitle{
              font-size: pv(13);
              margin-bottom: pv(6);
            }
          }

          p{
            font-size: pv(14);
            line-height: 2.3;
          }
        }
      }
    }

    .c-btns{
      @include sp{
        padding-top: pv(24)!important;
        display: flex!important;
        flex-direction: column;
        align-items: center;
        a{
          width: pv(325)!important;
          margin-left: auto!important;
          margin-right: auto!important;
        }
      }
    }
  } // .p-about-reasons

  &-pilatesyoga{
    padding: 80px 0 40px;

    @include sp{
      padding-bottom: pv(20);
    }

    &-single{
      background-size: contain;
      background-repeat: no-repeat;
      margin-bottom: 120px;

      &:nth-of-type(1){
        background-position: right top;
        background-image: url('~assets/images/about/pilatesyoga-1.jpg');
        background-size: 60% auto;
        padding-bottom: 60px;
      }
      &:nth-of-type(2){
        background-position: left bottom;
        background-image: url('~assets/images/about/pilatesyoga-2.jpg');
        padding-bottom: 60px;

        .bg-white{
          margin-left: auto;
        }
        @media screen and(max-width:1024px){
          background-position-y:top;
        }
      }

      &:nth-of-type(3){
        background-position: right top;
        background-image: url('~assets/images/about/pilatesyoga-3.jpg');
        background-size: 60% auto;
        padding-bottom: 60px;

        @include sp{
          .l-new-container{
            background: white;
          }
        }
      }
      &:nth-of-type(4){
        background-position: left bottom;
        background-image: url('~assets/images/about/pilatesyoga-4.jpg');
        padding-bottom: 60px;

        .bg-white{
          margin-left: auto;
        }
        @media screen and(max-width:1024px){
          background-position-y:top;
        }
      }

      .bg-white{
        max-width: 660px;
        padding: 60px 60px 80px;

        h3{
          color: $blue;
          font-weight: bold;
          margin-bottom: 16px;
          line-height: 1.5;
        }

        p{
          line-height: 2.3;
          margin-bottom: 20px;
        }
      }

      @media screen and(max-width:1024px){
        padding-top: 200px;
        margin-bottom: 0;
        background-size: 70%;
      }

      @media screen and(max-width:768px){
        padding-top: 300px;
        background-size: 100%!important;
      }

      @include sp{
        padding-top: pv(250);

        &:nth-child(2){
          padding-top: pv(180);
        }

        .bg-white{
          padding: pv(32) 0;

          p{
            line-height: 2.3;
            margin-bottom: 20px;
          }
        }
      }
    }

    img{
      &.pilates{
        width: 300px;
      }
      &.yoga{
        width: 160px;
      }
      @include sp{
        &.pilates{
          width: pv(180);
        }
        &.yoga{
          width: pv(120);
        }
      }
    }
  } // .p-about-pilatesyoga

  &-voice{
    padding: 80px 0;
    background: #ECECEC;

    @include sp{
      padding: pv(40) 0;
    }

    .c-header-border-bottom{
      span{
        font-size: .5em;
      }
      margin-bottom: 60px;

      @include sp{
        margin-bottom: pv(30);
      }
    }

    .voice-single{
      &-wrap{
        background: white;
        border-radius: 32px;
        padding: 40px;
        max-width: 970px;
        margin-left: auto;
        margin-right: auto;

        .head{
          font-size: 20px;
          font-weight: bold;
          color: $blue;
          text-align: center;
        }
      }

      display: flex;
      margin-bottom: 40px;
      .avatar{
        display: flex;
        flex-direction: column;
          margin-right: 10px;
        &:before{
          display: block;
          content: '';
          width: 90px;
          height: 90px;
          background: url('~assets/images/about/voice.svg')no-repeat center/contain;
        }

        .info{
          margin-top: 10px;
          color: $blue;
          text-align: center;
          font-weight: bold;
        }
      }

      .content{
        flex: 1;
        background: #ececec;
        line-height: 2;
        padding: 15px 30px;
        border-radius: 20px;
        position: relative;

        h3{
          color: $blue;
          font-size: 20px;
          font-weight: bold;
          line-height: 1.5;
          letter-spacing: 3px;
          margin-bottom: 10px;
        }

        &:after{
          display: block;
          content: '';
          width: 40px;
          height: 40px;
          position: absolute;
          bottom: -15px;
          left: 50px;
          background: url('~assets/images/about/fukidashi.svg')no-repeat center/contain;
        }
      }

      @include sp{
        &-wrap{
          border-radius: 16px;
          padding: pv(16);

          .head{
            font-size: pv(18);
            margin-bottom: pv(18);
          }
        }

        margin-bottom: pv(24);
        .avatar{
          &:before{
            width: pv(30);
            height: pv(30);
          }

          .info{
            font-size: 10px;
          }
        }

        .content{
          padding: pv(15);
          border-radius: 10px;

          &:after{
            width: pv(30);
            height: pv(30);
            bottom: unset;
            top: pv(30);
            left: pv(-12);
            transform: rotate(90deg);
          }
        }
      }
    }
  } // .p-about-voice

}
</style>
