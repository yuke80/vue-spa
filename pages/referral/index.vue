<template>
  <div class="p-referral">
    <PageHeader
      title=" お友達紹介"
      :img="headerImg"
    />
    <section class="py-5 mx-auto attention-info">
      <div class="container">
        <img
          src="~assets/images/referral/main_ban_lg.jpg"
          alt="紹介キャンペーン情報"
          class="w-100 d-block mx-auto"
        >
      </div>
    </section>
    <section class="section-pb py-5">
      <div class="container text-center">
        <nuxt-link
          to="/login"
          class="btn d-block btn-login mx-auto font-weight-bold"
        >
          マイページへログイン
        </nuxt-link>
      </div>
    </section>
    <section class="section-pb py-5">
      <div class="container">
        <h2 class="title-underlined text-center">
          ご紹介ステップ
        </h2>
        <div class="my-5 step-div">
          <span class="step-tag">STEP<strong class="d-block">1</strong></span>
          <h3 class="pb-3">
            お友達・ご家族に紹介
          </h3>
          <img
            src="~assets/images/referral/shokai.png"
            alt="zen placeを紹介をする女性"
            class="w-100 img-step"
          >
          <div class="step-desc">
            <p>
              スタジオに置いてある紹介カードを渡していただく、もしくは
              マイページの「紹介URL」をメールか「LINE」で送っていただけます。
            </p>
          </div>
        </div>
        <div class="mb-5 step-div">
          <span class="step-tag">STEP<strong class="d-block">2</strong></span>
          <h3 class="pb-3">
            ご予約・体験レッスン
          </h3>
          <img
            src="~assets/images/referral/taiken_lesson.jpg"
            alt="zen placeを紹介をする女性"
            class="w-100 img-step"
          >
          <div class="step-desc">
            <p>
              お友達またはご家族がお好きなスタジオ・日時でご予約後、無料体験できます！
            </p>
          </div>
        </div>

        <div class="attention-info">
          <p class=" pt-3">
            <b>※1</b> 体験レッスンを受講できるのは<b>zen placeの利用が初めての方に限る。2022年5月以降は、対象スタジオ会員の方が自スタジオへご紹介&当日入会の場合に限り、紹介者様・紹介された方の両方へプライベートレッスン1回をプレゼントしています。</b><br>（対象スタジオ：zen place pilates 吉祥寺 / zen place yoga 吉祥寺/ zen place pilates 成城学園前 / zen place pilates 八重洲 / zen place pilates 飯田橋 /zen place pilates 池袋 / zen place ピラティス＆ヨガ自由が丘 / zen place ピラティス＆ヨガ三宮）
          </p>
        </div>
      </div>
    </section>
    <section class="section-pb">
      <div class="main-bg px-3">
        <div class="container py-5">
          <h2 class="mx-auto text-center font-weight-bold text-white pb-5">
            スタジオ内での安全対策
          </h2>
          <p class="mx-auto text-center text-white ">
            スタジオ内での安全対策について、<br class="sp">引き続き実施してまいります
          </p>
          <div class="row my-5 py-5">
            <div class="col-4 col-md-2 mb-3">
              <img
                src="~assets/images/referral/img4.png"
                alt=""
                class="w-100 d-block mx-auto"
              >
              <span class="taisaku-cont">手洗い・うがい</span>
            </div>
            <div class="col-4 col-md-2 mb-3">
              <img
                src="~assets/images/referral/img1.png"
                alt=""
                class="w-100 d-block mx-auto"
              >
              <span class="taisaku-cont">検温</span>
            </div>
            <div class="col-4 col-md-2 mb-3">
              <img
                src="~assets/images/referral/img2.png"
                alt=""
                class="w-100 d-block mx-auto"
              >
              <span class="taisaku-cont">マスク着用</span>
            </div>
            <div class="col-4 col-md-2 mb-3">
              <img
                src="~assets/images/referral/img3.png"
                alt=""
                class="w-100 d-block mx-auto"
              >
              <span class="taisaku-cont">消毒</span>
            </div>
            <div class="col-4 col-md-2 mb-3">
              <img
                src="~assets/images/referral/img5.png"
                alt=""
                class="w-100 d-block mx-auto"
              >
              <span class="taisaku-cont">間隔</span>
            </div>
            <div class="col-4 col-md-2 mb-3">
              <img
                src="~assets/images/referral/img6.png"
                alt=""
                class="w-100 d-block mx-auto"
              >
              <span class="taisaku-cont">換気</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-pb py-5">
      <div class="container text-center">
        <nuxt-link
          to="/login"
          class="btn d-block btn-login mx-auto font-weight-bold"
        >
          マイページへログイン
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue';

