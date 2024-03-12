<template>
  <div>
    <iframe
      :src="studio.map_url_1"
      width="100%"
      height="300px"
      class="border-0"
    />

    <div class="text-right">
      <a
        style="text-decoration:underline;"
        :href="studio.map_url_2 || studio.map_url_1"
        target="_blank"
      >
        Google Mapsで見る
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    studio: {
      type: Object,
      required: true,
    },
  },

};
</script>

<style>

.studio-access a.btn.btn-dark.text-white.btn-lg{display:none;}

.studio-map iframe{
  max-height: 600px;
  width: 100%;
  height: 100%;
  border: none;

  aspect-ratio: 16/9;
}
</style>
