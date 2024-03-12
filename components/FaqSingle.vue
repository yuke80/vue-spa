<template>
  <div class="c-faq-single">
    <div
      class="q"
      @click="open=!open"
    >
      <div v-html="qa.q" />
      <span
        class="plus"
        :class="{'open': open}"
      />
    </div>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div
        v-if="open"
        class="a"
      >
        <div v-html="qa.a" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    qa: { type: Object },
    defaultOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      open: true,
    };
  },
  mounted() {
    this.open = this.defaultOpen;
  },
  methods: {
    beforeEnter(el) {
      el.style.height = '0';
    },
    enter(el) {
      el.style.height = `${el.scrollHeight}px`;
    },
    beforeLeave(el) {
      el.style.height = `${el.scrollHeight}px`;
    },
    leave(el) {
      el.style.height = '0';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~assets/scss/newvariables';

.c-faq-single{
  border-bottom: 1px solid #707070;
  overflow: hidden;

  .q, .a{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    .plus{
      display: block;
      width: 2.6rem;
      height: 2.6rem;
      margin: 2px 6px 0 0;
      position: relative;

      @include sp{
        height: pv(17);
        width: pv(17);
        margin-left: pv(24);
        align-self: center;
      }

      &:before,
      &:after{
        content: '';
        display: block;
        position: absolute;
        transition: .2s;
        top: 50%;
        left: 50%;
        height: 100%;
        width: 1px;
        transform: translate(-50%, -50%) rotate(-90deg);
        background: #707070;
      }

      &:after{
        transform: translate(-50%, -50%) rotate(180deg);
      }

      &.open{
        &:before,
        &:after{
          transform: translate(-50%, -50%) rotate(90deg);
        }
      }
    }
  }

  .q{
    cursor: pointer;
    font-size: 2.4rem;
    padding: 1.2em 0;
    line-height: 1.5;

    @include sp{
      font-size: pv(16);
      padding: pv(18) 0;
    }
  }

  .a{
    transition: .2s;
    font-size: 1.8rem;
    line-height: 2;

    @include sp{
      font-size: pv(14);
    }

    div{
      padding-bottom: 2rem;
    }

    &.open{
      transform: scaleY(0);
    }
  }

  @media screen and(max-width: 480px){
    .q, .a{

      img{
        height: 16px;
        width: 16px;
      }
    }
  }
}

.v-enter, .v-leave-to{
  opacity: 0;
}
</style>
