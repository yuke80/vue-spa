<template>
  <div class="p-men-faq pt-5">
    <Breadcrumb :breadcrumbs="breadcrumbs" />

    <div class="header-top">
      <h1 class="px-3">
        <img
          src="~assets/images/men/header-title.png"
          alt="メンズピラティス"
          class="header-title mx-auto d-block"
        >
        <span class="title d-block pt-3 pb-5">よくある質問
        </span>
      </h1>
    </div>
    <div
      id="subnavbar"
      class="bg-white sticky-top mb-5 "
    >
      <b-navbar
        toggleable="md"
        type="light"
        variant="light"
        class="py-3 px-3 text-right"
      >
        <b-navbar-brand
          href="#"
          class="d-md-none text-center mx-auto"
        >
          Pilates for Men
        </b-navbar-brand>
        <b-navbar-toggle
          target="nav-collapse"
          class=""
        >
          <fa-icon icon="angle-down" />
        </b-navbar-toggle>

        <b-collapse
          id="nav-collapse"
          v-model="showCollapse"
          is-nav
        >
          <b-navbar-nav class="text-center w-100 mx-auto">
            <nuxt-link
              to="/men"
              class="nav-item mx-auto my-2"
            >
              メンズ TOP
            </nuxt-link>
            <nuxt-link
              to="/pilates/benefits"
              class="nav-item mx-auto my-2"
            >
              ピラティスの効果
            </nuxt-link>
            <nuxt-link
              v-smooth-scroll
              to="/men/interviews"
              class="nav-item mx-auto my-2"
            >
              男性インタービュー
            </nuxt-link>

            <nuxt-link
              v-smooth-scroll
              to="/men/faq"
              class="nav-item mx-auto my-2"
            >
              よくある質問
            </nuxt-link>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <section class="section-opinion">
      <div class="container">
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
                <span class="question-span">Q. </span>男性もレッスンに参加できますか？
              </b-button>
            </b-card-header>
            <b-collapse
              id="accordion-1a"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                大歓迎です！現在、男性の会員様、インストラクターともに増加傾向にあります。どの会員様もレッスン中はご自身に集中しますので、他の参加者のことは全く気にならないという方がほとんどです。ピラティス・ヨガは性別に関係なく実践できるものですので、どうぞお気軽にいらしてください。一度レッスンに参加したら、意外と大丈夫だった、というお声も多くいただきます。<br>
                男性の会員様の多くは、「将来健康でいるために今から対策をしておきたい」「糖尿病対策に」「仕事のストレスを軽減させるため」「ストレスに強くなるため」「スポーツ（ゴルフ・サーフィンなど）のパフォーマンスを上げるため」という目的で入会されることが多く、継続率は女性よりも高い傾向にあります。
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
                <span class="question-span">Q. </span>男性更衣室はありますか？
              </b-button>
            </b-card-header>
            <b-collapse
              id="accordion-1d"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                はい。全スタジオ、男女別の更衣室に鍵付のロッカーを完備しています。
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
                <span class="question-span">Q. </span>どれくらいの年齢の方が通われていますか？
              </b-button>
            </b-card-header>
            <b-collapse
              id="accordion-1e"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                下記の図のように、50～40代が一番多く、その後30代になります。
                <img
                  src="~assets/images/men/member_share.jpg"
                  class="w-100 d-block mx-auto py-3"
                  style="max-width:300px;"
                >
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
                <span class="question-span">Q. </span>運動経験がまったくなくても大丈夫ですか？
              </b-button>
            </b-card-header>
            <b-collapse
              id="accordion-1b"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                zen placeのピラティスは・ヨガは、記録やパフォーマンスを競うようなものではありません。自分の身体の内側からコントロールする方法を学び、身体の機能を最大限に引き出すだし心身を豊かな状態に導くことが目的のため、運動経験や得意不得意にかかわらずおこなっていただけます。<br>
                特にピラティスでは、呼吸と共に背骨付近の深層筋を意識的に鍛えていくため、筋トレなどを日常的に行いアウターマッスルが発達している方でも、初めてのレッスンでインナーマッスルを刺激するとプルプルと震えることもあります。それは、普段意識していない筋肉を刺激しているからで、必要以上に大きな負荷をかけて行うことはありません。ご安心ください。
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
                <span class="question-span">Q. </span>腰痛を持っていてもレッスンが受けられますか？
              </b-button>
            </b-card-header>
            <b-collapse
              id="accordion-1c"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                腰痛の種類にもよりますが、医師に運動を制限・禁止されている場合を除き、受講していただけます。動きに不安のある方は、事前にインストラクターにご相談ください。<br>
                腰痛の原因の多くは、姿勢の乱れやストレスから来ているため、ピラティス・ヨガの動きで姿勢が正され、ストレス解消されることで改善していくことが期待できます。<br>
                zen placeのピラティス・ヨガは全て、創始者ジョセフ・ピラティス氏がリハビリを目的に作った伝統的な手法や、最新のヨガ科学を基に世界レベルの知識を持ったインストラクターがプログラムを作成していますので、どうぞご安心してレッスンにご参加ください。
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
                v-b-toggle.accordion-1k
                block
                variant="info"
              >
                <span class="question-span">Q. </span>オンラインクラスもありますか？
              </b-button>
            </b-card-header>
            <b-collapse
              id="accordion-1k"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                はい、オンラインレッスンもあります。全スタジオのすべてのグループレッスンはオンライン受講も可能です！<br>
                平日、仕事などでスタジオに行けない方のためにも早朝6時と深夜22時オンラインのみのレッスンも用意しています。
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
        <div class="text-center pt-5">
          <a
            class="btn btn-danger btn-lg mt-4 font-weight-bold rounded-0 "
            href="/welcome/schedule.php"
            style="width:300px; padding: 20px;"
          >
            体験レッスンを予約する
            <fa-icon
              icon="caret-right"
              size="1x"
            />
          </a>
        </div>
        <div class="text-center py-5">
          <nuxt-link
            class="btn btn-primary btn-lg mt-4 font-weight-bold rounded-0 "
            to="/studios"
            style="width:300px; padding: 20px;"
          >
            その他の質問はFAQへ
            <fa-icon
              icon="caret-right"
              size="1x"
            />
          </nuxt-link>
        </div>
      </div>
    </section>

    <!--<div class="container pt-5">
      <img
        src="https://basipilates.jp/upload/99569767/pilates_grade01.jpg"
        alt="ピラティス体験レッスン キャンペーン"
        class="w-100 d-block mx-auto"
        style="max-width:500px;"
      >
    </div>-->
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'メンズピラティス - よくある質問',
      meta: [
        { hid: 'description', name: 'description', content: 'WE LOVE PILATES! 私たちはピラティスの魅力にあらがうことのできない、ピラティス大好き集団です。美しい姿勢は体幹と背骨から生まれます。美しい笑顔はポジティブで、楽観的な心から生まれます。ピラティスが美しさ姿勢と笑顔を作れるのには理由があります。初心者から上級者まで楽しくピラティスを！' },
        { hid: 'og:description', property: 'og:description', content: 'WE LOVE PILATES! 私たちはピラティスの魅力にあらがうことのできない、ピラティス大好き集団です。美しい姿勢は体幹と背骨から生まれます。美しい笑顔はポジティブで、楽観的な心から生まれます。ピラティスが美しさ姿勢と笑顔を作れるのには理由があります。初心者から上級者まで楽しくピラティスを！' },
        { hid: 'og:image', property: 'og:image', content: 'https://www.zenplace.co.jp/og-faq.jpg' },
        { hid: 'keywords', name: 'keywords', content: 'ピラティス, スタジオ, 体験' },
      ],
      link: [
        { rel: 'canonical', href: 'https://www.zenplace.co.jp/men/faq' },
      ],
    };
  },

  data() {
    return {
      showCollapse: false,
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
            name: 'メンズピラティス',
            path: '/men',
          },
          {
            name: 'よくある質問',
          },
        ],
      };
    },
  },
  watch: {
    $route() {
      this.showCollapse = false;
    },
  },

};

