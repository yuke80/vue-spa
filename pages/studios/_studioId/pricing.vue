<template>
  <div class="p-studio-price">
    <div id="Breadcrumb">
      <div class="l-new-container">
        <ul>
          <li class="">
            <a
              href="/"
              class="nuxt-link-active"
            > TOP </a>
          </li>
          <li class="flex-1">
            <nuxt-link to="/studios">
              スタジオ一覧
            </nuxt-link>
          </li>
          <li class="flex-1">
            <nuxt-link :to="`/studios/${$route.params.studioId}`">
              <studio-name
                :studio="studio"
                :show-zenplace-prefix="true"
              />
            </nuxt-link>
          </li>
          <li>
            <span>料金</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="c-price-list">
      <div
        class="container pb-5"
      >
        <h2 class="text-center pb-3">
          おすすめのプラン
        </h2>
        <p class="pb-5">
          ピラティス・ヨガは、ライフスタイルの1つに取り入れ、頻度高く継続していただくことで効果を最大限感じていただけます。<br>
          最速で効果を最大化したい方は、5回程度「プライベート・レッスン」でご自身のレベルや目的に合わせて丁寧に効率の良い動きを習得しながら「マット・フリー」で実践を重ねることがお勧めです。<br>
          その後も2週間に1回程度のプライベートと日々のマットレッスンで、3ヶ月後には効果を最大限感じていただけます。<br>
          <br>
        </p>
        <div
          v-if="studio.studio_id === 170
            || studio.studio_id === 171"
        >
          <div class="p-price-table">
            <h3 class="price-title">
              マシングループレッスン
            </h3>
            <div
              class="c-pricetable-wrap"
            >
              <div class="container">
                <div class="c-pricetable">
                  <div class="c-pricetable-row">
                    <div class="c-pricetable-col">
                      <div>プラン</div>
                    </div><div class="c-pricetable-col">
                      <div>月4回</div>
                    </div><div class="c-pricetable-col">
                      <div>月8回</div>
                    </div>
                  </div><div class="c-pricetable-row">
                    <div class="c-pricetable-col">
                      <div>Grade 1</div>
                    </div>
                    <div class="c-pricetable-col">
                      <div>14,520円<span>／月（税込）</span><div>月額（税込）</div></div>
                    </div>
                    <div class="c-pricetable-col">
                      <div>22,880円<span>／月（税込）</span><div>月額（税込）</div></div>
                    </div>
                  </div><div class="c-pricetable-row">
                    <div class="c-pricetable-col">
                      <div>Grade 2</div>
                    </div>
                    <div class="c-pricetable-col">
                      <div>13,750円<span>／月（税込）</span><div>月額（税込）</div></div>
                    </div>
                    <div class="c-pricetable-col">
                      <div>22,000円<span>／月（税込）</span><div>月額（税込）</div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="studio.grade_name === '０１'">
          <div class="p-price-table">
            <h3 class="price-title">
              マットグループレッスン
            </h3>
            <div
              class="c-pricetable-wrap"
            >
              <div class="container">
                <div class="c-pricetable">
                  <div class="c-pricetable-row">
                    <div class="c-pricetable-col">
                      <div>プラン</div>
                    </div><div class="c-pricetable-col">
                      <div>フリープラン</div>
                    </div><div class="c-pricetable-col">
                      <div>月6</div>
                    </div><div class="c-pricetable-col">
                      <div>月4</div>
                    </div>
                  </div><div class="c-pricetable-row">
                    <div class="c-pricetable-col">
                      <div>月額料金</div>
                    </div>
                    <div class="c-pricetable-col">
                      <div>16,940円<span>／月（税込）</span><div>月額（税込）</div></div>
                    </div>

                    <div class="c-pricetable-col">
                      <div>14,520円<span>／月（税込）</span><div>月額（税込）</div></div>
                    </div>
                    <div class="c-pricetable-col">
                      <div>10,450円<span>／月（税込）</span><div>月額（税込）</div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="p-price-table pb-5">
            <h3 class="price-title">
              プライベートレッスン
            </h3>
            <div
              class="c-pricetable-wrap"
            >
              <div class="container">
                <div class="c-pricetable">
                  <div class="c-pricetable-row">
                    <div class="c-pricetable-col">
                      <div>プラン</div>
                    </div><div class="c-pricetable-col">
                      <div>プライベート2（月2回）</div>
                    </div><div class="c-pricetable-col">
                      <div>プライベート4（月4回）</div>
                    </div>
                  </div><div class="c-pricetable-row">
                    <div class="c-pricetable-col">
                      <div>月額料金</div>
                    </div>
                    <div class="c-pricetable-col">
                      <div>20,240円<span>／月（税込）</span><div>月額（税込）</div></div>
                    </div>
                    <div class="c-pricetable-col">
                      <div>37,400円<span>／月（税込）</span><div>月額（税込）</div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="p-price-table">
            <h3 class="price-title">
              マットグループレッスン
            </h3>
            <div
              class="c-pricetable-wrap"
            >
              <div class="container">
                <div class="c-pricetable">
                  <div class="c-pricetable-row">
                    <div class="c-pricetable-col">
                      <div>プラン</div>
                    </div><div class="c-pricetable-col">
                      <div>フリープラン</div>
                    </div><div class="c-pricetable-col">
                      <div>月6</div>
                    </div><div class="c-pricetable-col">
                      <div>月4</div>
                    </div>
                  </div><div class="c-pricetable-row">
                    <div class="c-pricetable-col">
                      <div>月額料金</div>
                    </div>
                    <div class="c-pricetable-col">
                      <div>14,960円<span>／月（税込）</span><div>月額（税込）</div></div>
                    </div>

                    <div class="c-pricetable-col">
                      <div>13,200円<span>／月（税込）</span><div>月額（税込）</div></div>
                    </div>
                    <div class="c-pricetable-col">
                      <div>9,625円<span>／月（税込）</span><div>月額（税込）</div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="p-price-table pb-5">
            <h3 class="price-title">
              プライベートレッスン
            </h3>
            <div
              class="c-pricetable-wrap"
            >
              <div class="container">
                <div class="c-pricetable">
                  <div class="c-pricetable-row">
                    <div class="c-pricetable-col">
                      <div>プラン</div>
                    </div><div class="c-pricetable-col">
                      <div>プライベート2（月2回）</div>
                    </div><div class="c-pricetable-col">
                      <div>プライベート4（月4回）</div>
                    </div>
                  </div><div class="c-pricetable-row">
                    <div class="c-pricetable-col">
                      <div>月額料金</div>
                    </div>
                    <div class="c-pricetable-col">
                      <div>17,160円<span>／月（税込）</span><div>月額（税込）</div></div>
                    </div>
                    <div class="c-pricetable-col">
                      <div>32,560円<span>／月（税込）</span><div>月額（税込）</div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center btn-box mb-5">
          <nuxt-link
            to="/price"
            class="btn-blue_border"
          >
            料金についてはこちら
          </nuxt-link>
        </div>
      </div>
    </div>
    <section>
      <div class="c-ctalower bg-cta text-center">
        <div class="l-new-container">
          <div
            v-if="studio.studio_id === 170
              || studio.studio_id === 171"
          >
            <div class="campaign-reformerg">
              <img
                loading="lazy"
                src="~assets/images/welcome/campaign-reformerg.webp"
                class="w-100 d-block mx-auto"
                style="max-width:400px;"
                alt="体験キャンペーン"
              >
            </div>
          </div>
          <div
            v-else
          >
            <img
              loading="lazy"
              src="~assets/images/welcome/campaign_pc.webp"
              class="w-100 pc mx-auto"
              style="max-width:1200px;"
              alt="体験キャンペーン"
            >
            <img
              loading="lazy"
              src="~assets/images/welcome/campaign.webp"
              class="w-100 sp mx-auto"
              style="max-width:100vw;"
              alt="体験キャンペーン"
            >
          </div>
          <div class="banner-reserve">
            <h3 class="gothic">
              体験はお電話またはWEBで<br class="sp">ご予約ください
            </h3>
            <p>
              後日、スタジオよりご案内のお電話をさせていただきます。<br>
              ご不明な点やお悩み、気になることがありましたら、お気軽にご相談ください。
            </p>
            <div
              class="d-flex justify-content-center"
            >
              <a
                href="tel:03-4405-1245"
                class="c-ctalower-blue"
              >
                <i class="icon-phone" />
                電話予約
              </a>
              <a
                :href="$store.getters.taikenUrl(studio.brand_id, studio.studio_id, function (refnum){return getRefnumFromCookie()}, function (abtest){return getABtestValue()})"
                class="c-ctalower-orange"
              >
                <i class="icon-web" />
                ウェブで予約
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container c-about">
      <h4>他店利用について</h4>
      <div class="d-flex">
        <div>
          <img
            src="~/assets/images/studio/detail/studio-price01.jpg"
            alt=""
          >
        </div>
        <div>
          <p v-html="list.comment" />
          <div class="text-right btn-box">
            <nuxt-link
              to="/studios"
              class="btn-blue_border"
            >
              スタジオ一覧へ
            </nuxt-link>
          </div>
        </div>
      </div>
      <h4>特別割引プランについて</h4>
      <div class="d-flex">
        <div>
          <img
            src="~/assets/images/studio/detail/studio-price02.jpg"
            alt=""
          >
        </div>
        <div>
          <p>
            zen
            placeでは、ピラティス・ヨガをライフスタイルにとりいれて継続していただけるよう、みなさまのライフステージにあった特別割引プランもご用意しております。
          </p>
          <div class="text-right btn-box">
            <nuxt-link
              to="/price#special-plan"
              class="btn-blue"
            >
              特別割引プランについて
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div class="container c-studio">
      <nearby-studios :studio="studio" />
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import moment from 'moment';

