import Vue from 'vue';
import consola from 'consola';
import moment from 'moment';
import _ from 'lodash';

// info = お知らせ
// ws = Workshop
// alert = 緊急知らせ
// report = 開催レポート
const allowedNewsCategories = ['info', 'ws', 'alert', 'report'];
const allowedLessonCategories = ['yoga', 'pilates', 'strong', 'other'];

class Api {
  constructor(baseUrl, axiosInstance) {
    this.baseUrl = baseUrl;
    this.axiosInstance = axiosInstance;

    // Add API call logger in development
    if (process.env.NODE_ENV === 'development' && process.env.DEBUG) {
      this.axiosInstance.interceptors.request.use((config) => {
        consola.info('API:', config.url);
        return config;
      });
    }
  }

  async getStudios(query) {
    let q = '?';
    if (query) {
      if (query.prefecture_id) {
        q += `pref=${query.prefecture_id}&`;
      }
      if (query.area_id) {
        q += `area=${query.area_id}`;
      }
      if (query.lesson_types) {
        const lesson_types = query.lesson_types.join(',');
        q += `lesson_types=${lesson_types}`;
      }
    }
    const res = await this.axiosInstance.get(`${this.baseUrl}studios/${q}`);
    return res.data;
  }

  async getStudio(studioId, options = {}) {
    const res = await this.axiosInstance.get(`${this.baseUrl}studios/${studioId}/`, options);
    return res.data;
  }

  async getStudioSchedule(studioId, date) {
    // We need to specify date here, or we don't get today's schedules
    const res = await this.axiosInstance.get(`${this.baseUrl}studios/${studioId}/schedules/?date=${moment(date).format('YYYY-MM-DD')}`);
    return res.data;
  }

  async getStudioPricing(studioId, options = {}) {
    const res = await this.axiosInstance.get(`${this.baseUrl}studios/${studioId}/price/`, options);
    return res.data;
  }

  async getStudioCampaigns(studioId, options = {}) {
    const pcCampaigns = await this.axiosInstance.get(`${this.baseUrl}studios/${studioId}/campaign/pc`, options);
    const spCampaigns = await this.axiosInstance.get(`${this.baseUrl}studios/${studioId}/campaign/sp`, options);
    return {
      pc: pcCampaigns.data,
      sp: spCampaigns.data,
    };
  }

  async getStudioNews(studioId, category, options = {}) {
    if (!allowedNewsCategories.includes(category)) {
      throw new Error('Invalid news category');
    }
    const res = await this.axiosInstance.get(`${this.baseUrl}studios/${studioId}/news/${category}`, options);
    return res.data;
  }

  async getStudioInstructors(studioId, options = {}) {
    const res = await this.axiosInstance.get(`${this.baseUrl}studios/${studioId}/instructors/belong/`, options);
    return res.data;
  }

  async getStudioVisitingInstructors(studioId, options = {}) {
    const res = await this.axiosInstance.get(`${this.baseUrl}studios/${studioId}/instructors/has_lesson/`, options);
    return res.data;
  }

  async getInstructors() {
    const res = await this.axiosInstance.get(`${this.baseUrl}instructors/`);
    return res.data;
  }

  async getInstructor(instructorId) {
    const res = await this.axiosInstance.get(`${this.baseUrl}instructors/${instructorId}/`);
    return res.data;
  }

  async getInstructorSchedules(instructorId, limit) {
    const res = await this.axiosInstance.get(`${this.baseUrl}instructors/${instructorId}/schedules/?limit=${limit}`);
    return res.data;
  }

  async getStudioClosedDays(studiosId) {
    const res = await this.axiosInstance.get(`${this.baseUrl}studios/${studiosId}/closingdays/`);
    return res.data;
  }

  async getLessonsInCategory(category) {
    if (!allowedLessonCategories.includes(category)) {
      throw new Error('Invalid lesson category');
    }
    const res = await this.axiosInstance.get(`${this.baseUrl}lesson_name/${category}`);
    return res.data;
  }

  async getLessonInCategoryById(category, lessonId) {
    const res = await this.axiosInstance.get(`${this.baseUrl}lesson_name/${category}/${lessonId}`);
    return res.data;
  }

  async getNewsInCategory(category) {
    if (!allowedNewsCategories.includes(category)) {
      throw new Error('Invalid news category');
    }
    const res = await this.axiosInstance.get(`${this.baseUrl}news/${category}`);
    return res.data;
  }

  async getNewsById(newsId) {
    const res = await this.axiosInstance.get(`${this.baseUrl}news/all/${newsId}`);
    // TODO: FIXME: hack, since it returns array even with id specified
    // but this should be fixed on api level first
    if (_.isArray(res.data)) {
      return res.data[0];
    }
    return res.data;
  }

  async getPrefectures() {
    const res = await this.axiosInstance.get(`${this.baseUrl}locations/prefectures/`);
    return res.data;
  }

  async getAreas() {
    const res = await this.axiosInstance.get(`${this.baseUrl}locations/areas/`);
    return res.data;
  }

  async getBrands() {
    const res = await this.axiosInstance.get(`${this.baseUrl}brands`);
    return res.data;
  }

  async getFacilityTypes() {
    const res = await this.axiosInstance.get(`${this.baseUrl}studios/facility_types`);
    return res.data;
  }

  async getLiveStreamingList(year, month, password) {
    const res = await this.axiosInstance.post(`${this.baseUrl}videos`, {
      year,
      month,
      password,
    });
    return res.data;
  }
}

export default ({ app }) => {
  // If an api call takes more than 15 secs, something is wrong.
  // In development this is likely to be the non-vpn connection.
  // It is still better to timeout than to stay in loading stage for long long time.
  app.$axios.defaults.timeout = 15000;

  // const apiUrl = 'http://localhost:3000/api/';
  // const apiUrl = process.env.API_BASE_URL || 'https://staging-api.zen-jp.info/zenplace/v1/';
  const apiUrl = app.$env.apiBaseUrl || 'https://staging-api.zen-jp.info/zenplace/v1/';
  consola.debug(`API URL: ${apiUrl}`);

  // const api = new Api('https://qfac4xscja.execute-api.ap-northeast-1.amazonaws.com/dev/', app.$axios);
  // const api = new Api('http://develop-enterprise-api.zen-jp.info:10080/public-api/', app.$axios);
  const api = new Api(apiUrl, app.$axios);

  app.$zenplaceApi = api;

  Vue.mixin({
    beforeCreate() {
      this.$zenplaceApi = api;
    },
  });
};
