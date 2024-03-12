<template>
  <div class="p-info-news mx-auto">
    <div
      class="news-content pb-3 my-5 mx-auto"
      style="max-width:700px;"
    >
      <div class="container pt-5">
        <h1 class="text-center pb-5 t-blue">
          緊急事態宣言発令に関する、<br>ZEN PLACEの営業方針について
        </h1>
        <span class="span-date d-block text-right pb-3">2021.02.22 更新</span>
        <p class="pb-5">
          緊急事態宣言の発令に伴い、以下のように対応を強化、一部サービスの提供スケジュールの変更をさせていただきます。
        </p>
        <h2 class="text-center pb-5 t-blue">
          感染予防の徹底
        </h2>
        <p class="pb-5">
          スタジオ内での安全対策について、引き続き、徹底して実施してまいります。<br>
          ―検温：スタジオに入室する、全インストラクター、お客様への検温を行います。<br>
          ―消毒：スタジオ内（マット、ドアノブ、設備）のアルコール消毒をレッスン毎に行います。<br>
          ―換気：レッスン前後、換気を十分に行います。<br>
          ―マスク：インストラクター・受講生ともマスク着用でレッスンを行います。<br>
          ―間隔：定員を70%まで削減し、十分な間隔をとり感染防止に努めます。
        </p>
        <h2 class="text-center pb-5 t-blue">
          サービス提供の変更
        </h2>
        <p
          class="pb-5 mx-auto"
          style="max-width:300px;"
        >
          ■ グループレッスンの本数の一部削減<br>
          ■ プライベートレッスン枠の増設
        </p>
        <h2 class="text-center py-5 t-blue">
          スケジュール変更
        </h2>
        <p class="pb-3">
          <span
            class="d-block pb-3"
            style=""
          >1/13に発出された緊急事態宣言の対象都府県の拡大（一都三県に加え、大阪、兵庫、京都、愛知、岐阜、福岡、栃木）を受け、該当エリアのスタジオが対象となります。</span>
          <strike>1月25日（月）より、1都3県のスタジオについて、20時を跨ぐグループ・レッスン（例： 19:30〜20:25のレッスンなど）は、オンラインのみで行います。</strike> <br><br>
          <b>2月15日（月）より、20時を跨ぐスタジオでのグループ・レッスンを再開いたしました。</b>
        </p>
        <!-- <img
          src="~assets/images/info/news/lessons.jpg"
          alt="プライベート・レッスン"
          class="w-100 d-block mx-auto pb-3"
          style="max-width:500px;"
        >-->
        <h2 class="text-center py-5 t-blue">
          ZEN PLACEより
        </h2>
        <p class="pb-5">
          1月7日に緊急事態宣言が発令されました。寒さが増したこの時期、新型コロナウイルス感染が拡大しているのは、人間の身体の免疫力、抵抗力が低下することが原因の１つです。寒さによって身体が硬直し、縮まり、循環を低下させ、さらに日照時間の減少が、自律神経エネルギーなど生体エネルギーそのものを低下させるため、抵抗力が落ちてしまうのです。<br>
          免疫力、抵抗力が低下するこの時期、私たちがしなければいけないことは、「身体を緩めること」です。縮めるのではなく「伸ばす」「広げる」「ゆるめる」ことだと私たちは考えています。循環を高めるためには、身体を緩め、副交感神経優位にし、心肺機能を高め、深い呼吸をすることです。自律神経エネルギーは、脳内のコントロールによって、ストレス・コントロールによって高まります。筋トレなどの筋肉強化や心肺機能の強化では高まりません。<br><br>
          私たちZEN PLACEの行うピラティス、ヨガは、身体を動かすフィットネス、筋トレではなく、身体の正しい動かし方、呼吸の仕方を学ぶ場です。コロナが流行している今、身体の抵抗力が落ちている今こそ、マスクをつけるという感染予防をしながら、ピラティスやヨガという「ゆるめる動き」を生活に取り入れ、脳内のコントロールをし、感染に強い身体を作っていただきたいと考えています。<br>
          このような中ですが、スタッフ一同気を引き締めて努力いたしますので、ぜひ継続的なご利用、頻度も上げたご利用をお願いいたします。
        </p>
      </div>
      <nuxt-link
        to="/online"
        class="d-block mt-5"
      >
        <img
          src="~assets/images/top_new/topban_studiolive.jpg"
          alt="スタジオからのオンラインレッスン"
          class="w-100 d-block mx-auto"
          style="max-width:500px;"
        >
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import { mapState } from 'vuex';

