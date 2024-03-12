<template>
  <span class="c-studio-brand">
    <span v-if="type === 'long'">
      ゼン プレイス
    </span>
    <span v-if="type === 'brackets'">
      [{{ localization[brandType] }}]
    </span>
    <span v-else>
      {{ localization[brandType] }}
    </span>
  </span>
</template>

<script>
export default {
  props: {
    studio: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: 'short',
    },
  },

  data() {
    return {
      localizedStudioBrands: {
        pilates: '[ピラティス]',
        basi: '[ピラティス]',
        yoga: '[ヨガ]',
        strong: '[ヨガ]',
        other: '[ピラティス＆ヨガ]',
      },
      localizedStudioBrandsLong: {
        pilates: 'ピラティス',
        basi: 'ピラティス',
        yoga: 'ヨガ',
        strong: 'ヨガ',
        other: '[ピラティス＆ヨガ]',
      },
    };
  },

  computed: {
    localization() {
      if (this.type === 'long') return this.localizedStudioBrandsLong;
      return this.localizedStudioBrands;
    },

    studioBrands() {
      // This uses brand_type, which is newly added one.
      // Old brand_id allows only one, and studio_types has hiit,other which are wrong
      return (this.studio.brand_type || '').split(',');
    },

    filteredStudioBrands() {
      // We don't want to show nulls or empties, or basi
      return this.studioBrands.filter((b) => b && b !== 'basi');
    },

    brandType() {
      const brandTypes = (this.studio.brand_type || '').split(',');
      if ((brandTypes.includes('pilates') || brandTypes.includes('basi')) && (brandTypes.includes('yoga') || brandTypes.includes('strong'))) {
        return 'other';
      } if (brandTypes.includes('basi')) {
        return 'basi';
      } if (brandTypes.includes('pilates')) {
        return 'pilates';
      } if (brandTypes.includes('yoga')) {
        return 'yoga';
      } if (brandTypes.includes('strong')) {
        return 'strong';
      }
      return 'unknown';
    },
  },

};
</script>

<style lang="scss">
</style>
