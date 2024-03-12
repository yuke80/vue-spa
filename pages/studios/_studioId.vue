<template>
  <div class="p-studio-main">
    <div class="studio-header-intro">
      <h1>
        {{ localization[brandType] }}{{
          studio.studio_name
        }}【zen place】
      </h1>
    </div>
    <div
      class="studio-header"
    >
      <div
        class="header-image"
      >
        <h2>
          {{ studio.brand_type | studioType }} <br class="sp">{{
            studio.studio_name
          }}スタジオ
        </h2>
      </div>
    </div>

    <b-navbar
      type="light"
      class="navbar-nav navbar-zenplace-studio"
    >
      <div class="container">
        <b-navbar-nav class="text-center d-flex justify-content-center sp-bottom-navbar">
          <b-nav-item
            v-if="this.$route.path == `/studios/${$route.params.studioId}`"
            href="#tophead"
          >
            <div>TOP</div>
          </b-nav-item>
          <b-nav-item
            v-else
            :to="`/studios/${$route.params.studioId}`"
          >
            <div>TOP</div>
          </b-nav-item>
          <b-nav-item :to="`/studios/${$route.params.studioId}/schedule`">
            <div>スケジュール</div>
          </b-nav-item>
          <b-nav-item :to="`/studios/${$route.params.studioId}/pricing`">
            <div>料金</div>
          </b-nav-item>
          <b-nav-item
            v-if="this.$route.path == `/studios/${$route.params.studioId}`"
            href="#studio-info"
          >
            <div>アクセス</div>
          </b-nav-item>
          <b-nav-item
            v-else
            :href="`/studios/${$route.params.studioId}#studio-info`"
          >
            <div>アクセス</div>
          </b-nav-item>
          <b-nav-item :href="`tel:${studio.tel || &quot;03-4405-1245&quot;}`">
            <div>電話</div>
          </b-nav-item>
          <!-- TODO: taiken_ok -->
        </b-navbar-nav>
      </div>
    </b-navbar>

    <nuxt-child />
    <!-- <transition
      name="fade"
      mode="out-in"
    >
      <nuxt-child />
    </transition>-->

    <div
      class="d-sm-none c-cta-footer-studio show"
    >
      <nuxt-link
        to="/login"
        class="btn-blue"
      >
        会員の方
      </nuxt-link>
      <a
        :href="$store.getters.taikenUrl(studio.brand_id, studio.studio_id, function (refnum){return getRefnumFromCookie()}, function (abtest){return getABtestValue()})"
        class="btn-orange"
      >
        このスタジオで体験
      </a>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  head() {
    return {
      titleTemplate: '%s',
      meta: [
        { hid: 'description', name: 'description', content: this.metaStudioDescription },
        { hid: 'keywords', name: 'keywords', content: this.metaStudioKeywords },
      ],
      __dangerouslyDisableSanitizers: ['script'],
      script: [{
        innerHTML: JSON.stringify(this.structuredData),
        type: 'application/ld+json',
      }],
    };
  },

  async asyncData({
    app, params, route, redirect,
  }) {
    const studio = await app.$zenplaceApi.getStudio(params.studioId);
    // if trying to access with number, 302 redirect to slug
    const isNumber = params.studioId.match(/^\d+$/);
    if (isNumber && studio) {
      return redirect({
        name: route.name,
        params: {
          ...params,
          studioId: studio.slug,
        },
      });
    }
    const [instructors, visitingInstructors, news1, news2, news3, news4] = await Promise.all([
      // 所属インストラクター
      app.$zenplaceApi.getStudioInstructors(studio.studio_id, { progress: false }),
      // 今月レッスンを持ってるインストラクター
      app.$zenplaceApi.getStudioVisitingInstructors(studio.studio_id, { progress: false }),
      app.$zenplaceApi.getStudioNews(studio.studio_id, 'info', { progress: false }),
      app.$zenplaceApi.getStudioNews(studio.studio_id, 'ws', { progress: false }),
      app.$zenplaceApi.getStudioNews(studio.studio_id, 'alert', { progress: false }),
      app.$zenplaceApi.getStudioNews(studio.studio_id, 'report', { progress: false }),
    ]);
    return {
      studio,
      instructors,
      instructorsWithThisMonthLesson: visitingInstructors,
      news: news1.concat(news2).concat(news3).concat(news4),
    };
  },

  data() {
    return {
      localizedStudioBrands: {
        pilates: 'ピラティス',
        basi: 'ピラティス',
        yoga: 'ヨガ',
        strong: 'ホットヨガ',
        other: 'ピラティス＆ヨガ',
      },
    };
  },
  computed: {

    localization() {
      if (this.type === 'long') return this.localizedStudioBrandsLong;
      return this.localizedStudioBrands;
    },

    studioBrands() {
      // This uses brand_type, which is newly added one.
      // Old brand_id allows only one, and studio_types has hiit,other which are wrong
      return (this.studio.brand_type || '').split(',');
    },

    filteredStudioBrands() {
      // We don't want to show nulls or empties, or basi
      return this.studioBrands.filter((b) => b && b !== 'basi');
    },

    brandType() {
      const brandTypes = (this.studio.brand_type || '').split(',');
      if ((brandTypes.includes('pilates') || brandTypes.includes('basi')) && (brandTypes.includes('yoga') || brandTypes.includes('strong'))) {
        return 'other';
      } if (brandTypes.includes('basi')) {
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

    structuredData() {
      if (this.studio.studio_id === 208) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-akabane',
          name: 'zen place ピラティス 赤羽',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '北区',
            streetAddress: '赤羽 1-6-7 JPT赤羽ビル2階',
            postalCode: '115-0045',
          },
          telephone: '03-6903-8444',
          url: 'https://www.zenplace.co.jp/studios/pilates-akabane',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.7223916',
            latitude: '35.7783281',
          },
        };
      }
      if (this.studio.studio_id === 210) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/basipilates-fujisawa',
          name: 'zen place ピラティス 藤沢',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '神奈川県',
            addressLocality: '藤沢市',
            streetAddress: '南藤沢 2-8 2002K&Sビルディング4階',
            postalCode: '251-0055',
          },
          telephone: '03-3463-9994',
          url: 'https://www.zenplace.co.jp/studios/basipilates-fujisawa',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.4892539',
            latitude: '35.3383002',
          },
        };
      }
      if (this.studio.studio_id === 209) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/basipilates-daikanyama',
          name: 'zen place ピラティス 代官山',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '渋谷区',
            streetAddress: '代官山町 15-9 代官山センタービル4階',
            postalCode: '150-0034',
          },
          telephone: '03-3463-9994',
          url: 'https://www.zenplace.co.jp/studios/basipilates-daikanyama',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.702807',
            latitude: '35.649992',
          },
        };
      }
      if (this.studio.studio_id === 207) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/basipilates-kamakura',
          name: 'zen place ピラティス 鎌倉',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '神奈川県',
            addressLocality: '鎌倉市',
            streetAddress: '御成町 7-8 御成エバービル2階',
            postalCode: '248-0012',
          },
          telephone: '0467-40-3455',
          url: 'https://www.zenplace.co.jp/studios/basipilates-kamakura',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.548943',
            latitude: '35.316808',
          },
        };
      }

      if (this.studio.studio_id === 203) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/basipilates-totsuka',
          name: 'zen place ピラティス 戸塚',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '神奈川県',
            addressLocality: '横浜市',
            streetAddress: '戸塚区戸塚町8 ラピス戸塚2　2階',
            postalCode: '244-0003',
          },
          telephone: '045-719-5058',
          url: 'https://www.zenplace.co.jp/studios/basipilates-totsuka',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.53537',
            latitude: '35.40116',
          },
        };
      }

      if (this.studio.studio_id === 201) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-urawa',
          name: 'zen place ピラティス 浦和',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '埼玉県',
            addressLocality: '埼玉市',
            streetAddress: '浦和区高砂2丁目14-17 浦和マルゼンビル5階',
            postalCode: '330-0063',
          },
          telephone: '092-733-1021',
          url: 'https://www.zenplace.co.jp/studios/pilates-urawa',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.65298',
            latitude: '35.85877',
          },
        };
      }
      if (this.studio.studio_id === 199) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-fukuokatenjin',
          name: 'zen place ピラティス 福岡天神',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '福岡県',
            addressLocality: '福岡市',
            streetAddress: '中央区天神 2-12-1 天神ビル10階',
            postalCode: '810-0001',
          },
          telephone: '092-733-1021',
          url: 'https://www.zenplace.co.jp/studios/pilates-fukuokatenjin',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '130.4014',
            latitude: '33.59088',
          },
        };
      }
      if (this.studio.studio_id === 200) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/basipilates-tamachi',
          name: 'zen place ピラティス 田町',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '港区',
            streetAddress: '芝浦 3−13−2 Yビル6階',
            postalCode: '108-0023',
          },
          telephone: '03-6722-0735',
          url: 'https://www.zenplace.co.jp/studios/basipilates-tamachi',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.74881',
            latitude: '35.64301',
          },
        };
      }

      if (this.studio.studio_id === 178) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-sapporo',
          name: 'zen place ピラティス 札幌スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '北海道',
            addressLocality: '札幌市中央区',
            streetAddress: '北5条西6-1-23 第二北海道通信ビル508',
            postalCode: '060-0005',
          },
          telephone: '011-215-1725',
          url: 'https://www.zenplace.co.jp/studios/pilates-sapporo',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '141.3465',
            latitude: '43.06676',
          },
        };
      }
      if (this.studio.studio_id === 168) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-jinbochou',
          name: 'zen place ピラティス 神保町スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '千代田区',
            streetAddress: '神田神保町1-13-2 文銭堂ビル4階',
            postalCode: '101-0051',
          },
          telephone: '03-5577-3840',
          url: 'https://www.zenplace.co.jp/studios/pilates-jinbochou',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.75865',
            latitude: '35.69519',
          },
        };
      }
      if (this.studio.studio_id === 92) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/yoga-ningyocho',
          name: 'zen place ヨガ 人形町スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '中央区',
            streetAddress: '日本橋人形町1-17-7 ナンヤビル7階',
            postalCode: '103-0013',
          },
          telephone: '03-6661-7150',
          url: 'https://www.zenplace.co.jp/studios/yoga-ningyocho',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/811cb96.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.78296',
            latitude: '35.68516',
          },
        };
      }
      if (this.studio.studio_id === 27) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-nihonbashi',
          name: 'zen place ピラティス 日本橋スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '中央区',
            streetAddress: '日本橋室町1-10-1 宮永ビル4階',
            postalCode: '103-0022',
          },
          telephone: '03-6225-2042',
          url: 'https://www.zenplace.co.jp/studios/pilates-nihonbashi',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.77554',
            latitude: '35.6853',
          },
        };
      }
      if (this.studio.studio_id === 51) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-ginza',
          name: 'zen place ピラティス 銀座スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '中央区',
            streetAddress: '銀座4-14-6 平田ビル5階',
            postalCode: '104-0061',
          },
          telephone: '03-6278-8730',
          url: 'https://www.zenplace.co.jp/studios/pilates-ginza',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.76875',
            latitude: '35.67189',
          },
        };
      }
      if (this.studio.studio_id === 2) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/basipilates-ginza',
          name: 'zen place ピラティス 銀座スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '中央区',
            streetAddress: '銀座2-11-15 SF銀座ビル2階',
            postalCode: '104-0061',
          },
          telephone: '03-6228-4870',
          url: 'https://www.zenplace.co.jp/studios/basipilates-ginza',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.76875',
            latitude: '35.67189',
          },
        };
      }
      if (this.studio.studio_id === 23) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/strong-ginza',
          name: 'ホットヨガスタジオ zen place ホットヨガ 銀座店',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '中央区',
            streetAddress: '銀座3-10-6 マルイト銀座第3ビル11階',
            postalCode: '104-0061',
          },
          telephone: '03-3543-6211',
          url: 'https://www.zenplace.co.jp/studios/strong-ginza',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/811cb96.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.76625',
            latitude: '35.67117',
          },
        };
      }
      if (this.studio.studio_id === 62) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/yoga-ginza',
          name: 'zen place ヨガ 銀座スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '中央区',
            streetAddress: '銀座3-2-10 並木ビル2階',
            postalCode: '104-0061',
          },
          telephone: '03-6228-7753',
          url: 'https://www.zenplace.co.jp/studios/yoga-ginza',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/811cb96.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.76492',
            latitude: '35.67335',
          },
        };
      }
      if (this.studio.studio_id === 5) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/basipilates-roppongi',
          name: 'zen place ピラティス 六本木スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '港区',
            streetAddress: '六本木7-19-9 VORT六本木7階',
            postalCode: '106-0032',
          },
          telephone: '03-6425-7054',
          url: 'https://www.zenplace.co.jp/studios/basipilates-roppongi',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.72784',
            latitude: '35.66246',
          },
        };
      }
      if (this.studio.studio_id === 146) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/basipilates-azabujuban',
          name: 'zen place ピラティス 麻布十番スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '港区',
            streetAddress: '麻布十番1-7-1 MGB麻布十番3階',
            postalCode: '106-0045',
          },
          telephone: '03-6721-1165',
          url: 'https://www.zenplace.co.jp/studios/basipilates-azabujuban',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.73473',
            latitude: '35.65644',
          },
        };
      }
      if (this.studio.studio_id === 65) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/basipilates-mita',
          name: 'zen place ピラティス 三田スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '港区',
            streetAddress: '芝5‐31‐7 三田ステーションビルアミタ902',
            postalCode: '108-0014',
          },
          telephone: '03-6435-0401',
          url: 'https://www.zenplace.co.jp/studios/basipilates-mita',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.74596',
            latitude: '35.64656',
          },
        };
      }
      if (this.studio.studio_id === 156) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/basipilates-ueno',
          name: 'zen place ピラティス 上野スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '台東区',
            streetAddress: '上野1丁目20-1',
            postalCode: '110-0015',
          },
          telephone: '03-5826-8869',
          url: 'https://www.zenplace.co.jp/studios/basipilates-ueno',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.77267',
            latitude: '35.70762',
          },
        };
      }
      if (this.studio.studio_id === 75) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/basipilates-myogadani',
          name: 'zen place ピラティス 茗荷谷スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '文京区',
            streetAddress: '小日向4-2-6 TS93ビル6階',
            postalCode: '112-0002',
          },
          telephone: '03-6240-0057',
          url: 'https://www.zenplace.co.jp/studios/basipilates-myogadani',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.73999',
            latitude: '35.71478',
          },
        };
      }
      if (this.studio.studio_id === 114) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/yoga-myogadani',
          name: 'zen place ヨガ 茗荷谷スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '文京区',
            streetAddress: '小石川5丁目5-5-2 信濃路ビル6階',
            postalCode: '112-0002',
          },
          telephone: '03-6902-0611',
          url: 'https://www.zenplace.co.jp/studios/yoga-myogadani',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/811cb96.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.73718',
            latitude: '35.71781',
          },
        };
      }
      if (this.studio.studio_id === 162) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-kitasenjyu',
          name: 'zen place ピラティス 北千住スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '足立区',
            streetAddress: '千住3丁目1 ベニヤビル2階',
            postalCode: '113-0022',
          },
          telephone: '03-5284-8712',
          url: 'https://www.zenplace.co.jp/studios/pilates-kitasenjyu',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.80026',
            latitude: '35.75119',
          },
        };
      }
      if (this.studio.studio_id === 117) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-sendagi',
          name: 'zen place ピラティス 千駄木スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '文京区',
            streetAddress: '千駄木2-34-8 ツインパレス202',
            postalCode: '113-0022',
          },
          telephone: '03-5842-1277',
          url: 'https://www.zenplace.co.jp/studios/pilates-sendagi',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.7636',
            latitude: '35.72438',
          },
        };
      }
      if (this.studio.studio_id === 111) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/basipilates-hongo',
          name: 'zen place ピラティス 本郷三丁目スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '文京区',
            streetAddress: '本郷3-32-7 東京ビル4階',
            postalCode: '113-0033',
          },
          telephone: '03-5615-8766',
          url: 'https://www.zenplace.co.jp/studios/basipilates-hongo',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.76102',
            latitude: '35.70606',
          },
        };
      }
      if (this.studio.studio_id === 91) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-komagome',
          name: 'zen place ピラティス 駒込スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '北区',
            streetAddress: '中里1-10-6 駒込Kビル5階',
            postalCode: '114-0015',
          },
          telephone: '03-5842-1230',
          url: 'https://www.zenplace.co.jp/studios/pilates-komagome',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.74998',
            latitude: '35.73909',
          },
        };
      }
      if (this.studio.studio_id === 12) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-nishikasai',
          name: 'zen place ピラティス 西葛西スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '江戸川区',
            streetAddress: '西葛西6-17-6 エイトジャパンシーダービル2階',
            postalCode: '134-0088',
          },
          telephone: '03-5834-7040',
          url: 'https://www.zenplace.co.jp/studios/pilates-nishikasai',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.86',
            latitude: '35.66319',
          },
        };
      }
      if (this.studio.studio_id === 57) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/strong-nishikasai',
          name: 'ホットヨガスタジオ zen place ホットヨガ 西葛西店',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '江戸川区',
            streetAddress: '西葛西6-17-6 エイトジャパンシーダービル2階',
            postalCode: '134-0088',
          },
          telephone: '03-6808-6451',
          url: 'https://www.zenplace.co.jp/studios/strong-nishikasai',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/811cb96.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.86',
            latitude: '35.66319',
          },
        };
      }
      if (this.studio.studio_id === 76) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-toyocho',
          name: 'zen place ピラティス 東陽町スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '江東区',
            streetAddress: '東陽2-4-26 飯田ビル4階',
            postalCode: '135-0016',
          },
          telephone: '03-6666-3041',
          url: 'https://www.zenplace.co.jp/studios/pilates-toyocho',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.81808',
            latitude: '35.6687',
          },
        };
      }
      if (this.studio.studio_id === 52) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-monnaka',
          name: 'zen place ピラティス 門前仲町スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '江東区',
            streetAddress: '門前仲町1-14-3 オフィスプラネット仲町ビル6階',
            postalCode: '135-0048',
          },
          telephone: '03-5809-9898',
          url: 'https://www.zenplace.co.jp/studios/pilates-monnaka',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.79491',
            latitude: '35.67383',
          },
        };
      }
      if (this.studio.studio_id === 161) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/basipilates-oimachi',
          name: 'zen place ピラティス 大井町スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '品川区',
            streetAddress: '大井1-22-5 八木ビル5階',
            postalCode: '140-0014',
          },
          telephone: '03-6303-7203',
          url: 'https://www.zenplace.co.jp/studios/basipilates-oimachi',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.73245',
            latitude: '35.60663',
          },
        };
      }
      if (this.studio.studio_id === 112) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/basipilates-meguro',
          name: 'zen place ピラティス 目黒スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '品川区',
            streetAddress: '上大崎2-15-14 高木ビル4階',
            postalCode: '141-0021',
          },
          telephone: '03-6432-5888',
          url: 'https://www.zenplace.co.jp/studios/basipilates-meguro',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.7166',
            latitude: '35.63439',
          },
        };
      }
      if (this.studio.studio_id === 154) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/basipilates-gotanda',
          name: 'zen place ピラティス 五反田スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '品川区',
            streetAddress: '東五反田2-7-14 五反田栗の木ビル5階',
            postalCode: '141-0022',
          },
          telephone: '03-6450-4615',
          url: 'https://www.zenplace.co.jp/studios/basipilates-gotanda',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.72519',
            latitude: '35.62542',
          },
        };
      }
      if (this.studio.studio_id === 33) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/yoga-gotanda',
          name: 'zen place ヨガ 五反田スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '品川区',
            streetAddress: '東五反田2-2-2 松楽ビル7階',
            postalCode: '141-0022',
          },
          telephone: '03-6447-7332',
          url: 'https://www.zenplace.co.jp/studios/yoga-gotanda',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/811cb96.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.72244',
            latitude: '35.62389',
          },
        };
      }
      if (this.studio.studio_id === 44) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-gotanda',
          name: 'zen place ピラティス 五反田スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '品川区',
            streetAddress: '西五反田1丁目25-1 ＫＡＮＯビル5階',
            postalCode: '141-0031',
          },
          telephone: '03-6303-9977',
          url: 'https://www.zenplace.co.jp/studios/pilates-gotanda',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.72250',
            latitude: '35.62408',
          },
        };
      }
      if (this.studio.studio_id === 186) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-togoshi',
          name: 'zen place ピラティス 戸越スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '品川区',
            streetAddress: '平塚3-3-10',
            postalCode: '142-0051',
          },
          telephone: '03-6421-6036',
          url: 'https://www.zenplace.co.jp/studios/pilates-togoshi',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.71083',
            latitude: '35.61606',
          },
        };
      }
      if (this.studio.studio_id === 16) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-musashikoyama',
          name: 'zen place ピラティス 武蔵小山スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '品川区',
            streetAddress: '小山3-26-9 駅サイドビル4-5階',
            postalCode: '142-0062',
          },
          telephone: '03-3786-1803',
          url: 'https://www.zenplace.co.jp/studios/pilates-musashikoyama',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.70369',
            latitude: '35.61961',
          },
        };
      }
      if (this.studio.studio_id === 72) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/basipilates-omori',
          name: 'zen place ピラティス 大森スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '大田区',
            streetAddress: '山王2-1-2 大森ステーションBOX9階',
            postalCode: '143-0023',
          },
          telephone: '03-6417-1125',
          url: 'https://www.zenplace.co.jp/studios/basipilates-omori',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.72844',
            latitude: '35.58998',
          },
        };
      }
      if (this.studio.studio_id === 10) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/basipilates-shibuya',
          name: 'zen place ピラティス 渋谷スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '渋谷区',
            streetAddress: '渋谷1-23-18 渋谷ワールドイーストビル5階',
            postalCode: '150-0002',
          },
          telephone: '03-6427-9404',
          url: 'https://www.zenplace.co.jp/studios/basipilates-shibuya',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.70284',
            latitude: '35.66255',
          },
        };
      }
      if (this.studio.studio_id === 95) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/basipilates-ebisu',
          name: 'zen place ピラティス 恵比寿スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '渋谷区',
            streetAddress: '広尾1-15-3 増田ビル4階',
            postalCode: '150-0012',
          },
          telephone: '03-6277-4439',
          url: 'https://www.zenplace.co.jp/studios/basipilates-ebisu',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.71194',
            latitude: '35.6485',
          },
        };
      }
      if (this.studio.studio_id === 90) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/basipilates-yoyogiuehara',
          name: 'zen place ピラティス 代々木上原スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '渋谷区',
            streetAddress: '上原1-24-3 コリドール大川3階',
            postalCode: '151-0064',
          },
          telephone: '03-6804-8733',
          url: 'https://www.zenplace.co.jp/studios/basipilates-yoyogiuehara',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.68126',
            latitude: '35.66873',
          },
        };
      }
      if (this.studio.studio_id === 34) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-gakudai',
          name: 'zen place ピラティス&ヨガ 学芸大学スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '目黒区',
            streetAddress: '鷹番3－14－14 サーカス学芸大学B1',
            postalCode: '152-0001',
          },
          telephone: '03-6412-7366',
          url: 'https://www.zenplace.co.jp/studios/pilates-gakudai',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.68369',
            latitude: '35.62962',
          },
        };
      }
      if (this.studio.studio_id === 36) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/strong-gakudai',
          name: 'ホットヨガスタジオ zen place ホットヨガ 学芸大学店',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '目黒区',
            streetAddress: '鷹番3-14-14 サーカス学芸大学B1階',
            postalCode: '152-0004',
          },
          telephone: '03-6412-7366',
          url: 'https://www.zenplace.co.jp/studios/strong-gakudai',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/811cb96.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.68369',
            latitude: '35.62962',
          },
        };
      }
      if (this.studio.studio_id === 120) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/basipilates-toritsudai',
          name: 'zen place ピラティス 都立大学スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '目黒区',
            streetAddress: '八雲1-4-11 都立大八雲マンション201',
            postalCode: '152-0023',
          },
          telephone: '03-5726-9700',
          url: 'https://www.zenplace.co.jp/studios/basipilates-toritsudai',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.67464',
            latitude: '35.6182',
          },
        };
      }
      if (this.studio.studio_id === 183) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/basipilates-jiyugaoka',
          name: 'zen place ピラティス 自由が丘スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '目黒区',
            streetAddress: '自由が丘2-2-12 リバティコート橋本B1-A号室',
            postalCode: '152-0035',
          },
          telephone: '03-6421-1063',
          url: 'https://www.zenplace.co.jp/studios/basipilates-jiyugaoka',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.67075',
            latitude: '35.60461',
          },
        };
      }
      if (this.studio.studio_id === 38) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/strong-jiyugaoka',
          name: 'ホットヨガスタジオ zen place ホットヨガ 自由が丘店',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '目黒区',
            streetAddress: '自由が丘2-9-15 中村ビルB1階',
            postalCode: '152-0035',
          },
          telephone: '03-5726-8900',
          url: 'https://www.zenplace.co.jp/studios/strong-jiyugaoka',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/811cb96.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.66704',
            latitude: '35.61027',
          },
        };
      }
      if (this.studio.studio_id === 1) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/basipilates-nakameguro',
          name: 'zen place ピラティス 中目黒スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '目黒区',
            streetAddress: '青葉台2-20-14 青和ビル3階',
            postalCode: '153-0042',
          },
          telephone: '03-6805-6044',
          url: 'https://www.zenplace.co.jp/studios/basipilates-nakameguro',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.69386',
            latitude: '35.64846',
          },
        };
      }
      if (this.studio.studio_id === 7) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/basipilates-sancha',
          name: 'zen place ピラティス 三軒茶屋スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '世田谷区',
            streetAddress: '三軒茶屋2-15-8 ファッションビル第1 5階',
            postalCode: '154-0024',
          },
          telephone: '03-5787-8955',
          url: 'https://www.zenplace.co.jp/studios/basipilates-sancha',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.66867',
            latitude: '35.64285',
          },
        };
      }
      if (this.studio.studio_id === 3) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/basipilates-shimokita',
          name: 'zen place ピラティス 下北沢スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '世田谷区',
            streetAddress: '北沢2-26-3 Nビル1階',
            postalCode: '155-0031',
          },
          telephone: '03-3868-0202',
          url: 'https://www.zenplace.co.jp/studios/basipilates-shimokita',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.66638',
            latitude: '35.66233',
          },
        };
      }
      if (this.studio.studio_id === 171) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/basipilates-reformer-shimokita',
          name: 'zen place ピラティス 下北沢リフォーマー専門スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '世田谷区',
            streetAddress: '北沢2-28-7 エルフェアシティ2階',
            postalCode: '155-0031',
          },
          telephone: '03-6416-8167',
          url: 'https://www.zenplace.co.jp/studios/basipilates-reformer-shimokita',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.66591',
            latitude: '35.66335',
          },
        };
      }
      if (this.studio.studio_id === 191) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/yoga-shimokita',
          name: 'zen place ヨガ 下北沢スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '世田谷区',
            streetAddress: '北沢3-21-2 TOHYAMAビル2階',
            postalCode: '155-0031',
          },
          telephone: '03-5738-8030',
          url: 'https://www.zenplace.co.jp/studios/yoga-shimokita',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/811cb96.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.66916',
            latitude: '35.66375',
          },
        };
      }
      if (this.studio.studio_id === 60) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-kyodo',
          name: 'zen place ピラティス 経堂スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '世田谷区',
            streetAddress: '宮坂3-13-1 経堂オリオン2階',
            postalCode: '156-0051',
          },
          telephone: '03-6413-6677',
          url: 'https://www.zenplace.co.jp/studios/pilates-kyodo',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.63744',
            latitude: '35.6529',
          },
        };
      }
      if (this.studio.studio_id === 144) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/basipilates-karasuyama',
          name: 'zen place ピラティス 千歳烏山スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '世田谷区',
            streetAddress: '南烏山4-12-10 フロンティアビル5階',
            postalCode: '157-0062',
          },
          telephone: '03-6382-9300',
          url: 'https://www.zenplace.co.jp/studios/basipilates-karasuyama',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.60106',
            latitude: '35.66922',
          },
        };
      }
      if (this.studio.studio_id === 213) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-seijo',
          name: 'zen place ピラティス 成城学園前スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '世田谷区',
            streetAddress: '成城 2-36-6 サンク成城ビル 2階',
            postalCode: '157-0066',
          },
          telephone: '03-6411-1148',
          url: 'https://www.zenplace.co.jp/studios/pilates-seijo',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.600661',
            latitude: '35.639652',
          },
        };
      }
      if (this.studio.studio_id === 8) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/basipilates-reformer-jiyugaoka',
          name: 'zen place ピラティス 自由が丘 リフォーマー専門スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '世田谷区',
            streetAddress: '奥沢6-33-14 第一大塚ビル201-202',
            postalCode: '158-0083',
          },
          telephone: '03-6432-2720',
          url: 'https://www.zenplace.co.jp/studios/basipilates-reformer-jiyugaoka',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.66606',
            latitude: '35.60607',
          },
        };
      }
      if (this.studio.studio_id === 170) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/basipilates-jiyugaoka',
          name: 'zen place ピラティス 自由が丘スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '世田谷区',
            streetAddress: '奥沢5-14-31 土屋ビル2階',
            postalCode: '158-0083',
          },
          telephone: '03-6421-2810',
          url: 'https://www.zenplace.co.jp/studios/basipilates-jiyugaoka',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.67075',
            latitude: '35.60461',
          },
        };
      }
      if (this.studio.studio_id === 9) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/basipilates-futako',
          name: 'zen place ピラティス 二子玉川スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '世田谷区',
            streetAddress: '玉川3丁目20-10 メリス玉川Part2',
            postalCode: '158-0094',
          },
          telephone: '03-6411-7622',
          url: 'https://www.zenplace.co.jp/studios/basipilates-futako',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.62598',
            latitude: '35.61541',
          },
        };
      }
      if (this.studio.studio_id === 193) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/yoga-futako',
          name: 'zen place ヨガ 二子玉川スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '世田谷区',
            streetAddress: '玉川3丁目7-1 新二子玉川ビル4階',
            postalCode: '158-0094',
          },
          telephone: '03-5797-9760',
          url: 'https://www.zenplace.co.jp/studios/yoga-futako',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/811cb96.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.62665',
            latitude: '35.61322',
          },
        };
      }
      if (this.studio.studio_id === 11) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/basipilates-youga',
          name: 'zen place ピラティス 用賀スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '世田谷区',
            streetAddress: '用賀4-3-3 ブァイデビル3階',
            postalCode: '158-0097',
          },
          telephone: '03-5797-9015',
          url: 'https://www.zenplace.co.jp/studios/basipilates-youga',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.63466',
            latitude: '35.62719',
          },
        };
      }
      if (this.studio.studio_id === 37) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-shinjuku',
          name: 'zen place ピラティス 新宿南口（新宿）スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '新宿区',
            streetAddress: '新宿4‐1‐22 新宿コムロビル2階',
            postalCode: '160-0022',
          },
          telephone: '03-6457-4688',
          url: 'https://www.zenplace.co.jp/studios/pilates-shinjuku',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.70256',
            latitude: '35.68889',
          },
        };
      }
      if (this.studio.studio_id === 6) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/basipilates-shinjuku',
          name: 'zen place ピラティス 新宿スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '新宿区',
            streetAddress: '西新宿7-8-13 栗原ビル5階',
            postalCode: '160-0023',
          },
          telephone: '03-6279-1930',
          url: 'https://www.zenplace.co.jp/studios/basipilates-shinjuku',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.69792',
            latitude: '35.69586',
          },
        };
      }
      if (this.studio.studio_id === 53) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-kagurazaka',
          name: 'zen place ピラティス 神楽坂スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '新宿区',
            streetAddress: '神楽坂3丁目6 丸岡ビル3階',
            postalCode: '162-0825',
          },
          telephone: '03-5579-8681',
          url: 'https://www.zenplace.co.jp/studios/pilates-kagurazaka',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.73962',
            latitude: '35.70101',
          },
        };
      }
      if (this.studio.studio_id === 49) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-asagaya',
          name: 'zen place ピラティス 阿佐ヶ谷スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '杉並区',
            streetAddress: '阿佐ヶ谷南3-1-29 堀野ビル4階',
            postalCode: '166-0004',
          },
          telephone: '03-6915-1130',
          url: 'https://www.zenplace.co.jp/studios/pilates-asagaya',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.63562',
            latitude: '35.70061',
          },
        };
      }
      if (this.studio.studio_id === 17) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-ogikubo',
          name: 'zen place ピラティス 荻窪スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '杉並区',
            streetAddress: '天沼3-3-7 荻窪駅前第24大京ビル3階',
            postalCode: '167-0032',
          },
          telephone: '03-6279-9585',
          url: 'https://www.zenplace.co.jp/studios/pilates-ogikubo',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.62064',
            latitude: '35.70567',
          },
        };
      }
      if (this.studio.studio_id === 124) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-nishiogi',
          name: 'zen place ピラティス 西荻窪スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '杉並区',
            streetAddress: '西荻北3-3-1 イーストビル301',
            postalCode: '167-0042',
          },
          telephone: '03-6913-8108',
          url: 'https://www.zenplace.co.jp/studios/pilates-nishiogi',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.60675',
            latitude: '35.70629',
          },
        };
      }
      if (this.studio.studio_id === 123) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-hamadayama',
          name: 'zen place ピラティス 浜田山スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '杉並区',
            streetAddress: '浜田山2-20-16 2階',
            postalCode: '168-0065',
          },
          telephone: '03-6379-6733',
          url: 'https://www.zenplace.co.jp/studios/pilates-hamadayama',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.62741',
            latitude: '35.68127',
          },
        };
      }
      if (this.studio.studio_id === 45) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-takadanobaba',
          name: 'zen place ピラティス 高田馬場スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '新宿区',
            streetAddress: '高田馬場4-8-4 ORAGAビル7A',
            postalCode: '169-0075',
          },
          telephone: '03-6304-0662',
          url: 'https://www.zenplace.co.jp/studios/pilates-takadanobaba',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.70341',
            latitude: '35.71358',
          },
        };
      }
      if (this.studio.studio_id === 15) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-ikebukuro',
          name: 'zen place ピラティス 池袋スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '豊島区',
            streetAddress: '南池袋2-27-5 カテイビル6階',
            postalCode: '171-0022',
          },
          telephone: '03-6915-2360',
          url: 'https://www.zenplace.co.jp/studios/pilates-ikebukuro',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.71388',
            latitude: '35.72849',
          },
        };
      }
      if (this.studio.studio_id === 212) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-kichijoji',
          name: 'zen place ピラティス 吉祥寺スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '武蔵野市',
            streetAddress: '吉祥寺本町 1-4-11 吉祥寺ナインビル3F',
            postalCode: '180-0004',
          },
          telephone: '0422-26-7642',
          url: 'https://www.zenplace.co.jp/studios/pilates-kichijoji',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.57635',
            latitude: '35.70354',
          },
        };
      }
      if (this.studio.studio_id === 35) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/yoga-kichijoji',
          name: 'zen place ヨガ 吉祥寺スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '武蔵野市',
            streetAddress: '吉祥寺本町 １丁目13-3 タケモトビル 4F1号室',
            postalCode: '180-0004',
          },
          telephone: '0422-27-1531',
          url: 'https://www.zenplace.co.jp/studios/yoga-kichijoji',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/811cb96.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.58099',
            latitude: '35.70522',
          },
        };
      }
      if (this.studio.studio_id === 158) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-chofu',
          name: 'zen place ピラティス 調布スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '調布市',
            streetAddress: '布田1丁目50-1 フジヨシビル6階',
            postalCode: '182-0024',
          },
          telephone: '042-444-8607',
          url: 'https://www.zenplace.co.jp/studios/pilates-chofu',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.54665',
            latitude: '35.65205',
          },
        };
      }
      if (this.studio.studio_id === 127) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-fuchu',
          name: 'zen place ピラティス 府中スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '府中市',
            streetAddress: '宮町2-15-13 第15三ツ木ビル3階',
            postalCode: '183-0023',
          },
          telephone: '042-306-6730',
          url: 'https://www.zenplace.co.jp/studios/pilates-fuchu',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.48106',
            latitude: '35.66977',
          },
        };
      }
      if (this.studio.studio_id === 129) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-kokubunji',
          name: 'zen place ピラティス 国分寺スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '国分寺市',
            streetAddress: '本町2-2-14 国分寺セントクオークビル4階',
            postalCode: '185-0012',
          },
          telephone: '042-313-9420',
          url: 'https://www.zenplace.co.jp/studios/pilates-kokubunji',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.48187',
            latitude: '35.70062',
          },
        };
      }
      if (this.studio.studio_id === 128) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-kunitachi',
          name: 'zen place ピラティス 国立スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '国立市',
            streetAddress: '東1丁目15-16 優和国立ビル2F',
            postalCode: '186-0002',
          },
          telephone: '042-843-0321',
          url: 'https://www.zenplace.co.jp/studios/pilates-kunitachi',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.44771',
            latitude: '35.69713',
          },
        };
      }
      if (this.studio.studio_id === 130) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-tachikawa',
          name: 'zen place ピラティス 立川スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '東京都',
            addressLocality: '立川市',
            streetAddress: '曙町2-32-2 中山本社ビル7階',
            postalCode: '190-0012',
          },
          telephone: '042-595-9470',
          url: 'https://www.zenplace.co.jp/studios/pilates-tachikawa',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.41595',
            latitude: '35.70173',
          },
        };
      }
      if (this.studio.studio_id === 121) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-kawasaki',
          name: 'zen place ピラティス 川崎スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '神奈川県',
            addressLocality: '川崎市',
            streetAddress: '川崎区南町16-7 かわさきスカイビル3階BC号室',
            postalCode: '210-0015',
          },
          telephone: '044-280-7700',
          url: 'https://www.zenplace.co.jp/studios/pilates-kawasaki',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.70119',
            latitude: '35.52703',
          },
        };
      }
      if (this.studio.studio_id === 13) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-mizonokuchi',
          name: 'zen place ピラティス 溝の口スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '神奈川県',
            addressLocality: '川崎市高',
            streetAddress: '津区下作延2-9-10 関口第2ビル3階',
            postalCode: '213-0033',
          },
          telephone: '044-272-7551',
          url: 'https://www.zenplace.co.jp/studios/pilates-mizonokuchi',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.60852',
            latitude: '35.5991',
          },
        };
      }
      if (this.studio.studio_id === 29) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/basipilates-yokohama',
          name: 'zen place ピラティス 横浜スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '神奈川県',
            addressLocality: '横浜市',
            streetAddress: '西区北幸2丁目7-10 高見澤ビル9階',
            postalCode: '220-0004',
          },
          telephone: '045-548-9860',
          url: 'https://www.zenplace.co.jp/studios/basipilates-yokohama',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.61937',
            latitude: '35.46708',
          },
        };
      }
      if (this.studio.studio_id === 32) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/yoga-yokohama',
          name: 'zen place ヨガ 横浜スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '神奈川県',
            addressLocality: '横浜市',
            streetAddress: '西区北幸2-1-22 永岡ビル2階',
            postalCode: '220-0004',
          },
          telephone: '045-548-9344',
          url: 'https://www.zenplace.co.jp/studios/yoga-yokohama',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/811cb96.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.61789',
            latitude: '35.46618',
          },
        };
      }
      if (this.studio.studio_id === 166) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-yokohama',
          name: 'zen place ピラティス 横浜スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '神奈川県',
            addressLocality: '横浜市',
            streetAddress: '西区南幸2-19-4 南幸折目ビル8階',
            postalCode: '220-0005',
          },
          telephone: '045-620-7580',
          url: 'https://www.zenplace.co.jp/studios/pilates-yokohama',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.61597',
            latitude: '35.46422',
          },
        };
      }
      if (this.studio.studio_id === 125) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-motosumiyoshi',
          name: 'zen place ピラティス 元住吉スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '神奈川県',
            addressLocality: '川崎市',
            streetAddress: '中原区木月2-3-35 住吉名店センター301',
            postalCode: '220-0005',
          },
          telephone: '044-982-3836',
          url: 'https://www.zenplace.co.jp/studios/pilates-motosumiyoshi',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.65489',
            latitude: '35.56501',
          },
        };
      }
      if (this.studio.studio_id === 73) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-tsunashima',
          name: 'zen place ピラティス 綱島スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '神奈川県',
            addressLocality: '横浜市港北区',
            streetAddress: '綱島西2-6-17 黒川ビル3階',
            postalCode: '223-0053',
          },
          telephone: '045-947-3301',
          url: 'https://www.zenplace.co.jp/studios/pilates-tsunashima',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.63258',
            latitude: '35.53633',
          },
        };
      }
      if (this.studio.studio_id === 145) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/basipilates-hiyoshi',
          name: 'zen place ピラティス 日吉スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '神奈川県',
            addressLocality: '横浜市港北区',
            streetAddress: '日吉2丁目2-14 セイワビルⅡ202',
            postalCode: '223-0061',
          },
          telephone: '045-620-2185',
          url: 'https://www.zenplace.co.jp/studios/basipilates-hiyoshi',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.63918',
            latitude: '35.55389',
          },
        };
      }
      if (this.studio.studio_id === 68) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/basipilates-hiyoshi',
          name: 'zen place ピラティス 青葉台スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '神奈川県',
            addressLocality: '横浜市青葉区',
            streetAddress: '青葉台2-10-1',
            postalCode: '227-0062',
          },
          telephone: '045-530-0019',
          url: 'https://www.zenplace.co.jp/studios/basipilates-hiyoshi',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.51822',
            latitude: '35.54549',
          },
        };
      }
      if (this.studio.studio_id === 113) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/basipilates-motomachi',
          name: 'zen place ピラティス 横浜元町スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '神奈川県',
            addressLocality: '横浜市中区',
            streetAddress: '山下町123-1 横浜クリード8階',
            postalCode: '231-0023',
          },
          telephone: '045-232-4310',
          url: 'https://www.zenplace.co.jp/studios/basipilates-motomachi',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '139.64728',
            latitude: '35.44195',
          },
        };
      }
      if (this.studio.studio_id === 192) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-meieki',
          name: 'zen place ピラティス 名駅スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '愛知県',
            addressLocality: '名古屋市中村区',
            streetAddress: '名駅4丁目26-10 名駅ファーストビル6B',
            postalCode: '450-0002',
          },
          telephone: '052-526-3825',
          url: 'https://www.zenplace.co.jp/studios/pilates-meieki',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '136.88681',
            latitude: '35.16822',
          },
        };
      }
      if (this.studio.studio_id === 153) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-sakae',
          name: 'zen place ピラティス 栄スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '愛知県',
            addressLocality: '名古屋市中区',
            streetAddress: '栄2-4-12 TOSHIN HONMACHIビル5階',
            postalCode: '460-0008',
          },
          telephone: '052-201-7560',
          url: 'https://www.zenplace.co.jp/studios/pilates-sakae',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '136.89491',
            latitude: '35.16542',
          },
        };
      }
      if (this.studio.studio_id === 40) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-umeda',
          name: 'zen place ピラティス 梅田スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '大阪府',
            addressLocality: '大阪市北区',
            streetAddress: '梅田1-12-17 梅田スクエアビル10階',
            postalCode: '530-0001',
          },
          telephone: '06-6225-8792',
          url: 'https://www.zenplace.co.jp/studios/pilates-umeda',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '135.49385',
            latitude: '34.69857',
          },
        };
      }
      // if (this.studio.studio_id === 22) {
      //   return {
      //     '@context': 'https://schema.org',
      //     '@type': 'LocalBusiness',
      //     '@id': 'https://www.zenplace.co.jp/studios/yoga-umeda',
      //     name: 'zen place ヨガ 梅田スタジオ',
      //     address: {
      //       '@type': 'PostalAddress',
      //       addressCountry: 'JP',
      //       addressRegion: '大阪府',
      //       addressLocality: '大阪市北区',
      //       streetAddress: '梅田1-12-17 梅田スクエアビルB2階',
      //       postalCode: '530-0001',
      //     },
      //     telephone: '06-6346-3200',
      //     url: 'https://www.zenplace.co.jp/studios/yoga-umeda',
      //     logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
      //     image: 'https://www.zenplace.co.jp/_nuxt/img/811cb96.webp',
      //     geo: {
      //       '@type': 'GeoCoordinates',
      //       longitude: '135.49858',
      //       latitude: '34.70063',
      //     },
      //   };
      // }
      if (this.studio.studio_id === 160) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-minamimorimachi',
          name: 'zen place ピラティス 南森町スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '大阪府',
            addressLocality: '大阪市北区',
            streetAddress: '天神橋2-3-16 アーク南森町ビル4階',
            postalCode: '530-0041',
          },
          telephone: '06-6358-3711',
          url: 'https://www.zenplace.co.jp/studios/pilates-minamimorimachi',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '135.51155',
            latitude: '34.70766',
          },
        };
      }
      if (this.studio.studio_id === 42) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/strong-osaka',
          name: 'ホットヨガスタジオ zen place ホットヨガ 大阪本町店',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '大阪府',
            addressLocality: '大阪市中央区',
            streetAddress: '本町2-3-4 アソルティ本町ビル3階',
            postalCode: '541-0053',
          },
          telephone: '06-4963-2414',
          url: 'https://www.zenplace.co.jp/studios/strong-osaka',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/811cb96.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '135.50469',
            latitude: '34.68348',
          },
        };
      }
      if (this.studio.studio_id === 48) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-shinsaibashi',
          name: 'zen place ピラティス 心斎橋スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '大阪府',
            addressLocality: '大阪市中央区',
            streetAddress: '西心斎橋1-4-5 御堂筋ビルディング8階',
            postalCode: '542-0086',
          },
          telephone: '06-4708-6160',
          url: 'https://www.zenplace.co.jp/studios/pilates-shinsaibashi',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '135.49988',
            latitude: '34.67313',
          },
        };
      }
      if (this.studio.studio_id === 47) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/yoga-shinsaibashi',
          name: 'zen place ヨガ 心斎橋スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '大阪府',
            addressLocality: '大阪市中央区',
            streetAddress: '西心斎橋1-4-5 御堂筋ビルディング8階',
            postalCode: '542-0086',
          },
          telephone: '06-4708-6150',
          url: 'https://www.zenplace.co.jp/studios/yoga-shinsaibashi',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/811cb96.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '135.49988',
            latitude: '34.67313',
          },
        };
      }
      if (this.studio.studio_id === 77) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-tennoji',
          name: 'zen place ピラティス 天王寺スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '大阪府',
            addressLocality: '大阪市阿倍野区',
            streetAddress: '阿倍野筋1-3-15 阿倍野共同ビル6階',
            postalCode: '545-0052',
          },
          telephone: '06-6627-2828',
          url: 'https://www.zenplace.co.jp/studios/pilates-tennoji',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '135.51297',
            latitude: '34.64521',
          },
        };
      }
      if (this.studio.studio_id === 119) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-toyonaka',
          name: 'zen place ピラティス 豊中スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '大阪府',
            addressLocality: '豊中市',
            streetAddress: '本町3丁目1−57 ルミエール豊中5階',
            postalCode: '560-0021',
          },
          telephone: '06-4866-5548',
          url: 'https://www.zenplace.co.jp/studios/pilates-toyonaka',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '135.46118',
            latitude: '34.78873',
          },
        };
      }
      if (this.studio.studio_id === 28) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-senrichuo',
          name: 'zen place ピラティス 千里中央スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '大阪府',
            addressLocality: '豊中市',
            streetAddress: '新千里東町1-4-2 千里ライフサイエンスセンタービル2階',
            postalCode: '560-0082',
          },
          telephone: '06-6873-2380',
          url: 'https://www.zenplace.co.jp/studios/pilates-senrichuo',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/0e65121.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '135.496',
            latitude: '34.81205',
          },
        };
      }
      if (this.studio.studio_id === 50) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/yoga-senrichuo',
          name: 'zen place ヨガ 千里中央スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '大阪府',
            addressLocality: '豊中市',
            streetAddress: '新千里東町1-4-2 千里ライフサイエンスセンタービル2階',
            postalCode: '560-0082',
          },
          telephone: '06-6155-3636',
          url: 'https://www.zenplace.co.jp/studios/yoga-senrichuo',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/811cb96.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '135.496',
            latitude: '34.81205',
          },
        };
      }
      if (this.studio.studio_id === 70) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-esaka',
          name: 'zen place ピラティス 江坂スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '大阪府',
            addressLocality: '吹田市',
            streetAddress: '豊津町9-44 ハートランド江坂5階',
            postalCode: '564-0051',
          },
          telephone: '06-6155-6815',
          url: 'https://www.zenplace.co.jp/studios/pilates-esaka',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/811cb96.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '135.49644',
            latitude: '34.75872',
          },
        };
      }
      if (this.studio.studio_id === 56) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-takatsuki',
          name: 'zen place ピラティス 高槻スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '大阪府',
            addressLocality: '高槻市',
            streetAddress: '紺屋町6-5 イマホリビル3階',
            postalCode: '569-0804',
          },
          telephone: '072-669-7612',
          url: 'https://www.zenplace.co.jp/studios/pilates-takatsuki',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/811cb96.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '135.61906',
            latitude: '34.84983',
          },
        };
      }
      if (this.studio.studio_id === 58) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-kyoto',
          name: 'zen place ピラティス 京都スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '京都府',
            addressLocality: '京都市下京区',
            streetAddress: '四条通り室町東入函谷鉾町79 ヤサカ四条烏丸ビル',
            postalCode: '600-8009',
          },
          telephone: '075-708-2661',
          url: 'https://www.zenplace.co.jp/studios/pilates-kyoto',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/811cb96.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '135.76038',
            latitude: '35.00372',
          },
        };
      }
      if (this.studio.studio_id === 55) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-sannomiya',
          name: 'zen place ピラティス 三宮スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '兵庫県',
            addressLocality: '神戸市中央区',
            streetAddress: '三宮町1-2-1 三神ビルディング601',
            postalCode: '650-0021',
          },
          telephone: '078-335-6860',
          url: 'https://www.zenplace.co.jp/studios/pilates-sannomiya',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/811cb96.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '135.19427',
            latitude: '34.6914',
          },
        };
      }
      if (this.studio.studio_id === 59) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/yoga-sannomiya',
          name: 'zen place ヨガ 三宮スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '兵庫県',
            addressLocality: '神戸市中央区',
            streetAddress: '三宮町1-3-15 京町筋安田ビル4階',
            postalCode: '650-0021',
          },
          telephone: '078-391-4433',
          url: 'https://www.zenplace.co.jp/studios/yoga-sannomiya',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/811cb96.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '135.19356',
            latitude: '34.69125',
          },
        };
      }
      if (this.studio.studio_id === 126) {
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.zenplace.co.jp/studios/pilates-tsukaguchi',
          name: 'zen place ピラティス 塚口スタジオ',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '兵庫県',
            addressLocality: '尼崎市',
            streetAddress: '塚口町1丁目16−6 ハイネススガヤビル4階',
            postalCode: '661-0002',
          },
          telephone: '06-6423-7268',
          url: 'https://www.zenplace.co.jp/studios/pilates-tsukaguchi',
          logo: 'https://www.zenplace.co.jp/_nuxt/img/a62af6b.webp',
          image: 'https://www.zenplace.co.jp/_nuxt/img/811cb96.webp',
          geo: {
            '@type': 'GeoCoordinates',
            longitude: '135.4136',
            latitude: '34.75488',
          },
        };
      }

      return {

      };
    },

    prefecture() {
      const pref = _.find(this.$store.state.prefectures, (p) => p.prefecture_id === this.studio.prefecture_id);
      if (pref) {
        return pref.prefecture_name;
      }
      return '';
    },

    // meta description
    metaStudioDescription() {
      const brandTypes = (this.studio.brand_type || '').split(',');

      let description = '';
      // This is not actual brandid but a special case where yoga studio changed to strong
      //       if (brandTypes.includes('strong') && this.studio.brand_id === 4) {
      //         description += `進化系ホットヨガなら通い続けたいヨガスタジオ No.1を獲得のzen place strong
      // ${this.studio.studio_name}
      // へ！ホットな環境で行うHIITヨガやピラティス、エンパワーヨガは、エネルギーに満ちたレッスン。
      // 初心者も安心の体験レッスンでは、やり切って目覚める感覚を実感できます。
      // 緊張と弛緩で自律神経の揺らぎを作り、心身に変化を生み出します。`;
      //       } else if (brandTypes.includes('strong')) {
      //         description += `進化系ホットヨガなら、通い続けたいヨガスタジオ No.1を獲得のzen place strong
      // ${this.studio.studio_name}
      // へ！26のポーズで行う伝統的なヨガは、エネルギーに満ちたレッスン。
      // 効率的にエネルギーを消費しやすい身体を作り、
      // 自律神経を整え心身に変化を生み出します。`;

      if (this.studio.studio_id === 23) {
        description += '東銀座駅 徒歩1分、銀座駅A12出口、銀座一丁目駅11出口徒歩5分の男女兼用ホットヨガスタジオ。伝統的なホットヨガにホットピラティス、HIITなど選べるレッスン。近隣にある姉妹店の常温ヨガスタジオやピラティススタジオも利用できます。';
      } else if (this.studio.studio_id === 30) {
        description += '目黒駅 徒歩2分の男女兼用ホットヨガスタジオ。ホットヨガをメインに、ホットピラティス、HIITなど選べるレッスン。少人数制レッスンでひとりひとり丁寧に見るから初めての方も安全・安心。近隣にある姉妹店のピラティススタジオも利用できます。';
      } else if (this.studio.studio_id === 36) {
        description += '学芸大学駅 徒歩3分の男女兼用ホットヨガスタジオ。ホットヨガをメインに、ホットピラティス、HIITなど選べるレッスン。少人数制レッスンでひとりひとり丁寧に見るから初めての方も安全・安心。近隣にある姉妹店のピラティススタジオも利用できます。';
      } else if (this.studio.studio_id === 38) {
        description += '自由が丘駅 徒歩5分の男女兼用ホットヨガスタジオ。ホットヨガをメインに、ホットピラティス、HIITなど選べるレッスン。少人数制レッスンでひとりひとり丁寧に見るから初めての方も安全・安心。近隣にある姉妹店のピラティススタジオも利用できます。';
      } else if (this.studio.studio_id === 57) {
        description += '西葛西駅 徒歩1分の男女兼用ホットヨガスタジオ。ホットヨガをメインに、ホットピラティス、HIITなど選べるレッスン。少人数制レッスンでひとりひとり丁寧に見るから初めての方も安全・安心。併設のピラティススタジオも利用できます。';
      } else if (brandTypes.includes('strong')) {
        description += `伝統的なホットヨガに最新の科学、HIITの要素も取り入れ、Hotな環境で最大の効果を生み出す様々なクラスを用意。Hot Pilatesもあります。ホットヨガならzen place yoga
${this.studio.studio_name}
へ！`;
      } else if (this.studio.studio_id === 21) {
        description += '大阪駅、梅田駅 徒歩1〜7分。梅田スクエアビル地下2階のホットヨガスタジオ。少人数制レッスン、プライベートレッスンが最も充実しています。自分の心と体のつながりや変化に気づき、本格的に学べるスタジオ。併設のピラティススタジオ、常温ヨガ専門スタジオも利用できます。';
      } else if (this.studio.studio_id === 32) {
        description += '横浜駅 徒歩4分のヨガスタジオ。少人数制レッスン、プライベートレッスンが最も充実しています。自分の心と体のつながりや変化に気づき、本格的に学べるスタジオ。横浜でヨガならzen place yoga! 近隣にある姉妹店のピラティススタジオも利用できます。';
      } else if (this.studio.studio_id === 33) {
        description += '五反田駅 徒歩2分のヨガスタジオ。少人数制レッスン、プライベートレッスンが最も充実しています。自分の心と体のつながりや変化に気づき、本格的に学べるスタジオ。五反田でヨガならzen place yoga! 近隣にある姉妹店のピラティススタジオも利用できます。';
      } else if (this.studio.studio_id === 35) {
        description += '吉祥寺駅 徒歩1分のヨガスタジオ。少人数制レッスン、プライベートレッスンが最も充実しています。自分の心と体のつながりや変化に気づき、本格的に学べるスタジオ。吉祥寺でヨガならzen place yoga！近隣にある姉妹店のピラティススタジオも利用できます。';
      } else if (this.studio.studio_id === 47) {
        description += '心斎橋駅 徒歩3分のヨガスタジオ。少人数制レッスン、プライベートレッスンが最も充実しています。自分の心と体のつながりや変化に気づき、本格的に学べるスタジオ。心斎橋でヨガならzen place yoga! 併設のピラティススタジオも利用できます。';
      } else if (this.studio.studio_id === 50) {
        description += '千里中央駅 徒歩3分のヨガスタジオ。少人数制レッスン、プライベートレッスンが最も充実しています。自分の心と体のつながりや変化に気づき、本格的に学べるスタジオ。千里中央でヨガならzen place yoga! 併設のピラティススタジオも利用できます。';
      } else if (this.studio.studio_id === 59) {
        description += '三ノ宮駅 徒歩3分のヨガスタジオ。少人数制レッスン、プライベートレッスンが最も充実しています。自分の心と体のつながりや変化に気づき、本格的に学べるスタジオ。三宮でヨガならzen place yoga！近隣にある姉妹店のピラティススタジオも利用できます。';
      } else if (this.studio.studio_id === 62) {
        description += '銀座駅 徒歩1分のヨガスタジオ。少人数制レッスン、プライベートレッスンが最も充実しています。自分の心と体のつながりや変化に気づき、本格的に学べるスタジオ。銀座でヨガならzen place yoga！近隣にある姉妹店のピラティススタジオやホットヨガ専門スタジオも利用できます。';
      } else if (this.studio.studio_id === 92) {
        description += '人形町駅 徒歩1分のヨガスタジオ。少人数制レッスン、プライベートレッスンが最も充実しています。自分の心と体のつながりや変化に気づき、本格的に学べるスタジオ。人形町でヨガならzen place yoga! 近隣にある姉妹店のピラティススタジオも利用できます。';
      } else if (this.studio.studio_id === 114) {
        description += '茗荷谷駅 徒歩1分のヨガスタジオ。少人数制レッスン、プライベートレッスンが最も充実しています。自分の心と体のつながりや変化に気づき、本格的に学べるスタジオ。茗荷谷でヨガならzen place yoga! 近隣にある姉妹店のピラティススタジオも利用できます。';
      } else if (this.studio.studio_id === 191) {
        description += '下北沢駅 徒歩3分のヨガスタジオ。少人数制レッスン、プライベートレッスンが最も充実しています。自分の心と体のつながりや変化に気づき、本格的に学べるスタジオ。下北沢でヨガならzen place yoga! 近隣にある姉妹店のピラティススタジオも利用できます。';
      } else if (this.studio.studio_id === 193) {
        description += '二子玉川駅 徒歩1分のヨガスタジオ。少人数制レッスン、プライベートレッスンが最も充実しています。自分の心と体のつながりや変化に気づき、本格的に学べるスタジオ。二子玉川でヨガならzen place yoga! 近隣にある姉妹店のピラティススタジオも利用できます。';
      } else if (brandTypes.includes('yoga')) {
        description += `${this.studio.access_1}のヨガスタジオ。少人数制レッスン、プライベートレッスンが最も充実しています。自分の心と体のつながりや変化に気づき、本格的に学べるスタジオ。${this.studio.studio_name}でヨガならzen place yoga！近隣にある姉妹店のピラティススタジオも利用できます。`;
      // } else if (brandTypes.includes('pilates') || brandTypes.includes('basi')) {
      } else if (this.studio.studio_id === 1) {
        description += '中目黒駅・池尻大橋駅 徒歩7分のピラティス専門スタジオ。少人数制マットとマシンピラティスのグループレッスン、個人レッスンも。男性OK、見学もお気軽に。近隣にある姉妹店のヨガスタジオも利用可能。中目黒・池尻大橋でピラティスならzen place pilates!';
      } else if (this.studio.studio_id === 2) {
        description += '銀座駅 徒歩4分、銀座1丁目駅 徒歩1分、東銀座駅 徒歩3分のピラティス専門スタジオ。少人数制マットとマシンピラティスのグループレッスン、個人レッスンも。男性OK、見学もお気軽に。近隣にある姉妹店のヨガスタジオも利用可能。銀座でピラティスならzen place pilates!';
      } else if (this.studio.studio_id === 3) {
        description += '井の頭線下北沢駅すぐ、小田急線下北沢駅 徒歩2分のピラティス専門スタジオ。少人数制マットとマシンピラティスのグループレッスン、個人レッスンも。男性OK、見学もお気軽に。近隣にある姉妹店のヨガスタジオも利用可能。下北沢でピラティスならzen place pilates!';
      } else if (this.studio.studio_id === 5) {
        description += '六本木駅 徒歩2分。マットとマシンピラティスの個人レッスン専門スタジオ。男性OK、見学もお気軽に。近隣にある姉妹店のピラティスとヨガスタジオも利用可能。六本木でピラティスならzen place pilates!';
      } else if (this.studio.studio_id === 6) {
        description += '新宿駅西口から徒歩6分、西武新宿駅徒歩4分のピラティス専門スタジオ。少人数制マットとマシンピラティスのグループレッスン、個人レッスンも。男性OK、見学もお気軽に。近隣にある姉妹店のヨガスタジオも利用可能。新宿でピラティスならzen place pilates!';
      } else if (this.studio.studio_id === 7) {
        description += '三軒茶屋駅 徒歩5分のピラティス専門スタジオ。少人数制マットとマシンピラティスのグループレッスン、個人レッスンも。男性OK、見学もお気軽に。近隣にある姉妹店のヨガスタジオも利用可能。三軒茶屋でピラティスならzen place pilates!';
      } else if (this.studio.studio_id === 8) {
        description += '自由が丘駅 徒歩4分、奥沢駅 徒歩1分のピラティス専門スタジオ。少人数制マットとマシンピラティスのグループレッスン、個人レッスンも。男性OK、見学もお気軽に。近隣にある姉妹店のヨガスタジオも利用可能。自由が丘でピラティスならzen place pilates!';
      } else if (this.studio.studio_id === 9) {
        description += '二子玉川駅 徒歩4分のピラティス専門スタジオ。少人数制マットとマシンピラティスのグループレッスン、個人レッスンも。男性OK、見学もお気軽に。近隣にある姉妹店のヨガスタジオも利用可能。二子玉川でピラティスならzen place pilates!';
      } else if (this.studio.studio_id === 10) {
        description += '渋谷駅東口 徒歩4分のピラティス専門スタジオ。少人数制マットとマシンピラティスのグループレッスン、個人レッスンも。男性OK、見学もお気軽に。近隣にある姉妹店のヨガスタジオも利用可能。渋谷でピラティスならzen place pilates!';
      } else if (this.studio.studio_id === 11) {
        description += '用賀駅東口 徒歩30秒のピラティス専門スタジオ。少人数制マットとマシンピラティスのグループレッスン、個人レッスンも。男性OK、見学もお気軽に。近隣にある姉妹店のヨガスタジオも利用可能。用賀でピラティスならzen place pilates!';
      } else if (this.studio.studio_id === 29) {
        description += '横浜駅 徒歩5分のピラティス専門スタジオ。少人数制マットとマシンピラティスのグループレッスン、個人レッスンも。男性OK、見学もお気軽に。近隣にある姉妹店のヨガスタジオも利用可能。横浜でピラティスならzen place pilates!';
      } else if (this.studio.studio_id === 65) {
        description += '三田駅直結。田町駅 徒歩1分のピラティス専門スタジオ。少人数制マットとマシンピラティスのグループレッスン、個人レッスンも。男性OK、見学もお気軽に。近隣にある姉妹店のヨガスタジオも利用可能。三田・田町でピラティスならzen place pilates!';
      } else if (this.studio.studio_id === 72) {
        description += '大森駅 徒歩30秒のピラティス専門スタジオ。少人数制マットとマシンピラティスのグループレッスン、個人レッスンも。男性OK、見学もお気軽に。近隣にある姉妹店のヨガスタジオも利用可能。大森でピラティスならzen place pilates!';
      } else if (this.studio.studio_id === 75) {
        description += '茗荷谷駅 徒歩6分のピラティス専門スタジオ。少人数制マットとマシンピラティスのグループレッスン、個人レッスンも。男性OK、見学もお気軽に。近隣にある姉妹店のヨガスタジオも利用可能。茗荷谷でピラティスならzen place pilates!';
      } else if (this.studio.studio_id === 90) {
        description += '代々木上原駅 徒歩2分のピラティス専門スタジオ。少人数制マットとマシンピラティスのグループレッスン、個人レッスンも。男性OK、見学もお気軽に。近隣にある姉妹店のヨガスタジオも利用可能。代々木上原でピラティスならzen place pilates!';
      } else if (this.studio.studio_id === 95) {
        description += '恵比寿駅 徒歩5分のピラティス専門スタジオ。少人数制マットとマシンピラティスのグループレッスン、個人レッスンも。男性OK、見学もお気軽に。近隣にある姉妹店のヨガスタジオも利用可能。恵比寿でピラティスならzen place pilates!';
      } else if (this.studio.studio_id === 111) {
        description += '本郷三丁目駅 徒歩1分のピラティス専門スタジオ。少人数制マットとマシンピラティスのグループレッスン、個人レッスンも。男性OK、見学もお気軽に。近隣にある姉妹店のヨガスタジオも利用可能。本御三丁目でピラティスならzen place pilates!';
      } else if (this.studio.studio_id === 112) {
        description += '目黒駅 徒歩1分のピラティス専門スタジオ。少人数制マットとマシンピラティスのグループレッスン、個人レッスンも。男性OK、見学もお気軽に。近隣にある姉妹店のヨガスタジオも利用可能。目黒でピラティスならzen place pilates!';
      } else if (this.studio.studio_id === 113) {
        description += '元町・中華街駅 徒歩3分のピラティス専門スタジオ。少人数制マットとマシンピラティスのグループレッスン、個人レッスンも。男性OK、見学もお気軽に。近隣にある姉妹店のヨガスタジオも利用可能。横浜元町でピラティスならzen place pilates!';
      } else if (this.studio.studio_id === 120) {
        description += '都立大学駅 徒歩3分のピラティス専門スタジオ。少人数制マットとマシンピラティスのグループレッスン、個人レッスンも。男性OK、見学もお気軽に。近隣にある姉妹店のヨガスタジオも利用可能。都立大学でピラティスならzen place pilates!';
      } else if (this.studio.studio_id === 144) {
        description += '千歳烏山駅 徒歩2分のピラティス専門スタジオ。少人数制マットとマシンピラティスのグループレッスン、個人レッスンも。男性OK、見学もお気軽に。近隣にある姉妹店のヨガスタジオも利用可能。千歳烏山でピラティスならzen place pilates!';
      } else if (this.studio.studio_id === 145) {
        description += '日吉駅 徒歩1分のピラティス専門スタジオ。少人数制マットとマシンピラティスのグループレッスン、個人レッスンも。男性OK、見学もお気軽に。近隣にある姉妹店のヨガスタジオも利用可能。日吉でピラティスならzen place pilates!';
      } else if (this.studio.studio_id === 146) {
        description += '麻布十番駅 徒歩1分のピラティス専門スタジオ。少人数制マットとマシンピラティスのグループレッスン、個人レッスンも。男性OK、見学もお気軽に。近隣にある姉妹店のヨガスタジオも利用可能。麻布十番でピラティスならzen place pilates!';
      } else if (this.studio.studio_id === 154) {
        description += '五反田駅 徒歩3分のピラティス専門スタジオ。少人数制マットとマシンピラティスのグループレッスン、個人レッスンも。男性OK、見学もお気軽に。近隣にある姉妹店のヨガスタジオも利用可能。五反田でピラティスならzen place pilates!';
      } else if (this.studio.studio_id === 156) {
        description += '上野駅 徒歩1分、御徒町駅 徒歩3分、湯島駅 徒歩6分のピラティス専門スタジオ。少人数制マットとマシンピラティスのグループレッスン、個人レッスンも。男性OK、見学もお気軽に。近隣にある姉妹店のヨガスタジオも利用可能。上野でピラティスならzen place pilates!';
      } else if (this.studio.studio_id === 161) {
        description += '大井町駅 徒歩3分のピラティス専門スタジオ。少人数制マットとマシンピラティスのグループレッスン、個人レッスンも。男性OK、見学もお気軽に。近隣にある姉妹店のヨガスタジオも利用可能。大井町でピラティスならzen place pilates!';
      } else if (this.studio.studio_id === 170) {
        description += '自由が丘駅 徒歩4分のピラティスリフォーマー専門スタジオ。少人数で行う「マシングループレッスン」を提供します。近隣にある姉妹店のピラティススタジオやヨガスタジオも相互利用可能。多くの男性も参加。少人数制、個別レッスンやオンラインレッスンも開催。';
      } else if (this.studio.studio_id === 171) {
        description += '下北沢駅 徒歩4分のピラティスリフォーマー専門スタジオ。少人数で行う「マシングループレッスン」を提供します。近隣にある姉妹店のピラティススタジオやヨガスタジオも相互利用可能。多くの男性も参加。少人数制、個別レッスンやオンラインレッスンも開催。';
      } else if (brandTypes.includes('basi')) {
        description += `${this.studio.access_1}のピラティス専門スタジオ。全国に100店舗以上のピラティス・ヨガ専門スタジオ。少人数制、ピラティスマシン完備、個別レッスンも開催。自分の心と体のつながりや変化に気づき、世界中の流派のピラティスが学べるスタジオ。多くの男性も参加。
${this.studio.studio_name}
でピラティスならzen place pilates！`;
      } else if (this.studio.studio_id === 37) {
        description += '新宿三丁目駅 徒歩1分、新宿駅 徒歩5分のピラティス専門スタジオ。少人数制マットとマシンピラティスのグループレッスン、個人レッスンも。男性OK、見学もお気軽に。近隣にある姉妹店のヨガスタジオも利用可能。新宿でピラティスならzen place pilates!';
      } else if (this.studio.studio_id === 40) {
        description += '東梅田駅・西梅田駅 徒歩1分、大阪駅・北新地駅・梅田駅 徒歩3分のピラティス専門スタジオ。少人数制マットとマシンピラティスのグループレッスン、個人レッスンも。男性OK、見学もお気軽に。近隣にある姉妹店のヨガスタジオも利用可能。梅田でピラティスならzen place pilates!。';
      } else if (this.studio.studio_id === 44) {
        description += '五反田駅 徒歩3分、大崎広小路駅 徒歩2分のピラティス専門スタジオ。少人数制マットとマシンピラティスのグループレッスン、個人レッスンも。男性OK、見学もお気軽に。近隣にある姉妹店のヨガスタジオも利用可能。五反田でピラティスならzen place pilates!';
      } else if (this.studio.studio_id === 48) {
        description += '心斎橋駅 徒歩3分のピラティス専門スタジオ。少人数制マットとマシンピラティスのグループレッスン、個人レッスンも。男性OK、見学もお気軽に。近隣にある姉妹店のヨガスタジオも利用可能。心斎橋でピラティスならzen place pilates!';
      } else if (this.studio.studio_id === 51) {
        description += '東銀座駅 徒歩1分のピラティス専門スタジオ。少人数制マットとマシンピラティスのグループレッスン、個人レッスンも。男性OK、見学もお気軽に。近隣にある姉妹店のヨガスタジオも利用可能。銀座でピラティスならzen place pilates!';
      } else if (this.studio.studio_id === 58) {
        description += '阪急烏丸駅 徒歩1分のピラティス専門スタジオ。少人数制マットとマシンピラティスのグループレッスン、個人レッスンも。男性OK、見学もお気軽に。近隣にある姉妹店のヨガスタジオも利用可能。京都でピラティスならzen place pilates!';
      } else if (this.studio.studio_id === 166) {
        description += '横浜駅 徒歩10分のピラティス専門スタジオ。少人数制マットとマシンピラティスのグループレッスン、個人レッスンも。男性OK、見学もお気軽に。近隣にある姉妹店のヨガスタジオも利用可能。横浜でピラティスならzen place pilates!';
      } else if (this.studio.studio_id === 183) {
        description += '自由が丘駅 徒歩4分、奥沢駅 徒歩1分のピラティス専門スタジオ。少人数制マットとマシンピラティスのグループレッスン、個人レッスンも。男性OK、見学もお気軽に。近隣にある姉妹店のヨガスタジオも利用可能。自由が丘でピラティスならzen place pilates!';
      } else if (this.studio.studio_id === 14) {
        description += '吉祥寺駅 徒歩4分のピラティス専門スタジオ。少人数制マットとマシンピラティスのグループレッスン、個人レッスンも。男性OK、見学もお気軽に。近隣にある姉妹店のヨガスタジオも利用できます。吉祥寺でピラティスならzen place pilates!';
      } else if (brandTypes.includes('pilates')) {
        description += `${this.studio.access_1}のピラティス専門スタジオ。少人数制マットとマシンピラティスのグループレッスン、個人レッスンも。男性OK、見学もお気軽に。近隣にある姉妹店のヨガスタジオも利用可能。${this.studio.studio_name}でピラティスならzen place pilates!`;
      } else {
        // TODO: Throw some alert or so since this should not happen
      }

      // remove linebreaks from description
      return description.replace(/\n/g, '');
    },

    // meta keywords
    metaStudioKeywords() {
      let keywords = [];
      const brandTypes = (this.studio.brand_type || '').split(',');
      _.each(brandTypes, (bt) => {
        const brand = _.find(this.$store.state.brandsNew, (b) => b.brand_type === bt);
        if (brand) {
          keywords = keywords.concat(brand.brand_keywords);
        }
      });

      keywords.push(this.studio.studio_name);
      // yogaスタジオ用。温度設定に合わせてキーワード追加
      if (brandTypes.includes('yoga')) {
        const hotWords = (this.studio.hot_or_normal || '').split(',');
        if (hotWords.includes('hot')) {
          keywords.push('ホットヨガ');
        }
        if (hotWords.includes('normal')) {
          keywords.push('常温ヨガ');
        }
      }

      const uniqueKeywords = _.uniq(keywords);

      return uniqueKeywords.join(',');
    },
  },

  methods: {
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

<style lang='scss'>
@import 'node_modules/bootstrap/scss/mixins';
@import '~assets/scss/variables';
@import '~assets/scss/newvariables';

/*studio message*/
.c-studio-message img {
  display: block;
  margin: 10px auto;
  max-width: 500px !important;
  width: 100% !important;
}
.c-studio-message a {
  text-decoration: underline;
}
.c-studio-message a.btn-link,
.c-studio-message a.btn-taiken,
.c-studio-message a.btn-insta {
  position: relative;
  display: block;
  margin: 20px auto;
  padding: 15px;
  border-radius: 3px;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
}
.c-studio-message a.btn-link:after,
.c-studio-message a.btn-taiken:after {
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  content: '\e900';
  text-align: center;
  font-size: 10px;
  font-family: icomoon !important;
  line-height: 30px;
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  transform: rotate(-90deg);
}

.c-studio-message a.btn-link {
  max-width: 400px;
  background-color: #333;
  color: #fff;
}
.c-studio-message a.btn-taiken {
  max-width: 400px;
  background-color: #f87822;
  color: #fff;
}
.c-studio-message a.btn-insta {
  padding: 20px 15px;
  max-width: 260px;
  background-color: #b43e74;
  color: #fff;
}
.c-studio-message a.btn-inta:before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 10px;
  content: '\ea92';
  text-align: center;
  font-size: 10px;
  font-family: icomoon !important;
  line-height: 30px;
}

