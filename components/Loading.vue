<template>
  <div
    class="js-preloader"
    :class="{'is-page-loading': loading || !$store.state.layoutLoaded,
             'is-page-loaded': !loading && $store.state.layoutLoaded,
             'nuxt-progress-notransition': this.skipTimerCount > 0,
             'nuxt-progress-failed': !this.canSucceed
    }"
  >
  <!-- <div
      class="c-preloader__bar"
      :style="{
        width: percent + '%',
        left: left
      }"
    />
    <div class="c-preloader__inner">
      <div class="c-preloader__logo">
        <img
          loading="lazy"
          src="~assets/images/common/logo.svg"
        >
      </div>
    </div>
    <div class="c-preloader__bg" />
    <span style="color:red; z-index: 99999999999999">
      {{ percent }} aaa {{ initialLoadDone }} and {{ loading }} {{ left }}
    </span>
  </div> -->
  </div>
</template>

<script>
/* eslint-disable no-underscore-dangle */

export default {
  data: () => ({
    percent: 0,
    skipTimerCount: 0,
    throttle: false,
    duration: 3000,
    reversed: false,
    canSucceed: true,
    continuous: true,

    loading: false,
    initialLoadDone: false,
  }),

  computed: {
    left() {
      if (!this.continuous) {
        return false;
      }
      return '0px';
    },
  },

  beforeDestroy() {
    this.clear();
  },

  created() {
    setTimeout(() => {
      this.throttle = 500;
    }, 1000);
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.loading = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }
    },

    finish() {
      if (process.browser) {
        this.loading = false;
      }
      // if (process.browser) {
      //   this.initialLoadDone = true;
      // }
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    set(num) {
      this.loading = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },
    get() {
      return this.percent;
    },
    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },
    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },
    pause() {
      clearInterval(this._timer);
      return this;
    },
    resume() {
      this.startTimer();
      return this;
    },
    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },
    fail() {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.loading) {
        this.loading = true;
      }
      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }
      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount -= 1;
          return;
        }

        this.increase(this._cut);

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 50);
    },
  },
};
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/mixins";
@import '~assets/scss/variables';

.c-preloader {
  .c-preloader__bar {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 5px;
    width: 0%;
    opacity: 1;
    transition: width 0.1s, opacity 0.4s;
    background-color: $primary;
    z-index: 999999;
  }

  .c-preloader__bar.nuxt-progress-notransition {
    transition: none;
  }

  .c-preloader__bar.nuxt-progress-failed {
    background-color: red;
  }
}
</style>
