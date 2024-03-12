<template>
  <div class="p-studionewstop mx-auto">
    <section class="header-ban mt-0 c-section--blue">
      <h1 class="text-center py-5 mb-0">
        湘南・鎌倉でピラティス
        <span class="pt-4 d-block">マット・マシンピラティス専門スタジオ</span>
      </h1>
    </section>

    <section class="py-5">
      <div class="container">
        <p
          class="pt-3 pb-5 mx-auto"
          style="max-width:800px;"
        >
          鎌倉にピラティススタジオが2021年8月25日（水）に新オープンしました。<br>
          zen place 初となる湘南エリア初のピラティス専門スタジオです。<br>
          マットピラティスはもちろんのこと、マットとマシンピラティスを交えたプライベートレッスンもお楽しみいただけます。<br>
          <br>
          いままでピラティスを行ったことがない方も、ワンコインで体験できる期間限定キャンペーンを実施しています。<br>
          ぜひzen place pilates　鎌倉スタジオへ足をお運びください！
        </p>

        <nuxt-link
          class="btn btn-goto mx-auto mb-3"
          to="#kamakura"
        >
          鎌倉スタジオ アクセスへ
        </nuxt-link>
      </div>
    </section>
    <section class="py-5 machine-pilates c-section--gray">
      <div class="container pb-5">
        <h2 class="text-left my-3">
          ー ピラティスレッスン詳細
        </h2>
        <div class="row pt-5 pb-3">
          <div class="col-12 col-md-5">
            <img
              loading="lazy"
              src="~assets/images/info/studios/nagoya/lesson03.jpg"
              alt="マシンピラティスをやっている女性の写真"
              class="w-100 d-block mx-auto pb-5"
              style="max-width:400px;"
            >
          </div>
          <div class="col-12 col-md-7">
            <h3 class="pb-3">
              グループレッスン・プライベートレッスン<br><strong>マットピラティス</strong>
            </h3>
            <p class="pb-5">
              呼吸のリズムや動きのテンポなどを協調させて動くことの気持ち良さ、楽しさを感じていただけるマットワークのレッスンです。<br>
              ピラティスマットのみのワークはもちろんのこと、フォームローラーやマジックサークルなどのプロップスを使うレッスンもあります。
            </p>
          </div>
        </div>
        <div class="row pb-3">
          <div class="col-12 col-md-5">
            <img
              loading="lazy"
              src="~assets/images/info/studios/nagoya/lesson01.jpg"
              alt="マシンピラティスをやっている女性の写真"
              class="w-100 d-block mx-auto pb-5"
              style="max-width:400px;"
            >
          </div>
          <div class="col-12 col-md-7">
            <h3 class="pb-3">
              プライベートレッスン<br><strong>マシンピラティス</strong>
            </h3>
            <p class="pb-5">
              BASIメソッドのピラティスマシンを完備。<br>
              ピラティスマシンはスポーツジムで行うトレーニングのように体に負荷をかけるものとは異なり、普段意識しにくい細部の筋肉（インナーマッスル）を使うために使用いたします。<br>
              初めてマシンピラティスを体験される方は、意識したことのない筋肉を使うことに驚かれるかもしれません。マシンを使って様々な方向に身体を動かすことで可動域を広げていき、同時に体幹や体の軸を鍛え、安定性と柔軟性を得ることができます。
            </p>
          </div>
        </div>
      </div>
    </section>
    <CtaLower />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '湘南・鎌倉で本格的なマット・マシンピラティス専門スタジオ',
      meta: [
        { hid: 'description', name: 'description', content: '倉にピラティススタジオが2021年8月25日に新オープンしました。zen place 初となる湘南エリア初のピラティス専門スタジオです。マットピラティスはもちろんのこと、マットとマシンピラティスを交えたプライベートレッスンもお楽しみいただけます。' },
        { hid: 'keywords', name: 'keywords', content: 'ピラティス, スタジオ, 湘南, 鎌倉, マシン' },
      ],

    };
  },

  async asyncData({ app }) {
    const studio1 = await app.$zenplaceApi.getStudio(207);
    const studio11 = await app.$zenplaceApi.getStudio(210);
    const studio2 = await app.$zenplaceApi.getStudio(203);
    const studio3 = await app.$zenplaceApi.getStudio(113);
    const studio4 = await app.$zenplaceApi.getStudio(29);

    return {
      studio1,
      studio2,
      studio3,
      studio4,
      studio11,
    };
  },

};

