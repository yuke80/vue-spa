<template>
  <section class="c-pilatesyogastudios">
    <div class="l-new-container">
      <h2>zen placeのピラティス・ヨガ</h2>
      <div class="wrap">
        <nuxt-link to="/pilates">
          <div class="img" />
          <h3 class="text">
            ピラティスについて
          </h3>
        </nuxt-link>
        <nuxt-link to="/yoga">
          <div class="img" />
          <h3 class="text">
            ヨガについて
          </h3>
        </nuxt-link>
        <nuxt-link to="/studios">
          <div class="img" />
          <h3 class="text">
            スタジオ一覧
          </h3>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '~assets/scss/newvariables';

.c-pilatesyogastudios{
  background: #ececec;
  padding: 80px 0 60px;
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
        background-image: url('~assets/images/welcome/pilatesyoga-1.jpg');
      }
      &:nth-child(2) .img{
        background-image: url('~assets/images/welcome/pilatesyoga-2.jpg');
      }
      &:nth-child(3) .img{
        background-image: url('~assets/images/welcome/pilatesyoga-3.jpg');
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
