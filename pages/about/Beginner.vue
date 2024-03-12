<template>
  <div>
    <PageHeader
      title="初めての方"
      :img="headerImg"
    />
    <Breadcrumb :breadcrumbs="breadcrumbs" />

    <seciton class="p-concept">
      <div class="l-container">
        <div class="text text-left text-md-center">
          <h4 class="concept-text mb-0 pc">
            zen place、ここにいけば、上がる!<br>
            気分が上がるスタジオ、zen place<br>
            なんでもできる気持ちになる、<br class="sp">自分が好きになる、<br>
            前向きに生きようと思える、<br class="sp">挑戦したくなる<br>
          </h4>
          <h5 class="concept-text mb-0 sp">
            zen place、ここにいけば、上がる!<br>
            気分が上がるスタジオ、zen place<br>
            なんでもできる気持ちになる、<br class="sp">自分が好きになる、<br>
            前向きに生きようと思える、<br class="sp">挑戦したくなる<br>
          </h5>
        </div>
      </div>
    </seciton>

    <section class="p-top-banner">
      <div class="l-container">
        <div class="text-center banner-contents-box">
          <div class="col-5 col-md-3 mx-auto">
            <img
              loading="lazy"
              src="~assets/images/about/beginner/since2004-text.svg"
              alt="top banner"
              class="w-100"
            >
          </div>
        </div>
      </div>
    </section>

    <section class="p-leadtext">
      <div class="l-container--md">
        <div class="text-box">
          <h3 class="text-left text-md-center font-weight-bold text-primary">
            ピラティス&ヨガなら<br class="sp">zen place
          </h3>
          <p class="lead-text pt-4">
            zen placeはピラティス・ヨガ界のリーディングカンパニーとしてBASIピラティス、BalancedBody®YogaWorks®などピラティス・ヨガの世界Top企業・団体と提携して約20年、世界レベルのピラティス・ヨガを提供。<br class="pc">最先端テクノロジーやサイエンス、研究結果をも取り入れた本格的なピラティス・ヨガスタジオです。
          </p>
          <!-- <p class="strong-text font-weight-bold">
            私たちと一緒に、<br class="sp">
            Well-beingの実現とその先へ。
          </p> -->
        </div>
        <div class="col-11 mx-auto px-0 pt-5 text-center">
          <nuxt-link
            to="#history"
            class="btn-blue_border"
          >
            zen placeについて
          </nuxt-link>
        </div>
      </div>
    </section>

    <section class="p-video bg-light-gray">
      <div class="l-container">
        <!-- 動画 -->
        <div class="ytb-content">
          <iframe
            loading="lazy"
            class="ytb-iframe"
            src="https://www.youtube.com/embed/54mf3eAZtHc"
            title="zen placeのスタジオってどんなスタジオ？スタジオだけに目を向けて紹介！"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div class="mx-auto text-center pt-5">
          <a
            class="btn-red-studio btn-red font-weight-bold"
            href="https://www.zenplace.co.jp/welcome/schedule.php"
            style="width: 300px; font-size: 1.8rem"
          >
            体験レッスンを予約する
          </a>
        </div>
      </div>
    </section>

    <section class="p-studio-reasons">
      <div class="l-container">
        <div class="title-box text-center">
          <h4 class="text-secondary font-weight-bold mb-0">
            Our Strengths
          </h4>
          <h3
            class="font-weight-bold"
          >
            zen placeのピラティス・<br class="sp">ヨガの3つの特徴
          </h3>
        </div>
        <ul class="row justify-content-between reason-content-box mb-0 pt-5">
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
      </div>
    </section>

    <section class="p-pilates-banner">
      <div class="l-container--sm">
        <div class="text-center banner-contents-box">
          <h3 class="text-white">
            zen placeのピラティス
          </h3>
          <p class="text-white text-left pt-5">
            ピラティスの原点に焦点を当て、背骨を軸とした、しなやかに伸び上がった美しい身体を作ります。<br class="pc">本物のピラティスで肩は落ち、胸は開き、首は長く、表情も穏やかに。心は楽観的に、前向きに。
          </p>
          <div class="pt-5 pt-md-6 text-center">
            <nuxt-link
              to="/pilates"
              class="btn-transparent_border"
            >
              zen placeのピラティスについて
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <section class="p-pilates-lesson">
      <div class="l-container">
        <div class="title-box text-center">
          <h4 class="text-secondary font-weight-bold mb-0">
            Pilates Lessons
          </h4>
          <h3
            class="font-weight-bold"
          >
            ピラティスレッスン
          </h3>
          <!-- <p class="col-md-8 mx-auto">
            zen placeはピラティス・ヨガ界の
            リーディングカンパニーとして
            BASIピラティス、BalancedBody®
            YogaWorks®など
            ピラティス・ヨガの世界Top企業・団体と提携して
            約20年、世界レベルのピラティス・ヨガを提供。
            最先端テクノロジーやサイエンス、
            研究結果をも取り入れた
            本格的なピラティス・ヨガスタジオです。
          </p> -->
        </div>
        <div class="content-box row pt-5">
          <div class="content-item col-12 col-md-4">
            <nuxt-link to="/classes/package32/">
              <img
                loading="lazy"
                src="~assets/images/pilates/about/32pk.webp"
                alt="マットグループレッスン"
                class="w-100 pb-3"
              >
              <h5 class="py-2 text-primary font-weight-bold">
                32回パッケージ
              </h5>
              <p>
                ピラティスを始めたいけどどのクラスを受けていいかわからない、やるからには効果を出したい、そんな方に。グループレッスン、プライベートレッスンにF-cabまたは背骨ムーブメント解析が付いたお得なプランです。
              </p>
            </nuxt-link>
          </div>
          <div class="content-item col-12 col-md-4 pt-4 pt-md-0">
            <nuxt-link to="/pilates/aboutus#group-lesson">
              <img
                loading="lazy"
                src="~assets/images/pilates/about/p-group-lesson.webp"
                alt="マシンプライベートレッスン"
                class="w-100 pb-3"
              >
              <h5 class="py-2 text-primary font-weight-bold">
                グループレッスン
              </h5>
              <p>
                正統派で本物のzen placeピラティス。 約１時間、背骨と体幹に集中。呼吸をしながら背骨を意識することで動きにリズムができ、身体も心もフローしていく。共にエクササイズを楽しむ仲間で、プログラムの一体感と高揚感が味わえます。
              </p>
            </nuxt-link>
          </div>
          <div class="content-item col-12 col-md-4 pt-4 pt-md-0">
            <nuxt-link to="/pilates/aboutus#private-lesson">
              <img
                loading="lazy"
                src="~assets/images/pilates/about/p-private-lesson.webp"
                alt="リフォーマーグループレッスン"
                class="w-100 pb-3"
              >
              <h5 class="py-2 text-primary font-weight-bold">
                プライベートレッスン
              </h5>
              <p>
                「正しい動きがわからない」初めての方にこそおすすめ。マットやピラティス専用マシンを使い、個々の身体の状態や目的に合わせたレッスンの中で、動きの癖や修正を丁寧に指摘していくので、理解を深め、上達を早めることができます。
              </p>
            </nuxt-link>
          </div>
        </div>
        <div class="mx-auto text-center pt-6">
          <a
            class="btn-red-studio btn-red font-weight-bold"
            href="https://www.zenplace.co.jp/welcome/schedule.php"
            style="width: 300px; font-size: 1.8rem"
          >
            体験レッスンを予約する
          </a>
        </div>
      </div>
    </section>

    <section class="p-yoga-banner">
      <div class="l-container--sm">
        <div class="text-center banner-contents-box">
          <h3 class="text-white">
            zen placeのヨガ
          </h3>
          <p class="text-white text-left pt-5">
            ヨガの知識とボディワークを学ぶことでウェルビーイングになるという「ヨガ本来の目的」をしっかりと伝えます。ウェルビーイングな人生は自分だけではなく家族や友人、かけがえのない人を幸せにします。一生付き合えるヨガ人生の幕開けを。
          </p>
          <div class="pt-5 pt-md-6 text-center">
            <nuxt-link
              to="/yoga"
              class="btn-transparent_border"
            >
              zen placeのヨガについて
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <section class="p-yoga-lesson">
      <div class="l-container">
        <div class="title-box text-center">
          <h4 class="text-secondary font-weight-bold mb-0">
            Yoga Lessons
          </h4>
          <h3
            class="font-weight-bold"
          >
            ヨガレッスン
          </h3>
          <!-- <p class="col-md-8 mx-auto">
            必要な知識とボディワークを学び、ウェルビーイングな状態になるという<br class="pc">
            「ヨガ本来の目的」をしっかりと伝えたい。ウェルビーイングな人生は、<br class="pc">
            自分だけではなく、家族や友人、かけがえのない人を幸せにします。
          </p> -->
        </div>
        <div class="content-box row pt-5">
          <div class="content-item col-12 col-md-4">
            <nuxt-link
              to="/classes/package69"
            >
              <img
                loading="lazy"
                src="~assets/images/yoga/features/69pk.webp"
                alt="マットグループレッスン"
                class="w-100 pb-3"
              >
              <h5 class="py-2 text-primary font-weight-bold">
                Yoga for Well-being<br>
                ３ヶ月パッケージ
              </h5>
              <p>
                ヨガ初心者、経験はあるけど長続きしなかった方におすすめ。3ヶ月で人生を変える、Yoga for Well-being 3ヶ月パッケージ。ヨガを楽しく継続し本当の意味でのウェルビーイングを実現するために生まれたプランです。
              </p>
            </nuxt-link>
          </div>
          <div class="content-item col-12 col-md-4 pt-4 pt-md-0">
            <nuxt-link
              to="/yoga/#group-lesson"
            >
              <img
                loading="lazy"
                src="~assets/images/yoga/features/group-lesson.webp"
                alt="マシンプライベートレッスン"
                class="w-100 pb-3"
              >
              <h5 class="py-2 text-primary font-weight-bold">
                グループレッスン
              </h5>
              <p>
                全ての存在が本質的に善であるということに気づき「本来のありのままの自分」に戻るためのヨガクラスです。他者との一体性の実現を目指します。
              </p>
            </nuxt-link>
          </div>
          <div class="content-item col-12 col-md-4 pt-4 pt-md-0">
            <nuxt-link
              to="/yoga/#private-lesson"
            >
              <img
                loading="lazy"
                src="~assets/images/yoga/features/private-lesson.webp"
                alt="プライベートレッスン"
                class="w-100 pb-3"
              >
              <h5 class="py-2 text-primary font-weight-bold">
                プライベートレッスン
              </h5>
              <p>
                ストレスを軽減するための特に効果的な方法と証明されているヨガセラピーとして「心の変化に気づき不要なものを取り除く自分だけのヨガ」を提供いたします。
              </p>
            </nuxt-link>
          </div>
        </div>
        <div class="mx-auto text-center pt-5">
          <a
            class="btn-red-studio btn-red font-weight-bold"
            href="https://www.zenplace.co.jp/welcome/schedule.php"
            style="width: 300px; font-size: 1.8rem"
          >
            体験レッスンを予約する
          </a>
        </div>
      </div>
    </section>

    <section class="p-support bg-light-gray">
      <div class="l-container">
        <div class="title-box text-center">
          <h4 class="text-secondary font-weight-bold mb-0">
            Our Reasons
          </h4>
          <h3
            class="font-weight-bold"
          >
            zen placeが<br class="sp">選ばれる理由
          </h3>
        </div>
        <div class="content-box row pt-5">
          <div class="content-item col-12 col-md-4 pt-4 pt-md-0">
            <nuxt-link to="/info/movementai">
              <img
                loading="lazy"
                src="~assets/images/about/movement.webp"
                alt="マットグループレッスン"
                class="w-100 pb-3"
              >
              <h5 class="pb-2 gothic font-weight-bold">
                01
              </h5>
              <h5 class="d-block pb-2 gothic font-weight-bold">
                背骨ムーブメント解析でサポート
              </h5>
              <p>
                これまで定性的でしか評価できなかったピラティス・ヨガの動きをAI解析で正確に、誰がみてもわかるように可視化・数値化することで、
                より質や正確性を重視したムーブメントの実践が可能になり、ピラティス・ヨガの効果を
                今まで以上に早く、最大化できると考えました。
              </p>
            </nuxt-link>
          </div>
          <div class="content-item col-12 col-md-4 pt-4 pt-md-0">
            <nuxt-link to="/online">
              <img
                loading="lazy"
                src="~assets/images/about/online.webp"
                alt="マシンプライベートレッスン"
                class="w-100 pb-3"
              >
              <h5 class="pb-2 gothic font-weight-bold">
                02
              </h5>
              <h5 class="pb-2 gothic font-weight-bold">
                ライブレッスンや振替レッスンも充実
              </h5>
              <p>
                月間10,000以上、全国のスタジオのグループレッスンをLive中継可能。参加時間は早朝6時〜22時まで選び放題！双方向のLive Streamingで見てもらえます。
              </p>
            </nuxt-link>
          </div>
          <div class="content-item col-12 col-md-4 pt-4 pt-md-0">
            <nuxt-link to="/studios">
              <img
                loading="lazy"
                src="~assets/images/about/studio.webp"
                alt="リフォーマーグループレッスン"
                class="w-100 pb-3"
              >
              <h5 class="pb-2 gothic font-weight-bold">
                03
              </h5>
              <h5 class="pb-2 gothic font-weight-bold">
                どこでも手ぶらで受講できる
              </h5>
              <p>
                国内最大数！全国110スタジオ以上・ピラティスマシン500台以上＆オンラインレッスン週2,000本以上で正統派で本物のピラティスレッスン。全店駅チカ・豊富なレッスン数で継続できる環境です。
              </p>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <TrialFlowPilates class="bg-light-gray pt-md-5 px-4 bg-white" />

    <section class="p-voice bg-light-gray">
      <div class="l-container">
        <div class="title-box text-center">
          <h4 class="text-secondary font-weight-bold mb-0">
            Voice
          </h4>
          <h3
            class="font-weight-bold"
          >
            ご利用者の声
          </h3>
        </div>
        <VoiceList class="pt-5" />
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

    <section
      id="history"
      class="p-history"
    >
      <div class="l-container">
        <div class="title-box text-center">
          <h4 class="text-secondary font-weight-bold mb-0">
            About zen place
          </h4>
          <h3
            class="font-weight-bold"
          >
            zen placeについて
          </h3>
        </div>
        <div class="pt-5">
          <div class="img px-0">
            <img
              loading="lazy"
              src="~assets/images/about/beginner/about-zenplace.webp"
              alt="zen placeの歴史"
              class="w-100"
            >
          </div>
          <div class="pt-4 pt-md-5">
            <p>
              zen placeは、世界の教育団体や世界で活躍する指導者から直接学ぶなどのグローバルな視点や、業界初のAIによる『背骨ムーブメント解析』を開発など、最先端テクノロジーを導入し、挑戦を重ねています。<br>
              情熱を持ってピラティス・ヨガの本質に向き合い続けた私たちだからこそ、共有できる理論と気付き、そして喜びがあります。<br>
              背骨周りの「微細なインナーマッスルに意識を向ける＝背骨を一骨ずつ丁寧に動かす」という、細かい筋肉や神経・細胞レベルで、動きに集中することにより『深い瞑想効果・フロー状態』へ導き、いままでの過度な不安や今までの思考の癖を取り払い、自分らしく自由で、明るくオープンマインドな人を増やしていきたいと考えています。<br>
              自然と身体がしなやかで伸びあがっていく感覚、これまでのピラティス・ヨガとの本質的なこと、続けることによる心と身体の繋がりを感じてください。<br>
            </p>
            <h3 class="text-center pt-5 pt-md-6 pc text-primary">
              人生観が変わる、人生を変える<br>zen placeのピラティス・ヨガで<br>私たちと一緒に、Well-beingの実現とその先へ。
            </h3>
            <h5 class="text-center pt-5 pt-md-6 sp text-primary">
              人生観が変わる、人生を変える<br>zen placeのピラティス・ヨガで<br>私たちと一緒に、Well-beingの<br>実現とその先へ。
            </h5>
            <div class="pt-5 pt-md-6 text-center">
              <nuxt-link
                to="/about/history"
                class="btn-blue_border"
              >
                zen placeの歴史
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="p-top-column bg-light-gray">
      <div class="l-container">
        <div class="title-box text-center">
          <h4 class="text-secondary font-weight-bold mb-0">
            Column
          </h4>
          <h3
            class="font-weight-bold"
          >
            ピラティスコラム
          </h3>
        </div>
        <span class="cf" />
        <swiper
          :options="swiperOpt2"
          class="pt-5 px-0"
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
        <div class="text-center pt-6">
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
    <CtaLower />
    <KnowmoreZenplace />
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue';
import CtaLower from '~/components/CtaLower.vue';
import VoiceList from '~/components/VoiceList.vue';
import KnowmoreZenplace from '~/components/KnowmoreZenplace.vue';
import TrialFlowPilates from '~/components/TrialFlowPilates.vue';

