<template>
  <span>
    {{ studioName }}
  </span>
</template>

<script>
export default {
  props: {
    studio: {
      type: Object,
      required: true,
    },

    // Allow customizing this if we want only the prefix
    showStudioName: {
      type: Boolean,
      required: false,
      default: true,
    },

    showZenplacePrefix: {
      type: Boolean,
      required: false,
      default: true,
    },
  },

  computed: {
    studioName() {
      return this.$options.filters.studioName(this.studio, this.showZenplacePrefix, this.showStudioName);
    },
  },
};
</script>

<style>

</style>
