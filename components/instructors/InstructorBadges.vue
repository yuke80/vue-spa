<template>
  <span>
    <span
      v-for="prop in certificationProps"
      :key="prop"
    >
      <span
        v-if="instructor[prop]"
        class="badge badge-instructor badge-success"
      >
        {{ localizations[prop] }}
      </span>
    </span>
  </span>
</template>

<script>
import _ from 'lodash';

export default {
  props: {
    instructor: {
      type: Object,
      required: true,
    },
  },

  data() {
    const localizations = {
      basi_faculty: 'basiファカルティ',
      yw_certification: 'YW認定講師',
      ir_other: 'アイアンガー講師',
      english_ok: 'English OK',
    };

    return {
      localizations,
      certificationProps: _.map(localizations, (v, k) => k),

    };
  },

};
</script>

<style>

</style>
