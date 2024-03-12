<template>
  <div class="p-voice">
    <PageHeader
      title="ご利用者の声"
      :img="headerImg"
    />
    <Breadcrumb :breadcrumbs="breadcrumbs" />
    <div class="p-voice-movie">
      <div class="l-new-container">
        <p class="lead-text">
          zen placeを通じて<br
            class="sp-only"
          >人生がどんどん豊かになっていく。<br>そんな体験をした、<br
            class="sp-only"
          >ご利用者の声をご覧ください。
        </p>
        <div class="d-flex">
          <div
            v-for="movie in movies"
            :key="movie.url"
          >
            <iframe
              loading="lazy"
              class="ytb-iframe"
              :src="movie.url"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
            <p
              class="movie-text"
              v-html="movie.text"
            />
            <p
              class="movie-person blue"
              v-html="movie.person"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="p-voice-contact bg-blue text-center">
      <div
        class="l-new-container"
        style="max-width: 900px;"
      >
        <p class="title">
          早速レッスンを体験してみる？
        </p>
        <div class="d-flex">
          <div class="contact-box">
            <p class="btn white">
              <nuxt-link to="/studios">
                スタジオを探す
              </nuxt-link>
            </p>
          </div>
          <div class="contact-box">
            <p class="comment">
              体験当日にご入会限定で<br><b>入会金0円</b>
            </p>
            <p class="btn orange">
              <nuxt-link to="/welcome#TrialForm">
                <i class="icon-web" />
                体験レッスン申込
              </nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="p-voice-list">
      <div class="l-new-container">
        <h2 class="blue text">
          他にたくさんの<br class="sp-only">お客様の声を頂いております。
        </h2>
        <div class="d-flex">
          <div
            v-for="voice in voiceItems"
            :key="voice.person"
            class="voice-box"
          >
            <div class="d-flex">
              <p
                class="voice-person blue"
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
              class="voice-text blue"
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
        <div class="p-btn-box">
          <button
            v-if="voices.length - voice_count > 0"
            class="list-item-button"
            type="button"
            @click="isMore"
          >
            もっと見る
          </button>
        </div>
      </div>
    </div>
    <CtaLower />
  </div>
</template>

<script>
import CtaLower from '~/components/CtaLower.vue';
import PageHeader from '~/components/PageHeader.vue';

const headerImg = require('@/assets/images/voice/header.jpg');

