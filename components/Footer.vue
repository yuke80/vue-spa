<template>
  <footer class="l-footer-new">
    <div class="l-container">
      <div class="row align-items-center mb-4 pb-5">
        <div
          v-for="(b, i) in banners"
          :key="i"
          class="d-inline-block text-center col-md-4 py-3"
        >
          <component
            :is="'a'"
            :href="b.url"
            :target="b.blank?'_blank': ''"
          >
            <img
              loading="lazy"
              :src="b.img"
              :alt="b.alt"
              class="w-100"
            >
          </component>
        </div>
      </div>
      <div class="row">
        <div class="col-md">
          <h4 class="_f-ttl mb-3">
            Learning
          </h4>
          <div class="l-footer-new_nav3 pb-5">
            <component
              :is="'a'"
              v-for="(fn, i) in fnav3"
              :key="i"
              :href="fn.url"
              :class="{'sp-on': fn.sp}"
              :target="fn.blank?'_blank':''"
              v-html="fn.text"
            />
          </div>
        </div>
        <div class="col-md">
          <h4 class="_f-ttl mb-3">
            About
          </h4>
          <div class="l-footer-new_nav3">
            <component
              :is="'a'"
              v-for="(fn, i) in fnav4"
              :key="i"
              :href="fn.url"
              :class="{'sp-on': fn.sp}"
              :target="fn.blank?'_blank':''"
              v-html="fn.text"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="l-footer-new_nav2 pt-5 pb-3">
      <div class="d-flex l-footer-new_nav1 mb-4 pb-5">
        <component
          :is="'a'"
          v-for="(fn, i) in fnav1"
          :key="i"
          :href="fn.url"
          :class="{'sp-on': fn.sp}"
          :target="fn.blank?'_blank':''"
          v-html="fn.text"
        />
      </div>
      <div class="row justify-content-between l-container">
        <div class="col-6">
          <h4 class="_ttl text-center text-white pt-3 mb-4">
            // Follow us
          </h4>
          <div class="sns d-flex justify-content-center pb-3">
            <a
              href="https://www.instagram.com/zenplace_official/"
              target="_blank"
              class="mr-5"
            ><img
              loading="lazy"
              src="~assets/images/common/icon_ig-white.svg"
            ></a>
            <a
              href="https://twitter.com/zenplace_jp/"
              target="_blank"
              class="mr-5"
            ><img
              loading="lazy"
              src="~assets/images/common/icon_twitter-white.svg"
            ></a>
            <a
              href="https://www.facebook.com/zenplaceOfficial/"
              target="_blank"
            ><img
              loading="lazy"
              src="~assets/images/common/icon_fb-white.svg"
            ></a>
          </div>
        </div>
        <div class="col-6">
          <h4 class="_ttl text-center text-white pt-3 mb-4">
            // Booking app
          </h4>
          <div class="sns d-flex justify-content-center pb-3">
            <a
              href="https://apps.apple.com/jp/app/zen-place-%E5%85%AC%E5%BC%8F%E3%82%A2%E3%83%97%E3%83%AA/id1473804275"
              target="_blank"
              class="mr-5"
            ><img
              loading="lazy"
              src="~assets/images/common/icon_apple.svg"
            ></a>
            <a
              href="https://play.google.com/store/apps/details?id=info.zenjp.zenplace&hl=ja&gl=US&pli=1"
              target="_blank"
            ><img
              loading="lazy"
              src="~assets/images/common/icon_google.svg"
            ></a>
          </div>
        </div>
      </div>
      <div class="text-center">
        <small class="copy text-white">
          © {{ thisYear }} ZEN PLACE inc. All Rights Reserved.
        </small>
      </div>
    </div>
  </footer>
</template>

<script>
const sebone = require('@/assets/images/info/rolldown/movementai_bnr.png');
const world_pilates = require('@/assets/images/classes/worldpilates/bnr-top2.png');
const renewal = require('@/assets/images/info/studios/renewal/renewal_topban.png');
const covid = require('@/assets/images/info/corona/info-ban-02.png');

