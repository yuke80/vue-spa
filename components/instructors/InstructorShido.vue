<template>
  <span
    class="badge badge-instructor"
    :class="`badge-instructorshido-${instructor.shido_type || 103}`"
  >
    {{ shido }}
  </span>
</template>

<script>
export default {
  props: {
    instructor: {
      type: Object,
      required: true,
    },
  },

  computed: {
    shido() {
      let shidoName;
      if (this.instructor.shido_type === 102) {
        shidoName = 'ピラティス';
      } else if (this.instructor.shido_type === 101) {
        shidoName = 'ヨガ';
      } else {
        // this is 103 essentially...
        shidoName = 'その他';
      }
      return shidoName;
    },
  },
};
</script>

<style>

</style>