const headerImg = require('@/assets/images/about/about-header.jpg');

export default {
  layout: 'new',
  head() {
    return {
      title: 'zen place初めての方',
      meta: [
        { charset: 'utf-8' },
        { hid: 'og:title', property: 'og:title', content: 'zen place初めての方' },
        { hid: 'description', name: 'description', content: 'zen placeは、世界最先端を学べるピラティス・ヨガスタジオ。世界最先端のメソッドを常に凝縮・アップデートし、レッスンを受けた方が自分の心・身体の変化に気づいてココロとカラダが満たされ、豊かに生きる人が増える場所を提供しています。' },
        { hid: 'og:description', property: 'og:description', content: 'zen placeは、世界最先端を学べるピラティス・ヨガスタジオ。世界最先端のメソッドを常に凝縮・アップデートし、レッスンを受けた方が自分の心・身体の変化に気づいてココロとカラダが満たされ、豊かに生きる人が増える場所を提供しています。' },
        { hid: 'og:image', property: 'og:image', content: 'https://www.zenplace.co.jp/og-about.jpg' },
        { hid: 'keywords', name: 'keywords', content: '初心者, 初めての方, よくある質問' },
      ],
      link: [
        { rel: 'canonical', href: 'https://www.zenplace.co.jp/about/beginner' },
      ],
    };
  },
  components: {
    PageHeader,
    CtaLower,
    VoiceList,
    KnowmoreZenplace,
    TrialFlowPilates,
  },
  data() {
    return {
      headerImg,
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
            name: 'zen placeとは',
            path: '/about',
          },
          {
            name: '初めての方',
          },
        ],
      };
    },
  },
};
</script>

