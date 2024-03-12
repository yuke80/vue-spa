import _ from 'lodash';
<template>
  <div>
    <span
      v-if="isFull"
      class="text-danger"
    >
      満席
    </span>

    <span
      v-else-if="capacity > 1 && emptyCount < 5"
      class="text-warning"
    >
      残り{{ emptyCount }}席
      <!-- / {{ capacity }} -->
    </span>
  </div>
</template>

<script>
export default {
  props: {
    schedule: {
      type: Object,
      required: true,
    },
  },

  computed: {
    isFull() {
      return this.emptyCount === 0;
    },

    emptyCount() {
      // TODO: fix API to not return strings
      return parseInt(this.schedule.empty_count, 10);
    },

    capacity() {
      // TODO: fix API to not return strings
      return parseInt(this.schedule.capacity, 10);
    },
  },

};
</script>

<style>

</style>
