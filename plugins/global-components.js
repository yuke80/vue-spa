import Vue from 'vue';
import Logo from '@/components/Logo.vue';
import ColoredText from '@/components/ColoredText.vue';
import BrandDropdown from '@/components/BrandDropdown.vue';
import InstructorBadges from '@/components/instructors/InstructorBadges.vue';
import InstructorBrand from '@/components/instructors/InstructorBrand.vue';
import InstructorShido from '@/components/instructors/InstructorShido.vue';
import Studio from '@/components/studios/Studio.vue';
import StudioBrand from '@/components/studios/StudioBrand.vue';
import StudioFacility from '@/components/studios/StudioFacility.vue';
import StudioGrade from '@/components/studios/StudioGrade.vue';
import StudioMap from '@/components/studios/StudioMap.vue';
import StudioName from '@/components/studios/StudioName.vue';
import StudioTemperature from '@/components/studios/StudioTemperature.vue';
import NearbyStudios from '@/components/studios/NearbyStudios.vue';
import ScheduleCapacity from '@/components/schedules/ScheduleCapacity.vue';
import ScheduleTemperature from '@/components/schedules/ScheduleTemperature.vue';
import ScheduleType from '@/components/schedules/ScheduleType.vue';
import LessonTemperature from '@/components/lessons/LessonTemperature.vue';
import CollapsableLesson from '@/components/lessons/CollapsableLesson.vue';
import LessonCalendar from '@/components/studios/LessonCalendar.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import NewsItem from '@/components/NewsItem.vue';
import NewsType from '@/components/NewsType.vue';

// Icons
Vue.component('Logo', Logo);

// Common helpers
Vue.component('ColoredText', ColoredText);
Vue.component('BrandDropdown', BrandDropdown);

// Instructors
Vue.component('InstructorBadges', InstructorBadges);
Vue.component('InstructorBrand', InstructorBrand);
Vue.component('InstructorShido', InstructorShido);

// Studio
Vue.component('Studio', Studio);
Vue.component('StudioBrand', StudioBrand);
Vue.component('StudioFacility', StudioFacility);
Vue.component('StudioGrade', StudioGrade);
Vue.component('StudioMap', StudioMap);
Vue.component('StudioName', StudioName);
Vue.component('StudioTemperature', StudioTemperature);
Vue.component('NearbyStudios', NearbyStudios);

// Schedule
Vue.component('ScheduleCapacity', ScheduleCapacity);
Vue.component('ScheduleTemperature', ScheduleTemperature);
Vue.component('ScheduleType', ScheduleType);
Vue.component('LessonTemperature', LessonTemperature);
Vue.component('CollapsableLesson', CollapsableLesson);
Vue.component('LessonCalendar', LessonCalendar);
Vue.component('Breadcrumb', Breadcrumb);
Vue.component('NewsItem', NewsItem);
Vue.component('NewsType', NewsType);