export default {
  data() {
    return {
      banners: [
        {
          img: sebone,
          alt: 'AI解析システム 背骨ムーブメント解析',
          url: 'https://www.zenplace.co.jp/info/movementai',
          blank: false,
        },
        {
          img: world_pilates,
          alt: '世界のピラティス',
          url: 'https://www.zenplace.co.jp/classes/worldpilates',
          blank: false,
        },
        {
          img: renewal,
          alt: 'スタジオリニューアル／新スタジオOPEN情報',
          url: 'https://www.zenplace.co.jp/info/studios/renewal',
          blank: false,
        },
        {
          img: covid,
          alt: '感染予防のための安全対策',
          url: 'https://www.zenplace.co.jp/info/corona',
          blank: false,
        },

      ],
      fnav1: [
        {
          text: 'ピラティス',
          url: '/pilates',
        },
        {
          text: 'ヨガ',
          url: '/yoga',
        },
        {
          text: 'オンライン<br>レッスン',
          url: '/online',
        },
        {
          text: 'スタジオ一覧',
          url: '/studios',
        },
        {
          text: '料金',
          url: '/price',
        },
        {
          text: 'よくある質問',
          url: '/faq',
        },
        {
          text: 'ご利用者の声',
          url: '/voice',
        },
        {
          text: 'ご利用について',
          url: '/rule',
          sp: true,
        },
        {
          text: '利用規約',
          url: '/terms',
          sp: true,
        },
        {
          text: '特定商取引法に<br>基づく表記',
          url: 'https://corporate.zenplace.co.jp/tokusho.html',
          sp: true,
          blank: true,
        },
        {
          text: 'プライバシー<br>ポリシー',
          url: 'https://corporate.zenplace.co.jp/privacy.html',
          sp: true,
          blank: true,
        },
      ],
      fnav3: [
        {
          text: 'アカデミー',
          url: 'https://ac.zenplace.co.jp/',
          blank: true,
        },
        {
          text: 'BASIピラティス資格養成スクール',
          url: 'https://www.pilates-education.info/',
          blank: true,
        },
        {
          text: 'balanced body®',
          url: 'https://balancedbody.co.jp/',
          blank: true,
        },
        {
          text: 'yogaworks®',
          url: 'https://www.yoga-works.jp/',
          blank: true,
        },
        {
          text: 'zen place yogaインストラクター資格',
          url: 'https://ac.zenplace.co.jp/shikaku/zenplaceyoga',
          blank: true,
        },
      ],
      fnav4: [
        {
          text: '採用情報',
          url: 'https://corporate.zenplace.co.jp/recruit.html',
          blank: true,
        },
        {
          text: '会社情報',
          url: 'https://corporate.zenplace.co.jp/',
          blank: true,
        },
        {
          text: 'ピラティス・ヨガコラム',
          url: 'https://www.zenplace.co.jp/column/index.php',
          blank: true,
        },
        {
          text: '訪問看護',
          url: 'https://nurse.zenplace.co.jp/',
          blank: true,
        },
        {
          text: 'オンラインストア',
          url: 'https://zenplaceonline-store.myshopify.com/',
          blank: true,
        },
      ],
    };
  },
  computed: {
    thisYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss">
@import '~assets/scss/newvariables';

.l-footer-new{
  padding-top: 60px;
  overflow: hidden;

  @include sp{
    padding-top: pv(40);
    margin-bottom: 13vw;

    // .l-container{
    //   padding: 0 pv(20)!important;
    // }

    .row{
      padding-bottom: 0!important;
      margin-bottom: pv(22)!important;
    }
  }

  @media screen and(max-width: 330px){

    // .l-container{
    //   padding: 0 pv(10)!important;
    // }

  }
  a{
    cursor: pointer;
  }

  ._f-ttl {
    font-family: serif;
    border-bottom: 1px solid #2E6EAC;
    font-size: 2.6rem;
    color: #2E6EAC;
  }

  ._ttl {
    font-family: serif;
    font-size: 1.6rem;
  }

  &_nav1{
    @include sp{
      margin-bottom: pv(24)!important;
      padding-bottom: 0!important;
    }

    a{
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      font-size: 1.4rem;
      line-height: 1.4;
      width: 100%;
      color: $blue;

      @include sp{
        font-size: pv(9);
      }
    }
  }
  &_nav2{
    background: $gray-70;

    a{
      font-size: 1.4rem;
      color: white;

      @include sp{
        font-size: pv(9);
      }
    }

    img{
      width: 2.4rem;
      height: 2.4rem;
    }
  }
  &_nav3 {
    a {
      display: block;
      font-size: 1.4rem;
      line-height: 3;
      position: relative;
      &::after {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        content: "";
        vertical-align: middle;
        width: 0.5em;
        height: 0.5em;
        border-top: 1px solid #707070;
        border-right: 1px solid #707070;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }
  }

  .copy{
    @include sp{
      font-size: pv(7);
    }
  }

  .logo{
    width: 240px;
    display: inline-block;
    margin-bottom: 16px;
  }

  @include tabH{
    &_nav1{
      a:not(.sp-on){
        display: none;
      }
    }

    &_nav2{
      position: relative;

    }
  }

  @include sp{
    .sns{
      a{
        margin-right: pv(10);

        img{
          width: pv(30);
          height: pv(30);
        }
      }
    }

    >.text-center{
      padding: pv(4) 0 pv(10)!important;

      .logo{
        width: pv(140);
        margin-bottom: pv(5)!important;
        margin-top: pv(20)!important;
      }
    }
  }
}

</style>