</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital@1&display=swap');

@media (min-width: 576px){
.p-men-faq {
    margin-top: -50px;
}
}

.font-title{
  font-family: 'EB Garamond', serif;
  font-style: italic;
  font-size:3rem;
}

p{line-height:3.5rem;}

.header-top{position:relative;}
h1{
margin:0 auto;
color:#0066a4;
font-size:3.5rem;
text-align:center;}

h1 span.small{font-size:2.5rem; padding-top:30px;}

h1 img{width:100%;
max-width:600px;
}

ul.navbar-nav{max-width: 1000px;}

#subnavbar {top:-2px;}
.c-section--blue{background-color:#0066a4; color:#fff;}
.c-blue{color:#0066a4;}

.head-message{
  max-width:600px;
  margin:0 auto;
}

.simple-btn{max-width:250px; border:1px solid #333; padding:15px;}
.lifestyle-row{max-width:1000px;}

.pc{display:block;}
.sp{display:none;}

a.blue-link{color:#0066a4; text-decoration:underline;}

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
.pc{display:none;}
.sp{display:block;}

p{line-height:3rem;}
h1{
font-size:3rem;
line-height: 4rem;
}

h1 img{
width:90%;
max-width:400px;
}

#subnavbar {top:50px;}

.lifestyle-row{display:none;}

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
