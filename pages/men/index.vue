<template>
  <div class="p-men-top">
    <PageHeader
      title="男性とピラティス"
      :img="headerImg"
    />
    <Breadcrumb :breadcrumbs="breadcrumbs" />

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
              to="/pilates/history"
              class="nav-item mx-auto my-2"
            >
              ピラティスの歴史
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

    <section class="sec-history container mb-5">
      <h2 class="text-center py-5">
        ピラティスは、<br class="sp">男性にこそお勧めしたい
      </h2>
      <div class="head-message">
        <img
          src="~assets/images/men/history-01.jpg"
          class="w-100 d-block mx-auto py-5"
          style="max-width:400px;"
          alt="男性であるジョゼフ・ピラティスの写真"
        >

        <h2 class="pt-5 pb-3 font-title text-center">
          Pilates History
        </h2>
        <p class="py-5">
          ピラティスを作った、ジョセフ・ピラティス氏は、幼少期から、リウマチ熱・くる病、ぜんそくを患う、病弱な少年でした。病気を克服するため、ヨガ、太極拳などに取り組み、14歳になる頃には、健康な身体を手に入れたそうです。<br><br>
          1914年、彼が30歳を超えた頃、第一次世界大戦が始まり、イギリスで拘留されてしまいます。拘留中の4年間、囚人のためにエクササイズを施し、それがピラティスの原型になりました。<br><br>
          ジョセフ・ピラティスが、収容所で拘留されていた 1918年、世界中でインフルエンザ（スペイン風邪）が大流行しました。世界人口の25〜30％が感染、戦争犠牲者より多い、4000万人が亡くなったそうです。ピラティス氏のエクササイズを行った囚人達は誰1人スペイン風邪にかからなかったそうです。ピラティスは、免疫力を上げ、病気を治し、リハビリを目的に作られたメソッドなのです。
        </p>
      </div>
      <nuxt-link
        to="/pilates/history"
        class="simple-btn mx-auto d-block text-center mb-5"
      >
        ピラティスの歴史について
      </nuxt-link>
    </section>
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 mx-auto">
            <h2 class="text-center pb-5">
              元々ピラティスは<br class="sp">男性のために<br>考案されたものです。
            </h2>
            <p>
              日本ではピラティスは女性のためのものというイメージがありますが、アメリカなどの外国では多くの男性がピラティスを行っています。<br>
              それもそのはず、ピラティスはもともと男性のために考案されたエクササイズなのです。そのため、世界的に見るとピラティス=女性のものというイメージはほぼありません。<br>
              <img
                src="~assets/images/men/men-pilates.jpg"
                alt="男性ピラティス"
                class="w-100 my-5"
              >
              ピラティスは、第一次世界大戦で負傷した兵士のリハビリ目的で考案されました。<br>
              負傷者でもできるエクササイズのため、体に無理な負担が掛かることはありません。<br>
              ピラティスの根本には医学があるため、高い効果が期待できると言われています。<br>
              女性がピラティスを行う主な目的はダイエットですが、男性はダイエット目的に限りません。<br>
              どちらかというと筋力を付けて、健康を維持するために行う人が多いように思えます。<br>
              また、自律神経の乱れを整える効果もあることから、ストレスが溜まりがちな働き盛りの男性にももってこいです。<br>
              もちろんピラティスではダイエット効果も期待できるため、内臓脂肪やメタボが気になる男性にもおすすめです。
            </p>
          </div>
        </div>
        <div class="text-center py-5">
          <h3>初めての方へ</h3>
          <p class="pt-3">
            ※スタジオは男女共用です。
          </p>
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

      <img
        src="~assets/images/men/zenplacepilates.jpg"
        alt="男性もピラティスでライフスタイルを変えます"
        class="w-100 mx-auto py-5 pc"
      >
      <img
        src="~assets/images/men/zenplacepilates-sp.jpg"
        alt="男性もピラティスでライフスタイルを変えます"
        class="w-100 mx-auto py-5 sp"
      >
    </section>

    <section class="section-opinion py-5">
      <div class="container">
        <h2 class="text-center pb-3">
          男性とピラティス<br>
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
                src="https://www.zenplace.co.jp/column/wp-content/uploads/2021/01/0106_4.jpg"
                alt="男性がマシンピラティスを行っている"
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
                alt="男性がマシンピラティスを行っている"
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

        <nuxt-link
          to="/men/interviews"
          class="simple-btn mx-auto d-block text-center my-5"
          style="cursor:pointer;"
        >
          インタビューをもっと見る
        </nuxt-link>
      </div>
    </section>

    <CtaLower />

    <section
      class="py-5"
    >
      <div
        class="container"
        style="max-width: 900px;"
      >
        <div
          class="p-top-genre border-0"
        >
          <div class="p-top-genre__item">
            <h2 class="c-section-heading py-5">
              ピラティスの効果
            </h2>

            <div
              class="p-top-genre border-0"
            >
              <div class="p-top-genre__item row justify-content-md-between py-5">
                <div class="col-8 col-md-5 p-0">
                  <img
                    loading="lazy"
                    src="~/assets/images/men/benef-01.jpg"
                    alt="ピラティスでストレスの軽減、集中力の向上"
                    class="w-100 mb-5"
                  >
                </div>
                <div class="col-12 col-md-6">
                  <h3 class="p-top-genre__heading">
                    ストレスの軽減、集中力の向上
                  </h3>
                  <p class="p-top-genre__text pb-3">
                    外資系企業、IT企業が「マインドフルネス瞑想」を導入事例が増えています。<br>
                    ピラティスが「マインドボディエクササイズ（mind-body exercise）」と言われる、身体の動き、精神の集中、呼吸のコントロールを一つにする運動を行います。エクササイズ中は自身の小さな筋肉（インナーマッスル）にまで意識を向け、呼吸とムーブメントを連動させていくマインドフルな時間です。日頃の煩悩を捨て動きに集中することで、気分転換となりストレス発散にもなります。
                  </p>
                  <div class="p-top-genre__button pl-0">
                    <a
                      href="https://www.zenplace.co.jp/column/report/55.html"
                      target="_blank"
                      class="simple-btn mx-auto d-block text-center mb-5"
                    >
                      More
                    </a>
                  </div>
                </div>
              </div>
              <div class="p-top-genre__item row justify-content-md-between py-5">
                <div class="col-8 col-md-5 p-0 order-md-2 mx-auto text-center">
                  <img
                    loading="lazy"
                    src="~/assets/images/men/benef-02.jpg"
                    alt="ピラティスで腰痛改善"
                    class="w-100 mb-5"
                  >
                </div>
                <div class="col-12 col-md-6 order-md-1">
                  <h3 class="p-top-genre__heading">
                    腰痛改善にピラティスが常識
                  </h3>
                  <p class="p-top-genre__text pb-3">
                    元々はリハビリのために生まれたピラティスがインナーマッスルを強化し、腰痛や肩こりの改善・予防に効果があります。<br>
                    長時間のデスクワークなどで悪い姿勢を続けていると腰に痛みが生じる場合があります。<br>
                    ピラティスでインナーマッスルを鍛えて、正しい姿勢を維持することが腰痛の改善につながります。
                  </p>
                  <div class="p-top-genre__button pl-0">
                    <a
                      href="https://www.zenplace.co.jp/column/body/4930.html"
                      target="_blank"
                      class="simple-btn mx-auto d-block text-center mb-5"
                    >
                      More
                    </a>
                  </div>
                </div>
              </div>
              <div class="p-top-genre__item row justify-content-md-between py-5">
                <div class="col-8 col-md-5 p-0">
                  <img
                    loading="lazy"
                    src="~/assets/images/men/benef-03.jpg"
                    alt="ピラティスでスポーツパフォーマンス向上"
                    class="w-100 mb-5"
                  >
                </div>
                <div class="col-12 col-md-6">
                  <h3 class="p-top-genre__heading">
                    トップアスリートのパフォーマンス向上
                  </h3>
                  <p class="p-top-genre__text pb-3">
                    男性・女性のプロゴルファー、テニスやサッカー選手などもピラティスを取り入れています。<br>
                    ピラティスで体幹をしっかりと安定させることで腕や脚の動きがしっかりと外へと伝わり、体をイメージ通りに動かすことができるようになります。その結果、パフォーマンスを高めることができます。
                  </p>
                  <div class="p-top-genre__button pl-0">
                    <a
                      href="https://www.zenplace.co.jp/column/pilates/2337.html"
                      target="_blank"
                      class="simple-btn mx-auto d-block text-center mb-5"
                    >
                      More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue';
