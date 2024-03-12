<template>
  <div class="p-price">
    <PageHeader
      title="料金について"
      :img="headerImg"
    />
    <Breadcrumb :breadcrumbs="breadcrumbs" />
    <div class="p-price-movie alignC mx-auto">
      <div class="l-new-container">
        <p class="lead-text">
          ピラティス・ヨガに通いたい、興味がある。<br>けど、どのように活用すればいいだろう？<br
            class="sp-only"
          >忙しくて通えるかな・・・<br>そんなあなたに送る
        </p>
        <p class="blue font-weight-bold title">
          zen placeで、<br
            class="sp-only"
          >変わり始める自分の人生
        </p>
        <p class="blue font-weight-bold">
          〜あなたにぴったりなプランの見つけ方〜
        </p>
        <div class="ytb-content">
          <iframe
            class="ytb-iframe"
            loading="lazy"
            src="https://www.youtube.com/embed/HiaNSghlwas"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div class="text-center">
          <a
            href="#p-price-list"
            class="btn-blue_border"
          >
            料金を見る
          </a>
        </div>
        <div class="price-revision">
          <nuxt-link
            to="/news/info/11723"
          >
            料金改定のお知らせはこちら
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="c-pricecase bg-blue text-center">
      <div class="l-new-container">
        <p class="white">
          悩んでいる方へモデルケースを確認！
        </p>
        <div class="scroll-box">
          <div class="d-flex">
            <div class="case-box num01">
              <img
                src="~assets/images/price/case-1.png"
                loading="lazy"
                alt=""
              >
              <p class="pink title">
                30〜40代女性
              </p>
              <ul>
                <li>姿勢が気になる</li>
                <li>時間にゆとりができて、何か挑戦したい</li>
                <li>いつまでも心身ともに美しくキレイでいたい</li>
                <li>ストレスケア・セルフケアをしたい</li>
                <li>体調・ボディラインの変化が気になる</li>
                <li>忙しくて、続くか不安</li>
              </ul>
              <nuxt-link
                to="/price#Case1"
                class="blue"
              >
                Read more
              </nuxt-link>
            </div>
            <div class="case-box num02">
              <img
                src="~assets/images/price/case-2.png"
                loading="lazy"
                alt=""
              >
              <p class="blue title">
                エグゼクティブ/経営者
              </p>
              <ul>
                <li>仕事と趣味のパフォーマンスをあげたい</li>
                <li>頭をすっきりさせたい</li>
                <li>いくつになってもかっこよくありたい</li>
                <li>通うための移動時間がもったいない</li>
                <li>忙しいけど自分の時間も大切にしたい</li>
              </ul>
              <nuxt-link
                to="/price#Case2"
                class="blue"
              >
                Read more
              </nuxt-link>
            </div>
            <div class="case-box num03">
              <img
                src="~assets/images/price/case-3.png"
                loading="lazy"
                alt=""
              >
              <p class="pink title">
                20代後半の会社員
              </p>
              <ul>
                <li>今からしっかり健康意識しておきたい</li>
                <li>新しい趣味でストレスケアもしたい</li>
                <li>社会人生活に気分転換がほしい</li>
              </ul>
              <nuxt-link
                to="/price#Case3"
                class="blue"
              >
                Read more
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="p-price-about alignC">
      <div class="l-new-container">
        <p class="blue font-weight-bold">
          zen placeなら！
        </p>
        <div class="box d-flex">
          <p><small>わかりやすい</small>月額料金</p>
          <p class="plus">
            <img src="~/assets/images/price/icon_plus.svg">
          </p>
          <p>チケット制</p>
        </div>
        <p class="blue font-weight-bold mb-30">
          同じグレード内なら、<br class="sp-only">どのエリアでも通い放題です。
        </p>
        <p>
          ピラティス、ヨガのレッスンを<br class="sp">ご自宅や職場の近く、休日のお出かけ前など<br>あなたの好きな場所・時間で<br class="sp">受けることができます。
        </p>
      </div>
    </div>

    <section class="p-price-grade py-0">
      <div class="l-new-container grade-cont py-5">
        <h2 class="c-header-border-bottom blue">
          グレードについて
        </h2>
        <p class="text-center pb-3">
          各都市のエリア / 設備の充実度に応じて、<br
            class="sp-only"
          >グレードを01-02に分けています。
        </p>
        <div class="text-center">
          <nuxt-link
            to="/studio-grades"
            class="btn-blue_border"
          >
            スタジオグレードを見る
          </nuxt-link>
        </div>
      </div>
    </section>

    <section class="p-price-table alignC admission">
      <div
        class="l-new-container"
        style="max-width:900px;"
      >
        <div
          v-for="(at, i) in admisstionTables"
          :key="i"
          class="c-pricetable-wrap"
        >
          <div class="c-pricetable">
            <div
              v-for="(r, j) in at.table"
              :key="j"
              class="c-pricetable-row"
            >
              <div
                v-for="(c, k) in r"
                :key="k"
                class="c-pricetable-col"
              >
                <div v-html="c" />
              </div>
            </div>
          </div>
        </div>

        <p class="register-note font-weight-bold">
          体験当日にご入会限定で<br><b>入会金0円</b>
        </p>

        <div class="mt-5 text-center">
          <nuxt-link
            to="/price#special-plan"
            class="btn-blue to-special-plan"
          >
            特別プランを見る
          </nuxt-link>
        </div>
      </div>
    </section>
    <section
      id="p-price-list"
      class="p-price-tab"
    >
      <h2 class="c-header-border-bottom">
        レッスン種別料金表
      </h2>
      <p>レッスン名をクリックすると料金表が表示されます。</p>
      <div class="l-new-container">
        <ul>
          <li
            :class="{ active: isActive === 'mat' }"
            @click="change('mat')"
          >
            マットグループレッスン
            <i class="arrow" />
          </li>
          <li
            :class="{ active: isActive === 'machine' }"
            @click="change('machine')"
          >
            マシングループレッスン
            <i class="arrow" />
          </li>
          <li
            :class="{ active: isActive === 'private' }"
            @click="change('private')"
          >
            プライベートレッスン
            <i class="arrow" />
          </li>
          <li
            :class="{ active: isActive === 'ticket' }"
            @click="change('ticket')"
          >
            チケット制
            <i class="arrow" />
          </li>
        </ul>
      </div>
    </section>
    <section
      v-if="isActive === 'mat'"
      class="p-price-table"
    >
      <div class="l-new-container">
        <h2>
          マットグループレッスン
        </h2>
        <div class="c-twotitles tab white">
          <div
            class="left"
            :class="{ active: tab1 == 1 }"
            @click="tab1 = 1"
          >
            月額料金
          </div>
          <div
            class="right"
            :class="{ active: tab1 == 2 }"
            @click="tab1 = 2"
          >
            体験レッスン
          </div>
        </div>
        <div
          v-for="(mt, i) in mattTables"
          v-show="tab1 == i + 1"
          :key="i"
          class="c-pricetable-wrap"
        >
          <h3 class="p-price-table-h3">
            {{ mt.title }}
          </h3>
          <div class="c-pricetable">
            <div
              v-for="(r, j) in mt.table"
              :key="j"
              class="c-pricetable-row"
            >
              <div
                v-for="(c, k) in r"
                :key="k"
                class="c-pricetable-col"
              >
                <div v-html="c" />
              </div>
            </div>
          </div>
          <p v-html="mt.text" />
        </div>
      </div>
    </section>

    <section
      v-if="isActive === 'machine'"
      class="p-price-table"
    >
      <div class="l-new-container">
        <h2>
          マシングループレッスン
        </h2>
        <div class="c-twotitles tab">
          <div
            class="left"
            :class="{ active: tab3 == 1 }"
            @click="tab3 = 1"
          >
            月額料金
          </div>
          <div
            class="right"
            :class="{ active: tab3 == 2 }"
            @click="tab3 = 2"
          >
            体験レッスン
          </div>
        </div>
        <div
          v-for="(pt, i) in machineTables"
          v-show="tab3 == i + 1"
          :key="i"
          class="c-pricetable-wrap"
        >
          <h3 class="p-price-table-h3">
            {{ pt.title }}
          </h3>
          <div class="c-pricetable">
            <div
              v-for="(r, j) in pt.table"
              :key="j"
              class="c-pricetable-row"
            >
              <div
                v-for="(c, k) in r"
                :key="k"
                class="c-pricetable-col"
              >
                <div v-html="c" />
              </div>
            </div>
          </div>
          <p v-html="pt.text" />
        </div>
      </div>
    </section>

    <section
      v-else-if="isActive === 'private'"
      class="p-price-table"
    >
      <div class="l-new-container">
        <h2>
          プライベートレッスン
        </h2>
        <div class="c-twotitles tab">
          <div
            class="left"
            :class="{ active: tab2 == 1 }"
            @click="tab2 = 1"
          >
            月額料金
          </div>
          <div
            class="right"
            :class="{ active: tab2 == 2 }"
            @click="tab2 = 2"
          >
            体験レッスン
          </div>
        </div>
        <div
          v-for="(pt, i) in privateTables"
          v-show="tab2 == i + 1"
          :key="i"
          class="c-pricetable-wrap"
        >
          <h3 class="p-price-table-h3">
            {{ pt.title }}
          </h3>
          <div class="c-pricetable">
            <div
              v-for="(r, j) in pt.table"
              :key="j"
              class="c-pricetable-row"
            >
              <div
                v-for="(c, k) in r"
                :key="k"
                class="c-pricetable-col"
              >
                <div v-html="c" />
              </div>
            </div>
          </div>
          <p v-html="pt.text" />
        </div>
      </div>
    </section>
    <section
      v-else-if="isActive === 'ticket'"
      class="p-price-table"
    >
      <div class="l-new-container">
        <h2>
          チケット
        </h2>
        <div class="c-twotitles tab">
          <div
            class="left"
            :class="{ active: tab4 == 1 }"
            @click="tab4 = 1"
          >
            グレード01
          </div>
          <div
            class="right"
            :class="{ active: tab4 == 2 }"
            @click="tab4 = 2"
          >
            グレード02
          </div>
        </div>
        <div
          v-for="(pt, i) in ticketTables"
          v-show="tab4 == i + 1"
          :key="i"
          class="c-pricetable-wrap"
        >
          <h3 class="p-price-table-h3">
            {{ pt.title }}
          </h3>
          <div class="c-pricetable">
            <div
              v-for="(r, j) in pt.table"
              :key="j"
              class="c-pricetable-row"
            >
              <div
                v-for="(c, k) in r"
                :key="k"
                class="c-pricetable-col"
              >
                <div v-html="c" />
              </div>
            </div>
          </div>
          <p v-html="pt.text" />
        </div>

        <h3 class="ticket-use-h3">
          チケット利用例
        </h3>
        <div class="ticket-use-cont text-left">
          <ul class="ticket-use pl-0 pt-3">
            <li>プライベートレッスン： <span>3枚〜</span></li>
            <li>マシングループレッスン： <span>1枚〜</span></li>
            <li>マットグループレッスン： <span>1枚〜</span></li>
          </ul>
          <p class="text-left">
            <a href="https://www.zenplace.co.jp/upload/99624451/ZEN_price_202210.pdf">
              2022年11月に料金改定を行いました。<br class="sp">詳細はこちらよりご確認ください。
            </a>
          </p>
          <p class="text-left">
            スタジオグレード・会員種別により利用枚数が異なります。詳しくはご利用のスタジオへ問い合わせください。
          </p>
        </div>
      </div>
    </section>
    <CtaLower />
    <KnowmoreZenplace class="pc-only-box" />

    <section
      id="special-plan"
      class="p-price-course"
    >
      <h2 class="c-header-border-bottom blue">
        お得な情報
      </h2>
      <div class="c-column-alternate">
        <div class="c-column-alternate-single">
          <div class="l-new-container">
            <div class="bg-white">
              <h3>
                <img
                  class="num"
                  loading="lazy"
                  src="~assets/images/reasons/01.png"
                >特別割引プラン
              </h3>
              <p>
                zen
                placeでは、ピラティス・ヨガをライフスタイルにとりいれて継続していただけるよう、みなさまのライフステージにあった特別料金やzen
                placeをご愛顧くださっているみなさまに特別料金をご用意しております。<br>
                対象の方は、スタジオでぜひお声がけいただき、ご利用ください。<br><br>
                <span
                  class="d-block font-weight-bold special-span-title"
                >■ UNDER 25：25歳以下の方</span>
                ・対象プラン：フリー、月4、月6<br>
                ・割引額：対象プランの月額会費 <strong><u>20％オフ</u></strong><br><br>
                <span
                  class="d-block font-weight-bold special-span-title"
                >■ OVER 70：70歳以上の方</span>
                ・対象プラン：デイフリー、月4 (AM9～PM6前のクラス限定)​<br>
                ・割引額：対象プランの月額会費 <strong><u>40％オフ</u></strong><br><br>
                <span
                  class="d-block font-weight-bold special-span-title"
                >■ 継続割引：継続割引き落とし対象月の前月から直近36カ月間のレッスン受講回数に応じて、「継続割」として割引・還元させていただいています。</span>
                ・対象：入会後連続37ヶ月以上の方<br>
                フリー、デイフリー、月6、月4、プライベート4、プライベート2、マシングループ8、マシングループ4<br>
                ・割引額：月額会費 <span
                  class="font-weight-bold"
                  style="color: #e93842"
                ><u>最大4,000円オフ</u></span><br><br>
                <span class="d-block plan-note">
                  ※クラムるおよび養成コースのレッスン受講を除いた累計出席回数に応じて、下記のように月会費から割引を行います。<br>
                  ・280回以上：4,000円引き<br>
                  ・210回以上：3,000円引き<br>
                  ・70回以上 ：2,000円引き<br><br>
                  ※直近36ヶ月の受講回数をもとに算出<br>
                  「直近36カ月」とは、入会初月から連続してカウントを行い、年に1度更新します。（休会・チケットのみ購入期間も含む）<br><br>
                  ※申告の際に身分証明書の提示が必要です。<br>
                  ※入会キャンペーンとの併用可能<br>
                  ※他の割引との併用不可<br>
                  ※その他加入条件あり
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="c-column-alternate-single right">
          <div class="l-new-container">
            <div class="bg-white">
              <h3>
                <img
                  class="num"
                  loading="lazy"
                  src="~assets/images/reasons/02.png"
                >「クラムる」もお得に！
              </h3>
              <p>
                「クラムる」はピラティス・ヨガの動きを取り入れた効率的で効果的な短時間集中型の動画レッスンです。<br>
                クラムるはzen place会員の皆さまは<strong><u>50％割引</u></strong>でご利用いただけます。さらに、<strong>初期の2ヶ月が無料！</strong>
              </p>
              <nuxt-link
                to="/online/cramuru"
                class="btn-blue_border"
              >
                クラムるについて
              </nuxt-link>
            </div>
          </div>
        </div>

        <div class="c-column-alternate-single">
          <div class="l-new-container">
            <div class="bg-white">
              <h3>
                <img
                  class="num"
                  loading="lazy"
                  src="~assets/images/reasons/03.png"
                >養成コース受講生特別価格
              </h3>
              <p>
                zen place academyが提供するBASI・YogaWorks・Balanced
                Bodyインストラクター資格の受講生は月額が安くなっています。
                「フリー会員」が
                <strike>16,940円</strike>
                11,000円（税込）！チケットも特別価格で購入いただけます。
              </p>
              <nuxt-link
                to="/academy"
                class="btn-blue_border"
              >
                zen place academyについて
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="c-column-alternate-single right">
          <div class="l-new-container">
            <div class="bg-white">
              <h3>
                <img
                  class="num"
                  loading="lazy"
                  src="~assets/images/reasons/04.png"
                >オンライン専用会員
              </h3>
              <p>
                近くにスタジオがない方、今は外出を控えている方も、入会からカウンセリングまで全てオンラインで完結することができ、ご自宅からzen
                placeのレッスンを受講することが可能です。
              </p>
              <nuxt-link
                to="/online/member"
                class="btn-blue_border"
              >
                オンライン専用会員について
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="c-pricecase bg-blue text-center">
      <div class="l-new-container">
        <p class="white">
          悩んでいる方へモデルケースを確認！
        </p>
        <div class="scroll-box">
          <div class="d-flex">
            <div class="case-box num01">
              <img
                src="~assets/images/price/case-1.png"
                loading="lazy"
                alt=""
              >
              <p class="pink title">
                30〜40代女性
              </p>
              <ul>
                <li>姿勢が気になる</li>
                <li>時間にゆとりができて、何か挑戦したい</li>
                <li>いつまでも心身ともに美しくキレイでいたい</li>
                <li>ストレスケア・セルフケアをしたい</li>
                <li>体調・ボディラインの変化が気になる</li>
                <li>忙しくて、続くか不安</li>
              </ul>
              <nuxt-link
                to="/price#Case1"
                class="blue"
              >
                Read more
              </nuxt-link>
            </div>
            <div class="case-box num02">
              <img
                src="~assets/images/price/case-2.png"
                loading="lazy"
                alt=""
              >
              <p class="blue title">
                エグゼクティブ/経営者
              </p>
              <ul>
                <li>仕事と趣味のパフォーマンスをあげたい</li>
                <li>頭をすっきりさせたい</li>
                <li>いくつになってもかっこよくありたい</li>
                <li>通うための移動時間がもったいない</li>
                <li>忙しいけど自分の時間も大切にしたい</li>
              </ul>
              <nuxt-link
                to="/price#Case2"
                class="blue"
              >
                Read more
              </nuxt-link>
            </div>
            <div class="case-box num03">
              <img
                src="~assets/images/price/case-3.png"
                loading="lazy"
                alt=""
              >
              <p class="pink title">
                20代後半の会社員
              </p>
              <ul>
                <li>今からしっかり健康意識しておきたい</li>
                <li>新しい趣味でストレスケアもしたい</li>
                <li>社会人生活に気分転換がほしい</li>
              </ul>
              <nuxt-link
                to="/price#Case3"
                class="blue"
              >
                Read more
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="c-case-navi">
      <ul>
        <li :class="{ activeCase: isCase1 }">
          <nuxt-link to="#Case1">
            <img
              src="~/assets/images/price/btn_case01.png"
              alt="case01 20〜40代女性"
            >
          </nuxt-link>
        </li>
        <li :class="{ activeCase: isCase2 }">
          <nuxt-link to="#Case2">
            <img
              src="~/assets/images/price/btn_case02.png"
              alt="case02 エグゼクティブ/経営者"
            >
          </nuxt-link>
        </li>
        <li :class="{ activeCase: isCase3 }">
          <nuxt-link to="#Case3">
            <img
              src="~/assets/images/price/btn_case03.png"
              alt="case03 20代前半の社会人"
            >
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div
      v-for="item in cases"
      :key="item.num"
    >
      <section
        :id="item.num"
        class="p-price-case"
      >
        <div class="l-new-container">
          <h3 class="blue">
            {{ item.title }}
          </h3>
          <p v-html="item.text" />
        </div>
        <div class="l-new-container sp-wide">
          <p class="font-l">
            そんなあなたにこそ、<br class="sp-only">zen placeはおすすめです。
          </p>
          <ul>
            <li
              v-for="list in item.list"
              :key="list.title"
              class="blue"
            >
              {{ list.title }}
            </li>
          </ul>
        </div>
        <!-- <div class="l-new-container">
          <p class="title-voice">
            <span>User Voice</span>人生変わった体験者の声
          </p>
          <div class="d-flex">
            <div
              v-for="movie in item.movies"
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
          <div class="voice-btn">
            <nuxt-link
              to="/voice"
              class="btn-blue_border"
            >
              zen place 利用者の声
            </nuxt-link>
          </div>
        </div>-->
      </section>
      <!-- <CtaLower />-->
    </div>
    <KnowmoreZenplace />
  </div>
