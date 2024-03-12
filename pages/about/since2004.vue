<template>
  <div>
    <Breadcrumb :breadcrumbs="breadcrumbs" />

    <seciton class="sec-concept">
      <div class="l-container">
        <div class="text-center contents-box">
          <h1>
            <img
              src="~/assets/images/top/since2004.svg"
              alt="since 2004"
              class="w-15"
            >
          </h1>
          <p class="mincho text-center pt-5 pt-md-6 pc">
            zen placeが提案する、Well-being<br><br>

            構想から約20年、zen placeは世界の企業、団体と連携し<br>
            最先端テクノロジーやサイエンス、研究結果をも取り入れ<br>
            世界基準のレッスンを提供する、本格ピラティス・ヨガスタジオです。<br><br>

            脳の概念化、脳システムに基づき<br>
            知覚、実践で科学的に立証されたzen placeのピラティス・ヨガで<br>
            Well-beingの創造をサポートします。
          </p>
          <p class="mincho text-center pt-5 pt-md-6 sp">
            zen placeが提案する、Well-being<br><br>
            構想から約20年、<br>
            zen placeは世界の企業・団体と連携し<br>
            最 先 端 テクノロジーや サイエンス<br>
            研究結果をも取り入れ<br>
            世界基準のレッスンを提供する<br>
            本 格ピラティス・ヨガスタジオです。<br><br>
            脳の概念化、脳システムに基づき<br>
            知覚、実践で科学的に立証された<br>
            zen placeのピラティス・ヨガで<br>
            Well-beingの創造をサポートします。
          </p>
        </div>
      </div>
    </seciton>

    <section class="sec-text">
      <div class="l-container">
        <div class="row">
          <div class="col-6 px-0">
            <h2 class="blue">
              Well-beingを<br>ライフスタイルに
            </h2>
          </div>
          <div class="col-6">
            <p class="pt-md-0 pt-3">
              Since 2004 - zen placeはピラティス・ヨガ界のリーディングカンパニーとして、BASIピラティス、BalancedBody®、YogaWorks®、ビクラムヨガなど、ピラティス・ヨガの世界Top企業・団体との提携を通して、18年間世界レベルのピラティス・ヨガを提供し続けてまいりました。<br>
              ピラティス・ヨガを単なる運動、フィットネスとしてとらえるのではなく、心と身体を変える科学的なメソッドとして、日本のウェルビーイングを向上させるために日々努力しております。<br>
              <br>
              zen placeのピラティス・ヨガは、最先端テクノロジーやサイエンス、研究結果をも学び続けたピラティス・ヨガです。<br>
              <br>
              <strong class="blue">人生観が変わる、人生を変えるピラティス・ヨガ</strong><br>
              <br>
              世界の教育団体や世界で活躍する指導者から直接学ぶなどのグローバルな視点や、業界初のAIによる『背骨ムーブメント解析』を開発など、最先端テクノロジーを導入し、挑戦を重ねています。<br>
              情熱を持ってピラティス・ヨガの本質に向き合い続けた私たちだからこそ、共有できる理論と気付き、そして喜びがあります。<br>
              背骨周りの「微細なインナーマッスルに意識を向ける＝背骨を一骨ずつ丁寧に動かす」という、細かい筋肉や神経・細胞レベルで、動きに集中することにより『深い瞑想効果・フロー状態』へ導き、いままでの過度な不安や今までの思考の癖を取り払い、自分らしく自由で、明るくオープンマインドな人を増やしていきたいと考えています。<br>
              自然と身体がしなやかで伸びあがっていく感覚、これまでのピラティス・ヨガとの本質的なこと、続けることによる心と身体の繋がりを感じてください。<br>
              <br>
              <strong class="blue">私たちと一緒に、Well-beingの実現とその先へ。</strong>
            </p>
            <div class="pt-4 pt-md-5">
              <nuxt-link
                to="/about"
                class="btn-blue_border"
              >
                zen placeとは
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  head() {
    return {
      title: 'zen place since 2004',
      meta: [
        { charset: 'utf-8' },
        { hid: 'og:title', property: 'og:title', content: 'zen place since 2004' },
        { hid: 'description', name: 'description', content: 'zen placeは、世界最先端を学べるピラティス・ヨガスタジオ。世界最先端のメソッドを常に凝縮・アップデートし、レッスンを受けた方が自分の心・身体の変化に気づいてココロとカラダが満たされ、豊かに生きる人が増える場所を提供しています。' },
        { hid: 'og:description', property: 'og:description', content: 'zen placeは、世界最先端を学べるピラティス・ヨガスタジオ。世界最先端のメソッドを常に凝縮・アップデートし、レッスンを受けた方が自分の心・身体の変化に気づいてココロとカラダが満たされ、豊かに生きる人が増える場所を提供しています。' },
        { hid: 'og:image', property: 'og:image', content: 'https://www.zenplace.co.jp/og-about.jpg' },
        { hid: 'keywords', name: 'keywords', content: 'zen place, since 2004' },
      ],
      link: [
        { rel: 'canonical', href: 'https://www.zenplace.co.jp/about/since2004' },
      ],
    };
  },
  components: {
  },
  data() {
    return {
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
            path: '/about',
          },
          {
            name: 'since 2004',
          },
        ],
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~assets/scss/newvariables';
@import '~assets/scss/variables';

.sec-concept {
  padding: 80px 0;
  @include tab {
    padding: 50px 0;
  }
    display: block;
    // linear-gradient(black, black),
    background:url('~assets/images/about/beginner/since2004.webp') no-repeat center;
    background-size: cover;
    background-position:63%;
    // background-blend-mode: saturation;
    filter: grayscale(60%) brightness(100%)contrast(100%);
    @include tab {
      background-position:65%;
    }
    .contents-box {
      padding: 210px 0;
      @include tab {
        padding: 60px 0;
      }
      img {
        width: 15%;
        @include tab {
          width: 30%;
        }
      }
      p {
        color: #fff;
        font-size: 2rem;
        line-height: 1.7;
        font-weight: 500;
        @include tab {
          font-size: 1.6rem;
        }
      }
    }
}

.sec-text {
  padding: 80px 0;
  @include tab {
    padding: 50px 0;
  }
  padding-bottom: 0;
  line-height: 2;
  h2 {
    font-size: 6rem;
    font-weight: bold;
  }

  strong {
    font-size: 1.8rem;
  }
}
</style>