const headerImg = require('@/assets/images/common/faq.jpg');

export default {

  head() {
    return {
      title: 'お友達紹介',
      meta: [
        { hid: 'og:title', property: 'og:title', content: 'お友達紹介' },
        { hid: 'description', name: 'description', content: 'ご家族・ご友人にzen placeを勧めたいけどなかなか良いきっかけがないんです。そんなうれしいことを言ってくださる会員様はいつでもご利用ください。' },
        { hid: 'og:description', property: 'og:description', content: 'ご家族・ご友人にzen placeを勧めたいけどなかなか良いきっかけがないんです。そんなうれしいことを言ってくださる会員様はいつでもご利用ください。' },
        { hid: 'keywords', name: 'keywords', content: 'zen place, 会員, 紹介' },
      ],
      link: [
        { rel: 'canonical', href: 'https://www.zenplace.co.jp/referral' },
      ],
    };
  },
  components: {
    PageHeader,
  },
  data() {
    return {
      headerImg,
    };
  },
};
</script>

<style scoped lang="scss">
@import '~assets/scss/newvariables';
.pc{display:block;}
.sp{display:none;}
.p-referral .container{max-width:800px; margin:0 auto; }
.step-div{
  max-width: 600px;
  margin-right:auto;
  margin-left:auto;
  position:relative;
  padding-top:20px;
  border:2px solid #0066a4;
  border-radius:10px;
  }
 .step-div span.step-tag{
    position: absolute;
   left: -10px;
    top: -15px;
    width: 60px;
    height: 60px;
    padding-top: 13px;
    font-size: 1.3rem;
    text-align: center;
    font-weight: bold;
    line-height: 19px;
    border-radius: 100px;
    background-color: #0066a4;
    color: #fff;
 }
  .step-div span.step-tag strong{font-size:2rem;}
.step-div img.img-step{
    max-width: 500px;
    margin: 0 auto;
    display: block;}
  .step-div h3{
    color:#0066a4;
    font-weight:bold;
    text-align:center;
    font-size:2rem;
    }
  .step-desc{
    background-color: #0066a4;
  color:#fff;
  width:100%;
  padding:20px 15px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  }
 .step-desc p{font-size:1.5rem; font-weight:bold;}
 .step-desc p span{font-size:1.3rem;}

p{max-width:700px; }
a.blue-link{color:#0066a4; text-decoration:underline;}

.attention-info .container{max-width:600px;}
.attention-info p{font-size:1.3rem;}
h2{font-size:2.5rem;}
p.limit-p{font-size:2rem;}
p.main-p{font-size:2.5rem; color:#0066a4; line-height:5rem;}
p.main-p span.big{font-size:4rem;}
p.exp-p{font-size:2rem; line-height:3rem;}
p.infonote{background-color:#f3f3f3; padding:15px;
font-size:1.3rem;
}

.main-bg{background-color:#0066a4; }

.main-bg .row{background-color:#fff; border-radius:20px; text-align:center;}

span.taisaku-cont {font-size:1.3rem; font-weight:bold; display:block; margin:0 auto; text-align:center;}
.row img{max-width:400px;}
.enquete-p{text-align:left; font-size:2rem;}

.btn-login{ max-width:300px; padding:20px; font-size:2rem; background-color:#0066a4; color:#fff;}

@media screen and (max-width:768px){
  .pc{display:none;}
.sp{display:block;}
p.main-p{font-size:2rem; color:#0066a4; line-height:4rem;}
p.main-p span.big{font-size:3.5rem;}
p.exp-p{font-size:1.8rem;}

.taisaku-p span {font-size:3.5rem; font-weight:bold; display:block; margin:0 auto; text-align:center;}
.taisaku-p p{font-size:2rem;}
.enquete-p{text-align:center; font-size:2rem;}

}

</style>
