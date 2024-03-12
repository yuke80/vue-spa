<template>
  <div
    :class="{
      'is-top-page': $route.path === '/',
      'is-scrolled': isScrolled,
      'is-page-loaded': $store.state.layoutLoaded
    }"
  >
    <Header />

    <transition
      name="fade"
      mode="out-in"
    >
      <nuxt class="l-new" />
    </transition>

    <div>
      <Footer />
    </div>
    <CtaFooter />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import CtaFooter from '@/components/CtaFooter.vue';

export default {
  components: {
    Header,
    Footer,
    CtaFooter,
  },

  data() {
    return {
      isScrolled: false,
    };
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);

    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => {
        this.$nuxt.$loading.finish();
      }, 500);
      if (process.browser) {
        this.$store.commit('loadingDone');
      }
    });

    // After mount go to initial place
    this.$nextTick(() => {
      this.scrollToHash(this.$route);
    });
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    async scrollToHash(to) {
      const findEl = async (hash, x) => document.querySelector(hash)
        // eslint-disable-next-line consistent-return
        || new Promise((resolve, reject) => {
          if (x > 20) {
            return resolve();
          }
          setTimeout(() => { resolve(findEl(hash, x + 1 || 1)); }, 100);
        });

      if (to.hash) {
        const el = await findEl(to.hash);
        const navbarOffset = 120;
        // if ('scrollBehavior' in document.documentElement.style) {
        const rect = el.getBoundingClientRect();
        window.scrollTo({ top: rect.top - navbarOffset });
        // }
      }
    },

    handleScroll() {
      if (window.scrollY > 50) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },
  },
};
</script>

