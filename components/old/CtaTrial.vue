<template>
  <section
    class="c-cta-trial"
    :class="{'type-blue': bg=='blue'}"
  >
    <p class="text-center fa-3x mb-5">
      {{ title }}
    </p>
    <div class="d-flex justify-content-center l-container pt-2 mb-5">
      <nuxt-link
        to="/cp/cp202106"
        class="c-cta-trial_single full"
      >
        <img
          loading="lazy"
          src="~assets/images/cp/cpban-pc.png"
          alt="体験レッスン当日の入会で月会費2ヶ月無料"
          class="d-sp-none"
        >
        <img
          loading="lazy"
          src="~assets/images/cp/cpban-sp.png"
          alt="体験レッスン当日の入会で月会費2ヶ月無料"
          class="d-none d-sp-block"
        >
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      default: 'まずは体験',
    },
    bg: {
      default: 'blue',
    },
  },
};
</script>

<style lang="scss">
@import '~assets/scss/newvariables';
.c-cta-trial{
  color: $blue;
  padding: 60px 0;

  &.type-blue{
    background: $blue;
      color: $white;
  }

  .fa-3x{
    font-size: 32px;
    margin-bottom: 16px;
  }

  @include tabH{
    .fa-3x{
      font-size: 3rem;
    }
  }

  @include tab{
    padding: 30px 0;

    .fa-3x{
      font-size: 2rem;
    }
  }

  @include sp{
    padding: 0 pv(25);

    .fa-2x{
      font-size: pv(20);
      margin-bottom: 0!important;
    }

    .fa-3x{
      font-size: pv(20);
      padding: pv(40) 0 pv(15);
      margin-bottom: 0!important;
    }

    .l-container{
      padding: pv(22) 0 pv(30);
      display: block!important;
      margin-bottom: 0!important;
    }
  }

  &_single{
    width: 33%;
    max-width: 440px;
    margin: 0 16px;
    text-align: center;
    display: inline-block;

    &.full{
      width: 100%;
      max-width: unset;
    }

    @include tab{
      margin: 0 8px;
    }

    @include sp{
      width: 100%;
      margin: 0 0 pv(15);
    }

    span{
      display: inline-block;
      border-bottom: 1px solid $white;
      margin-bottom: 30px;
      padding: 2px 10px;
      min-width: 10em;
      font-size: 1.2em;

      @include tabH{
        font-size: 1em;
        margin-bottom: 20px;
      }

      @include tab{
        font-size: .5em;
        margin-bottom: 10px;
      }

      @include sp{
        display: none;
      }
    }

    img{
      width: 100%;
    }
  }
}
</style>