export default {
  head() {
    return {
      title: 'オンラインヨガ・ピラティス - 全スタジオの全てのレッスンがオンラインで受講可能 - zen place Studio Live Streaming',
      meta: [
        { hid: 'description', name: 'description', content: '日本初！まるでスタジオの仲間と一緒に動いているような「臨場感あふれる」レッスン。全国80以上のヨガ・ピラティススタジオの全てのグループレッスンをLIVE中継！月10,000オンラインレッスンから選べます。' },
        { hid: 'keywords', name: 'keywords', content: 'ピラティス, スタジオ, 体験' },
      ],

    };
  },

  async asyncData({ app }) {
    // TODO: move to store and use that at first
    const studios = await app.$zenplaceApi.getStudios();
    return {
      studios,
    };
  },

  data() {
    const prefectureId = this.$route.query.prefecture_id
      ? parseInt(this.$route.query.prefecture_id, 10)
      : null;
    const areaId = this.$route.query.area_id
      ? parseInt(this.$route.query.area_id, 10)
      : null;

    const facilityFilters = this.$route.query.facility
      ? this.$route.query.facility.split(',')
      : [];
    const textFilter = this.$route.query.filter
      ? this.$route.query.filter
      : '';

    const hot = this.$route.query.temperature_hot
      ? true
      : null;
    const normal = this.$route.query.temperature_normal
      ? true
      : null;

    return {
      showCollapse: false,
      prefectureId,
      areaId,
      facilityFilters,
      textFilter,
      typeFilters: {
        pilates: true,
        yoga: true,
      },
      temperatureFilters: {
        hot,
        normal,
      },
      locales: {
        hot: 'ホット',
        normal: '常温',
      },
    };
  },
  computed: {
    ...mapState([
      'prefectures',
      'areas',
      'brands',
      'facilityTypes',
    ]),

    selectedTemperatureFilters() {
      const selected = _.map(this.temperatureFilters, (v, k) => (v ? k : null));
      return _.compact(selected);
    },

    prefecturesWithStudios() {
      const prefectureIds = _.compact(_.map(this.studios, (s) => s.prefecture_id));
      return _.filter(this.prefectures, (p) => prefectureIds.includes(p.prefecture_id));
    },

    filteredAreas() {
      return _.filter(this.areas, (a) => a.prefecture_id === this.prefectureId);
    },

    filteredStudios() {
      let { studios } = this;
      if (this.prefectureId) {
        studios = studios.filter((s) => s.prefecture_id === this.prefectureId);

        if (this.areaId) {
          studios = studios.filter((s) => s.area_id === this.areaId);
        }
      }

      if (this.textFilter) {
        studios = studios.filter((s) => s.studio_name.indexOf(this.textFilter) >= 0);
      }

      if (!this.typeFilters.pilates) {
        // TODO: pilates & pilates, needs to be fixed on api level
        studios = studios.filter((s) => s.studio_type && (s.studio_type.indexOf('pilates') < 0 && s.studio_type.indexOf('pilatis') < 0));
      }

      if (!this.typeFilters.yoga) {
        studios = studios.filter((s) => s.studio_type && s.studio_type.indexOf('yoga') < 0);
      }

      // TODO: make this filtering happen only when yoga!?
      if (this.selectedTemperatureFilters.length > 0) {
        studios = studios.filter((s) => {
          const temperatures = (s.hot_or_normal || '').split(',');
          if (this.selectedTemperatureFilters.includes('hot') && this.selectedTemperatureFilters.includes('normal')) {
            return temperatures.includes('hot') && temperatures.includes('normal');
          }
          if (this.selectedTemperatureFilters.includes('hot')) {
            return temperatures.includes('hot');
          }
          if (this.selectedTemperatureFilters.includes('normal')) {
            return temperatures.includes('normal');
          }
          return true;
        });
      }

      // Facility filters must include ALL checked
      if (this.facilityFilters.length > 0) {
        studios = studios.filter((s) => {
          const types = (s.facility_type || '').split(',');
          let found = true;
          _.each(this.facilityFilters, (filter) => {
            if (!types.includes(filter)) {
              found = false;
            }
          });
          return found;
        });
      }

      // Finally sort by zip code
      return _.sortBy(studios, (s) => s.zip);
    },

    sortedStudios() {
      return _.sortBy(this.filteredStudios, (d) => d.studio_name);
    },

    selectedPrefecture() {
      return _.find(this.prefectures, (p) => p.prefecture_id === this.prefectureId);
    },

    selectedArea() {
      return _.find(this.areas, (a) => a.area_id === this.areaId);
    },

  },

  watch: {
    $route() {
      this.showCollapse = false;
    },

    textFilter(val) {
      // TODO: generate query in separate method
      const query = _.merge({}, this.$route.query);

      if (!val) {
        delete (query.filter);
      } else {
        query.filter = val;
      }

      return this.$router.push({ query });
    },

    areaId(val) {
      // TODO: generate query in separate method
      const query = _.merge({}, this.$route.query);

      if (!val) {
        delete (query.area_id);
        this.areaId = null;
      } else {
        query.area_id = this.areaId;
      }

      return this.$router.push({ query });
    },

    prefectureId(val, prevval) {
      // TODO: generate query in separate method
      const query = _.merge({}, this.$route.query);

      // if value changed, delete areaId
      if (val !== prevval) {
        delete (query.area_id);
        this.areaId = null;
      }

      if (!val) {
        delete (query.prefecture_id);
        this.prefectureId = null;
      } else {
        query.prefecture_id = this.prefectureId;
      }

      this.$router.push({ query });
    },

    'temperatureFilters.hot': function (val) {
      const query = _.merge({}, this.$route.query);
      if (!val) {
        delete query.temperature_hot;
        this.temperatureFilters.hot = null;
      } else {
        query.temperature_hot = true;
      }
      this.$router.push({ query });
    },
    'temperatureFilters.normal': function (val) {
      const query = _.merge({}, this.$route.query);
      if (!val) {
        delete query.temperature_normal;
        this.temperatureFilters.normal = null;
      } else {
        query.temperature_normal = true;
      }
      this.$router.push({ query });
    },

    facilityFilters(val) {
      // TODO: generate query in separate method
      const query = _.merge({}, this.$route.query);

      if (!val || !val.length) {
        delete (query.facility);
      } else {
        query.facility = this.facilityFilters.join(',');
      }

      this.$router.push({ query });
    },
  },

  methods: {
    removeFacilityFilter(facilityId) {
      this.facilityFilters = this.facilityFilters.filter((ff) => ff !== facilityId);
    },

    getFacilityName(facilityId) {
      const facility = _.find(this.facilityTypes, (d) => d.facility_id === facilityId);
      if (!facility) {
        return facilityId;
      }
      return facility.facility_name;
    },
  },

};