</template>

<script>
import CtaLower from '~/components/CtaLower.vue';
import PageHeader from '~/components/PageHeader.vue';
import KnowmoreZenplace from '~/components/KnowmoreZenplace.vue';

const headerImg = require('@/assets/images/price/header.jpg');
// const img1 = require('@/assets/images/price/lesson1.jpg');
// const img2 = require('@/assets/images/price/lesson2.jpg');
// const img3 = require('@/assets/images/price/lesson3.jpg');

export default {
  head() {
    return {
      title: '料金',
      meta: [
        { hid: 'og:title', property: 'og:title', content: '料金' },
        {
          hid: 'description',
          name: 'description',
          content:
            'zen placeの料金案内。わかりやすい月額料金＋チケット制。同じグレード内ならどのエリアでも通い放題です。ピラティス、ヨガのレッスンをご自宅や職場の近く、休日のお出かけ前など、あなたの好きな場所・時間で受けることができます。',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'zen placeの料金案内。わかりやすい月額料金＋チケット制。同じグレード内ならどのエリアでも通い放題です。ピラティス、ヨガのレッスンをご自宅や職場の近く、休日のお出かけ前など、あなたの好きな場所・時間で受けることができます。',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://www.zenplace.co.jp/og-price.jpg',
        },
      ],
      link: [{ rel: 'canonical', href: 'https://www.zenplace.co.jp/price' }],
    };
  },
  layout: 'new',
  components: {
    CtaLower,
    PageHeader,
    KnowmoreZenplace,
  },
  data() {
    return {
      headerImg,
      // ThreeCols: {
      //   image1: img1,
      //   image2: img2,
      //   image3: img3,
      // },
      tab1: 1,
      tab2: 1,
      tab3: 1,
      tab4: 1,
      isCase1: false,
      isCase2: false,
      isCase3: false,
      admisstionTables: [
        {
          title: '入会金',
          table: [
            ['', '入会金'],
            ['グレード01', '33,000円<span>（税込）</span>'],
            ['グレード02', '22,000円<span>（税込）</span>'],
            // ['グレード03', '22,000円<span>（税込）</span>'],
          ],
        },
      ],
      mattTables: [
        {
          title: '月額料金',
          table: [
            ['', 'フリープラン', 'デイフリー', '月4', '月6'],
            [
              'グレード01',
              '16,940円<span>／月（税込）</span><div>月額（税込）</div>',
              '13,552円<span>／月（税込）</span><div>月額（税込）</div>',
              '10,450円<span>／月（税込）</span><div>月額（税込）</div>',
              '14,520円<span>／月（税込）</span><div>月額（税込）</div>',
            ],
            [
              'グレード02',
              '14,960円<span>／月（税込）</span><div>月額（税込）</div>',
              '11,968円<span>／月（税込）</span><div>月額（税込）</div>',
              '9,625円<span>／月（税込）</span><div>月額（税込）</div>',
              '13,200円<span>／月（税込）</span><div>月額（税込）</div>',
            ],
            // [
            //   'グレード03',
            //   '13,200円<span>／月（税込）</span><div>月額（税込）</div>',
            //   '10,560円<span>／月（税込）</span><div>月額（税込）</div>',
            //   '9,240円<span>／月（税込）</span><div>月額（税込）</div>',
            //   '11,880円<span>／月（税込）</span><div>月額（税込）</div>',
            // ],
          ],
          text: 'フリープラン　　 …全てのマットグループレッスン通い放題<br>デイフリープラン …平日18時までお好きなマットグループレッスン通い放題<br>月4/6回　　　　… 指定した回数、どこでも通い放題',
        },
        {
          title: '体験レッスン',
          table: [
            ['', '1回体験', '2週間体験'],
            [
              'グレード01',
              '3,300円<span>／1回（税込）</span><div>1回（税込）</div>',
              '11,858円<span>（税込）</span><div>2week（税込）</div>',
            ],
            [
              'グレード02',
              '2,200円<span>／1回（税込）</span><div>1回（税込）</div>',
              '10,472円<span>（税込）</span><div>2week（税込）</div>',
            ],
            // [
            //   'グレード03',
            //   '2,200円<span>／1回（税込）</span><div>1回（税込）</div>',
            //   '9,240円<span>（税込）</span><div>2week（税込）</div>',
            // ],
          ],
          text: '1回体験 …マットグループレッスン1回体験<br>2週間体験 …マットグループレッスン体験 2週間通い放題',
        },
      ],
      privateTables: [
        {
          title: '月額料金',
          table: [
            ['', 'プライベート2<br>（月2回）', 'プライベート4<br>（月4回）'],
            [
              'グレード01',
              '20,240円<span>／月（税込）</span><div>月額（税込）</div>',
              '37,400円<span>／月（税込）</span><div>月額（税込）</div>',
            ],
            [
              'グレード02',
              '17,160円<span>／月（税込）</span><div>月額（税込）</div>',
              '32,560円<span>／月（税込）</span><div>月額（税込）</div>',
            ],
            // [
            //   'グレード03',
            //   '17,160円<span>／月（税込）</span><div>月額（税込）</div>',
            //   '32,560円<span>／月（税込）</span><div>月額（税込）</div>',
            // ],
          ],
          text: 'プライベート2 … 月2回、マットまたはマシンを使用したプライベートレッスンを受講 <br> プライベート4 … 月4回、マットまたはマシンを使用したプライベートレッスンを受講',
        },
        {
          title: '体験レッスン',
          table: [
            ['', '1回体験'],
            [
              'グレード01',
              '9,900円<span>／1回（税込）</span><div>1回（税込）</div>',
            ],
            [
              'グレード02',
              '8,250円<span>／1回（税込）</span><div>1回（税込）</div>',
            ],
            // [
            //   'グレード03',
            //   '8,250円<span>／1回（税込）</span><div>1回（税込）</div>',
            // ],
          ],
          text: '1回体験　 …マット or マシンプライベートレッスン1回体験',
        },
      ],
      machineTables: [
        {
          title: '月額料金',
          table: [
            [
              '',
              'マシングループ4<br>（月4回）',
              'マシングループ8<br>（月8回）',
            ],
            [
              'グレード01',
              '14,520円<span>／月（税込）</span><div>月額（税込）</div>',
              '22,880円<span>／月（税込）</span><div>月額（税込）</div>',
            ],
            [
              'グレード02',
              '13,750円<span>／月（税込）</span><div>月額（税込）</div>',
              '22,000円<span>／月（税込）</span><div>月額（税込）</div>',
            ],
            // [
            //   'グレード03',
            //   '13,750円<span>／月（税込）</span><div>月額（税込）</div>',
            //   '22,000円<span>／月（税込）</span><div>月額（税込）</div>',
            // ],
          ],
          text: 'マシングループ4 … 月4回、マシンを使用したグループレッスンを受講 <br> マシングループ8 … 月8回、マシンを使用したグループレッスンを受講',
        },
        {
          title: '体験レッスン',
          table: [
            ['', '1回体験'],
            [
              'グレード01-02',
              '5,000円<span>／1回（税込）</span><div>1回（税込）</div>',
            ],
          ],
          text: 'マシングループの体験レッスンの有無は各スタジオページよりご確認頂けます。スタジオ一覧ページは<a style="display:contents; color:#2E6EAC; " href="https://www.zenplace.co.jp/studios">こちら</a>',
        },
      ],
      ticketTables: [
        {
          title: 'グレード01',
          table: [
            ['', '価格', '発行日より有効期間'],

            ['40枚<br>チケット', '104,500円<span>（税込）</span><div>（税込）</div>', '10ヶ月間'],
            ['40枚<br>チケット', '101,750円<span>（税込）</span><div>（税込）</div>', '6ヶ月間'],
            ['20枚<br>チケット', '57,200円<span>（税込）</span><div>（税込）</div>', '6ヶ月間'],

          ],
          text: '',
        },
        {
          title: 'グレード02',
          table: [
            ['', '価格', '発行日より有効期間'],

            ['40枚<br>チケット', '88,825円<span>（税込）</span><div>（税込）</div>', '10ヶ月間'],
            ['40枚<br>チケット', '85,800円<span>（税込）</span><div>（税込）</div>', '6ヶ月間'],
            ['20枚<br>チケット', '47,300円<span>（税込）</span><div>（税込）</div>', '6ヶ月間'],

          ],
          text: '',
        },
      ],
      isActive: 'mat',

      cases: [
        {
          num: 'Case1',
          title: 'Case1： 30〜40代女性',
          text: 'いつまでも心身ともに美しくキレイでいたい、体を動かしたい。<br>でも忙しいし挫折しちゃうかも…',
          list: [
            {
              title: '好きなときに、スタジオでもオンラインでも',
            },
            {
              title: '人生を豊かにする心と身体をつくる',
            },
            {
              title: '自分を大切にする時間に',
            },
          ],
          movies: [
            {
              url: 'https://www.youtube.com/embed/w51mvHa5S30',
              text: 'ピラティスをやっていくほどに、心も<br>身体も軽やかな気持ちになっていきます。',
              person: 'XXXXXXさん<br>20代女性　会社員　XXXX職',
            },
            {
              url: 'https://www.youtube.com/embed/w51mvHa5S30',
              text: 'ピラティスをやっていくほどに、心も<br>身体も軽やかな気持ちになっていきます。',
              person: 'XXXXXXさん<br>20代女性　会社員　XXXX職',
            },
            {
              url: 'https://www.youtube.com/embed/w51mvHa5S30',
              text: 'ピラティスをやっていくほどに、心も<br>身体も軽やかな気持ちになっていきます。',
              person: 'XXXXXXさん<br>20代女性　会社員　XXXX職',
            },
          ],
        },
        {
          num: 'Case2',
          title: 'Case2： エグゼクティブ / 経営者',
          text: '仕事と趣味のパフォーマンスをあげたい。忙しいけど自分の時間も大切にしたい…',
          list: [
            {
              title: '好きなときに、スタジオでもオンラインでも',
            },
            {
              title: '人生を豊かにする心と身体をつくる',
            },
            {
              title: '世界のリーダーが学ぶ最先端を体験',
            },
          ],
          movies: [
            {
              url: 'https://www.youtube.com/embed/w51mvHa5S30',
              text: '毎週2回、自分の心と向き合う時間を創り、お陰様で会社の売上が2倍に。',
              person: 'XXXXXXさん<br>40代女性　Webコンサル事業経営',
            },
            {
              url: 'https://www.youtube.com/embed/w51mvHa5S30',
              text: '毎週2回、自分の心と向き合う時間を創り、お陰様で会社の売上が2倍に。',
              person: 'XXXXXXさん<br>40代女性　Webコンサル事業経営',
            },
            {
              url: 'https://www.youtube.com/embed/w51mvHa5S30',
              text: '毎週2回、自分の心と向き合う時間を創り、お陰様で会社の売上が2倍に。',
              person: 'XXXXXXさん<br>40代女性　Webコンサル事業経営',
            },
          ],
        },
        {
          num: 'Case3',
          title: 'Case3： 20代前半の社会人',
          text: '仕事と家以外の新しい趣味でストレスケアもしたい。でも飽き性だし続くかな…',
          list: [
            {
              title: '好きなときに、スタジオでもオンラインでも',
            },
            {
              title: '人生を豊かにする心と身体をつくる',
            },
            {
              title: '自分を大切にする時間に',
            },
          ],
          movies: [
            {
              url: 'https://www.youtube.com/embed/w51mvHa5S30',
              text: '毎週3回、通い続けて、仕事の成績が3倍になりました！',
              person: 'XXXXXXさん<br>20代男性　営業職',
            },
            {
              url: 'https://www.youtube.com/embed/w51mvHa5S30',
              text: '毎週3回、通い続けて、仕事の成績が3倍になりました！',
              person: 'XXXXXXさん<br>20代男性　営業職',
            },
            {
              url: 'https://www.youtube.com/embed/w51mvHa5S30',
              text: '毎週3回、通い続けて、仕事の成績が3倍になりました！',
              person: 'XXXXXXさん<br>20代男性　営業職',
            },
          ],
        },
      ],
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
            name: '料金について',
          },
        ],
      };
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScrollCase);
  },
  methods: {
    change(num) {
      this.isActive = num;
    },
    handleScrollCase() {
      const case1 = document.getElementById('Case1').getBoundingClientRect();
      const case2 = document.getElementById('Case2').getBoundingClientRect();
      const case3 = document.getElementById('Case3').getBoundingClientRect();
      if (case1.top <= 120 && case1.bottom >= 0) {
        this.isCase1 = true;
        this.isCase2 = false;
        this.isCase3 = false;
      } else if (case2.top <= 120 && case2.bottom >= 0) {
        this.isCase1 = false;
        this.isCase2 = true;
        this.isCase3 = false;
      } else if (case3.top <= 120 && case3.bottom >= 0) {
        this.isCase1 = false;
        this.isCase2 = false;
        this.isCase3 = true;
      } else {
        this.isCase1 = false;
        this.isCase2 = false;
        this.isCase3 = false;
      }
    },
  },
};
</script>

