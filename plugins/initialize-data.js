// Prefectures never change so we can use local data
// TODO: disabled for now, see if this is really necessary or not...
// import prefectures from '../static-api-files/prefectures.json';

// import facilityTypes from '../static-api-files/facility_types.json';
// import areas from '../static-api-files/areas.json';

export default async ({ app, store }) => {
  /**
   * This is responsible for fetching the non-changeable data, such as brands.
   *  In future this should include facility types and others also.
   */

  const [facilityTypes, prefectures, areas] = await Promise.all([
    app.$zenplaceApi.getFacilityTypes(),
    app.$zenplaceApi.getPrefectures(),
    app.$zenplaceApi.getAreas(),
  ]);

  store.commit('setFacilityTypes', facilityTypes);
  store.commit('setPrefectures', prefectures);
  store.commit('setAreas', areas);
};
