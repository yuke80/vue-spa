<template>
  <div
    class="p-toppage"
  >
    <div class="header-movie">
      <h2 class="mv_title">
        <img
          loading="lazy"
          src="~assets/images/top/since2004.svg"
        >
        <p class="pt-4 pt-md-5 pc">
          zen placeが提案する、Well-being<br><br>
          構想から約20年、zen placeは世界の企業、団体と連携し<br>
          最先端テクノロジーやサイエンス、研究結果をも取り入れ<br>
          世界基準のレッスンを提供する、本格ピラティス・ヨガスタジオです。<br><br>
          脳の概念化、脳システムに基づき<br>
          知覚、実践で科学的に立証されたzen placeのピラティス・ヨガで<br>
          Well-beingの創造をサポートします。<br>
        </p>
        <p class="pt-4 pt-md-5 sp">
          zen placeが提案する、Well-being<br><br>
          構想から約20年、<br>
          zen placeは世界の企業・団体と連携し<br>
          最 先 端 テクノロジーや サイエンス<br>
          研究結果をも取り入れ<br>
          世界基準のレッスンを提供する<br>
          本 格ピラティス・ヨガスタジオです。<br><br>
          脳の概念化、脳システムに基づき<br>
          知覚、実践で科学的に立証された<br>
          zen placeのピラティス・ヨガで<br>
          Well-beingの創造をサポートします。
        </p>
      </h2>
      <video-background
        poster="/mv-img-pc.jpg? 230403"
        loading="lazy"
        src="/zenplace_small_new.mp4? 230403"
        :sources="[
          {src: '/zenplace_small_new.mp4? 230403', res: 638, autoplay: true, poster: '/mv-img.jpg? 230403'}
        ]"
      />
    </div>
    <!--<swiper
      class="p-top-slider"
      :options="swiperOpt"
    >
      <swiper-slide>
        <img
          loading="lazy"
          src="~assets/images/top/mv/mv-11.webp"
          class="w-100 d-sp-none"
          alt="心と体、変わる自分が楽しくなる ピラティス＝大人のボディメイク"
        >
        <img
          loading="lazy"
          src="~assets/images/top/mv/mv-1-spp.webp"
          class="w-100 d-none d-sp-block"
          alt="心と体、変わる自分が楽しくなる ピラティス＝大人のボディメイク"
        >
      </swiper-slide>
      <swiper-slide>
        <img
          loading="lazy"
          src="~assets/images/top/mv/mv-2.webp"
          class="w-100 d-sp-none"
          alt="心と体、変わる自分が楽しくなる ピラティス＝大人のボディメイク"
        >
        <img
          loading="lazy"
          src="~assets/images/top/mv/mv-2-sp.webp"
          class="w-100 d-none d-sp-block"
          alt="心と体、変わる自分が楽しくなる ピラティス＝大人のボディメイク"
        >
      </swiper-slide>
      <swiper-slide>
        <img
          loading="lazy"
          src="~assets/images/top/mv/mv-3.webp"
          class="w-100 d-sp-none"
          alt="心と体、変わる自分が楽しくなる ピラティス＝大人のボディメイク"
        >
        <img
          loading="lazy"
          src="~assets/images/top/mv/mv-3-sp.webp"
          class="w-100 d-none d-sp-block"
          alt="心と体、変わる自分が楽しくなる ピラティス＝大人のボディメイク"
        >
      </swiper-slide>
      <div
        slot="pagination"
        class="swiper-pagination"
      />
    </swiper>-->
    <!-- /.p-top-slider -->
    <div
      class="position-relative"
    >
      <nuxt-link
        to="/classes/worldpilates"
        class="p-top-latestnews d-flex p-3"
        :class="{'show-news': showNews}"
      >
        <div class="info mr-5">
          <span class="label-blue mr-5">LESSON</span>
          <time>2023/03/28</time>
        </div>
        <div class="p-top-latestnews_title d-flex align-items-center flex-fill justify-content-between">
          <div class="mr-3">
            「海外ピラティス講師のONLINE LESSON」4月スケジュールUP！
          </div>
          <img
            loading="lazy"
            src="~assets/images/common/icon_arrow-right.svg"
          >
        </div>
      </nuxt-link>
      <!-- <nuxt-link
        to="/classes/sports/baseball"
        class="p-top-latestnews d-flex p-3"
        :class="{'show-news': showNews}"
      >
        <div class="info mr-5">
          <span class="label-blue mr-5">LESSSON</span>
          <time>2023/03/23</time>
        </div>
        <div class="p-top-latestnews_title d-flex align-items-center flex-fill justify-content-between">
          <div class="mr-3">
            祝！WBC優勝「野球選手限定」キャンペーン開催中！
          </div>
          <img
            loading="lazy"
            src="~assets/images/common/icon_arrow-right.svg"
          >
        </div>
      </nuxt-link> -->
      <!-- <nuxt-link
        to="/classes/kafun"
        class="p-top-latestnews d-flex p-3"
        :class="{'show-news': showNews}"
      >
        <div class="info mr-5">
          <span class="label-blue mr-5">LESSSON</span>
          <time>2023/03/17</time>
        </div>
        <div class="p-top-latestnews_title d-flex align-items-center flex-fill justify-content-between">
          <div class="mr-3">
            花粉症モニターキャンペーン第２弾実施中！
          </div>
          <img
            loading="lazy"
            src="~assets/images/common/icon_arrow-right.svg"
          >
        </div>
      </nuxt-link> -->
      <!-- <nuxt-link
        to="/classes/menopause"
        class="p-top-latestnews d-flex p-3"
        :class="{'show-news': showNews}"
      >
        <div class="info mr-5">
          <span class="label-blue mr-5">LESSON</span>
          <time>2023/02/27</time>
        </div>
        <div class="p-top-latestnews_title d-flex align-items-center flex-fill justify-content-between">
          <div class="mr-3">
            zen place「#メノポーズ部」（閉経・更年期） 発足！3月スケジュールUp
          </div>
          <img
            loading="lazy"
            src="~assets/images/common/icon_arrow-right.svg"
          >
        </div>
      </nuxt-link> -->
      <!-- <nuxt-link
        to="/metaverse"
        class="p-top-latestnews d-flex p-3"
        :class="{'show-news': showNews}"
      >
        <div class="info mr-5">
          <span class="label-blue mr-5">EVENT</span>
          <time>2023/02/21</time>
        </div>
        <div class="p-top-latestnews_title d-flex align-items-center flex-fill justify-content-between">
          <div class="mr-3">
            にゃんにゃんにゃんの日、zen placeメタバースで「猫とピラティス」動画公開！
          </div>
          <img
            loading="lazy"
            src="~assets/images/common/icon_arrow-right.svg"
          >
        </div>
      </nuxt-link> -->
      <!-- <nuxt-link
        to="/news/info/11849"
        class="p-top-latestnews d-flex p-3"
        :class="{'show-news': showNews}"
      >
        <div class="info mr-5">
          <span class="label-blue mr-5">NEWS</span>
          <time>2023/02/16</time>
        </div>
        <div class="p-top-latestnews_title d-flex align-items-center flex-fill justify-content-between">
          <div class="mr-3">
            2店舗同時拡張移転のおしらせ｜京都＆福岡天神スタジオ
          </div>
          <img
            loading="lazy"
            src="~assets/images/common/icon_arrow-right.svg"
          >
        </div>
      </nuxt-link> -->
    </div>

    <!-- <section class="p-top-about">
      <div class="l-container">
        <div class="col-6 px-0">
          <h2 class="fa-2x blue">
            Well-beingを<br>ライフスタイルに
          </h2>
        </div>
        <div class="col-6">
          <p class="pt-md-0 pt-3">
            Since 2004 - zen placeはピラティス・ヨガ界のリーディングカンパニーとして、BASIピラティス、BalancedBody®、YogaWorks®、ビクラムヨガなど、ピラティス・ヨガの世界Top企業・団体との提携を通して、18年間世界レベルのピラティス・ヨガを提供し続けてまいりました。<br>
            ピラティス・ヨガを単なる運動、フィットネスとしてとらえるのではなく、心と身体を変える科学的なメソッドとして、日本のウェルビーイングを向上させるために日々努力しております。<br>
            <br>
            zen placeのピラティス・ヨガは、最先端テクノロジーやサイエンス、研究結果をも学び続けたピラティス・ヨガです。<br>
            <br>
            <strong>人生観が変わる、人生を変えるピラティス・ヨガ</strong><br>
            <br>
            世界の教育団体や世界で活躍する指導者から直接学ぶなどのグローバルな視点や、業界初のAIによる『背骨ムーブメント解析』を開発など、最先端テクノロジーを導入し、挑戦を重ねています。<br>
            情熱を持ってピラティス・ヨガの本質に向き合い続けた私たちだからこそ、共有できる理論と気付き、そして喜びがあります。<br>
            背骨周りの「微細なインナーマッスルに意識を向ける＝背骨を一骨ずつ丁寧に動かす」という、細かい筋肉や神経・細胞レベルで、動きに集中することにより『深い瞑想効果・フロー状態』へ導き、いままでの過度な不安や今までの思考の癖を取り払い、自分らしく自由で、明るくオープンマインドな人を増やしていきたいと考えています。<br>
            自然と身体がしなやかで伸びあがっていく感覚、これまでのピラティス・ヨガとの本質的なこと、続けることによる心と身体の繋がりを感じてください。<br>
            <br>
            <strong>私たちと一緒に、Well-beingの実現とその先へ。</strong>
          </p>
          <nuxt-link
            to="/about"
            class="btn-blue_border"
          >
            zen placeとは
          </nuxt-link>
        </div>
      </div>
    </section> -->
    <!-- .p-top-about -->

    <section class="sec-banner py-5 py-md-7">
      <div class="l-container">
        <swiper
          :options="swiperOpt3"
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
                  alt="zen place since 2004"
                  class="w-100"
                >
              </div>
            </a>
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
                  alt="zen place since 2004"
                  class="w-100"
                >
              </div>
            </a>
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
                  class="w-100"
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
                  alt="花粉症"
                  class="w-100"
                >
              </div>
            </a>
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
                  class="w-100"
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
                  class="w-100"
                >
              </div></a>
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <section class="p-top-services bg-light-gray">
      <div class="l-container">
        <h2 class="c-header-border-left">
          提供サービス
        </h2>
        <div class="cf" />
        <div class="wrapper">
          <div class="single">
            <nuxt-link
              to="/pilates"
            >
              <div
                class="img"
              >
                <img
                  loagind="lazy"
                  src="~assets/images/top/services/1.webp"
                  class="w−100"
                  alt="zen place ピラティス"
                >
              </div>
              <h3>zen place ピラティス</h3>
            </nuxt-link>
            <p>
              zen place pilatesは、筋トレ、フィットネスなどに変化したピラティスではなく、正統派で本物の「ピュア・ピラティス」です。<br>
              「ピュア・ピラティス」はいままでと違う身体の使い方で、今までとは違う自分に導きます。
            </p>
            <nuxt-link
              to="/pilates"
              class="btn-blue_border"
            >
              詳細を見る
            </nuxt-link>
          </div>
          <div class="single">
            <nuxt-link
              to="/yoga"
            >
              <div class="img">
                <img
                  loagind="lazy"
                  src="~assets/images/top/services/2.webp"
                  class="w−100"
                  alt="zen place ヨガ"
                >
              </div>
              <h3>zen place ヨガ</h3>
            </nuxt-link>
            <p>
              zen place yogaは、ストレッチや体操、筋トレやフィットネスを目的としたヨガではありません。瞑想を起点に「本当の自分」を知り、明るく、前向きにウェルビーイングに生きていくために考え抜いたzen placeオリジナルの正統派のハタヨガ、その名も「<strong>モダン・ヨガ</strong>」です。
            </p>
            <nuxt-link
              to="/yoga"
              class="btn-blue_border"
            >
              詳細を見る
            </nuxt-link>
          </div>
          <div class="single">
            <a
              href="https://academy.zenplace.co.jp/"
              target="_blank"
            >
              <div class="img">
                <img
                  loagind="lazy"
                  src="~assets/images/top/services/3.webp"
                  class="w−100"
                  alt="zen place アカデミー"
                >
              </div>
              <h3>zen place アカデミー</h3>
            </a>
            <p>
              ヨガピラティス・ボディワークの講座を中心に年間200本以上のワークショップを開催。<br>
              初心者からピラティス ・ヨガ経験者・講師資格を取りたい方まで、広く学べる場を提供しています。
            </p>
            <a
              href="https://academy.zenplace.co.jp/"
              target="_blank"
              class="btn-blue_border"
            >
              詳細を見る
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- /.p-top-services -->

    <!-- <section class="p-top-beginner">
      <div class="l-container--sm">
        <div class="text-center banner-contents-box">
          <h3 class="text-white">
            zen place 初めての方
          </h3>
          <p class="text-white pt-5">
            人生観が変わる、人生を変える。<br>
            zen placeのピラティス・ヨガで、<br>
            私たちと一緒に、Well-beingの実現とその先へ。
          </p>
          <div class="pt-5 pt-md-6 text-center">
            <nuxt-link
              to="/about/beginner"
              class="btn-transparent_border"
            >
              初めての方へ
            </nuxt-link>
          </div>
        </div>
      </div>
    </section> -->

    <section class="p-top-package">
      <div class="l-container">
        <h2 class="c-header-border-left">
          短期集中レッスン
        </h2>
        <div class="cf" />
        <div class="wrapper">
          <div class="single">
            <nuxt-link
              to="/classes/package32"
            >
              <div
                class="img"
              >
                <img
                  loagind="lazy"
                  src="~assets/images/top/32pk.webp"
                  class="w−100"
                  alt="32回パッケージレッスン"
                >
              </div>
              <div class="lesson-label my-2">
                <span>PILATES</span>
              </div>
              <h3>32回パッケージ</h3>
            </nuxt-link>
            <p>
              ピラティスを始めたいけどどのクラスを受けていいかわからない、やるからには効果を出したい、そんな方に。グループレッスン、プライベートレッスンにF-cabまたは背骨ムーブメント解析が付いたお得なプランです。
            </p>
            <nuxt-link
              to="/classes/package32"
              class="btn-blue_border package-btn"
            >
              詳細を見る
            </nuxt-link>
          </div>
          <div class="single">
            <nuxt-link
              to="/classes/yoga-for-well-being"
            >
              <div class="img">
                <img
                  loagind="lazy"
                  src="~assets/images/top/69pk.webp"
                  class="w−100"
                  alt="69回パッケージレッスン"
                >
              </div>
              <div class="lesson-label my-2">
                <span>YOGA</span>
              </div>
              <h3>Yoga for Well-being <br class="sp">３ヶ月パッケージ</h3>
            </nuxt-link>
            <p>
              ヨガ初心者、経験はあるけど長続きしなかった方におすすめ。3ヶ月で人生を変える、Yoga for Well-being 3ヶ月パッケージ。ヨガを楽しく継続し本当の意味でのウェルビーイングを実現するために生まれたプランです。
            </p>
            <nuxt-link
              to="/classes/yoga-for-well-being"
              class="btn-blue_border package-btn"
            >
              詳細を見る
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <!-- /.p-top-package -->

    <section class="p-top-studio">
      <div class="l-new-container">
        <h2 class="c-header-border-left">
          スタジオ一覧
        </h2>
        <p class="desc">
          全国100箇所以上、全国の主要都市にスタジオがあります。
        </p>
        <div class="img">
          <img
            loagind="lazy"
            src="~assets/images/top/studio-map.webp"
            alt="スタジオ一覧の地図"
          >
        </div>
        <div class="wrap">
          <nuxt-link
            to="/studios"
            class="btn-blue"
          >
            スタジオ一覧
          </nuxt-link>
        </div>
      </div>
    </section>
    <!-- /.p-top-studio -->
    <section class="p-top-insta sp">
      <div class="l-container">
        <div class="insta">
          <h2 class="c-header-border-left">
            zen place now
          </h2>
          <div class="cf" />
        </div>
        <div class="pt-5 pt-md-6">
          <!-- SnapWidget -->
          <iframe
            loading="lazy"
            src="https://snapwidget.com/embed/1023097"
            class="snapwidget-widget"
            allowtransparency="true"
            frameborder="0"
            scrolling="no"
            style="border:none; overflow:hidden;  width:100%; height:500px;"
            format="webp"
          />
        </div>
      </div>
    </section>

    <section class="p-top-insta pc">
      <div class="l-container">
        <h2 class="c-header-border-left">
          zen place Now
        </h2>
        <!-- <p class="desc">
          ～zen placeの今をお届け
        </p> -->
      </div>
      <div class="l-container pt-5 pt-md-6">
        <!-- SnapWidget -->
        <iframe
          loading="lazy"
          src="https://snapwidget.com/embed/1023668"
          class="snapwidget-widget"
          allowtransparency="true"
          frameborder="0"
          scrolling="no"
          style="border:none; overflow:hidden;  width:100%; height:600px;"
          format="webp"
        />
      </div>
    </section>

    <CtaLower id="campaign" />

    <section class="p-top-voices">
      <div class="l-container">
        <h2 class="c-header-border-left">
          ご利用者の声
        </h2>
        <div class="cf mb-5" />
        <VoiceList />
        <div class="text-center pt-3 pt-md-6">
          <nuxt-link
            to="/voice"
            class="btn-blue_border mx-auto"
          >
            もっと見る
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="p-top-marquee">
      <div class="marquee-container">
        <div
          class="marquee-profile-left"
        >
          <img
            loading="lazy"
            src="~assets/images/top_new/pilates/profiles-01.webp"
            class="img-profile"
            alt="ピラティススタジオ"
          >
        </div>
        <div
          class="marquee-profile-left marquee-second"
        >
          <img
            loading="lazy"
            src="~assets/images/top_new/pilates/profiles-01.webp"
            class="img-profile"
            alt="ピラティススタジオ"
          >
        </div>
      </div>
      <div class="marquee-container">
        <div
          class="marquee-profile-right"
        >
          <img
            loading="lazy"
            src="~assets/images/top_new/pilates/profiles-02.webp"
            class="img-profile"
            alt="ピラティススタジオ"
          >
        </div>
        <div
          class="marquee-profile-right marquee-second"
        >
          <img
            loading="lazy"
            src="~assets/images/top_new/pilates/profiles-02.webp"
            class="img-profile"
            alt="ピラティススタジオ"
          >
        </div>
      </div>
    </section>
    <!-- /.p-top-marquee -->

    <!-- <section class="p-top-news bg-light-gray">
      <div class="l-new-container">
        <h2 class="c-header-border-left">
          お知らせ
        </h2>
        <div class="cf" />
      </div>
      <nuxt-link
        to="/classes/worldpilates"
        class="c-news_single"
      >
        <div class="head d-flex align-items-center">
          <span class="label-blue mr-4">レッスン</span>
          <time>2023.02.28</time>
        </div>
        <div class="title d-flex flex-fill justify-content-between">
          <div class="mr-3">
            「海外ピラティス講師のONLINE LESSON」3月スケジュールUP！
          </div>
          <img
            loading="lazy"
            src="~assets/images/common/icon_arrow-right.svg"
          >
        </div>
      </nuxt-link>
      <nuxt-link
        to="/classes/menopause"
        class="c-news_single"
      >
        <div class="head d-flex align-items-center">
          <span class="label-blue mr-4">レッスン</span>
          <time>2023.02.27</time>
        </div>
        <div class="title d-flex flex-fill justify-content-between">
          <div class="mr-3">
            zen place「#メノポーズ部」（閉経・更年期） 発足！3月スケジュールUp
          </div>
          <img
            loading="lazy"
            src="~assets/images/common/icon_arrow-right.svg"
          >
        </div>
      </nuxt-link>
      <nuxt-link
        to="/metaverse"
        class="c-news_single"
      >
        <div class="head d-flex align-items-center">
          <span class="label-blue mr-4">イベント</span>
          <time>2023.02.21</time>
        </div>
        <div class="title d-flex flex-fill justify-content-between">
          <div class="mr-3">
            にゃんにゃんにゃんの日、zen placeメタバースで「猫とピラティス」動画公開！
          </div>
          <img
            loading="lazy"
            src="~assets/images/common/icon_arrow-right.svg"
          >
        </div>
      </nuxt-link>
      <nuxt-link
        to="/news/info/11849"
        class="c-news_single"
      >
        <div class="head d-flex align-items-center">
          <span class="label-blue mr-4">お知らせ</span>
          <time>2023.02.16</time>
        </div>
        <div class="title d-flex flex-fill justify-content-between">
          <div class="mr-3">
            2店舗同時拡張移転のおしらせ｜京都＆福岡天神スタジオ
          </div>
          <img
            loading="lazy"
            src="~assets/images/common/icon_arrow-right.svg"
          >
        </div>
      </nuxt-link>

      <nuxt-link
        to="/studios/basipilates-komazawa"
        class="c-news_single"
      >
        <div class="head d-flex align-items-center">
          <span class="label-blue mr-4">お知らせ</span>
          <time>2022.12.05</time>
        </div>
        <div class="title d-flex flex-fill justify-content-between">
          <div class="mr-3">
            緑あふれる駒沢公園近くにスタジオOPEN！
          </div>
          <img
            loading="lazy"
            src="~assets/images/common/icon_arrow-right.svg"
          >
        </div>
      </nuxt-link>
    </section> -->
    <!-- /.p-top-news-->

    <section
      v-if="sortedNews.length > 0"
      class="p-top-workshop-news"
    >
      <div class="l-new-container">
        <h2 class="c-header-border-left">
          ワークショップ
        </h2>
        <div class="cf" />
        <div
          class="pt-5"
        >
          <div
            v-for="(n) in sortedNews.slice(0,3)"
            :key="n.news_id"
          >
            <news-workshop
              class=""
              :news="n"
            />
          </div>
        </div>
        <div
          class="text-center pt-4 pt-md-5"
        >
          <nuxt-link
            to="news/workshops"
            class="btn-blue_border"
          >
            ワークショップ一覧へ
          </nuxt-link>
        </div>
      </div>
    </section>
    <!-- /.p-top-workshop-->

    <section class="p-top-column bg-light-gray">
      <div class="l-container">
        <h2 class="c-header-border-left">
          ピラティスコラム
        </h2>
        <span class="cf" />
        <swiper
          :options="swiperOpt2"
          class="mb-5"
        >
          <swiper-slide>
            <a
              href="https://www.zenplace.co.jp/column/body/4921.html"
              target="_blank"
              class="p-top-column_single"
            >
              <div class="img">
                <img
                  loading="lazy"
                  src="~assets/images/column/2.webp"
                  alt="姿勢改善まで！インナーマッスルを鍛えるメリットは？"
                >
                <div class="label-wrap">
                  <span class="label">BODY</span>
                  <span class="label">PILATES</span>
                </div>
              </div>
              <div class="info">
                <p>
                  姿勢改善に効果的！インナーマッスルを鍛えるメリットは？
                </p>
                <span>BY ZENPLACE / 2022年4月25日</span>
              </div>
            </a>
          </swiper-slide>

          <swiper-slide>
            <a
              href="https://www.zenplace.co.jp/column/pilates/8502.html"
              target="_blank"
              class="p-top-column_single"
            >
              <div class="img">
                <img
                  loading="lazy"
                  src="~assets/images/column/3.webp"
                  alt="イライラ、更年期太りなどの更年期症状の緩和にピラティス・ヨガがおすすめの理由とは？"
                >
                <div class="label-wrap">
                  <span class="label">PILATES</span>
                  <span class="label">WOMEN</span>
                </div>
              </div>
              <div class="info">
                <p>
                  更年期症状の緩和にピラティス・ヨガがおすすめの理由とは？
                </p>
                <span>BY ZENPLACE / 2021年2月25日</span>
              </div>
            </a>
          </swiper-slide>
          <swiper-slide>
            <a
              href="https://www.zenplace.co.jp/column/mindfulness/8462.html"
              target="_blank"
              class="p-top-column_single"
            >
              <div class="img">
                <img
                  loading="lazy"
                  src="~assets/images/column/4.webp"
                  alt="毎晩の瞑想で睡眠改善。"
                >
                <div class="label-wrap">
                  <span class="label">BODY</span>
                  <span class="label">SELFCARE</span>
                </div>
              </div>
              <div class="info">
                <p>
                  毎晩の瞑想で睡眠改善。
                </p>
                <span>BY ZENPLACE / 2021年3月26日
                </span></div>
            </a>
          </swiper-slide>
          <swiper-slide>
            <a
              href="https://www.zenplace.co.jp/column/pilates/8628.html"
              target="_blank"
              class="p-top-column_single"
            >
              <div class="img">
                <img
                  loading="lazy"
                  src="~assets/images/column/1.webp"
                  alt="体幹強化にはピラティスが効果的！"
                >
                <div class="label-wrap">
                  <span class="label">BODY</span>
                  <span class="label">PILATES</span>
                </div>
              </div>
              <div class="info">
                <p>体幹強化にはピラティスが効果的！</p>
                <span>
                  BY ZENPLACE / 2021年3月26日
                </span>
              </div>
            </a>
          </swiper-slide>
        </swiper>
        <div class="text-center">
          <a
            href="https://www.zenplace.co.jp/column/index.php"
            target="_blank"
            class="btn-blue_border"
          >
            コラム一覧へ
          </a>
        </div>
      </div>
    </section>
    <!-- /.p-top-column -->

    <section class="p-top-bowy">
      <div class="l-new-container">
        <h2 class="c-header-border-left">
          zen placeのビジョン
        </h2>
      </div>
      <div class="d-flex justify-content-between l-container">
        <div class="col-4">
          <img
            src="~assets/images/common/bowy.webp"
            loading="lazy"
            class="w-100 d-tab-none"
            alt="Be One With Yourself"
          >
          <img
            src="~assets/images/common/bowy-sp.webp"
            loading="lazy"
            class="w-100 d-none d-tab-block"
            alt="Be One With Yourself"
          >
        </div>
        <div class="col-7 white">
          <p>
            心と身体は一つです。<br>
            この一体となった精巧な身体、優れた身体があなたです。
          </p>
          <p>
            私たちは、 意識的に身体を動かすマインドフル・ムーブメントの専門知識と技術を通して、心にダイレクトにアプローチし、美しいあなたの状態に戻します。<br>
            前向きな心、活力にあふれた、美しく健康な身体、豊かな関係性という本来の状態を作ります。
          </p>
          <p>
            私たちは、 サイエンスとリサーチを活かし、人々が本当の自分自身と出会える場を創造し、社会に幸せの連鎖を広げていきます。
          </p>
        </div>
      </div>
    </section>
    <!-- /p-top-bowy -->
    <CtaLower />
  </div>
