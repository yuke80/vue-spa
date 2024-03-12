<template>
  <!-- show only for yoga and strong -->
  <span v-if="showStudioTemperature">
    <span
      v-for="(temperature, index) in studioTemperatures"
      :key="index"
      class="c-studio-temperature"
    >
      <span
        class="badge badge-studio"
        :class="{
          'badge-temperature-hot': temperature === 'hot',
          'badge-temperature-normal': temperature === 'normal'
        }"
      >{{ localizedTemperatures[temperature] }}</span>
    </span>
  </span>
</template>

<script>
export default {
  props: {
    studio: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      localizedTemperatures: {
        hot: 'ホット',
        normal: ' 常温 ',
      },
    };
  },

  computed: {
    studioTemperatures() {
      return (this.studio.hot_or_normal || '').split(',');
    },

    brands() {
      return (this.studio.brand_type || '').split(',');
    },

    showStudioTemperature() {
      return this.brands.filter((b) => ['yoga', 'strong'].includes(b)).length > 0;
    },
  },
};
</script>

<style lang="scss">
.c-studio-temperature {
  .badge.badge-temperature-hot {
    width: 7em;
}
}

</style>
