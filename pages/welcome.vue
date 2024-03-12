<template>
  <div class="p-welcome2">
    <PageHeader
      title="ヨガ・ピラティスの体験レッスン"
      :img="headerImg"
    />
    <Breadcrumb :breadcrumbs="breadcrumbs" />

    <section class="mt-3 pb-5">
      <div class="mx-auto col-lg-10">
        <p
          class="text-left mx-auto"
          style="max-width:600px;"
        >
          zen placeの体験レッスンは、通常のクラスを実際に受講していただきます。<br>
          経験豊富なインストラクターがサポートしますので、初めての方も安心です。<br>
          <br>
          体験レッスンの流れは<a
            href="#welcome-beginner"
            style="text-decoration:underline;"
          >こちら</a>！
        </p>
      </div>
    </section>

    <section class="mt-3 mb-5 p-welcome2-campaign l-new-container text-center">
      <div class="wrap">
        <p class="blue text-weight-bold">
          体験は今がお得！
        </p>
        <img
          src="~assets/images/welcome/campaign_wh_pc.png"
          loading="lazy"
          class="w-100 pc mx-auto"
          alt="体験レッスンキャンペーン中"
          style="max-width:700px;"
        >
        <img
          src="~assets/images/welcome/campaign_wh.png"
          loading="lazy"
          class="w-100 sp mx-auto"
          alt="体験レッスンキャンペーン中"
          style="max-width:500px;"
        >

        <nuxt-link
          to="/cp/spring2022"
          class="btn-blue_border"
        >
          キャンペーン詳細
        </nuxt-link>
      </div>
    </section>

    <!-- /.p-welcome2-campaign-->

    <div class="ytb-content container pb-5">
      <h4 class="mb-3 ytb-title">
        1分で紹介！体験当日の流れ
      </h4>
      <iframe
        loading="lazy"
        class="ytb-iframe"
        src="https://www.youtube.com/embed/qq3OyqNIGf0"
        title="体験当日の流れ"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <div class="p-welcome2-trialform bg-light-gray">
      <TrialForm />
      <TrialFlowPilates />
    </div>

    <section class="customer-voices pt-5 my-5">
      <div class="container">
        <h2 class="my-5">
          <span> ご利用者の声</span>
        </h2>
        <VoiceList />
      </div>
    </section>
    <section
      class="p-welcome2-beginner"
    >
      <div class=" l-new-container">
        <h2 class="c-header-orange-border">
          入会者の<span class="orange">80%</span>が初心者
          <div>
            ヨガ・ピラティスは最も安全で誰にでも出来る!
          </div>
        </h2>
      </div>
      <div class="c-column-alternate">
        <div class="c-column-alternate-single">
          <div class="l-new-container">
            <div class="bg-white">
              <h3>自分自身の身体と向き合う</h3>
              <p>
                運動が苦手、体力に自信がない、身体が硬い、どんな方でも大丈夫です。自分のペースで、出来る範囲で始められます。<br>
                レッスンは身体を目一杯使って動くことがなく、身体のインナーマッスルや骨に意識を向けて最低限の力で動かすことを目指しています。
              </p>
            </div>
          </div>
        </div>
        <div class="c-column-alternate-single right">
          <div class="l-new-container">
            <div class="bg-white">
              <h3>年代・性別問わず、続けたくなる</h3>
              <p>
                20代から70代まで、どの年代の方も自分のペースで続けていけます。<br>
                平日の早朝や夜のクラス、土日のクラスなど、仕事や家事の合間に、休日にと、ライフスタイルに合わせて通えます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /.p-welcome2-beginner-->

    <section class="p-welcome2-faq">
      <h2 class="c-header-border-bottom">
        体験前によくある質問
      </h2>
      <div class="l-new-container">
        <FaqSingle
          v-for="(f, i) in faq"
          :key="i"
          :qa="f.qa"
        />
        <div class="text-center">
          <a
            href="#TrialForm"
            class="btn-blue_border"
          >
            早速体験レッスンを予約
          </a>
        </div>
      </div>
    </section>
    <!-- /.p-welcome2-faq -->

    <KnowmoreZenplace />
  </div>
</template>

<style lang="scss">
@import '~assets/scss/newvariables';

