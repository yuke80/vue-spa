<template>
  <div class="p-health-top">
    <div
      class="jumbotron text-center c-pilates-jumbo justify-content-center main-title mb-0"
    >
      <h1 class="c-heading text-white font-weight-bold">
        身体の悩みと<br class="sp">ピラティス
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
          メニュー
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
              to="#sec-features"
              class="nav-item mx-auto my-2"
            >
              ピラティスの効果
            </nuxt-link>
            <nuxt-link
              to="#sec-history"
              class="nav-item mx-auto my-2"
            >
              ピラティスの歴史
            </nuxt-link>

            <nuxt-link
              v-smooth-scroll
              to="#sec-interviews"
              class="nav-item mx-auto my-2"
            >
              インタービュー
            </nuxt-link>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <section class="mb-5">
      <div class="container">
        <h2 class="text-center py-5">
          ピラティスは、<br class="sp">
          肩こりや腰痛など<br class="sp">
          身体の不調がある人にこそ<br class="sp">
          お勧めしたい
        </h2>
      </div>

      <div class="sub-header">
        <img
          src="~assets/images/pilates/img_hero.jpg"
          class="w-100"
          alt="ピラティスの写真"
        >
        <h2>ピラティス</h2>
      </div>

      <div class="container">
        <h3 class="text-center py-5">
          呼吸と共に背骨や<br class="sp">
          インナーマッスルを動かし<br class="sp">
          深く集中した状態を作る
        </h3>
      </div>

      <div class="head-message">
        <img
          src="~assets/images/health/img01.jpg"
          class="w-100 d-block mx-auto"
          style="max-width:400px;"
          alt="ピラティスの写真"
        >
        <div class="container">
          <h3 class="text-center py-5">
            脳神経系と免疫機能に働きかけ<br class="sp">
            人間が本来持っている機能を<br class="sp">
            最大限引き出す<br class="sp">
          </h3>
          <h3 class="text-center py-5">
            身体の細部まで意識を届け、<br class="sp">
            正しい身体の使い方を学ぶ
          </h3>
        </div>
      </div>
    </section>

    <section id="sec-features">
      <div class="sub-header">
        <img
          src="~assets/images/pilates/img_hero.jpg"
          class="w-100"
          alt="ピラティスの写真"
        >
        <h2 class="text-center">
          ピラティスの効果
        </h2>
      </div>

      <div class="c-pilates-features py-5">
        <div class="l-new-container">
          <h3 class="c-header-border-left">
            ピラティスで期待できる３つの効果
          </h3>
          <div class="pt-5">
            <h4>
              <img src="~assets/images/health/no01.png">
              <span>
                筋肉のガードル<br>
                天然のコルセットと呼ばれる<br>
                安定した身体の土台を作る
              </span>
            </h4>
            <h4>
              <img src="~assets/images/health/no02.png">
              <span>
                左右対称でゆがみのない<br>
                バランスの取れた美しい姿勢へ
              </span>
            </h4>
            <h4>
              <img src="~assets/images/health/no03.png">
              <span>
                自律神経が整い<br>
                ストレスが解消される
              </span>
            </h4>
          </div>
          <nuxt-link
            to="pilates/benefits"
            class="btn-blue_border"
          >
            ピラティスの効果
          </nuxt-link>
        </div>
      </div>
    </section>

    <section
      id="sec-history"
      class="py-5"
    >
      <div class="container">
        <div class="head-message">
          <img
            src="~assets/images/men/history-01.jpg"
            class="w-100 d-block mx-auto"
            style="max-width:400px;"
            alt="男性であるジョゼフ・ピラティスの写真"
          >
          <h2 class="pt-5 pb-3 font-title text-center">
            Pilates History
          </h2>
          <p class="py-5">
            ピラティスは、1920年代にドイツ人のJoseph  Pilates(ジョセフ・ピラティス)により生み出されました。
            ピラティス氏は、幼少期、喘息やリウマチ熱、くる病を患う非常に病弱な少年でした。病を克服するため、ヨガや体操、ボクシングなどあらゆるトレーニングに取り組み、14歳になることには病を克服し、健康な身体を手に入れたといわれています。<br>
            <br>
            第一次世界大戦中、のちに彼の名がつけられた独自のワークアウトメソッドを確立しました。ピラティス氏は、猫たちのエネルギーと敏捷性にインスパイアを受け、人間の筋肉を伸ばすための一連の運動を考案し始めました。これまで研究してきた身体訓練法をアップデートさせ、病院のベッドを利用してワークアウト器具を作り上げました。これはのちのピラティス専用のマシンの原型となるエクササイズ器具であり、彼は生涯を通して革命的なエクササイズ器具を発明し続けることになります。
            世界最大のパンデミックとよばれる「スペイン風邪」が大流行した当時、ピラティス氏のエクササイズを行った兵士たちは誰一人として病気にかからなかったという逸話もあります。
            ピラティス氏が亡くなった後も、弟子たちにより世界中に広がり、今ではピラティスの実績者は1700万人以上にものぼります。
          </p>
          <nuxt-link
            to="/pilates/history"
            class="simple-btn mx-auto d-block text-center mb-5"
          >
            ピラティスの歴史について
          </nuxt-link>
        </div>
      </div>
    </section>

    <section class="p-pilates-history-quote">
      <div class="l-new-container">
        <p>
          10回で違いを感じ<br>
          20回で見た目が変わり<br>
          30回で体のすべてが変わる<br>
          -Joseph H. Pilates
        </p>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 mx-auto">
            <h2 class="text-center pb-5">
              ピラティスは、<br class="sp">
              もとはリハビリの目的のために考案されたものです
            </h2>
            <p>
              日本でのピラティスの認知度はまだ低く、
              “ピラティスってハードそう！筋トレみたいなイメージ！運動が苦手だから心配！“など始める前に不安に思っている方の声をよく伺います。
              ピラティスの歴史から分かるように、ピラティスはリハビリを目的として考案されたワークアウトです。負傷した兵士たちができるエクササイズですので、身体に不調がある方でも行えます。むしろ体に不調を感じている方にこそぴったりな運動（エクササイズ）といえます。<br>
              <br>
              身体に無理な負担をかけすぎず、強くしなやかな筋肉をつけることができます。ピラティスの根本には医学があるため、高い効果が期待できると言われています。
              <img
                src="~assets/images/health/img02.jpg"
                alt="ピラティス写真"
                class="w-100 my-5"
              >
              始めてのピラティス体験後、<br>
              “これなら私にもできそう！”といったポジティブな声に変ってるはずです。
              そして、スタジオを出る時には、あなたもきっと全身に活力がみなぎり、体が軽くなり、明るい気持ちになっていることでしょう。
            </p>
          </div>
        </div>
        <div class="pt-5">
          <h2 class="pb-3 text-center">
            キャンペーン中！
          </h2>
          <nuxt-link
            to="/cp/cp202106"
            class="d-block mt-5"
          >
            <img
              src="~assets/images/welcome/campaign.webp"
              class="w-100 d-block mx-auto"
              alt="体験キャンペーン"
              style="max-width:500px;"
            >
          </nuxt-link>
        </div>
        <div class="text-center py-5">
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
      </div>
    </section>

    <section
      id="sec-interviews"
      class="section-opinion py-5"
    >
      <div class="container">
        <h2 class="text-center pb-3">
          身体の悩みとピラティス<br>
          <span class="font-title">Interviews</span>
        </h2>
        <div class="row py-5 mb-4">
          <div class="col-12 col-md-3">
            <a
              href="https://www.zenplace.co.jp/column/report/interview/7965.html"
              blank="_blank"
            >
              <img
                loading="lazy"
                class="w-100 pb-3"
                src="https://www.zenplace.co.jp/column/wp-content/uploads/2021/01/0118_01.jpg"
                alt="男性がマシンピラティスを行っている"
              >
            </a>
          </div>
          <div class="col-12 col-md-8">
            <!-- <span class="blog-date"> </span>-->
            <h3 class="pb-3">
              <a
                href="https://www.zenplace.co.jp/column/report/interview/7965.html"
                blank="_blank"
              >五十肩改善のためにピラティスを始めたお笑い芸人「品川庄司」の品川祐さんに直撃インタビュー</a>
            </h3>
            <p>
              大人気お笑いコンビ「品川庄司」の品川祐さんにzen place pilatesインストラクターの河辺千恵子（Chieko）が直撃インタビュー！<br>
              五十肩改善のためピラティスを始めたという品川祐さんに、ピラティスの魅力や身体の変化について伺いました。
            </p>
            <a
              href="https://www.zenplace.co.jp/column/report/interview/7965.html"
              blank="_blank"
              class="btn btn-secondary"
            >
              続きを読む
            </a>
          </div>
        </div>

        <div class="row py-5 mb-4">
          <div class="col-12 col-md-3">
            <a
              href="https://www.zenplace.co.jp/column/report/interview/7861.html"
              blank="_blank"
            >
              <img
                loading="lazy"
                class="w-100 pb-3"
                src="https://www.zenplace.co.jp/column/wp-content/uploads/2021/01/0112_3.jpg"
                alt="女性がマットピラティスを行っている"
              >
            </a>
          </div>
          <div class="col-12 col-md-8">
            <!-- <span class="blog-date"> </span>-->
            <h3 class="pb-3">
              <a
                href="https://www.zenplace.co.jp/column/report/interview/member-interview/8057.html"
                blank="_blank"
              >「ピラティスで心のニュートラルポジションを保つ」産後の不調をピラティスで改善し、心身の豊かさと向き合い続ける48歳｜ZEN PLACE会員・北本美菜さんに直撃インタビュー</a>
            </h3>
            <p>
              私は5人の子供を、なんと、全員帝王切開で産みました。5人目を生んだときは40歳をすぎていたので、産後なかなか身体が戻らず、呼吸するのが精一杯。起き上がることもできず、手の痺れで1時間以上眠ることもできませんでした。それでも数年は、騙し騙しでなんとか子供たちを育ててきたんですが…。ある日長男が、「母さんが、怒らなくなっちゃった。すかっと怒ってくれたらいいのに。」と家族にこぼしていたと聞き、自分には怒る気力すらなくなってしまっていることに気付きました。
            </p>
            <a
              href="https://www.zenplace.co.jp/column/report/interview/member-interview/8057.html"
              blank="_blank"
              class="btn btn-secondary"
            >
              続きを読む
            </a>
          </div>
        </div>

        <nuxt-link
          to="/men/interviews"
          class="simple-btn mx-auto d-block text-center my-5"
          style="cursor:pointer;"
        >
          インタビューをもっと見る
        </nuxt-link>

        <div class="text-center py-5">
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
      </div>
    </section>

    <section class="my-5 sec-sea">
      <img
        src="~assets/images/men/sea-pc.jpg"
        alt="海のイメージ"
        class="w-100 pc"
      >
      <img
        src="~assets/images/men/sea-sp.jpg"
        alt="海のイメージ"
        class="w-100 sp"
      >
    </section>

    <section class="sec-life py-5">
      <div class="container">
        <h2 class="py-5 font-title text-center">
          Lifestyle & Performance
        </h2>
        <p
          class="py-5 mx-auto"
          style="max-width:600px;"
        >
          ピラティスを行うことで身体も心も大幅に変わります。それが日常生活までに影響もあります。<br>
          仕事のパーフォマンスから、ランニングなどの趣味まで、身体とマインドのコンディションが上がります。<br><br>
          より前向きになるあなたが、今までやったことないこともチャレンジし、人生がより楽しくなります。
          <a
            href="https://www.zenplace.co.jp/column/pilates/7241.html"
            target="_blank"
            class="text-center d-block mx-auto"
            style="text-decoration:underline;"
          >
            More
          </a>
        </p>

        <div class="row py-5 lifestyle-row mx-auto">
          <div class="col-4">
            <img
              src="~assets/images/men/life-01.jpg"
              alt="会社の風景"
              class="w-100"
            >
          </div>
          <div class="col-4">
            <img
              src="~assets/images/men/life-02.jpg"
              alt="男性がゴルフをやっている写真"
              class="w-100"
            >
          </div>
          <div class="col-4">
            <img
              src="~assets/images/men/life-03.jpg"
              alt="男性がランニングしている写真"
              class="w-100"
            >
          </div>
        </div>
      </div>
      <img
        src="~assets/images/men/life-sp.jpg"
        alt="lifestyle"
        class="w-100 mx-auto py-5 sp"
      >
    </section>

    <section class="sec-pilates py-5">
      <div class="container">
        <h2 class="py-5 font-title text-center">
          zen place pilates
        </h2>
        <p
          class="py-5 mx-auto"
          style="max-width:600px;"
        >
          zen placeのピラティスは、身体の動きによって身体も心も変えていく、<a
            href="https://www.zenplace.co.jp/column/mindfulness/2726.html"
            target="_blank"
            style="text-decoration:underline;"
          >まさに動く瞑想</a>。<br>
          <br>
          最新の医学・運動学的知識を取り入れながらもピラティスの創始者が築いた基本やコンセプトを深く理解し、探求し続ける事を信条としたピラティス専門スタジオです。<br><br>
          マット・マシンピラティスのプライベートレッスンと、少人数で様々なピラティスを楽しめるグループレッスンをご用意しています。
        </p>
        <div class="text-center pb-5">
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
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '身体の悩みとピラティス',
      meta: [
        { hid: 'description', name: 'description', content: 'ピラティスは、「肩こりや腰痛など身体の不調がある人にこそお勧めしたい」です。ピラティスはリハビリを目的として考案されたワークアウトです。負傷した兵士たちができるエクササイズですので、身体に不調がある方でも行えます。むしろ体に不調を感じている方にこそぴったりな運動（エクササイズ）といえます。' },
        { hid: 'keywords', name: 'keywords', content: 'ピラティス, 肩こり, 腰痛, お悩み, 不調' },
      ],

    };
  },

  data() {
    return {
      showCollapse: false,
    };
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
@import '~assets/scss/newvariables';

.pc{display:block;}
.sp{display:none;}

h1 span { font-size: 2rem;}
h2 { font-size: 2.8rem; line-height: 2;}
h3 { font-size: 2rem; line-height: 2;}
p { line-height: 2;}
a:hover { cursor: pointer;}

ul.navbar-nav { max-width: 1000px;}
#subnavbar { top: 0px;}
.c-section--blue { background-color: #0066a4; color :#fff;}
.c-blue { color:#0066a4;}
.font-title { font-family: 'EB Garamond', serif; font-style: italic; font-size: 3rem;}
.simple-btn { max-width: 250px; border:1px solid #333; padding: 15px; cursor: pointer;}
.simple-btn:hover { text-decoration: underline; cursor: pointer;}

.c-pilates-jumbo { background-image: url(~assets/images/health/header-sp.jpg); background-repeat: no-repeat; background-size: cover; background-position: center; height: 400px; padding: 7em; color: white; font-weight: 800; font-size: 2em; text-shadow: 0px 0px 6px #555;}
.sub-header { position: relative;}
.sub-header img { height: 25vw; object-fit: cover; object-position: top;}
.sub-header h2 { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); -webkit-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%); color: white; text-shadow: 0px 0px 6px #555;}
.head-message { max-width: 600px; margin: 0 auto;}
.p-pilates-history-quote { background: url('~assets/images/pilates/history/quote-bg.jpg')no-repeat center/cover;}
.p-pilates-history-quote { display: flex; -webkit-box-align: center; align-items: center; text-align: center; min-height: 600px; padding: 40px 0; color: white;}
.p-pilates-history-quote { font-size: 3.4vw;}
.c-pilates-features { background: #ececec;}
.c-pilates-features .c-header-border-left { float: none;}
.c-pilates-features .l-new-container h4 { color: #2e6eac; margin-bottom: 24px; font-weight: 700; display: flex; line-height: 1.5;}
.c-pilates-features .l-new-container h4 img { width: 80px; margin-right: 20px; align-self: flex-start;}
.section-opinion h3{font-size:2rem; line-height:3rem;}
.section-opinion p{line-height:2.5rem;}
.lifestyle-row { max-width:1000px;}

@media screen and (max-width:768px){
  .pc{display:none;}
  .sp{display:block;}

  h1 span { font-size: 2rem;}
  .c-pilates-jumbo { padding: 2.5em 1em; background-position: top right; height: 300px;}
  #subnavbar { top: 60px;}
  .lifestyle-row { display: none;}
}

@media (max-width: 480px) {
  .p-pilates-history-quote { font-size: 6.4vw; min-height: unset;}
  .c-pilates-features .l-new-container h4 { font-size: 4.8vw;}
  .c-pilates-features .l-new-container h4 img { width: 10.66667vw;}
}

</style>