<style lang="scss">
@import '~assets/scss/newvariables';
html{
  scroll-behavior: smooth;
}
body{
  @include tab{
    padding-top: 58px;
  }
  .l-new{

    @include tab{
      .d-tab-block{display: block!important;}
      .d-tab-none{display: none!important;}
    }
    @include sp{
      .d-sp-block{display: block!important;}
      .d-sp-none{display: none!important;}
      .d-sp-flex{display: flex!important;}
    }

    a, a *{
      cursor: pointer;
      transition: .2s;

      &:hover, &:hover *{
        opacity: .8;
      }
    }

    .cf:after{
      display: block;
      clear: both;
      content: '';
    }

    .orange{color: $orange;}
    .white{color: $white;}
    .blue{color: $blue;}

    .bg-blue{background-color: $blue;}
    .bg-light-gray{background-color: $gray-ec;}
    .bg-cta {
      padding: 80px 0;
      background: #e2e4e5;

      @include tab {
          padding: 50px 15px;
      }
    }
    .tab-on{
    display: none;

      @media screen and(max-width:768px){
        display: block;
      }
    }

    .c{
      &-btns{
        display: flex;
        justify-content: center;
        margin-top: 40px;

        @include sp{
          margin-top: 0;
          padding: 0 pv(20);
        }

        a{
          margin: 0 10px 20px;

          @include sp{
            margin: 0 pv(5);
            font-size: pv(13);
          }
        }
      }// .c-btns
      &-header{

        &-border-left{
          position: relative;
          display: flex;
          align-items: center;
          padding-left: .3em;
          color: $gray-70;
          color: $blue;
          font-weight: bold;
          font-size: 6rem;

          @include tabL{
            margin-left: 5rem!important;
          }
          @include sp{
            float: right;
            margin-left: auto!important;
            padding-left: pv(27);
            font-size: pv(30);
          }

          &.white{
            color: white;

            &:before{
              background: white;
            }
          }
          &.small{
            margin-left: 0!important;
            font-size: 3rem;
            line-height: 1.5;

            @include sp{
              padding-left: 3vw!important;
              font-size: 2.3rem;
            }

            &:before{
              top: .8em;
            }
          }
          &:before{
            position: absolute;
            top: calc(50% -1px);
            right: 100%;
            display: block;
            width: 1em;
            height: 2px;
            background: $blue;
            content: '';

            @include sp{
              width: 100vw;
            }
          }
        }// .c-header-border-left

        &-border-center{
          position: relative;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
          padding-left: .3em;
          color: $gray-70;
          color: $blue;
          font-weight: bold;
          font-size: 6rem;

          @include tabL{
            margin-left: 5rem!important;
          }
          @include sp{
            float: right;
            margin-left: auto!important;
            padding-left: pv(27);
            font-size: pv(30);
          }

          &.white{
            color: white;

            &:before{
              background: white;
            }
          }
          span {
            display: block;
            padding: 30px 0;
            color: #535353;
            font-weight: normal;
            font-size: 1.6rem;
          }
          &.small{
            margin-left: auto!important;
            font-size: 3rem;
            line-height: 1.5;

            @include sp{
              padding-left: 3vw!important;
              font-size: 2.3rem;
            }

            &:before{
              top: .8em;
            }
          }
          // &:before{
          //   content: '';
          //   display: block;
          //   width: 1em;
          //   height: 2px;
          //   background: $blue;
          //   position: absolute;
          //   right: 100%;
          //   top: calc(50% -1px);

          //   @include sp{
          //     width: 100vw;
          //   }
          // }
        }// .c-header-border-center

        &-border-bottom{
          position: relative;
          padding-bottom: .8em;
          text-align: center;
          font-weight: bold;
          font-size: 3.5rem;

          @include sp{
            padding-bottom: pv(12.5);
            font-size: pv(20);

            &:after{
              left: calc(50% - #{pv(29)});
              width: pv(58);
              height: pv(2);
            }
          }

          &:after{
            position: absolute;
            bottom: 0;
            left: calc(50% - 1.5em);
            display: block;
            width: 3em;
            height: 3px;
            background: $blue;
            content: '';
          }
        }// c-header-border-bottom

        &-orange-border{
          border-top: 3px solid $orange;
          border-bottom: 3px solid $orange;
          text-align: center;
          font-weight: bold;

          div{
            display: block;
            margin-top: .5em;
            color: $orange;
          }
        }// c-header-orange-border

      }

      &-column{
        &-alternate{
          &-single{
            margin-bottom: 110px;
            padding: 40px 0;
            background-position: left center;
            background-size: 864px auto;
            background-repeat: no-repeat;
            color: $gray-70;

            @include sp{
              margin-bottom: 0;
              padding: pv(167) pv(20) pv(40) 0;
              background-position: top;
              background-size: contain;

              .l-new-container{
                padding: 0;
              }
            }

            @media screen and (min-width: 1440px){
              background-size: 60% auto;
            }

            @media screen and (max-width: 1200px){
              margin-bottom: 40px;
              padding-top: 200px;
              background-position-y: top;
            }

            &:nth-of-type(2n){
              background-position: right center;

              @include sp{
                padding-right: 0;
                padding-left: pv(25);
                background-position: top;
              }

              @media screen and (max-width: 1200px){
                background-position-y: top;
              }
              .bg-white{
                margin-right: auto;
                margin-left: 0;
              }
            }

            .bg-white{
              margin-right: 0;
              margin-left: auto;
              padding: 32px 0 32px 32px;
              max-width: 540px;
              box-shadow: 0px 3px 6px rgba(0, 0, 0, .29);

              @include sp{

              }

              h3{
                margin-bottom: 12px;
                padding-bottom: 12px;
                border-bottom: 1px solid $gray-70;
                font-size: 28px;

                @include sp{
                  margin-bottom: pv(15);
                  padding-bottom: pv(15);
                  font-size: pv(20);
                }
              }

              p{
                padding-right: 24px;
                font-size: 16px;
                line-height: 2;

                @include sp{
                  padding-right: pv(25);
                  font-size: pv(14);
                }
              }
            }
          }
        }// .c-column-alternate

        &-alternate2{
          &-single{
            margin-bottom: 90px;
            padding: 40px 0 0;
            background-position: left center;
            background-size: 764px auto;
            background-repeat: no-repeat;
            color: $gray-70;

            @include sp{
              margin-bottom: 0;
              padding: pv(167) pv(20) pv(40) 0;
              background-position: top;
              background-size: contain;
            }
            @include sp{
              padding: pv(210) 0 0!important;

              .bg-white{
                padding: pv(30) pv(25)!important;

                h3{
                  margin-bottom: pv(2)!important;
                  font-size: pv(20)!important;
                  line-height: 1.5!important;

                  .subtitle{
                    margin-bottom: pv(10);
                    font-size: pv(14)!important;
                  }
                }

                p{
                  padding: 20px 0 0 0!important;
                }
              }
            }

            @media screen and (min-width: 1288px){
              background-size: 59% auto;
            }

            @media screen and (max-width: 1200px){
              margin-bottom: 40px;
              padding-top: 400px;
              background-position-y: top;
            }

            .l-new-container{
              padding: 0;
            }

            .bg-white{
              margin-right: 0;
              margin-left: auto;
              padding: 50px 20px 0 60px;
              max-width: 700px;
              width: 60%;

              @media screen and (max-width: 1200px){
                max-width: 1000px;
                width: 90%;
              }
              @media screen and (max-width: 1000px){
                max-width: unset;
                width: 100%;
              }

              h2, h3{
                margin-bottom: 8px;
                color: $blue;
                font-weight: bold;
                font-size: 28px;
                line-height: 1.5;

                @include sp{
                  margin-bottom: pv(15);
                  padding-bottom: pv(15);
                  font-size: 22px;
                }

                .subtitle{
                 color: #9f9f9f;
                 letter-spacing: 2px;
                 font-size: 16px;
                 line-height: 40px;
                }
              }

              p{
                font-size: 16px;
                line-height: 2;

                @include sp{
                  padding-right: pv(25);
                  font-size: 16px;
                }
              }

              a{
                margin-top: 10px;
              }
            }

            &:nth-of-type(2n), &.right{
              background-position: right center;

              @include sp{
                padding-right: 0;
                padding-left: pv(25);
                background-position: top;
              }

              @media screen and (max-width: 1200px){
                background-position-y: top;
              }
              .bg-white{
                margin-right: auto;
                margin-left: 0;
                padding-right: 60px;
              }
            }
            @media screen and(max-width:768px){
              padding-top: 300px!important;
            }
          }
        }// .c-column-alternate2

        &-two{
          display: flex;
          margin-bottom: 32px;

          @include tab{
            display: block;

            &-single{
              max-width: 100%!important;
              width: 100%!important;
              &:first-child{
                margin-bottom: 64px;

                @include sp{
                  margin-bottom: pv(50);
                }
              }

              .info{
                margin-right: auto;
                margin-left: auto;
              }
            }
          }

          &-single{
            width: 50%;

            @include sp{
              width: 100%;
            }

            img{
              display: block;
              margin-bottom: 40px;
              width: 100%;
            }

            .info{
              margin: 0 0 0 6%;
              max-width: 40em;

              @include sp{
                margin: 0;
                padding: pv(32) pv(25) 0!important;
                max-width: unset;
              }

              @media screen and (max-width: 1250px){
                margin-left: 32px;
              }

              h3{
                margin-bottom: 1rem;
                color: $blue;
                letter-spacing: 5px;
                font-weight: bold;
                font-size: 20px;

                @include sp{
                  margin-top: pv(-40);
                  margin-bottom: pv(12);
                }
              }

              p{
                margin-bottom: 4rem;
                font-size: 1.6rem;
                line-height: 2.4;

                @include sp{
                  margin-bottom: pv(20);
                  font-size: pv(14);
                  line-height: pv(30);
                }
              }
            }
          }
        }// .c-column-two

        &-three{
          position: relative;
          overflow: hidden;
          padding-bottom: 100px;

          @include sp{
            padding-bottom: pv(10);
          }
          @include sp{
            >.d-flex{
              display: block!important;
            }

            &_single{
              width: 100%;
            }
          }

          h2{
            margin: 100px 48px 40px 0;

            @include sp{
              margin: pv(85) 0 pv(30) auto;
            }
          }

          .l-container{
            &:after{
              display: block;
              clear:both;
              content: '';
            }
            &:before{
              position: absolute;
              top: 0;
              left: 15%;
              z-index: -1;
              display: block;
              width: 100%;
              height: 100%;
              background: $gray-ec;
              content: '';

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
              position: relative;
              display: flex;
              align-items: center;
              margin-top: -4.2em;
              padding-top: 1em;
              padding-bottom: 1em;
              min-width: 25em;
              min-height: 116px;
              width: 73%;
              background: $blue;
              color: $white;
              font-weight: bold;

              @include tabH{
                padding: 2rem;
                min-width: 84%;
                min-height: 5.5em;
              }
              @include tab{
                margin-top: -2.4em;
                padding: 1rem 1rem 1rem!important;
                min-height: 4.5em;
              }
              @include sp{
                top: pv(-33);
                display: inline-flex;
                align-items: center;
                margin-top: pv(-25);
                padding: pv(24)!important;
                min-height: unset;
                width: unset;
                height: pv(100);
              }

              h3{
                margin-bottom: 0!important;
                font-weight: bold;
                font-size: 2rem;
                line-height: 1.5;

                @include tabH{
                  font-size: 1.3rem;
                }
                @include tab{
                  font-size: 1rem;
                }
                @include sp{
                  margin-bottom: 0;
                  font-weight: bold;
                  font-size: pv(16);
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

          &.nonum{
            .info{
              display: flex;
              align-items: center;
              justify-content: center;
              margin-top: unset;
              padding: 1.5em 0;
              min-height: unset;
              transform: translateY(-50%);
            }
          }
        }// .c-column-three

        &-three2{

          .sp-slide{
            @media screen and(max-width: 680px){
              overflow-x: scroll;
              width: pv(350);
            }
          }

          &-wrap{
            display: flex;
            justify-content: space-between;
            margin-bottom: 40px;

            @media screen and(max-width: 680px){
              justify-content: flex-start;
              margin-bottom: pv(20);
              width: pv(905);
            }
          }

          &_single{
            width: 32%;

            @media screen and(max-width: 680px){
              margin-right: pv(15);
              width: pv(285);
            }

            img{
              margin-bottom: 24px;
              @media screen and(max-width: 680px){
                margin-bottom: pv(20);
              }
            }

            h3{
              margin-bottom: 0;
              color: $blue;
              font-weight: bold;
              line-height: 1.8;

              @media screen and(max-width: 680px){
                margin-bottom: pv(10);
                font-size: pv(16);
              }
            }

            p{
              font-size: 16px;
              line-height: 2;

              @media screen and(max-width: 680px){
                font-size: pv(14);
              }
            }
          }
        }
      }

      &-twotitles{
        display: flex;

        .left,
        .right{
          padding-bottom: 1em;
          width: 50%;
          border-bottom: 4px solid $gray-ec;
          color: $blue;
          text-align: center;
          font-weight: bold;
          font-size: 1.8rem;

          @include sp{
            padding-bottom: pv(13);
            border-bottom-width: pv(3);
            font-size: pv(15);
          }
        }

        .right{
          border-bottom-color: $blue;
        }

        &.tab{
          .left,
          .right{
            border-bottom-color: $gray-ec;
            cursor: pointer;

            &.active{
              border-bottom-color: $blue;
            }
          }
        }
      }// .c-twotitles

      &-lifestyle{
        padding: 100px 0 80px;

        @include sp{
          padding: pv(60) 0 pv(50);
        }

        h2{
          margin-bottom: 60px;

          @include sp{
            margin-bottom: pv(30);
          }
        }

        .content{
          display: flex;

          @include tab{
            flex-direction: column;
          }

          .img{
            margin-right: 40px;
            width: 43%;

            @include tab{
              margin-bottom: 32px;
              width: 100%;

              img{
                height: 280px;
              }
            }
            @include sp{
              margin-bottom: 32px;
              margin-left: pv(-25);
              width: 100vw;

              img{
                height: pv(249);
              }
            }

            img{
              height: 100%;

              object-fit: cover;
            }
          }

          .info{
            flex: 1 0 auto;
            color: $blue;
            font-weight: bold;

            h3{
              margin-bottom: 1em;
              font-size: 3rem;

              @include sp{
                font-size: pv(25);
              }

              span{
                display: block;
                margin-top: .5em;
                font-size: .6em;
              }
            }

            .plans{
              display: flex;

              &-single{
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: center;
                padding: 8% 0;
                width: 33%;
                background: white;
                text-align: center;

                @include sp{
                  padding: pv(18) 0;
                }

                .course{
                  font-size: 13px;
                  line-height: 1.5;

                  @include sp{
                    font-size: pv(10);
                  }
                }

                .line{
                  margin: .2em;
                  width: 1px;
                  height: 1.3em;
                  background: $blue;

                  @include sp{
                    height: .6em;
                  }
                }

                .grade{
                  font-size: 18px;

                  @include sp{
                    font-size: pv(12);
                  }
                }

                &:not(:last-child){
                  position: relative;
                  margin-right: 24px;

                  @include sp{
                    margin-right: pv(11);
                  }

                  &:after{
                    position: absolute;
                    top: 50%;
                    right: -38px;
                    z-index: 100;
                    display: block;
                    width: 52px;
                    height: 52px;
                    background: url('~assets/images/price/plus.png')no-repeat center/contain;
                    content: '';
                    transform: translateY(-50%);

                    @include sp{
                      right: pv(-20);
                      width: pv(30);
                      height: pv(30);
                    }
                  }
                }
              }
            }
          }
        }
      }// .c-lifestyle

      &-nums-white{
        position: relative;
        z-index: 20;
        display: flex;
        justify-content: space-between;
        margin-top: 80px;

        @media screen and(max-width: 840px){
          display: block;
          margin-top: pv(56);
        }

        &_single{
          position: relative;
          padding: 50px 40px;
          width: 32%;
          background: white;
          color: $blue;
          font-weight: bold;
          font-size: 26px;

          @media screen and(max-width: 840px){
            margin-bottom: pv(25);
            padding: pv(30) 0 pv(20);
            width: 100%;
            text-align: center;
            font-size: pv(14);
          }

          > div{
            margin-top: 24px;
            font-size: .5em;
          }

          &:before{
            position: absolute;
            top: -30px;
            left: 10px;
            display: block;
            width: 60px;
            height: 60px;
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            content: '';

            @media screen and(max-width: 840px){
              top: pv(-20);
              left: calc(50% - #{pv(20)});
              width: pv(40);
              height: pv(40);
            }
          }
          &:nth-child(1):before{
            background-image: url('~assets/images/online/about-01@2x.png');
          }
          &:nth-child(2):before{
            background-image: url('~assets/images/online/about-02@2x.png');
          }
          &:nth-child(3):before{
            background-image: url('~assets/images/online/about-03@2x.png');
          }
        }
      } //.c-nums-white

      &-pilatesyoga{
      display: flex;

        @include tab{
          display: block;

          &_single{
            max-width: 100%!important;
            width: 100%!important;
            &:first-child{
              margin-bottom: 64px;

              @include sp{
                margin-bottom: pv(50);
              }
            }
          }
        }

        &-wrap{
          position: relative;
          overflow: hidden;
          padding-bottom: 100px;

          @include sp{
            padding-bottom: pv(50);
          }

          h2{
            margin: 60px 48px 40px 5em;

            @include tab{
              margin-left: 4em!important;
            }
            @include sp{
              margin: pv(60) pv(24) pv(38) 5em;
            }
          }

          &:after{
            position: absolute;
            top: 0;
            right: 10%;
            z-index: -1;
            display: block;
            width: 100%;
            height: 100%;
            background: $gray-ec;
            content: '';

            @include sp{
              right: 0;
            }

            @media screen and (max-width: 1250px){
              right: 32px;
            }
          }
        }

        &_single{
          width: 50%;

          img{
            width: 100%;

          }

          .info{
            margin: 0 32px 0 13%;
            max-width: 34em;

            @include sp{
              margin: 0;
              padding: 0 pv(20)!important;
              max-width: unset;
            }

            @media screen and (max-width: 1250px){
              margin-left: 32px;
            }

            h3{
              margin-top: -2.8em;
              margin-bottom: 2rem;

              @include sp{
                margin-top: pv(-40);
                margin-bottom: 0;

                img{
                  height: pv(75);
                }
              }

              img{
                width: auto;
                height: 11rem;
              }
            }

            p{
              margin-bottom: 4rem;
              font-size: 1.6rem;
              line-height: 2.4;

              @include sp{
                margin-bottom: pv(20);
                font-size: pv(16);
                line-height: pv(30);
              }
            }
          }
        }

      } // .c-pilatesyoga

      &-yourstyle{
        padding-top: 120px;
        padding-bottom: 120px;

        @include sp{
          padding-top: pv(50);
          padding-bottom: pv(20);

          .d-flex{
            flex-wrap: wrap;
          }
        }

        .c-header-orange-border{
          margin-bottom: 60px;
          padding: 1.5em 0;
          font-size: 2rem;

          @include sp{
            margin-bottom: pv(20);
            padding: pv(15) 0;
            font-size: pv(14);

            div{
              margin-top: pv(6);
              font-size: pv(20);
            }
          }

          div{
            font-size: 1.5em;
          }
        }

        &_single{
          width: 33%;

          @include sp{
            margin-bottom: pv(24);
            width: 100%;
          }

          &:nth-child(2){
            margin: 0 60px;

            @include tab{
              margin: 0 24px;
            }
            @include sp{
              margin: 0;
            }
          }

          img{
            margin-bottom: 2rem;

            @include sp{
              display: block;
              margin: 0 auto pv(16)!important;
              max-width: pv(218);
            }
          }

          p{
            text-align: justify;
            line-height: 2em;

            @include sp{
              font-size: pv(14);
              line-height: pv(30);
            }
          }

          a{
            margin-top: 1em;
          }

          h3{
            font-size: 2rem;
            line-height: 2em;

            @include tab{
              font-size: 1.8rem;
            }
            @include sp{
              letter-spacing: pv(5);
              font-size: pv(20);
              line-height: pv(30);
            }
          }
        }
      }// .c-yourstyle

      &-layout{

        &-1{
          display: flex;
          align-items: flex-start;

          @media screen and(max-width: 830px){
            flex-direction: column-reverse;
          }

          .img{
            margin-right: 40px;
            max-width: 43%;

            img{
              width: 100%;
            }
            @media screen and(max-width: 830px){
              margin-top: 40px;
              margin-right: auto;
              margin-left: auto;
              max-width: 500px;
            }
          }

          .content{
            flex: 1;
            padding: 57px 40px;
            border: 1px solid black;

            @include sp{
              padding: pv(20);
            }

            .head{
              margin-bottom: 16px;
              color: $blue;
              font-weight: bold;
              font-size: 18px;
            }

            p{
              line-height: 2.3;
            }

            @media screen and(max-width: 830px){
              padding: 30px 40px;
              width: 100%;
            }
          }

        }

      }// .c-layout

      &-trouble{
        padding: 80px 0;
        background: #ececec;

        .blue{
          margin-bottom: 40px;
          color: $blue;
          text-align: center;
          font-weight: bold;
          font-size: 35px;
        }

        .box{
          position: relative;
          display: inline-block;
          margin-right: auto;
          margin-bottom: 40px;
          margin-left: auto;
          padding: 16px 18px 12px;
          max-width: 600px;
          border: 1px solid $blue;
          text-align: center;
          font-size: 18px;

          @include sp{
            font-size: pv(16);
          }

          &:after{
            position: absolute;
            top: 6px;
            left: 6px;
            display: block;
            width: 100%;
            height: 100%;
            border: 1px solid $blue;
            content: '';
          }
        }

        .trouble{
          position: relative;
          margin-right: auto;
          margin-bottom: 12px;
          margin-left: auto;
          padding: 14px 20px 14px 56px;
          max-width: 740px;
          border-radius: 50px;
          background: white;
          font-size: 18px;
          line-height: 1.4;

          @include sp{
            padding-right: pv(30);
            padding-left: 56px;
            text-align: left;
            font-size: pv(14);

            br{
              display: none;
            }
          };

          &:before{
            position: absolute;
            top: calc(50% - 16px);
            left: 14px;
            display: block;
            width: 32px;
            height: 32px;
            background: url('~assets/images/about/trouble.svg')no-repeat center/contain;
            content: '';
          }
        }
      } // .c-trouble
    }

    .l-new-container{
      margin-right: auto;
      margin-left: auto;
      padding-right: 80px;
      padding-left: 80px;
      max-width: 1360px;

      @include tabH{
        padding-right: 24px;
        padding-left: 24px;
      }
      @include sp{
        padding-right: pv(20);
        padding-left: pv(20);
      }

      &-sm{
        margin-right: auto;
        margin-left: auto;
        padding-right: 40px;
        padding-left: 40px;
        max-width: 960px;

        @include sp{
          padding-right: pv(25);
          padding-left: pv(25);
        }
      }
    }

  }

}
</style>
