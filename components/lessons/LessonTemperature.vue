<template>
  <div
    v-if="lesson.temperature"
    class="badge badge-lesson-temperature"
    :class="`badge-lesson-temperature-${lesson.temperature}`"
  >
    {{ temperatureText }}
  </div>
</template>

<script>
export default {
  props: {
    lesson: {
      type: Object,
      required: true,
    },
  },

  computed: {
    temperatureText() {
      // 温度[101:22度、102:40度、103:28度]
      const temperatures = {
        101: '22°C',
        102: '40°C',
        103: '28°C',
      };
      return temperatures[this.lesson.temperature];
    },
  },

};
</script>

<style>

</style>
