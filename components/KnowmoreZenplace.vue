<template>
  <section class="c-knowmorezenplace">
    <div class="l-new-container">
      <h2>zen placeをもっと知る</h2>
      <div class="wrap">
        <nuxt-link to="/pilates">
          <div class="img" />
          <div class="text">
            zenplace ピラティス
          </div>
        </nuxt-link>
        <nuxt-link to="/yoga">
          <div class="img" />
          <div class="text">
            zen place yoga
          </div>
        </nuxt-link>
        <nuxt-link to="/voice">
          <div class="img" />
          <div class="text">
            zen place 利用者の声
          </div>
        </nuxt-link>

        <!-- <nuxt-link to="/about/guide">
          <div class="img" />
          <div class="text">
            zenplaceの歩き方
          </div>
        </nuxt-link> -->
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '~assets/scss/newvariables';

.c-knowmorezenplace{
  background: #ececec;
  padding: 60px 0 60px;
  h2{
    text-align:center;
    color: $blue;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 40px;
  }

  .wrap{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    a{
      display: block;
      width: calc(25% - 20px);
      margin: 0 10px 20px;

      @media screen and (max-width: 768px){
        width: calc(50% - 20px);
      }

      @include sp{
        width: 100%;
        margin: 0 0 pv(20);
      }

      .img{
        height: 0;
        padding-bottom: 65%;
        background-size: cover;
      }
      &:nth-child(1) .img{
        background-image: url('~assets/images/components/knowmorezenplace/link-1.webp');
      }
      &:nth-child(2) .img{
        background-image: url('~assets/images/components/knowmorezenplace/link-2.webp');
      }
      &:nth-child(3) .img{
        background-image: url('~assets/images/components/knowmorezenplace/link-3.webp');
      }

      .text{
        background: $blue;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        height: 80px;
        line-height: 1.5;
        font-size: 18px;
      }
    }
  }
}
</style>
