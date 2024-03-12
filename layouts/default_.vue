<template>
  <div
    :class="{
      'is-top-page': $route.path === '/',
      'is-scrolled': isScrolled,
      'is-page-loaded': $store.state.layoutLoaded
    }"
  >
    <div v-if="['videos', 'videos-kids','videos-academy','videos-livestream','videos-liveschedule', 'videos-shortvideos'].includes($route.name)">
      <navbar-online />
    </div>
    <div v-else>
      <Header />
    </div>

    <div
      :class="{
        'main-content mb-5': $route.path !== '/'
      }"
    >
      <transition
        name="fade"
        mode="out-in"
      >
        <nuxt />
      </transition>
    </div>

    <div>
      <zenplace-footer />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header,
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
      if (window.scrollY > 140) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },
  },
};
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/mixins";
@import '~assets/scss/variables';

.main-content {
  margin-top: 140px;
  transition: 0.3s;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

@media (min-width: map-get($grid-breakpoints, 'sm')) {
  .main-content {
    margin-top: 102px;
    transition: 0.3s;
  }
}

@media screen and (max-width: 480px) {
  .main-content {
    margin-top: 40px;
  }
}

</style>
