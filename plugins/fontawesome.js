import Vue from 'vue';

import { library, config } from '@fortawesome/fontawesome-svg-core';

// To optimize bundle sizes, use tree shaking to import explicitly only used icons
// This shaves off about 1mb from vendors.app
import {
  faCheckSquare,
  faArrowsAltH,
  faHome,
  faAngleLeft,
  faAngleRight,
  faAngleUp,
  faAngleDown,
  faBookmark,
  faCalendarAlt,
  faCaretLeft,
  faCaretRight,
  faCaretUp,
  faCaretDown,
  faMapMarkerAlt,
  faMinus,
  faPhone,
  faPlus,
  faYenSign,
  faPlayCircle,
  faLock,
  faPlay,
  faQuoteLeft,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faFacebookF,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faCheckSquare,
  faArrowsAltH,
  faQuoteLeft,
  faHome,
  faPlay,
  faLock,
  faPlayCircle,
  faAngleRight,
  faAngleLeft,
  faAngleUp,
  faAngleDown,
  faBookmark,
  faCalendarAlt,
  faCaretRight,
  faCaretLeft,
  faCaretUp,
  faCaretDown,
  faMapMarkerAlt,
  faMinus,
  faPhone,
  faPlus,
  faYenSign,
  faChevronDown,
);
library.add(
  faFacebook,
  faFacebookF,
  faInstagram,
);

// Prevent the initial huge font flash on load (also in nuxt.config.js)
// ref: https://github.com/FortAwesome/vue-fontawesome/issues/14
config.autoAddCss = false;

// Import everything way
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// library.add(fas);
// library.add(fab);

Vue.component('fa-icon', FontAwesomeIcon);
