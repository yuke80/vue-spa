<template>
  <div class="p-pilates-about">
    <PageHeader
      title="ピラティスとは"
      :img="headerImg"
    />
    <Breadcrumb :breadcrumbs="breadcrumbs" />

    <section class="p-pilates-about-anchor">
      <div class="wrap">
        <nuxt-link
          v-scroll-to="'#anchor1'"
          to
          class="btn-white text-center btn-with-arrow"
        >
          ピラティスとは？<br>基本知識
        </nuxt-link>
        <nuxt-link
          v-scroll-to="'#anchor2'"
          to
          class="btn-white btn-with-arrow"
        >
          ピラティスの歴史
        </nuxt-link>
        <nuxt-link
          v-scroll-to="'#anchor3'"
          to
          class="btn-white btn-with-arrow"
        >
          日本におけるピラティス
        </nuxt-link>
        <nuxt-link
          v-scroll-to="'#anchor4'"
          to
          class="btn-white btn-with-arrow"
        >
          ピラティスの効果
        </nuxt-link>
        <nuxt-link
          v-scroll-to="'#anchor5'"
          to
          class="btn-white btn-with-arrow"
        >
          ピラティスの種類<br>（マシン・マット）
        </nuxt-link>
        <a
          href="/welcome/schedule.php"
          class="d-md-none btn-white btn-with-arrow"
        >
          体験レッスン予約
        </a>
      </div>
    </section>
    <div
      class="accordion sticky-top"
      role="tablist"
    >
      <b-card no-body>
        <span
          v-b-toggle.accordion-1
          class="px-3 text-right"
          role="tab"
          block
        >
          <span class="filter-icon"><span /><span /><span /></span></span>
        <b-collapse
          id="accordion-1"
          accordion="my-accordion"
          role="tabpanel"
          class="mt-3"
        >
          <b-card-body v-b-toggle.accordion-1>
            <b-card-text v-html="html" />
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
    <section class="p-pilates-about-intro pb-5">
      <div class="l-new-container">
        <p class="text-left text-md-center t-blue p-intro">
          <strong>ピラティスの起源や効果、そして<br class="pc">zen
            placeが提供するピラティスをご紹介します。</strong>
        </p>
      </div>
    </section>

    <section class="p-pilates-about-basics bg-white">
      <span
        class="text-left pl-4 sticky-h2 sticky-top"
      >1. ピラティスの基本知識</span>
      <h2
        id="anchor1"
        class="c-header-border-bottom"
      >
        <span class="sub-ttl">ピラティスとは</span>
        ピラティスとは？<br>基本知識
      </h2>

      <div class="l-new-container">
        <div class="content">
          <h3>
            <span class="sub-ttl">ピラティスとは？基本知識</span>
            1. 心、身体、精神を調和させ身体の機能を調整するメソッド
          </h3>
          <p>
            ピラティスとは、1883年にドイツで生まれたJoseph Hubertus
            Pilates（ジョセフ・ハベルタス・ピラティス）氏によって考案されたエクササイズです。<br><br>
            <a
              href="https://pilatesmethodalliance.org/about-pilates/"
              class="d-inline-block"
              target="_blank"
            >ピラティス・メソッド・アライアンス</a>によると、ピラティスとは、「a method of exercise and physical
            movement designed to stretch, strengthen, and balance the
            body.」<span class="ref-link">
              (<a
                href="https://pilatesmethodalliance.org/about-pilates/"
                target="_blank"
              >1</a>)</span>、つまり、身体の柔軟性を高め、強化し、バランスを整えるためのメソッドです。<br>
            <strong>心と身体、そして精神を調和させながら鍛えていく</strong>ことで、筋肉や関節の柔軟性を向上させ、軸を伸長し、バランス力やコントロール力を高め、安定した強い身体を作り、活力を回復させ、ストレスを解消し、疲労と慢性の痛みを減少させるなど、さまざまな効果が期待できます。
            <br><br>
            呼吸と組み合わせられたエクササイズのパターンを実践することで、アスリートのトレーニングやリハビリに効果があることが、さまざまな研究により証明されています。
          </p>

          <div class="ref-div">
            <span><a
              href="https://pilatesmethodalliance.org/about-pilates/"
              target="_blank"
            >※1）PMA / The Pilates Method / What is Pilates? / 2022.3.22</a>
            </span>
          </div>
        </div>
        <div class="img">
          <img
            src="~assets/images/pilates/about/about-02.jpg"
            loading="lazy"
            class="img-fluid"
            alt="ピラティスとは心、身体、精神を調和させ身体の機能を調整するメソッド"
          >
        </div>
      </div>
      <div class="l-new-container">
        <div class="content">
          <h3>
            <span class="sub-ttl">ピラティスとは？基本知識</span>
            2. ピラティス氏自身の病気の克服のために開発されたエクササイズ
          </h3>
          <p>
            ピラティスは、考案者であるピラティス氏自身が様々な病気を持病としてもっていたことが開発のきっかけとなりました。病弱な身体を克服するために<strong>様々なスポーツや治療法を研究し、それらの組み合わせたものがピラティスの原型</strong>だと言われています。<br><br>
            ピラティス氏が学んだ方法論の中には、<strong>ヨガもありました</strong>。1800年後半、ヨガを含む東洋の考え方がヨーロッパにわたり、ブームとなったのです。（ニューソートムーブメント）
            <br>
            彼は、生活豊かにするためにこころを制御する方法論であるヨガの要素を、メソッドの中に取り入れました。<br>
            そのため、ピラティスは、「ハタヨガ」（身体を使ってポーズをとりながら行うヨガの種類）の一種ということができると、私たちは考えます。
          </p>

          <nuxt-link
            to="#anchor2"
            class="btn-blue_border"
          >
            ピラティスの歴史について
          </nuxt-link>
        </div>
        <div class="img">
          <img
            src="~assets/images/pilates/about/about-01.jpg"
            loading="lazy"
            class="img-fluid"
            alt="ピラティス氏自身の病気の克服のために開発されたエクササイズ"
          >
        </div>
      </div>
      <div class="l-new-container">
        <div class="content">
          <h3>
            <span class="sub-ttl">ピラティスとは？基本知識</span>
            3. ピラティスと他のトレーニングの違い
          </h3>
          <p>
            「<strong>ピラティスとヨガの違いは？</strong>」という質問をよく受けますが、その最大の違いは「動きの質」だと、私たちは考えます。<br><br>
            ヨガでは、可動域を広げるために、可能な限り大きく動かすことがありますが、ピラティスではそのような動きは行いません。ピラティスでは、筋肉や関節の可動域よりも、動きの質を重視します。<strong>正しく身体を動かせる範囲の中で動きの質を上げていくことが目的だからです。</strong><br><br>
            アメリカに本社を置くバランスド・ボディ社によると、ピラティスとは「Mind-body
            exercise」<span class="ref-link">
              (<a
                href="https://www.pilates.com/pilates"
                target="_blank"
              >2</a>)</span>、つまり、<strong>ただ身体を鍛えるのではなく、「心と身体のエクササイズ」</strong>です。<strong>自分の身体に意識を向け、深く集中しながら心と身体の状態を観察し、常に心身との対話をしながら動いていくことが、このメソッドの本質</strong>といえるでしょう。<br>
            ピラティスとは、ムーブメントの回数や可動域の大きさよりも、意識と集中、そして動きの質に重点を置いているため、<strong>誰でも安全に、簡単に、身体の柔軟性や関節の可動域の制限なく、初心者でも安心して取り組めるメソッド。</strong><br>
            これが、ヨガや筋トレなどのトレーニングや、整体、マッサージとの<u>大きな違い</u>です。
          </p>

          <div class="ref-div">
            <span><a
              href="https://www.pilates.com/pilates"
              target="_blank"
            >※2）Balanced Body / About pilates / 2022.3.24
            </a></span>
          </div>
        </div>
        <div class="img">
          <img
            src="~assets/images/pilates/about/about-03.jpg"
            loading="lazy"
            class="img-fluid"
            alt="ピラティスと他のトレーニングの違い"
          >
        </div>
      </div>
      <div class="l-new-container">
        <div class="content">
          <h3>
            <span class="sub-ttl">ピラティスとは？基本知識</span>
            4. ピラティス・メソッド＝「コントロロジー」
          </h3>
          <p>
            ジョセフ・ピラティス氏の代表的な著書を翻訳してまとめた『コントロロジー　ピラティス・メソッドの原点』<span
              class="ref-link"
            >
              (※3)</span>では、ピラティス氏は繰り返し「<strong>体と心のバランス</strong>」の大切さについて述べています。<br>
            彼は、「体と心を自分の意志でコントロールする能力を、同時に同等に発達させることが最優先すべき自然の法則」と説いており、そのための方法論を、「<strong>コントロロジー</strong>」と命名しました。<br>
            <br>
            心、身体、精神を完全に調和させ、心（頭、脳）で筋肉をコントロールしようとすることでふだん眠っている何千という筋肉細胞と脳細胞を刺激し、脳の新しい領域を活性化させ、頭の機能を高めることができると、彼は述べています。<br>
            <br>
            それが、今のピラティスの原型となった考え方なのです。<br>
            <strong>ピラティスとは、ただ身体を鍛えるためのエクササイズではなく脳の機能を押し上げ、免疫系やホルモン系を含む身体の機能を調整し、心をポジティブな状態に導くことで、ライフスタイルまでも変えるのです。</strong>
          </p>
          <nuxt-link
            to="/pilates/knowmore/spanish-flu"
            class="btn-blue_border mb-5"
          >
            ピラティスと免疫力の関係
          </nuxt-link>
          <div class="ref-div">
            <span>※3）ジョセフ・ヒューベルトゥス・ピラティス著・川名昌代訳『CONTROLOGYコントロロジー　ピラティス・メソッドの原点』有限会社万来舎・2009年</span>
          </div>
        </div>
        <div class="img">
          <img
            src="~assets/images/pilates/about/about-04.jpg"
            loading="lazy"
            class="img-fluid"
            alt="ピラティス・メソッド＝「コントロロジー」"
          >
        </div>
      </div>
      <div class="l-new-container">
        <div class="content">
          <h3>
            <span class="sub-ttl">ピラティスとは？基本知識</span>
            5. ピラティスがなぜ、こころの状態をよくするのか？
          </h3>
          <p>
            ピラティスをすると、「活力が湧く」、「前向きな気持ちになる」、「挑戦をしたくなる」、「人への感謝の気持ちが湧く」、「ありのままをみられるようになる」等、心への様々ポジティブな影響が生まれますが、それは何故でしょうか？<br>
            その理由は、<strong>ピラティスの最大の特徴である「身体の深部、細部に意識を集中させ、正しく動かす」</strong>という方法論にあります。<br><br>
            人は、新しい何かに気付いたり、閃いたりしたときに、脳活性化します。（ドイツの心理学者、カール・ビューラー氏が提唱する「アハ体験」という概念。）
            <br>
            ピラティスのムーブメントの中で、自身の内部への気づきや、「こんなふうに身体が動くんだ！」という驚きが生まれると、脳に新しいシナプスが繋がり、脳の機能がコンディショニングされ、不安や恐怖などを司る脳の部位の過剰な反応を抑制します。
            <br>
            そのため、自然と前向きでポジティブな心になれるのです。 <br>
            <br>
            また、ピラティスの「ハンドレッド」や「スイミング」に代表されるような、呼吸と共にリズミカルに動くムーブメントでは、「幸せホルモン」と呼ばれるセロトニンの分泌を脳内で促す効果があります。セロトニンは、精神を安定させる働きを持つほか、良質な睡眠へと身体を誘導するメラトニンというホルモンの原料ともなるため、心の健康を保つのに欠かせないホルモンです。
            <br>
            <br>
            ピラティスで行う胸式呼吸もまた、全身を活動的にする交感神経を刺激する呼吸法です。呼吸とともに、神経系が多く張り巡らさられる背骨周辺を微細に動かしていくことで、背骨のバランスが整い、姿勢が改善し、神経の働きが促され、自律神経バランスが整います。<br>
            これらの要素により、<strong>ピラティスは心を活性化させ、精神力を高めるのです。</strong>
          </p>
        </div>
        <div class="img">
          <img
            src="~assets/images/pilates/about/about-05.jpg"
            loading="lazy"
            class="img-fluid"
            alt="ピラティスがなぜ、こころの状態をよくするのか？"
          >
          <img
            src="~assets/images/pilates/about/about-24.jpg"
            loading="lazy"
            class="img-fluid pc mt-4"
            alt="ピラティスの「ハンドレッド」"
          >
        </div>
      </div>
      <div class="l-new-container">
        <div class="content">
          <h3>
            <span class="sub-ttl">ピラティスとは？基本知識</span>
            6. zen place ピラティスとは
          </h3>
          <p>
            zen
            placeのピラティスとは、「動きの質」を重視し、細かな動きやポジションに意識を向けることで、全身の神経と脳を結びつけ、刺激することで、脳にかかる負荷を分散させ、豊かな心と身体、ライフスタイルを作っていると私たちは考えます。<br>
            ピラティスのムーブメントを通して、心身の司令塔である「脳」の機能を正常化していくことで、身体本来の機能を取り戻せるのです。それは腰痛だけ、ストレスだけ、という「部分」ではなく、心と身体を一体として改善していきます。<br>
            <br>
            繰り返しになりますが、ピラティスは単なるエクササイズではありません。<br>
            それは、心と身体、精神のコントロール力を高め、安定した強い心身を作り、豊かでポジティブなマインドを育てる、ライフスタイルそのものだと、私たちは考えます。
          </p>

          <h4 class="mt-5 mb-0 pb-2">
            ピュアピラティス
          </h4>
          <p>
            私たちはピラティスの伝統や歴史に敬意を示しながら本質を学んできました。同時に新しいサイエンスをとりこむべく、さまざまなフィットネス、ボディワーク、マインドフルネス、呼吸法などを取り入れてきました。しかし、そういう中で、ピラティスの本当にピラティスらしい感動のエッセンスがうすれてしまったことに気づきました。私たちは、ここにもう一度原点回帰として、純粋なるピラティス「<strong>Pure Pilates（ピュアピラティス）</strong>」を提供することとしました。
          </p>
          <nuxt-link
            to="/pilates"
            class="btn-blue_border"
          >
            zen place ピラティス
          </nuxt-link>
        </div>
        <div class="img">
          <img
            src="~assets/images/pilates/about/about-06.jpg"
            loading="lazy"
            alt="zen placeのピラティス"
            class="img-fluid"
          >
        </div>
      </div>
    </section>
    <!-- /.p-pilates-about-benefits -->
    <CtaLower />
    <section class="p-pilates-history">
      <section class="p-pilates-history-background pb-5">
        <span
          class="text-left pl-4 sticky-h2 sticky-top"
        >2. ピラティスの歴史</span>
        <h2
          id="anchor2"
          class="c-header-border-bottom"
        >
          <span class="sub-ttl">ピラティスとは</span>
          ピラティスの歴史
        </h2>
        <div class="l-new-container">
          <h3>
            <span class="sub-ttl">ピラティスの歴史</span>
            1. ジョセフ・ピラティス
          </h3>
          <h4>第一章：ピラティス考案者「ジョセフ・ピラティス」の生い立ち</h4>
          <p>
            <img
              src="~assets/images/pilates/history/background.jpg"
              loading="lazy"
              alt="ピラティス考案者「ジョセフ・ピラティス」の生い立ち"
            >考案者ジョセフ・ハベルタス・ピラティス氏は、1883年、オランダ西部の国境まで約20キロの場所にある、Mönchengladbach（メンヒェングラートバッハ）という街で生まれました。<br>
            幼少時代はリウマチ熱、くる病、骨軟化症、喘息などに苦しみ、非常に病弱だったと言われています。これらの病気と戦うため、体操選手・ボクサーとして活躍していた父の影響で、体操やボクシング、禅、ヨガ、スキー、ダイビングなど、あらゆるトレーニングに取り組み、熱心に鍛錬を重ねました。14歳になる頃にはすっかり病気を克服し、解剖学書のモデルをするほどに健康的な身体を手に入れましたそうです。自身が病気を克服した経験から、様々な運動療法に興味を持ち、独自で研究していました。<br>
            彼は、Body,Mind,Spritのバランスを重視するギリシャの文化の精神と、彫刻の美しさに関心を持ち、世界中のさまざまな身体訓練法や武術を鍛錬し、素晴らしい肉体を築き上げました。そして、サーカス団員として、ヨーロッパを旅することになったのです。
          </p>
        </div>

        <!-- /.p-pilates-history-background -->

        <section class="p-pilates-history-origin">
          <div class="l-new-container">
            <h4>
              <span class="sub-ttl">ピラティスの歴史</span>
              第二章：ピラティス・メソッドのはじまり
            </h4>
            <p>
              <img
                src="~assets/images/pilates/history/origin.jpg"
                loading="lazy"
                alt="ピラティス・メソッドのはじまり"
              >1912年、サーカス団の巡業でイギリスに渡ったピラティス氏は、サーカス員やボクサーとして活躍しながらスコットランド警察のトレーナーとして武術の指導をしていました。<br>
              しかし、1914年に第一次世界対戦が勃発すると、敵国の人間としてイギリスのマン島に拘留されてしまいます。拘留された彼は、道端で見かけた野良猫の身体の動き、伸び、エネルギーにインスパイアされ、猫の動きを観察し、これまで研究してきた身体訓練法をアップデートさせ、他の囚人たちと一緒にエクササイズを行い、指導をするようになっていきました。<br>
              そんな中、マン島で看護師として働くようになっていた彼は、負傷した患者が寝たきりでも身体を強化し、全身の機能を改善するエクササイズできるよう、病院のベッドを改造し、後のピラティス専用のマシン「キャディラック（トラピーズテーブル）」の原型となるエクササイズ器具を作り、それを用いてリハビリ指導を始めました。彼はこの後も、生涯を通して沢山の革新的なエクササイズ器具を発明し続けることになります。<br>
              <br>
              そんなピラティス氏がマン島に拘留され、4年が過ぎた1918年、インフルエンザ（スペイン風邪）の大流行が始まりました。この大流行で、世界中で約5億人が感染し、5千万～1億人が亡くなったとされています。そんな中で、マン島に拘留されていたピラティス氏や、彼のエクササイズを行っていた囚人たちは、誰一人としてスペイン風邪にならなかったそうです。彼のメソッドは、筋肉や骨だけでなく、全身の機能に影響を及ぼす神経系や免疫システムにも効果を発揮したのです。<br>
              1919年、マン島の収容所から釈放されたピラティス氏はドイツに戻り、開発したメソッドを広める活動を始めました。彼は護身術の指導者として働きながら、個人のクライアントにも指導をはじめます。彼のメソッドはモダンダンスの練習の中でも取り入れられ始めましたが、1925年、ドイツ当局より新しい軍の訓練を頼まれた彼は、当時のドイツの政治的思考を好まなかったため、アメリカに渡ることを決意したのです。
            </p>
          </div>
        </section>
        <!-- /.p-pilates-history-origin -->

        <section class="p-pilates-history-newyork">
          <div class="l-new-container">
            <h4>
              第三章：ニューヨークでダンサーを中心に広がっていくピラティス
            </h4>
            <p>
              <img
                src="~assets/images/pilates/about/about-07.jpg"
                loading="lazy"
                alt="ニューヨークでスタジオを開設、ダンサーを中心に広がっていくピラティス"
              >1926年、ピラティス氏はニューヨークに到着します。航海中、彼は後に（内縁の）妻となる看護師のクララ・ゼウナーと出会いました。<br>
              30代後半になると、彼はニューヨークシティバレエ団と同じビルに、クララと共にスタジオをオープンし、現在のキャディラックや、リフォーマーとなるエクササイズ器具を設置しました。<br>
              スタジオをオープンし、間も無くすると、ピラティス氏の噂を聞きつけた、米国の主要なバレエ団の１つである「ニューヨーク・シティ・バレエ」の「ジョージ・バランシン」や、モダンダンスの開拓者の一人でもある「マーサ・グラハム」は、怪我をしたバレリーナを彼のスタジオに送り込むようになりました。彼の指導により多くのダンサーやアスリートが怪我や不調から回復すると、たちまち噂が広まり、ビジネスマンや医者、音楽家、サーカス芸人、体操選手、学生など、様々なクライアントがスタジオに来るようになり、一般の人にも広がっていきました。
            </p>
          </div>
        </section>
        <!-- /.p-pilates-history-newyork -->

        <section class="p-pilates-history-contrology">
          <div class="l-new-container">
            <h4>第四章：全ての人の生涯の健康を目指した「コントロロジー」</h4>
            <p>
              <img
                src="~assets/images/pilates/about/about-08.jpg"
                loading="lazy"
                alt="全ての人の生涯の健康を目指した「コントロロジー」"
              >1934年、ピラティス氏にとって初めての著書となる、『ユア・ヘルス
              (Your
              Health)』を出版します。この本の中で、ピラティス氏は彼のメソッドを「コントロロジー（Contrology）』と名付けました。これは、<strong>身体の細部に意識を高めコントロールし、深い呼吸と共に動くことで深層の筋肉を鍛え、動きの中で心と身体をつなげる革新的なメソッド</strong>でした。ピラティス氏は、現代人の様々な病気が姿勢の悪さや浅い呼吸が原因となっていると考え、全ての人が生涯の健康のために「コントロロジー」を行うべきだ、と信じていたそうです。<br>
              1945年に出版した『リターン・トゥ・ライフ・スルー・コントロロジー
              (Return to Life Through
              Contrology)』では、「コントロロジー」の理論と、ピラティス氏自らの写真によるエクササイズの解説をしました。この頃、彼は「コントロロジー」は人類を変えられると確信しており、医学の世界や学校教育への導入を目指して日々熱心に宣伝活動をしていたものの、医療資格を持たない彼に対し、病院の対応は悪く、医療にピラティスが取り入れられるのは彼の死後何年も経過してからになります。<br>
              <br>
              ピラティス氏は1967年に亡くなるまで、熱心に研究を重ねながらもクライアントへの指導を続けていました。また、彼は相当な変わり者だったと言われており、「ニューヨークの街並みをパンツ姿で歩き、逞しい肉体を見せつけた」「パーティが大好きで、毎日大量のお酒と葉巻を摂取していた」など、今でも多くのユニークなエピソードが語り継がれています。
            </p>
          </div>
        </section>
        <!-- /.p-pilates-history-contrology -->

        <section class="p-pilates-history-junior">
          <div class="l-new-container">
            <h3>
              <span class="sub-ttl">ピラティスの歴史</span>
              ピラティス第一世代・第二世代
            </h3>
            <div class="next-gen-1">
              <h4>ピラティス第一世代（ピラティスエルダー）</h4>
              <p>
                <img
                  src="~assets/images/pilates/about/about-09.jpg"
                  loading="lazy"
                  alt="ピラティス第一世代（ピラティスエルダー）"
                >ピラティス氏の死後、彼のスタジオは妻クララと弟子のロマーナ・クリザノウスカが引き継ぎ、共に運営を続けました。彼は遺言を残しませんでしたが、第一世代のピラティス指導者（ピラティス・エルダー）である、カローラ・トリエー、ロマーナ・クリザノウスカ、イブ・ジェントリー、ブルース・キング、ロリータ・サン・ミゲェル、メアリー・ボゥエン、ロン・フレッチャー、キャッシー・グラント、ボブ・シードが、ピラティス氏の遺志を引き継ぎ、後進を育てていきました。
              </p>

              <div class="">
                <h5 class="pb-5">
                  ＜ピラティス第一世代＞
                </h5>
                <h6>‣ カローラ・トリエー（1913-2000）</h6>
                <span>ピラティスの直弟子で、はじめて独立して自身のスタジオを立ち上げたエルダー。ピラティスメソッドを高く評価した外科医のヘンリージョーダン医師のもとでピラティスを指導し、たくさんの患者を回復させた。ロリータ・サン・ミゲルを3ヶ月で治療し、6ヶ月間ピラティスを指導し、インストラクターとして育てた。</span>
                <h6>‣ ロマーナ・クリザノスカ (1923-2013)</h6>
                <span>カローラ・トリエーの元で学ぶ。ピラティス氏の死後、クララと共にスタジオを引き継ぐ。スタジオ閉鎖後も、「ドラゴ&ボディアート・ジム」の一角でピラティスを指導。</span>
                <h6>‣ イヴ・ジェントリー (1909-1994)</h6>
                <span>モダンダンサーとして活躍するもケガによる手術を経験し、再びダンサーに戻りたい一心でピラティスに出会い、打ち込む。ピラティス氏の元で23年間トレーナーとして働く。「プレピラティス」という概念を作り、アメリカ西海岸スタイルのピラティスを作り上げたことでも知られている。ジョセフの死後、サンタフェでピラティススタジオを開設。ピラティスメソッドを独自でアレンジし、ミシェル・ラーソンに継承した。</span>
                <h6>‣ ブルース・キング (1925-1993)</h6>
                <span>ダンサーの他に教育者として活動し、ダンスのリハーサル中の膝の怪我のためにピラティス氏のスタジオに通い始める。有名ダンスカンパニーを退団後、独自のダンスを追求しカンパニーを設立。67歳で亡くなるまで自身のアパート兼スタジオでピラティスを指導していた。</span>
                <h6>‣ ロリータ・サン・ミゲル (1934-)</h6>
                <span>ダンスの練習中に膝の怪我をし、カローラ・トリエーの元でピラティスに出会い、カローラからピラティス指導者の認定を受けた唯一の存在。、1977年に両親の祖国であるプエルトリコに移りバレエ団を設立し、団員に毎日ピラティスを指導。ヨーロッパでのピラティスの発展に大きく貢献。</span>
                <h6>‣ メアリー・ボウエン (1930-)</h6>
                <span>ピラティス氏、ブルース・キング、ロマーナ・クリザノスカからピラティスを学ぶ。元コメディアンであり、ピラティス指導者として35年、ユング心理学者として40年以上活動した。心理学＋ピラティスという独自のスタイルを作る。</span>
                <h6>‣ ロン・フレッチャー (1921-2011)</h6>
                <span>モダンダンスの第一人者マーサ・グラハムに師事し振付師としても活躍。ダンサー時代に膝を痛めたことがきっかけで、1948年にピラティス氏のもとで指導を受ける。1971年、ビバリーヒルズでスタジオをオープンしたスタジオがハリウッドで話題になったことがきっかけで、「コントロロジー」は「ピラティス」としてメディアに多く取り上げられ、アメリカ国内、そして世界へと広がった。</span>
                <h6>‣ キャシー・グラント (1921-2010)</h6>
                <span>カローラ・トリエーの元でアシスタントをしていた。ロリータ・サンミゲルとともに直接ピラティス氏から指導を受け、ピラティス指導者の資格を与えられた2人のうちの1人。ニューヨーク大学でピラティスを教え、その後自分のスタジオをNYで設立。</span>
              </div>
            </div>

            <div class="pt-5 next-gen-1">
              <h4>ピラティス第二世代</h4>
              <p>
                <img
                  src="~assets/images/pilates/history/junior.jpg"
                  loading="lazy"
                  alt="ピラティス第二世代、弟子たちが継承し、世界に広がる"
                >ピラティス氏の弟子であったピラティス第一世代ティーチャーのもとでピラティスを学び、その伝統と意志を世界中に広めたピラティス第二世代ティーチャーの一部をご紹介いたします。
              </p>

              <div class="">
                <h5>＜第二世代＞</h5>
                <h6>‣ マリ・ウィンザー（1950-2020）</h6>
                <span>プロダンサーとして活動後、ロマーナ・クリザノスカからピラティスインストラクターの資格を取得し、1990年に「ウィンザー・ピラティス・スタジオ」を設立。独自のアレンジを加えたメソッドで、フィットネスやピラティスを広く普及させた。</span>
                <h6>‣ ブルック・サイラー（1968-）</h6>
                <span>1994年からロマーナ・クリザノスカのもとで学び、1996年に資格を取得。1997年にニューヨークに「re:AB
                  Pilates」をオープンし、マドンナなどのハリウッドスターにピラティスを指導した。著書の『Pilates
                  Body』はニューヨークタイムズ紙のベストセラー入りをしている。</span>
                <h6>‣ ミシェル・ラーソン</h6>
                <span>ダンサー・振付師として活動後、1982年よりイブ・ジェントリーに9年間支持。1996年にスタジオ兼ティーチャー・トレーニングスクールとして「Core
                  Dynamics
                  Inc.」を設立し、指導者養成プログラムを広く提供。</span>
                <h6>‣ Rael Isacowitz（ラエル・イサコウィッツ）</h6>
                <span>キャシー・グラント、ロン・フレッチャーなどのピラティス・エルダーから学び、1989年にカリフォルニア州にピラティスの教育機関「BASI
                  Pilates」を設立。世界40ヵ国以上でピラティス指導者養成コースを開催している。</span>
                <h6>‣ デボラ・レッスン</h6>
                <span>カローラ・トリエーに師事。1983年にニューヨークにグリーンスタジオを設立。PMA（ピラティス・メソッド・アライアンス）の創業時のメンバーであり、優れた指導テクニックでピラティス界を牽引するだけでなく、ピラティスそのものの広まりや発展にも貢献しています。</span>
              </div>
            </div>
          </div>
        </section>
        <!-- /.p-pilates-history-junior -->

        <section class="p-pilates-history-worldwide py-0">
          <div class="l-new-container">
            <h3>
              <span class="sub-ttl">ピラティスの歴史</span>
              3. ピラティス商標事件
            </h3>
            <p class="pb-5">
              <img
                src="~assets/images/pilates/history/worldwide.jpg"
                loading="lazy"
                alt="ピラティスの世界的な広がり"
              >1996年、マンハッタンに拠点を置き、自身もピラティス・インストラクターをするショーン・ギャラガー氏が、「pilates」「ピラティス」を商標登録してしまう、という事件が起こりました。そのことによって「pilates」「ピラティス」という用語の使用が制限され、ピラティスを説明する際に「Pilates-based」や「Pilates
              Inspired」など、ピラティスという用語をそのまま使えない事態となり、集団訴訟が起こりました。<br>
              <br>
              4年間の法定闘争を経て2000年に和解し、一般用語として認められると、ピラティス・メソッドは爆発的な広まりをみせ、世界中にピラティス団体が発足し、指導者養成コースの開催と共に、一般にも広く浸透していきました。<br>
              <br>
              この訴訟がきっかけとなり、同年には、ピラティス・メソッドが正しい形で継承されていくことを目的とする非営利組織、PMA（ピラティス・メソッド・アライアンス）が発足しました。PMAはピラティス指導者の国際的な資格、教育基準を設定しており、BASIピラティスやPOLESTARピラティスなど、全世界の様々なピラティス団体や流派が所属し、ピラティス氏の素晴らしい功績を広めようと活動しています。
            </p>

            <h3 class="pt-3">
              <span class="sub-ttl">ピラティスの歴史</span>
              4. 世界各国に広がる、ピラティス団体
            </h3>
            <p>
              数あるピラティス団体のごく一部ではありますが、ご紹介します。他にもたくさんのピラティス団体が世界中に存在し、それぞれの目的や特徴ごとに、日々研究を重ね、様々なスタイルのピラティスを展開しています。
            </p>
            <h4>BASI PILATES（バシ ピラティス）</h4>
            <span>1989年 Rael Isacowitz
              によって設立。南カリフォルニアのニューポートビーチに本部を構え、
              正統派のピラティスにラエル自身のスポーツ選手やダンサー、ヨガ指導者としてのキャリアと科学的根拠が融合したピラティスを世界中で展開。<br>
              <strong>日本では、zen
                place代表が、2002年にカリフォルニアのBasi本部でRael
                Isacowitzに出会い、メソッドの素晴らしさに触発されたことがきっかけで、2006年にBasi
                養成コースと、スタジオ事業を同時にスタート。多数の卒業生を輩出し続けている。</strong>
            </span>
            <span>
              <nuxt-link
                to="/pilates/about/basi"
                class="btn-light-gray"
              >
                BASIピラティスとは
              </nuxt-link>
            </span>
            <h4>STOTT PILATES®（ストット ピラティス）</h4>
            <span>モイラ・メリスーが設立。ダンサーだったモイラはロマーナから学び、夫のリンドセイと共に1988年にストットピラティスを立ち上げる。カナダのトロントに拠点を置き、エクササイズサイエンスと背骨のリハビリに関する現代の情報や原理を統合させたメソッドの研究を続けている。</span>
            <h4>POWER PILATES®（パワー ピラティス）</h4>
            <span>ボブ・リーケンスが設立。ダンサーだったリーケンスはロマーナの指導を受け、伝統的なピラティスを広めることにキャリアを捧げた。ニューヨークに拠点を置き、ピラティス氏が考案したエクササイズと順序を尊重したスタイルは、クラシカルピラティスとも呼ばれている。</span>
            <h4>POLESTAR PILATES®（ポールスター ピラティス）</h4>
            <span>理学療法士のブレント・アンダーソンとフェルデンクライス実践者のエリザベス・ラーカムが設立。マイアミに拠点を置き、臨床の治療とピラティスを融合させたリハビリテーション医学をベースとしたピラティスを普及している。</span>
            <h4>Balanced Body®（バランスド ボディ）</h4>
            <span>ケン・エンデルマンが設立。サンフランシスコに拠点を置き、人間生体力学の近代的な理解と最先端の工学、材料と技術を組み合わせることにより、ピラティス氏が造ったのピラティスマシンを改新した最初のピラティスの会社。1996年の「ピラティス」の商標を巡る裁判にて勝利に大きく貢献した会社でもある。</span>
            <h4>PEAK Pilates（ピーク・ピラティス）</h4>
            <span>アメリカ、Mad Dogg
              Athletics社が提供し、世界21ヶ国に展開する国際的な団体。
              コロラド州で発足し、伝統的なメソッドと、大自然の山々の美しさをインスピレーションに、独自のエクササイズマシンを開発し、厳しい教育カリキュタムと共に世界中に提供している。</span>
            <h4>FTP（エフ・ティー・ピー）</h4>
            <span>1991年、イギリス・ロンドンにてPhil Arney が設立。 FTPは「Fit To
              Perform」の略であり、ピラティス以外にもさまざまなフィットネスに関するプログラムを提供している。</span>
            <h4>PHI Pilates（ピー・エイチ・アイ　ピラティス）</h4>
            <span>Christine
              Romani-Rubyが設立。教育学博士、理学療法修士、NATA公認アスレチックトレーナー等の資格を有しるルビィ氏は、カリフォルニア大学にてピラティスを20年以上研究し、ピラティスが姿勢改善させることを証明した論文を発表している。</span>
          </div>
        </section>
        <!-- /.p-pilates-history-worldwide -->
      </section>
    </section>
    <!-- /.p-pilates-historyEND -->
    <div class="c-ctalower bg-cta text-center">
      <div class="l-new-container">
        <h4 class="fa-2x white">
          体験レッスンの予約はこちら
        </h4>
        <div class="mb-5">
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
        <div class="d-flex justify-content-center">
          <a
            href="tel:03-4405-1245"
            class="c-ctalower-blue"
          >
            <i class="icon-phone" />
            電話予約
          </a>
          <a
            href="/welcome/schedule.php"
            class="c-ctalower-orange"
          >
            <i class="icon-web" />
            ウェブで予約
          </a>
        </div>
      </div>
    </div>
    <section class="p-pilates-about-basics bg-white">
      <span
        class="text-left pl-4 sticky-h2 sticky-top pl-3"
      >3. 日本におけるピラティスとzen placeの足跡</span>
      <h2
        id="anchor3"
        class="c-header-border-bottom"
      >
        <span class="sub-ttl">ピラティスとは</span>
        日本におけるピラティスと<br>zen placeの足跡
      </h2>
      <!--<div class="l-new-container">
        <div class="content">
          <h3>1. 日本のピラティスの歴史</h3>
          <p>
            ピラティスは、1883年にドイツで生まれたJoseph Hubertus Pilates（ジョセフ・ハベルタス・ピラティス）氏によって考案されたエクササイズです。<br><br>
            <a
              href="https://pilatesmethodalliance.org/about-pilates/"
              class="d-inline-block"
              target="_blank"
            >ピラティス・メソッド・アライアンス</a>によると、ピラティスとは、「a method of exercise and physical movement designed to stretch, strengthen, and balance the body.」(※1)、つまり、身体の柔軟性を高め、強化し、バランスを整えるためのメソッドです。<br>
            心と身体、そして精神を調和させながら鍛えていくことで、筋肉や関節の柔軟性を向上させ、軸を伸長し、バランス力やコントロール力を高め、安定した強い身体を作り、活力を回復させ、ストレスを解消し、疲労と慢性の痛みを減少させるなど、さまざまな効果が期待できます。 <br><br>
            呼吸と組み合わせられたエクササイズのパターンを実践することで、アスリートのトレーニングやリハビリに効果があることが、さまざまな研究により証明されています。
          </p>
        </div>
        <div class="img">
          <img
            src="~assets/images/pilates/about/benefits.jpg"
            loading="lazy"
            class="img-fluid"
          >
        </div>
      </div>-->
      <div class="l-new-container">
        <div class="content">
          <h3>
            <span class="sub-ttl">日本におけるピラティス</span>1. zen place
            ピラティスの歴史
          </h3>
          <h4>第一章：ラエル・イサコウィッツ氏との出会い</h4>
          <p>
            私たちzen placeは、たった一つのスタジオから始まりました。<br>
            2002年、代表・尾崎成彦がアメリカのビジネススクールへ留学した際に、ピラティス第二世代ティーチャーであり、BASI
            ピラティス創設者のラエル・イサコウィッツ氏と出会ったことがきっかけでした。尾崎は、ピラティスの本場であるアメリカのスタジオに初めて訪れた際、開放的で心地よい空間の雰囲気、スタッフの姿勢、表情、トーン、ポジティブでハッピーなオーラに魅了され、ピラティスの本質そのものに惹かれました。<br>
            そして、ラエル氏が<strong>「ピラティスは動く瞑想だ。人生における大切なものである」</strong>と語った時、尾崎は、ピラティスが身体の動きを通して心を変える新しいアプローチ方法になると確信しました。
          </p>
        </div>
        <div class="img">
          <img
            src="~assets/images/pilates/about/about-10.jpg"
            loading="lazy"
            alt="zen placeピラティスの歴史、バシピラティスとの出会い"
            class="img-fluid"
          >
        </div>
      </div>
      <div class="l-new-container">
        <div class="content">
          <h4>第二章:東京・中目黒に「BASI Pilates」一号店をオープン</h4>
          <p>
            日本に帰国した尾崎は、「マインド」を変え、「人生を変える」ことのできる空間を、日本で実現したい。経済が低迷して先行きの見えなくなった日本に、心の変容を引きこせる場所を作りたい。そんな想いのもと、2006年に東京・中目黒に一号店をオープンしました。<br>
            オープン当初より、アメリカのスタイルを踏襲し、オープンな空間とマインドで、ピラティスの本質を伝えることに拘っています。
          </p>
        </div>
        <div class="img">
          <img
            src="~assets/images/pilates/about/about-11.jpg"
            loading="lazy"
            class="img-fluid"
            alt="2006年にピラティススタジオ一号店オープン"
          >
        </div>
      </div>
      <div class="l-new-container">
        <div class="content">
          <h4>第三章：スクール事業の開始と規模拡大</h4>
          <p>
            一号店オープンと同時に、ピラティス・インストラクター養成コースを開始しました。<br>
            本場アメリカからスキルの高いピラティス講師を招き、質の高い養成講座を数多く開催。コースを卒業したインストラクターが働く場所として、ピラティススタジオの出店を増やし、全国80店舗以上という、現在の規模にまで成長しました。
          </p>
        </div>
        <div class="img">
          <img
            src="~assets/images/pilates/about/about-12.jpg"
            loading="lazy"
            class="img-fluid"
            alt="スクール事業の開始と規模拡大"
          >
        </div>
      </div>
      <div class="ytb-content container pb-5">
        <h4 class="mb-3 ytb-title">
          特別インタビュー！ BASI ピラティス創始者Rael
          Isacowitzさんさんが語る「ピラティス」
        </h4>
        <iframe
          loading="lazy"
          class="ytb-iframe"
          src="https://www.youtube.com/embed/cOktpFoG6Hk"
          title="特別インタビュー！ BASI ピラティス創始者Rael Isacowitzさんさんが語る「ピラティス」"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </section>
    <CtaLower />
    <section class="p-pilates-about-basics bg-white">
      <span
        class="text-left pl-4 sticky-h2 sticky-top"
      >4. ピラティスの効果・方法論</span>
      <h2
        id="anchor4"
        class="c-header-border-bottom"
      >
        <span class="sub-ttl">ピラティスとは</span>
        ピラティスの効果・方法論
      </h2>
      <div class="l-new-container">
        <div class="content">
          <h3>
            <span class="sub-ttl">ピラティスの効果・方法論</span>
            1. 姿勢改善
          </h3>
          <p>
            背骨や骨盤、肩甲骨や股関節などを意識し、「<strong>正しく動かす</strong>」ことを学ぶことにより、身体が機能しやすい自然な位置に骨や内臓を配置する力を鍛えます。一つひとつの背骨の間にある細い筋肉を強化することで、背骨を正しい位置に置く力を強化し、常にアライメント（左右のバランスの確認）を行うことで、歪みのないバランスの取れた筋肉を作り、美しい姿勢に導きます。<span
              class="ref-link"
            >
              (<a
                href="https://pubmed.ncbi.nlm.nih.gov/30477608/"
                target="_blank"
              >4</a>) (<a
                href="https://pubmed.ncbi.nlm.nih.gov/34924792/"
                target="_blank"
              >5</a>)</span><br>
            <br>
            姿勢が改善されると、余分な「りきみ」のないリラックスした身体になり、スポーツなどのパフォーマンスの向上や、疲労感の軽減が期待できます。<br>
            また、脳から伸びている中枢神経は背骨の中を通って身体の末端まで続いているため、背骨の配置を整え刺激することで、自律神経バランスが整い、脳と末端の情報伝達にも良い影響が期待されます。
          </p>
        </div>
        <div class="img">
          <img
            src="~assets/images/pilates/about/about-13.jpg"
            loading="lazy"
            class="img-fluid"
            alt="ピラティスの効果：姿勢改善"
          >
        </div>
      </div>
      <div class="l-new-container">
        <div class="content">
          <h3>
            <span class="sub-ttl">ピラティスの効果・方法論</span>
            2. インナーマッスルの強化
          </h3>
          <p>
            ピラティスでは、<strong>動きと共に呼吸を使い、体幹部にあるインナーマッスルを強化していきます。</strong>
            骨盤の底面にハンモック状に存在する「骨盤底筋群」、お腹の周りをコルセットのようにぐるりと囲む「腹横筋」、背骨を支える脊柱起立筋の深層部に位置する「多裂筋」、そして腹腔の上部分を覆い呼吸と共に動く「横隔膜」の4つの筋肉を合わせた「インナーユニット」を、呼吸の使い方によって鍛えていきます。<br>
            これにより、体幹の安定、疲労の抑制、怪我の防止、代謝アップ、腰痛緩和、尿漏れの予防、更年期障害や生理痛の緩和など、さまざまな効果が期待できます。<span
              class="ref-link"
            >
              (<a
                href="https://pubmed.ncbi.nlm.nih.gov/27419122/"
                target="_blank"
              >6</a>)</span><br>
            強い体幹は四肢の動きをしなやかなにし、背骨と内臓を支え身体を安定させます。強い体幹を「筋肉のガードル」とも表現します。
          </p>
        </div>
        <div class="img">
          <img
            src="~assets/images/pilates/about/about-14.jpg"
            loading="lazy"
            class="img-fluid"
            alt="ピラティスの効果：インナーマッスルの強化"
          >
        </div>
      </div>
      <div class="l-new-container">
        <div class="content">
          <h3>
            <span class="sub-ttl">ピラティスの効果・方法論</span>
            3. 免疫力を高める
          </h3>
          <p>
            免疫力を正常な状態に保つには、ストレスのコントロールと腸内環境を整えることが大切です。脳の一部にストレスが過剰にかかると、脳全体の機能や、免疫に関わるホルモン系や自律神経系の機能にも影響を及ぼすことが理由です。<br>
            ピラティスは<strong>呼吸法と「集中」による瞑想効果（マインドフルネス）により自律神経をコントロールしていく事から、ストレス解消につながります。</strong>ストレスの解消はホルモンバランスを正常化させ、それは内臓機能を正常化させます。また、深層筋に着目したエクササイズは内臓の位置も正しく整えるため腸を活性化します。<br>
            このような働きかけからピラティスが免疫力を高める、バランスをとることが期待できるのです。<span
              class="ref-link"
            >
              (<a
                href="https://pubmed.ncbi.nlm.nih.gov/30220679/"
                target="_blank"
              >7</a>)</span><br>
            第一次世界大戦中、世界中でスペイン風邪が大流行した際に、ジョセフ・ピラティス氏と共にコントロロジー（今のピラティス）を実践していた兵士は、誰一人亡くなることはなかったというエピソードもあります。
          </p>
        </div>
        <div class="img">
          <img
            src="~assets/images/pilates/about/about-16.jpg"
            loading="lazy"
            class="img-fluid"
            alt="ピラティスの効果：免疫力を高める"
          >
        </div>
      </div>
      <div class="l-new-container">
        <div class="content">
          <h3>
            <span class="sub-ttl">ピラティスの効果・方法論</span>
            4. ストレスの解消・睡眠の質向上
          </h3>
          <p>
            ピラティスでおこなう胸式呼吸は交感神経に働きかけ、頭や身体を活性化させる効果を持ちます。レッスン後に頭がすっきりとする爽快感を得られるのはこのためです。<br>
            また、<strong>ピラティスでは微細な背骨や筋肉の正確な動きに意識を向け、集中力を高めて「マインドフルネス」な状態をつくることから「動く瞑想」とも呼ばれます。</strong><br>
            <br>
            呼吸とリズムを伴う動きでは、良質な睡眠に欠かせない「メラトニン」というホルモンの原料となる、「セロトニン」の分泌を増やします。そのため、日中にピラティスを行うことで、睡眠の質が向上する効果も期待できます。<span
              class="ref-link"
            >
              (<a
                href="https://pubmed.ncbi.nlm.nih.gov/29096225/"
                target="_blank"
              >8</a>)</span>
          </p>
        </div>
        <div class="img">
          <img
            src="~assets/images/pilates/about/about-15.jpg"
            loading="lazy"
            class="img-fluid"
            alt="ピラティスの効果：ストレスの解消・睡眠の質向上"
          >
        </div>
      </div>
    </section>
    <section class="p-pilates-about-basics bg-light-gray">
      <span
        class="text-center sticky-h2 sticky-top"
      >ピラティスの3つの特徴</span>
      <h2 class="c-header-border-bottom">
        <span class="sub-ttl">ピラティスとは</span>
        ピラティスの3つの特徴
      </h2>
      <div class="l-new-container">
        <div class="content">
          <h3>
            <span class="sub-ttl">ピラティスの3つの特徴</span>1.
            細部への意識で、正しい身体の使い方が学べる
          </h3>
          <p>
            ピラティスでは、背骨の一つひとつを微細に動かしたり、足裏に均等に重心が乗るよう細部まで意識したりと、身体を効率よく、機能的に使うための動かし方やポジション（アラインメント）について学びます。<br>
            ピラティスの原則にもある、”<strong>Awareness</strong>”（アウェアネス・気付き）、つまり、<strong>身体意識のを向上し、常に身体全体を内観する習慣を付けることで、その日その時の自分との向き合い方を学びます。</strong><br>
            スピードが速く情報に溢れた現代社会で生きる私たちは、仕事や家事、育児などの日常生活を生きることに精いっぱいで、自身の心身に目を向けることを疎かにしがちです。その日の自分のこころ・身体の状態や、日頃の生活の中で身についてしまった身体の癖、そして、思考の癖、例えば「もういいや」と諦め思考だったり、慎重になる癖がありすぐに行動に移せなかったりというような、身体だけでなくマインドや脳に至る自分の状態への「気付き」を増やすことが、豊かな心身への第一歩です。「気付き」を増やし、それをコントロールする術を学べるのが、ピラティスの魅力の一つです。
          </p>
        </div>
        <div class="img">
          <img
            src="~assets/images/pilates/about/about-17.jpg"
            loading="lazy"
            class="img-fluid"
            alt="ピラティスとは細部への意識で、正しい身体の使い方が学べる"
          >
        </div>
      </div>
      <div class="l-new-container">
        <div class="content">
          <h3>
            <span class="sub-ttl">ピラティスの3つの特徴</span>2.
            深い呼吸で、内臓も元気に
          </h3>
          <p>
            姿勢が崩れると、肺に十分な空気が入らず、浅い呼吸になってしまいます。呼吸が浅いと、肺の一部にしか酸素が行き届かず、全身の血液の酸素が不足してしまいます。また、そのダメージを最も受けるのが脳と言われており、浅い呼吸は脳細胞の機能を低下させます。
            ピラティスの呼吸は、胸式呼吸。肋骨下部にある横隔膜（おうかくまく）、ウェスト横にコルセットのようにある腹横筋（ふくおうきん）、骨盤で内臓を支える骨盤底筋（こつばんていきん）を、深い呼吸と共にしっかりと動かし、内臓の細胞を刺激して活性化させるのが特徴です。正しい呼吸は、心肺系（心臓と肺）を強くし、循環器系（心臓と血管）の機能を高め、自律神経を整え、筋肉はもちろんのこと、内臓・神経・脳など、身体全体を活性化するのです。
          </p>
        </div>
        <div class="img">
          <img
            src="~assets/images/pilates/about/about-18.jpg"
            loading="lazy"
            class="img-fluid"
            alt="深い呼吸で、内臓も元気に"
          >
        </div>
      </div>
      <div class="l-new-container">
        <div class="content">
          <h3>
            <span class="sub-ttl">ピラティスの3つの特徴</span>3.
            エネルギッシュで前向きなマインドに
          </h3>
          <p>
            ピラティスのエクササイズには<strong>自律神経を整える効果</strong>があります。特に、背骨を意識して動かすため、活動力の高まる「交感神経」を活発にする効果があり、交感神経が活発になることで、血液が筋肉や脳に活発に行き届くようになります。そうすると、脳と全身のつなぐ神経が活発になるため、身体だけでなく脳の状態、心の状態を良くしていけます。
            様々なテクノロジーの発達やライフスタイルの変化により、身体をリラックスさせる「副交感神経」が優位になりやすいと言われる現代社会において、毎日続けられる強度で「交感神経」を刺激できるピラティスは、週に1度、月に1度の習い事としてではなく、毎日のライフスタイルに取り入れる事でその効果を発揮しやすくなります。
          </p>
        </div>
        <div class="img">
          <img
            src="~assets/images/pilates/about/about-19.jpg"
            loading="lazy"
            class="img-fluid"
            alt="エネルギッシュで前向きなマインドに"
          >
        </div>
      </div>
    </section>
    <section class="p-pilates-about-pilates-yoga bg-white">
      <span
        class="text-center sticky-h2 sticky-top"
      >ピラティスとヨガの違い</span>
      <h2 class="c-header-border-bottom">
        <span class="sub-ttl">ピラティスとは</span>
        ピラティスとヨガの違い
      </h2>
      <div class="l-new-container">
        <div class="img">
          <img
            src="~assets/images/pilates/about/benefits.jpg"
            loading="lazy"
            class="img-fluid"
            alt="ピラティスとヨガの違い"
          >
        </div>
        <div class="content">
          <h3>
            <span class="sub-ttl">ピラティスとヨガの違い</span>成り立ちと目的
          </h3>
          <p>
            ピラティスが100年程、ドイツ人のピラティス氏によってリハビリを目的に考案されたのに対し、ヨガの起源は約4500年前、インダス文明の時代に遡ります。ヨガは、インド思想に基づいた修行方法として始まったとされています。<strong>ピラティスが、身体が本来持つ機能を最大限に引き出すことを目的にしている</strong>一方で、ヨガで重視されるのは、精神の安定です。ヨガと聞くと、身体を大きくストレッチする、エクササイズ色の強い動きをする姿が思い浮かぶと思いますが、古典的なヨガでは「瞑想」を重視し、自身の心と向き合うことを重視して行っていきます。
          </p>
        </div>
      </div>
      <div class="l-new-container">
        <div class="img">
          <img
            src="~assets/images/pilates/about/about-20.jpg"
            loading="lazy"
            class="img-fluid"
            alt="ピラティスとヨガの違い：呼吸法と動き"
          >
        </div>
        <div class="content">
          <h3>
            <span class="sub-ttl">ピラティスとヨガの違い</span>呼吸法と動き
          </h3>
          <p>
            <strong>ピラティスは、胸式呼吸を用いて動くことで交感神経を刺激し、全身の細胞を活性化、エネルギッシュな状態を作ります。</strong>一方ヨガでは、腹式呼吸を用いて副交感神経を刺激し、精神の平穏、心のリラクゼーションを図る効果が期待されています。<br>
            また、ピラティスの動きは「<strong>ムーブメント</strong>」、つまり、<strong>一か所に留まることなく流れるように動くことが多い</strong>一方、ヨガの動きは「ポーズ（アーサナ、と呼ばれています）」に集中するという違いがあり、一つひとつのアーサナに向かって少しずつ身体を組み立てていく、という特徴があります。この違いは、実際に両方のレッスンを体験していただければ、すぐにわかるでしょう。<br>
            写真や動画で見ると、似ているように見えるピラティスとヨガ。これらは成り立ちや目的、動きの種類が違いますが、<strong>心と身体の為のボディーワークであることは共通しています。</strong>
          </p>
        </div>
      </div>
    </section>
    <div class="c-ctalower bg-cta text-center">
      <div class="l-new-container">
        <div class="mb-5">
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
        <div class="d-flex justify-content-center">
          <a
            href="tel:03-4405-1245"
            class="c-ctalower-blue"
          >
            <i class="icon-phone" />
            電話予約
          </a>
          <a
            href="/welcome/schedule.php"
            class="c-ctalower-orange"
          >
            <i class="icon-web" />
            ウェブで予約
          </a>
        </div>
      </div>
    </div>
    <section class="p-pilates-about-basics bg-white">
      <span
        class="text-left pl-4 sticky-h2 sticky-top"
      >5. ピラティスの種類（マシン・マット）</span>
      <h2
        id="anchor5"
        class="c-header-border-bottom"
      >
        <span class="sub-ttl">ピラティスとは</span>
        マシンピラティスとマットピラティス
      </h2>
      <div class="l-new-container">
        <div class="content">
          <h3>
            <span class="sub-ttl">マシンピラティスとマットピラティス</span>1.
            マシンピラティスとは
          </h3>
          <p>
            ドイツ人男性のジョセフ・ピラティス氏が開発した機械を用いて行うエクササイズです。第一次世界大戦で負傷した兵士をリハビリする目的で作られたため、病院のベッドを改造したような作りになっており、老若男女問わず安心して行えるエクササイズが約200通り以上考案されています。
          </p>
        </div>
        <div class="img">
          <img
            src="~assets/images/pilates/about/about-21.jpg"
            loading="lazy"
            class="img-fluid"
            alt="マシンピラティスとは"
          >
        </div>
      </div>
      <div class="l-new-container">
        <div class="content">
          <h3>
            <span class="sub-ttl">マシンピラティスとマットピラティス</span>2.
            マシンピラティスの効果
          </h3>
          <p>
            マシンピラティスは専用のマシンを使ってエクササイズを行います。マシンは筋肉の強化や、身体の使い方をより正確に学ぶ事が出来ます。<br>
            <br>
            マシンの使用は、まず、個人の身体的特徴や動き、目的に合わせて使うマシンを選択します。リフォーマーやキャディラック、ワンダーチェアーなどは、バネの重さや角度を細かいレベルで微調整します。<br>
            付属のバネ（スプリング）によって負荷やサポート力を調整できます。器具のサポートがあることで、身体を無理なく動かすこともできるためピラティス初心者の方にもおすすめです。<br>
            <br>
            <strong>マシンを使って様々な方向に身体を動かすことで可動域を広げていき、同時に体幹や体の軸を鍛え、安定性と柔軟性を得ることができます。普段意識しにくい細部の筋肉（インナーマッスル）を使うため、初めてマシンピラティスをされる方は、意識したことのない筋肉を使うことに驚かれるかもしれません。</strong><br>
            <br>
            重いものダンベルを持ち上げる筋トレとは違い、軽いものを更に長く上に引き上げるようにマシンを動かすことで、太く短い筋肉ではなく、細くて長いしなやかな筋肉が手に入るというメリットがあります。
          </p>
        </div>
        <div class="img">
          <img
            src="~assets/images/pilates/about/about-22.jpg"
            loading="lazy"
            class="img-fluid"
            alt="マシンピラティスの効果"
          >
        </div>
      </div>
      <div class="l-new-container">
        <div class="content">
          <h3>
            <span class="sub-ttl">マシンピラティスとマットピラティス</span>3.
            マットピラティスの効果
          </h3>
          <p>
            自重を使って動くマットピラティスは、筋力アップにとても効果的です。
            マットに寝た状態で行うことが多いので難しいポーズが少なく、ピラティスの基本を覚えられ、続けやすいことがメリットです。<br>
            <br>
            自分で自分の身体の重さを支えるという点で、マシンよりも負荷が高く、肩や首などに余計な力が入りやすいため、より正しく自分の身体を自分でコントロールする必要があります。<br>
            また、マットレッスンはグループで行うことが多いため、大人数の中でインストラクターの指示を体現する力や集中力を養うことができます。<br>
            <br>
            一方で、マットピラティスでは、身体を動かすことに力を出し尽くしてしまい、背骨や骨盤などへ意識を向けることが難しいなんてことも。
          </p>
          <p>
            <strong>マシンで正しい基礎の動きを学び、マットのグループレッスンで自立的に応用できるようになっていただくのが理想です。</strong>
          </p>
        </div>
        <div class="img">
          <img
            src="~assets/images/pilates/about/about-23.jpg"
            loading="lazy"
            class="img-fluid"
            alt="マットピラティスの効果"
          >
        </div>
      </div>
    </section>
    <section class="p-pilates-about-basics bg-light-gray">
      <span
        class="text-center sticky-h2 sticky-top"
      >ピラティスマシンの種類</span>
      <h2 class="c-header-border-bottom">
        <span class="sub-ttl">ピラティスとは</span>
        ピラティスマシンの種類
      </h2>
      <div class="container pt-5 bg-light-gray">
        <div class="row pt-3">
          <div
            class="col-12 col-md-5"
            style="border: none"
          >
            <img
              src="~assets/images/pilates/machine/reformer-img.jpg"
              alt="ピラティス専用マシン リフォーマー"
              class="align-self-start mx-auto mx-lg-0 px-0 pb-3 col-12"
            >
          </div>
          <div class="col-12 col-md-7 pb-5">
            <h3>
              <span class="sub-ttl">ピラティスマシンの種類</span>リフォーマー
            </h3>
            <p class="c-text">
              身体をリフォーム（改良）できる万能なマシンという事からその名がついたピラティスの代表的なマシンで、最も多くのピラティスエクササイズを行えることが特徴です。<br>
              リフォーマーは、実践者が乗るキャリッジと呼ばれる台が動きます。キャリッジにはスプリングをつけることができ、これにより初級者には安定性を、また熟練者には負荷を提供することができます。足元についているバネを伸ばしたり縮めたりすることで寝た状態でも能動的に運動が行うことができます。<br>
              また、このキャリッジの上に立って動くことでバランス機能の改善などにも役立てることができます。<br>
              足腰のみならず、体幹の強化、局所的な部位のケア、全身のコンディショニングまで、様々なポジションであらゆるアプローチができるため、どんな目的にも応じてすべての方に最適なトレーニングを提供することができます。
            </p>
          </div>
        </div>
        <div class="pt-3 row">
          <div class="col-12 col-md-6 mb-5">
            <img
              src="~assets/images/pilates/machine/cadillac-img.jpg"
              alt="ピラティス専用マシン キャデラック"
              class="mx-auto mx-lg-0 px-0 pb-3 col-12"
            >
            <div class="pb-5">
              <h3>
                <span class="sub-ttl">ピラティスマシンの種類</span>キャデラック
              </h3>
              <p class="c-text pb-5">
                ジョセフ・ピラティス氏が最初に考案したと言われているピラティスのマシン。<br>
                アメ車のキャディラックのように大きく、さまざまな装備が整っていることから「キャデラック」と名付けられた、ピラティスで最も大きなマシンです。<br>
                第一次世界大戦中、戦争で負傷した兵士のリハビリを行うために病院のベッドを改造して作られたため、見た目はベッドそのものです。<br>
                身体を支えてくれるバーや軽い負荷をかけられるバネ、脚をつるす台などを取り付けることで、起き上がるのが難しい状態でも安全にトレーニングすることができます。
              </p>
            </div>
          </div>
          <div class="col-12 col-md-6 mb-5">
            <img
              src="~assets/images/pilates/machine/wunda-img2.jpg"
              alt="ピラティス専用マシン ワンダチェア"
              class="mx-auto mx-lg-0 px-0 pb-3 col-12"
            >
            <div class="">
              <h3>
                <span class="sub-ttl">ピラティスマシンの種類</span>ワンダチェア
              </h3>
              <p class="c-text pb-5">
                ジョセフ・ピラティスが小さなアパートに住むクライアントのために考案したと言われている椅子型のマシン。<br>
                他のマシンと比べて小ぶりですがエクササイズバリエーションは豊富です。<br>
                脚や股関節を強化するフットワークから腹部で身体を支える腹筋のワーク、肩や腕のインナーマッスルを鍛えるアームワークなど、細かい部位をより細かく正確に動かすことが求められます。中級者以上の方に最適なマシンです。
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-md-6 mb-5">
            <img
              src="~assets/images/pilates/machine/barrel-img.jpg"
              alt="ピラティス専用マシン ラダーバレル"
              class="mx-auto mx-lg-0 px-0 pb-3 col-12"
            >
            <div class="">
              <h3>
                <span class="sub-ttl">ピラティスマシンの種類</span>ラダーバレル
              </h3>
              <p class="c-text pb-5">
                ラダー（はしご）とバレル（樽）が一体となったマシン。<br>
                ラダーの上に乗って背骨を動かしたり、バレルの上に脚を置いてハムストリングや股関節のストレッチをすることができます。<br>
                身長に合わせてラダーとバレルの距離を調整できるので、難易度も自由自在。<br>
                多くのバレエダンサーから好まれ、パフォーマンス向上に役立っています。
              </p>
            </div>
          </div>
          <div class="col-12 col-md-6 mb-5">
            <img
              src="~assets/images/pilates/machine/spine-img.jpg"
              alt="ピラティス専用マシン スパインコレクター"
              class="mx-auto mx-lg-0 px-0 pb-3 col-12 pb-3"
            >
            <div class="">
              <h3>
                <span class="sub-ttl">ピラティスマシンの種類</span>スパインコレクター
              </h3>
              <p class="c-text pb-5">
                横から見るとクジラのような丸い曲線が可愛らしいピラティスマシンの一種です。<br>
                まさにスパイン（背骨）をコレクト（正す）ために考案されたフォルムで、このカーブに沿って背骨を丸める・反らせる・曲げる・捻る動作が可能。<br>
                背骨の柔軟性、肩甲骨の可動域を向上させるエクササイズが多数行えます。<br>
                ピラティスの中でも小さいマシンなので場所を選ばず使えることから、ご自宅でもお気軽に肩こり、腰痛の解消＆姿勢改善が行うことができます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="p-pilates-knowmore c-column-three2 py-5 my-5">
      <h2 class="c-header-border-bottom mt-1">
        <span class="sub-ttl">ピラティスとは</span>
        ピラティスをもっと知る
      </h2>
      <div class="l-new-container py-5">
        <div class="sp-slide">
          <div class="c-column-three2-wrap">
            <div class="c-column-three2_single">
              <a href="https://www.zenplace.co.jp/column/pilates/8502.html">
                <img
                  src="~assets/images/pilates/about/about-column.jpg"
                  alt="更年期太りなどの更年期症状の緩和にピラティス・ヨガがおすすめの理由とは？"
                  loading="lazy"
                  class="w-100"
                >
              </a>
              <a href="https://www.zenplace.co.jp/column/pilates/8502.html">
                <h3>
                  更年期症状の緩和にピラティス・ヨガがおすすめの理由とは？
                </h3>
              </a>
              <p>
                更年期症状のケアとして、婦人科へ通ったり、漢方薬やサプリなどを服用したりすることがありますが、実は、
                ピラティスも更年期症状の緩和に有効だ と、ご存じでしたか？
              </p>
            </div>
            <div class="c-column-three2_single">
              <nuxt-link to="/pilates/knowmore/backache">
                <img
                  src="~assets/images/pilates/knowmore/backache/thumbnail.jpg"
                  alt="腰痛改善へのピラティス効果"
                  loading="lazy"
                  class="w-100"
                >
              </nuxt-link>
              <nuxt-link to="/pilates/knowmore/backache">
                <h3>腰痛改善へのピラティス効果</h3>
              </nuxt-link>
              <p>
                腰の痛みを改善するためにマッセージや鍼にいくと、一時的に身体が楽になりますが、すぐに元に戻ってしまう、そんな経験は多くの方が思い当たるのではないでしょうか。<br>
                なぜなら「腰痛」は身体の間違った使い方や、精神的な原因によって起こることがほとんどだからです。
                <!-- (<a
                  href="https://pubmed.ncbi.nlm.nih.gov/33096012/"
                  class="ref-link"
                >3</a>) -->
              </p>
            </div>
            <div class="c-column-three2_single">
              <a href="https://www.zenplace.co.jp/column/pilates/2640.html">
                <img
                  src="~assets/images/pilates/knowmore/seo/efficacy.jpg"
                  alt="ピラティスに向いてる人とは？"
                  loading="lazy"
                  class="w-100"
                >
              </a>
              <a href="https://www.zenplace.co.jp/column/pilates/2640.html">
                <h3>ピラティスに向いてる人とは？</h3>
              </a>
              <p>
                男女や年齢問わず取り組みやすいピラティスですが向いてる人はどのような人でしょうか？ここではピラティスに向いてる人の特徴や自分もできるかどうかについて解説します。
              </p>
            </div>

            <div class="c-column-three2_single">
              <a href="https://www.zenplace.co.jp/column/pilates/2109.html">
                <img
                  src="~assets/images/pilates/knowmore/seo/times.jpg"
                  alt="ピラティスはどのくらいの回数をすれば"
                  loading="lazy"
                  class="w-100"
                >
              </a>
              <a href="https://www.zenplace.co.jp/column/pilates/2109.html">
                <h3>ピラティスはどのくらいの回数をすれば、効果が出るの？</h3>
              </a>
              <p>
                ピラティスは週に何回くらいすると身体に効果が出るのか？気になりませんか。そこでピラティスの理想的な回数やコンスタントに続けるコツなどを紹介していきます。
              </p>
            </div>

            <div class="c-column-three2_single">
              <a href="https://www.zenplace.co.jp/column/pilates/3228.html">
                <img
                  src="~assets/images/pilates/knowmore/seo/diff.jpg"
                  alt="ティラピスとピラティスの違いって何？"
                  loading="lazy"
                  class="w-100"
                >
              </a>
              <a href="https://www.zenplace.co.jp/column/pilates/3228.html">
                <h3>ティラピスとピラティスの違いって何？</h3>
              </a>
              <p>
                ピラティスとよく似たティラピスという言葉が使われることがあります。どちらもエクササイズの一種と認識されていますが、両者にはどのような違いがあるのでしょうか。
              </p>
            </div>

            <div class="c-column-three2_single">
              <a href="https://www.zenplace.co.jp/column/diet/7790.html">
                <img
                  src="~assets/images/pilates/knowmore/seo/diet.jpg"
                  alt="ヨガとピラティスどっちがダイエットに向いている？"
                  loading="lazy"
                  class="w-100"
                >
              </a>
              <a href="https://www.zenplace.co.jp/column/diet/7790.html">
                <h3>
                  ヨガとピラティスどっちがダイエットに向いている？〜効果の違いや選び方
                </h3>
              </a>
              <p>
                ヨガとピラティス、どちらともダイエット効果のある有酸素運動として注目されています。ですが、この2つはダイエットに適しているという共通点はあるものの、目的や鍛えられる部分などは異なります。今回は両者の特徴や違いについてご紹介します。
              </p>
            </div>
          </div>
        </div>
        <div class="text-center">
          <a
            href="https://www.zenplace.co.jp/column/index.php"
            class="btn-blue_border"
          >
            記事をもっと読む
          </a>
        </div>
      </div>
    </section>
    <!-- /.p-pilates-knowmore  -->
    <StudioList />
    <CtaLower />
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue';
import CtaLower from '~/components/CtaLower.vue';
import StudioList from '~/components/studios/StudioList.vue';

