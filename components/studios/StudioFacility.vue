<template>
  <span class="c-studio-facility">
    <span
      v-if="useBadge"
    >
      <span
        v-for="facilityType in facilityTypes"
        :key="facilityType"
        class="badge badge-studio"
        :class="`badge-facilitytype-${facilityType}`"
      >{{ facilityName(facilityType) }}</span>
    </span>
    <span v-else>
      <span
        v-for="facilityType in facilityTypes"
        :key="facilityType"
      >
        <span class="maru text-primary">■</span>
        {{ facilityName(facilityType) }}
      </span>
    </span>
  </span>
</template>

<script>
import _ from 'lodash';
import consola from 'consola';

export default {
  props: {
    studio: {
      type: Object,
      required: true,
    },

    useBadge: {
      type: Boolean,
      required: false,
      default: true,
    },
  },

  computed: {
    facilityTypes() {
      if (!this.studio.facility_type) {
        return [];
      }
      return this.studio.facility_type.split(',');
    },
  },

  methods: {
    facilityName(id) {
      const type = _.find(this.$store.state.facilityTypes, (ft) => ft.facility_id === id);
      if (!type) {
        consola.warn(`WARNING: unknown facility type on studio id ${this.studio.studio_id}: ${id}!`);
        return '';
      }
      return type.facility_name;
    },
  },
};
</script>

<style lang="scss">

</style>
