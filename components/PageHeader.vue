<template>
  <div
    class="c-pageheader"
    :style="{backgroundImage: `url(${img}`}"
  >
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: ['title', 'img'],
};
</script>

<style lang="scss">
@import '~assets/scss/newvariables';
.c-pageheader{
  background-size: cover;
  background-position: center;
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;

  @include tab{
    height: 160px;
  }

  @include sp{
    height: pv(93);
  }

  h1{
    color: white;
    font-size: 34px;
    font-weight: bold;

    @include sp{
      font-size: pv(20);
    }
  }
}
</style>