const headerImg = require('@/assets/images/pilates/about/pilates-about-header.jpg');

export default {
  layout: 'new',
  head() {
    return {
      title:
        'ピラティスとは？起源・効果・ヨガとの違い、レッスンの種類をご紹介 ｜zen place（ゼンプレイス）',
      titleTemplate: '',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content:
            'ピラティスとは？起源・効果・ヨガとの違い、レッスンの種類をご紹介 ｜zen place（ゼンプレイス）',
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'ピラティスとは？Joseph Pilates（ジョセフ・ピラティス）氏が考案者したピラティスの起源・効果・ヨガとの違い、マットやマシン（機械）などレッスンの種類やzen placeのピラティスについいてご紹介します。',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'ピラティスとは？Joseph Pilates（ジョセフ・ピラティス）氏が考案者したピラティスの起源・効果・ヨガとの違い、マットやマシン（機械）などレッスンの種類やzen placeのピラティスについいてご紹介します。',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://www.zenplace.co.jp/og-pilates.jpg',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'ピラティス, レッスン種類, 効果, ピラティスの歴史, スタジオ, 体験',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://www.zenplace.co.jp/pilates/apropos',
        },
      ],
    };
  },
  components: {
    PageHeader,
    CtaLower,
    StudioList,
  },

  data() {
    return {
      headerImg,
      showCollapse: false,
      articles: [
        {
          img: '',
          title: '',
          content: '',
          url: '',
        },
      ],
      html: `
        <a
          href="#anchor1"
          class="scroll"
        >ピラティスとは？基本知識</a><br>
        <a
          href="#anchor2"
          class="scroll"
        >ピラティスの歴史</a><br>
       <a
          href="#anchor3"
          class="scroll"
        >日本におけるピラティスとzen placeの足跡</a><br>
        <a
          href="#anchor4"
          class="scroll"
        >ピラティスの効果</a><br>
       <a
          href="#anchor5"
          class="scroll"
        >ピラティスの種類（マシン・マット）</a>
        `,
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
            name: 'ピラティス',
            path: '/pilates',
          },
          {
            name: 'ピラティスとは',
          },
        ],
      };
    },
  },
  watch: {
    $route() {
      this.showCollapse = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/newvariables";

.p-pilates-about {
  #Breadcrumb {
    padding-top: 30px;
    background: $blue;
    color: #fff;

    a {
      color: #fff;
    }
    @include sp {
      padding-top: pv(16);
    }
    ul li {
      a,
      a:after,
      span {
        color: #fff !important;
      }
    }
  }

  h2 {
    background-color: inherit;
    z-index: 2;
    margin-top: -105px;
    padding-top: 65px;
    color: $blue;
    margin-bottom: 80px;
    @include sp {
      margin-bottom: pv(40);
      padding-bottom: pv(17) !important;
    }

    span.sub-ttl {
      display: block;
      font-size: 16px;
      margin-bottom: 20px;
    }
  }

  h3 {
    color: $blue;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 3px;
    padding-bottom: 20px;

    span.sub-ttl {
      display: block;
      font-size: 15px;
      margin-bottom: 15px;
    }
  }

  h4 {
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 1px;
    padding-bottom: 20px;
  }
  p {
    font-size: 15px;
    line-height: 2;
    margin-bottom: 20px;
    letter-spacing: 0.5px;
    color: #4e4e4e;
  }

  .accordion.sticky-top {
    margin-top: -14px;
    padding-top: 14px;
    padding-bottom: 10px;
    z-index: 3;
    background: transparent;
    cursor: pointer;

    @include sp {
      margin-top: -70px;
      padding-top: 70px;
    }

    span.filter-icon {
      display: inline-block;
      text-align: center;

      span {
        display: block;
        width: 14px;
        height: 2px;
        background-color: #fff;
        margin: 0 auto 2px;

        &:nth-child(2) {
          width: 9px;
        }
        &:nth-child(3) {
          width: 4px;
        }
      }
    }

    .card {
      background-color: transparent;
      border: none;
      cursor: pointer;

      .card-body {
        background-color: #e8edf2;
        border-bottom: 1px solid #cad4de;

        .card-text a {
          color: $blue;
          line-height: 1.6rem;
          padding: 13px 0;
          cursor: pointer;
          border-bottom: 1px solid #cad4de;
          display: block;

          &:last-child {
            border-bottom: none;
          }
        }
      }
    }
  }

  .sticky-h2 {
    color: #fff;
    display: block;
    position: sticky;
    background-color: $blue;
    z-index: 1;
    margin-top: -14px;
    padding-top: 14px;
    padding-bottom: 10px;
    cursor: pointer;

    @include sp {
      margin-top: -70px;
      padding-top: 70px;
    }
  }

  &-anchor {
    background: $blue;
    padding-bottom: 30px;

    @include sp {
      padding-bottom: pv(12);
    }

    .wrap {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      a {
        border-radius: 0;
        font-size: 14px;
        line-height: 1.8rem;
        width: 190px;

        @include sp {
          width: 45vw;
          margin: 0 1vw 1vw;
          font-size: 2.4vw;
        }
      }

      .btn-with-arrow {
        &::after {
          content: "";
          display: block;
          width: 0.7em;
          height: 0.7em;
          border-top: 2px solid #2e6eac;
          border-right: 2px solid #2e6eac;
          position: absolute;
          right: 0;
          left: 0;
          margin: auto;
          bottom: 10px;
          -webkit-transform: rotate(134deg);
          transform: rotate(134deg);
        }
      }
    }
  }

  &-intro {
    p.p-intro {
      color: $blue;
      font-size: 20px;
    }
  }

  &-benefits {
    background: #ececec;
  }
  &-benefits,
  &-origin,
  &-basics {
    padding: 80px 0 0;

    @include sp {
      padding: pv(40) 0;
    }

    .l-new-container {
      display: flex;
      padding-bottom: 80px;
      @include sp {
        padding-bottom: pv(40);
      }

      .content {
        width: 100%;
        margin-right: 60px;
        @media screen and (max-width: 870px) {
          margin-right: 0;
        }

        h3 {
          color: $blue;
          font-weight: bold;
          font-size: 20px;
          letter-spacing: 3px;
          padding-bottom: 20px;
        }

        a {
          @media screen and (max-width: 870px) {
            margin-left: auto;
            margin-right: auto;
            display: flex;
          }
        }

        div.ref-div {
          span {
            font-size: 13px;
            color: #555;

            a {
              color: #555;
              text-decoration: underline;
            }
          }
        }
      }

      .img {
        max-width: 50%;
        width: 100%;

        img {
          width: 100%;
        }
        @media screen and (max-width: 870px) {
          margin-bottom: 32px;
          max-width: 70%;
        }

        @include sp {
          max-width: 100%;
        }
      }
      @media screen and (max-width: 870px) {
        flex-direction: column-reverse;
        align-items: center;
      }
    }
  }

  &-pilates-yoga {
    padding: 80px 0 0;

    @include sp {
      padding: pv(40) 0;
    }

    .l-new-container {
      display: flex;
      padding-bottom: 80px;

      .content {
        width: 100%;
        margin-left: 60px;
        @media screen and (max-width: 870px) {
          margin-left: 0;
        }

        a {
          @media screen and (max-width: 870px) {
            margin-left: auto;
            margin-right: auto;
            display: flex;
          }
        }
      }

      .img {
        max-width: 50%;
        width: 100%;

        img {
          width: 100%;
        }
        @media screen and (max-width: 870px) {
          margin-top: 32px;
          max-width: 70%;
        }

        @include sp {
          max-width: 100%;
        }
      }
      @media screen and (max-width: 870px) {
        flex-direction: column-reverse;
        align-items: center;
      }
    }
  }

  .c-menspilates {
    margin-bottom: 80px;
  }

  .c-cta-trial {
    padding-bottom: 0 !important;
  }

  .c-btns {
    padding-top: 30px;
    margin-bottom: 60px;
  }
} // .p-pilates-about

.p-pilates-history {
  & & {
    .tab-on {
      display: none;

      @media screen and (max-width: 768px) {
        display: block;
      }
    }

    &-background,
    &-origin,
    &-newyork,
    &-contrology,
    &-junior,
    &-worldwide {
      background: #ececec;
      padding: 80px 0 0;

      @include sp {
        padding: pv(40) 0;
      }

      h4 {
        padding-top: 20px;
        padding-bottom: 5px;
      }

      h5 {
        font-weight: bold;
      }

      h6 {
        font-weight: bold;
        text-decoration: underline;
      }
      p {
        &:after {
          display: block;
          content: "";
          clear: both;
        }

        img {
          max-width: 520px;
          width: 50%;
          float: left;
          margin: 8px 40px 20px 0;

          @include sp {
            width: 100%;
            margin: 0 0 pv(20);
          }
        }
      }

      span {
        display: block;
        line-height: 2.3;
        font-size: 14px;
        margin-bottom: 20px;
      }
    }

    &-quote {
      display: flex;
      align-items: center;
      text-align: center;
      min-height: 600px;
      line-height: 2;
      padding: 40px 0;
      color: white;
      font-size: 40px;
      background: url("~assets/images/pilates/history/quote-bg.jpg") no-repeat
        center/cover;

      @include sp {
        font-size: pv(24);
        min-height: unset;
      }
    }
  } // .p-pilates-history

  .p-pilates-benefits {
    &-method {
      padding: 40px 0 80px;

      .l-new-container {
        display: flex;

        @media screen and(max-width: 830px) {
          flex-direction: column;
        }

        .content {
          width: 100%;
          margin-right: 60px;

          @media screen and(max-width: 830px) {
            margin-right: 0;
            margin-bottom: 32px;
          }
        }

        .img {
          max-width: 50%;
          width: 100%;

          img {
            width: 100%;
          }

          @media screen and(max-width: 830px) {
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
          }
        }
      }
    }

    &-posture,
    &-innermuscle,
    &-immunity,
    &-stress {
      padding: 80px 0;

      .desc {
        line-height: 2.3;
        margin-bottom: 32px;
      }
    }

    &-posture,
    &-immunity {
      background: #ececec;
    }

    &-voice {
      padding: 80px 0;

      @include sp {
        padding: 0 0 pv(40);
      }

      .desc {
        line-height: 1.8;
        margin-bottom: 60px;
      }
      .wrap {
        display: flex;
        justify-content: center;
        @include sp {
          display: block;
        }

        .single {
          width: 50%;

          &:first-child {
            margin-right: 40px;
          }

          img {
            display: block;
            width: 100%;
            margin-bottom: 40px;
          }

          h3 {
            font-size: 20px;
            color: $blue;
            font-weight: bold;
            letter-spacing: 5px;
            margin-bottom: 16px;
          }

          p {
            line-height: 2.3;
          }

          @include sp {
            width: 100%;
          }
        }
      }
    } // .p-pilates-benefits-voice
  } //.p-pilates-benefits

  // p-pilates-knowmore
}

.p-pilates-about {
  .p-pilates-knowmore {
    .c-column-three2-wrap {
      flex-wrap: wrap;
      @include tab {
        width: 482.33333vw;
      }
    }
  }
}
</style>
