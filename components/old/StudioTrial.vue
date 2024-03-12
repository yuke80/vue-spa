<template>
  <a
    :href="$store.getters.taikenUrl(studio.brand_id, studio.studio_id, function (refnum){return getRefnumFromCookie()}, function (abtest){return getABtestValue()})"
    class="media py-4 px-3 c-studio-preview"
    :class="`c-studio c-studio-${brandType}`"
  >
    <div
      class="media-body"
    >
      <h3 class="my-0">
        {{ studio.studio_simple_name }}
      </h3>
      <div
        v-if="showAccess"
        class="pt-2 text-small text-muted"
        v-html="studio.access_1"
      />
    </div>
    <div class="pt-4">
      <fa-icon
        icon="angle-right"
        size="2x"
        color="#535353"
      />
    </div>
  </a>
</template>

<script>
export default {
  props: {
    studio: {
      type: Object,
      required: true,
    },

    showGrade: {
      type: Boolean,
      required: false,
      default: true,
    },

    showFacilities: {
      type: Boolean,
      required: false,
      default: true,
    },

    showAccess: {
      type: Boolean,
      required: false,
      default: true,
    },
  },

  computed: {
    brandType() {
      const brandTypes = (this.studio.brand_type || '').split(',');
      if (brandTypes.includes('basi')) {
        return 'basi';
      } if (brandTypes.includes('pilates')) {
        return 'pilates';
      } if (brandTypes.includes('yoga')) {
        return 'yoga';
      } if (brandTypes.includes('strong')) {
        return 'hot yoga';
      }
      return 'unknown';
    },
  },
  methods: {
    isYogaOrStrong(studio) {
      return (studio.brand_type || '').split(',').includes('yoga')
    || (studio.brand_type || '').split(',').includes('strong');
    },
    isAllPilates(studio) {
      return (studio.brand_type || '').split(',').includes('pilates')
    || (studio.brand_type || '').split(',').includes('basipilates');
    },
    isYogaOnly(studio) {
      return (studio.brand_type || '').split(',').includes('yoga');
    },
    isStrongOnly(studio) {
      return (studio.brand_type || '').split(',').includes('strong');
    },
    // 紹介番号取得
    getRefnumFromCookie() {
      if (process.browser) {
        const arr = [];
        if (document.cookie !== '') {
          const tmp = document.cookie.split(';');
          for (let i = 0; i < tmp.length; i += 1) {
            const data = tmp[i].trim().split('=');
            arr[data[0]] = decodeURIComponent(data[1]);
          }
        }
        if (arr.refnum) {
          return `refnum=${arr.refnum}&`;
        }
      }
      return '';
    },
    // ABtest
    getABtestValue() {
      const this_time = new Date();
      if (this_time.getTime() % 2 === 0) {
        return 'description=b&';
      }
      return '';
    },
  },
};
</script>

<style lang="scss">
.c-studio-preview {
  &:hover {
    text-decoration: none;
  }
}

// .c-studio.c-studio-basi {
//   border-left: 5px solid #c3674d;
// }
// .c-studio.c-studio-pilates {
//   border-left: 5px solid #327c93;
// }
// .c-studio.c-studio-yoga {
//   border-left: 5px solid #668856;
// }
// .c-studio.c-studio-strong {
//   border-left: 5px solid #be9b2eed;
// }
</style>

<style lang="scss" scoped>
h3{
  font-size: 1.875rem;
}
</style>
