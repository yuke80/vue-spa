<template>
  <div class="container">
    <div class="p-top-plan__modal-heading">
      スタジオグレード一覧
    </div>

    <div
      v-for="(studiosOfGrade, index) of studiosByGrade"
      :key="index"
      class="p-top-plan__modal-item p-top-plan__modal-item--1"
    >
      <div class="p-top-plan__modal-number">
        Grade
        <span>{{ index }}</span>
      </div>
      <div
        v-for="brand in ['pilates', 'yoga', 'strong']"
        :key="brand"
        class=""
      >
        <div
          v-if="studiosOfGrade[brand] && studiosOfGrade[brand].length > 0"
        >
          <div
            class="p-top-plan__modal-title"
            :class="`p-top-plan__modal-title--${brand}`"
          >
            zen place {{ brandLocalizations[brand] }}
          </div>
          <ul class="p-top-plan__modal-list">
            <li
              v-for="s in studiosOfGrade[brand]"
              :key="s.studio_id"
              class="p-top-plan__modal-list-item"
            >
              <nuxt-link :to="`/studios/${s.slug || s.id}`">
                {{ s.studio_name }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'スタジオグレード一覧',
      meta: [
        { hid: 'description', name: 'description', content: 'zenplaceのスタジオ検索ページです。グループ店は全国100店舗以上。ピラティス専門、ヨガ専門、ホットヨガ、高強度トレーニングスタジオなど、グループ店の相互利用が可能ですので、ご自宅の近くや職場の近くなど、気分やご都合に合わせてお楽しみください。' },
        { hid: 'keywords', name: 'keywords', content: 'スタジオ, スタジオ一覧, ゼンプレイス' },
      ],

    };
  },

  async asyncData({ app }) {
    // TODO: move to store and use that at first
    const studios = await app.$zenplaceApi.getStudios();
    return {
      studios,
    };
  },

  data() {
    return {
      studiosByGrade: {},
      brandLocalizations: {
        pilates: 'ピラティス',
        yoga: 'ヨガ',
        strong: 'ホットヨガ',
      },
    };
  },

  created() {
    this.organizeStudios();
  },

  methods: {
    organizeStudios() {
      // TODO: no grade 4 yet...
      for (let i = 1; i <= 2; i += 1) {
        this.studiosByGrade[i] = {
          pilates: this.studiosFor(i, 'pilates'),
          yoga: this.studiosFor(i, 'yoga'),
          strong: this.studiosFor(i, 'strong'),
        };
      }
    },

    studiosFor(grade, type) {
      const studios = this.studiosWithGrade(grade);

      return studios.filter((s) => (s.brand_type || '').split(',').includes(type));
    },

    studiosWithGrade(grade) {
      if (grade === 1) {
        return this.studios.filter((s) => s.grade_name === '０１');
      }
      if (grade === 2) {
        return this.studios.filter((s) => s.grade_name === '０２');
      }
      // if (grade === 3) {
      //   return this.studios.filter((s) => s.grade_name === '０３');
      // }
      // if (grade === 4) {
      //   return this.studios.filter((s) => s.grade_name === '０４');
      // }
      console.warn('Unknown grade', grade);
      return this.studios;
    },
  },
};
</script>

<style scoped>
.p-top-plan__modal-heading {
  margin-bottom:50px;
  font-weight:bold;
  font-size:24px;
  font-size:2.4rem;
  line-height:1;
}
@media (max-width:1023px) {
  .p-top-plan__modal-heading {
    margin-bottom:30px;
    padding-bottom:35px;
    border-bottom:1px solid #f2f2f2;
    text-align:center;
  }
}
@media (max-width:767px) {
  .p-top-plan__modal-heading {
    margin-bottom:25px;
    padding-bottom:20px;
    border-bottom:1px solid #f2f2f2;
    font-size:20px;
    font-size:2rem;
  }
}
.p-top-plan__modal-item {
margin-bottom:30px;
padding-bottom:10px;
border-bottom:1px solid #f2f2f2;
}
.p-top-plan__modal-item:last-child {
margin-bottom:0;padding-bottom:0;border:none;
}
@media (max-width:1023px) {
  .p-top-plan__modal-item {
    padding-bottom:0;
  }
}

@media (max-width:767px) {
  .p-top-plan__modal-item {
    margin-bottom:25px;
    padding-bottom:0;
  }
}

.p-top-plan__modal-number {
  margin-bottom:20px;
  font-weight:bold;
  font-size:20px;
  font-size:2rem;
  line-height:1;
}
.p-top-plan__modal-number span {
  margin-left:5px;
  font-size:50px;
  font-size:5rem;
}
@media (max-width:1023px) {
  .p-top-plan__modal-number {
    margin-bottom:15px
  }
}

@media (max-width:767px) {
.p-top-plan__modal-number {
font-size:16px;font-size:1.6rem
}
.p-top-plan__modal-number span {
font-size:34px;font-size:3.4rem
}

}
.p-top-plan__modal-title {margin:0 0 30px;padding:0 20px;color:#fff;font-weight:bold;
font-size:20px;font-size:2rem;line-height:59px;
}
.p-top-plan__modal-title--basi {
background-color:#c3674d
}
.p-top-plan__modal-title--pilates {
background-color:#327c93
}
.p-top-plan__modal-title--strong {
background-color:#be9b2e
}
.p-top-plan__modal-title--yoga {
background-color:#668856
}
@media (max-width:1023px) {
.p-top-plan__modal-title {margin:0 0 25px;padding:0 15px;
font-size:18px;font-size:1.8rem;line-height:48px;
}

}
@media (max-width:767px) {
.p-top-plan__modal-title {margin:0 0 25px;padding:0 10px;
font-size:16px;font-size:1.6rem;line-height:42px;
}

}
.p-top-plan__modal-list {
  display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:30px
}

@media (max-width:767px) {
  .p-top-plan__modal-list {
    margin-bottom:20px
  }
}

.p-top-plan__modal-list-item {
  margin-right:18px;
  margin-bottom:20px;
  font-weight:bold;
  font-size:14px;
  font-size:1.4rem;
  line-height:1;
}

.p-top-plan__modal-list-item:not(:last-child):after {
  padding-left:18px;
  color:#cbcbcb;
  content:'|';
}

@media (max-width:767px) {
  .p-top-plan__modal-list-item {margin-right:15px;
    font-size:13px;font-size:1.3rem;
  }
  .p-top-plan__modal-list-item:after {
    padding-left:15px
  }
}
</style>
