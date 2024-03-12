<template>
  <div class="p-opinion">
    <Breadcrumb :breadcrumbs="breadcrumbs" />

    <h1 class="sub-main-title text-center pt-5 pb-5">
      新型コロナウイルス感染拡大に関する<br class="pc">zen placeの考えについて
    </h1>
    <div class="mx-auto col-md-6">
      <nuxt-link
        to="/info/corona"
        class=""
        target="_blank"
      >
        <img
          src="~assets/images/info/corona/info-ban.png"
          alt="感染予防のための安全対策について"
          class="w-100 d-block mx-auto"
          style="max-width:350px;"
        >
      </nuxt-link>
    </div>
    <div class="container">
      <section class="section-pb">
        <div class="py-5 mb-4">
          <p>
            私たちのスタジオは、ヨガやピラティスのムーブメント（マインドフル・ムーブメントと呼んでいます）を通じて豊かな生活を作ることを目的としています。最も重要なことは、ムーブメントによって、自律神経や、内分泌系に働きかけ、全身の器官や脳神経系を通じて、マインドフルな状態になっていくことを念頭に置いています。<br><br>
            重要と考えることの１つに、不安、恐怖という感情のコントロールがあります。これが多くのケースで、豊かさや健康の障害を引き起こすことがあります。不安、恐怖の感情は、自分を守るという行為を強化します。これは他者と繋がるという、人が社会の中で生きる上での豊かさにおいて大切な要素を減退させてしまいます。不安、恐怖の感情は、実際に起きうること、予測しうる問題の何倍も頭の中で膨らんでしまいます。これが「大脳の暴走」というものです。<br>
            <br>
            2020年10月の自殺者は2153人であることが発表されました。男性は前年同月比で21.3％増えて1302人。女性は前年同月比で82.6％も増えたそうです。<br>
            大脳の暴走は、大脳辺縁系、扁桃体を刺激して、恐怖感情を強めます。これが強まっていくことで、視床下部などの機能である、自律神経や内分泌系の機能を阻害していきます。これが多くの病気、ストレス起因の病気、がん、ぜんそく、リューマチ、アレルギーなどの真因です。うつ病などの精神疾患もここから起きることもあります。この大脳の暴走は、脳幹の機能、睡眠や食欲、性欲などのより人間の本質的な機能も阻害していきます。睡眠障害、過食やEDなども引き起こします。<br>
            <br>
            これを静めるのに効果を発揮するのが、ヨガ、ピラティス、瞑想だと私たちは考えます。大脳の暴走を止め、大脳皮質が正常に機能させ、大脳辺縁系と脳幹と正常に連携していく身体を作る、というのが、zen place のピラティス、zen place のヨガの本質です。<br>
            <br>
            私たちzen placeは、この過剰な恐怖や不安を取り除く、心の働きを作ること、そして、自律神経や内分泌系、免疫系の機能を強化していくような、ピラティス、ヨガを提供し続けており、それは今後も変わりません。zen placeに通うお客様に、ピラティス、ヨガのレッスンを、感染対策を徹底したスタジオで、あるいはオンラインでと、今まで通り積極的に受けていただくことが、感染症にかかることなく、今まで通り豊かに生活を送っていただくための方法だと考えています。
          </p>
          <span class="d-block pt-5 text-right">zen place 代表 尾崎 成彦</span>
        </div>
      </section>

      <section class="section-opinion py-5">
        <h2 class="text-center py-5">
          zen place Magazine
        </h2>
        <p class="py-3 text-center">
          zen place magazineはスタジオでも無料で配布中！
        </p>
        <div class="row pt-5">
          <div class="col-12 col-md-4 my-3">
            <nuxt-link
              to="/opinion/magazine01"
              target="_blank"
              class="mag-link"
            >
              <img
                src="~assets/images/opinion/mag01.jpg"
                class="w-100 d-block mx-auto"
                alt="マガジン01"
              >
              <p class="mag-btn">
                マガジンを読む
              </p>
            </nuxt-link>
          </div>
          <div class="col-12 col-md-4 my-3">
            <nuxt-link
              to="/opinion/magazine02"
              target="_blank"
              class="mag-link"
            >
              <img
                src="~assets/images/opinion/mag02.jpg"
                class="w-100 d-block mx-auto"
                alt="マガジン02"
              >
              <p class="mag-btn">
                マガジンを読む
              </p>
            </nuxt-link>
          </div>
          <div class="col-12 col-md-4 my-3">
            <nuxt-link
              to="/opinion/magazine03"
              target="_blank"
              class="mag-link"
            >
              <img
                src="~assets/images/opinion/mag03.jpg"
                class="w-100 d-block mx-auto"
                alt="マガジン02"
              >
              <p class="mag-btn">
                マガジンを読む
              </p>
            </nuxt-link>
          </div>
        </div>
      </section>

      <section class="section-opinion pt-5 mt-5">
        <h2 class="text-center py-5 mb-5">
          zen place opinion
        </h2>
        <div class="row py-5 mb-4">
          <div class="col-12 col-md-3">
            <img
              loading="lazy"
              class="w-100 pb-3"
              src="~assets/images/opinion/jun_profile.jpg"
              alt="布施淳のプロフィール写真"
            >
          </div>
          <div class="col-12 col-md-8">
            <span class="blog-date">2020.11.24</span>
            <h3>再拡大しつつある新型コロナウイルスの感染に対する新習慣</h3>
            <p>
              <a
                href="https://clinic.zenplace.co.jp/"
                style="text-decoration:underline;"
              > ウェルビーイングクリニック駒沢公園</a> 布施淳院長
            </p>
            <p class="p-infonote">
              <span class="red-span">【期間限定】</span>　<a
                href="https://forms.gle/JkBgDgUCiSgrirmT6"
                target="_blank"
                class="blue-link"
              >無料相談窓口</a>　コロナ感染が不安な方へ<br>
              ※循環器内科のウェルビーイングクリニックが無料で相談窓口を開設中<br>
              ※診療予約は<a
                href="https://coubic.com/wellbeingclinic/906959/express/"
                target="_blank"
                class="blue-link"
              >こちら</a>
            </p>
            <p>
              この原稿を書いている2020年11月23日は3連休中で各地で賑わいを見せておりますが、新型コロナウイルスの感染者は増加傾向であり、今後更なる感染拡大が懸念されます。私たちの生活も自粛ムードが再度高まる可能性があります。
            </p>
            <a
              class="btn btn-secondary"
              href="https://www.zenplace.co.jp/column/body/8211.html"
              target="_blank"
            >
              続きを読む
            </a>
          </div>
        </div>
        <div class="row py-5 mb-4">
          <div class="col-12 col-md-3">
            <img
              loading="lazy"
              class="w-100 pb-3"
              src="~assets/images/opinion/0420.jpg"
              alt="布施淳のプロフィール写真"
            >
          </div>
          <div class="col-12 col-md-8">
            <span class="blog-date">2020.04.20</span>
            <h3>コロナ時代は10代以下の子供達もヨガ・ピラティス</h3>
            <p>
              <a
                href="https://clinic.zenplace.co.jp/"
                style="text-decoration:underline;"
              > ウェルビーイングクリニック駒沢公園</a> 布施淳院長
            </p>
            <p class="p-infonote">
              <span class="red-span">【期間限定】</span>　<a
                href="https://forms.gle/JkBgDgUCiSgrirmT6"
                target="_blank"
                class="blue-link"
              >無料相談窓口</a>　コロナ感染が不安な方へ<br>
              ※循環器内科のウェルビーイングクリニックが無料で相談窓口を開設中<br>
              ※診療予約は<a
                href="https://coubic.com/wellbeingclinic/906959/express/"
                target="_blank"
                class="blue-link"
              >こちら</a>
            </p>
            <p>
              新型コロナウイルス感染症が世界中に拡大し、そして日本にも押し寄せています。全国で外出自粛を余儀なくされ、多くの仕事が在宅業務にシフトし、休業状態になっている職種も少なくないです。テレビやネット、SNSなど各メディアでは他国の厳しい現状や医療崩壊現場などが伝えられ、煽るような報道や書き込みも多いです。
            </p>
            <a
              class="btn btn-secondary"
              href="https://mental-health.zenplace.co.jp/depression/655.html"
              target="_blank"
            >
              続きを読む
            </a>
          </div>
        </div>

        <div class="row py-5 mb-4">
          <div class="col-12 col-md-3">
            <img
              loading="lazy"
              class="w-100 pb-3"
              src="~assets/images/opinion/0415-2.jpg"
              alt="布施淳のプロフィール写真"
            >
          </div>
          <div class="col-12 col-md-8">
            <span class="blog-date">2020.04.15</span>
            <h3>メンタル不調と、ヨガ・ピラティスの効果</h3>
            <p>
              <a
                href="https://clinic.zenplace.co.jp/"
                style="text-decoration:underline;"
              > ウェルビーイングクリニック駒沢公園</a> 布施淳院長
            </p>
            <p class="p-infonote">
              <span class="red-span">【期間限定】</span>　<a
                href="https://forms.gle/JkBgDgUCiSgrirmT6"
                target="_blank"
                class="blue-link"
              >無料相談窓口</a>　コロナ感染が不安な方へ<br>
              ※循環器内科のウェルビーイングクリニックが無料で相談窓口を開設中<br>
              ※診療予約は<a
                href="https://coubic.com/wellbeingclinic/906959/express/"
                target="_blank"
                class="blue-link"
              >こちら</a>
            </p>
            <p>
              新型コロナウイルス感染症の流行が世界中に拡大し、そして日本にも押し寄せてきています。テレビやネット、SNSなど各メディアでは他国そして本邦の厳しい現状や医療崩壊現場などが伝えられ、煽るような報道や書き込みも多いです。当然のように、メンタル不調に陥る人が増えています。
            </p>
            <a
              class="btn btn-secondary"
              href="https://mental-health.zenplace.co.jp/depression/665.html"
              target="_blank"
            >
              続きを読む
            </a>
          </div>
        </div>
        <div class="row py-5 mb-4">
          <div class="col-12 col-md-3">
            <img
              loading="lazy"
              class="w-100 pb-3"
              src="~assets/images/opinion/0415.jpg"
              alt="布施淳のプロフィール写真"
            >
          </div>
          <div class="col-12 col-md-8">
            <span class="blog-date">2020.04.15</span>
            <h3>急速に進む外出自粛とリモートワーク化の落とし穴</h3>
            <p>
              <a
                href="https://clinic.zenplace.co.jp/"
                style="text-decoration:underline;"
              > ウェルビーイングクリニック駒沢公園</a> 布施淳院長
            </p>
            <p class="p-infonote">
              <span class="red-span">【期間限定】</span>　<a
                href="https://forms.gle/JkBgDgUCiSgrirmT6"
                target="_blank"
                class="blue-link"
              >無料相談窓口</a>　コロナ感染が不安な方へ<br>
              ※循環器内科のウェルビーイングクリニックが無料で相談窓口を開設中<br>
              ※診療予約は<a
                href="https://coubic.com/wellbeingclinic/906959/express/"
                target="_blank"
                class="blue-link"
              >こちら</a>
            </p>
            <p>
              新型コロナウイルス感染の問題で外出自粛、リモートワークとなり、運動不足で、腰痛やメンタル不調になる方が増えています。その対策として、公園など開放的なところでジョギングやウォーキングをするのも１つでしょう。ただ、注意すべき点もあるようです。参考になる記事・論文から考察していきます。
            </p>
            <a
              class="btn btn-secondary"
              href="https://www.zenplace.co.jp/column/medical/8216.html"
              target="_blank"
            >
              続きを読む
            </a>
          </div>
        </div>

        <div class="row py-5 mb-4">
          <div class="col-12 col-md-3">
            <img
              loading="lazy"
              class="w-100 pb-3"
              src="~assets/images/opinion/jun_profile.jpg"
              alt="布施淳のプロフィール写真"
            >
          </div>
          <div class="col-12 col-md-8">
            <span class="blog-date">2020.04.01</span>
            <h3>「Withコロナ時代」に向けてヨガ、ピラティスを</h3>
            <p>
              <a
                href="https://clinic.zenplace.co.jp/"
                style="text-decoration:underline;"
              > ウェルビーイングクリニック駒沢公園</a> 布施淳院長
            </p>
            <p class="p-infonote">
              <span class="red-span">【期間限定】</span>　<a
                href="https://forms.gle/JkBgDgUCiSgrirmT6"
                target="_blank"
                class="blue-link"
              >無料相談窓口</a>　コロナ感染が不安な方へ<br>
              ※循環器内科のウェルビーイングクリニックが無料で相談窓口を開設中<br>
              ※診療予約は<a
                href="https://coubic.com/wellbeingclinic/906959/express/"
                target="_blank"
                class="blue-link"
              >こちら</a>
            </p>
            <p>
              新型コロナウイルス感染症が拡大するとともに、様々な情報が集まりその特徴も少しづつですがわかってきています。 例えば、以下もその特徴のうちの２つです。
            </p>
            <a
              class="btn btn-secondary"
              href="https://mental-health.zenplace.co.jp/other/672.html"
              target="_blank"
            >
              続きを読む
            </a>
          </div>
        </div>
        <div class="row py-5 mb-4">
          <div class="col-12 col-md-3">
            <img
              loading="lazy"
              class="w-100 pb-3"
              src="~assets/images/opinion/jun_profile.jpg"
              alt="布施淳のプロフィール写真"
            >
          </div>
          <div class="col-12 col-md-8">
            <span class="blog-date">2020.03.12</span>
            <h3>発熱した時にどう行動するか？</h3>
            <p>
              <a
                href="https://clinic.zenplace.co.jp/"
                style="text-decoration:underline;"
              > ウェルビーイングクリニック駒沢公園</a> 布施淳院長
            </p>
            <p class="p-infonote">
              <span class="red-span">【期間限定】</span>　<a
                href="https://forms.gle/JkBgDgUCiSgrirmT6"
                target="_blank"
                class="blue-link"
              >無料相談窓口</a>　コロナ感染が不安な方へ<br>
              ※循環器内科のウェルビーイングクリニックが無料で相談窓口を開設中<br>
              ※診療予約は<a
                href="https://coubic.com/wellbeingclinic/906959/express/"
                target="_blank"
                class="blue-link"
              >こちら</a>
            </p>
            <p>
              あなたは体が熱いと思って体温測定してみると37.5度でした。<br>
              どのような行動をとれば良いのでしょうか。
            </p>
            <a
              class="btn btn-secondary"
              href="https://mental-health.zenplace.co.jp/other/677.html"
              target="_blank"
            >
              続きを読む
            </a>
          </div>
        </div>
        <div class="row py-5 mb-4">
          <div class="col-12 col-md-3">
            <img
              loading="lazy"
              class="w-100 pb-3"
              src="~assets/images/opinion/nurse.jpg"
              alt="訪問看護の写真"
            >
          </div>
          <div class="col-12 col-md-8">
            <span class="blog-date">2020.03.11</span>
            <h3>症状に応じた判断を　〜地域の身近な医療者として思うこと</h3>
            <span class="d-block py-3">広畑 晶子<br>
              zen place 訪問看護　医療介護事業部 部長<br>
              若年性認知症専門員 社会福祉主事 理事<br>
              ※zen place 訪問看護について詳しくは<a
                href="https://nurse.zenplace.co.jp"
                target="_blank"
                class="blue-link"
              >こちら</a></span>
            <p>
              新型コロナウイルスのＰＣＲ検査が、３月６日から保険適用となりましたが、どこの医療機関でも検査を実施出来るわけではなく、今のところ全国に844ある「帰国者・接触者外来」を中心に、都道府県が指定する医療機関のみです。
            </p>
            <a
              class="btn btn-secondary"
              target="_blank"
              href="https://mental-health.zenplace.co.jp/other/681.html"
            >
              続きを読む
            </a>
          </div>
        </div>
        <div class="row py-5 mb-4">
          <div class="col-12 col-md-3">
            <img
              loading="lazy"
              class="w-100 pb-3"
              src="~assets/images/opinion/jun_profile.jpg"
              alt="布施淳のプロフィール写真"
            >
          </div>
          <div class="col-12 col-md-8">
            <span class="blog-date">2020.03.10</span>
            <h3>新型コロナウイルスの感染予防</h3>
            <p>
              <a
                href="https://clinic.zenplace.co.jp/"
                style="text-decoration:underline;"
              > ウェルビーイングクリニック駒沢公園</a> 布施淳院長
            </p>
            <p class="p-infonote">
              <span class="red-span">【期間限定】</span>　<a
                href="https://forms.gle/JkBgDgUCiSgrirmT6"
                target="_blank"
                class="blue-link"
              >無料相談窓口</a>　コロナ感染が不安な方へ<br>
              ※循環器内科のウェルビーイングクリニックが無料で相談窓口を開設中<br>
              ※診療予約は<a
                href="https://coubic.com/wellbeingclinic/906959/express/"
                target="_blank"
                class="blue-link"
              >こちらから</a>。
            </p>
            <p>
              新型コロナウィルス感染に関して不安を持ちの方も多いことでしょう。多くのメディアが煽っていますので、お気持ちは大変理解できます。正しい情報を元に、心配しすぎず正しく恐れることが大切です。<br>
              自分のクリニックの外来患者は、持病として心臓病をお持ちの方が多いです。循環器系の病気（心臓の病気）の持病を持つ人が新型コロナウイルス肺炎に罹患すると死亡率は10.5%と他の持病と比べて最も高いリスクになっています。
            </p>
            <a
              class="btn btn-secondary"
              target="_blank"
              href="https://mental-health.zenplace.co.jp/other/684.html"
            >
              続きを読む
            </a>
          </div>
        </div>

        <div class="row py-5 mb-4">
          <div class="col-12 col-md-3">
            <img
              loading="lazy"
              class="w-100 pb-3"
              src="~assets/images/opinion/zen_profile.jpg"
              alt="zen place ロゴ"
            >
          </div>
          <div class="col-12 col-md-8">
            <span class="blog-date">2020.03.05</span>
            <h3>新型コロナウイルスについて、事実から推測できること</h3>
            <p>
              新型コロナウィルスに関しては、未だ詳細は不明な点が多い状態ではありますが、今、起きていることを基に推測できることはあります。<br>
              <br>
              それは「温度と湿度には弱い」というものです。
            </p>
            <nuxt-link
              class="btn btn-secondary"
              to="/opinion/opinion0305"
            >
              続きを読む
            </nuxt-link>
          </div>
        </div>

        <div class="row py-5 mb-4">
          <div class="col-12 col-md-3">
            <img
              loading="lazy"
              class="w-100 pb-3"
              src="~assets/images/opinion/jun_profile.jpg"
              alt="布施淳のプロフィール写真"
            >
          </div>
          <div class="col-12 col-md-8">
            <span class="blog-date">2020.02.20</span>
            <h3>感染症と、ヨガ・ピラティスについて</h3>
            <p>
              <a
                href="https://clinic.zenplace.co.jp/"
                style="text-decoration:underline;"
              > ウェルビーイングクリニック駒沢公園</a> 布施淳院長
            </p>
            <p class="p-infonote">
              <span class="red-span">【期間限定】</span>　<a
                href="https://forms.gle/JkBgDgUCiSgrirmT6"
                target="_blank"
                class="blue-link"
              >無料相談窓口</a>　コロナ感染が不安な方へ<br>
              ※循環器内科のウェルビーイングクリニックが無料で相談窓口を開設中<br>
              ※診療予約は<a
                href="https://coubic.com/wellbeingclinic/906959/express/"
                target="_blank"
                class="blue-link"
              >こちらから</a>。
            </p>
            <p>
              zen placeのヨガ、ピラティスインストラクターらが経験的にインフルエンザに感染する人が少ないという傾向があることは大変興味深いことです。ヨガ、ピラティスを日常的に行っていると感染症が少ないと言う仮説に関し、その機序として３つの可能性を考えています。
            </p>
            <a
              class="btn btn-secondary"
              href="https://mental-health.zenplace.co.jp/mindfulness/688.html"
              target="_blank"
            >
              続きを読む
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '新型コロナウイルス感染拡大に関するzen placeの考えについて',
      meta: [
        { hid: 'og:title', property: 'og:title', content: '新型コロナウイルスに関するzen placeの考えについて' },
        { hid: 'description', name: 'description', content: '新型コロナウイルス感染拡大に関するzen placeの考えについてです。' },
        { hid: 'og:description', property: 'og:description', content: '新型コロナウイルス感染拡大に関するzen placeの考えについてです。' },
        { hid: 'og:image', property: 'og:image', content: 'https://www.zenplace.co.jp/og.jpg' },
        { hid: 'keywords', name: 'keywords', content: 'zen place, コロナ, 考え' },
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
            name: '新型コロナウイルス感染拡大に関するzen placeの考えについて',
          },
        ],
      };
    },
  },

};
</script>

<style scoped lang="scss">

.section-pb{font-size:1.6rem; line-height:3rem;}

.section-opinion h2{border-top: #036fb1 2px solid;; border-bottom:#036fb1 2px solid;
    color: #036fb1;}

span.blog-date{
    font-size: 1.5rem;
    color: #999;
    display: block;
    padding-bottom: 10px;}

p.p-infonote{padding:10px; background-color: #f3f8fb;}

p.mag-btn{ padding:10px; color:#fff; background-color:#333; text-align:center; font-size:2rem; }
p.mag-btn:hover{background-color:#555;}
.mag-link{cursor:pointer;}
.mag-link img:hover{opacity:.8;}
span.red-span{color:red; display:block; margin-bottom:5px; }
a.blue-link{color:#0066a4; text-decoration:underline;}
a.btn-secondary{width:105px;}

</style>
