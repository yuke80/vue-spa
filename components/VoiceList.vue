<template>
  <div class="voice-list">
    <div class="d-flex">
      <div
        v-for="voice in voiceItems"
        :key="voice.person"
        class="voice-box"
      >
        <div class="d-flex">
          <p
            class="voice-person"
            v-html="voice.person"
          />
          <div
            v-if="voice.star === '5'"
            class="voice-star"
          >
            <img
              src="~/assets/images/voice/star5.png"
              alt=""
            >
          </div>
          <div
            v-else-if="voice.star === '4'"
            class="voice-star"
          >
            <img
              src="~/assets/images/voice/star4.png"
              alt=""
            >
          </div>
          <div
            v-else-if="voice.star === '3'"
            class="voice-star"
          >
            <img
              src="~/assets/images/voice/star3.png"
              alt=""
            >
          </div>
          <div
            v-else-if="voice.star === '2'"
            class="voice-star"
          >
            <img
              src="~/assets/images/voice/star2.png"
              alt=""
            >
          </div>
          <div
            v-else-if="voice.star === '1'"
            class="voice-star"
          >
            <img
              src="~/assets/images/voice/star1.png"
              alt=""
            >
          </div>
        </div>

        <p
          class="voice-text"
          v-html="voice.text"
        />
        <div class="voice-tags">
          <p
            class="voice-period"
            v-html="voice.period"
          />
          <p
            class="voice-plan"
            v-html="voice.plan"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {

  data() {
    return {
      voices: [
        {
          person: '55~59歳　女性',
          period: '2年以上〜3年未満',
          text: '頭痛の回数は減り、肩こりも以前に比べると改善してきている。<br>姿勢も良くなり、歩くのが好きになり歩く速度も早くなった。',
          star: '4',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '30~34歳　女性',
          period: '半年未満',
          text: '・肩凝りが少しずつ辛くなくなってきている<br>・スタイルが変わってきているのが目で見てわかる<br>・レッスン後は頭がクリアになり仕事により集中できて良さを実感している',
          star: '4',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '45~49歳　女性',
          period: '1年以上〜2年未満',
          text: '身体も心も、人生も変わった。<br>抗がん剤治療の後のリハビリとして、レッスンが生活の一部になり、たぶん、今が一番健康的です。',
          star: '5',
          plan: 'フリー',
          tags: [],
        },

      ],
    };
  },
  computed: {
    voiceItems() {
      return this.voices;
    },
  },
};
</script>
<style lang='scss' scoped>
@import '~assets/scss/newvariables';
.voice-list{
.d-flex {
      flex-wrap: wrap;
      justify-content: space-between;
      @include tab {
        display: block !important;
      }
      .voice-box {
        background: $white;
        // border: 1px solid #c6cbd0;
        box-shadow: 0  1px 2px rgba(0, 0, 0, 0.1);
        padding: 30px;
        width: 32%;
        @include tabH{
          width: 49%;
          margin-bottom: 2em;
        }
        @include tab {
          margin-bottom: 2em;
          padding: 1.5em 1em;
          width: 100%;
        }
        .d-flex{
          display: flex !important;
        }
        .voice-person {
          font-size: 18px;
          width: 60%;
          @include tabH {
            font-size: 1.7rem;
          }
        }
        .voice-period::before{
          content: '受講期間：';
        }
        .voice-plan::before{
          content: '会員プラン：';
        }
        .voice-text {
          border-top: 1px solid #dee2e6;
          font-size: 1.7rem;
          padding-top: 0.5em;
        }
        .voice-star {
          width: 40%;
          @include tab{
              max-width: 110px;
          }
          img {
            width: 100%;

          }
        }
        .voice-tags {
          p {
            display: inline-block;
            border: 1px solid #cdd6dd;
            border-radius: 10px;
            font-size: 11px;
            padding: 0.2em 1em;
            margin-right: 1em;
            margin-top: 0.5em;
            margin-bottom: 0;
          }
        }
      }
    }
}
</style>
