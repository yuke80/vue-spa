<template>
  <span
    class="c-studio-grade"
    :class="`c-studio-grade-${grade}`"
  >
    <span v-if="showPrefix">GRADE </span>{{ grade }}
  </span>
</template>

<script>
export default {
  props: {
    studio: {
      type: Object,
      required: true,
    },

    showPrefix: {
      type: Boolean,
      required: false,
      default: true,
    },
  },

  computed: {
    grade() {
      return this.studio.grade_name
        ? this.studio.grade_name
          .replace('０１', '01')
          .replace('０２', '02')
          .replace('０３', '03')
          .replace('０４', '04')
        : '';
    },
  },

};
</script>

<style>

</style>
