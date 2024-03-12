<template>
  <div @click="toggle">
    <div class="row p-2">
      <div class="col-4 pr-0">
        <b-img
          :src="lesson.lesson_image"
          class="img-fluid"
        />
      </div>
      <div class="col-8">
        <h4 class="lesson-title">
          {{ lesson.lesson_name }}
        </h4>
        <lesson-temperature
          :lesson="lesson"
          class="mb-3"
        />
        <p v-html="replaceBr(lesson.memo)" />
      </div>
      <!-- <div class="col text-right">
        <div
          class="badge"
          :class="collapsed ? 'badge-dark' : 'badge-info'"
        >
          <span v-if="collapsed">
            閉じる
          </span>
          <span v-else>
            もっとみる
          </span>
          <fa-icon :icon="collapsed ? 'angle-up' : 'angle-down'" />
        </div>
      </div> -->
    </div>

    <!-- <b-collapse
      v-model="collapsed"
      class="mt-2"
    >
      <div class="row">
        <div class="col">
          <div>{{ lesson.detail1 }}</div>
          <div>{{ lesson.detail2 }}</div>
        </div>
      </div>

      <div class="text-center bg-grey">
        <fa-icon icon="angle-up" />
      </div>
    </b-collapse> -->
  </div>
</template>

<script>
export default {
  props: {
    lesson: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      collapsed: false,
    };
  },

  methods: {
    toggle() {
      this.collapsed = !this.collapsed;
    },

    replaceBr(text) {
      if (text) {
        return text.replace(/\r\n/g, '<br>').replace(/\n/g, '<br>');
      }
      return '';
    },
  },
};
</script>

<style>
/* .badge { padding: 3px 10px;} */
.badge-info { background-color: #0066a4;}
.tabs { border-top: 1px solid #afaeae;}
.nav-tabs { border-bottom: none;}
.nav-tabs .nav-item { width: 33.3333333333%; text-align: center;}
.nav-tabs .nav-link { background-color: #f2f2f2; border: none; border-bottom: 1px solid #c7c7c7; border-right: 1px solid #c7c7c7; padding: 1rem .5rem;}
.nav-tabs .nav-link.active { color: #006fb1; border-bottom: none;}
.c-lesson-item .lesson-title{font-size:1.8rem;}
@media  only screen and (min-width: 768px){
  /* .badge{ font-size: 100%;} */
}
@media  only screen and (max-width: 560px){
  .nav-tabs .nav-item { font-size: smaller;}
}
</style>
