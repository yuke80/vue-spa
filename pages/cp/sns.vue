<template>
  <div class="p-cp-sns">
    <div class="container">
      <img
        src="~assets/images/cp/sns-banner02.jpg"
        alt="SNSキャンペーン"
        class="w-100 d-block mx-auto py-5"
        style="max-width:900px;"
      >
      <h1
        class="text-center title-underlined pb-3"
      >
        キャンペーン<br>
        スタジオライブストリーミング<br>SNS企画第一弾
      </h1>
      <p class="font-weight-bold text-left cp-date mx-auto">
        「こんな場所でオンラインレッスン受けてみた」投稿をストーリーにシェアで<span style="color:#ce0055; text-decoration:underline;">オンラインレッスン一回ご招待！</span>
      </p>
      <section class="section-pb">
        <div class="py-5 mb-4">
          <p
            class="mx-auto text-left"
            style="font-size:1.5rem;"
          >
            <b>概要：</b><br>
            zen place公式 Instagram（<a
              href="https://www.instagram.com/zenplace_official/"
              target="_blank"
              style="text-decoration:underline;"
            >@zenplace_official</a>）にて投稿される「スタジオライブストリーミングこんな場所で受けてみた by Chieko」の動画をストーリーにシェア&タグ付けしてくださった方を、<b>zen placeオンラインレッスン「スタジオライブストリーミング」にご招待いたします！</b>
          </p>
          <img
            loading="lazy"
            src="~assets/images/online/studiolivestreaming/live-pc.jpg"
            alt="ヨガ・ピラティスオンラインレッスンの利用方法"
            style="max-width:400px;"
            class="w-100 d-block mx-auto py-3"
          >
        </div>
        <div class="pt-3 pb-5 mb-4">
          <span
            class="d-block mx-auto text-center font-weight-bold"
            style="font-size:3rem;"
          >実施期間</span>
          <p class="block-p mx-auto p-5 my-5">
            <span
              class="d-block text-left font-weight-bold pb-5"
              style="font-size:2rem;color:#ce0055;"
            >第一回</span>
            <b>シェア&タグ付け期間：</b>12月7日(月)15:00～10日(木)14:59<br><br>
            <b> レッスンご招待： </b>12月12日(土)11:30-12:25 Basic by Chieko（先着20名限定）
          </p>
          <p class="block-p mx-auto p-5 mt-5 ">
            <span
              class="d-block text-left font-weight-bold pb-5"
              style="font-size:2rem; color:#ce0055;"
            >第二回</span>
            <b>シェア&タグ付け期間： </b>12月14日(月)15:00～17日(木)14:59<br><br>
            <b>レッスンご招待： </b>12月26日(土)11:30-12:25 Basic by Chieko（先着20名限定）
          </p>
        </div>
        <p class="infonote mx-auto mb-5">
          ※ご招待レッスンの日にちごとに、シェア期間が違いますのでご注意ください。<br>
          ※Instagram鍵付きアカウントの方は、投稿のスクリーンショットと共にzen place公式アカウント宛にDMにてご申告ください。
        </p>

        <div class="text-center pb-5">
          <a
            class="btn btn-danger btn-lg mt-4 font-weight-bold rounded-0 "
            href="https://www.instagram.com/zenplace_official/"
            target="_blank"
            style="width:300px; padding: 20px; background-color:#ce0055;"
          >
            Instagramへ
            <fa-icon
              icon="caret-right"
              size="1x"
            />
          </a>
        </div>
        <div class="text-center pb-5">
          <nuxt-link
            class="btn btn-primary btn-lg mt-4 font-weight-bold rounded-0 "
            to="/online"
            target="_blank"
            style="width:300px; padding: 20px; background-color:#0066a4;"
          >
            Studio Live Streamingについて
            <fa-icon
              icon="caret-right"
              size="1x"
            />
          </nuxt-link>
        </div>
      </section>
    </div>
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
.p-cp-sns{ font-family: $gothic !important;}
p{max-width:700px; }
a.blue-link{color:#0066a4; text-decoration:underline;}
span.blog-date{
    font-size: 1.5rem;
    color: #999;
    display: block;
    padding-bottom: 10px;}

h1{color:#ce0055; font-weight:bold;}
.cp-date{color:#333; font-size:2rem;}

p.main-p{font-size:2.5rem; color:#ce0055;line-height:5rem;}
p.main-p span.big{font-size:4rem;}
.block-p{border-radius:10px; box-shadow: 0px 0px 8px rgba(100,100,100,0.4);}
p.infonote{background-color:#f3f3f3; padding:15px;
font-size:1.3rem;
}

@media screen and (max-width:768px){
  .pc{display:none;}
.sp{display:block;}
p.main-p{font-size:2rem; color:#ce0055; line-height:4rem;}
p.main-p span.big{font-size:3.5rem;}
p.exp-p{font-size:1.8rem;}
}

</style>