.c-cta-footer-studio {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 200;
  display: block;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: pv(75);
  background: $blue;
  transition: 0.2s;
  transform: translateY(200%);

  @include tab {
    display: flex;
  }

  &.show {
    transform: translateY(0);
  }

  .btn-blue {
    margin: 0 pv(5.5);
    width: 35%;
    height: pv(50);
    border-radius: pv(50);
    letter-spacing: pv(2);
    font-weight: bold;
    font-size: pv(16);

    &:before {
      display: block;
      margin-right: pv(10.5);
      background-size: contain;
      content: '';
    }
  }

  .btn-orange {
    margin: 0 pv(5.5);
    width: 65%;
    height: pv(50);
    border-radius: pv(50);
    letter-spacing: pv(2);
    font-weight: bold;
    font-size: pv(16);

    &:before {
      display: block;
      margin-right: pv(10.5);
      background-size: contain;
      content: '';
    }
  }

  .btn-blue {
    background: #2789e7;

    &:before {
      width: pv(19);
      height: pv(15);
      background-image: url('~assets/images/components/ctafooter/user.webp');
      background-repeat: no-repeat;
    }
  }

  .btn-orange {
    background: #E93742;
    &:before {
      width: pv(19);
      height: pv(20);
      background-image: url('~assets/images/components/ctafooter/trial.webp');
      background-repeat: no-repeat;
    }
  }
}