export default {
  head() {
    return {
      title: this.metaStudioTitlePrice,
    };
  },

  scrollToTop: true,

  async asyncData({ app, params }) {
    const studio = await app.$zenplaceApi.getStudio(params.studioId);

    const [pricing, campaigns] = await Promise.all([
      app.$zenplaceApi.getStudioPricing(studio.studio_id, { progress: false }),
      app.$zenplaceApi.getStudioCampaigns(studio.studio_id, { progress: false }),
    ]);
    let list = '';
    let isReformer;
    if (studio.studio_id === 170
    || studio.studio_id === 171) {
      isReformer = true;
      list = {
        title: 'グレード1',
        admission: '33,000',
        free: '16,940',
        month4: '14,520',
        month8: '22,880',
        ticket1: '104,50',
        ticket1_count: '40',
        ticket2: '101,750',
        ticket2_count: '40',
        ticket3: '57,200',
        ticket3_count: '20',
        comment: '当スタジオはグレード1です。<br>グレード1にご登録のお客様はzen placeのすべてのグループ店を追加料金なしでご利用可能です。<br>ピラティスはもちろん、ヨガ、ホットヨガ、HIITなど、その日の気分や都合にあわせてお選びいただけます。',
      };
    } else if (studio.grade_name === '０１') {
      list = {
        title: 'グレード1',
        admission: '33,000',
        free: '16,940',
        month4: '10,450',
        month6: '14,520',
        ticket1: '104,500',
        ticket1_count: '40',
        ticket2: '101,750',
        ticket2_count: '40',
        ticket3: '57,200',
        ticket3_count: '20',
        comment: '当スタジオはグレード1です。<br>グレード1にご登録のお客様はzen placeのすべてのグループ店を追加料金なしでご利用可能です。<br>ピラティスはもちろん、ヨガ、ホットヨガ、HIITなど、その日の気分や都合にあわせてお選びいただけます。',
      };
    } else {
      list = {
        title: 'グレード2',
        admission: '22,000',
        free: '14,960',
        month4: '9,625',
        month6: '13,200',
        ticket1: '88,825',
        ticket1_count: '40',
        ticket2: '85,800',
        ticket2_count: '40',
        ticket3: '47,300',
        ticket3_count: '20',
        comment: '当スタジオはグレード2です。<br>グレード2にご登録のかたはグレード2（全国70以上）のグループ店を追加料金なしでご利用いただけます。<br>ピラティスはもちろん、ヨガ、ホットヨガ、HIITなど、その日の気分や都合にあわせてお選びいただけます。',
      };
    }

    return {
      isReformer,
      studio,
      pricing,
      campaigns,
      list,
      movies: [
        {
          url: 'https://www.youtube.com/embed/w51mvHa5S30',
          text: '毎週3回、通い続けて、仕事の成績が3倍になりました！',
          person: 'XXXXXXさん<br>20代男性　営業職',
        },
        {
          url: 'https://www.youtube.com/embed/w51mvHa5S30',
          text: '毎週3回、通い続けて、仕事の成績が3倍になりました！',
          person: 'XXXXXXさん<br>20代男性　営業職',
        },
        {
          url: 'https://www.youtube.com/embed/w51mvHa5S30',
          text: '毎週3回、通い続けて、仕事の成績が3倍になりました！',
          person: 'XXXXXXさん<br>20代男性　営業職',
        },
      ],
    };
  },
  computed: {
    metaStudioTitlePrice() {
      const brandTypes = (this.studio.brand_type || '').split(',');
      if (brandTypes.includes('basi')) {
        return `ピラティススタジオ ${this.studio.studio_name} 料金ページ - zen place`;
      }
      if (brandTypes.includes('pilates')) {
        return `ピラティススタジオ ${this.studio.studio_name} 料金ページ - zen place`;
      }
      if (brandTypes.includes('yoga')) {
        return `ヨガスタジオ ${this.studio.studio_name} 料金ページ - zen place`;
      }
      if (brandTypes.includes('strong')) {
        return `ホットヨガスタジオ ${this.studio.studio_name} 料金ページ - zen place`;
      }
      return `${this.studio.studio_name}スタジオ 料金ページ - zen place`;
    },

    studio() {
      return this.$parent.studio;
    },

    news() {
      return this.$parent.news;
    },

    filteredNews() {
      return _.filter(this.news, (n) => n.brand_id === this.studio.brand_id);
    },

    sortedNews() {
      return _.sortBy(this.filteredNews, (n) => -moment(n.indication_start_date).valueOf);
    },

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

    // Returns array of available access walkways
    accessWays() {
      return _.compact(
        _.map(_.range(1, 6), (i) => (
          !this.studio[`access_${i}`]
            ? null
            : { access: this.studio[`access_${i}`], access_walkway: this.studio[`access_walkway_${i}`] }
        )),
      );
    },
  },

  methods: {
    isYogaOrStrong(studio) {
      return (studio.brand_type || '').split(',').includes('yoga')
    || (studio.brand_type || '').split(',').includes('strong');
    },
    pricingHtml(pricing) {
      if (pricing.contents) {
        // FIXME: Find a proper solution to do this without hacky replacing
        // TODO: does not exist in staging, so use from production...
        return pricing.contents.replace(/"\/upload/g, '"https://admin.zenplace.co.jp/upload');
      }
      return '';
    },

    replaceDomains(contents) {
      if (contents) {
        return contents.replace(/"\/upload/g, '"https://admin.zenplace.co.jp/upload');
      }
      return '';
    },
    // 紹介番号取得
    getRefnumFromCookie() {
      if (process.browser) {
        const arr = [];
        if (document.cookie !== '') {
          const tmp = document.cookie.split(';');
          for (let i = 0; i < tmp.length; i += 1) {
            const data = tmp[i].trim().split('=');
            arr[data[0]] = decodeURIComponent(data[1]);
          }
        }
        if (arr.refnum) {
          return `refnum=${arr.refnum}&`;
        }
      }
      return '';
    },
    // ABtest
    getABtestValue() {
      const this_time = new Date();
      if (this_time.getTime() % 2 === 0) {
        return 'description=b&';
      }
      return '';
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/newvariables";
.p-studio-price {
  padding-top: 3rem;

  @include tab{
    padding-top: 1rem;
  }

}
.c-about {
  padding-top: 5em;
  h4 {
    margin-bottom:0.5em;
    color: $orange;
    font-weight: 600;
  }
  .d-flex{
    justify-content: space-between;
    margin-bottom:3em;

    @include tab{
      flex-wrap: wrap;
    }
    >div:nth-child(1){
      width: 30%;

      @include tab{
      width: 100%;
    }
      img{
        width: 100%;
      }
    }
    >div:nth-child(2){
      width: 68%;

      @include tab{
      margin-top: 1em;
      width: 100%;
    }
    }
    .btn-box{
      margin-top: 5rem;

      @include tab{
      margin-top: 1em;

    }
      a{
        height: 5rem;

      }
    }

  }
}
.c-studio {
  margin-top: 5em;
}
.c-price-list {
  padding: 5em 0 0;

  @include sp{
    padding-top: 3rem;
  }
  @include tab{
    padding-right: 15px;
    padding-left: 15px;
  }
  .container {
    margin-bottom: 2em;

    @include tab{
    padding-right: 0;
    padding-left: 0;
  }
  }
  h3 {
    text-align: center;
    font-size: 24px;

    @include sp {
      font-size: pv(20);
    }
  }
  h4 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em 0 0.5em;
    color: $white;
    font-size: 20px;
    &::before,
    &::after {
      width: calc(50% - 4em);
      height: 1px;
      background: $white;
      content: "";
    }
  }
  .contact-box {
    padding: 3em 0;
    background-color: $blue;

    @include sp {
      padding: 2em 0;
    }
  }
  .comment-box {
    margin: 0 auto;
    max-width: 1140px;
    text-align: center;
  }
  .comment {
    position: relative;
    display: inline-block;
    margin-bottom: 1em;
    padding: 0 10px;
    color: $white;
    text-align: center;
    letter-spacing: 0.05em;
    font-weight: bold;
    font-size: 30px;

    @include sp {
      margin-top: pv(20);
      font-size: pv(18);
      line-height: 1.5;
    }
    &::before,
    &::after {
      position: absolute;
      top: 0;
      width: 1px;
      height: 4em;
      background: $white;
      content: "";

      @include sp {
        height: 4em;
      }
    }
    &::before {
      left: -0.5em;
      transform: rotate(-35deg);
    }
    &::after {
      right: -0.5em;
      transform: rotate(35deg);
    }
    b {
      position: relative;
      padding: 0 5px;
      font-size: 40px;

      @include sp {
        font-size: pv(16);
      }
    }
  }
  .btn {
    display: block;
    margin-right: auto;
    margin-left: auto;
    padding: 0;
    max-width: 400px;
    width: 100%;
    height: 3em;
    border-radius: 1.5em;
    font-weight: bold;
    font-size: 24px;
    line-height: 3em;

    @include sp {
      max-width: 300px;
      font-size: pv(18);
    }
    a {
      display: block;
    }
    &.white {
      background: $white;
      a {
        color: $blue;
      }
    }
    &.orange {
      background: $orange;
      a {
        color: $white;
        i {
          margin-right: 16px;
          width: 26px;
          height: 20px;
        }
      }
    }
  }
}
.price-title {
  text-align: center;
  font-size: 28px;

  @include sp {
    font-size: pv(18);
  }
  &:after {
    display: block;
    margin: 0.5em auto 0;
    width: 5em;
    height: 1px;
    background-color: #535353;
    content: "";
  }
}
.p-price-table {
    padding: 0;

    @include sp {
      background: none;
    }
    &.admission {
      @include tabH {
        .c-pricetable-col {
          padding: 8px 0;
          > div span{
            display: inline;
          }
        }
        .c-pricetable-col:first-child {
          width: 30vw;
        }
      }
    }
    h2 {
      margin-bottom: 60px;
      color: #2E6EAC;
      text-align: center;
      font-weight: bold;
      font-size: 2.2rem;

      @include sp {
        margin-bottom: 32px;
        font-size: 2rem;
      }
    }
    img {
      margin: 40px 0;
    }
    p {
      display: flex;
      justify-content: flex-start;
      font-size: 16px;
      line-height: 2;
    }

    &-h3 {
      display: none;

      @include sp {
        display: block;
        padding-bottom: 8px;
        border-bottom: 2px solid $blue;
        color: $blue;
        font-weight: bold;
        font-size: 16px;
      }
    }

    .c-pricetable {
      margin: 20px 0 40px;
      width: 100%;
      border-top: 1px solid $blue;

      @include sp {
        margin: 20px 0;
      }

      &-wrap {
        @include sp {
          display: block !important;

          p {
            justify-content: flex-start;
            margin-bottom: 40px;
            font-size: 12px;
          }
        }
      }

      &-row {
        display: flex;
        width: 100%;
        border-bottom: 1px solid $blue;

        @include sp {
          &:first-child {
            .c-pricetable-col > div {
              margin-right: -30px;
              margin-left: -30px;
              transform: scale(0.8);
            }
          }
        }
      }

      &-col {
        display: inline-block;
        padding: 16px 0;
        width: 100%;
        border-right: 1px solid $blue;
        text-align: center;
        font-weight: bold;
        font-size: 16px;

        @include sp {
          padding: 4px 0;
          font-size: 13px;
        }

        @media screen and (max-width: 600px) {
          padding: 8px 0;
          font-size: 13px;
        }

        &:first-child {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 240px;
          background: rgba(46, 110, 172, 0.7);
          color: white;

          @include sp {
            width: pv(52);
            font-size: 10px;
          }

          @media screen and (max-width: 940px) {
            width: 120px;
          }

          @media screen and (max-width: 600px) {
            width: 100px;
          }
        }

        &:not(:first-child) {
          flex: 1 1 0;
          background: white;
          color: $blue;
        }

        > div {
          span {
            vertical-align: bottom;
            font-size: 0.8em;

            @media screen and (max-width: 940px) {
              display: none;
            }
          }

          div {
            display: none;

            @include sp {
              transform: scale(0.8) translateY(-2px);
            }

            @media screen and (max-width: 940px) {
              display: block;
              font-size: 10px;
            }

            @media screen and (max-width: 600px) {
              transform: scale(0.9);
            }
          }
        }
      }
    }
  } // .p-price-table
#Breadcrumb{
  padding: 0;

  @include sp{
    font-size: 2.66667vw;
  }
  ul{
    flex-wrap: wrap;
    li{
      span{
        &::after{
          display: none;
        }
      }
    }
  }

}
.campaign-reformerg {
  background-color: #2d6eaa;
  padding: 50px 0;
  margin-bottom: 20px;
  @include tab {
    padding: 20px 10px;
  }

}
</style>
