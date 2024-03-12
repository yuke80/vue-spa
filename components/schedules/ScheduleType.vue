<template>
  <span
    class="badge badge-classtype"
    :class="getClassTypeBadgeClass(schedule)"
  >{{ getClassTypeBadgeText(schedule) }}</span>
</template>

<script>
export default {
  props: {
    schedule: {
      type: Object,
      required: true,
    },
  },

  methods: {
    getClassTypeBadgeClass(schedule) {
      let classType = '';
      if (schedule.ticket_pattern_name === 'MG') {
        classType = 'mg';
      } else if (schedule.class_type === 101) {
        classType = 'pv';
      } else if (schedule.class_type === 102) {
        classType = 'gl';
      }
      return `badge-classtype-${classType}`;
    },

    getClassTypeBadgeText(schedule) {
      if (schedule.ticket_pattern_name === 'MG') {
        return 'マシングループ';
      }
      if (schedule.class_type === 101) {
        return 'プライベート';
      }
      if (schedule.class_type === 102) {
        return 'グループ';
      }
      return '';
    },
  },

};
</script>

<style>

</style>
