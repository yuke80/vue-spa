<template>
  <div class="p-info-corona">
    <Breadcrumb :breadcrumbs="breadcrumbs" />

    <div class="container pt-5">
      <h1
        class="sub-main-title text-center title-underlined pb-3"
      >
        zen placeの<br class="pc">新型コロナウイルス感染予防のための<span class="d-block">安全対策</span>
      </h1>
    </div>
    <section class="section-pb">
      <div class="main-bg py-5 px-3">
        <div class="container py-5">
          <h2 class="mx-auto text-center font-weight-bold text-white">
            スタジオ内での安全対策
          </h2>
          <p class="mx-auto my-5 text-center text-white pb-3">
            スタジオ内での安全対策について、<br class="sp">引き続き実施してまいります
          </p>
          <div
            class="row my-5 py-3"
            style="position:relative;"
          >
            <span class="new-badge">NEW</span>
            <div class="col-12 col-md-5">
              <img
                src="~assets/images/info/corona/img03-2.png"
                alt=""
                class="w-100 d-block mx-auto"
              >
            </div>
            <div class="taisaku-p col-12 col-md-6 pb-5">
              <span>空気除菌</span><p class="pt-3">
                <b>最新設備を導入！</b><br>ウィルス99%強力除菌／不活性化技術を搭載した強力空気除菌機／清浄機を全店に設置<br>
                <nuxt-link
                  to="/news/info/11258"
                  style="text-decoration:underline; color:#0066a4;"
                >
                  詳細はこちら
                </nuxt-link>
              </p>
            </div>
          </div>
          <div class="row my-5 py-3">
            <div class="col-12 col-md-5">
              <img
                src="~assets/images/info/corona/img03.png"
                alt=""
                class="w-100 d-block mx-auto"
              >
            </div>
            <div class="taisaku-p col-12 col-md-6 pb-5">
              <span>換気</span><p class="pt-3">
                窓の開放とサーキュレーター設置による<br class="pc">換気の徹底
              </p>
            </div>
          </div>
          <div class="row my-5 py-3">
            <div class="col-12 col-md-5">
              <img
                src="~assets/images/info/corona/img01.png"
                alt=""
                class="w-100 d-block mx-auto"
              >
            </div>
            <div class="taisaku-p col-12 col-md-6 pb-5">
              <span>検温</span><p class="pt-3">
                体温測定器の設置<br>
                全インストラクター、お客様への検温
              </p>
            </div>
          </div>
          <div class="row my-5 py-3">
            <div class="col-12 col-md-5">
              <img
                src="~assets/images/info/corona/img02.png"
                alt=""
                class="w-100 d-block mx-auto"
              >
            </div>
            <div class="taisaku-p col-12 col-md-6 pb-5">
              <span>消毒</span><p class="pt-3">
                自動消毒器を設置<br>
                スタジオ内・備品をアルコール消毒
              </p>
            </div>
          </div>
          <div class="row my-5 py-3">
            <div class="col-12 col-md-5">
              <img
                src="~assets/images/info/corona/img04.png"
                alt=""
                class="w-100 d-block mx-auto"
              >
            </div>
            <div class="taisaku-p col-12 col-md-6 pb-5">
              <span>着用</span><p class="pt-3">
                インストラクター、受講生とも<br>マスク着用でレッスン
              </p>
            </div>
          </div>
          <div class="row my-5 py-3">
            <div class="col-12 col-md-5">
              <img
                src="~assets/images/info/corona/img06.png"
                alt=""
                class="w-100 d-block mx-auto"
              >
            </div>
            <div class="taisaku-p col-12 col-md-6 pb-5">
              <span>間隔</span><p class="pt-3">
                マット・マシンの間隔を確保<br>
                (2021年10月1日より定員制限は順次解除しています。)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-5">
      <div class="container py-5">
        <h2
          class="mx-auto text-left font-weight-bold pb-5"
          style="color:#0066a4;"
        >
          クライアントの皆様が安心してピラティス・ヨガをお楽しみいただけるよう、<br class="pc">
          引き続き下記に該当する方はスタジオ利用をお控えください。
        </h2>
        <!-- <div class="row">
          <div class="col-12 col-md-4 py-3">
            <img
              src="~assets/images/info/corona/img05.png"
              alt=""
              style="max-width:250px;"
              class="w-100 d-block mx-auto"
            >
          </div>
          <div class="col-12 col-md-6 py-3">
            <p class="font-weight-bold enquete-p">
              安心してレッスン受講いただくための<br class="pc">アンケート実施について
            </p>
            <p class="pb-5">
              ▼いずれかの方法で受講前にアンケートにご協力ください。<br>
              <b>・マイページ／メール（レッスン受講30分前）<br>・スタジオでの回答</b><br><br>
              ＜内容＞<br>
              ご自身の体調やご家族の感染の可能性、海外渡航などについて<br><br>
              <strong>※アンケートにご回答がない場合、レッスンの参加をお断りする場合がございます。予めご了承ください。</strong>
            </p>
          </div>
        </div> -->
        <div
          class="p-5 mt-3 mb-5"
          style="background-color:#f3f3f3;"
        >
          <!-- <p class="font-weight-bold pb-5">
            以下について該当項目がある場合レッスンのお休みをお願いします。
          </p> -->
          <p class="">
            ・体験37.5度以上ある方<br>
            ・風邪のような症状（倦怠感や息苦しさ）がある方<br>
            ・味がしない/においを感じないという異変がある方<br>
            ・家族に感染の疑いがある方<br><br>

            zen placeのマットグループレッスンは、スタジオレッスンに加えてオンラインレッスンも<br class="pc">開催しております。Live配信でエデュケーターがモニターを皆様と双方向に通してつながり、<br class="pc">まるでスタジオにいるような臨場感を味わうことが可能です！<br><br>
            ※zen placeのオンラインレッスン詳細は下記よりご確認ください<br>
            <a
              href="https://www.zenplace.co.jp/online"
              class="blue-link"
            >https://www.zenplace.co.jp/online</a>
          </p>
        </div>

        <nuxt-link
          to="/opinion"
          style="color:#0066a4; text-decoration:underline;"
        >
          > 新型コロナウイルス感染拡大に関する、zen placeの考えについて
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'zen placeの新型コロナウイルス感染予防のための安全対策',
      meta: [
        { hid: 'og:title', property: 'og:title', content: 'zen placeの新型コロナウイルス感染予防のための安全対策' },
        { hid: 'description', name: 'description', content: 'zen placeの新型コロナウイルス感染予防のための安全対策ページです。' },
        { hid: 'og:description', property: 'og:description', content: 'zen placeの新型コロナウイルス感染予防のための安全対策ページです。' },
        { hid: 'og:image', property: 'og:image', content: 'https://www.zenplace.co.jp/og.jpg' },
        { hid: 'keywords', name: 'keywords', content: 'zen place, 安全対策' },
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
            name: 'zen placeの新型コロナウイルス感染予防のための安全対策',
          },
        ],
      };
    },
  },

};
</script>

