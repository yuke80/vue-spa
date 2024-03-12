<template>
  <div class="p-cp-change">
    <div
      class="jumbotron text-center justify-content-center main-title mb-0"
    />
    <section class="cp-bg mb-0">
      <section class="section-pb mb-0">
        <div class="container py-5">
          <div class="bg-white-cont py-5 mb-4">
            <div class="container">
              <h1
                class="sub-main-title text-center title-underlined py-3"
              >
                キャンペーン
              </h1>
              <p class="font-weight-bold text-center cp-date mx-auto pb-3">
                2022年3月31日まで
              </p>
              <div
                class="cp-row row py-3 p-3 mx-auto"
              >
                <div class="col-12 mx-auto px-3">
                  <p class="exp-p mb-0 font-weight-bold mx-auto exp-p-price">
                    ピラティス・ヨガの<br class="sp">グループレッスン体験 <br><strong class="cp-price">500<span><span class="yen">円</span>(税込)</span></strong>
                  </p>
                </div>
              </div>
              <!-- <div
                class="col-12 mx-auto pb-3 px-3 mb-5"
                style="background-color: #e6f4fb;  color: #333;max-width: 500px;"
              >
                <p>
                  <span class="text-center d-block py-3"> <strong
                    class="cp-register"
                    style="font-size:20px; line-height: 30px;"
                  >ワクチン接種者向け<br>体験無料キャンペーン中！</strong></span>
                  体験当日に接種証明書をスタジオで提示していただいた方は体験料がかかりません。<br>
                  ※マットグループレッスンのみが対象。<br>
                  ※証明書なしの場合、通常キャンペーン価格の500円になります
                </p>
              </div>-->
              <div
                class="col-12 d-block d-md-none mx-auto px-0 align-self-center"
                style="background:none; box-shadow:none; margin-top: -30px;"
              >
                <p class="exp-p-big text-center mx-auto">
                  +
                </p>
              </div>
              <p
                class="main-p mx-auto text-center px-3 py-5"
                style="background-color: #0066a4; color:#fff;max-width: 500px;"
              >
                体験当日にご入会で<br>
                <span class="big font-weight-bold d-block pt-3"><span style="font-size:18px;">月会費</span>1ヶ月無料!</span>
              </p>
              <div
                class="col-12 mx-auto pb-3 px-3 mb-5"
                style="background-color: #f7f7f7;  color: #333;max-width: 500px;"
              >
                <p class="exp-p pt-4 font-weight-bold">
                  <span
                    class="d-inline-block"
                    style="vertical-align:bottom;"
                  ><strong class="cp-register">さらに入会金も無料！</strong></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    <section class="sec-gray pb-5 mt-0">
      <div class="container">
        <p class="infonote">
          ご注意：<br>
          ・キャンペーン期間：2022年3月31日まで <br>
          ・体験はお一人様1回までとさせていただきます。<br>
          ・体験キャンペーン対象レッスンはマットグループレッスンのみになります。<br>
          ・体験キャンペーンはzen placeが初めての方限定です。<br>
          ・オンラインレッスン（Studio Live Streaming）はご受講いただけません。<br>
          ・体験レッスン料のお支払いは、PayPay、交通系ICカード、クレジットカードでお願いします。<br>
          ・月会費1ヶ月無料は、体験当日に月額会員（フリー・月6・月4）で入会された場合に限ります。<br>
          ・キャンペーンの適用には4ヶ月間の継続が必要です。<br>
          ・入会4ヶ月以内の会員種別の変更は、事務手数料をいただく場合があります。<br>
          ・体験当日の入会をご希望の方は、キャッシュカードと銀行お届け印をお持ちください。<br>
          銀行口座がペイジー未対応の場合は、月会費をスタジオでお支払いいただく場合がございます。
        </p>
      </div>
    </section>
    <CtaLower />
  </div>
</template>

<script>
export default {

};
</script>

<style scoped lang="scss">
@import '~assets/scss/newvariables';

.pc{display:block;}
.sp{display:none;}
.jumbotron{background-image: url(~assets/images/welcome/img_main.jpg); background-repeat: no-repeat; background-size: cover; background-position: top; height: 400px; padding: 7em; color: white; font-weight: 800; font-size: 2em;}
.p-cp-change{background-color:#0066a4;}
p{max-width:750px; }
.t-blue{color:#0066a4;}
a.blue-link{color:#0066a4; text-decoration:underline;}

.exp-p-big{font-size: 4rem;
    font-weight: bold;
    color: #0066a4;}
span.blog-date{
    font-size: 1.5rem;
    color: #999;
    display: block;
    padding-bottom: 10px;}

h1{color:#0066a4;}
.cp-date{color:#0066a4; font-size:1.8rem;}
.cp-price{color:#0066a4; font-size:6rem; line-height:7rem;}
.cp-price span{font-size:1.5rem;}
.cp-price .yen{font-size:3rem; }
.cp-register{color:#0066a4; font-size:2.5rem; line-height:3.8rem; text-align:center;}
p.limit-p{font-size:2rem;}
p.main-p{font-size:2rem; line-height:5rem; position:relative;  }
p.main-p .sarani{position:absolute; display:block; top:-25px; left:-25px; background-color:yellow; border-radius:100px; height:100px; width:100px; font-size:2.5rem; color:#0066a4;line-height:100px; text-align:center;}
p.main-p span.big{font-size:5rem; color:yellow; }
p.exp-p{font-size:1.8rem; line-height:2.6rem; text-align:center;}
.bg-white-cont{background-color:#fff; margin-top:-90px;}
section.section-pb { background-color:#f3f3f3; }
section.sec-gray{background-color:#f3f3f3;}
p.infonote{ padding:15px;
font-size:1.3rem;
}
.p-cp-info{text-align:center;}

@media screen and (max-width:768px){
  .pc{display:none;}
.sp{display:block;}
.jumbotron { padding: 3em 1em; height:100px;}
.cp-price{color:#0066a4; font-size:6rem; line-height:7rem;}
.cp-price .yen{font-size:3rem; }
p.main-p .sarani{position:absolute; display:block; top:-25px; left:-25px; border-radius:100px; height:70px; width:70px; font-size:1.8rem; line-height:70px; text-align:center; letter-spacing:0; }
p.main-p{font-size:1.8rem;line-height:2.5rem; margin-bottom:30px;}
p.main-p span.big{font-size:4rem; line-height:3.5rem;}
p.exp-p{font-size:1.8rem; }
.p-cp-info{text-align:left; }
p.infonote{padding:0;}

}

</style>
