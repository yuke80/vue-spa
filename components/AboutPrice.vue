<template>
  <section class="c-aboutPrice">
    <div class="l-new-container">
      <h2 class="c-header-border-left white">
        料金
      </h2>
      <div class="cf" />
      <p>
        zen placeは、わかりやすい月額料金＋チケット制。<br class="d-sp-none">
        同じグレード内なら、どのエリアでも通い放題です。<br>
        ピラティス、ヨガの様々なレッスンを、あなたの好きな時好きな場所でいつでも、ご予約いただけます。
      </p>
      <nuxt-link
        to="/price"
        class="btn-white"
      >
        料金体系へ
      </nuxt-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '~assets/scss/newvariables';
.c-aboutPrice{
  background: $blue;
  padding: 80px 0;
  color: white;
  text-align: center;

  @include sp{
    padding: pv(60) 0;
    text-align: left;
  }

  h2{
    margin-bottom: 30px;

    &:after{
      background: white!important;
    }
  }
  p{
    line-height: 2.3;
    margin-bottom: 20px;

    @include sp{
      font-size: pv(17);
    }
  }
}
</style>
