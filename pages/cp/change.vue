<template>
  <div class="p-cp-change">
    <div class="container">
      <img
        src="~assets/images/cp/change-banner-big.jpg"
        alt="乗り換えキャンペーン"
        class="w-100 d-block mx-auto py-5"
        style="max-width:900px;"
      >
      <h1
        class="sub-main-title text-center title-underlined pb-3"
      >
        乗り換えキャンペーン
      </h1>
      <p class="font-weight-bold text-center cp-date mx-auto">
        2021年5月31日まで
      </p>
      <section class="section-pb">
        <div class="py-5 mb-4">
          <p class="mx-auto text-center limit-p font-weight-bold">
            他のヨガ・ピラティススタジオ、<br class="sp">フィットネスに通っていた方限定
          </p>
          <p class="main-p mx-auto font-weight-bold text-center my-5">
            通常1回の体験レッスンが<br>
            <span class="big">しっかり試せる5回に<br class="sp">ドドンと増量！</span>
          </p>

          <img
            src="~assets/images/cp/change-all.jpg"
            class="w-100 mx-auto py-5 pc"
            alt="zen placeピラティス・ヨガスタジオ"
            style="max-width:800px;"
          >
          <img
            src="~assets/images/cp/change-all-sp.jpg"
            class="w-100 mx-auto py-3 sp"
            alt="zen placeピラティス・ヨガスタジオ"
            style="max-width:800px;"
          >
          <p class="exp-p mx-auto py-5">
            通常：体験レッスンはお一人様1回まで - ¥500<span>（税込） </span><br><br>
            <strong>対象者：しっかり試せる体験レッスン5回 - ¥1,000<span>（税込） </span></strong>
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
            <p
              class="pt-5 mx-auto text-left"
              style="max-width:800px; font-size:13px;"
            >
              1回目は500円で申し込みをしていただき、スタジオで会員証などの証明資料を確認後に1,000円5回に切り替え出来ます。<br>
              <br>
              <b>体験レッスンはピラティス・ヨガいずれか一つのブランドをお選びいただけます。</b><br>
              スタジオごとにグレードが設定されております。<br>
              ※同一ブランド、同一グレードであれば異なる店舗での体験レッスンのお申し込みが可能です。
            </p>
          </div>
          <p class="infonote mx-auto mt-5">
            ご注意：<br>
            ・1回目の受講時に、受付で他店の半年前までの会員証をご提示の上「乗り換えキャンペーン」を利用する旨をお知らせください。<br>※退会が必須条件ではなく他社に通っているままでも対象になります。<br>
            ・受講できるレッスンは、マットグループレッスンのみになります。リフォーマー専門スタジオは本キャンペーンの対象外<br>
            ・5回分の体験レッスンの有効期間は2週間です。<br>
            ・オンラインレッスン（Studio Live Streaming）はご受講いただけません。<br>
            ・体験レッスン料（キャンペーン特別料金5回分・税込¥1,000）のお支払いは、クレジットカードかPayPayで、1回目のご受講時に、スタジオにてお願いします。
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
  ],
};
</script>

<style scoped lang="scss">
@import '~assets/scss/newvariables';

.pc{display:block;}
.sp{display:none;}
p{max-width:700px; }
a.blue-link{color:#0066a4; text-decoration:underline;}
span.blog-date{
    font-size: 1.5rem;
    color: #999;
    display: block;
    padding-bottom: 10px;}

h1{color:#0066a4;}
.cp-date{color:#0066a4; font-size:3rem;}

p.limit-p{font-size:2rem;}
p.main-p{font-size:2.5rem; color:#0066a4; line-height:5rem;}
p.main-p span.big{font-size:4rem;}
p.exp-p{font-size:2rem; line-height:3rem;}
.exp-p span{font-size:1.5rem;}
p.infonote{background-color:#f3f3f3; padding:15px;
font-size:1.3rem;
}

@media screen and (max-width:768px){
  .pc{display:none;}
.sp{display:block;}
p.main-p{font-size:2rem; color:#0066a4; line-height:4rem;}
p.main-p span.big{font-size:3.5rem;}
p.exp-p{font-size:1.8rem;}
}

</style>