<style lang="scss">
@import '~assets/scss/newvariables';
@import '~assets/scss/variables';

.p-concept {
  display: block;
  padding-top: 40px;
  padding-bottom: 80px;
@include tab {
  padding-top: 10px;
  padding-bottom: 50px;
}
  @include tab {
    h5 {
      font-size: 1.8rem;
    }
  }
   .concept-text {
    line-height: 2;
   }
}

.p-top-banner {
    background: url('~assets/images/about/beginner/since2004.webp') no-repeat center;
    background-size: cover;
    @include tab {
      background-position:65%;
    }
    .banner-contents-box {
      padding: 210px 0;
      @include tab {
        padding: 60px 0;
      }
    }
}
.p-pilates-banner {
  background: url('~assets/images/about/beginner/about-pilates.webp') no-repeat center;
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
.p-yoga-banner {
    background: url('~assets/images/about/beginner/about-yoga.webp') no-repeat center;
    background-size: cover;
    @include tab {
      background-position: 14%;
    }
    .banner-contents-box {
      padding: 110px 0;
      @include tab {
        padding: 60px 0;
      }
    }
}
.p-leadtext {
  padding-top: 80px;
  padding-bottom: 80px;
@include tab {
  padding-top: 50px;
  padding-bottom: 50px;
}
  @include tab {
    h3 {
      font-size: 2.8rem;
    }
  }
  // .lead-text {
  //   font-size: $font-size-lg;
  // }
  .strong-text {
    // font-size: $font-size-lg;
    color: $zenblue;
  }
}
.p-video {
  padding-top: 70px;
  padding-bottom: 80px;
  @include tab {
  padding-top: 50px;
  padding-bottom: 50px;
}
}

.p-studio-reasons {
  padding-top: 80px;
  padding-bottom: 80px;

  @include tab{
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .sec-title {
    line-height: 1.5;
    ._lead {
      display: inline;
      font-weight: 600;
      font-size: 3rem;

      @include tab {
        font-size: 2.7rem;
      }
      span {
        display: inline;
      }
      ._text-red {
        color: #E93742;
        font-size: 3rem;

        @include tab {
          font-size: 2.7rem;
        }
      }
    }
    strong {
        font-size: 3rem;
        font-weight: 600;
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
            font-size: 2.7rem;
            font-weight: 600;
            color: #E93742;
            line-height: 1.2;
            font-family: $mincho!important;
          }
          }
          .reason-title {
            margin-top: 20px;
            font-size: 2rem;
            font-weight: 600;
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
        font-size: 1.7rem;

        @include tab {
          font-size: 1.7rem;
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

.p-pilates-lesson {
  padding-top: 80px;
  padding-bottom: 80px;
  @include tab {
  padding-top: 50px;
  padding-bottom: 50px;
}
}

.p-yoga-lesson {
  padding-top: 80px;
  padding-bottom: 80px;
  @include tab {
  padding-top: 50px;
  padding-bottom: 50px;
}
}

.p-support {
  padding-top: 80px;
  padding-bottom: 80px;
  @include tab {
  padding-top: 50px;
  padding-bottom: 50px;
}
}

.p-voice {
  padding-top: 80px;
  padding-bottom: 80px;
  @include tab {
  padding-top: 50px;
  padding-bottom: 50px;
}
}

.p-history {
  padding-top: 80px;
  padding-bottom: 80px;
  @include tab {
  padding-top: 50px;
  padding-bottom: 50px;
}

}
.p-top-column {
    position: relative;
    overflow: hidden;
    padding-top: 80px;
    padding-bottom: 80px;

    @include sp{
      padding: pv(40) 0 pv(60)!important;
    }
    @include sp{
      >.d-flex{
        flex-direction: column;
      }
    }
    @include sp{
      .swiper-container{
        padding: 0 pv(25);
      }
      .swiper-wrapper,
      .swiper-slide{
        width: pv(325)!important;
      }

    }
    @include sp{
      .btn-blue_border{
        width: pv(325);
      }
    }

    h2{
      margin: 50px 48px 40px;

      @include sp{
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

        @include sp{
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

            @include sp{
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
          font-size: 1.8rem;
          line-height: 1.6;

          @include sp{
            margin-bottom: pv(5);
            height: unset;
            font-size: pv(16);
            line-height: pv(30);
          }
        }

        span{
          font-size: 1.2rem;

          @include sp{
            font-size: pv(15);
          }
        }
      }
    }
  }
</style>
