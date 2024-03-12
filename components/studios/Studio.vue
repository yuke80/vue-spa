<template>
  <nuxt-link
    :to="`/studios/${studio.slug ? studio.slug : studio.studio_id}`"
    class="media py-4 px-0 c-studio-preview"
    :class="`c-studio c-studio-${brandType}`"
  >
    <div class="media-body">
      <h5 class="my-0">
        <div v-if="studio.studio_type">
          <studio-brand
            :studio="studio"
            class="text-small studio-brand-style"
          />
          <studio-grade
            v-if="showGrade"
            :studio="studio"
            class="text-small studio-grade-style"
          />
        </div>
        <studio-name
          :studio="studio"
          class="studio-name-style"
        />
      </h5>
      <studio-temperature :studio="studio" />

      <!-- <div>
        <div v-if="showFacilities && studio.facility_type">
          <studio-facility :studio="studio" />
        </div>
      </div> -->
      <div
        v-if="showAccess"
        class="text-small text-muted studio-access-style"
        v-html="studio.access_1"
      />
    </div>
    <div class="arrow">
      →
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    studio: {
      type: Object,
      required: true,
    },

    showGrade: {
      type: Boolean,
      required: false,
      default: true,
    },

    showFacilities: {
      type: Boolean,
      required: false,
      default: true,
    },

    showAccess: {
      type: Boolean,
      required: false,
      default: true,
    },
  },

  computed: {
    brandType() {
      const brandTypes = (this.studio.brand_type || '').split(',');
      if (brandTypes.includes('basi')) {
        return 'basi';
      } if (brandTypes.includes('pilates')) {
        return 'pilates';
      } if (brandTypes.includes('yoga')) {
        return 'yoga';
      } if (brandTypes.includes('strong')) {
        return 'hot yoga';
      }
      return 'unknown';
    },
  },
};
</script>

<style lang="scss">
.c-studio-preview {
  align-items: center;
  &:hover {
    text-decoration: none;
  }
  .arrow{
    display: block;
    width: 0.7em;
    height: 0.7em;
    border-top: 2px solid #2e6eac;
    border-right: 2px solid #2e6eac;
    padding: 0 !important;
    transform: rotate(45deg);
    text-indent: -9999px;
}
}

.studio-brand-style {
  line-height: 1.5;
  font-size: 1.5rem;
}

.studio-grade-style {
  line-height: 1.5;
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
}

.studio-name-style {
  display: block;
  padding-top: 2px;
  line-height: 1.5;
  font-size: 1.8rem;
}
.studio-access-style {
  display: block;
  padding-top: 5px;
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
}
</style>
