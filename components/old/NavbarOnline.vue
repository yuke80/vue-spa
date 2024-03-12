<template>
  <div
    class="l-header"
    :class="{'is-gnav-open': isCollapsed }"
  >
    <div>
      <div class="l-header-logo">
        <nuxt-link to="/videos">
          <img
            loading="lazy"
            src="~assets/images/videos/logoonline.jpg"
            alt="zen place online"
            class="logo-online"
          >
        </nuxt-link>
      </div>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="mx-5 mb-2 mb-lg-0">
        <div>
          <!--<div class="l-header__button">
            <b-button
              squared
              variant="outline-dark"
              class="live-btn align-text-top"
              to="/videos/liveschedule"
            >
              LIVEスケジュール
            </b-button>
          </div>-->

          <div
            class="border-0 l-gnav-toggle"
            @click="collapse()"
          >
            <div class="l-gnav-toggle__inner">
              <div class="l-gnav-toggle__bar l-gnav-toggle__bar--1">
                <div class="l-gnav-toggle__bar-inner">
                  <div
                    class="l-gnav-toggle__bar-front"
                    style="transform: matrix(1, 0, 0, 1, 0, 0);"
                  /><div class="l-gnav-toggle__bar-back" />
                </div>
              </div>
              <div class="l-gnav-toggle__bar l-gnav-toggle__bar--2">
                <div class="l-gnav-toggle__bar-inner">
                  <div
                    class="l-gnav-toggle__bar-front"
                    style="transform: matrix(1, 0, 0, 1, 0, 0);"
                  /><div class="l-gnav-toggle__bar-back" />
                </div>
              </div>
              <div class="l-gnav-toggle__bar l-gnav-toggle__bar--3">
                <div class="l-gnav-toggle__bar-inner">
                  <div
                    class="l-gnav-toggle__bar-front"
                    style="transform: matrix(1, 0, 0, 1, 0, 0);"
                  /><div class="l-gnav-toggle__bar-back" />
                </div>
              </div>
            </div>
            <div class="l-gnav-toggle__heading">
              Menu
            </div>
          </div>
        </div>
      </b-navbar-nav>
    </div>

    <div
      ref="navCollapse"
      class="l-gnav bg-white"
      :class="{ show: isCollapsed }"
    >
      <ul class="l-gnav__inner text-right text-large">
        <li class="l-gnav__menu-item">
          <nuxt-link
            to="/"
            @click.native="isCollapsed = false"
          >
            zen place TOP
          </nuxt-link>
        </li>
        <li class="l-gnav__menu-item">
          <a
            href="https://vimeo.com/showcase/7269861"
            @click.native="isCollapsed = false"
          >
            ピラティスレッスン動画 <fa-icon
              icon="lock"
              size="xs"
              class="align-baseline"
            />
          </a>
        </li>
        <li class="l-gnav__menu-item">
          <a
            href="https://vimeo.com/showcase/7273129"
            @click.native="isCollapsed = false"
          >
            ヨガレッスン動画 <fa-icon
              icon="lock"
              size="xs"
              class="align-baseline"
            />
          </a>
        </li>
        <li class="l-gnav__menu-item">
          <nuxt-link
            to="/login"
            @click.native="isCollapsed = false"
          >
            マイページ
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapsed: false,
    };
  },

  methods: {
    collapse() {
      this.isCollapsed = !this.isCollapsed;
    },
  },

};
</script>

<style lang="scss" scoped>
@import "node_modules/bootstrap/scss/mixins";
@import '~assets/scss/variables';

.logo-online{max-width:300px;vertical-align: baseline;}

.navbar-zenplace-main {
  background-color: white;

  .btn-mainmenu-taiken {
    position: fixed;
    right: 80px;
    top: 1.25em;
    // padding: 0.5em 1.5em;
  }
}

.sub-nav li {font-size:1.5rem; line-height: 2.5rem;}

@media (min-width: map-get($grid-breakpoints, 'sm')) {

  .navbar-zenplace-main {
    .btn-mainmenu-taiken {
      position: fixed;
      right: 220px;
      top: 0.5em;
      // padding: 0.5em 2.5em;
    }
  }
}

