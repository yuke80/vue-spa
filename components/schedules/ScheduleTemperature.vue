<template>
  <span v-if="schedule.hot_or_normal">
    <span :style="`color: ${hotOrNormalColorMap[schedule.hot_or_normal]};`">●</span>
    {{ scheduleTemperature }}
  </span>
</template>

<script>
export default {
  props: {
    schedule: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      hotOrNormalMap: {
        // Green
        101: '22℃', // Normal 22度
        // Red
        102: '40℃', // Hot 40度
        // Pink
        103: '28℃', // "Low hot" 28度
      },

      hotOrNormalColorMap: {
        101: 'green',
        102: 'red',
        103: 'pink',
      },
    };
  },

  computed: {
    scheduleTemperature() {
      return this.hotOrNormalMap[this.schedule.hot_or_normal];
    },
  },

};
</script>

<style>

</style>
