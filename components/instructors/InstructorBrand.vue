<template>
  <span
    class="badge badge-instructor"
    :class="`badge-instructorbrand-${brand}`"
  >
    {{ brand }}
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
    brand() {
      let brandName;
      if (this.instructor.brand_id === 1) {
        // BASI
        brandName = 'ピラティス';
      }
      if (this.instructor.brand_id === 2) {
        brandName = 'ピラティス';
      }
      if (this.instructor.brand_id === 4) {
        brandName = 'ヨガ';
      }
      if (this.instructor.brand_id === 5) {
        brandName = 'ホットヨガ';
      }
      return brandName;
    },
  },
};
</script>

<style>

</style>
