<template>
  <div class="c-twotitles">
    <div
      class="left"
      v-html="left"
    />
    <div
      class="right"
      v-html="right"
    />
  </div>
</template>

<script>
export default {
  props: [
    'left',
    'right',
  ],
};
</script>

<style lang="scss">
@import '~assets/scss/newvariables';

.c-twotitles{
  display: flex;

  .left,
  .right{
    text-align: center;
    font-size: 1.8rem;
    font-weight: bold;
    width: 50%;
    padding-bottom: 1em;
    border-bottom: 4px solid $gray-ec;
    color: $blue;

    @include sp{
      font-size: pv(15);
      padding-bottom: pv(13);
      border-bottom-width: pv(3);
    }
  }

  .right{
    border-bottom-color: $blue;
  }
}
</style>
