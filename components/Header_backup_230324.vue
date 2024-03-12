<template>
  <header id="tophead">
    <div class="shadow">
      <div class="col-4 space" />
      <!-- <div :is="$route.path==='/'?'h1':'div'"> -->
      <nuxt-link
        to="/"
      >
        <logo />
      </nuxt-link>
      <!-- </div> -->
      <div class="col-4 p-2 d-flex justify-content-end">
        <nuxt-link
          to="/info/houjin"
          class="btn-orange btn-houjin ml-4"
        >
          法人の方
        </nuxt-link>
        <a
          href="/welcome/schedule.php"
          class="btn-orange ml-4"
        >
          体験レッスン
        </a>
        <nuxt-link
          to="/login"
          class="btn-blue ml-4"
        >
          会員の方
        </nuxt-link>
      </div>
      <div
        class="nav-switch"
        :class="{'open':show}"
        @click="show = !show"
      >
        <span />
        <span />
        <span />
      </div>
    </div>
    <nav
      :class="{'show':show}"
    >
      <div class="navi-box">
        <nuxt-link
          to="/pilates"
          @click.native="show=false"
        >
          ピラティス
        </nuxt-link>
        <nuxt-link
          to="/yoga"
          @click.native="show=false"
        >
          ヨガ
        </nuxt-link>
        <nuxt-link
          to="/studios"
          @click.native="show=false"
        >
          スタジオ
        </nuxt-link>
        <nuxt-link
          class="tab-on"
          to="/instructors"
          @click.native="show=false"
        >
          エデュケーター一覧
        </nuxt-link>
        <nuxt-link
          to="/online"
          @click.native="show=false"
        >
          オンライン
        </nuxt-link>
        <a
          href="https://ac.zenplace.co.jp/"
          target="_blank"
          @click.native="show=false"
        >
          アカデミー
        </a>
        <nuxt-link
          to="/about"
          @click.native="show=false"
        >
          zen placeとは
        </nuxt-link>
        <nuxt-link
          to="/price"
          @click.native="show=false"
        >
          料金
        </nuxt-link>
        <nuxt-link
          to="/faq"
          @click.native="show=false"
        >
          よくある質問
        </nuxt-link>
        <nuxt-link
          class="tab-on"
          to="/voice"
          @click.native="show=false"
        >
          ご利用者の声
        </nuxt-link>
        <nuxt-link
          class="tab-on"
          to="/info/houjin"
          @click.native="show=false"
        >
          法人の方
        </nuxt-link>
        <div class="sns">
          <a
            href="https://www.instagram.com/zenplace_official/"
            target="_blank"
          ><img
            loading="lazy"
            src="~assets/images/common/icon_ig-white.svg"
          ></a>
          <a
            href="https://www.facebook.com/zenplaceOfficial/"
            target="_blank"
          ><img
            loading="lazy"
            src="~assets/images/common/icon_fb-white.svg"
          ></a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>
<style lang="scss">
@import '~assets/scss/newvariables';

header#tophead{
  .tab-on{
    display: none;
  }

  .btn-orange,
  .btn-blue{
    max-width: 160px;
    font-size: 16px;
    height: 52px;
  }

  .shadow{
    box-shadow: 0px 3px 6px #00000029;
    margin-bottom: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    h1 {
      margin-bottom: 0;
    }
  }

  nav{
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 5;
    background: $white;
    .navi-box{
      display: flex;
      width: 100%;
      justify-content: center;
    }

    a{
      display: inline-flex;
      justify-content: center;
      align-items: center;
      height: 3em;
      width: calc(100% / 6);
      color: #2E6EAC;
      max-width: 170px;
      position: relative;
      white-space: nowrap;

      &:hover{
        color: $white;
        background: $blue;

        &:before,
        &:after,
        + a:before{
          content: none;
        }
      }

      &:before,&:last-of-type:after{
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 1px;
        height: 2.2em;
        background: $gray-70;

        @media screen and (max-width: 964px){
          display: none;
        }

      }

      &:before{
        left: 0;

      }
      &:last-of-type:after{
        right: 0;

      }
    }
  }

  .nav-switch, .sns{
    display: none!important;
  }

  .btn-houjin {
    border: #535353 1px solid;
    background-color: #fff;
    color: #3e3a39;
  }

  @media screen and (max-width: 964px){
    .tab-on{
      display: block;
    }

    position: fixed;
    width: 100vw;
    top: 0;
    left: 0;
    background: $white;
    z-index: 10000;

    .shadow{
      padding: 18px 16px;

      .btn-orange,
      .btn-blue,
      .space{display: none;}

    }

    .nav-switch{
      display: block!important;
      width: 28px;
      height: 22px;
      position: relative;
      cursor: pointer;
      z-index: 10000;

      span{
        display: block;
        height: 1px;
        width: 100%;
        position: absolute;
        left: 50%;
        background: $blue;
        transform-origin: center;
        transition: .2s;

        &:nth-child(1){top:0;transform: translate(-50%,0);}
        &:nth-child(2){top:50%;transform: translate(-50%,-50%);}
        &:nth-child(3){bottom:0;transform: translate(-50%,0);}

      }

      &.open{
        span{
          background: $white;
          &:nth-child(1){top:50%;transform: translate(-50%,-50%) rotate(45deg);}
          &:nth-child(2){opacity: 0}
          &:nth-child(3){bottom:50%;transform: translate(-50%,-50%) rotate(-45deg);}
        }
      }
    }

    nav{
      position: fixed;
      width: 100vw;
      height: 100vh;
      background: $blue;
      padding: 0 25px;
      top: 0;
      left: 0;
      z-index: 1000;
      overflow: scroll;

      transform: translateX(100%);
      transition: .3s cubic-bezier(0.79, 0.04, 0.45, 0.68);

      &.show{
        transform: translateX(0);
      }
      .navi-box{
        display: block;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        padding-top: 10px;
      > a{
        display: block;
        margin: 0 auto;
        width: 100%;
        max-width: 500px;
        text-align: center;
        padding: 10px 0;
        border: none;
        height: unset;
        font-size: 16px;
        border-bottom: 1px solid $white;
        color: $white;
      }
      .sns{
        display: flex!important;
        margin-top: 15px;
        justify-content: center;

        a{
          width: 24px;
          height: 24px;
          display: block;
          margin: 8px;
          &:before,&:after{
            content: none;
          }
          img{
            width: 100%;
          }
        }
      }
      }
    }
  }// tab
}
</style>