.c-zenplace-mainmenu-toggle {
  z-index: 40000;
  right: 30px;

  .l-gnav-toggle__heading {
    margin-left: 0;
  }
}

.c-zenplace-mainmenu {
  position: fixed;
  z-index: 20000;
  top: 0;
  right: 0;
  width: 90vw;
  height: 100%;
  // transition: -webkit-transform .4s cubic-bezier(.645,.045,.355,1);
  transition: transform .4s cubic-bezier(.645,.045,.355,1);
  // transition: transform .4s cubic-bezier(.645,.045,.355,1),-webkit-transform .4s cubic-bezier(.645,.045,.355,1);
  transform: translateX(105%);
  box-shadow: -0px 0px 6px 6px rgba(0,0,0,0.2);
}

.c-zenplace-mainmenu.show {
    transform: translateX(0);
}

@media (min-width: map-get($grid-breakpoints, 'sm')) {
  .c-zenplace-mainmenu {
    width: 600px;
  }

  .c-zenplace-mainmenu-toggle {
    right: 80px;

    .l-gnav-toggle__heading {
      // margin-left: 1em;
    }
  }
}

.l-header {
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100%;
  -webkit-transition: opacity 1s;
  -o-transition: opacity 1s;
  transition: opacity 1s, 0.3s;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  opacity: 0;
  background: white;
  height: 75px;
}
.is-top-page .l-header {
  background: none;
  height: 0;
}

.is-scrolled .l-header {
  height: 72px;
}

.is-page-loaded .l-header {
  opacity: 1;
}
.l-header.is-fixed {
  position: fixed;
}
.is-lower .l-header {
  opacity: 1;
}
.l-header-logo {
  position: absolute;
  z-index: 1;
  top: 40px;
  left: 80px;
  width: 200px;
  height: 25.89px;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.is-scrolled .l-header-logo {
  top: 25px;
}

.navbar-zenplace-main {
  background: none !important;
  margin-top: 2em;
  width: 90vw;
  top: 20px;
  margin-left: auto;
  margin-right: auto;
}
@media (min-width: map-get($grid-breakpoints, 'sm')) {
  .l-header {
    height: 132px;
  }
}

li.login-btn a{color:#0066a3;}

@media (max-width: 1023px) {
  .l-header-logo {
    top: 30px;
    left: 30px;
    width: 160px;
    height: 20.72px;
  }
  .is-scrolled .l-header-logo {
    top: 20px;
  }
}
.l-header-logo__svg-group--1 {
  fill: #0066a4;
}
.l-header-logo__svg-group--2 {
  fill: #464749;
}
.l-header__button {
  position: absolute;
  top: 40px;
  right: 208px;
  width: 100%;
  max-width: 140px;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.l-gnav-toggle{
  top:35px;
}
.is-scrolled .l-gnav-toggle {
    top: 20px;
}
.live-btn{
  width:140px;
  font-size:1.3rem;
  }

.is-scrolled .l-header__button {
  top: 24px;
}
@media (max-width: 1023px) {
  .l-gnav-toggle {
    top: 22px;
}
  .l-header__button {
    top: 23px;
    right: 160px;
  }
  .is-scrolled .l-header__button {
    top: 18px;
  }
}
@media (max-width: 767px) {

    .logo-online{max-width:170px;}
    .l-header-logo {
    top: 23px;
    left: 20px;
    width: 140px;
    height: 18.13px;
  }
  .l-gnav-toggle {
    top: 10px;
}
  .is-scrolled .l-header-logo {
    top: 15px;
  }
  .is-scrolled .l-gnav-toggle {
    top: 5px;
}
  .l-header__button {
    top: 17px;
    right: 60px;
    width: 100%;
    max-width: 100px;
  }

  .live-btn{
    line-height: 14px;
    max-width: 100px;
    font-size: 1rem;
  }

  .is-scrolled .l-header__button {
    top: 10px;
  }
  .is-scrolled .l-header {
    height: 51px;
  }
}

</style>
