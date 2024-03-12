<template>
  <div>
    <div id="Breadcrumb">
      <div class="l-container">
        <ul>
          <li>
            <a
              href="/"
              class="nuxt-link-active"
            > TOP </a>
          </li>
          <li>
            <nuxt-link to="/studios">
              スタジオ一覧
            </nuxt-link>
          </li>
          <li>
            <studio-name
              :studio="studio"
              :show-zenplace-prefix="true"
            />
          </li>
        </ul>
      </div>
    </div>
    <section class="banner py-6 py-md-7">
      <div class="l-container--md">
        <swiper
          :options="swiperOpt"
        >
          <!-- <swiper-slide>
            <a
              href="https://www.zenplace.co.jp/classes/sports/baseball"
              target="_blank"
              class="banner_single"
            >
              <div class="img">
                <img
                  loading="lazy"
                  src="~assets/images/studio/banner-wbc.webp"
                  alt="初めての方へ"
                  class="w-100"
                >
              </div></a>
          </swiper-slide> -->
          <!-- <swiper-slide>
            <a
              href="https://www.zenplace.co.jp/classes/kafun"
              target="_blank"
              class="banner_single"
            >
              <div class="img">
                <img
                  loading="lazy"
                  src="~assets/images/studio/banner-kafun.webp"
                  alt="初めての方へ"
                  class="w-100"
                >
              </div></a>
          </swiper-slide> -->
          <swiper-slide>
            <a
              href="https://www.zenplace.co.jp/about/since2004"
              target="_blank"
              class="banner_single"
            >
              <div class="img">
                <img
                  loading="lazy"
                  src="~assets/images/studio/banner-since2004.webp"
                  alt="zen place since 2004"
                >
              </div>
            </a>
          </swiper-slide>
          <swiper-slide>
            <a
              href="https://www.zenplace.co.jp/classes/kafun"
              target="_blank"
              class="banner_single"
            >
              <div class="img">
                <img
                  loading="lazy"
                  src="~assets/images/studio/banner-kafun.webp"
                  alt="初めての方へ"
                >
              </div></a>
          </swiper-slide>
          <swiper-slide>
            <a
              href="https://www.zenplace.co.jp/about/beginner"
              target="_blank"
              class="banner_single"
            >
              <div class="img">
                <img
                  loading="lazy"
                  src="~assets/images/studio/banner-beginner.webp"
                  alt="初めての方へ"
                >
              </div></a>
          </swiper-slide>
          <swiper-slide>
            <a
              href="#campaign"
              class="banner_single"
            >
              <div class="img">
                <img
                  loading="lazy"
                  src="~assets/images/studio/banner-campaign.webp"
                  alt="キャンペーン"
                >
              </div></a>
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <section class="concept bg-light-gray">
      <div class="l-container--md">
        <h2 class="sec-title text-center">
          <small>Welcome</small>
          <div class="concept-title-jp-box text-center pb-3 pb-md-5">
            <strong class="concept-title-jp pc">自身の内側に<br class="sp">深く意識をむけ、<strong class="red">美しい心と身体へ</strong></strong>
            <strong class="concept-title-jp sp">自身の内側に<br class="sp">深く意識をむけ<br class="sp"><strong class="red">美しい心と身体へ</strong></strong>
          </div>
          <span class="text-left mt-4">
            zen placeのピラティス・ヨガは、誰でもできる、学びがある。<br class="pc">
            だから楽しく、継続できて、効果があります。<br>
            なぜならzen placeのピラティス・ヨガでは、丁寧に背骨を一つ一つ動かす＝身体の内側に深く意識を向けることに重きを置いた「点」を意識するプログラムだからです。
            また、リハビリを目的として発展してきたピラティスは、小さな動きで誰でもできるため、運動習慣がない方でも安心して始められます。<br>
            トレーニングやフィットネス・近代のピラティスとは全く違う、伝統的で本質的なzen placeのレッスンをまずは体験してみてください。
          </span>
        </h2>
        <div class="text-center mt-5">
          <a
            class="btn-red-studio btn-red font-weight-bold"
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
            style="width: 300px; font-size: 1.8rem"
          >
            体験レッスンを予約する
          </a>
        </div>
      </div>
    </section>

    <section class="point py-6 py-md-7">
      <div class="l-container">
        <h2 class="sec-title">
          <small>About</small>
          <div class="_lead">
            zen placeの<br class="sp-only">ピラティス・ヨガの<br class="sp-only"><strong>3つの特徴</strong>
          </div>
        </h2>
        <ul class="row justify-content-between reason-content-box mb-0">
          <li class="col-md-4 text-center">
            <div class="reason-img-box">
              <img
                loading="lazy"
                src="~assets/images/studio/reason_01.webp"
                alt="Scientific"
                class="w-100"
              >
              <p class="reason-img-title">
                Scientific
              </p>
            </div>
            <p class="reason-title">
              科学的なアプローチだから、<br>
              効果が出る
            </p>
            <p class="reason-text">
              18年間の継続的なリサーチによる科学的知見に基づいた方法論で、ピラティス・ヨガの効果を最大化します。
            </p>
          </li>
          <li class="col-md-4 text-center">
            <div class="reason-img-box">
              <img
                loading="lazy"
                src="~assets/images/studio/reason_02.webp"
                alt="Scientific"
                class="w-100"
              >
              <p class="reason-img-title">
                Global
              </p>
            </div>
            <p class="reason-title">
              グローバル基準の質が<br class="pc">高いレッスン
            </p>
            <p class="reason-text">
              グローバルな環境で世界トップの教育制度で学んだインストラクターが指導するため、質の高い丁寧なレッスンを受けられます。
            </p>
          </li>
          <li class="col-md-4 text-center">
            <div class="reason-img-box">
              <img
                loading="lazy"
                src="~assets/images/studio/reason_03.webp"
                alt="Scientific"
                class="w-100"
              >
              <p class="reason-img-title">
                Authentic
              </p>
            </div>
            <p class="reason-title">
              本物のピラティス・ヨガを<br>
              いつでも好きな場所で
            </p>
            <p class="reason-text">
              国内最大数！全国110スタジオ以上・ピラティスマシン500台以上＆オンラインレッスン週2,000本以上で正統派で本物のピラティスレッスン。全店駅チカ・豊富なレッスン数で継続できる環境です。
            </p>
          </li>
        </ul>
        <div
          v-if="isYogaOrStrong(studio)"
          class="text-center pt-4 pt-md-5"
        >
          <nuxt-link
            to="/yoga"
            class="btn-white_border"
          >
            zen placeヨガ
          </nuxt-link>
        </div>
        <div
          v-else
          class="text-center pt-4 pt-md-5"
        >
          <nuxt-link
            to="/pilates"
            class="btn-white_border"
          >
            zen placeピラティス
          </nuxt-link>
        </div>
      </div>
    </section>

    <!-- ヨガレッスン -->
    <section
      v-if="isYogaOrStrong(studio)"
      class="lessons bg-light-gray py-6 py-md-7"
    >
      <div class="l-container">
        <h2
          id="studio-schedule"
          class="sec-title"
        >
          <small>Yoga Lessons</small>
          zen place ヨガの<br class="sp">レッスンについて
        </h2>
        <div class="lesson-type">
          <h3 class="text-center mb-4 mb-md-5">
            グループレッスン（常温・ホット）
          </h3>
          <p class="mb-4 mb-md-5">
            <strong>「本当の自分」を知り、明るく、前向きにウェルビーイングに生きていくために
              考え抜いたzen placeのヨガ</strong><br>
            グループレッスンは少人数制。緩みと安定性を意識しながら背骨全体を動かし、呼吸のリズムと動きを連動させ、コントロールしていきます。さまざまなテーマやレベルのクラスがあり、常温ヨガ・ホットヨガもレッスン受講いただけます（スタジオによる）。新しいプログラムも随時開発中。スタジオだけではなくオンラインでのご受講もOKです。
          </p>
          <div class="row">
            <div class="col-12 col-md-6">
              <img
                loading="lazy"
                src="~assets/images/studio/lesson-01.webp"
                alt="マットグループレッスン"
                class="w-100 mb-4"
              >
              <p class="lesson-title mb-4">
                Beginner ｜ ビギナー常温
              </p>
              <div class="lesson-box row justify-content-between bg-white py-4 px-5 mx-auto mb-4">
                <span class="lesson-item">
                  難易度 ★☆☆
                </span>
                <span class="lesson-item">
                  運動量 ★★☆
                </span>
                <span class="lesson-item">
                  リフレッシュ度 ★★☆
                </span>
              </div>
              <p>
                「本物のピラティス」を体験できる入門プログラム。基本的な動きと正しい呼吸で身体の細部まで意識を向け、集中力を高めながら全身を動かしていきます。心も身体もしなやかに整うきっかけを作ることができます。
              </p>
            </div>
            <div class="col-12 col-md-6 pt-4 pt-md-0">
              <img
                loading="lazy"
                src="~assets/images/studio/lesson-02.webp"
                alt="マットグループレッスン"
                class="w-100 mb-4"
              >
              <p class="lesson-title mb-4">
                Beginner Hot ｜ビギナーホット
              </p>
              <div class="lesson-box row justify-content-between bg-white py-4 px-5 mx-auto mb-4">
                <span class="lesson-item">
                  難易度 ★☆☆
                </span>
                <span class="lesson-item">
                  運動量 ★★☆
                </span>
                <span class="lesson-item">
                  リフレッシュ度 ★★☆
                </span>
              </div>
              <p>
                初心者の方におすすめのホットヨガです。ホットな環境でヨガの基本的と呼吸を学び、細部への意識を高めて全身を動かしていきます。心も身体もしなやかに整いリラックス。ストレスを感じている方にもおすすめです。
              </p>
            </div>
          </div>
        </div>
        <div class="lesson-type pt-5 pt-md-6">
          <h3 class="text-center mb-4 mb-md-5">
            プライベートレッスン（常温）
          </h3>
          <p class="mb-4 mb-md-5">
            <strong>自分のアライメントや癖・特徴に気づく、あなただけのオーダーメイドレッスン</strong><br>
            zen place pilatesのプライベートレッスンではマシンワークとマットワークの2種類があります。<br class="pc">
            それぞれの身体の状態に合わせて、オリジナルのセッションを行います。心の変化に気づき不要なものを取り除く「自分だけのヨガ」をコンセプトにしたプログラム、「セラピューティック・ヨガ」は特に不定愁訴・神経性の症状でお悩みの方におすすめです。
          </p>
          <div class="row justify-content-center">
            <div class="col-12 col-md-6">
              <img
                loading="lazy"
                src="~assets/images/studio/lesson-03.webp"
                alt="マットグループレッスン"
                class="w-100 mb-4"
              >
              <p class="lesson-title mb-2">
                Private ｜プライベート常温
              </p>
              <p>
                一人ひとりに最適な内容で行うプライベートレッスン。全身の伸びを感じながら、身体の使い方、思考の癖と向き合います。迷ったらまずはプライベートレッスンがおすすめ！
                セラピューティックヨガも可能。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ピラティスレッスン -->
    <section
      v-else
      class="lessons bg-light-gray py-6 py-md-7"
    >
      <div class="l-container">
        <h2
          id="studio-schedule"
          class="sec-title"
        >
          <small>Lessons</small>
          zen placeの<br class="sp">レッスンについて
        </h2>
        <div class="lesson-type">
          <h3 class="text-center mb-4 mb-md-5">
            グループレッスン（マット）
          </h3>
          <p class="mb-4 mb-md-5">
            <strong>正統派で本物のzen placeピラティス</strong><br>
            ピラティスマットの上で約1時間、とにかく背骨と体幹に集中。<br class="pc">
            呼吸をしながら背骨の「点」を意識することで動きにリズムができ、「線」になり、身体も心もフローしていく。<br class="pc">
            グループ全体でプログラムの絶頂にチャレンジし、一体感と高揚感が味わえるレッスンです。
          </p>
          <div class="row">
            <div class="col-12 col-md-6">
              <img
                loading="lazy"
                src="~assets/images/studio/lesson-01.webp"
                alt="マットグループレッスン"
                class="w-100 mb-4"
              >
              <p class="lesson-title mb-4">
                Beginner Flow ｜ビギナーフロー
              </p>
              <div class="lesson-box row justify-content-between bg-white py-4 px-5 mx-auto mb-4">
                <span class="lesson-item">
                  難易度 ★★☆
                </span>
                <span class="lesson-item">
                  運動量 ★★☆
                </span>
                <span class="lesson-item">
                  リフレッシュ度 ★★★
                </span>
              </div>
              <p>
                「本物のピラティス」を体験できる入門プログラム。基本的な動きと正しい呼吸で身体の細部まで意識を向け、集中力を高めながら全身を動かしていきます。心も身体もしなやかに整うきっかけを作ることができます。
              </p>
            </div>
            <div class="col-12 col-md-6 pt-4 pt-md-0">
              <img
                loading="lazy"
                src="~assets/images/studio/lesson-02.webp"
                alt="マットグループレッスン"
                class="w-100 mb-4"
              >
              <p class="lesson-title mb-4">
                Pre-Beginner ｜プレビギナー
              </p>
              <div class="lesson-box row justify-content-between bg-white py-4 px-5 mx-auto mb-4">
                <span class="lesson-item">
                  難易度 ★☆☆
                </span>
                <span class="lesson-item">
                  運動量 ★☆☆
                </span>
                <span class="lesson-item">
                  リフレッシュ度 ★★☆
                </span>
              </div>
              <p>
                「ピラティスの基本」となる動きと呼吸の基礎プログラム。ピラティスの基礎である正しい呼吸と背骨や骨盤の基本的な動きを繰り返し、身体の細部に意識を向けるという体験ができます。
              </p>
            </div>
          </div>
        </div>
        <div class="lesson-type pt-5 pt-md-6">
          <h3 class="text-center mb-4 mb-md-5">
            プライベートレッスン<br class="s">（マット・マシン）
          </h3>
          <p class="mb-4 mb-md-5">
            <strong>自分のアライメントや癖・特徴に気づく、あなただけのオーダーメイドレッスン</strong><br>
            zen place pilatesのプライベートレッスンではマシンワークとマットワークの2種類があります。<br class="pc">
            マンツーマンでクライアントのレベルや状態・要望に合わせてセッションを行っていきます。ピラティスを始めたばかりの方、動きが分からない方、思う様な効果を感じていない方、妊娠中や怪我などで動きに制限や禁忌がある方、より理解を深めたい・インストラクターを目指す方など全ての方に活用していただけます。
          </p>
          <div class="row">
            <div class="col-12 col-md-6">
              <img
                loading="lazy"
                src="~assets/images/studio/lesson-03.webp"
                alt="マットグループレッスン"
                class="w-100 mb-4"
              >
              <p class="lesson-title mb-2">
                Machine Private ｜マシンプライベート
              </p>
              <p>
                「本物のピラティス」を体験できる入門プログラム。基本的な動きと正しい呼吸で身体の細部まで意識を向け、集中力を高めながら全身を動かしていきます。心も身体もしなやかに整うきっかけを作ることができます。
              </p>
            </div>
            <div class="col-12 col-md-6 pt-4 pt-md-0">
              <img
                loading="lazy"
                src="~assets/images/studio/lesson-04.webp"
                alt="マットグループレッスン"
                class="w-100 mb-4"
              >
              <p class="lesson-title mb-2">
                Mat Private ｜マットプライベート
              </p>
              <p>
                「ピラティスの基本」となる動きと呼吸の基礎プログラム。ピラティスの基礎である正しい呼吸と背骨や骨盤の基本的な動きを繰り返し、身体の細部に意識を向けるという体験ができます。
              </p>
            </div>
          </div>
        </div>
        <!-- <div
          class="text-center pt-5"
        >
          <nuxt-link
            class="btn-white"
            :to="`/studios/${$route.params.studioId}/schedule`"
          >
            レッスンスケジュールはこちら
          </nuxt-link>
        </div> -->
      </div>
    </section>

    <section
      id="campaign"
      class="campaign"
    >
      <div class="c-ctalower bg-cta text-center">
        <div class="l-container">
          <div
            v-if="studio.studio_id === 170
              || studio.studio_id === 171"
          >
            <div class="campaign-reformerg">
              <img
                loading="lazy"
                src="~assets/images/welcome/campaign-reformerg.webp"
                class="w-100 d-block mx-auto"
                style="max-width:400px;"
                alt="体験キャンペーン"
              >
            </div>
          </div>
          <div
            v-else
          >
            <img
              loading="lazy"
              src="~assets/images/welcome/campaign_pc.webp"
              class="w-100 pc mx-auto"
              style="max-width:1200px;"
              alt="体験キャンペーン"
            >
            <img
              loading="lazy"
              src="~assets/images/welcome/campaign.webp"
              class="w-100 sp mx-auto"
              style="max-width:100vw;"
              alt="体験キャンペーン"
            >
          </div>
          <div class="banner-reserve">
            <h3 class="gothic">
              体験はお電話またはWEBで<br class="sp">ご予約ください
            </h3>
            <p>
              後日、スタジオよりご案内のお電話をさせていただきます。<br>
              ご不明な点やお悩み、気になることがありましたら、お気軽にご相談ください。
            </p>
            <div
              class="d-flex justify-content-center"
            >
              <a
                href="tel:03-4405-1245"
                class="c-ctalower-blue"
              >
                <i class="icon-phone" />
                電話予約
              </a>
              <a
                :href="$store.getters.taikenUrl(studio.brand_id, studio.studio_id, function (refnum){return getRefnumFromCookie()}, function (abtest){return getABtestValue()})"
                class="c-ctalower-orange"
              >
                <i class="icon-web" />
                ウェブで予約
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="voice py-6 py-md-7">
      <div class="l-container">
        <h2
          class="sec-title"
        >
          <small>Voice</small>
          ご利用者の声
        </h2>
        <VoiceList />
      </div>
    </section>
    <section class="faq py-6 py-md-7 bg-light-gray">
      <div class="l-container--md">
        <div
          v-if="isStrongOnly(studio)"
          class="text-center pb-5 mx-auto"
          style=""
        >
          <div class="text-center mx-auto">
            <div
              class="faq-cont pt-5 text-left mx-auto"
              style=""
            >
              <h2
                class="sec-title"
              >
                <small>Q&A</small>
                よくある質問
              </h2>
              <b-btn
                v-b-toggle.accordion-tsuika1
                block
                href="#"
                variant="light"
                class="my-3 py-3 faq-btn shadow-none mx-auto font-weight-bold"
              >
                <!-- <span class="when-opened">
                  <fa-icon
                    icon="minus"
                    color="#036fb1"
                  />
                </span>
                <span class="when-closed">
                  <fa-icon
                    icon="plus"
                    color="#036fb1"
                  />
                </span> -->
                体験当日の持ち物は？
              </b-btn>

              <b-collapse
                id="accordion-tsuika1"
                role="tabpanel"
              >
                動きやすい服装とタオルをお持ちください。
                <br>
                靴・ソックスは不要です。
              </b-collapse>
              <b-btn
                v-b-toggle.accordion-tsuika2
                block
                href="#"
                variant="light"
                class="my-3 py-3 faq-btn shadow-none mx-auto font-weight-bold"
              >
                <!-- <span class="when-opened">
                  <fa-icon
                    icon="minus"
                    color="#036fb1"
                  />
                </span>
                <span class="when-closed">
                  <fa-icon
                    icon="plus"
                    color="#036fb1"
                  />
                </span> -->
                ピラティス・ヨガの効果は？
              </b-btn>

              <b-collapse
                id="accordion-tsuika2"
                role="tabpanel"
              >
                様々な効果がありますが、どちらも、呼吸や動きによって、体幹や背骨・骨盤を整え、自律神経の
                安定・ホルモンバランスの調整、体質改善、姿勢改善が期待できます。さらに、代謝があがることからダイエットになったり、自律神経の安定からストレス解消となったり、心の安定に繋がることから病気の予防に繋がるという研究結果も次々と発表されています。
                <br>
                <br>
                より詳しいピラティスの効果については
                <nuxt-link
                  to="/pilates/benefits"
                  style="text-decoration: underline"
                >
                  こちら
                </nuxt-link>
                <br>
                より詳しいヨガの効果については
                <nuxt-link
                  to="/yoga/benefits"
                  style="text-decoration: underline"
                >
                  こちら
                </nuxt-link>
              </b-collapse>
              <b-btn
                v-b-toggle.accordion-tsuika3
                block
                href="#"
                variant="light"
                class="my-3 py-3 faq-btn shadow-none mx-auto font-weight-bold"
              >
                <!-- <span class="when-opened">
                  <fa-icon
                    icon="minus"
                    color="#036fb1"
                  />
                </span>
                <span class="when-closed">
                  <fa-icon
                    icon="plus"
                    color="#036fb1"
                  />
                </span> -->
                ヨガとピラティスの違いは？
              </b-btn>

              <b-collapse
                id="accordion-tsuika3"
                role="tabpanel"
              >
                ヨガは約5000年前にインドで誕生したと言われています。修行として行われ普及しました。ピラティスは第一次世界大戦時に、負傷兵のリハビリの為にジョセフ・ピラティス氏によって考案されました。<br><br>
                【ヨガ】<br>
                身体と心の調和に重点が置かれるのがヨガの元々の姿です。動きと共に行う呼吸は、主に腹式呼吸で、鼻から吸って鼻から吐き出す方法が一般的です。副交感神経を活性化するため、頭や身体をリラックスさせる効果があります。<br><br>
                【ピラティス】<br>
                呼吸と共に、背骨付近の筋肉を刺激し、インナーマッスルを効率よく鍛え、身体の持つ機能を最大限に引き出します。呼吸は主に胸式呼吸で、鼻から吸って口から吐き出します。交感神経を活性化するため、頭や身体をリフレッシュさせます。流れるように動き続けるムーブメントの中で微細な動きに意識を集中させることで、瞑想効果も期待ができます。<br><br>
                zen
                placeでは、ピラティスとヨガの動きを「マインドフル・ムーブメント」と考え、エクササイズを通して脳神経にアプローチし、心身ともにマインドフルな状態で豊かな毎日を送るためのライフスタイルとして提案しています。
              </b-collapse>
              <b-btn
                v-b-toggle.accordion-tsuika4
                block
                href="#"
                variant="light"
                class="my-3 py-3 faq-btn shadow-none mx-auto font-weight-bold"
              >
                <!-- <span class="when-opened">
                  <fa-icon
                    icon="minus"
                    color="#036fb1"
                  />
                </span>
                <span class="when-closed">
                  <fa-icon
                    icon="plus"
                    color="#036fb1"
                  />
                </span> -->
                筋トレとピラティス・ヨガでは<br class="sp-only">効果にどのような違いがありますか？
              </b-btn>

              <b-collapse
                id="accordion-tsuika4"
                role="tabpanel"
              >
                zen
                placeのピラティス・ヨガは、単にボディメイクをしたり筋肉をつけたり、痩せたりするためだけのものではありません。微細な動きを集中と内観により意識的に身体を動かすことで、脳神経系に働きかけ、免疫系も正常に働かせたり、心の状態もより良く変わります。正しくピラティス・ヨガを行うことで、フラットなお腹、すらりとした背筋、余分な力が抜けた自然な首や肩、美しく開いた鎖骨へと自然と導かれるため、健康的な身体に変化していきます。
              </b-collapse>

              <b-btn
                v-b-toggle.accordion-tsuika4-2
                block
                href="#"
                variant="light"
                class="my-3 py-3 faq-btn shadow-none mx-auto font-weight-bold"
              >
                <!-- <span class="when-opened">
                  <fa-icon
                    icon="minus"
                    color="#036fb1"
                  />
                </span>
                <span class="when-closed">
                  <fa-icon
                    icon="plus"
                    color="#036fb1"
                  />
                </span> -->
                体験レッスン料金のお支払い方法
              </b-btn>
              <b-collapse
                id="accordion-tsuika4-2"
                role="tabpanel"
              >
                事前決済と体験当日のスタジオ決済がお選びいただけます。<br>
                <br>
                ●事前決済<br>
                グループレッスンの体験料金は、レッスン受講が確認できた後に引き落としとなります。<br>
                お申し込み時以外でも、体験レッスン20分前まで事前決済のお手続きが可能です。<br>
                詳細は体験申し込み完了メールにてご確認ください。<br>
                ※プライベートレッスンはレッスンの24時間前キャンセルの場合100％請求となるため、ご注意ください。<br>
                <br>
                ●スタジオ決済<br>
                ご利用可能な決済方法は、クレジット・デビットカード、及びPayPayとなります。<br>
                ※2021年7月時点の取扱カードブランドはVISA/MASTER/JCB/AMEX/Diners<br>
                ※現金によるお支払いは不可
              </b-collapse>

              <b-btn
                v-b-toggle.accordion1
                block
                href="#"
                variant="light"
                class="my-3 py-3 faq-btn shadow-none mx-auto font-weight-bold"
              >
                <!-- <span class="when-opened">
                  <fa-icon
                    icon="minus"
                    color="#036fb1"
                  />
                </span>
                <span class="when-closed">
                  <fa-icon
                    icon="plus"
                    color="#036fb1"
                  />
                </span> -->
                体験当日の来店時間・所要時間
              </b-btn>

              <b-collapse
                id="accordion1"
                role="tabpanel"
              >
                所要時間は約2時間です。<br>
                当日は着替えの時間含めレッスン20分前までにご来店ください。<br>
                レッスン時間は55分です（一部のヨガプログラムに90分のものもございます、予約時にご確認ください）。<br>
                レッスン後に30分ほど、ヨガ・ピラティスの効果的な行い方など紹介させていただきます。
              </b-collapse>

              <b-btn
                v-b-toggle.accordion2
                block
                href="#"
                variant="light"
                class="my-3 py-3 faq-btn shadow-none mx-auto font-weight-bold"
              >
                <!-- <span class="when-opened">
                  <fa-icon
                    icon="minus"
                    color="#036fb1"
                  />
                </span>
                <span class="when-closed">
                  <fa-icon
                    icon="plus"
                    color="#036fb1"
                  />
                </span> -->
                体験当日の持ち物・服装
              </b-btn>

              <b-collapse
                id="accordion2"
                role="tabpanel"
              >
                当日は以下をご用意ください。<br>
                ● ピラティス、常温ヨガ<br>
                ・動きやすい服装（Tシャツ、ハーフパンツ、スパッツなど。シューズ不要）<br>
                ・汗拭き用タオル<br>
                ※店舗によりウォーターサーバーまたはお水の販売がございます。<br>
                <br>
                ● ホットヨガ・ホットピラティス・ホットHIIT<br>
                ・動きやすい服装（Tシャツ、ハーフパンツ、スパッツなど。シューズ不要）<br>
                ・汗拭き用タオル<br>
                ・水1リットル以上<br>
                ・シャワー用バスタオル<br>
                ・替えの下着<br>
                ※水の販売、レンタルタオル（有料）もございます。
              </b-collapse>

              <b-btn
                v-b-toggle.accordion3
                block
                href="#"
                variant="light"
                class="my-3 py-3 faq-btn shadow-none mx-auto font-weight-bold"
              >
                <!-- <span class="when-opened">
                  <fa-icon
                    icon="minus"
                    color="#036fb1"
                  />
                </span>
                <span class="when-closed">
                  <fa-icon
                    icon="plus"
                    color="#036fb1"
                  />
                </span> -->
                体験の種類はなにがある？
              </b-btn>

              <b-collapse
                id="accordion3"
                role="tabpanel"
              >
                【レッスンは大きく3種類あります】<br>
                ●グループレッスン<br>
                複数人で行うレッスンです。<br>
                ●プライベートレッスン<br>
                マンツーマンで行うので、全てのかたにおすすめです。妊娠中・けがをした後など身体を動かすのに不安があるかたや、はじめてのかたに特におすすめさせていただいています。<br>
                <br>
                【ヨガスタジオは温度設定が大きく2つあります】<br>
                ●常温<br>
                常温（22度前後）のスタジオで行います。<br>
                ●ホット<br>
                40度に温められた環境で行います。一部スタジオではローホット（28度前後、汗ばむくらい）のプログラムもございます。
              </b-collapse>

              <b-btn
                v-b-toggle.accordion4
                block
                href="#"
                variant="light"
                class="my-3 py-3 faq-btn shadow-none mx-auto font-weight-bold"
              >
                <!-- <span class="when-opened">
                  <fa-icon
                    icon="minus"
                    color="#036fb1"
                  />
                </span>
                <span class="when-closed">
                  <fa-icon
                    icon="plus"
                    color="#036fb1"
                  />
                </span> -->
                まったくの初心者、身体が硬い、<br class="sp">運動が苦手でも大丈夫？
              </b-btn>

              <b-collapse
                id="accordion4"
                role="tabpanel"
              >
                zen
                placeのレッスンは年齢・性別や運動経験を問わず行っていただけます。<br>
                初心者マークがついていないクラスも、強度は上がりますが、どなたさまでも参加・お楽しみいただけます。<br>
                見学のみ（予約不要）も歓迎しています。直接スタジオにお越しください。<br>
                また、妊娠中など身体を動かすのに不安があるかたや、その他質問などは各スタジオ、または総合受付まで気軽にお問い合わせください。総合受付は03-4405-1245（平日9:00-20:00、土日祝9:00-16:00）。
              </b-collapse>
            </div>
          </div>
        </div>
        <div
          v-else-if="isYogaOnly(studio)"
          class="text-center pb-5 mx-auto"
        >
          <div class="faq-cont text-left mx-auto">
            <h2
              class="sec-title"
            >
              <small>Q&A</small>
              よくある質問
            </h2>
            <b-btn
              v-b-toggle.accordion-tsuika1
              block
              href="#"
              variant="light"
              class="my-3 py-3 faq-btn shadow-none mx-auto font-weight-bold"
            >
              体験当日の持ち物は？
            </b-btn>

            <b-collapse
              id="accordion-tsuika1"
              role="tabpanel"
            >
              動きやすい服装とタオルをお持ちください。
              <br>
              靴・ソックスは不要です。
            </b-collapse>
            <b-btn
              v-b-toggle.accordion-tsuika2
              block
              href="#"
              variant="light"
              class="my-3 py-3 faq-btn shadow-none mx-auto font-weight-bold"
            >
              ピラティス・ヨガの効果は？
            </b-btn>

            <b-collapse
              id="accordion-tsuika2"
              role="tabpanel"
            >
              様々な効果がありますが、どちらも、呼吸や動きによって、体幹や背骨・骨盤を整え、自律神経の
              安定・ホルモンバランスの調整、体質改善、姿勢改善が期待できます。さらに、代謝があがることからダイエットになったり、自律神経の安定からストレス解消となったり、心の安定に繋がることから病気の予防に繋がるという研究結果も次々と発表されています。
              <br>
              <br>
              より詳しいピラティスの効果については
              <nuxt-link
                to="/pilates/benefits"
                style="text-decoration: underline"
              >
                こちら
              </nuxt-link>
              <br>
              より詳しいヨガの効果については
              <nuxt-link
                to="/yoga/benefits"
                style="text-decoration: underline"
              >
                こちら
              </nuxt-link>
            </b-collapse>
            <b-btn
              v-b-toggle.accordion-tsuika3
              block
              href="#"
              variant="light"
              class="my-3 py-3 faq-btn shadow-none mx-auto font-weight-bold"
            >
              ヨガとピラティスの違いは？
            </b-btn>

            <b-collapse
              id="accordion-tsuika3"
              role="tabpanel"
            >
              ヨガは約5000年前にインドで誕生したと言われています。修行として行われ普及しました。ピラティスは第一次世界大戦時に、負傷兵のリハビリの為にジョセフ・ピラティス氏によって考案されました。<br><br>
              【ヨガ】<br>
              身体と心の調和に重点が置かれるのがヨガの元々の姿です。動きと共に行う呼吸は、主に腹式呼吸で、鼻から吸って鼻から吐き出す方法が一般的です。副交感神経を活性化するため、頭や身体をリラックスさせる効果があります。<br><br>
              【ピラティス】<br>
              呼吸と共に、背骨付近の筋肉を刺激し、インナーマッスルを効率よく鍛え、身体の持つ機能を最大限に引き出します。呼吸は主に胸式呼吸で、鼻から吸って口から吐き出します。交感神経を活性化するため、頭や身体をリフレッシュさせます。流れるように動き続けるムーブメントの中で微細な動きに意識を集中させることで、瞑想効果も期待ができます。<br><br>
              zen
              placeでは、ピラティスとヨガの動きを「マインドフル・ムーブメント」と考え、エクササイズを通して脳神経にアプローチし、心身ともにマインドフルな状態で豊かな毎日を送るためのライフスタイルとして提案しています。
            </b-collapse>
            <b-btn
              v-b-toggle.accordion-tsuika4
              block
              href="#"
              variant="light"
              class="my-3 py-3 faq-btn shadow-none mx-auto font-weight-bold"
            >
              筋トレとピラティス・ヨガでは<br class="sp-only">効果にどのような違いがありますか？
            </b-btn>

            <b-collapse
              id="accordion-tsuika4"
              role="tabpanel"
            >
              zen
              placeのピラティス・ヨガは、単にボディメイクをしたり筋肉をつけたり、痩せたりするためだけのものではありません。微細な動きを集中と内観により意識的に身体を動かすことで、脳神経系に働きかけ、免疫系も正常に働かせたり、心の状態もより良く変わります。正しくピラティス・ヨガを行うことで、フラットなお腹、すらりとした背筋、余分な力が抜けた自然な首や肩、美しく開いた鎖骨へと自然と導かれるため、健康的な身体に変化していきます。
            </b-collapse>

            <b-btn
              v-b-toggle.accordion-tsuika4-3
              block
              href="#"
              variant="light"
              class="my-3 py-3 faq-btn shadow-none mx-auto font-weight-bold"
            >
              体験レッスン料金のお支払い方法
            </b-btn>
            <b-collapse
              id="accordion-tsuika4-3"
              role="tabpanel"
            >
              事前決済と体験当日のスタジオ決済がお選びいただけます。<br>
              <br>
              ●事前決済<br>
              グループレッスンの体験料金は、レッスン受講が確認できた後に引き落としとなります。<br>
              お申し込み時以外でも、体験レッスン20分前まで事前決済のお手続きが可能です。<br>
              詳細は体験申し込み完了メールにてご確認ください。<br>
              ※プライベートレッスンはレッスンの24時間前キャンセルの場合100％請求となるため、ご注意ください。<br>
              <br>
              ●スタジオ決済<br>
              ご利用可能な決済方法は、クレジット・デビットカード、及びPayPayとなります。<br>
              ※2021年7月時点の取扱カードブランドはVISA/MASTER/JCB/AMEX/Diners<br>
              ※現金によるお支払いは不可
            </b-collapse>

            <b-btn
              v-b-toggle.accordion1
              block
              href="#"
              variant="light"
              class="my-3 py-3 faq-btn shadow-none mx-auto font-weight-bold"
            >
              体験当日の来店時間・所要時間
            </b-btn>

            <b-collapse
              id="accordion1"
              role="tabpanel"
            >
              所要時間は約2時間です。<br>
              当日は着替えの時間含めレッスン20分前までにご来店ください。<br>
              レッスン時間は55分です（一部のヨガプログラムに90分のものもございます、予約時にご確認ください）。<br>
              レッスン後に30分ほど、ヨガ・ピラティスの効果的な行い方など紹介させていただきます。
            </b-collapse>

            <b-btn
              v-b-toggle.accordion2
              block
              href="#"
              variant="light"
              class="my-3 py-3 faq-btn shadow-none mx-auto font-weight-bold"
            >
              体験当日の持ち物・服装
            </b-btn>

            <b-collapse
              id="accordion2"
              role="tabpanel"
            >
              当日は以下をご用意ください。<br>
              ● ピラティス、常温ヨガ<br>
              ・動きやすい服装（Tシャツ、ハーフパンツ、スパッツなど。シューズ不要）<br>
              ・汗拭き用タオル<br>
              ※店舗によりウォーターサーバーまたはお水の販売がございます。<br>
              <br>
              ● ホットヨガ・ホットピラティス・ホットHIIT<br>
              ・動きやすい服装（Tシャツ、ハーフパンツ、スパッツなど。シューズ不要）<br>
              ・汗拭き用タオル<br>
              ・水1リットル以上<br>
              ・シャワー用バスタオル<br>
              ・替えの下着<br>
              ※水の販売、レンタルタオル（有料）もございます。
            </b-collapse>

            <b-btn
              v-b-toggle.accordion3
              block
              href="#"
              variant="light"
              class="my-3 py-3 faq-btn shadow-none mx-auto font-weight-bold"
            >
              体験の種類はなにがある？
            </b-btn>

            <b-collapse
              id="accordion3"
              role="tabpanel"
            >
              【レッスンは大きく3種類あります】<br>
              ●グループレッスン<br>
              複数人で行うレッスンです。<br>
              ●プライベートレッスン<br>
              マンツーマンで行うので、全てのかたにおすすめです。妊娠中・けがをした後など身体を動かすのに不安があるかたや、はじめてのかたに特におすすめさせていただいています。<br>
              <br>
              【ヨガスタジオは温度設定が大きく2つあります】<br>
              ●常温<br>
              常温（22度前後）のスタジオで行います。<br>
              ●ホット<br>
              40度に温められた環境で行います。一部スタジオではローホット（28度前後、汗ばむくらい）のプログラムもございます。
            </b-collapse>

            <b-btn
              v-b-toggle.accordion4
              block
              href="#"
              variant="light"
              class="my-3 py-3 faq-btn shadow-none mx-auto font-weight-bold"
            >
              まったくの初心者、身体が硬い、<br class="sp">運動が苦手でも大丈夫？
            </b-btn>

            <b-collapse
              id="accordion4"
              role="tabpanel"
            >
              zen
              placeのレッスンは年齢・性別や運動経験を問わず行っていただけます。<br>
              初心者マークがついていないクラスも、強度は上がりますが、どなたさまでも参加・お楽しみいただけます。<br>
              見学のみ（予約不要）も歓迎しています。直接スタジオにお越しください。<br>
              また、妊娠中など身体を動かすのに不安があるかたや、その他質問などは各スタジオ、または総合受付まで気軽にお問い合わせください。総合受付は03-4405-1245（平日9:00-20:00、土日祝9:00-16:00）。
            </b-collapse>
          </div>
        </div>
        <div
          v-else
          class="text-center mx-auto"
        >
          <div class="faq-cont text-left mx-auto">
            <h2
              class="sec-title"
            >
              <small>Q&A</small>
              よくある質問
            </h2>
            <b-btn
              v-b-toggle.accordion-tsuika1
              block
              href="#"
              variant="light"
              class="my-3 py-3 faq-btn shadow-none mx-auto font-weight-bold"
            >
              体験当日の持ち物は？
            </b-btn>

            <b-collapse
              id="accordion-tsuika1"
              role="tabpanel"
            >
              動きやすい服装とタオルをお持ちください。
              <br>
              靴・ソックスは不要です。
            </b-collapse>
            <b-btn
              v-b-toggle.accordion-tsuika2
              block
              href="#"
              variant="light"
              class="my-3 py-3 faq-btn shadow-none mx-auto font-weight-bold"
            >
              ピラティス・ヨガの効果は？
            </b-btn>

            <b-collapse
              id="accordion-tsuika2"
              role="tabpanel"
            >
              様々な効果がありますが、どちらも、呼吸や動きによって、体幹や背骨・骨盤を整え、自律神経の
              安定・ホルモンバランスの調整、体質改善、姿勢改善が期待できます。さらに、代謝があがることからダイエットになったり、自律神経の安定からストレス解消となったり、心の安定に繋がることから病気の予防に繋がるという研究結果も次々と発表されています。
              <br>
              <br>
              より詳しいピラティスの効果については
              <nuxt-link
                to="/pilates/benefits"
                style="text-decoration: underline"
              >
                こちら
              </nuxt-link>
              <br>
              より詳しいヨガの効果については
              <nuxt-link
                to="/yoga/benefits"
                style="text-decoration: underline"
              >
                こちら
              </nuxt-link>
            </b-collapse>
            <b-btn
              v-b-toggle.accordion-tsuika3
              block
              href="#"
              variant="light"
              class="my-3 py-3 faq-btn shadow-none mx-auto font-weight-bold"
            >
              ヨガとピラティスの違いは？
            </b-btn>

            <b-collapse
              id="accordion-tsuika3"
              role="tabpanel"
            >
              ヨガは約5000年前にインドで誕生したと言われています。修行として行われ普及しました。ピラティスは第一次世界大戦時に、負傷兵のリハビリの為にジョセフ・ピラティス氏によって考案されました。<br><br>
              【ヨガ】<br>
              身体と心の調和に重点が置かれるのがヨガの元々の姿です。動きと共に行う呼吸は、主に腹式呼吸で、鼻から吸って鼻から吐き出す方法が一般的です。副交感神経を活性化するため、頭や身体をリラックスさせる効果があります。<br><br>
              【ピラティス】<br>
              呼吸と共に、背骨付近の筋肉を刺激し、インナーマッスルを効率よく鍛え、身体の持つ機能を最大限に引き出します。呼吸は主に胸式呼吸で、鼻から吸って口から吐き出します。交感神経を活性化するため、頭や身体をリフレッシュさせます。流れるように動き続けるムーブメントの中で微細な動きに意識を集中させることで、瞑想効果も期待ができます。<br><br>
              zen
              placeでは、ピラティスとヨガの動きを「マインドフル・ムーブメント」と考え、エクササイズを通して脳神経にアプローチし、心身ともにマインドフルな状態で豊かな毎日を送るためのライフスタイルとして提案しています。
            </b-collapse>

            <b-btn
              v-b-toggle.accordion-tsuika4
              block
              href="#"
              variant="light"
              class="my-3 py-3 faq-btn shadow-none mx-auto font-weight-bold"
            >
              筋トレとピラティス・ヨガでは<br class="sp-only">効果にどのような違いがありますか？
            </b-btn>

            <b-collapse
              id="accordion-tsuika4"
              role="tabpanel"
            >
              zen
              placeのピラティス・ヨガは、単にボディメイクをしたり筋肉をつけたり、痩せたりするためだけのものではありません。微細な動きを集中と内観により意識的に身体を動かすことで、脳神経系に働きかけ、免疫系も正常に働かせたり、心の状態もより良く変わります。正しくピラティス・ヨガを行うことで、フラットなお腹、すらりとした背筋、余分な力が抜けた自然な首や肩、美しく開いた鎖骨へと自然と導かれるため、健康的な身体に変化していきます。
            </b-collapse>

            <b-btn
              v-b-toggle.accordion-tsuika4-4
              block
              href="#"
              variant="light"
              class="my-3 py-3 faq-btn shadow-none mx-auto font-weight-bold"
            >
              体験レッスン料金のお支払い方法
            </b-btn>
            <b-collapse
              id="accordion-tsuika4-4"
              role="tabpanel"
            >
              事前決済と体験当日のスタジオ決済がお選びいただけます。<br>
              <br>
              ●事前決済<br>
              グループレッスンの体験料金は、レッスン受講が確認できた後に引き落としとなります。<br>
              お申し込み時以外でも、体験レッスン20分前まで事前決済のお手続きが可能です。<br>
              詳細は体験申し込み完了メールにてご確認ください。<br>
              ※プライベートレッスンはレッスンの24時間前キャンセルの場合100％請求となるため、ご注意ください。<br>
              <br>
              ●スタジオ決済<br>
              ご利用可能な決済方法は、クレジット・デビットカード、及びPayPayとなります。<br>
              ※2021年7月時点の取扱カードブランドはVISA/MASTER/JCB/AMEX/Diners<br>
              ※現金によるお支払いは不可
            </b-collapse>

            <b-btn
              v-b-toggle.accordion1
              block
              href="#"
              variant="light"
              class="my-3 py-3 faq-btn shadow-none mx-auto font-weight-bold"
            >
              体験当日の来店時間・所要時間
            </b-btn>

            <b-collapse
              id="accordion1"
              role="tabpanel"
            >
              所要時間は約2時間です。<br>
              当日は着替えの時間含めレッスン20分前までにご来店ください。<br>
              レッスン時間は55分です（一部のヨガプログラムに90分のものもございます、予約時にご確認ください）。<br>
              レッスン後に30分ほど、ヨガ・ピラティスの効果的な行い方など紹介させていただきます。
            </b-collapse>

            <b-btn
              v-b-toggle.accordion2
              block
              href="#"
              variant="light"
              class="my-3 py-3 faq-btn shadow-none mx-auto font-weight-bold"
            >
              体験当日の持ち物・服装
            </b-btn>

            <b-collapse
              id="accordion2"
              role="tabpanel"
            >
              当日は以下をご用意ください。<br>
              ● ピラティス、常温ヨガ<br>
              ・動きやすい服装（Tシャツ、ハーフパンツ、スパッツなど。シューズ不要）<br>
              ・汗拭き用タオル<br>
              ※店舗によりウォーターサーバーまたはお水の販売がございます。<br>
              <br>
              ● ホットヨガ・ホットピラティス・ホットHIIT<br>
              ・動きやすい服装（Tシャツ、ハーフパンツ、スパッツなど。シューズ不要）<br>
              ・汗拭き用タオル<br>
              ・水1リットル以上<br>
              ・シャワー用バスタオル<br>
              ・替えの下着<br>
              ※水の販売、レンタルタオル（有料）もございます。
            </b-collapse>

            <b-btn
              v-b-toggle.accordion3
              block
              href="#"
              variant="light"
              class="my-3 py-3 faq-btn shadow-none mx-auto font-weight-bold"
            >
              体験の種類はなにがある？
            </b-btn>

            <b-collapse
              id="accordion3"
              role="tabpanel"
            >
              【レッスンは大きく3種類あります】<br>
              ●グループレッスン<br>
              複数人で行うレッスンです。<br>
              ●プライベートレッスン<br>
              マンツーマンで行うので、全てのかたにおすすめです。妊娠中・けがをした後など身体を動かすのに不安があるかたや、はじめてのかたに特におすすめさせていただいています。<br>
              ●マシングループレッスン<br>
              ピラティススタジオで行う、専用マシンを使った3人前後〜のレッスンです。<br>
              <br>
              【ヨガスタジオは温度設定が大きく2つあります】<br>
              ●常温<br>
              常温（22度前後）のスタジオで行います。<br>
              ●ホット<br>
              40度に温められた環境で行います。一部スタジオではローホット（28度前後、汗ばむくらい）のプログラムもございます。
            </b-collapse>

            <b-btn
              v-b-toggle.accordion4
              block
              href="#"
              variant="light"
              class="my-3 py-3 faq-btn shadow-none mx-auto font-weight-bold"
            >
              まったくの初心者、身体が硬い、<br class="sp">運動が苦手でも大丈夫？
            </b-btn>

            <b-collapse
              id="accordion4"
              role="tabpanel"
            >
              zen
              placeのレッスンは年齢・性別や運動経験を問わず行っていただけます。<br>
              初心者マークがついていないクラスも、強度は上がりますが、どなたさまでも参加・お楽しみいただけます。<br>
              見学のみ（予約不要）も歓迎しています。直接スタジオにお越しください。<br>
              また、妊娠中など身体を動かすのに不安があるかたや、その他質問などは各スタジオ、または総合受付まで気軽にお問い合わせください。総合受付は03-4405-1245（平日9:00-20:00、土日祝9:00-16:00）。
            </b-collapse>
          </div>
        </div>
      </div>
    </section>
    <section class="gallery py-6 py-md-7">
      <div class="l-container">
        <h2
          class="sec-title"
        >
          <small>Gallery</small>
          スタジオギャラリー
        </h2>
        <div
          v-if="studioImages.length > 0"
        >
          <div class="px-4 px-md-0">
            <div class="row justify-content-between px-0 px-md-4">
              <div
                v-if="studioImages.length > 0"
                class="col-12"
              >
                <div class="cf" />
                <div class="row">
                  <div>
                    <!-- スタジオスライダー画像 -->
                    <b-carousel
                      id="carouselFacilities"
                      v-model="slide"
                      :interval="4000"
                      controls
                      indicators
                      background="#ababab"
                      img-width="1024"
                      img-height="480"
                      style="text-shadow: 1px 1px 2px #333"
                    >
                      <b-carousel-slide
                        v-for="(image, index) in studioImages"
                        :key="index"
                        text=""
                        :img-src="image"
                        :img-alt="studio.studio_name + 'スタジオの写真'"
                      />
                    </b-carousel>
                  </div>
                </div>
                <!-- carousel thumbnails -->
                <div class="row justify-content-center">
                  <div>
                    <div class="d-flex mt-2">
                      <div
                        v-for="(image, index) in studioImages"
                        :key="index"
                      >
                        <a @click="slide = index">
                          <b-img
                            :src="image"
                            :alt="studio.studio_name + 'スタジオの写真'"
                            class="img-fluid slider-thumb"
                            :class="{
                              active: slide === index,
                            }"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="educator py-6 py-md-7">
      <div
        v-if="sortedInstructors.length > 0"
        id="s_educator"
        class="l-container "
      >
        <h2
          class="sec-title"
        >
          <small>Educator</small>
          エデュケーター
          <span class="pt-3">
            zen placeでは、講師をインストラクターとは呼ばず、Whole Body Educator（身体の教育者 / <br class="pc">エデュケーター）と呼びます。
            国際基準の資格を持つインストラクターが丁寧に教えるから安心です。</span>
        </h2>
        <div class="cf" />
        <div class="d-flex flex-wrap pb-5 educator-list">
          <div
            v-for="instructor in sortedInstructors"
            :key="instructor.user_id"
            class="col-4 col-md-2"
          >
            <!-- TODO: find solution for nice size -->
            <nuxt-link :to="`/instructors/${instructor.user_id}`">
              <b-img-lazy
                :src="instructor.image_face"
                width="70%"
              />
              <br>
              {{ instructor.nick_name }}
            </nuxt-link>
          </div>
        </div>
        <div
          class="text-center"
        >
          <a
            href="https://www.zenplace.co.jp/instructors"
            class="btn-white_border"
          >
            エデュケーター一覧はこちら
          </a>
        </div>
      </div>

    <!-- <div class="py-5 mt-5">
        <nearby-studios :studio="studio" />
      </div>-->
    </section>

    <section
      id="studio-info"
      class="pt-6 pt-md-7"
    >
      <div>
        <h2 class="sec-title">
          <small>Location</small>
          スタジオへのアクセス
          <span class="pt-3">{{ studio.access_1 }}</span>
        </h2>
        <div
          class="studio-info-box"
        >
          <div class="studio-map">
            <studio-map :studio="studio" />
          </div>
          <div class="l-container">
            <div class="studio-detail pt-5">
              <div>
                <dl>
                  <dt>スタジオ名</dt>
                  <dd>
                    {{ studio.brand_type | studioType }} {{ studio.studio_name }}スタジオ
                  </dd>
                </dl>
                <dl>
                  <dt>住所</dt>
                  <dd>
                    〒{{ studio.zip }}<br>
                    {{ studio.pref }} {{ studio.address1 }} {{ studio.address2 }}<br>
                    {{ studio.address3 }}
                  </dd>
                </dl>
                <dl>
                  <dt>営業時間</dt>
                  <dd>
                    月〜金 {{ studio.business_hour_weekday_from }}-{{
                      studio.business_hour_weekday_to
                    }}
                    / 土日祝 {{ studio.business_hour_holiday_from }}-{{
                      studio.business_hour_holiday_to
                    }}
                    <div
                      v-if="studio.business_hour_other"
                      class="alert alert-secondary mt-2"
                    >
                      ※ {{ studio.business_hour_other }}
                    </div>
                  </dd>
                </dl>
                <dl v-if="isYogaOrStrong(studio)">
                  <dt>室温</dt>
                  <dd class="temperture-box">
                    <studio-temperature :studio="studio" />
                  </dd>
                </dl>
                <dl>
                  <dt>TEL</dt>
                  <dd>{{ studio.tel }}</dd>
                </dl>
                <dl>
                  <dt>E-mail</dt>
                  <dd>{{ studio.email }}</dd>
                </dl>
              </div>
              <div class="studio_access">
                <h4>道順</h4>
                <div
                  v-for="(access, index) in accessWays"
                  :key="index"
                  class="row"
                >
                  <div class="col-12">
                    <b>■</b>
                    <span
                      v-html="access.access"
                    />
                    <p
                      style="white-space: pre-wrap"
                      v-html="access.access_walkway"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="nearby-studio py-6 py-md-7">
      <div class="l-container">
        <div
          id="nearbyStudio"
        >
          <nearby-studios :studio="studio" />
        </div>
      </div>
    </section>
    <section class="message bg-light-gray py-6 py-md-7">
      <div class="l-container--md">
        <div
          v-if="studio.message.length < 300"
          class="c-message messageMore"
        >
          <h2 class="sec-title">
            <small>Welcome</small>
            スタジオからの<br class="sp">メッセージ
            <span>zen place、ここにいけば、上がる！<br>
              気分が上がるスタジオ、zen place<br>
              なんでもできる気持ちになる、自分が好きになる、<br>
              前向きに生きようと思える、挑戦したくなる</span>
          </h2>
          <div
            class="message-box"
            v-html="studio.message"
          />
        </div>
        <div
          v-else
          class="c-message"
          :class="{ messageMore: isMore }"
        >
          <h2 class="sec-title">
            <small>Welcome</small>
            スタジオからの<br class="sp">メッセージ
            <span class="pt-4 pt-md-2">zen place、ここにいけば、上がる !<br>
              気分が上がるスタジオ、zen place<br>
              なんでもできる気持ちになる、自分が好きになる、<br class="pc">
              前向きに生きようと思える、挑戦したくなる</span>
          </h2>
          <div
            class="message-box"
            v-html="studio.message"
          />
          <div class="btn-box">
            <button @click="messageMore">
              もっと見る
            </button>
          </div>
        </div>
        <div
          v-if="studio.studio_movie_url"
          class="mx-auto text-center pb-5"
        >
          <div class="w-100 mx-auto text-center">
            <iframe
              class="studio_iframe"
              :src="studio.studio_movie_url"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              style="width: 100%; max-width: 560px; margin: 10px auto"
            />
          </div>
        </div>
        <div
          v-if="studio.url_instagram"
          class="text-center pt-5 pt-md-6"
        >
          <a
            class="btn-white_border"
            :href="studio.url_instagram"
            target="_blank"
          >
            スタジオのインスタグラム
          </a>
        </div>
      </div>
    </section>

    <section class="recruit pt-6 pt-md-7">
      <div class="l-container--md">
        <div class="recruit-contents bg-light-gray p-5 p-md-6">
          <h2 class="pb-4 text-center">
            ピラティス・ヨガ<br class="sp">インストラクター募集
          </h2>
          <p class="pt-4 pt-md-5">
            ヨガ・ピラティスインストラクター（正社員・パートナー）、受付（アルバイト）を募集中。YogaWorks、BASI Pilates等世界基準の資格も習得できる環境です。世界基準の技術を学び、自身の市場価値を高め、人や社会への貢献が実感できるお仕事です。理学療法士、看護師等医療従事者の方のご応募も歓迎します。
          </p>
          <div
            class="text-center pt-4 pt-md-5"
          >
            <a
              href="https://www.wholebodyeducator.com"
              target="_blank"
              class="btn-white_border"
            >
              詳しくはこちら
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import _ from 'lodash';
import moment from 'moment';
// import TrialFlowPilates from '~/components/TrialFlowPilates.vue';
import VoiceList from '~/components/VoiceList.vue';
// import NewsItem from '~/components/NewsItem.vue';

