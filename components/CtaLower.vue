<template>
  <div class="c-ctalower bg-cta text-center">
    <div class="l-new-container">
      <!-- <p class="fa-2x white">
        まずは体験から
        <span style="display: block; font-size: 1.5rem;">こちらのキャンペーンは2022年12月中に申し込みされた方が対象です。<br class="pc">2023年1月以降は体験料および入会キャンペーンが変更されます。</span>
      </p> -->
      <div>
        <img
          loading="lazy"
          src="~assets/images/welcome/campaign_pc.webp"
          class="w-100 pc mx-auto"
          style="max-width:1200px;"
          alt="体験キャンペーン"
        >
        <img
          loading="lazy"
          src="~assets/images/welcome/campaign.webp"
          class="w-100 sp mx-auto"
          style="max-width:100vw;"
          alt="体験キャンペーン"
        >
      </div>
      <div class="banner-reserve">
        <h3 class="gothic">
          体験はお電話またはWEBで<br class="sp">ご予約ください
        </h3>
        <p>
          後日、スタジオよりご案内のお電話をさせていただきます。<br>
          ご不明な点やお悩み、気になることがありましたら、お気軽にご相談ください。
        </p>
        <div class="d-flex justify-content-center">
          <a
            href="tel:03-4405-1245"
            class="c-ctalower-blue"
          >
            <i class="icon-phone" />
            電話予約
          </a>
          <a
            href="/welcome/schedule.php"
            class="c-ctalower-orange"
          >
            <i class="icon-web" />
            ウェブで予約
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '~assets/scss/newvariables';
.bg-blue{
  background: $blue;
}

.white{
  color: $white;
}
.c-ctalower{

  padding: 0 32px 60px;

  @include tab{
    padding: 40px 32px;
  }

  @include sp{
    padding: pv(0) pv(0) pv(40);

    .l-new-container{
      padding: 0!important;
    }
    .d-flex{
      display: block!important;
      width: 92%;
      margin: auto;
    }
  }

  // p{
  //   margin-bottom: 3rem;

  //   @include sp{
  //     font-size: pv(30);
  //     font-weight: 500;
  //     margin-bottom: pv(24);
  //   }
  // }

  img{
    margin-bottom: 1rem;

    @include tab {
      margin-bottom: 1rem;
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
      font-size: 1.8rem;
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

  .banner-reserve {
    padding: 20px 0 0 0;
    // background-color: #fff;
    @include tab {
      padding: 10px 0 0 0;
    }
    h3 {
      font-size: 2rem;
      font-weight: 600;
      letter-spacing: 0.2rem;
      color: #333333;
      line-height: 1.7;
      @include tab {
        width: 90%;
        margin: auto;
        font-size: 1.8rem;
      }
    }
    p {
      padding: 10px 0 15px;
      font-size: 1.6rem;
      color: #333333;
      @include tab {
        padding: 10px 0 15px;
        text-align: left;
        width: 90%;
        margin: auto;
        font-size: 1.5rem;
      }
    }
  }

}
</style>
