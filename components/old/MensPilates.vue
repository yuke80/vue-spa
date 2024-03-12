<template>
  <section class="c-menspilates">
    <div class="l-new-container">
      <h2 class="c-header-border-bottom">
        メンズピラティス
      </h2>
      <p>ピラティスは、「男性による、男性の為の、心と身体のコントロール術」でもあります。自律神経の乱れを整え、心を活性化、精神力を高める効果もあることから、ストレスが溜まりがちな働き盛りの男性にももってこいです。またダイエット効果も期待できるため、内臓脂肪やメタボが気になる男性にもおすすめです。</p>
      <div class="text-center">
        <nuxt-link
          to="/men"
          class="btn-white"
        >
          もっとみる
        </nuxt-link>
      </div>
    </div>
  </section>
  <!-- /.p-yoga-menspilates -->
</template>

<style lang="scss" scoped>
@import '~assets/scss/newvariables';
.c-menspilates{
  padding: 100px 0;
  color: white;
  background-size: cover;
  background-image: url('~assets/images/yoga/menspilates-bg.jpg');

  @include sp{
    padding: pv(60) 0;
  }

  h2{
    margin-bottom: 40px;

    @include sp{
      margin-bottom: pv(30);
    }
  }

  p{
    margin-bottom: 40px;
    line-height: 2;
    font-size: 17px;
  }
}
</style>
