<template>
  <div>
    <b-form-select
      v-model="currentValue"
      class="text-center bg-grey c-studio-select o-center-select"
      @change="valueChanged"
    >
      <option :value="null">
        全てのブランド
      </option>
      <option
        v-for="brand in $store.state.brandsNew"
        :key="brand.brand_type"
        :value="brand.brand_type"
      >
        {{ brand.brand_name_full }}
      </option>
    </b-form-select>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, null],
      default: null,
    },
  },

  data() {
    return {
      selectedBrand: null,
      currentValue: this.value,
    };
  },

  watch: {
    value(val) {
      this.currentValue = val;
    },
  },

  methods: {
    valueChanged(val) {
      this.$emit('input', val);
    },
  },

};
</script>

<style>

</style>
