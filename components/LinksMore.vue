<template>
  <div class="c-linkmore text-center">
    <div class="l-new-container">
      <p class="blue">
        zen placeをもっと知る
      </p>
      <div class="d-flex justify-content-center">
        <div>
          <nuxt-link
            to="/pilates"
          >
            <img
              src="~assets/images/common/link_img01.png"
              loading="lazy"
              alt="zen place ピラティス"
            >
            <p>zen place <br class="sp">ピラティス</p>
          </nuxt-link>
        </div>
        <div>
          <nuxt-link
            to="/yoga"
          >
            <img
              src="~assets/images/common/link_img02.png"
              loading="lazy"
              alt="zen place ヨガ"
            >
            <p>zen place <br class="sp">ヨガ</p>
          </nuxt-link>
        </div>
        <div>
          <nuxt-link
            to="/voice"
          >
            <img
              src="~assets/images/common/link_img03.png"
              loading="lazy"
              alt="zen place 利用者の声"
            >
            <p>zen place <br class="sp">利用者の声</p>
          </nuxt-link>
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
.c-linkmore{
  background: #F5F5F5;

  padding: 80px 0;

  @include tab{
    padding: 40px 32px;
  }

  @include sp{
    padding: pv(49) pv(25) pv(40);

    .l-new-container{
      padding: 0!important;
    }
  }

  p.blue{
    font-size: 26px;
    margin-bottom: 3rem;

    @include sp{
      font-size: pv(20);
      font-weight: 500;
      margin-bottom: pv(24);
    }
  }
  .d-flex{
    div{
      margin: 0 10px;
      width: 320px;
      @include sp{
        margin: 0 pv(5);
        width: 48%;
      }
      img{
        width: 100%;
      }
      p{
        background: $blue;
        color: $white;
        padding: 1.5em 0;
         @include sp{
        font-size: pv(14);
        padding: 1em 0;
      }
      }
    }
  }
}
</style>
