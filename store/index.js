import consola from 'consola';

export const state = () => ({
  brandsNew: [
    {
      brand_type: 'basi',
      brand_name_full: 'zen place pilates by basi（basiピラティス）',
      brand_name_short: 'basiピラティス',
      brand_keywords: ['ピラティス', 'basi'],
    },
    {
      brand_type: 'pilates',
      brand_name_full: 'zen place pilates（ピラティス）',
      brand_name_short: 'ピラティス',
      brand_keywords: ['pilates', 'ピラティス'],
    },
    {
      brand_type: 'yoga',
      brand_name_full: 'zen place yoga（ヨガ）',
      brand_name_short: 'ヨガ',
      brand_keywords: ['ヨガ'],
    },
    {
      brand_type: 'strong',
      brand_name_full: 'zen place hot yoga（ホットヨガ）',
      brand_name_short: 'ホットヨガ',
      brand_keywords: ['ホットヨガ', 'ヨガ'],
    },
  ],

  newsTypeNames: {
    101: 'お知らせ',
    103: '特別レッスン',
    104: '開催レポート',
    105: '重要なお知らせ',
  },

  newsTypes: {
    101: 'info',
    103: 'ws',
    104: 'report',
    105: 'alert',
  },

  facilityTypes: [],

  lessonTypes: {
    GL: {
      code: 'GL',
      name: 'グループレッスン',
      name_short: 'グループ',
    },
    MG: {
      code: 'MG',
      name: 'マシングループレッスン',
      name_short: 'マシングループ',
    },
    PV: {
      code: 'PV',
      name: 'プライベートレッスン',
      name_short: 'プライベート',
    },
  },
  prefectures: [],
  areas: [],
  // TODO: set studios when first fetched and avoid subsequent ones
  studios: [],
  layoutLoaded: false,

  brandTaikenUrls: {
    // These use magic variable %%STUDIO_ID%% to show what needs to be replaced
    // basi
    1: '/welcome/schedule.php?%%REFNUM%%%%ABTEST%%action=cal&studio_id=%%STUDIO_ID%%#class_type_102',
    // pilates style
    2: '/welcome/schedule.php?%%REFNUM%%%%ABTEST%%action=cal&studio_id=%%STUDIO_ID%%#class_type_102',
    // yoga
    4: '/welcome/schedule.php?%%REFNUM%%%%ABTEST%%studio_id=%%STUDIO_ID%%#class_type_102',
    // strong
    5: '/welcome/schedule.php?%%REFNUM%%%%ABTEST%%action=cal&studio_id=%%STUDIO_ID%%',
  },
});

export const actions = {
  async nuxtServerInit(vuexContext, context) {
    consola.info(`Nuxt start path:${context.route.path} route:${context.route.name}`);
  },
};

export const mutations = {
  // eslint-disable-next-line no-shadow
  setBrands(state, brands) {
    state.brands = brands;
  },

  // eslint-disable-next-line no-shadow
  setFacilityTypes(state, facilityTypes) {
    state.facilityTypes = facilityTypes;
  },

  // eslint-disable-next-line no-shadow
  setAreas(state, areas) {
    state.areas = areas;
  },

  // eslint-disable-next-line no-shadow
  setPrefectures(state, prefectures) {
    state.prefectures = prefectures;
  },

  // eslint-disable-next-line no-shadow
  setStudios(state, studios) {
    state.studios = studios;
  },

  // eslint-disable-next-line no-shadow
  loadingDone(state) {
    state.layoutLoaded = true;
  },
};

export const getters = {
  // eslint-disable-next-line no-shadow
  taikenUrl: (state) => (brandId, studioId, refnum, abtest) => state.brandTaikenUrls[brandId].replace('%%STUDIO_ID%%', studioId).replace('%%REFNUM%%', refnum).replace('%%ABTEST%%', abtest),
};