$studio-sp-bottom-bar-height: 50px;

.navbar-zenplace-studio {
  position: sticky;
  top: 0;
  z-index: 99;
  padding-bottom: 10px;
  width: 100%;
  background-color: #333;
  font-size: 14px;

  @include tab {
    /*
    position: fixed;
    */
    top: 60px;
    padding: 0 !important;
    padding-bottom: 1%;
  }
  @include sp {
    padding-top: 1%;
    font-size: pv(10);
  }
  @media screen and (max-width: 964px) {
    top: 60px;
  }

  .navbar-nav {
    margin: 0 auto;
    padding-top: 10px;
    max-width: 800px;

    @include sp {
      padding-top: pv(8);
      padding-bottom: pv(8);
      &:nth-child(1) {
        border-left: none;
      }
    }
    .nav-item {
      position: relative;
      padding-bottom: .3em;

      @include sp {
        border-left: 1px solid $white;
        &:nth-child(1) {
          border-left: none;
        }
      }

      a {
        // padding-top: 1.5rem;
        padding-top: 50px;
        height: 100%;
        color: #ffffff;

        @include sp {
          padding-top: pv(36);
        }
        &:hover {
          color: $white;
        }

        &::before {
          position: absolute;
          top: 5%;
          left: calc(50% - 24px);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          // background-color: $white;
          background-position: center center;
          background-size: auto 50%;
          background-repeat: no-repeat;
          content: '';

          @include sp {
            left: 30%;
            width: pv(30);
            height: pv(30);
            content: '';
          }
        }
      }
      &:nth-child(1) a {
        &:before {
          background-image: url('~/assets/images/studio/icon_top.svg');
        }
      }
      &:nth-child(2) a {
        &:before {
          background-image: url('~/assets/images/studio/icon_schedule.svg');
        }
      }
      &:nth-child(3) a {
        &:before {
          background-image: url('~/assets/images/studio/icon_price.svg');
        }
      }
      &:nth-child(4) a {
        &:before {
          background-image: url('~/assets/images/studio/icon_access.svg');
        }
      }
      &:nth-child(5) a {
        &:before {
          background-image: url('~/assets/images/studio/icon_phone.svg');
        }
      }
    }

    .nav-link {
      padding-bottom: 0;
      &.nuxt-link-exact-active {
        color: $white;
        /*background-color: white;
        border-top: 4px solid #0065a3;*/
      }
    }

    .navbar-item-phone,
    .navbar-item-reservation {
      a {
        color: white;
      }
      a:hover {
        color: white;
      }
    }
    .navbar-item-phone {
      background-color: $zenblue;
      color: white;
    }

    .navbar-item-reservation {
      background-color: $zenred;
      color: white;
      font-weight: bold;
      font-size: 1.4em;
      font-size: 14px;
      a:active {
        border: 1px solid $zenred;
        background-color: white;
        color: $zenred;
      }
      a:hover {
        border: 1px solid $zenred;
        background-color: white;
        color: $zenred;
      }
    }
  }
  .navbar-item-reservation .nuxt-link-exact-active {
    background-color: $zenred;
    color: white;
  }
}

