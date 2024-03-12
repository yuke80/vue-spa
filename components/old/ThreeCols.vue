<template>
  <section class="c-threecols">
    <div class="l-container">
      <h2 class="c-header-border-left">
        {{ title }}
      </h2>
    </div>
    <div class="d-flex">
      <div class="c-threecols_single">
        <img
          loading="lazy"
          :src="img1"
        >
        <div class="info px-5">
          <img
            class="num"
            loading="lazy"
            src="~assets/images/reasons/01.png"
          >
          <h3 v-html="text1" />
        </div>
      </div>
      <div class="c-threecols_single">
        <img
          loading="lazy"
          :src="img2"
        >
        <div class="info px-5">
          <img
            class="num"
            loading="lazy"
            src="~assets/images/reasons/02.png"
          >
          <h3 v-html="text2" />
        </div>
      </div>
      <div class="c-threecols_single">
        <img
          loading="lazy"
          :src="img3"
        >
        <div class="info px-5">
          <img
            class="num"
            loading="lazy"
            src="~assets/images/reasons/03.png"
          >
          <h3 v-html="text3" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: [
    'title',
    'text1',
    'img1',
    'text2',
    'img2',
    'text3',
    'img3',
  ],
};
</script>
<style lang="scss">
@import '~assets/scss/newvariables';

.c-threecols{
  position: relative;
  padding-bottom: 100px;
  overflow: hidden;

  @include sp{
    padding-bottom: pv(10);
  }

  h2{
    margin: 100px 48px 40px 0;

    @include sp{
      margin: pv(85) 0 pv(30) auto;
    }
  }
  .l-container{
    &:after{
      content: '';
      display: block;
      clear:both;
    }
    &:before{
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 15%;
      width: 100%;

      height: 100%;
      background: $gray-ec;
      z-index: -1;

      @include sp{
        left: 0;
      }
    }

  }
  &_single{
    width: calc(100% / 3);

    img{
      width: 100%;
    }

    &:nth-child(2){
      text-align: right;
      .info{
        text-align: left;
      }
    }

    .info{
      background: black;
      color: $white;
      width: 73%;
      min-width: 25em;
      min-height: 116px;
      position: relative;
      padding-top: 2.4em;
      padding-bottom: 1em;
      margin-top: -4.2em;

      @include tabH{
        min-width: 84%;
        padding: 2rem;
        min-height: 5.5em;
      }

      @include tab{
        margin-top: -2.4em;
        padding: 2.4rem 1rem 1rem!important;
        min-height: 4.5em;
      }

      @include sp{
        margin-top: pv(-25);
        padding: pv(24)!important;
        min-height: unset;
        height: pv(100);
        display: inline-flex;
        align-items: center;
        width: unset;
        top: pv(-33);
      }

      h3{
        font-size: 2rem;
        line-height: 1.5;

        @include tabH{
          font-size: 1.3rem;
        }

        @include tab{
          font-size: 1rem;
        }

        @include sp{
          font-size: pv(16);
          font-weight: bold;
          margin-bottom: 0;
        }
      }

      .num{
        position: absolute;
        top: -2em;
        z-index: 5;
        width: 4em;

        @include tabH{
          width: 3em;
        }

        @include tab{
          top: -1.2em;
          width: 2.4em;
        }

        @include sp{
          top: pv(-28);
          width: pv(50);
        }
      }
    }
  }

  @include sp{
    >.d-flex{
      display: block!important;
    }

    &_single{
      width: 100%;
    }
  }
}

</style>