export default {
  head() {
    return {
      title: this.metaStudioTitle,
      link: [
        { rel: 'canonical', href: this.studioCanonical },
      ],
    };
  },

  scrollToTop: true,
  components: { // CtaLower,
    VoiceList,
  },
  async asyncData({ app, params }) {
    const studio = await app.$zenplaceApi.getStudio(params.studioId);
    const campaigns = await app.$zenplaceApi.getStudioCampaigns(studio.studio_id, { progress: false });

    return {
      studio,
      campaigns,
    };
  },

  data() {
    return {
      slide: 0,
      isMore: false,
      swiperOpt: {
        slidesPerView: 1,
        loop: true,
        centeredSlides: true,
        spaceBetween: 15,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        breakpoints: {
          769: {
            slidesPerView: 3,
            centeredSlides: false,
          },
        },
      },
    };
  },

  computed: {

    studioCanonical() {
      return `https://www.zenplace.co.jp/studios/${this.studio.slug}`;
    },
    // title tag
    metaStudioTitle() {
      const brandTypes = (this.studio.brand_type || '').split(',');
      if (brandTypes.includes('basi')) {
        if (this.studio.studio_id === 1) { return 'ピラティス専門スタジオ 中目黒 - zen place'; }
        if (this.studio.studio_id === 2) { return 'ピラティス専門スタジオ 銀座2丁目 - zen place'; }
        if (this.studio.studio_id === 3) { return 'ピラティス専門スタジオ 下北沢 - zen place'; }
        if (this.studio.studio_id === 5) { return 'ピラティス専門スタジオ 六本木 - zen place'; }
        if (this.studio.studio_id === 6) { return 'ピラティス専門スタジオ 新宿 - zen place'; }
        if (this.studio.studio_id === 7) { return 'ピラティス専門スタジオ 三軒茶屋 - zen place'; }
        if (this.studio.studio_id === 8) { return 'ピラティス専門スタジオ 自由が丘 - zen place'; }
        if (this.studio.studio_id === 9) { return 'ピラティス専門スタジオ 二子玉川 - zen place'; }
        if (this.studio.studio_id === 10) { return 'ピラティス専門スタジオ 渋谷 - zen place'; }
        if (this.studio.studio_id === 11) { return 'ピラティス専門スタジオ 用賀 - zen place'; }
        if (this.studio.studio_id === 29) { return 'ピラティス専門スタジオ 横浜 - zen place'; }
        if (this.studio.studio_id === 65) { return 'ピラティス専門スタジオ 三田 - zen place'; }
        if (this.studio.studio_id === 72) { return 'ピラティス専門スタジオ 大森 - zen place'; }
        if (this.studio.studio_id === 75) { return 'ピラティス専門スタジオ 茗荷谷 - zen place'; }
        if (this.studio.studio_id === 90) { return 'ピラティス専門スタジオ 代々木上原 - zen place'; }
        if (this.studio.studio_id === 95) { return 'ピラティス専門スタジオ 恵比寿 - zen place'; }
        if (this.studio.studio_id === 111) { return 'ピラティス専門スタジオ 本郷三丁目 - zen place'; }
        if (this.studio.studio_id === 112) { return 'ピラティス専門スタジオ 目黒 - zen place'; }
        if (this.studio.studio_id === 113) { return 'ピラティス専門スタジオ 横浜元町 - zen place'; }
        if (this.studio.studio_id === 120) { return 'ピラティス専門スタジオ 都立大学 - zen place'; }
        if (this.studio.studio_id === 144) { return 'ピラティス専門スタジオ 千歳烏山 - zen place'; }
        if (this.studio.studio_id === 145) { return 'ピラティス専門スタジオ 日吉 - zen place'; }
        if (this.studio.studio_id === 146) { return 'ピラティス専門スタジオ 麻布十番 - zen place'; }
        if (this.studio.studio_id === 154) { return 'ピラティス専門スタジオ 五反田 - zen place'; }
        if (this.studio.studio_id === 156) { return 'ピラティス専門スタジオ 上野 - zen place'; }
        if (this.studio.studio_id === 161) { return 'ピラティス専門スタジオ 大井町 - zen place'; }
        if (this.studio.studio_id === 170) { return 'ピラティス専門スタジオ・リフォーマー 自由が丘 - zen place'; }
        if (this.studio.studio_id === 171) { return 'ピラティス専門スタジオ・リフォーマー 下北沢 - zen place '; }
        if (this.studio.studio_id === 216) { return '「東京駅」徒歩5分 ピラティス専門スタジオ 八重洲 - zen place '; }

        return `ピラティス専門スタジオ ${this.studio.studio_name} - zen place`;
      }
      if (brandTypes.includes('pilates')) {
        if (this.studio.studio_id === 37) { return 'ピラティス専門スタジオ 新宿南口 - zen place'; }
        if (this.studio.studio_id === 40) { return 'ピラティス専門スタジオ梅田【大阪】 - zen place'; }
        if (this.studio.studio_id === 44) { return 'ピラティス専門スタジオ 五反田 - zen place'; }
        if (this.studio.studio_id === 48) { return 'ピラティス専門スタジオ 心斎橋 - zen place'; }
        if (this.studio.studio_id === 51) { return 'ピラティス専門スタジオ 銀座 - zen place'; }
        if (this.studio.studio_id === 58) { return 'ピラティス専門スタジオ 京都 - zen place'; }
        if (this.studio.studio_id === 166) { return 'ピラティス専門スタジオ 横浜 - zen place'; }
        if (this.studio.studio_id === 69) { return 'ピラティス専門スタジオ 成城学園前 - zen place'; }
        if (this.studio.studio_id === 183) { return 'ピラティス専門スタジオ 自由が丘 - zen place'; }
        if (this.studio.studio_id === 14) { return 'ピラティス専門スタジオ 吉祥寺 - zen place'; }
        if (this.studio.studio_id === 55) { return 'ピラティス専門スタジオ 三宮 - zen place'; }
        return `ピラティス専門スタジオ ${this.studio.studio_name} - zen place`;
      }

      if (brandTypes.includes('yoga')) {
        if (this.studio.studio_id === 21) { return 'ホットヨガ 常温ヨガ 梅田B2スタジオ - zen place'; }
        // if (this.studio.studio_id === 22) { return 'ヨガ 梅田スタジオ【大阪府】 - zen place'; }
        if (this.studio.studio_id === 32) { return 'ヨガ 横浜スタジオ【男性OK】 - zen place'; }
        if (this.studio.studio_id === 33) { return 'ヨガ 五反田スタジオ - zen place'; }
        if (this.studio.studio_id === 35) { return 'ヨガ 吉祥寺スタジオ 【東京都】 - zen place'; }
        if (this.studio.studio_id === 47) { return 'ヨガ心斎橋スタジオ【男性OK】 - zen place'; }
        if (this.studio.studio_id === 50) { return 'ヨガ 千里中央スタジオ 【大阪府】 - zen place'; }
        if (this.studio.studio_id === 59) { return 'ヨガ 三宮スタジオ【男性OK】 - zen place'; }
        if (this.studio.studio_id === 62) { return 'ヨガ 銀座スタジオ 【東京都】 - zen place'; }
        if (this.studio.studio_id === 92) { return 'ヨガ 人形町スタジオ 【東京都】 - zen place'; }
        if (this.studio.studio_id === 114) { return 'ヨガ 茗荷谷スタジオ 【東京都】 - zen place'; }
        if (this.studio.studio_id === 191) { return 'ヨガ 下北沢スタジオ - zen place'; }
        if (this.studio.studio_id === 193) { return 'ヨガ 二子玉川スタジオ 【東京都】 - zen place'; }
        return `ヨガ ${this.studio.studio_name} - zen place`;
      }
      if (brandTypes.includes('strong')) {
        if (this.studio.studio_id === 23) { return 'ホットヨガ 銀座スタジオ【男性OK】 - zen place'; }
        if (this.studio.studio_id === 36) { return 'ホットヨガ 学芸大学スタジオ【男性OK】 - zen place'; }
        if (this.studio.studio_id === 38) { return 'ホットヨガ 自由が丘スタジオ【男性OK】 - zen place'; }
        if (this.studio.studio_id === 57) { return 'ホットヨガ 西葛西スタジオ【男性OK】 - zen place'; }
        return `ホットヨガ ${this.studio.studio_name} - zen place`;
      }
      return `ピラティス・ヨガ専門スタジオ ${this.studio.studio_name} - zen place 全国100店舗以上`;
    },

    studio() {
      return this.$parent.studio;
    },

    news() {
      return this.$parent.news;
    },

    filteredNews() {
      return _.filter(this.news, (n) => n.brand_id === this.studio.brand_id);
    },

    sortedNews() {
      return _.sortBy(this.filteredNews, (n) => -moment(n.indication_start_date).valueOf);
    },

    // 今月レッスンを持ってるインストラクター
    instructorsWithThisMonthLesson() {
      return this.$parent.instructorsWithThisMonthLesson;
    },

    sortedInstructors() {
      return _.sortBy(this.$parent.instructorsWithThisMonthLesson, (d) => d.nick_name);
    },

    studioImages() {
      return _.compact(
        _.map(_.range(1, 6), (i) => this.studio[`facility_${i}_image`]),
      );
    },
    brandType() {
      const brandTypes = (this.studio.brand_type || '').split(',');
      if (brandTypes.includes('basi')) {
        return 'basi';
      } if (brandTypes.includes('pilates')) {
        return 'pilates';
      } if (brandTypes.includes('yoga')) {
        return 'yoga';
      } if (brandTypes.includes('strong')) {
        return 'hot yoga';
      }
      return 'unknown';
    },

    // Returns array of available access walkways
    accessWays() {
      return _.compact(
        _.map(_.range(1, 6), (i) => (
          !this.studio[`access_${i}`]
            ? null
            : { access: this.studio[`access_${i}`], access_walkway: this.studio[`access_walkway_${i}`] }
        )),
      );
    },
    breadcrumbs() {
      return {
        data: [
          {
            name: 'TOP',
            path: '/',
          },
          {
            name: 'スタジオ一覧',
            path: '/studios',
          },
          {
            name: this.studio.studio_name,
          },
        ],
      };
    },
  },

  methods: {
    messageMore() {
      this.isMore = !this.isMore;
    },
    isYogaOrStrong(studio) {
      return (studio.brand_type || '').split(',').includes('yoga')
    || (studio.brand_type || '').split(',').includes('strong');
    },
    isAllPilates(studio) {
      return (studio.brand_type || '').split(',').includes('pilates')
    || (studio.brand_type || '').split(',').includes('basipilates');
    },
    isYogaAndPilates(studio) {
      return (((studio.brand_type || '').split(',').includes('yoga')
    || (studio.brand_type || '').split(',').includes('strong')) && ((studio.brand_type || '').split(',').includes('pilates')
    || (studio.brand_type || '').split(',').includes('basipilates')));
    },
    isYogaOnly(studio) {
      return (studio.brand_type || '').split(',').includes('yoga');
    },
    isStrongOnly(studio) {
      return (studio.brand_type || '').split(',').includes('strong');
    },
    replaceDomains(contents) {
      if (contents) {
        return contents.replace(/"\/upload/g, '"/upload');
      }
      return '';
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

<style lang="scss" scoped>
@import "node_modules/bootstrap/scss/mixins";
@import "~assets/scss/variables";
@import "~assets/scss/newvariables";

.trial-flow {
  background-color: #F4F4F4;
}

.sec-title {
  margin-bottom: 5rem;
  text-align: center;
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 1.8;

  @include tab{
    margin-bottom: 3rem;
    font-size: 2.8rem;
    line-height: 1.5;
  }
  span {
    display: block;
    color: #535353;
    font-size: 1.6rem;
    font-weight: normal;
    line-height: 1.7;
  }
  strong {
    color: #E93742;
    text-transform: uppercase;
    letter-spacing: .05rem;
    font-size: 3.2rem;

    @include tab{
      font-size: 3.2rem;
    }
  }
  small {
    display: block;
    color: #E93742;
    letter-spacing: .05rem;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 5px;

    @include tab{
      font-size: 1.8rem;
    }
  }
}
.sub-title {
  margin-bottom: 2rem;
  color: #535353;
  font-weight: 700;
  font-size: 2rem;
  font-family: $gothic !important;
  line-height: 1.5;
}

// .since2004 {
//   padding-top: 8rem;
//   padding-bottom: 8rem;
//   @include tab{
//     padding-top: 6rem;
//   }
//   @include sp {
//     padding-top: 2rem;
//   }
// }
.concept {
  padding-top: 8rem;
  padding-bottom: 8rem;
  @include tab{
    padding-top: 6rem;
  }
  @include sp {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
  .sec-title {
    margin-bottom: 0;
    span {
      display: block;
      margin-left: auto;
      margin-right: auto;
      max-width: 950px;
      font-size: 1.6rem;
      font-weight: normal;
      @include tab {
        width: 100%;
      }
    }
  }
    .concept-title-en {
      display: block;
      font-size: 3.2rem;
      text-transform: none;
      @include tab {
        font-size: 2rem;
      }
    }
    .concept-title-jp-box {
      display: inline-block;
      margin: 0 auto;
    }
    .concept-title-jp {
      font-size: 3.2rem;
      font-weight: 700;
      color: #535353;
      @include tab {
      font-size: 2.8rem;
      line-height: 1.7;
      letter-spacing: 0.2rem;
      }

      strong {
        font-size: 3.2rem;
        font-weight: 700;
        @include tab {
          font-size: 2.8rem;
        }
      }
    }

}
.point {
  .sec-title {
    line-height: 1.5;
    ._lead {
      display: inline;
      font-weight: 700;
      font-size: 3.2rem;

      @include tab {
        font-size: 2.8rem;
      }
      span {
        display: inline;
      }
      ._text-red {
        color: #E93742;
        font-size: 3.2rem;

        @include tab {
          font-size: 2.8rem;
        }
      }
    }
    strong {
        font-size: 3.2rem;
        font-weight: 700;
      }
  }
  ul {
    padding: 0;
    li {
      span {
        display: block;
        color: rgba(233, 55, 66, 1);
        font-weight: bold;
        font-size: 5.5rem;

        @include tab{
          font-size: 3.7rem;
        }
        }
        .reason-img-box {
          position: relative;
          .reason-img-title {
            margin: 0;
            background-color: #fff;
            position: absolute;
            left: -1px;
            bottom: -1px;
            padding: 12px 20px 0 1px;
            font-size: 2.8rem;
            font-weight: 700;
            color: #E93742;
            line-height: 1.2;
            font-family: $mincho!important;
          }
          }
          .reason-title {
            margin-top: 20px;
            font-size: 2rem;
            font-weight: 700;
          }
          .reason-text {
            @include tab {
              padding-bottom: 15px;
            }
          }
      }

      span.subtitle {
        display: block;
        // color: #535353;
        font-size: 2.4rem;
        padding-bottom: 10px;
      }
      p {
        text-align: left;
        font-size: 1.6rem;

        @include tab {
          font-size: 1.6rem;
        }
        strong {
          font-size: 2rem;
        }
      }
      a {
          strong {
          color: #E93742;
          font-size: 1.6rem;
        }
        ::after {
          display: inline-block;
          margin-left: 5px;
          width: 13px;
          height: 13px;
          background: url(~assets/images/studio/icon-arrow-right.svg) no-repeat;
          background-position: center;
          background-size: contain;
          content: "";
          transform: translate(0,1px);
        }
      }
    }
  }

.gallery {
  .sec-title {
    line-height: 1.5;
    ._lead {
      display: inline;
      font-weight: 700;
      font-size: 3.2rem;

      @include tab {
        font-size: 2.8rem;
      }
      span {
        display: inline;
      }
      ._text-red {
        color: #E93742;
        font-size: 3.2rem;

        @include tab {
          font-size: 2.8rem;
        }
      }
    }
    strong {
        font-size: 3.2rem;
        font-weight: 700;
      }
  }

}
.br-sp {
  display: none;

  @include sp {
    display: block;
  }
}

.message .c-header {
  color: #2e6eac;
}
.message {
  .btn-box {
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: center;

    gap: 30px;
    @include tab {
      display: block;
      div {
        width: auto;
      }
    }
    div {
      margin: 0 5px;
      .btn-white {
        height: 2.5em;
      }
    }
  }
}

.message_section {
  margin: auto;
}
.studio-header {
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("~/assets/images/studio/header.webp") center center no-repeat;
  background-size: auto 80%;

  @include tab {
    margin-top: 50px;
    height: pv(200);
    background-image: url("~/assets/images/studio/header-sp.webp");
    background-size: cover;
  }
  h1 {
    color: #fff;
  }
}
.studio-header div.h1block-sp {
  background-color: #2e6eac;

  h1 {
    color: #fff;
    font-size: 20px;
    line-height: 26px;

    span.brand-name {
      font-size: 15px;
    }
  }
}

.studio-header {
  position: relative;
}
.carousel-fade {
  z-index: 0;
}

.studio-header div.h1block-pc {
  position: absolute;
  top: 100px;
  right: 0;
  left: 0;
  z-index: 1;
  margin: auto;
  padding: 30px;
  width: 400px;
  background-color: rgba(46, 110, 172, 0.85);

  h1.h1-pc {
    display: block;
    color: #fff;
    font-size: 20px;
    line-height: 26px;

    span.brand-name {
      font-size: 15px;
    }
  }
}
.nav-anchor {
  margin-top: 2em;
  padding-right: 15px;
  padding-left: 15px;
  ul {
    display: flex;
    justify-content: space-between;
    padding: 0;

    @include tab {
      flex-wrap: wrap;
    }
    li {
      margin-bottom: 1em;
      padding: 0.8em 0;
      width: 24%;
      border: 1px solid $blue;
      text-align: center;

      @include tab {
        width: 48%;
      }
      a {
        color: $blue;
        font-size: 16px;

        @include sp {
          font-size: pv(12);
        }
      }
    }
  }
}

.info-sn {
  margin-bottom: 5px;
  padding: 7px 7px 7px 0;
  border-bottom: 2px solid #2e6eac;
  color: #2e6eac;
  font-weight: bold;
  line-height: 40px;
}

.btn-orange-studio {
  @include sp {
    margin: 0 pv(5.5);
    width: pv(170);
    height: pv(50);
    border: 1px solid #fea667;
    border-radius: pv(50);
    background: #f87822;
    color: #fff;
    letter-spacing: pv(1);
    font-weight: bold;
    font-size: pv(16);

    &:before {
      display: block;
      margin-right: pv(10.5);
      width: pv(19);
      height: pv(25);
      background-image: url("~assets/images/components/ctafooter/trial.webp");
      background-size: contain;
      background-repeat: no-repeat;
      content: "";
    }
  }
}

.studio-default-bg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(~assets/images/common/default-studio-bg.webp);
  background-position: center center;
  background-size: cover;

  background-blend-mode: overlay;
}
h3.message {
  margin: 0 auto 30px auto;
  padding: 13px 15px;
  border-bottom: #036fb1 2px solid;
  color: #333;
  text-align: center;
  font-size: 25px;
}
h2 .c-studio-grade-01,
h2 .c-studio-grade-02,
h2 .c-studio-grade-03,
h2 .c-studio-grade-04,
h2 .c-studio-grade,
h2 .span-studio-type {
  font-size: 1.6rem;
}

.p-studio-hero {
  padding-top: 4rem;
  background: url(~assets/images/studio/pilates-studio/header-bg.webp) center
    no-repeat;
  background-size: 100%;

  p {
    color: #2c669f;
    font-weight: bold;
    font-size: 2rem;
    strong {
      font-size: 3.2rem;
    }
  }
}
.p-studio-information {
  strong {
    font-weight: normal;
    font-size: 2.4rem;
    line-height: 3.4rem;
  }

  .p-studio-information-genre {
    color: #333;
    font-size: 1.3rem;
  }
  .p-studio-information-address {
    text-align: center;
    font-size: 1.3rem;
  }
}
.p-studio-zen {
  h2 {
    color: #2e6eac;
    font-size: 2rem;
    font-family: $mincho;
  }
  .tabs {
    border-top: none;
  }
  .nav-tabs .nav-item:first-child .active {
    border-right: 1px solid;
  }
  .nav-tabs .nav-link {
    border-right: none;
    border-bottom: 1px solid;
    color: #2e6eac;
    font-size: 1.8rem;
  }
  .nav-tabs .nav-link.active {
    border-top: 1px solid;
    border-bottom: none;
    border-left: 1px solid;
  }
  .p-studio-zen-cat {
    li {
      max-width: 150px;
      width: 100%;
      border-radius: 20px;
      background: #2e6eac;
      text-align: center;
      font-size: 1.2rem;
      font-family: $mincho;
    }
    .disable {
      opacity: 0.5;
    }
  }
}
.bg-grey {
  background: #e8e8e8;
}
.firsttime {
  text-align: center;
  padding-top: 5rem;
}
.p-letter .beige {
  background: #ececec;
}
.collapsed > .when-opened,
:not(.collapsed) > .when-closed {
  display: none;
}
.studio-default-bg.jumbotron-studio-basi {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(~assets/images/studio/studio-main-basi.webp);
}
.studio-default-bg.jumbotron-studio-pilates {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(~assets/images/studio/studio-main-basi.webp);
}
.studio-default-bg.jumbotron-studio-yoga {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(~assets/images/studio/studio-main-yoga.webp);
}
.studio-default-bg.jumbotron-studio-strong {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(~assets/images/studio/studio-main-yoga.webp);
}
#studio-info-box {
  @include tab {
    margin-top: 1em;
  }
  h3 {
    margin-top: 3em;
  }
}
.studio-info-box {
  justify-content: space-between;

  @include tab {
    flex-direction: column-reverse;
  }
  .studio-map {
    width: 100%;

    @include tab {
      width: 100%;
    }
  }
  .studio-detail {
    width: 100%;

    @include tab {
      width: 100%;
    }
  }
  dl {
    display: flex;
    border-bottom: 1px solid #dddbdb;

    dt {
      width: 6em;
      font-weight: normal;

      @include sp {
        font-size: 1.6rem;
      }
    }
    dd {
      width: calc(100% - 6em);

      @include sp {
        font-size: 1.6rem;
      }
      &.temperture-box{
        margin-top: -0.2em;
        padding-bottom: 0.2em;
      }
    }
  }
  .studio_access {
    margin-top: 2em;
    h4 {
      color: #535353;
    }
  }
}
.p-studio-detail {
  img.slider-thumb {
    padding: 3px;
    height: 60px;
    border: 1px transparent;
    opacity: 0.5;
    transition: opacity 0.3s;

    object-fit: cover;
  }
  img.slider-thumb.active {
    border: 1px solid gray;
    opacity: 1;
  }
}
#studio-info {
  padding: 0;

  @include tab {
    padding-top: 3rem;
  }
}

.steps-list span {
  display: block;
  margin-bottom: 20px;
  padding: 8px 20px;
  max-width: 300px;
  border-radius: 40px;
  background-color: #006eb0;
  color: #fff;
  text-align: center;
  font-weight: bold;
}

.more-about-box {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  .more-about-text {
    width: 48%;

    @include tab {
      width: 100%;
    }
  }
  .more-about-img {
    width: 48%;

    @include tab {
      width: 100%;
    }
  }
}
.c-message {
  position: relative;
  padding-bottom: 5em;
  background-size: 100% auto;
  word-break: break-all;

  @include tab {
    padding-right: 2em;
    padding-left: 2em;
  }
  // Do not allow huge images in studio message
  img {
    max-width: 500px !important;
    width: 100% !important;
  }
  .message-box {
    overflow: hidden;
    height: 20em;
    font-size: 1.6rem;
    strong {
      font-size: 2rem !important;
      font-weight: 700;
      color: $blue;
    }
  }
  .btn-box {
    position: absolute;
    bottom: 0;
    padding-top: 10em;
    width: 100%;

    @include tab {
      padding-top: 5em;
      width: calc(100% - 4em);
    }

    button {
      display: block;
      margin: 0 auto;
      padding-left: 2em;
      border: none;
      background: transparent url("~/assets/images/common/icon_more.svg") center
        left no-repeat;
      background-size: contain;
      color: $blue;
      text-align: center;
    }
  }
  &.messageMore {
    padding-bottom: 2em;
    .message-box {
      overflow: visible;
      height: auto;
    }
    .btn-box {
      display: none;
    }
  }
}
.message {
  .btn-instagram {
    padding: 15px 15px 34px 15px;
    padding-right: 1.5em;
    padding-left: 3.4em;
    background: url("~/assets/images/studio/detail/icon_instagram.png") 8%
      center no-repeat;
    background-position: 11% 55%;
    background-size: auto 50%;
  }
}
.p-studio-oshirase {
  margin-top: 230px;
  padding: 1.5rem;
  max-width: 100vh;
  border: 1px solid;
  h2 {
    font-weight: bold;
    font-size: 1.8rem;
  }
  a {
    text-decoration: underline;
  }
}

.firsttime {
  .sec-title {
    ._lead {
      display: inline;
      font-weight: 700;
      font-size: 3.2rem;

      @include tab {
        font-size: 2.2rem;
      }
      span {
        display: inline;
      }
      ._text-red {
        color: #E93742;
        font-size: 3.2rem;
        font-family: $mincho;

        @include tab {
          font-size: 2.2rem;
        }
      }
    }
    strong {
        display: block;
      }
  }
}

.educator {
  background-color: #f4f4f4;
}
.educator-list {
  justify-content: start;
  text-align: center;
  font-size: 1.6rem;

  row-gap: 20px;
  img {
    width: 100%;
    height: 150px;
    padding-bottom: 0.5rem;

    object-fit:cover;
  }
}

@media (max-width: map-get($grid-breakpoints, "sm")) {
  .p-studio-oshirase {
    margin-top: 120px;
  }
  .steps-list span {
    margin-right: auto;
    margin-left: auto;
  }
}

.faq-cont {
  font-size: 1.6rem;
  a {
    font-size: 1.6rem;
  }
}
span.faq-sub-title {
  font-size: 3.2rem;
}
.faq-cont a.btn {
  display: flex;
  align-items: center;
  border: none;
  border: none;
  border-left: 2px solid $blue;
  background: $white;
  color: $blue;
  &::before {
    padding-right: 0.5em;
    content: "Q";
  }
  &::after {
    margin-right: 1em;
    margin-left: auto;
    padding: 0 !important;
    width: 0.7em;
    height: 0.7em;
    border-top: 2px solid #2e6eac;
    border-right: 2px solid #2e6eac;
    content: "";
    transform: rotate(135deg);

  }
  &.not-collapsed {
    &::after {
      transform: rotate(-45deg);
    }
  }
}
.faq-cont a.btn:focus,
.faq-cont a.btn:active,
.faq-cont a.btn:hover {
  outline: 0;
  border: none;
  border-left: 2px solid $blue;
  background: $white;
  color: $blue;
  transition: none;
}
// div[role="tabpanel"] {
//   padding-bottom: 20px;
// }
a.faq-btn {
  position: relative;
  border: none;
  border-bottom: 1px solid #999;
  background: none;
  color: #333;
  text-align: left;
}
a.faq-btn span {
  position: absolute;
  right: 10px;
}

/*studio message*/
.c-message img {
  display: block;
  margin: 10px auto;
  max-width: 500px !important;
  width: 100% !important;
}
.c-message a {
  text-decoration: underline;
}
.c-message a.btn-link,
.c-message a.btn-taiken,
.c-message a.btn-insta {
  position: relative;
  display: block;
  margin: 20px auto;
  padding: 15px;
  border-radius: 3px;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
}
.c-message a.btn-link:after,
.c-message a.btn-taiken:after {
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  content: "\e900";
  text-align: center;
  font-size: 10px;
  font-family: icomoon !important;
  line-height: 30px;
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  transform: rotate(-90deg);
}

.c-message a.btn-link {
  max-width: 400px;
  background-color: #333;
  color: #fff;
}
.c-message a.btn-taiken {
  max-width: 400px;
  background-color: #f87822;
  color: #fff;
}
.c-message a.btn-insta {
  padding: 20px 15px;
  max-width: 260px;
  background-color: #b43e74;
  color: #fff;
}
.c-message a.btn-inta:before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 10px;
  content: "\ea92";
  text-align: center;
  font-size: 10px;
  font-family: icomoon !important;
  line-height: 30px;
}
br.sp-only {
  display: none;

  @include tab {
    display: inline;
  }
}

.studio_iframe{
  height:350px;
}
@media (max-width: 767px) {
  .p-studio-hero {
    padding-top: 4rem;
    p {
      color: #2c669f;
      font-weight: bold;
      font-size: 1.6rem;
      strong {
        font-size: 2rem;
      }
    }
  }

  .studio_iframe{
  height:200px;

}

}

#news,
#trial-flow,
#about_zenplace {
  padding: 6rem 0;

  @include tab {
    margin-top: -12rem;
    padding-top: 12rem;
    padding-bottom: 5rem;
    padding-right: 5%;
    padding-left: 5%;
  }
}
.studio_access_title {
  padding-top: 50px;

  @include tab {
    padding-top: 3rem;
  }
}
@include tab {
  .trial-flow {
    padding-top: 12rem;
    #trial-flow {
      margin-top: -12rem;
      padding-top: 0;
    }
  }
}
#Breadcrumb{
  padding: 16px 0 0 0;

  @include sp{
    padding: 8px 0 0 0;
    font-size: 2.66667vw;
  }
  ul{
    flex-wrap: wrap;
    li{
      span{
        &::after{
          display: none;
        }
      }
    }
  }
}
h4 {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.06rem;
  line-height: 1.8;
  font-family: $gothic;
}