.sp-bottom-navbar {
  width: 100%;
  li {
    width: 25%;
    /*font-size: 8px;*/
  }
}

.breadcrumbs {
  position: fixed;
  top: 3em;
  z-index: 1000;
  width: 100%;
}
.breadcrumb--hidden {
  @include tab {
    //display: none !important;
  }
}

.jumbotron-studio {
  h1 {
    font-size: 30px;
  }
}

.p-studio-main {
  padding-bottom: 5px;
  /*
  padding-top: 60px;
  */

  @include tab {
    /*margin-top: $studio-sp-bottom-bar-height;*/
    padding-top: 0;
  }
}

.studio-header-intro{
  h1{
    margin: 0;
    padding: 10px 0 8px 0;
    background-color: #f0f0f0;
    color:$blue;
    text-align:center;
    font-size:13px;
  }
}

.studio-menu-icon {
  color: $zenblue;
}

.studio-header {
  position: relative;

  @include tab {
    /*
    background-image: url('~/assets/images/studio/header-sp.webp');
    background-size: cover;
    */
  margin-top: 0px;
    /*
    margin-top: 50px;
    */

  }
  /*
  background: url('~/assets/images/studio/header.webp') center center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 400px;
  position: relative;
  overflow: hidden;
  */
  @media (max-width: 964px){
    margin-top: 0;
  }
    &::after{
      position: absolute;
      top: 0;
      display: block;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,.3);
      content: '';
    }

