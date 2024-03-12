<template>
  <div class="c-TrialFlowPilates pb-3">
    <section
      id="welcome-beginner"
      class="sec-lesson"
    >
      <div class="inner bg-light-blue mx-auto">
        <div class="lesson-block my-5 pt-5 pt-md-0">
          <h3
            class="sec-title"
          >
            <small>Trial Lesson</small>
            体験までの流れ
          </h3>
          <ul class="lesson-block-list px-0">
            <li class="item">
              <span class="step-list step1">
                体験レッスン予約
              </span>
              <div class="block">
                <div class="img">
                  <img
                    loading="lazy"
                    src="~assets/images/trialflow/img-trial-step01.webp"
                    alt="STEP1 体験レッスン予約"
                  >
                </div>
                <div class="txt">
                  <p>予約は、WEBか電話で、スタジオとレッスン日時を選びます。</p>
                  <p>
                    zen
                    placeのグループ店は全店相互利用できるので、都合良い時間に体験レッスンのあるスタジオを選びましょう。
                  </p>
                </div>
                <p>
                  ※スタジオは男女共用です。<br>
                  事前決済なら当日のお支払いがなくスムーズにレッスンを受講できます！
                </p>
              </div>
            </li>
            <li class="item">
              <span class="step-list step2">
                スタジオから体験のご案内
              </span>
              <div class="block">
                <div class="img">
                  <img
                    loading="lazy"
                    src="~assets/images/trialflow/img-trial-step02.webp"
                    alt="STEP1 体験レッスン予約"
                  >
                </div>
                <div class="txt">
                  <p>WEBまたは電話で予約後、スタジオよりご案内のお電話をさせていただく場合がございます。</p>
                  <p>
                    ご不明な点やお悩み、気になることがありましたら、お気軽にご相談ください。
                  </p>
                </div>
              </div>
            </li>
            <li class="item">
              <span class="step-list step3">
                予約当日スタジオへ
              </span>
              <div class="block">
                <div class="img">
                  <img
                    loading="lazy"
                    src="~assets/images/trialflow/img-trial-step03.webp"
                    alt="STEP2 予約当日スタジオへ"
                  >
                </div>
                <div class="txt">
                  <p>
                    着替えの時間を含めレッスン20分前までに受付にお越しください。<br>
                    （ホットヨガをご予約の場合は40分前にお越しください。）
                  </p>
                </div>
                <p>
                  ※動きやすいウエア（靴・ソックスは不要です）やタオルをご持参ください。<br>
                  ※鍵付きロッカーやマットは無料で利用できます。<br>
                  ※ホットヨガの場合は、着替えの時間を含めレッスン40分前までに受付にお越しいただけますようお願いいたします。
                </p>
              </div>
            </li>
            <li class="item">
              <span class="step-list step4"> 着替え </span>
              <div class="block">
                <div class="img">
                  <img
                    loading="lazy"
                    src="~assets/images/trialflow/img-trial-step04.webp"
                    alt="STEP3 着替え"
                  >
                </div>
                <div class="txt">
                  <p>
                    ロッカールームでお着替えをしていただきます<br><br>
                    ※全スタジオ、男女別の更衣室に鍵付のロッカーを完備しています。<br>
                    ※設備詳細は店舗により異なります。
                  </p>
                </div>
              </div>
            </li>
            <li class="item">
              <span class="step-list step5">
                クラスを体験
              </span>
              <div class="block">
                <div class="img">
                  <img
                    loading="lazy"
                    src="~assets/images/trialflow/img-trial-step05.webp"
                    alt="STEP4 クラスを体験"
                  >
                </div>
                <div class="txt">
                  <p>
                    経験豊富なインストラクターがサポート。<br>
                    インストラクターが導きますので、はじめての動きもご安心ください。
                  </p>
                </div>
              </div>
            </li>
            <li class="item">
              <span class="step-list step6">
                カウンセリング
              </span>
              <div class="block">
                <div class="img">
                  <img
                    loading="lazy"
                    src="~assets/images/trialflow/img-trial-step06.webp"
                    alt="STEP5 カウンセリング"
                  >
                </div>
                <div class="txt">
                  <p>
                    30分ほどのカウンセリングで、お一人おひとりの目的や体力に合ったレッスンのご提案からzen
                    placeの利用方法までお伝えします。質問があれば何でもお尋ねください。
                  </p>
                </div>
                <p>※当日入会の場合は入会金が無料となります。</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "~assets/scss/newvariables";

p {
  font-size: 1.7rem;
  font-family: $gothic;
}
span {
  font-size: 1.7rem;
  font-family: $gothic;
}
.inner {
  max-width: 1300px;
}
.lesson-block img {
  width: 100%;
}
.lesson-block {
  font-size: 15px;
  font-size: 1.5rem;
  line-height: 1.73;
  h2 {
  color: #E93742;
  text-align: center;
  font-weight: bold;
  font-size: 28px;

  @include sp{
    font-size: pv(18);
  }
}
}

@media screen and (max-width: 768px) {
  .lesson-block {
    font-size: 13px;
    font-size: 1.3rem;
    line-height: 1.5;
  }
}

