-<template>
  <div class="c-ctalower bg-blue text-center">
    <div class="l-new-container">
      <p class="fa-2x white">
        TRIAL LESSON
      </p>
      <div class="d-flex justify-content-center">
        <!-- <a
          href="tel:03-4405-1245"
          class="c-ctalower-blue"
        >
          <i class="icon-phone" />
          電話予約
        </a> -->
        <a
          href="/welcome/schedule.php"
          class="c-ctalower-orange"
        >
          <i class="icon-web" />
          BOOK A CLASS
        </a>
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