<style scoped lang="scss">
@import '~assets/scss/newvariables';

.pc{display:block;}
.sp{display:none;}
.p-info-corona{font-family: $gothic !important;}
p{max-width:700px; }
a.blue-link{color:#0066a4; text-decoration:underline;}
span.blog-date{
    font-size: 1.5rem;
    color: #999;
    display: block;
    padding-bottom: 10px;}

.p-info-corona h1{color:#0066a4;}
.p-info-corona h1 span{font-size:5rem;}
.p-info-corona h2{font-size:2.5rem;}
p.limit-p{font-size:2rem;}
p.main-p{font-size:2.5rem; color:#0066a4; line-height:5rem;}
p.main-p span.big{font-size:4rem;}
p.exp-p{font-size:2rem; line-height:3rem;}
p.infonote{background-color:#f3f3f3; padding:15px;
font-size:1.3rem;
}

.main-bg{background-color:#0066a4; }
.main-bg .container{max-width:800px; margin:0 auto; }
.main-bg .row{background-color:#fff; border-radius:20px; text-align:center;}

.taisaku-p{padding-top:20px;}
.taisaku-p span {font-size:2.5rem; font-weight:bold; display:block; margin:0 auto; text-align:left}
.taisaku-p p{font-size:1.6rem; text-align:left;}
.row img{max-width:400px;}
.enquete-p{text-align:left; font-size:2rem;}

.new-badge{
    position: absolute;
    z-index: 2;
    background-color: #d1ebf3;
    width: 70px;
    height: 70px;
    border-radius: 100px;
    padding: 5px;
    font-weight: bold;
    color: #0066a4;
    line-height: 60px;
    top: -10px;
    left: -10px;
}

@media screen and (max-width:768px){
  .pc{display:none;}
.sp{display:block;}
p.main-p{font-size:2rem; color:#0066a4; line-height:4rem;}
p.main-p span.big{font-size:3.5rem;}
p.exp-p{font-size:1.8rem;}
.taisaku-p{padding-top:0;}
.taisaku-p span {font-size:2.5rem; font-weight:bold; display:block; margin:0 auto; }
.enquete-p{text-align:left; font-size:2rem;}

}

</style>