.lesson-block .step-list {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 20px;
  color: #666;
  font-weight: bold;
  font-size: 2rem;

  @include tab {
    font-size: 2rem;
  }
  &::before {
    margin-right: 1.5em;
    color: #666;
  }
  &.step1::before{
    content: "01　|";
  }
  &.step2::before{
     content: "02　|";
  }
  &.step3::before{
     content: "03　|";
  }
  &.step4::before{
     content: "04　|";
  }
  &.step5::before{
     content: "05　|";
  }
  &.step6::before{
     content: "06　|";
  }
}

@media screen and (max-width: 768px) {
  .lesson-block .step-list {
    margin-bottom: 10px;
  }
}

.lesson-block p {
  padding: 10px 0 0 0;
  letter-spacing: 1px;
}

@media screen and (max-width: 768px) {
  .lesson-block p {
    margin-bottom: 20px;
    padding: 0;
  }
}

.lesson-block p:last-child {
  margin-bottom: 0;
}

.lesson-block-list .item {
  margin-top: 0;
  margin-bottom: 64px;
}

@media screen and (max-width: 768px) {
  .lesson-block-list .item {
    margin-bottom: 30px;
  }
}

.lesson-block-list .item .block {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;

}

.lesson-block-list .item:last-child {
  margin-bottom: 0;
}

.lesson-block-list .item .img {
  margin-bottom: 2em;
  width: 24%;
  text-align: right;

}

@media screen and (max-width: 768px) {
  .lesson-block-list .item .img {
    padding-top: 8px;
    width: 100%;

  }
}

.lesson-block-list .item .txt {
  padding-left: 0;
  width: 100%;

}

@media screen and (max-width: 768px) {
  .lesson-block-list .item .txt {
    padding-left: 0;
    width: 100%;

  }
}

.lesson-bringings {
  display: flex;
  margin-top: 30px;
  padding: 20px;
  max-width: 600px;
}

.lesson-bringings dt {
  align-self: center;
  margin: auto;
  padding: 5px;
  width: 40%;
  text-align: center;
}

.lesson-bringings dd {
  margin: auto;
  padding: 8px 15px;
  width: 60%;
  background-color: white;
  text-align: center;
  font-weight: bold;
}

@media screen and (min-width: 769px) {
  .lesson-block-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .lesson-block-list .item {
    position: relative;
    margin-top: 0;
    margin-bottom: 57px;
    width: 31%;
  }
  .lesson-block-list .item .img{
    margin-bottom: 0;
  }
  .lesson-block-list{
    &::after{
      width: 31%;
      height: 0;
      content: "";

    }
  }
  .lesson-block-list .item:last-child {
    margin-bottom: 0;
  }
  .lesson-block-list .item:nth-child(2) {
    margin-bottom: 22px;
  }
  .lesson-block-list .item .img {
    position: unset !important;
    left: auto !important;
    width: 100%;
  }
  .lesson-block-list .item .img img {
    width: 100%;
  }
  .lesson-block-list .item .txt {
    padding-left: 0;
    width: 100%;
  }
  .page-pilates-01 .lesson-block-list .item .txt p {
    margin-bottom: 0;
    padding: 15px 0 0 0;
    font-size: 1rem;
  }
  .lesson-block-list .item .step-list-arrow {
    position: absolute;
    top: 12%;
    right: -23%;
  }

  .lesson-block-list .item .step-list-arrow img {
    width: 30px;
    transform: rotate(-90deg);
  }
}

@media screen and (max-width: 768px) {
  .lesson-block-list .item:nth-child(2) {
    margin-bottom: 37px;
  }
}

ul.ul-steps {
  margin: 0 auto;
  max-width: 600px;
  font-size: 3rem;
}
ul.ul-steps img {
  max-width: 300px;
  width: 100%;
}
ul.ul-steps li {
  position: relative;
  margin: 30px auto;
  padding: 0 15px 15px 15px;
  background-color: #fff;
}
ul.ul-steps li::before {
  position: absolute;
  top: -2px;
  left: 30px;
  margin: auto;
  width: 50px;
  height: 20px;
  color: #fff;
  content: "\f00c";
  font-size: 50px;
  font-family: "FontAwesome";
}
ul.ul-steps li span.li-steps {
  padding: 5px 0;
  background-color: #e12726;
  color: #fff;
  letter-spacing: 0;
  font-weight: bold;
  font-size: 4rem;
}
ul.ul-steps li span.li-res {
  padding: 10px 0;
  color: #333;
  letter-spacing: 0;
  font-weight: bold;
  font-size: 3rem;
  line-height: 4.8rem;
}
.step-color {
  color: #e12726;
}
.sec-title {
  margin-bottom: 3rem;
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.8;

  @include tab{
    font-size: 2.7rem;
    margin-bottom: 2rem;
  }
  span {
    display: block;
    color: #535353;
    font-size: 1.7rem;
    font-weight: normal;

    @include tab{
      font-size: 1.6rem;
    }
  }
  strong {
    color: #E93742;
    letter-spacing: .05rem;
    font-size: 3.6rem;
    font-family: serif;

    @include tab{
      font-size: 3rem;
    }
  }
  small {
    display: block;
    color: #E93742;
    letter-spacing: .05rem;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1;

    @include tab{
      font-size: 1.7rem;
    }
  }
}
.sub-title {
  margin-bottom: 2rem;
  color: #535353;
  font-weight: bold;
  font-size: 2.2rem;
  font-family: $gothic !important;
  line-height: 1.5;
}
</style>