<style lang='scss'>
@import '~assets/scss/newvariables';

.p-price {
  @include sp {
    .c-header-border-bottom {
      font-size: pv(20) !important;
    }
  }
  .c-header-border-bottom {
    margin-bottom: 1em;
  }
  .mb-30 {
    margin-bottom: 30px;
  }
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
    p {
      font-size: 18px;

      @include sp {
        font-size: pv(14);
      }
      &.lead-text {
        font-size: 22px;
        line-height: 2;

        @include sp {
          font-size: pv(16);
        }
      }
      &.title {
        margin-top: 1.5em;
        font-size: 36px;

        @include tab {
          font-size: 28px;
        }
        @include sp {
          font-size: pv(22);
        }
      }
    }
    .movie {
      margin-right: auto;
      margin-left: auto;
      width: 746px;
      height: 420px;
      border: 1px solid #707070;
    }
  }
  &-about {
    padding-top: 80px;
    padding-bottom: 80px;

    @include sp {
      padding-top: pv(30);
      padding-bottom: pv(40);
      background: rgba(236, 236, 236, 0.5);
    }
    .box {
      display: inline-block;
      align-items: center;
      justify-content: center;
      margin: 20px auto;
      padding: 20px 40px;
      width: fit-content;
      border: 1px solid $orange;
      background: $white;

      @include sp {
        padding: pv(10) pv(20);
        width: 80vw;
        border: none;
      }

      p {
        margin: 0;
        color: $orange;
        font-weight: bold;
        font-size: 26px;
        line-height: 1;

        @include sp {
          font-size: pv(18);
        }
        small {
          display: block;
          padding-bottom: 0.3em;
          font-weight: bold;
          font-size: 18px;

          @include sp {
            font-size: pv(12);
          }
        }
        &.plus {
          margin: 0 30px;
          padding: 0;
          width: 50px;

          @include sp {
            margin: 0 pv(20);
            width: pv(40);
          }
          img{
            width: 100%;
          }
        }
      }
    }

    p {
      font-size: 16px;
      line-height: 2;

      @include sp {
        font-size: pv(14);
      }

      &.blue {
        font-size: 26px;
        line-height: 1.5;

        @include sp {
          font-size: pv(18);
        }
      }
    }
  } // .p-price-about
  &-tab {
    padding-top: 50px;
    padding-bottom: 70px;

    @include sp {
      padding-top: 70px;
      padding-bottom: 10px;
      background: rgba(236, 236, 236, 0.5);
    }
    p {
      margin-bottom: 35px;
      text-align: center;
      font-size: 2rem;

      @include tab {
        font-size: 1.4rem;
      }
    }
    ul {
      display: flex;
      justify-content: space-between;
      margin: 0;
      padding: 0;

      @include tab {
        flex-wrap: wrap;
      }
      li {
        padding: 0.8em 0;
        width: 24%;
        border: 1px solid #2e6eac;
        border-radius: 50px;
        color: #2e6eac;
        text-align: center;
        font-size: 16px;
        cursor: pointer;

        @include tab {
          margin-bottom: 20px;
          width: 49%;
        }
        @include sp {
          margin-bottom: 20px;
          font-size: 1.1rem;
          i {
            margin-left: 3px;
            border-width: 0 1px 1px 0;
        }
        }
        i {
          display: inline-block;
          margin-bottom: 2px;
          margin-left: 10px;
          padding: 3px;
          border: solid #2E6EAC;
          border-width: 0 2px 2px 0;
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
        }
        &.active {
          background: #6c99c4;
          color: $white;
          i {
          border: solid #fff;
          border-width: 0 2px 2px 0;

          @include tab {
            border-width: 0 1px 1px 0;
          }
        }
        }
        &:hover{
          opacity: 0.8;
        }
      }
    }
  }
  &-case {
    margin-top: -80px;
    padding: 160px 0 80px;

    @include sp {
        margin-top: -20vw;
        padding: 35vw 0 pv(50);

      }

    .l-new-container.sp-wide {
      @include tab {
        margin-bottom:20px;
        padding-right: 0;
      }
      @include sp {
        margin-bottom: pv(30);
      }

    }
    img {
      max-width: 100%;
      width: 100%;
    }
    h3 {
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 3px solid $blue;
      font-weight: bold;

      @include sp {
        font-size: pv(20);
      }
    }
    h4 {
      padding: 1em 0 0.5em;
      font-weight: bold;
      font-size: 20px;

      @include sp {
        font-size: pv(18);
      }
    }
    .font-l {
      color: $blue;
      font-weight: bold;
      font-size: 26px;

      @include tab {
        margin-top: 1em;
        margin-bottom:1em;
        padding: 0.5em 1em;
        background: $blue;
        color: $white;
      }
      @include sp {
        padding: 0.8em 1em;
        font-size: pv(16);
      }
    }
    ul{
      padding: 0;
        li{
            display: flex;
            align-items: center;
            margin-bottom: 0.5em;
            font-weight: bold;
            font-size: 18px;

            @include sp{
              margin-bottom: 0.2em;
              font-size: pv(12);
            }
          &::before{
            display: block;
            margin-right: 0.5em;
            width: 1em;
            height: 1em;
            border-radius: 50%;
            background-color: $orange;
            content: '';
          }
        }
      }
    .title-voice {
      position: relative;
      margin-top: 60px;
      margin-bottom: 40px;
      padding: 1em;
      border-top: 5px solid $orange;
      border-bottom: 5px solid $orange;
      color: #707070;
      text-align: center;
      font-weight: bold;
      font-size: 26px;

      @include sp {
        font-size: pv(20);
      }
      span {
        position: absolute;
        top: -1.8em;
        left: calc(50% - 3.5em);
        z-index: 10;
        display: block;
        padding: 1em;
        color: $white;
        font-weight: bold;
        font-size: 16px;

        @include sp {
          font-size: pv(12);
        }
      }
      &::before,
      &::after {
        position: absolute;
        left: calc(50% - 3em);
        z-index: 5;
        display: block;
        width: 5em;
        width: 6em;
        border-right: 14px solid transparent;
        border-left: 14px solid transparent;
        content: '';
      }
      &::before {
        top: -16px;
        border-top: 14px solid $orange;
      }
      &::after {
        top: -2px;
        border-bottom: 14px solid $orange;
        color: $white;
        content: '';
      }
    }
    .voice-btn{
      margin-top: 3em;
      text-align: center;

      @include tab{
        margin-top: 1em;
      }
    }
    .movie-text {
      margin-top: 30px;
      background-color: #fff;
      background-image: linear-gradient(180deg, transparent 30px, #707070 1px);
      background-size: 100% 31px;
      line-height: 31px;
    }
    .d-flex {
      justify-content: space-between;

      @include tab{
      display: block !important;
      }
      &.c-case{
    margin-right: auto;
    margin-left: auto;
    padding-right: 80px;
    padding-left: 80px;
        max-width: 1360px;

     @include tabH {
    padding-right: 24px;
    padding-left: 24px;
      }
      @include tab{
    padding-right: 0;
        padding-left: 0;
      }

      }
      &.c-case div {
        @include tab{
          padding-top: 1.5em;
          padding-right: 24px;
          padding-left: 24px;
          background: #f0f3f5;
        }
        @include sp{
    padding-right: 5.33333vw;
              padding-left: 5.33333vw;
        }
        &:nth-child(2) {
          @include tab {
            background: $white;
          }
        }
      }
      > div {
        width: 32%;

        @include tab {
           padding-bottom: 1.5em;
          width: 100%;
        }
        iframe {
          width: 100%;
          height: auto;

          @include tab {
            height: 50vw;
        }
        }
      }
    }
  }
  &-course {
    padding-top: 100px;

    h2 {
      margin-bottom: 60px;
    }

    .c-column-alternate-single {
      @include sp {
        &:nth-of-type(1) {
          background-image: url('~assets/images/price/course-1-sp.jpg');
        }
        &:nth-of-type(2) {
          background-image: url('~assets/images/price/course-4-sp.jpg');
        }
        &:nth-of-type(3) {
          background-image: url('~assets/images/price/course-3-sp.jpg');
        }
        &:nth-of-type(4) {
          background-image: url('~assets/images/price/course-2-sp.jpg');
        }
      }
      @include sp {
        padding-right: 0 !important;
        padding-left: 0 !important;

        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4) {
          padding-top: pv(307) !important;
        }
        &:nth-child(1),
        &:nth-child(3) {
          h3 {
            left: 0;
          }
        }
        &:nth-child(2),
        &:nth-child(4) {
          h3 {
            right: 0;
          }
        }

        .bg-white {
          padding: pv(65) pv(10) pv(30) !important;
          width: 100vw !important;
          h3 {
            position: absolute;
            top: pv(-43);
            padding: pv(30) pv(25) !important;
            width: pv(303);

            .num {
              position: absolute;
              top: pv(-25);
              width: pv(50);
            }
          }
        }
      }
      &:nth-of-type(1),
      &:nth-of-type(3) {
        padding-top: 80px !important;
        background-position-y: top !important;
        h3 {
          left: -50px;
        }
      }
      &:nth-of-type(2) {
        padding-bottom: 160px !important;
        background-position-y: bottom !important;
        h3 {
          right: -24px;
        }
      }
      &:nth-of-type(1) {
        background-image: url('~assets/images/price/course-1.jpg');
      }
      &:nth-of-type(2) {
        background-image: url('~assets/images/price/course-4.jpg');
      }
      &:nth-of-type(3) {
        background-image: url('~assets/images/price/course-3.jpg');
      }
      &:nth-of-type(4) {
        background-image: url('~assets/images/price/course-2.jpg');
      }

      .bg-white {
        position: relative;
        padding: 140px 80px 40px !important;
        max-width: 680px !important;
        box-shadow: none !important;
      }
      h3 {
        position: absolute;
        top: 0;
        display: inline-flex;
        align-items: center;
        padding: 30px 40px !important;
        background: $blue;
        color: white;
        white-space: nowrap;
        font-weight: bold;
        .num {
          margin-right: 20px;
          width: 60px;
        }
      }

      p {
        margin-bottom: 16px;
      }

      @media screen and(max-width: 1280px) {
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
          padding-top: 300px !important;
          padding-bottom: 0 !important;
          background-position-y: top !important;
        }

        .bg-white {
          padding-top: 110px !important;
          h3 {
            top: -40px;
          }
        }
      }
      @media screen and(max-width: 768px) {
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) &:nth-child(4) {
          padding-top: 400px !important;
          padding-bottom: 0 !important;
          background-position-y: top !important;
        }

        .bg-white {
          padding-top: 110px !important;
          padding-right: 24px !important;
          padding-left: 24px !important;
          h3 {
            top: -40px;
          }
        }
      }

      .btn-blue_border {
        max-width: 43rem;
      }
    }
  } // .p-price-course

  &-grade {
    padding: 100px 0;

    @include sp {
      padding-top: pv(50);
      padding-bottom: pv(35);
      background: rgba(236, 236, 236, 0.5);

      .desc {
        padding-top: pv(60);
      }

      .row {
        display: block;

        img {
          margin-bottom: pv(15);
          max-width: 100%;
          width: 100%;
          height: 160px;
        }
      }
    }

    .desc {
      margin-bottom: 40px;
      text-align: center;
      font-size: 20px;
      line-height: 1.7;
    }

    h2 {
      margin-bottom: 80px;

      @include sp {
        margin-bottom: pv(0);
      }
    }

    h3 {
      display: block;
      padding-bottom: 8px;
      border-bottom: 2px solid $blue;
      color: $blue;
      font-weight: bold;
      font-size: 20px;

      @include sp {
        font-size: 16px;
      }
    }
  } // .p-price-grade

  &-table {
    padding: 0 0 80px;

    @include sp {
      padding: 10px 0;
      background: rgba(236, 236, 236, 0.5);
    }
    &.admission {
      @include tabH {
        .c-pricetable-col {
          padding: 8px 0;
          > div span{
            display: inline;
          }
        }
        .c-pricetable-col:first-child {
          width: 30vw;
        }
      }
    }
    .register-note {
      position: relative;
      display: inline-block;
      padding: 0 10px;
      color: $orange;
      text-align: center;
      letter-spacing: 0.1em;
      font-size: 18px;

      @include sp {
        margin-top: pv(20);
        font-size: pv(16);
        line-height: 1.5;
      }
      &::before,
      &::after {
        position: absolute;
        top: 0;
        width: 1px;
        height: 5em;
        background: $orange;
        content: '';

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
          font-size: pv(20);
        }
      }
    }

    .c-twotitles.tab {
      @include sp {
        display: none;
      }
      &.white {
        .left,
        .right {
          border-bottom-color: #f5f5f5;
        }
      }
    }

    h2 {
      margin-bottom: 60px;
      color: #2E6EAC;
      text-align: center;
      font-weight: bold;
      font-size: 2.2rem;

      @include sp {
        margin-bottom: 32px;
        font-size: 2rem;
      }
    }
    img {
      margin: 40px 0;
    }
    p {
      display: flex;
      justify-content: flex-start;
      font-size: 16px;
      line-height: 2;
    }

    &-h3 {
      display: none;

      @include sp {
        display: block;
        padding-bottom: 8px;
        border-bottom: 2px solid $blue;
        color: $blue;
        font-weight: bold;
        font-size: 16px;
      }
    }

    .c-pricetable {
      margin: 40px 0;
      width: 100%;
      border-top: 1px solid $blue;

      @include sp {
        margin: 20px 0;
      }

      &-wrap {
        @include sp {
          display: block !important;

          p {
            justify-content: flex-start;
            margin-bottom: 40px;
            font-size: 12px;
          }
        }
      }

      &-row {
        display: flex;
        width: 100%;
        border-bottom: 1px solid $blue;

        @include sp {
          &:first-child {
            .c-pricetable-col > div {
              margin-right: -30px;
              margin-left: -30px;
              transform: scale(0.8);
            }
          }
        }
      }

      &-col {
        display: inline-block;
        padding: 16px 0;
        width: 100%;
        border-right: 1px solid $blue;
        text-align: center;
        font-weight: bold;
        font-size: 16px;

        @include sp {
          padding: 4px 0;
          font-size: 13px;
        }

        @media screen and (max-width: 600px) {
          padding: 8px 0;
          font-size: 13px;
        }

        &:first-child {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 240px;
          background: rgba(46, 110, 172, 0.7);
          color: white;

          @include sp {
            width: pv(52);
            font-size: 10px;
          }

          @media screen and (max-width: 940px) {
            width: 120px;
          }

          @media screen and (max-width: 600px) {
            width: 100px;
          }
        }

        &:not(:first-child) {
          flex: 1 1 0;
          background: white;
          color: $blue;
        }

        > div {
          span {
            vertical-align: bottom;
            font-size: 0.8em;

            @media screen and (max-width: 940px) {
              display: none;
            }
          }

          div {
            display: none;

            @include sp {
              transform: scale(0.8) translateY(-2px);
            }

            @media screen and (max-width: 940px) {
              display: block;
              font-size: 10px;
            }

            @media screen and (max-width: 600px) {
              transform: scale(0.9);
            }
          }
        }
      }
    }

    .ticket-use-cont p {
      font-size: 16px;

      @include sp {
        font-size: 12px;
      }

      a {
        border-bottom: solid #535353;
        color: #535353;
        // text-decoration: underline;
      }
    }

    .ticket-use {
      color: #2e6eac;
      font-weight: bold;
      font-size: 16px;
    }

    .ticket-use-h3 {
      display: block;
      padding-bottom: 8px;
      border-bottom: 2px solid $blue;
      color: $blue;
      font-weight: bold;
      font-size: 16px;
    }
  } // .p-price-table

  .c-lifestyle {
    .desc {
      margin-top: 24px;
      font-size: 17px;
      line-height: 2.3;

      @include sp {
        font-size: 14px;
      }
    }
  }
}

