<template>
  <div
    v-if="filteredNearbyStudios.length > 0"
    id="s_near_studio"
  >
    <h3
      class="sec-title"
    >
      <small>Studios</small>
      近くのスタジオ
      <span class="pt-3">
        ピラティススタジオ、ヨガスタジオは他店舗利用OK！仕事帰りや外出先でお好きな店舗を<br class="pc">利用いただけます。さらにピラティス、常温ヨガ、ホットヨガすべてのレッスンを受けることができます！<br class="pc">
        近くのスタジオは自転車やジョギングでの移動も可能！ライフスタイルに合わせて自由にお楽しみください。
      </span>
    </h3>

    <div class="row studio-list">
      <div
        v-for="nearbyStudio in filteredNearbyStudios"
        :key="nearbyStudio.studio_id"
        class="col-6 col-md-3 pb-4"
      >
        <nuxt-link :to="`/studios/${nearbyStudio.slug ? nearbyStudio.slug : nearyStudio.studio_id}`">
          <div class="nearby-image">
            <img
              v-if="nearbyStudio.facility_1_image != null"
              :src="nearbyStudio.facility_1_image"
              alt="スタジオ写真"
            >
            <img
              v-else
              :src="~assets/images/studio/logo.webp"
              alt="スタジオ画像"
            >
          </div>
          <p class="pt-2 mb-1">
            <studio-brand
              :studio="nearbyStudio"
              class="nearby-studio-brand-style"
            />
            <studio-grade
              :studio="nearbyStudio"
              class="nearby-studio-grade-style"
            />
          </p>
          <p class="nearby-studio-name-style mb-1">
            {{ nearbyStudio.studio_name }}スタジオ
          </p>
          <!-- ホット・常温 -->
          <!-- show only for yoga and strong -->
          <!-- <studio-temperature :studio="nearbyStudio" /> -->
          <studio-temperature
            :studio="nearbyStudio"
            class="d-block pb-2"
          />
          <!-- <span>{{ localizedTemperatures[temperature] }}</span> -->

          <!-- 駅情報 -->
          <!-- <p class="nearby-studio-access-style">
          {{ nearbyStudio.access_1 }}
        </p> -->
          <!-- マシン情報 -->
          <!-- <p class="nearby-studio-machine-style">
          キャデラック10台／リフォーマー10台／パレル10台
        </p> -->
          <p class="nearby-studio-time-style">
            平　日：{{ nearbyStudio.business_hour_weekday_from }} - {{ nearbyStudio.business_hour_weekday_to }}<br>
            土日祝：{{ nearbyStudio.business_hour_holiday_from }} - {{ nearbyStudio.business_hour_holiday_to }}
          </p>
        </nuxt-link>
      </div>
    </div>

    <div
      class="text-center pt-5"
    >
      <nuxt-link
        class="btn-white"
        to="/studios"
      >
        スタジオ一覧はこちら
      </nuxt-link>
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

  data() {
    return {
      nearbyStudios: [],
      localizedTemperatures: {
        hot: 'ホット',
        normal: ' 常温 ',
      },
    };
  },

  computed: {
    filteredNearbyStudios() {
      // We might not want to show tens of tem so just show max 5
      // return this.nearbyStudios.slice(0, 5);
      return this.nearbyStudios.filter((s) => s.studio_id !== this.studio.studio_id);
    },
    studioTemperatures() {
      return (this.studio.hot_or_normal || '').split(',');
    },
    brands() {
      return (this.studio.brand_type || '').split(',');
    },
    showStudioTemperature() {
      return this.brands.filter((b) => ['yoga', 'strong'].includes(b)).length > 0;
    },
  },

  created() {
    // TODO: only way to filter is with area...
    // would be better to have latitude and longitude and better API level search for that
    this.$zenplaceApi.getStudios({
      prefecture_id: this.studio.prefecture_id,
      area_id: this.studio.area_id,
    })
      .then((studios) => {
        this.nearbyStudios = studios;
      });
  },

  // methods: {
  //   isYogaOrStrong(studio) {
  //     return (studio.brand_type || '').split(',').includes('yoga')
  //   || (studio.brand_type || '').split(',').includes('strong');
  //   },
  // },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/newvariables";

// h2 {
//   color: #E93742;
//   text-align: center;
//   font-weight: bold;
//   font-size: 28px;

//   @include sp{
//     font-size: pv(18);
//   }
// }
.btn-white {
  padding-right: 0.9em;
  padding-left: 0.9em;
  border: 1px solid #2e6eac;
  background: white;
  color: #2e6eac;
}

.sec-title {
  margin-bottom: 6rem;
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.8;

  @include tab{
    margin-bottom: 2rem;
  }
  span {
    display: block;
    color: #535353;
    font-size: 1.7rem;
    font-weight: normal;

    @include tab{
      font-size: 1.7rem;
    }
  }
  strong {
    color: #E93742;
    letter-spacing: .05rem;
    font-size: 3.6rem;

    @include tab{
      font-size: 3rem;
    }
  }
  small {
    display: block;
    color: #E93742;
    letter-spacing: .05rem;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1;

    @include tab{
      font-size: 1.7rem;
    }
  }
}
.sub-title {
  margin-bottom: 2rem;
  color: #535353;
  font-weight: bold;
  font-size: 2.2rem;
  // font-family: $gothic !important;
  line-height: 1.5;
}

.studio-list {
  a {
    color: #535353;
  }
}
.nearby-image {
  img {
    width: 100%;
  }
}
.nearby-studio-name-style {
  font-size: 1.7rem;
  font-weight: 600;
}
.nearby-studio-brand-style {
  font-size: 1.4rem
}
.nearby-studio-grade-style {
  font-size: 1.3rem;
  margin-left: 5px;
}
.nearby-studio-access-style {
  font-size: 1.6rem;
}
.nearby-studio-machine-style {
  font-size: 1.6rem;
}
.nearby-studio-time-style {
  font-size: 1.6rem;
}
.c-studio-temperature {
  .badge.badge-temperature-hot {
    width: 7em;
}
}
</style>