export default {
  head() {
    return {
      title: 'ご利用者の声',
      meta: [
        { hid: 'og:title', property: 'og:title', content: 'ご利用者の声' },
        {
          hid: 'description',
          name: 'description',
          content:
            'zen placeを通じて人生がどんどん豊かになっていく。そんな体験をした、ご利用者の声をご覧ください。',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'zen placeを通じて人生がどんどん豊かになっていく。そんな体験をした、ご利用者の声をご覧ください。',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://www.zenplace.co.jp/og-voice.jpg',
        },
      ],
      link: [{ rel: 'canonical', href: 'https://www.zenplace.co.jp/voice' }],
    };
  },
  layout: 'new',
  components: {
    CtaLower,
    PageHeader,
  },
  data() {
    return {
      headerImg,
      movies: [
        {
          url: 'https://www.youtube.com/embed/CvR1_6EGkmk',
          /*
          text: 'ピラティスをやっていくほどに、心も<br>身体も軽やかな気持ちになっていきます。',
          person: 'XXXXXXさん<br>20代女性　会社員　XXXX職',
          */
        },

        {
          url: 'https://www.youtube.com/embed/yrnSMtENuCo',
          /* text: 'ピラティスをやっていくほどに、心も<br>身体も軽やかな気持ちになっていきます。',
          person: 'XXXXXXさん<br>20代女性　会社員　XXXX職',
　　　　　　*/
        },

        {
          url: 'https://www.youtube.com/embed/3bqa7jMUHaE',
          /*
          text: 'ピラティスをやっていくほどに、心も<br>身体も軽やかな気持ちになっていきます。',
          person: 'XXXXXXさん<br>20代女性　会社員　XXXX職',
           */
        },

        {
          url: 'https://www.youtube.com/embed/FiTv-AkTt_4',
          /*
          text: 'ピラティスをやっていくほどに、心も<br>身体も軽やかな気持ちになっていきます。',
          person: 'XXXXXXさん<br>20代女性　会社員　XXXX職',
           */
        },
        {
          url: 'https://www.youtube.com/embed/oF2ra-_YR80',
          /*
          text: 'ピラティスをやっていくほどに、心も<br>身体も軽やかな気持ちになっていきます。',
          person: 'XXXXXXさん<br>20代女性　会社員　XXXX職',
           */
        },
        {
          url: 'https://www.youtube.com/embed/TVmLjYdTJvM',
          /*
          text: 'ピラティスをやっていくほどに、心も<br>身体も軽やかな気持ちになっていきます。',
          person: 'XXXXXXさん<br>20代女性　会社員　XXXX職',
           */
        },

      ],
      voices: [
        {
          person: '45~49歳　女性',
          period: '1年以上〜2年未満',
          text: '身体も心も、人生も変わった。<br>抗がん剤治療の後のリハビリとして、レッスンが生活の一部になり、たぶん、今が一番健康的です。',
          star: '5',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '55~59歳　男性',
          period: '1年以上〜2年未満',
          text: 'インストラクターの質が高い事。',
          star: '4',
          plan: 'プライベート月２・月４',
          tags: [],
        },
        {
          person: '25~29歳　女性',
          period: '半年未満',
          text: '静の時間を取り入れることによってライフスタイル全体に変化が起きた！',
          star: '4',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '45~49歳　女性',
          period: '1年以上〜2年未満',
          text: '体のだるさが取れ、整体に行かなくなった。',
          star: '4',
          plan: 'フリー',
          tags: [],
        },
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
          period: '1年以上〜2年未満',
          text: 'スタジオの雰囲気が良い。<br>心身ともに気持ちが良い。',
          star: '5',
          plan: 'マットグループ月４・月６',
          tags: [],
        },
        {
          person: '35~39歳　女性',
          period: '5年以上',
          text: '体の不調を理解して対応できる力がついた。一方でピラティスの動きがもっと理想的にできるようになりたい。',
          star: '3',
          plan: 'マットグループ月４・月６',
          tags: [],
        },
        {
          person: '55~59歳　女性',
          period: '半年未満',
          text: 'ライフスタイルが維持できるだけでも感動なのに、体が変わって来たことの喜び、精神的な満足感など、ピラティスは自分の生活の高い位置に溶け込んでいるから。',
          star: '5',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '55~59歳　男性',
          period: '3年以上〜5年未満',
          text: '朝起きた時の身体の痛さ、堅さや動かない事、スポーツの怪我、古キズなどどうにもならない事と思っていたが軽減する事がでた。その方向を目指せる事がわかった。<br>身体への理解がすすみ、まだまだやっていけると気持ちが楽しくなった。<br>実際にスポーツの動き易さがある。',
          star: '4',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '50~54歳　女性',
          period: '1年以上〜2年未満',
          text: '風邪をひかなくなったのと、外反母趾で足が痛かったのが痛みが消えた。',
          star: '4',
          plan: 'フリー',
          tags: [],
        },

        {
          person: '25~29歳　女性',
          period: '3年以上〜5年未満',
          text: 'バレエの先生にかわったねと言ってもらえた',
          star: '4',
          plan: 'マットグループ月４・月６',
          tags: [],
        },
        {
          person: '50~54歳　女性',
          period: '5年以上',
          text: '継続すればする程奥が深く、毎回新たな発見がある。',
          star: '3',
          plan: 'マットグループ月４・月６',
          tags: [],
        },

        {
          person: '60~64歳　女性',
          period: '5年以上',
          text: '養成まで取って、正しく行うことの大事さを知れた。',
          star: '4',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '45~49歳　女性',
          period: '5年以上',
          text: '身体を動かすことが精神の安定にも繋がること。<br>長年継続してる事で自信に繋がった事。',
          star: '5',
          plan: 'チケット',
          tags: [],
        },
        {
          person: '45~49歳　女性',
          period: '5年以上',
          text: 'ピラティスは奥が深くまだまだ身体の感覚を感じられないため。',
          star: '3',
          plan: 'マットグループ月４・月６',
          tags: [],
        },
        {
          person: '40~44歳　女性',
          period: '3年以上〜5年未満',
          text: '踊りのクオリティ向上が実感できた。',
          star: '5',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '40~44歳　女性',
          period: '5年以上',
          text: '日常生活のちょっとした動作、階段を上がる、しゃがんで物を拾う、などが以前に比べて格段に楽にできる。',
          star: '5',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '25~29歳　女性',
          period: '半年未満',
          text: '運動をすると体がスッキリする。また、ピラティスはリラックス効果もあり心身共にリラックスできる。',
          star: '4',
          plan: 'チケット',
          tags: [],
        },
        {
          person: '40~44歳　女性',
          period: '5年以上',
          text: '姿勢がよくなりました。<br>欧州への海外出張に耐えられるようになりました。<br>ピラティスが生活の一部になりQOLが上がりました。<br>昔から動けばしんどくなるのではなく、気持ち良くなる運動を求めていたことに気がつきました。<br>今では海外旅行の合間にも現地のスタジオに寄るなどして体調管理に役立っています。<br>予約をとって説明をしてピラティスをするのも人生の楽しみの一つです。',
          star: '5',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '25~29歳　女性',
          period: '1年以上〜2年未満',
          text: '身体の変化というより、マインドの変化。<br>その結果、自分と周りの人、目の前の日々丁寧に大切に生きれるように、そして人生も大きく変わった。<br>今ではピラティスだけでなく、ヨガや瞑想まで取り入れるようになったし、仕事で携わることにもなった。',
          star: '5',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '60~64歳　男性',
          period: '1年以上〜2年未満',
          text: '登山中にバランスを崩す事が少なくなった。<br>昨年、富士山に4回登ったが、ピラティスの呼吸法のおかげで一度も高山病にならなかった。<br><br>自分のカラダの癖や特徴が客観的に見れるようになった。<br>姿勢が良くなったと言われる事が多くなった。<br>血行が良くなり、寒さに強くなった。<br>早朝に受けるレッスンが生活の一部になった。<br>朝からいい気分になることが多くなった。',
          star: '5',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '40~44歳',
          period: '3年以上〜5年未満',
          text: '骨や筋肉の話を聞いて勉強になっているから',
          star: '5',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '30~34歳　女性',
          period: '3年以上〜5年未満',
          text: '身体の正しい使い方がよく分かるようになってきた、不妊だったのが妊娠することができた。',
          star: '5',
          plan: 'マットグループ月４・月６',
          tags: [],
        },
        {
          person: '55~59歳　女性',
          period: '2年以上〜3年未満',
          text: '胸椎が曲がるようになった(接骨院で指摘された。バレエの先生にも上半身が反りやすくなったと言われた)想定外の良いことがあった。身体に詳しくなれた。家族の身体も意識してみられるようになった。',
          star: '5',
          plan: 'チケット',
          tags: [],
        },
        {
          person: '50~54歳　女性',
          period: '3年以上〜5年未満',
          text: '体調の波はあっても続けていくことができているので',
          star: '5',
          plan: 'マットグループ月４・月６',
          tags: [],
        },
        {
          person: '45~49歳　男性',
          period: '1年以上〜2年未満',
          text: 'ヨガも受講出来て、飽きずに続けることが出来ている',
          star: '5',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '45~49歳　女性',
          period: '半年以上〜1年未満',
          text: '筋トレの回数が減った。体調が変わった。筋トレをする時も身体の使い方の意識が変わった。体幹の筋量が増えた。ウェストがくびれた。',
          star: '5',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '40~44歳　女性',
          period: '半年未満',
          text: '体力がついた。腰痛が若干改善されている気がする。',
          star: '3',
          plan: 'プライベート月２・月４',
          tags: [],
        },
        {
          person: '35~39歳　女性',
          period: '半年未満',
          text: '体の変化を感じ始めています。',
          star: '4',
          plan: 'チケット',
          tags: [],
        },
        {
          person: '60~64歳　女性',
          period: '半年以上〜1年未満',
          text: 'インナーマッスルが向上した、軸がぶれなくなってきた',
          star: '4',
          plan: 'マシングループ月４・月８',
          tags: [],
        },
        {
          person: '45~49歳　女性',
          period: '1年以上〜2年未満',
          text: '身体が引き締まりバストアップした。呼吸筋、コアの筋力が強化された。気分転換になっている。',
          star: '5',
          plan: 'チケット',
          tags: [],
        },
        {
          person: '40~44歳　女性',
          period: '1年以上〜2年未満',
          text: 'レッスン後は身体が楽になるから',
          star: '4',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '55~59歳　女性',
          period: '半年未満',
          text: '週複数回、希望のレッスンに参加することができている。',
          star: '4',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '45~49歳　男性',
          period: '1年以上〜2年未満',
          text: '少しずつ改善している実感はあるがまだまだ思うような域には達していないから',
          star: '4',
          plan: 'マットグループ月４・月６',
          tags: [],
        },
        {
          person: '25~29歳　女性',
          period: '半年未満',
          text: '明日なに受けようかなーと考えるのが楽しい、出不精でしたが休みの日に出かける用事ができた。',
          star: '5',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '45~49歳　女性',
          period: '半年以上〜1年未満',
          text: 'いつも使わない筋肉を使うようになった',
          star: '4',
          plan: 'マットグループ月４・月６',
          tags: [],
        },
        {
          person: '45~49歳　男性',
          period: '5年以上',
          text: '未だに腰痛はありますが、ピラティスをやっていなかったらもっと酷いことになっていたと思います。',
          star: '5',
          plan: 'マットグループ月４・月６',
          tags: [],
        },
        {
          person: '45~49歳　女性',
          period: '5年以上',
          text: 'ダンスの為に必要な身体の事を教えてもらえるから',
          star: '4',
          plan: 'マットグループ月４・月６',
          tags: [],
        },
        {
          person: '35~39歳　女性',
          period: '2年以上〜3年未満',
          text: '自律神経失調そのものはピラティスのみでは改善されるものではありませんが改善の一助になってくれ、何より姿勢が良くなり下腹が出始めていたのが戻り、頭痛が減った気がします',
          star: '4',
          plan: 'マットグループ月４・月６',
          tags: [],
        },
        {
          person: '50~54歳　女性',
          period: '2年以上〜3年未満',
          text: '魅力的な先生方のお陰でヨガをやりたいモチベーションが保たれ、継続できている',
          star: '5',
          plan: 'チケット',
          tags: [],
        },
        {
          person: '50~54歳　女性',
          period: '3年以上〜5年未満',
          text: '苦手な動き、自分の体の使い方のクセなどがわかった。',
          star: '3',
          plan: 'マットグループ月４・月６',
          tags: [],
        },
        {
          person: '50~54歳　女性',
          period: '5年以上',
          text: '肩こりが減った。より自分の体を意識するようになった。',
          star: '4',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '60~64歳　男性',
          period: '5年以上',
          text: 'ここのプログラムが継続して利用したくなるように常に変化している点。',
          star: '4',
          plan: 'マットグループ月４・月６',
          tags: [],
        },
        {
          person: '55~59歳　女性',
          period: '5年以上',
          text: 'レッスン内容が充実',
          star: '5',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '30~34歳　女性',
          period: '半年未満',
          text: '耳鼻科で運動不足が原因とされる耳の詰まりがなくなった。お腹やお尻に筋肉がついた気がする。気分転換できるようになった。これからは回数を重ねてより正確なエクササイズ、呼吸を手に入れたい。',
          star: '4',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '30~34歳　女性',
          period: '半年未満',
          text: 'まだ完璧でない',
          star: '4',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '30~34歳　女性',
          period: '半年以上〜1年未満',
          text: '慢性的な運動不足は改善されているような気がします。',
          star: '3',
          plan: 'マットグループ月４・月６',
          tags: [],
        },
        {
          person: '45~49歳　女性',
          period: '半年未満',
          text: 'ピラティスをやると前向きな気持ちになる、スタッフの皆さんが温かい。',
          star: '5',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '30~34歳　女性',
          period: '5年以上',
          text: '定期的に自分自身で肩こりや体のメンテナンスができる。バランスよく体に筋肉がつき、従来あるべき場所に戻った感じがし、ダンスなどのパフォーマンスもあがる。',
          star: '5',
          plan: 'マットグループ月４・月６',
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
          person: '60~64歳　女性',
          period: '5年以上',
          text: '姿勢が良くなったと思う。人から体幹がしっかりしてるねと言われた。インナーマッスルの存在を知り、意識するようになった。',
          star: '4',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '50~54歳　女性',
          period: '5年以上',
          text: '腰痛の改善、便秘の解消とハッキリ表れた',
          star: '5',
          plan: 'マットグループ月４・月６',
          tags: [],
        },
        {
          person: '45~49歳　女性',
          period: '5年以上',
          text: '明確な目的はなかったが楽しいので継続している',
          star: '5',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '65~69歳　男性',
          period: '1年以上〜2年未満',
          text: '姿勢が良くなり、頚椎の痛みが気がついて見るとほとんどなくなってきた。',
          star: '5',
          plan: 'プライベート月２・月４',
          tags: [],
        },
        {
          person: '50~54歳　女性',
          period: '3年以上〜5年未満',
          text: '運動を全くしない生活だったので、新たな世界が開けた。インストラクターとの会話が楽しい。',
          star: '4',
          plan: 'マットグループ月４・月６',
          tags: [],
        },
        {
          person: '60~64歳　女性',
          period: '5年以上',
          text: '自身の体調の変化に少し気付けるようになった。',
          star: '3',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '55~59歳　女性',
          period: '3年以上〜5年未満',
          text: '姿勢がよくなった。ロールアップができるようになりたい！',
          star: '3',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '55~59歳　女性',
          period: '5年以上',
          text: '姿勢がよくなり痩せた。精神的にも強くなった気がする。',
          star: '4',
          plan: 'チケット会員',
          tags: [],
        },
        {
          person: '50~54歳　女性',
          period: '3年以上〜5年未満',
          text: '運動が生活の一部になった',
          star: '5',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '50~54歳　女性',
          period: '半年未満',
          text: '精神面では劇的に変化しました。体重は前より増えましたが、締まるところは締まってきました。すごいです。',
          star: '4',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '50~54歳　女性',
          period: '5年以上',
          text: '脚の痺れがとれ、その後スノーボードクロス西日本地区大会に40代後半で優勝した。<br>さらに2年後にも中部地区大会で、準優勝し中部代表で全日本へ出場でき、ピラティスで身体は変わるという証明をし中高年の星になった。',
          star: '5',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '50~54歳　女性',
          period: '1年以上〜2年未満',
          text: '運動による健康増進を実感できた',
          star: '5',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '60~64歳　男性',
          period: '3年以上〜5年未満',
          text: 'かなり体が整えることが出来ている',
          star: '5',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '50~54歳　女性',
          period: '2年以上〜3年未満',
          text: '腰痛が解消した。スタイルはこれから。',
          star: '3',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '60~64歳　女性',
          period: '5年以上',
          text: '人生に対して、やる気がでた。',
          star: '5',
          plan: 'チケット',
          tags: [],
        },
        {
          person: '60~64歳　女性',
          period: '3年以上〜5年未満',
          text: '3年経ってやっとピラティスの基本が分かり、体が動いてきた',
          star: '4',
          plan: 'マットグループ月４・月６',
          tags: [],
        },
        {
          person: '45~49歳　女性',
          period: '1年以上〜2年未満',
          text: '体調が良くなった（貧血が改善された）',
          star: '4',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '50~54歳　女性',
          period: '3年以上〜5年未満',
          text: 'プログラム、指導方法は大変満足です！<br>努力が足りないので、腹筋の弱さが克服できていない。',
          star: '4',
          plan: 'マットグループ月４・月６',
          tags: [],
        },
        {
          person: '25~29歳　女性',
          period: '2年以上〜3年未満',
          text: '心身共に調子がよい',
          star: '4',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '45~49歳　女性',
          period: '2年以上〜3年未満',
          text: '夜のオンラインクラスで、ズームに入れないことがある。ズームのサインインを求められることは普段はないが、たまに講師側のズームの設定が原因でそのような画面が表示されるようです。そうすると、予約したのにオンラインクラスに参加できなくて困る。この点を改善してほしいです。',
          star: '3',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '40~44歳　女性',
          period: '半年以上〜1年未満',
          text: '姿勢がよくなった。背がのびた。年齢からくる背中や二の腕、腰回りのまるみをもっとなんとかしたい。',
          star: '4',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '40~44歳　女性',
          period: '5年以上',
          text: '運動習慣がついた',
          star: '4',
          plan: 'マットグループ月４・月６',
          tags: [],
        },
        {
          person: '30~34歳　女性',
          period: '3年以上〜5年未満',
          text: '姿勢もスタイルも良くなり、凝らなくなった',
          star: '5',
          plan: 'マットグループ月４・月６',
          tags: [],
        },
        {
          person: '40~44歳　女性',
          period: '1年以上〜2年未満',
          text: 'マッサージなどのリラクゼーションサロンに行かなくなった。',
          star: '4',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '45~49歳　女性',
          period: '1年以上〜2年未満',
          text: 'ピラティスを継続することで、血流の改善や筋力・柔軟性に対する効果を実感している。説明、パフォーマンス指導が分かりやすく、続けて受けたいと思うインストラクターの方がいなくなってしまうのが残念。異動か退職が激しいのでしょうか‥',
          star: '3',
          plan: 'マットグループ月４・月６',
          tags: [],
        },
        {
          person: '55~59歳　男性',
          period: '半年未満',
          text: 'インストラクターとレッスンの愛称がすごく良かった',
          star: '5',
          plan: 'プライベート月２・月４',
          tags: [],
        },
        {
          person: '40~44歳　女性',
          period: '5年以上',
          text: 'ヨガを深く学べている',
          star: '5',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '55~59歳　女性',
          period: '2年以上〜3年未満',
          text: '姿勢が良くなり、体の痛みや不調もなくなったが、家でセルフをできてない。',
          star: '4',
          plan: 'プライベート月２・月４',
          tags: [],
        },
        {
          person: '60~64歳　男性',
          period: '2年以上〜3年未満',
          text: '心の中安静確保は早期に達成、体調管理で腰痛改善は未達成',
          star: '4',
          plan: 'チケット',
          tags: [],
        },
        {
          person: '50~54歳　',
          period: '半年以上〜1年未満',
          text: '首肩の痛みの継続はなく、整骨院に通うこともなくなりました。日々の生活にピラティスがあることが普通になり、楽しいです。',
          star: '4',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '50~54歳　女性',
          period: '半年以上〜1年未満',
          text: '腰痛が予想以上軽減し、日常生活で身体の動かし方を意識する様になれた。',
          star: '4',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '30~34歳　女性',
          period: '3年以上〜5年未満',
          text: 'ピラティスを続けることにより、ストレスが軽減したように思います。',
          star: '4',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '30~34歳　女性',
          period: '半年以上〜1年未満',
          text: '身体が楽なる感覚があり精神的にも安定している実感がある。',
          star: '4',
          plan: 'プライベート月２・月４',
          tags: [],
        },
        {
          person: '50~54歳　女性',
          period: '1年以上〜2年未満',
          text: '体を動かすようになった。自分の身体への意識が高まった。体が引き締まった。',
          star: '5',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '40~44歳　女性',
          period: '半年未満',
          text: 'エデュケーター達の印象が良い！',
          star: '4',
          plan: 'マットグループ月４・月６',
          tags: [],
        },
        {
          person: '45~49歳　女性',
          period: '2年以上〜3年未満',
          text: '身体の使い方を意識できるようになった、コントロールできないところがまだあるのでこれからも続けていきたい',
          star: '5',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '65~69歳　女性',
          period: '3年以上〜5年未満',
          text: '薬も飲んでいますが徐々に骨密度が上がってきました。',
          star: '4',
          plan: 'マットグループ月４・月６',
          tags: [],
        },
        {
          person: '40~44歳　女性',
          period: '2年以上〜3年未満',
          text: '疲れていても、身体もこころも整うようになった',
          star: '4',
          plan: 'マットグループ月４・月６',
          tags: [],
        },
        {
          person: '40~44歳　女性',
          period: '3年以上〜5年未満',
          text: '日常で身体への意識がかわった、足指が開いた。<br>最初はできなかったワークが少しずつできるようになった。<br>今まで運動は苦手だったが、継続できる自分を発見、習慣化、継続すると変われることを知った',
          star: '5',
          plan: 'チケット',
          tags: [],
        },
        {
          person: '50~54歳　女性',
          period: '5年以上',
          text: '身体がほぐれる気分も爽快になる',
          star: '5',
          plan: 'マットグループ月４・月６',
          tags: [],
        },
        {
          person: '55~59歳　女性',
          period: '半年未満',
          text: '自分の癖などをよく観察するようになった。',
          star: '3',
          plan: 'チケット',
          tags: [],
        },
        {
          person: '35~39歳　女性',
          period: '半年未満',
          text: '初めて間もないですが、体の使い方を知ることができ余計な力が抜けた気がする継続していったら体にいいような気がしている',
          star: '3',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '30~34歳　女性',
          period: '半年以上〜1年未満',
          text: '肩こり、姿勢、呼吸がほんとによくなったので効果は大満足です。',
          star: '4',
          plan: 'チケット',
          tags: [],
        },
        {
          person: '40~44歳　女性',
          period: '半年未満',
          text: '気軽に受けられて体型維持が出来る',
          star: '5',
          plan: 'フリー',
          tags: [],
        },
        {
          person: '50~54歳　女性',
          period: '2年以上〜3年未満',
          text: '肩こりが改善された',
          star: '5',
          plan: 'マットグループ月４・月６',
          tags: [],
        },
        {
          person: '25~29歳　女性',
          period: '半年以上〜1年未満',
          text: '継続して間もなく一年となるが、体重が大幅ダウンしたこと、姿勢が良くなった。',
          star: '4',
          plan: 'マットグループ月４・月６',
          tags: [],
        },

      ],
      voice_count: 6,
    };
  },
  computed: {
    breadcrumbs() {
      return {
        data: [
          {
            name: 'TOP',
            path: '/',
          },
          {
            name: 'お客様の声',
          },
        ],
      };
    },
    voiceItems() {
      // dataのlistプロパティからcountプロパティ設定分に絞る
      // const { voices: voices } = this.voices;
      return this.voices.slice(0, this.voice_count);
    },
  },
  methods: {
    isMore() {
      this.voice_count += 3;
    },
  },
};
</script>