span.special-span-title {
  color: #2e6eac;
}
span.plan-note {
  font-size: 14px;
  line-height: 20px;
}
.c-case-navi{
  display: none;

  @include tab{
  position: sticky;
  top: 61px;
  z-index: 20;
    display: block;
  padding: 1em;
    background: $white;
  box-shadow: 0 3px 6px rgba(0,0,0,0.1);
  }
  ul{
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0 15px;

    li{
      position: relative;
      overflow: hidden;
      padding-bottom: 0;
      width: 32%;
      /* border: 1px solid #FA63AF; */
      text-align: center;
      &.activeCase{
        background: rgba(250,99, 175, 0.2);
      }
      img{
         width: 100%;
      }
      /*
      span{
        color: $blue;
        font-size: pv(8);
      }
      p{
        color: #FA63AF;
        font-size: pv(9);
        margin: 0;
      }
      &::before{
        background: #FA63AF;
        border-radius: 50%;
        content: '';
        display: block;
        position: absolute;
        width: 4em;
        height: 4em;
        top: -2em;
        left: -2em;
      }
      &::after{
        background: url('~/assets/images/price/text_case.svg') top left no-repeat;
        background-size: contain;
        color: $white;
        content: '01';
        display: block;
        font-size: pv(6);
        padding-top: 0.8em;
        position: absolute;
        width: 2rem;
        top: 0.2em;
        left: 0.2em;
      }
      */
      &:nth-child(2){
        /*border-color: $blue;*/
        &.activeCase{
        background: rgba(46,110, 172, 0.2);
      }
      /*
        p{
        color: $blue;
        }
        &::before{
          background-color: $blue;
        }
        &::after{
          content: '02';
        }
        */
      }
      /*
      &:nth-child(3){
        &::after{
          content: '03';
        }
      }
      */
    }
  }
}
// 価格改定のお知らせページへ遷移
.price-revision {
  margin-top: 30px;
}

