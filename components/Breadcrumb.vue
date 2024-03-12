<template>
  <div id="Breadcrumb">
    <div class="l-new-container">
      <ul>
        <li
          v-for="(b, i) in breadcrumbs.data"
          :key="i"
          :class="{'flex-1':(i+1)==breadcrumbs.data.length}"
        >
          <nuxt-link
            v-if="b.path"
            :to="b.path"
          >
            {{ b.name }}
          </nuxt-link>
          <span v-else>{{ b.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    breadcrumbs: Object,
  },
};
</script>

<style lang="scss">
@import '~assets/scss/newvariables';

#Breadcrumb{
  padding: 10px 0;

  @include sp{
    padding: pv(15) 0;
    font-size: pv(10);
  }

  ul{
    display: flex;
    padding: 0;
    margin-bottom: 0;

    li{
      a, span{
        display: flex;
        color: #707070;
        font-size: 1.5rem;
      }

      a:after, span:after{
        content:'>';
        display: block;
        color: #707070;
        margin: 0 .4em;
      }

      &:last-child{
        span:after{
          content:'';
        }
      }

    }

  }
}

.p-pilates-about{

  #Breadcrumb{
    padding-top: 30px;
    background: $blue;
    color:#fff;

    @include sp{
      padding-top: pv(16);
    }
    ul li{

      a, a:after, span{
        color: #fff!important;
      }
    }
  }
}

</style>