</template>

<script>
import _ from 'lodash';
import moment from 'moment';
import CtaLower from '~/components/CtaLower.vue';
import VoiceList from '~/components/VoiceList.vue';
import NewsWorkshop from '~/components/NewsWorkshop.vue';

export default {
  head() {
    return {
      title: 'ピラティス・ヨガNo1のzen place｜東京・大阪・名古屋など100店舗｜養成コース、ピラティスマシンも充実',
      titleTemplate: '',
      meta: [
        { hid: 'description', name: 'description', content: '豊かなライフスタイルとウェルビーイングの創造を目指し、全国に100店舗以上のピラティス・ヨガ専門スタジオ「zen place」。自分の心と体のつながりや変化に気づき、学べるピラティス・ヨガスタジオを運営しています。' },
        { hid: 'og:image', property: 'og:image', content: 'https://www.zenplace.co.jp/og.webp' },
        { hid: 'og:title', property: 'og:title', content: 'ピラティス・ヨガNo1のzen place｜東京・大阪・名古屋など100店舗｜養成コース、ピラティスマシンも充実' },
        { hid: 'og:description', property: 'og:description', content: '豊かなライフスタイルとウェルビーイングの創造を目指し、全国に100店舗以上のピラティス・ヨガ専門スタジオ「zen place」。自分の心と体のつながりや変化に気づき、学べるピラティス・ヨガスタジオを運営しています。' },
      ],
      link: [
        { rel: 'canonical', href: 'https://www.zenplace.co.jp/' },
      ],
      script: [
        {
          src: 'https://snapwidget.com/js/snapwidget.js',
          type: 'text/javascript',
          body: true,
        },
      ],
    };
  },
  components: {
    CtaLower,
    VoiceList,
    NewsWorkshop,
  },
  directives: {
    // This converts element inside so that each letter etc is wrapped in span
    // Taken mostly from https://github.com/yuanqing/charming
    spans: {
      // directive definition
      inserted(el) {
        const options = {
          tagName: 'span',
          split: null,
          setClassName(index) {
            return `char${index}`;
          },
        };
        const {
          tagName, split, setClassName,
        } = options;
        el.normalize();
        let index = 1;
        function inject(element) {
          const { parentNode } = element;
          const { nodeValue } = element;
          // Added customization for trimming so that empty and ending spaces are trimmed
          const trimmed = nodeValue.trim();
          const array = split ? split(trimmed) : trimmed.split('');
          array.forEach((string) => {
            const node = document.createElement(tagName);
            const className = setClassName(index += 1, string);
            if (className) {
              node.className = className;
            }
            node.appendChild(document.createTextNode(string));
            node.setAttribute('aria-hidden', 'true');
            parentNode.insertBefore(node, element);
          });
          if (nodeValue.trim() !== '') {
            parentNode.setAttribute('aria-label', nodeValue);
          }
          parentNode.removeChild(element);
        }

        (function traverse(element) {
          // `element` is itself a text node
          if (element.nodeType === 3) {
            return inject(element);
          }
          // `element` has a single child text node
          const childNodes = Array.prototype.slice.call(element.childNodes); // static array of nodes
          const { length } = childNodes;
          if (length === 1 && childNodes[0].nodeType === 3) {
            return inject(childNodes[0]);
          }
          // `element` has more than one child node
          childNodes.forEach((childNode) => {
            traverse(childNode);
          });
          return null;
        }(el));
      },
    },
  },
  async asyncData({ app }) {
    const studio = await app.$zenplaceApi.getStudio();
    const workshops = await app.$zenplaceApi.getNewsInCategory('ws');
    return {
      studio,
      workshops,
    };
  },

  layout: 'new',

  data() {
    return {
      showNews: true,
      swiperOpt: {
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      swiperOpt2: {
        slidesPerView: 1,
        loop: false,
        centeredSlides: true,
        spaceBetween: 14,
        breakpoints: {
          481: {
            slidesPerView: 3,
            centeredSlides: false,
          },
          769: {
            slidesPerView: 4,
            centeredSlides: false,
          },
        },
      },
      swiperOpt3: {
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
    filteredNews() {
      return _.filter(this.workshops, (n) => n.brand_id === 1 || n.brand_id === 4);
    },

    sortedNews() {
      return _.sortBy(this.filteredNews, (n) => -moment(n.indication_start_date).valueOf);
    },

  },

};
</script>

<style lang="scss" scoped>
@import '~assets/scss/newvariables';

.st0{fill:#006FB1;}

h1, h2, h5 {
  white-space: nowrap;
}

.header-movie{
  position:relative;
  overflow-x: hidden;
}
h2.mv_title{
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 99;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  @include tab {
    width: 92%;
  }
  img {
    display: block;
    width: 25%;
    margin: 0 auto;
  }
  p {
    color: #fff;
    font-family: $mincho;
    font-size: 2rem;
    text-align: center;
    line-height: 1.5;
    @include tab {
      font-size: 1.6rem;
      line-height: 1.5;
    }
  }
}
.vue-responsive-videobg{
  height:90vh;
}
.videobg-content {
  background-color: rgba(0, 0, 0,.5);
}
@media screen and (max-width:767px){
.vue-responsive-videobg{
  height:72vh;
}
}

.p-top{

  &page{
    font-size: 1.6rem;
  }

  &-slider{
    .swiper-pagination-bullets{
      bottom: 60px!important;

      @include tab{
        bottom: 20px!important;
      }

    }
    .swiper-pagination-bullet{
      bottom: 60px;
      margin: 0 6px!important;
      width: 14px;
      height: 14px;
      background: white;
      opacity: 1;

      @include tab{
        width: 12px;
        height: 12px;
      }
      @include tab {
        bottom: pv(24);
        margin: 0 pv(18);
        width: pv(11);
        height: pv(11);
      }

      &-active{
        background: $blue;
      }
    }
  } // .p-top-slider

  &-latestnews{
    top: -3em;
    z-index: 5;
    display: none!important;
    width: 84%;
    background: $white;
    font-size: 1.8rem;

    @include tab{
      position: relative;
      top: unset;
      padding: 1.5rem!important;
      width: 100%;
      font-size: 1.2rem;

      + .p-top-banners{
        padding-top: 30px;
        padding-bottom: 50px;
      }
    }
    @include tab {

      &.show-news{
        display: block!important;
        padding: pv(21) pv(25)!important;
      }

      .info{
        justify-content: space-between;
        margin-right: 0!important;
        font-size: pv(14);
      }

      &_title{
        margin-top: pv(12);
        font-size: pv(14);
      }

      + .p-top-banners{

        &.show-news{
          padding-top: pv(32);
          padding-bottom: 0;
        }
      }
    }

    &:hover{
      background: #ececec;
      opacity: 1!important;
    }

    &.show-news{
      display: flex!important;

      @include tab{
      flex-direction: column;
      }
    }

    .info{
      display: flex;
      align-items: center;
    }

    &_title{
      line-height: 2;
    }
    img{
      width: auto;
      height: 1em;
    }

    + .p-top-banners{
      &.show-news{
        padding-top: 100px;
      }

      &-hide{
        display: none;
      }
    }

    .label-blue {
      min-width: 100px;
      text-align: center;
      font-size: 1.2rem;
    }
  }// .p-top-latestnews

  &-banners{
    padding: 60px 0;
    background: $blue;
    color: $white;

    @include tabH{
      .fa-3x{
        font-size: 3rem;
      }
    }
    @include tab{
      padding: 30px 0;

      .fa-3x{
        margin-bottom: 0!important;
        font-size: 2rem;
      }
    }
    @include tab {
      padding: 0 pv(25);

      .fa-2x{
        margin-bottom: 0!important;
        font-size: pv(20);
      }

      .fa-3x{
        padding: pv(40) 0 pv(15);
        font-size: pv(20);
      }

      .l-container{
        display: block!important;
        margin-bottom: 0!important;
        padding: pv(22) 0 pv(30);
      }
    }

    &_single{
      display: inline-block;
      margin: 0 16px;
      max-width: 440px;
      width: 33%;
      text-align: center;

      @include tab{
        margin: 0 8px;
      }
      @include tab {
        margin: 0 0 pv(15);
        width: 100%;
      }

      &.full{
        max-width: unset;
        width: 100%;
      }

      span{
        display: inline-block;
        margin-bottom: 30px;
        padding: 2px 10px;
        min-width: 10em;
        border-bottom: 1px solid $white;
        color: $white;
        font-size: 1.2em;

        @include tabH{
          margin-bottom: 20px;
          font-size: 1em;
        }
        @include tab{
          margin-bottom: 10px;
          font-size: .5em;
        }
        @include tab {
          display: none;
        }
      }

      img{
        width: 100%;
      }
    }
  }// .p-top-banners

  &-about{
    padding: 40px 0px 40px;

    @include tab {
      padding-top: 20px;
      padding-bottom: 30px;

      h2{
        margin-bottom: 12px!important;
      }
    }
    .l-container{
      display: flex;
      overflow: hidden;
      align-items: flex-start;
      padding: 40px 64px;

      @include tabH{
        align-items: flex-start!important;

        .fa-2x{
          font-size: 2.6rem;
        }
      }
      @include tab{
        display: block;
        padding: 24px!important;
        width: 100%;

        .col-6{
          max-width: 100%;
          width: 100%;
        }
      }
      @include tab {
        align-items: flex-start!important;
        padding: pv(40) pv(20);

        .col-6{
          padding-right: 0;
          padding-left: 0;
        }
        .c-zenplace-logo{
          display: block;
          margin: 0 auto pv(12);
          width: pv(200);
        }
        .fa-2x{
          margin-bottom: pv(16);
          letter-spacing: pv(-1);
          font-size: pv(19);
          line-height: pv(35);
        }
        p{line-height: 2;}
      }

      .logo{
        margin: 20px 0 40px;
        width: 220px;

        @include tab {
          margin-bottom:24px;
        }

        svg{
          width: 100%;
        }
      }

      .fa-2x{
        font-weight: bold;
        font-size: 6rem;
        line-height:1.5;

        @include tab  {
          font-size: 3.2rem;
        }
      }

      p strong{
        color:#2e6eac;
        font-size: 2rem;
      }

      h1{
        line-height: 1.8;
      }

      p{
        margin-bottom: 32px;
        line-height: 2.3;
      }
    }
  }// .p-top-about

  &-marquee{
    // padding-bottom: 80px;
    @include tab {
      // padding-bottom: 50px;
    }
    .marquee-container{display:flex; overflow:hidden;height:200px;
    }
    .marquee-profile-left{
    position:relative; display:inline-block;
    padding:0;
    height:200px;
    animation: scrollleft 50s linear infinite;}

    .marquee-profile-right{
    position:relative; display:inline-block;
    padding:0;
    height:200px;
    animation: scrollright 50s linear infinite;}

    .marquee-second{animation-delay: 0s;}
    .img-profile{float:left;width:2000px; }

    @keyframes scrollleft{
    0% {left:0;}
    100% {left:-800px;}
    }

    @keyframes scrollright{
    0% {right:800px;}
    100% {right:0;}
    }

    @media screen and (max-width:767px){

      .marquee-container{overflow:hidden;height:140px;
      }
      .marquee-profile-left{
      position:relative; display:block;
      padding:0;
      height:140px;
      animation: scrollleft 50s linear infinite;}

      .marquee-profile-right{
      position:relative; display:block;
      padding:0;
      height:140px;
      animation: scrollright 50s linear infinite;}
    .img-profile{width:1500px;}

    }
  }// .p-top-marquee

  &-reasons{
    position: relative;
    overflow: hidden;
    padding: 80px 0 100px;

    @include tab {
      padding-bottom: pv(40);
    }

    @media screen and(max-width: 768px){
      padding: 20px 0;
    }

    h2{
      margin: 0 48px 40px 0;

      @include tab {
        margin: pv(25) 0 pv(30) auto;
      }
    }
    .l-container{
      &:after{
        display: block;
        clear:both;
        content: '';
      }
      &:before{
        position: absolute;
        top: 0;
        left: 15%;
        z-index: -1;
        display: block;
        width: 100%;
        height: 100%;
        background: $gray-ec;
        // content: '';
        content: none;

        @include tab {
          left: 0;
          height: calc(100% - #{pv(120)});
        }
      }

    }

    .l-new-container{
      @include tab {
        padding-right: 0!important;
        padding-left: 0!important;
      }
    }

    &-wrap{
      display: flex;
      flex-wrap: wrap;

      @include tab {
        width: 100%;
      }
    }
    &-single{
      display: flex;
      padding: 0 10px 20px;
      min-height: 300px;
      width: 50%;

      @include tab {
        padding: 0 0 10vw;
        width: 100%;

        &:nth-child(even){
          align-items: flex-end;
        }

        &:nth-child(2){
          .info{
            margin-top: -5vw;
          }
        }
      }

      @media screen and (max-width: 1100px){
        flex-direction: column;
      }

      img{
        width: 50%;
        height: 100%;

        object-fit: cover;
        @include tab {
          height: unset;
        }

        @media screen and (max-width: 1100px){
          width: 100%;
        }
      }

      .info{
        flex: 1;
        padding: 20px 5px 20px 20px;
        width: 50%;
        background: $blue;
        color: $white;

        @include tab {
          position: relative;
          margin-top: -10vw;
          padding: 9vw 5vw 5vw;
          width: 90vw;
        }

        @media screen and (max-width: 1100px){
          width: 100%;
        }

        h3{
          font-weight: 500;
          font-size: 19px;
          line-height: 1.5;
        }

        .num{
          margin-bottom: 20px;
          width: 60px;
          height: auto;

          @include tab {
            position: absolute;
            top: -7.5vw;
            width: 15vw;
          }
        }

      }
    }
  }// .p-top-reasons

  &-package{
    padding-top: 80px;
    padding-bottom: 80px;

     @include tab {
        padding-bottom: 50px;
      }
    .desc{
      padding: 20px 0;
      font-size: 20px;

      @include tab {
        position: relative;
        z-index: 1;
        margin-bottom: -40px;
        padding-bottom: 0;
      }
    }
    .wrapper{
      display: flex;
      justify-content: space-between;
      padding-top: 60px;

      @include tab {
        padding-top: 0;
      }

      .single{
        display: flex;
        flex-direction: column;
        padding: 0 20px 20px;
        width: 49%;
        @include tab {
          padding: 40px 0 0;
        }

        .img{
          margin-bottom: 16px;
          img{
            width: 100%;
          }
        }

        h3{
          margin-bottom: 16px;
          color: $blue;
          font-weight: bold;
        }

        p{
          flex: 1;
          margin-bottom: 16px;
          line-height: 1.8;
        }

        a{
          max-width: 100%;
        }
        .package-btn {
          margin: auto;
          max-width: 70%;
          text-align: center;
          @include tab {
            max-width: 100%;
          }
        }
      }

      .lesson-label {
        color: #2E6EAC;
        border: 1px solid #2E6EAC;
        width: fit-content;
        padding: 5px 40px;
        font-weight: bold;
      }

      @media screen and (max-width: 1080px){
        display: block;

        .single{
          margin-right: auto;
          margin-left: auto;
          max-width: 500px;
          width: 100%;
        }
      }
    }
  }// .p-top-package

  &-services{
    padding-top: 80px;
    padding-bottom: 80px;

     @include tab {
      padding-top: 50px;
        padding-bottom: 50px;
      }
    .desc{
      padding: 20px 0;
      font-size: 20px;

      @include tab {
        position: relative;
        z-index: 1;
        margin-bottom: -40px;
        padding-bottom: 0;
      }
    }
    .wrapper{
      display: flex;

      .single{
        display: flex;
        flex-direction: column;
        padding: 0 20px 20px;
        width: 33%;
        @include tab {
          padding: auto 0;
        }

        .img{
          margin-bottom: 16px;
          img{
            width: 100%;
          }
        }

        h3{
          margin-bottom: 16px;
          color: $blue;
          font-weight: bold;
        }

        p{
          flex: 1;
          margin-bottom: 16px;
          line-height: 1.8;
        }

        a{
          max-width: 100%;
        }
      }

      @media screen and (max-width: 1080px){
        display: block;

        .single{
          margin-right: auto;
          margin-left: auto;
          max-width: 500px;
          width: 100%;
        }
      }
    }
  }// .p-top-service

  &-studio{
    padding: 80px 0;
    background: #ececec;

@include tab {
  padding: 50px 0;
      }

    .desc{
      padding: 20px 0;
      font-size: 20px;

      &:before{
        display: block;
        clear: both;
        content: '';
      }
    }

    h2{
      @media screen and(max-width: 768px){
        margin-bottom: 32px;
      }
    }

    .img{
      margin-right: auto;
      margin-left: auto;
      max-width: 700px;
      img{
        width: 100%;
      }
    }

    .wrap{
      display: flex;
      justify-content: center;
      padding: 40px 0 0;

      // a{
      //   margin: 0 20px 20px;
      // }

      @media screen and (max-width: 480px){
        flex-direction: column;

        a{
          margin: 0 0 20px;
        }
      }
    }
  }// .p-top-studio

  &-voices{
    padding: 80px 0;
    @include tab {
      padding: 50px 0;
    }
  }
  &-price{
    padding-top: 100px;
    padding-bottom: 100px;

    @include tab {
      padding: pv(50) pv(20) pv(40);
    }

    h2{
      margin-bottom: 4rem;

      @include tab {
        margin-bottom: pv(16);
      }
    }

    p{
      font-size: 1.6rem;
      line-height: 2.4;

      @include tab {
        text-align: left!important;
        font-size: pv(16);
        line-height: pv(30);
      }
    }

  }// .p-to-price

  &-column{
    position: relative;
    overflow: hidden;
    padding-bottom: 100px;

    @include tab {
      padding: 0 0 pv(60)!important;
    }
    @include tab {
      >.d-flex{
        flex-direction: column;
      }
    }
    @include tab {
      .swiper-container{
        padding: 0 pv(25);
      }
      .swiper-wrapper,
      .swiper-slide{
        width: pv(325)!important;
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
        margin-bottom: 1rem;

        @include tab {
          margin-bottom: pv(10);
        }

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

      .info{

        p{
          margin-bottom: 2rem;
          height: 3em;
          color: $blue;
          font-size: 1.9rem;
          line-height: 1.6;

          @include tab {
            margin-bottom: pv(5);
            height: unset;
            font-size: pv(16);
            line-height: pv(30);
          }
        }

        span{
          color: #c6c6c6;
          font-size: 1.2rem;

          @include tab {
            font-size: pv(15);
          }
        }
      }
    }
  }// .p-top-reasons

  &-insta {
    padding-top: 60px;
    padding-bottom: 80px;

    @include tab {
      padding-top: 40px;
      padding-bottom: 50px;
    }
    .desc{
      padding: 20px 0;
      font-size: 20px;

      &:before{
        display: block;
        clear: both;
        content: '';
      }
    }
  h2{
      margin-bottom: 20px;

      @include tab {
        margin-bottom: 10px;
      }
    }
  }
  &-news{
    padding-top: 80px;
    padding-bottom: 80px;

    @include tab {
      padding: pv(50) pv(25) pv(40);
    }

    h2{
      margin-bottom: 5rem;

      @include tab {
        margin-bottom: pv(36);
      }
    }

    .c-news_single{
      display: block;
      margin-right: auto;
      margin-bottom: 2.6rem;
      margin-left: auto;
      padding-bottom: 2rem;
      max-width: 800px;
      border-bottom: 1px solid $gray-70;
      font-size: 1.8rem;

      @include tab {
        margin-bottom: pv(17);
        padding-bottom: pv(12);
      };

      .head{
        margin-bottom: 1rem;
        font-size: 1.3rem;

        @include tab {
          justify-content: space-between;

          .label-blue{
            padding: pv(8) pv(9);
            font-size: pv(14);
          }

          .label-dark{
            padding: pv(8) pv(9);
            font-size: pv(14);
          }
        }

        .time{
          font-size: 1.6rem;

        }
      }

      .title{
        font-size: 1.8rem;
        line-height: 1.6;

        @include tab {
          font-size: pv(14);
          line-height: pv(25);
        }
      }

      img{
        margin-top: .5rem;
        width: auto;
        height: 1em;
      }

    }// .c-news_single
    .safety{
      margin-top: 6rem;
      margin-right: auto;
      margin-left: auto;
      max-width: 440px;

      @include tab {
        margin-top: pv(30);
      }

      img{
        width: 100%;
      }
    }

  }// .p-top-news

  &-bowy{
    padding: 100px 0px 100px;
    background: url("../assets/images/common/bowy-bg.webp")no-repeat center/cover;

    @include tab {
      padding: pv(50) pv(20) pv(32);
    }
    @include tabH{
      .l-container{
        padding: 0 32px;
      }
    }
    @include tab{
      >.d-flex{
        display: block!important;

        [class*=col-]{
          max-width: 100%;
          width: 100%;

          img{
            display: block;
            margin: 0 auto 32px;
            max-width: 80%!important;
          }
        }
      }
    }
    @include tab {
      *{
        padding: 0!important;
      }
    }

    .l-container{
      padding-right: 120px!important;
      padding-left: 120px!important;

      @include tab {
        padding-right: 0px!important;
        padding-left: 0px!important;
      }
    }

    h2{
      margin-bottom: 60px;
      color: white!important;

      &:before{
        background: white!important;
      }
    }

    p{
      margin-bottom: 1.5em;
      line-height: 2;

      @include tab {
        font-weight: normal;
        font-size: pv(15);
        line-height: pv(23);
      }
    }
  }
}

.p-top-workshop-news{
    padding-top: 80px;
    padding-bottom: 80px;

    @include tab {
      padding: pv(50) pv(25) pv(40);
    }

    h2{
      margin-bottom: 5rem;

      @include tab {
        margin-bottom: pv(36);
      }
    }
}
.top-bnr {
  margin-bottom: 30px;
}
.p-top-beginner {
  background: blue url('~assets/images/about/beginner/about-pilates.webp') no-repeat center;
    background-size: cover;
    @include tab {
      background-position: 22%;
    }
    .banner-contents-box {
      padding: 110px 0;
      @include tab {
        padding: 60px 0;
      }
    }
}

.sec-banner{
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

</style>
