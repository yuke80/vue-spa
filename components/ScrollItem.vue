<template>
  <a
    :href="anchor"
    class="c-scrollitem js-scroll"
  >Scroll<span class="c-scrollitem-item" /></a>
</template>

<script>
export default {
  props: { anchor: { default: '#anchor' } },
};
</script>
<style lang="scss" scoped>

@import '~assets/scss/newvariables';
.c-scrollitem {
  display: inline-block;
  font-size: 1.2rem;
  line-height: 1;
  width: 50px;
  height: 148px;
  text-align: center;
  position: relative;
  color: $blue;
  font-weight: bold;

  @include sp{
    font-weight: bold;
    height: pv(100);
  }

  &-item {
    position: absolute;
    top: 28px;
    left: 50%;
    display: block;
    overflow: hidden;
    width: 1px;
    height: 120px;

    @include sp{
      height: pv(72);
    }

    &:after {
      position: absolute;
      top: 0;
      left: 0;
      width: 1px;
      height: 100%;
      content: "";
      animation:baranime 1.8s cubic-bezier(1,0,0,1) infinite;
      background-color: #535353;
    }
  }
}

@keyframes baranime {
  0% {
    transform: scale(1, 0);
    transform-origin: 0 0;
  }
  50% {
    transform: scale(1, 1);
    transform-origin: 0 0;
  }
  50.1% {
    transform: scale(1, 1);
    transform-origin: 0 100%;
  }
  100% {
    transform: scale(1, 0);
    transform-origin: 0 100%;
  }
}
</style>