</script>

<style lang="scss" scoped>
@import "node_modules/bootstrap/scss/mixins";
@import '~assets/scss/newvariables';

.school-sec h3 span{font-size:1.8rem; margin-bottom:6px;}
.school-sec .basi-sec h3 {border-left:3px solid #d82c30; padding-left:10px; }
.school-btn{border:1px solid #333; color:#333; border-radius:30px; padding:15px; display:block; margin:0 auto; text-align:center; max-width:250px;}

.btn-goto {border:1px solid #0066a4; border-radius: 40px; padding:15px; display:block; max-width: 300px; color:#0066a4; font-size:18px;}

h2{color:#0066a4; text-align:left; font-size:3rem;}

.pc{display:block;}
.sp{display:none;}
.c-section--gray {background-color:#efefef;}
.c-section--darkgray{background-color:#d7d7d7;}
.c-section--blue{background-color:#0066a4; color:#fff;}
.p-studionewstop a img {cursor: pointer;}
.t-blue{color:#0066a4;}
.studio-btn{background-color:#0066a4; color:#fff; padding:15px 10px; font-size:1.8rem; display:block; max-width:200px; text-align:center;}
.p-studionewstop h3{font-size:2rem; line-height:3rem;}

.studio-list h3{font-size: 2.5rem; }
.studio-list h3 span{font-size:1.5rem; color:#999;}
.studio-info h4 a {text-decoration:underline;}
.studio-access h5{font-size:1.6rem; font-weight:bold;}

.near-studio{background-color:#f7f7f7;}

.machine-pilates h3 {font-size:1.5rem;}
.machine-pilates h3 strong{font-size:2rem;}
.header-ban{background:url("~assets/images/info/studios/shonan/bg-img.jpg") top center no-repeat;
background-size:cover;
}
.header-ban h1{ font-weight:bold; font-size:6rem; letter-spacing: 1px;}
.header-ban h1 span{font-size:3.6rem; padding-bottom:10px;}

.zenplace-sec{background:url("~assets/images/info/studios/shonan/bg-img2.jpg") center center no-repeat; background-size:cover;}
.zenplace-sec .zen-content{background-color:#fff; box-shadow: 0 0 13px rgba(0,0,0, .1);     max-width: 800px; margin: auto; font-family: $mincho; }

@media screen and (max-width:768px){

.pc{display:none;}
.sp{display:block;}

.header-ban h1{font-size:3rem; letter-spacing: 1px;}
.header-ban h1 span{font-size:1.8rem; padding-bottom:5px;}

}

body .l-new .c-header-border-bottom {
    font-size: 2.5rem;
}

.p-price-table h2 {
    font-size: 2.5rem;
}
.p-price-table h3 {
    font-size: 1.8rem;
}

.bg-blue{
  background: $blue;
}

.white{
  color: $white;
}
.c-ctalower{

  padding: 60px 32px 60px;

  @include tab{
    padding: 40px 32px;
  }

  @include sp{
    padding: pv(49) pv(25) pv(40);

    .l-new-container{
      padding: 0!important;
    }
    .d-flex{
      display: block!important;
    }
  }

  p{
    margin-bottom: 3rem;

    @include sp{
      font-size: pv(20);
      font-weight: bold;
      margin-bottom: pv(24);
    }
  }

  img{
    margin-bottom: 4rem;

    @include sp{
      margin-bottom: 0;
    }
  }

  a{
    margin: 0 10px;
    width: 50%;
    max-width: 320px;
    height: 68px;
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    font-size: 22px;
    font-weight: bold;

    @media screen and (max-width: 600px){
      width: 160px;
      height: 160px;
    }
    @include sp{
      width: 100%;
      max-width: unset;
      height: pv(60);
      margin-bottom: pv(24);
    }

    i{
      width: 28px;
      height: 36px;
      margin-right: 16px;
    }

    @include sp{
      margin: pv(9) 0 0;
    }
  }

  &-blue{
    background: #2789E7;
    border: 1px solid #72BBFD;
  }
  &-orange{
    background: $orange;
    border: 1px solid #FEA667;
  }

}

</style>