</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital@1&display=swap');
@import '~assets/scss/newvariables';

@media (min-width: 576px){
.p-info-news {
    margin-top: -70px;
}
}

.p-info-news{max-width:1000px;}

.font-title{
  font-family: 'EB Garamond', serif;
  font-style: italic;
  font-size:3rem;
}
.t-blue{color:#0066a4;}
p{font-size:1.6rem; line-height:3rem; letter-spacing:0;}
span.span-date{color:#888;}
.header-top-blue{background-color:#006fb1;}
h1{
margin:0 auto;
line-height:4rem;
font-size:2rem;
text-align:center;}

h1 span.first{font-size:5rem;}
h1 span.span-catch{font-style:italic; font-size:3rem;}

h2.before-line{position:relative; padding-left:50px;}
h2.before-line:before{position:absolute;
content:'';
background-color:#0066a9;
width:60px;
height:1px;
top:50px;
left:-20px;
}
.sub-h2{font-size:1.8rem;}

.big-ttl{font-size:3rem;}
h2.mainttl{font-size:3.8rem;}
p.title-intro{font-size:2.2rem; }

.grade-note{font-size:2rem;}
.head-message{
  max-width:600px;
  margin:0 auto;
}

.simple-btn{max-width:250px; border:1px solid #333; padding:15px;}
.lifestyle-row{max-width:1000px;}

.pc{display:block;}
.sp{display:none;}

a.blue-link{color:#0066a4; text-decoration:underline;}
span.infonote{font-size:1.3rem; color:#555; max-width:350px; text-align:left; }

.sec-lessons p{font-size:2.5rem; line-height:4rem; text-align:center;}

.sec-private{background-color:#e7e8e8; position:relative; height:170px;}
.sec-private img{display:inline-block;}
.sec-private .private-inner{position:absolute; left:0; right:0; top:-40px; max-width:800px;}
.sec-private .private-text{display:inline-block; padding-left:30px; font-size:3rem;}

.sec-yoyaku{ font-family:$gothic; margin-top:70px;}
.sec-yoyaku p{font-size:2rem;}
.sec-yoyaku a.btn-blue{ font-family:$gothic; padding: 30px 20px; font-weight:bold; font-size:2rem; background-color:#0066a4; color:#fff; position:relative;
}
.sec-yoyaku a.btn-blue:after{
       font-family: icomoon!important;
        content: "\e900";
    position: absolute;
    text-align: center;
    font-size: 20px;
    right: 23px;
    bottom: 15px;
    line-height:60px;
    color: #fff;
     -moz-transition: all .5s ease;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
      -ms-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
}

.sec-mat{ background-color:#036fb1; font-family:$gothic;
}

.sec-mat a.btn-dark{ font-family:$gothic; padding:15px 20px; font-weight:bold;
}

/*--section-middle--*/
.section-middle{position:relative; background-color:#e7e8e8;}
p.li-title{font-size:2.8rem;}
ul.live-list li{
  display:block;
  background-color:#0066a4;
  color:#fff;
  margin:15px auto;
  padding:30px 50px;
  font-size:2.5rem;
}

.bg-intro{
  background:url(~assets/images/online/studiolivestreaming/studio-bg.jpg) center no-repeat;
  background-size:cover;
}

/*--sec-use--*/
.sec-use{background-color:#e7e8e8;}
.sec-use ul li{position:relative;
padding-left:40px; margin:20px auto; font-size:2rem;}
.sec-use ul li.point1:before{
  content:'1.';
  position:absolute;
  left:0;
  top:10px;
  color:#0066a4;
  font-size:3rem;
}
.sec-use ul li.point2:before{
  content:'2.';
  position:absolute;
  left:0;
  top:10px;
  color:#0066a4;
  font-size:3rem;
}
.sec-use ul li.point3:before{
  content:'3.';
  position:absolute;
  left:0;
  top:10px;
  color:#0066a4;
  font-size:3rem;
}

/*--sec-column--*/
.sec-column .row{margin:15px auto;}
.sec-column a{text-decoration:underline;}

@media screen and (max-width:768px){
.pc{display:none;}
.sp{display:block;}

p{line-height:3rem;}

h1 span.span-catch{font-style:italic; font-size:1.8rem;}

h1 img{
width:90%;
max-width:400px;
}

.bg-intro{
  background:none;
}
.block-info{background:#fff; max-width:100%;}
.block-info p{font-size: 1.8rem; text-align:left;}

#subnavbar {top:50px;}

.lifestyle-row{display:none;}

/*--section-middle--*/
.big-ttl{font-size:2rem; padding-top:10px; display:block;}
h2.mainttl{font-size:2.8rem; line-height:4rem;}

.section-middle{position:relative;}
.section-middle h2{font-size:2.6rem;}
.section-middle .section-bg{background-color:#e7e8e8;position:absolute;
height:700px; width:100%; top:0; left:0; z-index:-1;}

p.li-title{font-size:2rem;}

ul.live-list li{
  display:block;
  background-color:#0066a4;
  color:#fff;
  margin:15px auto;
  padding: 15px 20px;
  font-size:1.8rem;
}

.sec-lessons p{font-size:1.8rem; line-height:3.5rem; text-align:left;}

.sec-private{background-color:#e7e8e8; position:relative; height:400px;}
.sec-private .private-inner{position:absolute; left:0; right:0; top:-40px;}
.sec-private img{display:block;}
.sec-private .private-text{ display:block; padding-top:20px; padding-left:10px; padding-right:10px; font-size:2.3rem; text-align:center;}

.sec-yoyaku{ font-family:$gothic; margin-top:0px;}
.sec-yoyaku p{font-size:2rem;}
.sec-yoyaku a.btn-blue{ font-family:$gothic; padding:20px; font-weight:bold; background-color:#0066a4; color:#fff;
}
.sec-yoyaku a.btn-blue:after{
       font-family: icomoon!important;
        content: "\e900";
    position: absolute;
    text-align: center;
    font-size: 20px;
    right: 23px;
    bottom: 15px;
    line-height:40px;
    color: #fff;
     -moz-transition: all .5s ease;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
      -ms-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
}

}

.p-info-corona p{max-width:700px; }
.p-info-corona a.blue-link{color:#0066a4; text-decoration:underline;}
.p-info-corona span.blog-date{
    font-size: 1.5rem;
    color: #999;
    display: block;
    padding-bottom: 10px;}

.p-info-corona h2 span{font-size:5rem;}
.p-info-corona h2{font-size:2.5rem;}
.p-info-corona p.limit-p{font-size:2rem;}
.p-info-corona p.main-p{font-size:2.5rem; color:#0066a4; line-height:5rem;}
.p-info-corona p.main-p span.big{font-size:4rem;}
.p-info-corona p.exp-p{font-size:2rem; line-height:3rem;}
.p-info-corona p.infonote{background-color:#f3f3f3; padding:15px;
font-size:1.3rem;
}

.p-info-corona .main-bg{background-color:#0066a4; }
.p-info-corona .main-bg .container{max-width:800px; margin:0 auto; }
.p-info-corona .main-bg .row{background-color:#fff; border-radius:20px; text-align:center;}
.p-info-corona .taisaku-p {padding-top:20px;}
.p-info-corona .taisaku-p span {font-size:3.5rem; font-weight:bold; display:block; margin:0 auto; text-align:center;}
.p-info-corona .taisaku-p p{font-size:1.5rem;}
.p-info-corona .row img{max-width:400px;}
.p-info-corona .enquete-p{text-align:left; font-size:2rem;}

@media screen and (max-width:768px){
.p-info-corona p.main-p{font-size:2rem; color:#0066a4; line-height:4rem;}
.p-info-corona p.main-p span.big{font-size:3.5rem;}
.p-info-corona p.exp-p{font-size:1.8rem;}
.p-info-corona .taisaku-p {padding-top:5px;}
.p-info-corona .taisaku-p span {font-size:3.5rem; font-weight:bold; display:block; margin:0 auto; text-align:center;}
.p-info-corona .taisaku-p p{font-size:1.5rem;}
.p-info-corona .enquete-p{text-align:center; font-size:2rem;}

}

</style>