.p-welcome2{

  &-campaign{
    padding-top: 30px;
    padding-bottom: 70px;

    @include sp{
      padding-bottom: 90px;
    }

    .wrap{
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      border: 1px solid $blue;
      padding: 60px 32px 60px;
      // padding: 60px 32px 80px;

      @media screen and (max-width: 600px){
        flex-direction: column;
        padding: pv(26) pv(25);
      }

      p, a{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }

      p{
        top: -1.5rem;
        font-size: 3rem;
        line-height: 1em;
        background: white;
        padding: 0 .8em;

        @media screen and (max-width: 600px){
          font-size: pv(24);
          white-space: nowrap;
        }
      }

      a{
        bottom: -3.6rem;
        background: white;

        &:hover{
          opacity: 1;
        background-color: lighten($blue, 50%)
        }
        @media screen and (max-width: 1024px){
          max-width: 30rem;
        }

        @include sp{
          top: calc(100% + #{pv(21)});
          bottom: unset;
        }
      }

      img{
        width: 100%;
        max-width: 320px;

        &.plus{
          display: block;
          width: 40px;
          margin: 0 16px;
        }

        @include tab{
          max-width: 240px;
        }

        @include sp{
          max-width: unset;

          &.plus{
            width: pv(25);
            margin: pv(8) 0;
          }
        }
      }
    }
  }// .p-welcome2-campaign

  &-trialform{
    padding: 80px 32px;

    @include sp{
      padding: pv(60) pv(12.5);
    }
  }// .p-welcome2-trialform

  &-beginner{
    padding-top: 160px;

    @include sp{
      padding-top: pv(50);
    }

    .c-header-orange-border{
      font-size: 4rem;
      padding: 1em 0;
      margin-bottom: 80px;

      .orange{
        display: inline-block;
        padding: 0 .2em;
        font-size: 6rem;
      }
      div{
        font-size: 2rem;
      }

      @include sp{
        font-size: pv(20);
        padding: pv(15) 0;
        margin-bottom: pv(20);

        .orange{
          font-size: pv(30);
        }

        div{
          margin-top: pv(6);
          font-size: pv(11);
        }
      }
    }
    .c-column-alternate-single{

      &:nth-of-type(1){background-image: url('~assets/images/welcome/beginner-1.png');}
      &:nth-of-type(2){background-image: url('~assets/images/welcome/beginner-2.png');}

      @include  sp{
        &:nth-of-type(1){background-image: url('~assets/images/welcome/beginner-1-sp.jpg');}
        &:nth-of-type(2){background-image: url('~assets/images/welcome/beginner-2-sp.jpg');}
      }
    }
  }// .p-welcome2-beginner

  &-faq{
    margin-bottom: 80px;

    @include sp{
      background: #ECECEC;
      padding-top: pv(57);
      margin-bottom: 0;
    }

    h2{
      margin-bottom: 60px;

      @include sp{
        margin-bottom: pv(25);
      }
    }

    .l-new-container{
      .text-center{
        margin-top: 80px;

        @include sp{
          margin-top: pv(25);
          padding-bottom: pv(50);
        }
      }
    }
  }// .p-welcome2-faq

  &-pilatesyoga{
    margin-bottom: 80px;

    @include sp{
      margin-bottom: 0;
      background: white;

      .c-column-three{
        padding-bottom: 0!important;
        h2{
          margin-top: pv(60)!important;
          white-space: nowrap;
          letter-spacing: pv(-1);
          font-size: pv(21);
        }

        .info{
              top: unset!important;
              transform: none!important;
              margin-top: pv(-37)!important;
        }
      }
    }
  }

  .customer-voices{
     h2 {
  color: $blue;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  @include sp{
    font-size: pv(18);
  }
  &:after {
    content: "";
    background: $blue;
    display: block;
    height: 4px;
    margin: 0.5em auto 0;
    width: 5em;
  }
  }
  }

}
</style>

<script>
import PageHeader from '~/components/PageHeader.vue';
import FaqSingle from '~/components/FaqSingle.vue';
import TrialForm from '~/components/TrialForm.vue';
import TrialFlowPilates from '~/components/TrialFlowPilates.vue';
import KnowmoreZenplace from '~/components/KnowmoreZenplace.vue';
import VoiceList from '~/components/VoiceList.vue';

const headerImg = require('@/assets/images/common/studiolist.jpg');

export default {
  layout: 'new',
  head() {
    return {
      title: '体験レッスン',
      meta: [
        { hid: 'og:title', property: 'og:title', content: '体験レッスン' },
        { hid: 'description', name: 'description', content: 'zen placeの体験レッスンは、入会者の80%が初心者。ピラティス・ヨガは子供から高齢者まで体力、運動経験を問わずに、誰でも簡単、安全に始められます。今なら入会キャンペーンがお得！' },
        { hid: 'og:description', property: 'og:description', content: 'zen placeの体験レッスンは、入会者の80%が初心者。ピラティス・ヨガは子供から高齢者まで体力、運動経験を問わずに、誰でも簡単、安全に始められます。今なら入会キャンペーンがお得！' },
        { hid: 'og:image', property: 'og:image', content: 'https://www.zenplace.co.jp/og-welcome.jpg' },
      ],
      link: [
        { rel: 'canonical', href: 'https://www.zenplace.co.jp/welcome' },
      ],
    };
  },

  components: {
    PageHeader,
    FaqSingle,
    TrialForm,
    TrialFlowPilates,
    VoiceList,
    KnowmoreZenplace,
  },
  data() {
    return {
      headerImg,
      faq: [
        {
          qa: {
            q: '体験当日の来店時間・所要時間',
            a: `所要時間は約2時間です。<br>
            当日は着替えの時間含めレッスン20分前までにご来店ください。<br>
            レッスン時間は55分です（一部のヨガプログラムに90分のものもございます、予約時にご確認ください）。<br>
            レッスン後に30分ほど、ヨガ・ピラティスの効果的な行い方など紹介させていただきます。`,
          },
        },
        {
          qa: {
            q: '体験当日の持ち物・服装',
            a: `当日は以下をご用意ください。<br>
            ● ピラティス、常温ヨガ<br>
            ・動きやすい服装（Tシャツ、ハーフパンツ、スパッツなど。シューズ不要）<br>
            ・汗拭き用タオル<br>
            ※店舗によりウォーターサーバーまたはお水の販売がございます。<br><br>
            ● ホットヨガ・ホットピラティス・ホットHIIT<br>
            ・動きやすい服装（Tシャツ、ハーフパンツ、スパッツなど。シューズ不要）<br>
            ・汗拭き用タオル<br>
            ・水1リットル以上<br>
            ・シャワー用バスタオル<br>
            ・替えの下着<br>
            ※水の販売、レンタルタオル（有料）もございます。`,
          },
        },
        {
          qa: {
            q: '体験の種類はなにがある？',
            a: `【レッスンは大きく3種類あります】<br>
            ●グループレッスン<br>
            複数人で行うレッスンです。<br>
            ●プライベートレッスン<br>
            マンツーマンで行うので、全てのかたにおすすめです。妊娠中・けがをした後など身体を動かすのに不安があるかたや、はじめてのかたに特におすすめさせていただいています。<br>
            ●マシングループレッスン<br>
            ピラティススタジオで行う、専用マシンを使った3人前後〜のレッスンです。<br><br>
            【ヨガスタジオは温度設定が大きく2つあります】<br>
            ●常温<br>
            常温（CT/22度前後）のスタジオで行います。<br>
            ●ホット<br>
            VS/40度に温められた環境で行います。一部スタジオではローホット（OTMS/27度前後、汗ばむくらい）のプログラムもございます。`,
          },
        },
        {
          qa: {
            q: 'まったくの初心者、身体が硬い、運動が苦手でも大丈夫？',
            a: `zen placeのレッスンは年齢・性別や運動経験を問わず行っていただけます。<br>
            初心者マークがついていないクラスも、強度は上がりますが、どなたさまでも参加・お楽しみいただけます。<br>
            見学のみ（予約不要）も歓迎しています。直接スタジオにお越しください。<br>
            また、妊娠中など身体を動かすのに不安があるかたや、その他質問などは各スタジオ、または総合受付まで気軽にお問い合わせください。<br>
            総合受付は03-4405-1245（平日9:00-20:00、土日祝9:00-16:00）。`,
          },
        },
        {
          qa: {
            q: '体験レッスン料金のお支払い方法',
            a: `事前決済と体験当日のスタジオ決済がお選びいただけます。<br><br>
●事前決済<br>
グループレッスンの体験料金は、レッスン受講が確認できた後に引き落としとなります。<br>
お申し込み時以外でも、体験レッスン20分前まで事前決済のお手続きが可能です。<br>
詳細は体験申し込み完了メールにてご確認ください。<br>
※プライベートレッスンはレッスンの24時間前キャンセルの場合100％請求となるため、ご注意ください。<br>
<br>
●スタジオ決済<br>
ご利用可能な決済方法は、クレジット・デビットカード、及びPayPayとなります。<br>
※2021年7月時点の取扱カードブランドはVISA/MASTER/JCB/AMEX/Diners<br>
※現金によるお支払いは不可`,
          },
        },
      ],
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
            name: 'ヨガ・ピラティスの体験レッスン',
          },
        ],
      };
    },
  },

  created() {
    const { refnum } = this.$route.query;

    if (process.browser && refnum) {
      document.cookie = `refnum=${refnum}; domain:zenplace.co.jp; max-age=86400; secure; samesite=None;`;
      alert('紹介コードが有効な期限は1日です。期限が切れた際は、再度LINEのURLよりアクセスをお願い致します。');
    }
  },

};
</script>
