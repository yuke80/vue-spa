<template>
  <div class="p-men-interview pt-5">
    <Breadcrumb :breadcrumbs="breadcrumbs" />

    <div class="header-top">
      <h1 class="px-3">
        <img
          src="~assets/images/men/header-title.png"
          alt="メンズピラティス"
          class="header-title mx-auto d-block"
        >
        <span class="title d-block pt-3 pb-5">メンズインタビュー
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

    <section class="section-opinion pt-5">
      <div class="container">
        <h2 class="text-center pb-3">
          メンズとピラティス
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
                alt=""
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
              href="https://www.zenplace.co.jp/column/report/interview/member-interview/8033.html"
              blank="_blank"
            >
              <img
                loading="lazy"
                class="w-100 pb-3"
                src="https://www.zenplace.co.jp/column/wp-content/uploads/2021/01/0112_03-1.jpg"
                alt=""
              >
            </a>
          </div>
          <div class="col-12 col-md-8">
            <!-- <span class="blog-date"> </span>-->
            <h3 class="pb-3">
              <a
                href="https://www.zenplace.co.jp/column/report/interview/member-interview/8033.html"
                blank="_blank"
              >楽勝だった初回レッスンから一転、身体の奥深さに気付き、ピラティスを選び続ける</a>
            </h3>
            <p>
              58歳zen place男性会員・松久功さんに直撃インタビュー。<br>
              通い始めてからしばらくして、ただ動きや形を真似するのは簡単だけど、身体の使い方によって効いてくる筋肉が違うことに気付きましたね。あと、呼吸との連動などがわかるにつれ、ピラティスの奥深さを知りました。
            </p>
            <a
              href="https://www.zenplace.co.jp/column/report/interview/member-interview/8033.html"
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
                src="https://www.zenplace.co.jp/column/wp-content/uploads/2021/01/0106_4.jpg"
                alt=""
              >
            </a>
          </div>
          <div class="col-12 col-md-8">
            <!-- <span class="blog-date"> </span>-->
            <h3 class="pb-3">
              <a
                href="https://www.zenplace.co.jp/column/report/interview/7861.html"
                blank="_blank"
              >「今を変えれば未来が変わる。」家と仕事の往復生活がピラティスで激変！</a>
            </h3>
            <p>
              チャレンジ精神が向上し、仕事や趣味で活躍の場を広げる51歳 zen place男性会員・宮下祐一さんに直撃インタビュー。<br>
              レッスンを受けるごとに少しずつ「呼吸が動きを助ける」という感覚がわかるようになり、同時に身体が動くようになってからは益々面白くなったという感じですね。<br>
              また、スタジオ通いが習慣になったことで、そこで知り合った会員さんと色々なことにチャレンジするようになったのが大きいかも知れません。
            </p>
            <a
              href="https://www.zenplace.co.jp/column/report/interview/7861.html"
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
              href="https://www.zenplace.co.jp/column/report/interview/7712.html"
              blank="_blank"
            >
              <img
                loading="lazy"
                class="w-100 pb-3"
                src="https://www.zenplace.co.jp/column/wp-content/uploads/2020/12/01.jpg"
                alt=""
              >
            </a>
          </div>
          <div class="col-12 col-md-8">
            <!-- <span class="blog-date"> </span>-->
            <h3 class="pb-3">
              <a
                href="https://www.zenplace.co.jp/column/report/interview/7712.html"
                blank="_blank"
              >「ピラティスのおかげで去年よりも体力も精神力も上がっている実感」空手、登山と、アクティブに活動する56才</a>
            </h3>
            <p>
              zen place男性会員・松本司さんに直撃インタビュー。<br>
              「10年前から空手をやっていて、空手の動きをよくするために、zen placeピラティスをはじめました。とにかく身体が動かなかったんですが、ピラティスで身体の正しい動かし方を学ぶ事で、どんどん動くようになりました。 ピラティスを続ける中で気付いたんですが、空手とピラティスは、身体の動かし方が共通する部分 があるんです。」
            </p>
            <a
              href="https://www.zenplace.co.jp/column/report/interview/7712.html"
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
              href="https://www.zenplace.co.jp/column/report/interview/7689.html"
              blank="_blank"
            >
              <img
                loading="lazy"
                class="w-100 pb-3"
                src="https://www.zenplace.co.jp/column/wp-content/uploads/2020/12/%E3%83%80%E3%83%B3%E3%83%86%E3%81%95%E3%82%93%E2%91%A2-1.jpg"
                alt=""
              >
            </a>
          </div>
          <div class="col-12 col-md-8">
            <!-- <span class="blog-date"> </span>-->
            <h3 class="pb-3">
              <a
                href="https://www.zenplace.co.jp/column/report/interview/7689.html"
                blank="_blank"
              >「筋トレ男子はピラティスもやるべき！」ダンテ・カーヴァーさんが勧めるボディメンテナンスとは！？</a>
            </h3>
            <p>
              某携帯電話のCMで人気のタレント、ダンテ・カーヴァ―さんのzen place公式ピラティストレーニングサポートがスタートしました！「筋トレ大好き」なダンテさんの身体は、沢山鍛えた部分とそうでない部分のバランスの悪さが、機能面での支障に繋がっているとのこと。特にタイトになってしまっている腰椎周辺を中心に背骨を整え、インナーマッスルを強化することで、見栄えだけでなく機能を向上し、ピラティスならではのマインドフルな状態を実感していただけるようピラティスでサポートさせていただきます！
            </p>
            <a
              href="https://www.zenplace.co.jp/column/report/interview/7689.html"
              blank="_blank"
              class="btn btn-secondary"
            >
              続きを読む
            </a>
          </div>
        </div>
        <div class="row py-5 mb-4 section-line">
          <div class="col-12 col-md-3">
            <a
              href="https://www.zenplace.co.jp/column/report/interview/7673.html"
              blank="_blank"
            >
              <img
                loading="lazy"
                class="w-100 pb-3"
                src="https://www.zenplace.co.jp/column/wp-content/uploads/2020/12/1807107_s.jpg"
                alt="マラソンイメージ"
              >
            </a>
          </div>
          <div class="col-12 col-md-8">
            <h3 class="pb-3">
              <a
                href="https://www.zenplace.co.jp/column/report/interview/7673.html"
                blank="_blank"
              >フルマラソンのタイムが40分以上短縮したエピソードから、アスリートへのピラティスの効果を紐解く！</a>
            </h3>
            <span class="blog-date">By Hiroya</span>
            <p>
              サッカーのクリスティアーノ・ロナウド選手や、ゴルフのタイガー・ウッズ選手など、世界の有名アスリートが取り組んでいるピラティス。<br>ピラティスは、怪我の予防やスピードアップ、身体感覚の向上、身体のメンテナンス等、 スポーツをする人にとって、たくさんのメリットがあります。私自身も、フルマラソンの タイムが1年間で43分早くなったという体験をしました！
            </p>
            <a
              href="https://www.zenplace.co.jp/column/report/interview/7673.html"
              blank="_blank"
              class="btn btn-secondary"
            >
              続きを読む
            </a>

            <div class="d-infonote row mt-5">
              <div class="col-4 col-md-2">
                <img
                  src="https://www.zenplace.co.jp/column/wp-content/uploads/2020/12/Hiroya_profile.jpeg"
                  alt="Hiroya.A"
                  class="w-100"
                  style="max-width:100px;"
                >
              </div>
              <div class="col-8 col-md-10 present-info">
                <nuxt-link
                  to="/instructors/99419577"
                  class="blue-link d-block"
                >
                  Hiroya.A
                </nuxt-link>
                zen place所属 ピラティス・インストラクター歴5年<br><br>
                zen place pilates by basi大森スタジオ所属
              </div>
            </div>
          </div>
        </div>
        <div class="row py-5 mb-4 section-line">
          <div class="col-12 col-md-3">
            <a
              href="https://www.zenplace.co.jp/column/report/interview/7532.html"
              blank="_blank"
            >
              <img
                loading="lazy"
                class="w-100 pb-3"
                src="https://www.zenplace.co.jp/column/wp-content/uploads/2020/11/takuya_pilates1.png"
                alt="Takuyaさんの写真"
              >
            </a>
          </div>
          <div class="col-12 col-md-8">
            <h3 class="pb-3">
              <a
                href="https://www.zenplace.co.jp/column/report/interview/7532.html"
                blank="_blank"
              >ピラティスは、「男性による、男性の為の、心と身体のコントロール術」</a>
            </h3>
            <span class="blog-date">By Takuya</span>
            <p>
              女性のためのエクササイズであるというイメージの強いピラティスだが、ピラティスを考案者のジョセフ・ピラティス氏は男性。幼少時代、病弱だった彼は、「身体・心・精神のバランス」について30年以上にわたり研究をし続け、脳からの指令で身体をコントロールすることで元気を回復させ、心を活性化させ、精神力を高めることを目的にエクササイズを考案したそうだ。
            </p>
            <a
              href="https://www.zenplace.co.jp/column/report/interview/7532.html"
              blank="_blank"
              class="btn btn-secondary"
            >
              続きを読む
            </a>

            <div class="d-infonote row mt-5">
              <div class="col-4 col-md-2">
                <img
                  src="https://www.zenplace.co.jp/column/wp-content/uploads/2020/11/image_face_10348_ccd02c76e540b78ed99be299ea3715fc.jpg"
                  alt="Takuya"
                  class="w-100"
                  style="max-width:100px;"
                >
              </div>
              <div class="col-8 col-md-10 present-info">
                <nuxt-link
                  to="/instructors/99344191"
                  class="blue-link d-block"
                >
                  Takuya（渡邉拓也）
                </nuxt-link>
                zen placeインストラクター歴７年<br><br>
                BASI Certified Comprehensive Instructor1、全米ストレングス＆コンディショニング協会(NSCA)　認定パーソナルトレーナー、TCS認定コーチングスキルアドバイザー
              </div>
            </div>
          </div>
        </div>
        <div class="row py-5 mb-4 section-line">
          <div class="col-12 col-md-3">
            <a
              href="https://www.zenplace.co.jp/column/report/interview/7651.html"
              blank="_blank"
            >
              <img
                loading="lazy"
                class="w-100 pb-3"
                src="https://www.zenplace.co.jp/column/wp-content/uploads/2016/09/9e6f47b88e1b13db23092208d6f2dc93_s-e1473325465628.jpg"
                alt=""
              >
            </a>
          </div>
          <div class="col-12 col-md-8">
            <h3 class="pb-3">
              <a
                href="https://www.zenplace.co.jp/column/report/interview/7651.html"
                blank="_blank"
              >ビジネスパーソンの慢性的な腰痛にはピラティス！</a>
            </h3>
            <span class="blog-date">By Tatsuya.S</span>
            <p>
              日本国内だけでも3200万人が悩んでいるというほど、多くの人を困らせている、腰痛。その8割は、医療機関で検査をしても、痛みの原因となる異常がみつけられないという。<br>
              腰痛改善に効果があると言われる「ピラティス」は、女性のためのエクササイズであるというイメージの強いが、実は、男性にこそお勧めしたいエクササイズ。
            </p>
            <a
              href="https://www.zenplace.co.jp/column/report/interview/7651.html"
              blank="_blank"
              class="btn btn-secondary"
            >
              続きを読む
            </a>

            <div class="d-infonote row mt-5">
              <div class="col-4 col-md-2">
                <img
                  src="https://www.zenplace.co.jp/column/wp-content/uploads/2020/11/tatsuya.jpg"
                  alt="Tatsuya"
                  class="w-100"
                  style="max-width:100px;"
                >
              </div>
              <div class="col-8 col-md-10 present-info">
                <nuxt-link
                  to="/instructors/99440584"
                  class="blue-link d-block"
                >
                  Tatsuya.S
                </nuxt-link>
                zen place所属　ピラティス・インストラクター歴5年<br><br>
                理学療法士、健康運動指導士、介護支援専門誌
              </div>
            </div>
          </div>
        </div>
        <div class="row py-5 mb-4 section-line">
          <div class="col-12 col-md-3">
            <a
              href="https://www.zenplace.co.jp/column/report/interview/7577.html"
              blank="_blank"
            >
              <img
                loading="lazy"
                class="w-100 pb-3"
                src="https://www.zenplace.co.jp/column/wp-content/uploads/2020/11/img-step07-1.jpg"
                alt=""
              >
            </a>
          </div>
          <div class="col-12 col-md-8">
            <!-- <span class="blog-date"> </span>-->
            <h3 class="pb-3">
              <a
                href="https://www.zenplace.co.jp/column/report/interview/7577.html"
                blank="_blank"
              >メンズピラティス体験記</a>
            </h3>
            <p>
              株式会社SN Japanの代表取締役である福原洋一さんにピラティスをご体験頂きました。<br>
              サーファーでありヨガの経験もある福原さんは胸板も厚く筋肉質。<br>
              運動には自信がありそうですが、男性特有の筋肉の硬さから身体全体のアライメントが崩れていそう。そんな福原さんにとってピラティスはどのように感じるでしょうか？
            </p>
            <a
              href="https://www.zenplace.co.jp/column/report/interview/7577.html"
              blank="_blank"
              class="btn btn-secondary"
            >
              続きを読む
            </a>
          </div>
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
</template>

