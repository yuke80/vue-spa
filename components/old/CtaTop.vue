<template>
  <div class="CtaTop bg-blue text-center">
    <div class="l-container">
      <p class="fa-2x white">
        まずは体験から
        <span style="display: block; font-size: 1.5rem;">こちらのキャンペーンは2022年12月中に申し込みされた方が対象です。<br class="pc">2023年1月以降は体験料および入会キャンペーンが変更されます。</span>
      </p>
      <nuxt-link to="/cp/cp202106">
        <img
          loading="lazy"
          src="~assets/images/cp/cpban-pc.png"
          class="w-100 d-sp-none"
        >
        <img
          loading="lazy"
          src="~assets/images/cp/cpban-sp.png"
          class="w-100 d-none d-sp-block"
        >
      </nuxt-link>
      <div class="d-flex justify-content-center">
        <a
          href="tel:03-4405-1245"
          class="btn-red"
        >
          <i class="icon-phone" />
          TELで予約
        </a>
        <a
          href="/welcome/schedule.php"
          class="btn-orange"
        >
          <i class="icon-web" />
          WEBで予約
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '~assets/scss/newvariables';

.CtaTop{

  padding: 100px 32px 120px;

  @include tab{
    padding: 40px 32px;
  }

  @include sp{
    padding: pv(49) pv(25) pv(40);

    .l-container{
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
      margin-bottom: pv(16);
    }
  }

  img{
    margin-bottom: 4rem;

    @include sp{
      margin-bottom: 0;
    }
  }

  a{
    margin: 0 2rem;

    @include sp{
      margin: pv(9) 0 0;
    }
  }

}
</style>