p {
  font-size: 1.6rem;
  letter-spacing: 0.06rem;
  line-height: 1.8;
}

span {
  letter-spacing: 0.06rem;
  font-size: 1.6rem;
}

pre {
  letter-spacing: 0.06rem;
  line-height: 1.8;
}
dl {
  letter-spacing: 0.06rem;
  font-size: 1.6rem;
}
.campaign-reformerg {
  background-color: #2d6eaa;
  padding: 50px 0;
  margin-bottom: 20px;
  @include tab {
    padding: 20px 10px;
  }

}

.recruit {
  .recruit-contents {
    border-radius: 15px;
    h2 {
      border-bottom: solid 1px #535353;
      @include tab {
        font-size: 2.4rem;
      }
    }
  }
}

.banner{
    position: relative;
    overflow: hidden;
    @include tab {
      >.d-flex{
        flex-direction: column;
      }
    }
    @include tab {
      .swiper-container{
        padding: 0 40px;
      }
      .swiper-wrapper,
      .swiper-slide{
        width: 100%!important;
      }

    }
    @include tab {
      .btn-blue_border{
        width: pv(325);
      }
    }

    h2{
      margin: 50px 48px 40px;

      @include tab {
        margin: pv(50) pv(25) pv(30) 0;
      }

    }
    .cf:after{
      display: block;
      clear: both;
      content: '';
    }

    &_single{

      .img{
        position: relative;

        img{
          width: 100%;
        }

        .label-wrap{
          position: absolute;
          bottom: 0;
          left: 0;

          .label{
            display: inline-block;
            padding: 5px 10px;
            background: $blue;
            color: $white;
            font-size: 1.2rem;
            line-height: 1;

            @include tab {
              padding: pv(7);
              min-width: pv(88);
              text-align: center;
              font-size: pv(16);
            }
          }
        }
      }
    }
  }

  section.lessons {
    .lesson-type {
      h3 {
        font-size: 2.4rem;
        font-family: $gothic;
        font-weight: bold;
        @include tab {
          font-size: 2rem;
        }
        &:after {
        content: "";
        display: block;
        height: 2px;
        background-color: $secondary;
        width: 60px;
        margin: 0 auto;
        margin-top: 15px;
      }
      }
    }
    .lesson-title {
      font-size: 1.8rem;
      font-weight: bold;
      color: $secondary;
    }
  }

  // .instagram-button {
  //   display: block;
  //   font-size: 1.8rem;
  //   position: relative;
  //   &::before {
  //     content: '';
  //     display: inline-block;
  //     position: absolute;
  //     background: url("~/assets/images/studio/detail/icon_instagram.png") center no-repeat;
  //     background-position: 11% 55%;
  //     background-size: contain;
  //     width: 25px;
  //     height: 25px;
  //   }
  // }
</style>
