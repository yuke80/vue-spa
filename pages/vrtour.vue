<template>
  <div class="">
    <div class="container py-5">
      <h1 class="pt-2 text-center t-blue">
        zen place VR Tour
      </h1>
      <p class="p-intro t-blue pb-3 text-center">
        zen placeスタジオのご紹介！
      </p>
      <div class=" mx-auto text-center">
        <iframe
          allowfullscreen
          src="https://www.zenplace.co.jp/lp/vrtour/"
          class="vrtour-content"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'zen placeスタジオ VR TOUR',
      meta: [
        { name: 'robots', content: 'noindex, nofollow' },
      ],
    };
  },
};

</script>

<style lang="scss" scoped>
@import '~assets/scss/newvariables';

.t-blue{
  color: #0065a4;
}
iframe.vrtour-content{
  width:100%;
  max-width:900px;
  height:600px;
  border:none;
}

p.p-intro{
  font-size:18px;
}
@media only screen and (max-width: 600px){

iframe.vrtour-content{
  width:100%;
  max-width:900px;
  height:600px;
}

}
</style>