.header-movie{
  position:relative;
  overflow-x: hidden;

  h2.video-h2{
    position: absolute;
    top:auto;
    right: 0;
    bottom: 47%;
    left: 0;
    z-index: 99;
    margin: auto;
    text-align: center;

    @include sp{
      bottom: 37%;
    }
  }
  .vue-responsive-videobg{
    height:50vh;

    @include sp{
    height:25vh;
    }
  }

}

  .header-image{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
    background: url('~/assets/images/studio/header-top-4.webp') center center no-repeat;
  background-size: cover;

  @include tab {
  /*
    background-image: url('~/assets/images/studio/header-sp.webp');
    background-size: cover;
    */
    height: pv(150);
  }

  }

  h2 {
    font-size: 3.6rem;
    z-index: 10;
    color: #fff;
    /*
    position: absolute;
    z-index: 10;
    left: 0;
    text-align: center;
    width: 100%;
    top: 150px;
    */

    @include tabH {
      top: 100px;
      text-align: center;
      font-size: 2.9rem;
      line-height: 1.5em;
    }
    @include sp {
      top: pv(100);
      font-size: 2.9rem;
    }
  }
}
/*
@media (min-width: map-get($grid-breakpoints, 'sm')) {
  .zenplace-studio-breadcrumb {
    min-width: 300px;
    font-size: 16px;
  }

  .navbar-zenplace-studio {
    top: 140px;
    height: 70px;
    width: 100%;

    .navbar-nav {
      .nav-item {
        border: 0;
        border-right: 1px solid lightgray;
        height: 70px;
        width: 25%;

        &:first-child {
          border-left: 1px solid lightgray;
        }
      .navbar-item-reservation a {line-height: 70px;}
      }
        // div {
        //   font-size: 14px;
        //   margin-left: 1em;
        //   display: inline-block;
        // }
    }
  }
  .navbar-nav {
    .nav-item {
      a {
        padding-top: 1.5rem;
      }
    }
  }

  .is-scrolled .navbar-zenplace-studio {
    position: fixed;
    top: 0;
  }

  .jumbotron-studio {
    height: 200px;
    padding-top: 2em;
}
  }
  */

@media (max-width: map-get($grid-breakpoints, 'sm')) {
  .breadcrumbs--sp-top {
    position: fixed;
    top: 59px;
    z-index: 9000;
    width: 100%;
  }
}
</style>
