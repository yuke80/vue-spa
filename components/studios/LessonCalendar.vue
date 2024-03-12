<template>
  <div class="container-except-sm">
    <div
      ref="calendarNav"
      class="text-center c-lesson-calendar-nav"
    >
      <div
        class="schedule_style_list"
        :class="{'isShow':showList}"
      >
        <div v-if="!groupLessonsDisabled">
          <div class="btn-group d-flex">
            <div
              :class="{
                'btn-primary': showGroup,
                'btn-light': !showGroup,
              }"
              @click="
                showPrivate = false;
                showMachineGroup = false;
                showGroup = true;
                $nextTick(() => filterSchedulesList());
              "
            >
              グループ
              <span class="arrow" />
            </div>
            <div
              :class="{
                'btn-primary': showMachineGroup,
                'btn-light': !showMachineGroup,
              }"
              @click="
                showPrivate = false;
                showMachineGroup = true;
                showGroup = false;
                $nextTick(() => filterSchedulesList());
              "
            >
              マシングループ
              <span class="arrow" />
            </div>
            <div
              :class="{
                'btn-primary': showPrivate,
                'btn-light': !showPrivate,
              }"
              @click="
                showPrivate = true;
                showMachineGroup = false;
                showGroup = false;
                $nextTick(() => filterSchedulesList());
              "
            >
              プライベート
              <span class="arrow" />
            </div>
          </div>
        </div>
        <div class="change_schedule_style">
          <p class="btn_style_list">
            list
          </p>
          <p
            class="btn_style_table active"
            @click="
              showList = false;
              showTable = true;
              daysToShow = 7;
              defaultDay();
            "
          >
            calendar
          </p>
        </div>

        <div class="c-lesson-search">
          <p class="title">
            期間
          </p>
          <div class="search-box">
            <div>
              <b-form-datepicker
                v-model="startDate"
                class="search-date"
              >
                開始日
              </b-form-datepicker>
              <p>〜</p>
              <b-form-datepicker
                v-model="endDate"
                class="search-date c-right"
              >
                終了日
              </b-form-datepicker>
            </div>
            <button @click="searchDay()">
              検索
            </button>
          </div>
        </div>

        <p
          v-if="getSchedulesForList().length < 1"
          class="noDataMsg"
        >
          ご指定の期間のレッスンがありませんでした。<br>別の期間で試してみてください。
        </p>

        <section
          v-else
          class="s-schedule-list"
        >
          <div
            v-for="(schedule, index) in getSchedulesForList()"
            :key="schedule.schedule_id"
            class="schedule-item"
          >
            <div
              v-if="
                index == 0 ||
                  getSchedulesForList()[index - 1].lesson_date !==
                  schedule.lesson_date
              "
              class="schedule-date"
            >
              {{ schedule.lesson_date | dateSlash }}<br class="pc">({{
                schedule.lesson_date | weekdayOnly
              }})
            </div>
            <div class="list-item">
              <p
                v-if="schedule.hot_or_normal"
                class="hot_or_normal sp"
              >
                <span v-if="schedule.hot_or_normal == 101">
                  ﾚｯｽﾝ温度:22℃
                </span>
                <span v-else-if="schedule.hot_or_normal == 102">
                  ﾚｯｽﾝ温度:40℃
                </span>
                <span v-else-if="schedule.hot_or_normal == 103">
                  ﾚｯｽﾝ温度:28℃
                </span>
              </p>
              <p class="lesson_time">
                {{ schedule.start_time | timeWithoutSeconds }}-<br
                  class="pc"
                >{{ schedule.end_time | timeWithoutSeconds }}
              </p>
              <p class="lesson_style">
                <span class="sp">【</span><span v-if="schedule.class_type === 101">プライベート</span><span v-else-if="schedule.class_type === 102">グループ</span><span class="sp">】</span>
              </p>
              <div class="box1">
                <p
                  class="lesson_name"
                  @click="showScheduleModal(schedule)"
                >
                  {{
                    schedule.special_class_name ||
                      schedule.lesson_name ||
                      schedule.lm_name ||
                      schedule.level_name
                  }}
                </p>

                <div class="lesson_type pc">
                  <span
                    v-if="
                      parseInt(schedule.empty_count, 10) !== 0 &&
                        schedule.taiken_ok
                    "
                  >
                    体験OK
                  </span>
                  <span v-if="schedule.is_studio_online == 1"> ｵﾝﾗｲﾝあり </span>
                  <span v-if="schedule.is_online_only == 1"> ｵﾝﾗｲﾝ限定 </span>
                  <span v-if="schedule.level_name">{{
                    schedule.level_name
                  }}</span>
                  <span v-if="schedule.hot_or_normal == 101">
                    ﾚｯｽﾝ温度:22℃
                  </span>
                  <span v-if="schedule.hot_or_normal == 102">
                    ﾚｯｽﾝ温度:40℃
                  </span>
                  <span v-if="schedule.hot_or_normal == 103">
                    ﾚｯｽﾝ温度:28℃
                  </span>
                </div>
              </div>

              <div
                v-if="!parseInt(schedule.empty_count, 10)"
                class="lesson_status"
              >
                <div class="text-danger">
                  満席
                </div>
                <div class="text-cancel">
                  キャンセル待ち: {{ schedule.wait_count }}
                </div>
              </div>
              <div
                v-else-if="parseInt(schedule.empty_count, 10) <= 3"
                class="text-warning lesson_status"
              >
                残り{{ schedule.empty_count }}席
                <!-- / {{ selectedSchedule.capacity }} -->
              </div>
              <div
                v-else
                class="lesson_status no_status"
              />

              <p class="lesson_staff">
                {{ schedule.staff_name }}
              </p>
              <div class="lesson_type sp">
                <span
                  v-if="
                    parseInt(schedule.empty_count, 10) !== 0 &&
                      schedule.taiken_ok
                  "
                >
                  体験OK
                </span>
                <span v-if="schedule.is_studio_online == 1"> ｵﾝﾗｲﾝあり </span>
                <span v-if="schedule.is_online_only == 1"> ｵﾝﾗｲﾝ限定 </span>
                <span v-if="schedule.level_name">{{
                  schedule.level_name
                }}</span>
                <span v-if="schedule.hot_or_normal == 101">
                  ﾚｯｽﾝ温度:22℃
                </span>
                <span v-if="schedule.hot_or_normal == 102">
                  ﾚｯｽﾝ温度:40℃
                </span>
                <span v-if="schedule.hot_or_normal == 103">
                  ﾚｯｽﾝ温度:28℃
                </span>
              </div>
              <div class="lesson_btn">
                <button @click="showScheduleModal(schedule)">
                  レッスン詳細・予約
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        class="schedule_style_table"
        :class="{'isShow':showTable}"
      >
        <div v-if="!groupLessonsDisabled">
          <div class="btn-group d-flex">
            <div
              :class="{
                'btn-primary': showGroup,
                'btn-light': !showGroup,
              }"
              @click="
                showPrivate = false;
                showMachineGroup = false;
                showGroup = true;
                $nextTick(() => filterSchedules());
              "
            >
              グループ
            </div>
            <div
              :class="{
                'btn-primary': showMachineGroup,
                'btn-light': !showMachineGroup,
              }"
              @click="
                showPrivate = false;
                showMachineGroup = true;
                showGroup = false;
                $nextTick(() => filterSchedules());
              "
            >
              マシングループ
            </div>
            <div
              :class="{
                'btn-primary': showPrivate,
                'btn-light': !showPrivate,
              }"
              @click="
                showPrivate = true;
                showMachineGroup = false;
                showGroup = false;
                $nextTick(() => filterSchedules());
              "
            >
              プライベート
            </div>
          </div>
        </div>
        <div class="change_schedule_style">
          <p
            class="btn_style_list active"
            @click="
              showList = true;
              showTable = false;
              searchDay();
            "
          >
            list
          </p>
          <p
            class="btn_style_table"
          >
            table
          </p>
        </div>
        <!-- How many dates to show -->
        <div class="btn-group rounded c-date-type-schoose mb-3">
          <button
            class="btn btn-white"
            @click="prevDay"
          >
            <fa-icon
              icon="caret-left"
              size="lg"
            />
            前へ
          </button>
          <button
            class="btn btn-light"
            :class="{ active: daysToShow === 1 }"
            @click="
              daysToShow = 1;
              filterSchedules();
            "
          >
            1日表示
          </button>
          <button
            class="btn btn-light"
            :class="{ active: daysToShow === 3 }"
            @click="
              daysToShow = 3;
              filterSchedules();
            "
          >
            3日表示
          </button>
          <button
            class="btn btn-light"
            :class="{ active: daysToShow === 7 }"
            @click="
              daysToShow = 7;
              filterSchedules();
            "
          >
            7日表示
          </button>

          <button
            class="btn btn-white"
            @click="nextDay"
          >
            次へ
            <fa-icon
              icon="caret-right"
              size="lg"
            />
          </button>
        </div>

        <div class="text-light">
          {{ filteredSchedules.length }}/{{ schedules.length }} レッスンを表示
        </div>

        <div
          class="d-flex justify-content-around align-items-strech c-date-row"
          :class="`days-to-show-${daysToShow}`"
        >
          <div
            v-for="(date, dateIndex) in dates"
            :key="dateIndex"
            :style="`width: ${100 / daysToShow}%`"
            class="p-0"
            :class="{
              // Sunday
              'bg-danger text-white': date.getDay() === 0,
              // Saturday
              'bg-info text-white': date.getDay() === 6,
              // Closed day and NOT saturday or sunday
              'bg-grey is-closed':
                isClosed(date) && date.getDay() !== 6 && date.getDay() !== 0,
            }"
          >
            {{ date | dateSlash }}({{ date | weekdayOnly }})<br>
            <div v-if="isClosed(date)">
              休館日
            </div>
          </div>
        </div>

        <div
          v-for="(hour, hourIndex) in hours"
          :key="hourIndex"
          class="c-grid-container container-except-sm"
          :class="`days-to-show-${daysToShow}`"
        >
          <div class="bg-grey">
            {{ hour }}:00
          </div>

          <div class="d-flex">
            <div
              v-for="(date, dateIndex) in dates"
              :key="dateIndex"
              class="p-0"
              :class="{
                'bg-grey': isClosed(date),
              }"
              :style="`width: ${100 / daysToShow}%`"
            >
              <a
                v-for="schedule in getSchedulesForDateAndHour(date, hour)"
                :key="schedule.schedule_id"
                @click="showScheduleModal(schedule)"
              >
                <div
                  class="card"
                  :class="{
                    'border-info': schedule.class_type === 102,
                    'border-danger':
                      schedule.class_type === 101 &&
                      schedule.ticket_pattern_name !== 'MG',
                    'border-warning': schedule.ticket_pattern_name === 'MG',
                  }"
                >
                  <div
                    class="card-header p-1"
                    :class="{
                      'bg-white': parseInt(schedule.empty_count, 10),
                      'bg-grey': !parseInt(schedule.empty_count, 10),
                    }"
                  >
                    {{ schedule.start_time | timeWithoutSeconds }}
                    <span
                      class="badge"
                      :class="getStudioTypeClass(schedule)"
                    >
                      {{ getStudioTypeLetter(schedule) }}
                    </span>
                  </div>
                  <div
                    class="card-body p-1"
                    :class="{
                      'bg-white': parseInt(schedule.empty_count, 10),
                      'bg-grey': !parseInt(schedule.empty_count, 10),
                    }"
                  >
                    <div v-if="schedule.is_studio_online == 1">
                      <!-- {{ schedule.level_name }} -->
                      <div class="badge badge-info">ｵﾝﾗｲﾝあり</div>
                    </div>
                    <div v-if="schedule.is_online_only == 1">
                      <div class="badge badge-info">ｵﾝﾗｲﾝ限定</div>
                    </div>
                    <!-- FIXME: make this into filter or component that gets the correct one
                plus explanations why is it like this
                for now: special = overwrite
                lesson_nam = basic
                lm_name ???
                level_name = final resort...
                -->
                    {{
                      schedule.special_class_name ||
                        schedule.lesson_name ||
                        schedule.lm_name ||
                        schedule.level_name
                    }}

                    <div
                      v-if="levelNamesBeginner.includes(schedule.level_name)"
                    >
                      <div>
                        <icon-beginner />
                      </div>
                    </div>

                    <schedule-temperature :schedule="schedule" />
                    <br>
                    <span
                      v-if="
                        parseInt(schedule.empty_count, 10) !== 0 &&
                          schedule.taiken_ok
                      "
                      class="badge badge-info"
                    >
                      体験OK
                    </span>
                    <schedule-capacity :schedule="schedule" />
                  </div>
                  <div
                    class="card-footer p-1"
                    :class="{
                      'bg-white': parseInt(schedule.empty_count, 10),
                      'bg-grey': !parseInt(schedule.empty_count, 10),
                    }"
                  >
                    {{ schedule.staff_name }}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <b-modal
      v-if="selectedSchedule"
      id="schedule-details"
      hide-footer
      class="mt-5"
      centered
      :schedule="selectedSchedule"
    >
      <div>
        <h1>
          {{
            selectedSchedule.special_class_name ||
              selectedSchedule.lesson_name ||
              selectedSchedule.lm_name
          }}
        </h1>
        <div v-if="!parseInt(selectedSchedule.empty_count, 10)">
          <div class="text-danger">
            満席
          </div>
          <div class="text-cancel">
            キャンセル待ち: {{ selectedSchedule.wait_count }}
          </div>
        </div>
        <div
          v-else-if="parseInt(selectedSchedule.empty_count, 10) <= 3"
          class="text-warning"
        >
          残り{{ selectedSchedule.empty_count }}席
        </div>

        <div>
          <div class="lesson_type">
            <span
              v-if="selectedSchedule.taiken_ok"
              class="badge badge-info"
            >
              体験OK
            </span>
            <span
              v-if="selectedSchedule.is_studio_online"
              class="badge badge-info"
            >
              オンラインあり
            </span>
            <span
              v-if="selectedSchedule.is_online_only"
              class="badge badge-info"
            >
              オンライン限定
            </span>
          </div>
          <table class="table my-4">
            <tr>
              <td>
                <b>日程</b>
              </td>
              <td>
                {{ selectedSchedule.lesson_date | dateOnly }}
                {{ selectedSchedule.start_time | timeWithoutSeconds }}
                -
                {{ selectedSchedule.end_time | timeWithoutSeconds }}
              </td>
            </tr>
            <tr>
              <td>
                <b>スタジオ</b>
              </td>
              <td>
                <studio-name :studio="$parent.studio" />
              </td>
            </tr>

            <tr>
              <td>
                <b>インストラクター</b>
              </td>
              <td>
                {{ selectedSchedule.staff_name }}
              </td>
            </tr>

            <tr v-if="selectedSchedule.lm_name">
              <td>
                <b>レッスン種類</b>
              </td>
              <td>
                {{ selectedSchedule.lm_name }}
              </td>
            </tr>

            <tr v-if="selectedSchedule.hot_or_normal">
              <td>
                <b>レッスン温度</b>
              </td>
              <td>
                <schedule-temperature :schedule="selectedSchedule" />
              </td>
            </tr>

            <tr
              v-if="selectedSchedule.level_name || selectedSchedule.taiken_ok"
            >
              <td>
                <b>対象レベル</b>
              </td>
              <td>
                {{ selectedSchedule.level_name }}
              </td>
            </tr>
          </table>
        </div>
        <div>
          <p><b>レッスン内容</b></p>
          {{ selectedSchedule.lesson_memo }}
        </div>

        <div class="pt-3 d-block text-center">
          <a
            target="_blank"
            class="btn btn-primary p-2"
            :href="selectedSchedule.registration_url + '&offline=1'"
          >
            <span
              v-if="selectedSchedule.is_online_only == 1"
            >オンラインレッスン予約（会員ログイン）</span>
            <span v-else>スタジオレッスン予約（会員ログイン）</span>
          </a>
        </div>
        &nbsp;
        <div
          v-if="selectedSchedule.is_studio_online == 1"
          class="d-block text-center pb-3"
        >
          <a
            target="_blank"
            class="btn btn-primary p-2"
            :href="selectedSchedule.registration_url + '&online=1'"
          >
            オンラインレッスン予約（会員ログイン）
          </a>
        </div>
        <div class="py-3 text-center">
          <a
            class="btn-orange-studio btn-orange btn"
            :href="
              $store.getters.taikenUrl(
                studio.brand_id,
                studio.studio_id,
                function (refnum) {
                  return getRefnumFromCookie();
                },
                function (abtest) {
                  return getABtestValue();
                }
              )
            "
          >
            体験レッスンを予約する
          </a>
        </div>
        <span
          v-if="selectedSchedule.taiken_ok == 1"
          class="taiken-warning-text"
        >※体験をご希望の方は、体験予約の上、スタジオに直接お越し下さい。</span>
      </div>
    </b-modal>
  </div>
