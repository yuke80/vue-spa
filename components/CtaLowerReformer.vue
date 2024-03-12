<template>
  <div class="c-ctalower bg-blue text-center">
    <div class="l-new-container">
      <p class="fa-2x white">
        まずは体験から
        <!-- <span style="display: block; font-size: 1.5rem;">こちらのキャンペーンは2022年12月中に申し込みされた方が対象です。<br class="pc">2023年1月以降は体験料および入会キャンペーンが変更されます。</span> -->
      </p>
      <div class="mb-5">
        <img
          src="~assets/images/pilates/reformergroup/banner-reformerg.jpg"
          loading="lazy"
          class="w-100"
          alt="体験レッスンキャンペーン中"
          style="max-width:600px;"
        >
      </div>

      <div class="banner-reserve">
        <h3 class="gothic">
          体験はお電話またはWEBでご予約ください
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

<style lang="scss" scoped>
@import '~assets/scss/newvariables';
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
      margin-bottom: pv(24);
      font-weight: bold;
      font-size: pv(20);
    }
  }

  a{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    max-width: 320px;
    width: 50%;
    height: 68px;
    border-radius: 50px;
    color: white;
    font-weight: bold;
    font-size: 22px;

    @include sp{
      margin-bottom: pv(24);
      max-width: unset;
      width: 100%;
      height: pv(60);
    }
    @include sp{
      margin: pv(9) 0 0;
    }

    // @media screen and (max-width: 600px){
    //   width: 160px;
    //   height: 160px;
    // }

    i{
      margin-right: 10px;
      width: 24px;
      height: 36px;
    }
  }

  .list-notice {
    margin: 0 auto;
    max-width: 670px;
  }

  &-blue{
    border: 1px solid #72BBFD;
    background: #2789E7;
  }
  &-orange{
    border: 1px solid #FEA667;
    background: $orange;
  }

}
</style>