import CtaLower from '~/components/CtaLower.vue';

const headerImg = require('@/assets/images/men/header-sp.jpg');

export default {
  head() {
    return {
      title: '男性とピラティス',
      meta: [
        { hid: 'description', name: 'description', content: 'ピラティスは、「男性による、男性の為の、心と身体のコントロール術」です。女性のためのエクササイズであるというイメージの強いピラティスだが、ピラティスを考案者のジョセフ・ピラティス氏は男性。幼少時代、病弱だった彼は、「身体・心・精神のバランス」について30年以上にわたり研究をし続け、脳からの指令で身体をコントロールすることで元気を回復させ、心を活性化させ、精神力を高めることを目的にエクササイズを考案したそうだ。' },
        { hid: 'og:description', property: 'og:description', content: 'ピラティスは、「男性による、男性の為の、心と身体のコントロール術」です。女性のためのエクササイズであるというイメージの強いピラティスだが、ピラティスを考案者のジョセフ・ピラティス氏は男性。幼少時代、病弱だった彼は、「身体・心・精神のバランス」について30年以上にわたり研究をし続け、脳からの指令で身体をコントロールすることで元気を回復させ、心を活性化させ、精神力を高めることを目的にエクササイズを考案したそうだ。' },
        { hid: 'og:image', property: 'og:image', content: 'https://www.zenplace.co.jp/og.jpg' },
        { hid: 'keywords', name: 'keywords', content: 'ピラティス, スタジオ, 体験, メンズ, 男性' },
      ],
      link: [
        { rel: 'canonical', href: 'https://www.zenplace.co.jp/men' },
      ],
    };
  },

  components: {
    PageHeader,
    CtaLower,
  },

  data() {
    return {
      showCollapse: false,
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
            name: 'メンズピラティス',
            path: '/men',
          },
          {
            name: '男性とピラティス',
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

<style lang="scss">
@import '~assets/scss/variables';
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital@1&display=swap');

.p-men-top h1{ text-shadow: 1px 1px 4px rgba(0,0,0,0.4); }

a:hover{cursor:pointer;}

.font-title{
  font-family: 'EB Garamond', serif;
  font-style: italic;
  font-size:3rem;
}
p{line-height:3.5rem;}

.header-top{position:relative;}

ul.navbar-nav{max-width: 1000px;}

#subnavbar {top:0px;}
.c-section--blue{background-color:#0066a4; color:#fff;}
.c-blue{color:#0066a4;}

.head-message{
  max-width:600px;
  margin:0 auto;
}

.simple-btn{max-width:250px; border:1px solid #333; padding:15px; cursor:pointer;}
.simple-btn:hover{text-decoration:underline; cursor:pointer;}
.lifestyle-row{max-width:1000px;}

.pc{display:block;}
.sp{display:none;}

.section-opinion h3{font-size:2rem; line-height:3rem;}
.section-opinion p{line-height:2.5rem;}

@media screen and (max-width:768px){
.c-pilates-jumbo { padding: 2.5em 1em; background-position: top right; height: 300px;}

.pc{display:none;}
.sp{display:block;}

p{line-height:3rem;}

#subnavbar {top:60px;}

.lifestyle-row{display:none;}

}

</style>