<style lang='scss'>
@import '~assets/scss/newvariables';

.p-voice {
  br.sp-only {
    display: none;
    @include tab {
      display: inline;
    }
  }
  br.pc-only {
    display: inline;
    @include tab {
      display: none;
    }
  }
  .sp-only-box {
    display: none;
    @include tab {
      display: block;
    }
  }
  .pc-only-box {
    display: block;
    @include tab {
      display: none;
    }
  }
  &-movie {
    margin-bottom: 80px;
    @include tab {
      margin-bottom: 2em;
    }
    p {
      font-size: 18px;
      @include sp {
        font-size: pv(14);
      }
      &.lead-text {
        font-size: 22px;
        line-height: 2;
        text-align: center;
        margin-bottom: 2em;
        @include sp {
          font-size: pv(16);
        }
      }
    }
    .movie-text {
      background-color: #fff;
      background-image: linear-gradient(180deg, transparent 30px, #707070 1px);
      background-size: 100% 31px;
      line-height: 31px;
      margin-top: 30px;
      @include tab {
        margin-top: 0.5em;
      }
    }
    .d-flex {
      justify-content: space-around;
      flex-wrap: wrap;
      @include tab {
        display: block !important;
      }
      > div {
        width: 45%;
        @include tab {
          width: 100%;
          padding-bottom: 1.5em;
        }
        iframe {
          width: 100%;
          height: 250px;
          @include tab {
            height: 50vw;
          }
        }
      }
    }
  }
  &-contact {
    padding: 50px 0;
    .title {
      color: $white;
      display: inline-block;
      font-size: 24px;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      border: 1px solid $white;
      padding: 16px 18px 12px;
      position: relative;
      margin-bottom: 40px;
      @include sp {
        font-size: pv(20);
      }
      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 6px;
        left: 6px;
        border: 1px solid $white;
      }
    }
    .d-flex {
      justify-content: space-between;
      align-items: end;
      @include tab {
        display: block !important;
      }
      div {
        width: 48%;
        @include tab {
          margin-bottom: 50px;
          margin-left: auto;
          margin-right: auto;
          width: 80%;
        }
        .comment {
          color: $white;
          display: inline-block;
          font-size: 18px;
          letter-spacing: 0.1em;
          text-align: center;
          padding: 0 10px;
          position: relative;
          margin-bottom: 20px;
          @include sp {
            font-size: pv(14);
            line-height: 1.5;
            margin-top: pv(20);
          }
          &::before,
          &::after {
            background: $white;
            content: '';
            position: absolute;
            height: 4em;
            width: 1px;
            top: 0;
            @include sp {
              height: 4em;
            }
          }
          &::before {
            left: -0.5em;
            transform: rotate(-35deg);
          }
          &::after {
            right: -0.5em;
            transform: rotate(35deg);
          }
          b {
            font-size: 26px;
            @include sp {
              font-size: pv(16);
            }
          }
        }
        .btn {
          border-radius: 1.5em;
          display: block;
          font-size: 24px;
          height: 3em;
          line-height: 3em;
          padding: 0;
          width: 100%;
          @include sp {
            font-size: pv(20);
          }
          a {
            display: block;
          }
          &.white {
            background: $white;
            a {
              color: $blue;
            }
          }
          &.orange {
            background: $orange;
            a {
              color: $white;
              i {
                width: 26px;
                height: 20px;
                margin-right: 16px;
              }
            }
          }
        }
      }
    }
  }
  &-list {
    padding: 100px 0;
    @include tab {
      padding: 3em 0;
    }
    h2 {
      text-align: center;
      margin-bottom: 50px;
      @include tab {
        margin-bottom: 1em;
      }
      @include sp {
        font-size: pv(20);
      }
    }
    .d-flex {
      flex-wrap: wrap;
      justify-content: space-between;
      @include tab {
        display: block !important;
      }
      .voice-box {
        border: 1px solid #c6cbd0;
        padding: 30px;
        margin-bottom: 2em;
        width: 32%;
        @include tabH{
          width: 49%;
        }
        @include tab {

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
            font-size: 16px;
          }

        }
        .voice-period::before{
          content: '受講期間：';
        }
        .voice-plan::before{
          content: '会員プラン：';
        }
        .voice-text {
          border-top: 1px solid $orange;
          font-size: 16px;
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
    .p-btn-box {
      text-align: center;
      button {
        background-color: $white;
        background-image: url('~assets/images/voice/icon_more.svg');
        background-repeat: no-repeat;
        background-position: calc(50% - 4em) center;
        background-size: auto 60%;
        border: 1px solid $blue;
        border-radius: 30px;
        color: $blue;
        height: 60px;
        line-height: 60px;
        padding-left: 2em;
        margin: 0 auto;
        width: 20em;
        @include sp {
          border-radius: 2em;
          width: 80%;
          height: 3.5em;
          line-height: 3.5em;
        }
      }
    }
  }
}
</style>