<script>
export default {
  head() {
    return {
      title: 'メンズとピラティス',
      meta: [
        { hid: 'description', name: 'description', content: 'WE LOVE PILATES! 私たちはピラティスの魅力にあらがうことのできない、ピラティス大好き集団です。美しい姿勢は体幹と背骨から生まれます。美しい笑顔はポジティブで、楽観的な心から生まれます。ピラティスが美しさ姿勢と笑顔を作れるのには理由があります。初心者から上級者まで楽しくピラティスを！' },
        { hid: 'og:description', property: 'og:description', content: 'WE LOVE PILATES! 私たちはピラティスの魅力にあらがうことのできない、ピラティス大好き集団です。美しい姿勢は体幹と背骨から生まれます。美しい笑顔はポジティブで、楽観的な心から生まれます。ピラティスが美しさ姿勢と笑顔を作れるのには理由があります。初心者から上級者まで楽しくピラティスを！' },
        { hid: 'og:image', property: 'og:image', content: 'https://www.zenplace.co.jp/og.jpg' },
        { hid: 'keywords', name: 'keywords', content: 'ピラティス, スタジオ, 体験' },
      ],
      link: [
        { rel: 'canonical', href: 'https://www.zenplace.co.jp/men/interviews' },
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
            name: 'メンズインタビュー',
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
.p-men-interview {
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

.section-line{border-top:1px solid #e3e3e3;}
span.blog-date{
    font-size: 1.5rem;
    color: #999;
    display: block;
    padding-bottom: 10px;}

div.d-infonote{padding:10px; background-color: #f5f5f5;}
.d-infonote .present-info{ font-size:1.4rem; line-height:2rem;}
span.red-span{color:red; display:block; margin-bottom:5px; }
a.blue-link{color:#0066a4; text-decoration:underline;}
a.btn-secondary{width:105px;}

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

}

</style>