</template>

<script>
import moment from 'moment';
import _ from 'lodash';

export default {
  props: {
    schedules: {
      type: Array,
      required: true,
    },
    studio: {
      type: Object,
      required: true,
    },
    closedDays: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  data() {
    return {
      daysToShow: 7,
      firstDate: moment().startOf('today').toDate(),
      filteredSchedules: [],
      filteredListSchedules: [],
      selectedSchedule: null,
      showPrivate: false,
      showGroup: true,
      showMachineGroup: false,
      classTypeMap: {
        101: 'Private',
        102: 'Group',
        103: 'MachineGroup',
      },
      // These should be 体験 OK
      levelNamesBeginner: ['初級', '初心〜初級'],
      ja: 'ja',
      calendarDate: '',
      startDate: moment().startOf('today').toDate(),
      endDate: moment().startOf('today').add(6, 'days').toDate(),
      showList: true,
      showTable: false,
    };
  },

  computed: {
    dates() {
      return _.range(0, this.daysToShow).map((i) => moment(this.firstDate).startOf('day').add(i, 'days').toDate());
    },

    hours() {
      return _.range(6, 23);
    },

    // This return hours between which there are schedules, e.g. [12, 13, 14]
    lessonHours() {
      const startHour = _.min(
        _.map(this.filteredSchedules, (s) => parseInt(s.start_time.split(':')[0], 10)),
      );
      const endHour = _.max(
        _.map(this.filteredSchedules, (s) => parseInt(s.end_time.split(':')[0], 10)),
      );
      return _.range(startHour, endHour + 1);
    },

    groupLessonsDisabled() {
      return (
        this.studio.slug === 'basipilates-roppongi'
        || this.studio.slug === 'basipilates-daikanyama'
      );
    },
  },

  watch: {
    schedules() {
      this.filterSchedules();
      this.filterSchedulesList();
    },
  },

  created() {
    if (
      this.studio.slug === 'basipilates-roppongi'
      || this.studio.slug === 'basipilates-daikanyama'
    ) {
      this.showGroup = false;
      this.showMachineGroup = false;
      this.showPrivate = true;
    }
    this.filterSchedules();
    this.filterSchedulesList();
  },

  methods: {
    customFormatter(date) {
      return moment(date).format('YYYY/MM/DD');
    },
    getStudioTypeClass(schedule) {
      if (schedule.ticket_pattern_name === 'MG') {
        return 'badge-warning';
      }
      if (schedule.class_type === 101) {
        return 'badge-danger';
      }
      if (schedule.class_type === 102) {
        return 'badge-info';
      }
      return '?';
    },

    isClosed(date) {
      for (const d of this.closedDays) {
        if (moment(date).isSame(moment(d.target_date))) {
          return true;
        }
      }
      return false;
    },

    getStudioTypeLetter(schedule) {
      if (schedule.ticket_pattern_name === 'MG') {
        return 'M';
      }
      if (schedule.class_type === 101) {
        return 'P';
      }
      if (schedule.class_type === 102) {
        return 'G';
      }
      return '?';
    },

    filterSchedules() {
      this.filteredSchedules = _.filter(this.schedules, (s) => {
        if (this.showMachineGroup
        && s.is_machine_group === 0) {
          return false;
        }
        if (this.showPrivate
        && (s.class_type !== 101 || s.is_machine_group === 1)) {
          return false;
        }
        if (this.showGroup
        && (s.class_type !== 102 || s.is_machine_group === 1)) {
          return false;
        }
        return (
          moment(this.firstDate)
            .startOf('day')
            .isSameOrBefore(moment(s.lesson_date))
          && moment(this.firstDate)
            .startOf('day')
            .add(this.daysToShow, 'days')
            .isAfter(moment(s.lesson_date))
        );
      });
    },

    filterSchedulesList() {
      this.filteredListSchedules = _.filter(this.schedules, (s) => {
        if (this.showMachineGroup
        && s.is_machine_group === 0) {
          return false;
        }
        if (this.showPrivate
        && (s.class_type !== 101 || s.is_machine_group === 1)) {
          return false;
        }
        if (this.showGroup
        && (s.class_type !== 102 || s.is_machine_group === 1)) {
          return false;
        }

        return (
          moment(this.startDate)
            .startOf('day')
            .isSameOrBefore(moment(s.lesson_date))
          && moment(this.endDate)
            .startOf('day')
            .add(1, 'days')
            .isAfter(moment(s.lesson_date))
        );
      });
    },
    getSchedulesForDateAndHour(date, hour) {
      return _.filter(this.filteredSchedules, (schedule) => {
        // start_time and end_time are in HH:mm:ss
        const scheduleStartHour = parseInt(
          schedule.start_time.split(':')[0],
          10,
        );
        // TODO: we should use this to expand the lesson over multiple blocks
        // const scheduleEndHour = parseInt(schedule.end_time.split(':')[0], 10);
        if (
          moment(schedule.lesson_date).isSame(moment(date))
          && hour === scheduleStartHour
        ) {
          return true;
        }
        return false;
      });
    },
    getSchedulesForList() {
      return _.filter(this.filteredListSchedules, (schedule) => {
        // start_time and end_time are in HH:mm:ss
        let scheduleStartHour = '';
        scheduleStartHour = parseInt(
          schedule.start_time.split(':')[0],
          10,
        );

        // TODO: we should use this to expand the lesson over multiple blocks
        // const scheduleEndHour = parseInt(schedule.end_time.split(':')[0], 10);
        // return true;
        return scheduleStartHour;
      });
    },

    showScheduleModal(schedule) {
      this.selectedSchedule = schedule;
      this.$nextTick(() => {
        this.$bvModal.show('schedule-details');
      });
    },

    getScheduleSize() {
      return '100%';
    },

    getMaxWidth() {
      return '100%';
    },

    searchDay() {
      if (this.endDate > moment(this.startDate).add(7, 'd').toDate()) {
        this.endDate = moment(this.startDate).add(7, 'd').toDate();
      }
      this.$emit('changed', this.startDate);
    },

    prevDay() {
      this.firstDate = moment(this.firstDate)
        .subtract(this.daysToShow, 'day')
        .toDate();
      this.$emit('changed', this.firstDate);
    },

    nextDay() {
      this.firstDate = moment(this.firstDate)
        .add(this.daysToShow, 'day')
        .toDate();
      this.$emit('changed', this.firstDate);
    },

    defaultDay(date) {
      if (date) {
        this.firstDate = date;
      } else {
        this.firstDate = moment().startOf('today').toDate();
      }

      this.$emit('changed', this.firstDate);
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

<style lang='scss'>
@import 'node_modules/bootstrap/scss/mixins';
@import '~assets/scss/variables';
@import '~assets/scss/newvariables';

#schedule-details___BV_modal_outer_ {
  z-index: 99999 !important;
}

.taiken-warning-text {
  font-size: 12px;
}

.c-grid-container {
  display: grid;

  @include tab {
    .p-1 {
      padding: 0 !important;
    }
  }
}

.c-lesson-calendar-nav {
  padding: 0 15px;
  .btn-group {
    justify-content: space-between;
    margin: 0 auto;
    max-width: 660px;
    width: 100%;

    @include tab {
      flex-wrap: wrap;
      justify-content: center;
    }

    div {
      margin: auto 5px;
      padding: 0.8em 0;
      width: 47%;
      border: 1px solid $blue;
      border-radius: 50px;
      color: $blue;
      white-space: nowrap;
      font-size: 16px;

      @include tab {
        margin-bottom: 10px;
        font-size: 1.1rem;
      }

      .arrow {
        display: inline-block;
        margin-bottom: 2px;
        margin-left: 10px;
        padding: 3px;
        border: solid #2E6EAC;
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
      }

      &.btn-primary {
        background-color: #6c99c4;
        color: $white;
        .arrow {
          border: solid white;
          border-width: 0 2px 2px 0;
        }
      }
      &.btn-light {
        background: $white;
        cursor: pointer;
      }
    }
  }
}

.c-calendar-explanations {
  font-size: 12px;
}

// 1日表示のみ
.days-to-show-1 {
  font-size: 1.4em;
}

.days-to-show-1,
.days-to-show-3 {
  .linebreak-before-weekday {
    display: none !important;
  }
}
.p-studio-schedule {
  font-size: 12px;
}
.lesson_type {
  span {
    display: inline-block;
    margin-bottom: 0.5em;
    padding: 0.5em 1em;
    border: 1px solid #cdd6dd;
    border-radius: 5px;
    background: #f0f3f5;
    color: #3b4043;
    text-align: center;
    font-size: 10px;
  }
}
.schedule_style_list{
display: none;
  &.isShow{
    display: block;
  }
}
.schedule_style_table{
  display: none;
  &.isShow{
    display: block;
  }
}
.s-schedule-list {
  margin: 2em auto 1em;
  max-width: 1200px;
  text-align: left;
  @media (min-width: 769px) {
    margin: 1em auto;
    padding: 0;
  }

  .schedule-item {
    position: relative;
  }
  .schedule-date {
    margin: 1em 0 0.5em;
    margin-top: 0;
    color: $blue;
    font-size: 18px;
    @media (min-width: 769px) {
      position: absolute;
      top: 0;
      padding: 0.5em;
      border-top: 1px solid #cccccc;
    }
  }

  .list-item {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    padding: 1em;
    border-top: 1px solid #cccccc;
    font-size: 16px;

    @include tab {
      margin-bottom: 1em;
      padding: 1em 0.6em;
      border: 1px solid #cccccc;
      .lesson_time {
        margin-bottom: 0.5em;
        padding-left: 1.5em;
        background: url('~/assets/images/studio/detail/icon_time.svg') left
          center no-repeat;
        background-size: 1em auto;
        font-size: 14px;
      }
      .lesson_name{
        margin-bottom: 0.5em;
      }

      .lesson_style {
        font-size: 14px;
        .sp {
          display: inline;
        }
      }
      .box1 {
        width: 100%;
      }
      .lesson_status {
        margin-left: auto;
        width: 100%;
        text-align: right;
      }
      .lesson_staff {
        padding-top: 0.5em;
        width: 100%;
        border-top: 1px solid #cccccc;
        font-size: 14px;
      }
      .lesson_btn {
        margin-top:1em;
        width: 100%;
      }
      .text-danger{
        display: inline;
        font-size: 14px;
      }
      .text-cancel{
        display: inline;
        font-size: 14px;
      }
    }
    .hot_or_normal{
      position: absolute;
      top: 1.2em;
      right: 1.2em;
    display: none;
    padding: 0.5em 1em;
    border: 1px solid #cdd6dd;
    border-radius: 15px;
    color: #3b4043;
    text-align: center;
    font-size: 10px;

    @include tab{
      display: inline-block;
    }
    }
    .lesson_time {
      color: $blue;
    }
    .lesson_style {
      color: $blue;
    }
    .lesson_name {
      color: $blue;
      font-weight: bold;
    }
    .text-warning {
      color: #2e6eac !important;
    }

    .lesson_btn {
      margin: 1.5em auto 0;
      text-align: center;
      button {
        width: 80%;
        height: 3em;
        border: none;
        border-radius: 1.5em;
        background: $blue;
        color: $white;
        &:hover{
          opacity: 0.8;
        }
      }
    }
    @media (min-width: 769px) {
      align-items: center;
      margin-left: 5%;
      width: 95%;
      font-size: 14px;

      .lesson_time {
        order: 1;
        width: 5%;
      }
      .box1 {
        order: 2;
        padding: 0 1em;
        width: 40%;
      }
      .lesson_staff {
        order: 3;
        margin-bottom: 0;
        width: 10%;
      }
      .lesson_style {
        order: 4;
        margin-bottom: 0;
        width: 15%;
      }
      .lesson_status {
        order: 5;
        margin-bottom: 0;
        width: 10%;
        &.no_status{
          color: transparent;
        }
      }
      .lesson_btn {
        order: 6;
        margin-top: 0;
        margin-left: auto;
        width: 20%;
        button {
          max-width: 300px;
          width: 100%;
        }
      }
    }
  }
}
.change_schedule_style {
  position: relative;
  z-index: 20;
  margin-top: 2em;
  margin-left: auto;
  text-align: right;
  p {
    display: inline-block;
    margin-left: 20px;
    width: 30px;
    height: 30px;
    &.active{
      cursor: pointer;
      &:hover{
        opacity: 0.8;
      }
    }
  }
  .btn_style_list {
    background: url('~/assets/images/studio/detail/icon_list.svg') center
      center no-repeat;
    background-size: contain;
    color: transparent;
    &.active{
      background-image:url('~/assets/images/studio/detail/icon_list_g.svg')
    }
  }
  .btn_style_table {
    background: url('~/assets/images/studio/detail/icon_table.svg') center
      center no-repeat;
    background-size: contain;
    color: transparent;
    &.active{
      background-image:url('~/assets/images/studio/detail/icon_table_g.svg')
    }
  }
}
.c-lesson-search {
  margin-top: 2em;
  padding: 2em;
  background: #f0f3f5;

  @include tab {
    padding: 1em 0 0;
    border: 1px solid #cccccc;
  }
  .title {
    color: $blue;
    text-align: center;
    font-weight: bold;
    font-size: 18px;

    @include tab {
      padding-left: 1em;
      text-align: left;
    }
  }
  .search-box {
    display: flex;
    justify-content: space-between;
    padding: 2em;
    background: $white;

    @include tab {
      display: block;
      border-top: 1px solid #cccccc;
    }
    > div {
      display: flex;
      align-items: center;

      @include tab {
        padding: 1em 0 0;
      }
      .search-date {
        @include tab {
          width: 45%;
        }
        button{
          width: 4em;
          background: none;
          color: #495057;
        }
        input {
          padding: 0.5em;
          border: 1px solid #cdd6dd;
          background: url('~/assets/images/studio/detail/icon_calendar.svg') 90%
            center no-repeat;
          background-size: 1em auto;

          @include tab {
            width: 100%;
          }
        }
      }
      p {
        margin: 0;
        padding: 0 1em;
        color: $blue;
      }
    }
    button {
      width: 10em;
      height: 3em;
      border: none;
      border-radius: 1.5em;
      background: $blue;
      color: $white;

      @include tab {
        margin-top: 1em;
        font-size: 18px;
      }
      &:hover{
        opacity: 0.8;
      }
    }
  }
}

@media (max-width: 575px) {
  // 1日表示のみ
  .days-to-show-1 {
    font-size: 1.7em;
  }
  // 3日表示のみ
  .days-to-show-3 {
    font-size: 1.45em;
  }
  // 7日表示のみ
  .days-to-show-7 {
    line-height: 1.3;
  }
}

.p-studio-schedule .card-header {
  border-bottom: none;
}

.p-studio-schedule .card-footer {
  border-top: none;
}
.p-studio-schedule .p-0 {
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  border-left: 1px solid rgba(0, 0, 0, 0.125);
}
.p-studio-schedule .p-0:last-child {
  border-right: 1px solid rgba(0, 0, 0, 0.125);
}
.modal-content {
  .modal-header {
    border-bottom: none;
    .close {
      position: relative;
      margin-top: 25px;
      margin-right: 10px;
      width: 30px;
      height: 30px;
      color: $white;
      &::before,
      &::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        height: 2px;
        background: $blue;
        content: '';
      }
      &::before {
        transform: rotate(45deg);
      }
      &::after {
        transform: rotate(-45deg);
      }
    }
  }
  .modal-body {
    padding-top: 10px;
    padding-right: 20px;
    padding-left: 20px;
  }
  .modal-title {
    margin: 0;
  }
  h1 {
    border-bottom: 1px solid #cccccc;
    color: $blue;
    font-weight: bold;
    font-size: 20px;
  }
  .table td {
    padding: 0.75rem 0;
    border: none;
    font-size: 15px;
  }
  b {
    color: $blue;
  }
  .btn {
    margin: 0 auto;
    padding: 0 !important;
    width: 80%;
    height: 3em;
    border-radius: 1.5em;
    color: $white;
    font-size: 15px;
    line-height: 3em;

    @include tab{
      width: 100%;
    }
    &-orange {
      background: $orange;
    }
  }
}
.c-right {
  @include tab {
    .vdp-datepicker__calendar {
      right: 0;
    }
  }
}
.badge {
  @include sp {
    white-space: normal;
    word-break: break-all;
  }
}
.noDataMsg{
  padding-top: 2em;
  padding-bottom: 2em;
  font-size: 120%;
}
</style>
