<template>
  <section class="c-studiolist">
    <div class="w-100">
      <p class="font-weight-bold">
        スタジオを探す
      </p>
      <nuxt-link
        to="/studios"
        class="btn-white"
      >
        スタジオ一覧を見る
      </nuxt-link>
    </div>
  </section>
</template>

<style lang="scss">
@import '~assets/scss/newvariables';

.c-studiolist{
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('~assets/images/common/studiolist.jpg')no-repeat center/ cover;
    min-height: 340px;
    text-align: center;

    @include sp{
      min-height: pv(207);
      padding: 0 pv(25);
      background-image: url('~assets/images/common/studiolist-sp.jpg');
    }

    p{
      font-size: 30px;
      color: white;
      margin-bottom: 16px;

      @include sp{
        font-size: pv(20);
        margin-bottom: pv(6);
      }
    }
  }// .c-studiolist
</style>
