import Vue from 'vue';
import moment from 'moment';
import _ from 'lodash';
import consola from 'consola';

export default () => {
  Vue.filter('dateOnly', (val) => moment(val).format('YYYY年MM月DD日'));
  Vue.filter('dateDots', (val) => moment(val).format('YYYY.MM.DD'));
  Vue.filter('dateNoYear', (val) => moment(val).format('MM月DD日'));
  Vue.filter('dateSlash', (val) => moment(val).format('M/DD'));

  Vue.filter('studioName', (studio, showZenplacePrefix = true, showStudioName = true) => {
    let prefix = showZenplacePrefix ? 'zen place ' : '';
    const brandTypes = (studio.brand_type || '').split(',');
    if (brandTypes.includes('basi')) {
      if (brandTypes.includes('yoga') || brandTypes.includes('strong')) {
        prefix += 'pilates & yoga';
      } else {
        prefix += 'pilates';
      }
    } else if (brandTypes.includes('pilates')) {
      if (brandTypes.includes('yoga') || brandTypes.includes('strong')) {
        prefix += 'pilates & yoga';
      } else {
        prefix += 'pilates';
      }
    } else if (brandTypes.includes('yoga')) {
      if (brandTypes.includes('basi') || brandTypes.includes('pilates')) {
        prefix += 'pilates & yoga';
      } else {
        prefix += 'yoga';
      }
    } else if (brandTypes.includes('strong')) {
      if (brandTypes.includes('basi') || brandTypes.includes('pilates')) {
        prefix += 'pilates & yoga';
      } else {
        prefix += 'hot yoga';
      }
    }
    return `${prefix}${showStudioName ? ` ${studio.studio_name}` : ''}`;
  });
  Vue.filter('studioType', (val) => {
    let prefix = 'zen place ';
    const brandTypes = (val || '').split(',');
    if (brandTypes.includes('basi')) {
      if (brandTypes.includes('yoga') || brandTypes.includes('strong')) {
        prefix += 'pilates & yoga';
      } else {
        prefix += 'pilates';
      }
    } else if (brandTypes.includes('pilates')) {
      if (brandTypes.includes('yoga') || brandTypes.includes('strong')) {
        prefix += 'pilates & yoga';
      } else {
        prefix += 'pilates';
      }
    } else if (brandTypes.includes('yoga')) {
      if (brandTypes.includes('basi') || brandTypes.includes('pilates')) {
        prefix += 'pilates & yoga';
      } else {
        prefix += 'yoga';
      }
    } else if (brandTypes.includes('strong')) {
      if (brandTypes.includes('basi') || brandTypes.includes('pilates')) {
        prefix += 'pilates & yoga';
      } else {
        prefix += 'hot yoga';
      }
    }
    return `${prefix}`;
  });

  Vue.filter('weekdayOnly', (val) => {
    const weekdayNumber = moment(val).weekday();
    const weekdays = [
      '日',
      '月',
      '火',
      '水',
      '木',
      '金',
      '土',
    ];
    const weekday = weekdays[weekdayNumber];
    return weekday;
  });

  // Input 14:15:00 => output 14:15
  Vue.filter('timeWithoutSeconds', (val) => {
    const parts = _.split(val, ':');
    if (parts.length < 3) {
      consola.warn('Invalid input for timeWithoutSeconds');
      return val;
    }
    return `${parts[0]}:${parts[1]}`;
  });
};
