<template>
  <div
    :class="{'show' :show}"
    class="c-cta-footer"
  >
    <nuxt-link
      to="/login"
      class="btn-blue"
    >
      会員の方
    </nuxt-link>
    <a
      href="/welcome/schedule.php"
      class="btn-red"
    >
      体験レッスン
    </a>
  </div>
</template>

<script>

export default {
  computed: {

    show() {
      const paths = [
        'login',
        'welcome',
        'faq',
        'studios',
        'studios-studioId',
        'studios-studioId-schedule',
        'studios-studioId-pricing',
        'online-member',
        'referral',
        'classes-reformergroup',
      ];
      return !paths.includes(this.$route.name);
    },
  },
};
</script>

<style lang="scss">
@import '~assets/scss/newvariables';

.c-cta-footer{
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  background: $blue;
  z-index: 200;
  align-items: center;
  justify-content: center;
  transform: translateY(200%);
  transition: .2s;

  @include sp{
    display: flex;
  }

  &.show{
    transform: translateY(0);
  }

  .btn-blue,
  .btn-red{
    width: 50%;
    height: pv(50);
    font-size: pv(16);
    font-weight: bold;
    letter-spacing: pv(2);
    border-radius: 0px;
  }

  .btn-blue{
    background: #2e6eac;
  }

  .btn-red{
    background: #e93742;
  }

  .cp-catch{
    position: absolute;
    top: 14px;
    color: #fbff40;
    letter-spacing: .5px;
    font-size: 13px;

    span{
      font-size: 15px;
      }
    }

}
</style>