.price-revision a {
  color: #595858;
  font-size: 20px;
}
.bg-blue{
  background: $blue;
}

.white{
  color: $white;

}

.c-pricecase{

  padding: 60px 32px 60px;
.white{
      font-size: 150%;
    }
  @include tab{
    padding: 40px 0;
    overflow: hidden;
    .l-new-container{
      padding: 0!important;
    }
    .scroll-box{
      padding: 0 32px;
        overflow-x: scroll;
        overflow-y: visible;
    }
    .d-flex{
        display: flex!important;
        width: 260vw;
    }

  }
  @include sp{
    font-size: pv(10);
  }
  .pink{
    color: #FA63AF;
  }
  .d-flex{
    margin-top: 80px;
    justify-content: space-between;
  }
  .case-box{
    background: rgba(255,255,255,0.9);
    padding: 70px 35px 35px;
    position: relative;
    width: 32%;
    @include tabH{
        padding: 70px 10px 35px;
      }
      @include tab{
        padding: 70px 35px 35px;
      }
     @include sp{
        padding: pv(70) pv(20) pv(20);
      }
    .title{
      font-size: 24px;
      border-bottom: 2px solid #AFC7DF;
      @include tabH{
        font-size: 18px;
      }
      @include sp{
        font-size: pv(18);
      }
    }
    ul{
      padding-left: 1em;
      padding-bottom: 28px;
      li{
        text-align: left;
        font-size: 14px;
        position: relative;
         @include sp{
           font-size: pv(14);
         }
         &::before{
           background: #e93842;
           border-radius: 50%;
           content: "";
           display: inline-block;
           height: 8px;
           left: -1em;
           position: absolute;
           top: calc(1em - 8px);
           width: 8px;
         }
      }
    }
    img{
      display: block;
      height: 128px;
      left: calc(50% - 64px);
      position: absolute;
      top: -64px;
      width: 128px;

      @include sp{
        margin-bottom: 0;
      }
    }
    a{
      font-size: 8px;
      display: block;
      position: absolute;
      bottom: 10px;
      text-align: center;
      width: calc(100% - 70px);
      &::after{
        background: url("~assets/images/price/icon-down.png") center center no-repeat;
        background-size: contain;
        content: "";
        display: block;
        height: 17px;
        margin-top: 0.5em;
        width: 100%;

      }
    }
    &::after{
      bottom: 10px;
      content: "01";
      color: #FFF;
      font-size: 80px;
      right: 17px;
      position: absolute;
    }
    &.num02::after{
      content: "02";
    }
    &.num03::after{
      content: "03";
    }
  }

  &-blue{
    background: #2789E7;
    border: 1px solid #72BBFD;
  }
  &-orange{
    background: $orange;
    border: 1px solid #FEA667;
  }
}
</style>
