<template>
  <div>
    <PageHeader
      title="マシンピラティス"
      :img="headerImg"
    />
    <Breadcrumb :breadcrumbs="breadcrumbs" />
    <div class="p-toppage">
      <div class="bg-white">
        <div class="container pt-2 pb-3">
          <p class="c-text">
            マシンピラティスは専用のマシンを使ってエクササイズを行います。マシンは筋肉の強化や、身体の使い方をより正確に学ぶ事が出来ます。<br>
            <br>
            マシンの使用は、まず、個人の身体的特徴や動き、目的に合わせて使うマシンを選択します。リフォーマーやキャディラック、ワンダーチェアーなどは、バネの重さや角度を細かいレベルで微調整します。<strong>器具のサポートがあることで、身体を無理なく動かすことができるため、ピラティス初心者の方にもおすすめです。</strong>
          </p>
        </div>
      </div>
      <div class="nav-anchor container">
        <ul>
          <li>
            <nuxt-link to="#benefits">
              マシンピラティスの効果
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="#machines"
            >
              ピラティスマシンの種類
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#f2-system">
              F2システム
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#lessons">
              マシンのレッスン
            </nuxt-link>
          </li>
          <li>
            <a
              href="/welcome/schedule.php"
            >
              体験レッスンを予約</a>
          </li>
        </ul>
      </div>

      <b-carousel
        id="carousel-fade"
        fade
        :interval="3000"
        img-width="1024"
        img-height="480"
        class="pt-5"
      >
        <b-carousel-slide
          img-src="~assets/images/pilates/machine/f2-system-1.jpg"
        />
        <b-carousel-slide
          img-src="~assets/images/pilates/machine/f2-system-2.jpg"
        />
        <b-carousel-slide
          img-src="~assets/images/pilates/machine/machine-01.jpg"
        />
        <b-carousel-slide
          img-src="~assets/images/pilates/machine/machine-03.jpg"
        />
        <b-carousel-slide
          img-src="~assets/images/pilates/machine/machine-02.jpg"
        />
      </b-carousel>

      <section
        class="c-pilates-point pb-md-4 pt-4 pt-md-6"
      >
        <div class="container pb-4">
          <h3 class="c-heading pt-5 text-left text-md-center pb-3">
            zen placeのマシンピラティス３つの強み
          </h3>
          <div class=" d-flex flex-wrap">
            <div class="point-item">
              <figure>
                <img
                  src="~assets/images/pilates/reformergroup/img-point03.png"
                  loading="lazy"
                  alt="600種類ものエクササイズの中から厳選！"
                >
              </figure>
              <div class="point-item-contents">
                <img
                  src="~assets/images/pilates/reformergroup/icn-point01.png"
                  alt="POINT1"
                  class="icn-point d-block mx-auto"
                >
                <h3>上質なマシンで、身体のつながりを深く感じる。</h3>
                <p>身体を最大限に動かすためには使用するマシンにもこだわりを。<br>ピラティスをとことん追求し開発されたマシンだからこそ、多様な身体に合わせるため何段階にも調整でき、ムーバー（ピラティスをする人）がより身体の動きに集中できるよう、静かで滑らかに可動するつくりになっています。</p>
              </div>
            </div>

            <div class="point-item">
              <figure>
                <img
                  src="~assets/images/pilates/reformergroup/img-point01.png"
                  loading="lazy"
                  alt="選べる！レッスンのタイプ"
                >
              </figure>
              <div class="point-item-contents bg-even">
                <img
                  src="~assets/images/pilates/reformergroup/icn-point02.png"
                  alt="POINT2"
                  class="icn-point d-block mx-auto"
                ><h3>600種類ものエクササイズの中から厳選！</h3>
                <p>ストレッチのようなものからしっかり負荷をかけるワークまで、様々なレパートリーから厳選したエクササイズを行います。</p>
              </div>
            </div>
            <div class="point-item">
              <figure>
                <img
                  src="~assets/images/pilates/reformergroup/img-point02.png"
                  loading="lazy"
                  alt="100箇所以上あるスタジオのほとんどで受けられる！"
                >
              </figure>
              <div class="point-item-contents">
                <img
                  src="~assets/images/pilates/reformergroup/icn-point03.png"
                  alt="POINT3"
                  class="icn-point d-block mx-auto"
                >
                <h3>100箇所以上あるスタジオのほとんどで受けられる！</h3>
                <p>こんなにたくさんのスタジオがあるのはzen placeだけ。家の近くで、出張先で、好きなタイミングで受けられます。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="machine-benefits"
      >
        <div class="container pb-5">
          <div class="my-5">
            <div class="">
              <h3 class="c-heading pt-5 text-left text-md-center">
                ピラティスマシンを使うメリット
              </h3>
              <p class="c-text">
                マシンピラティスは上級者向けのイメージがありますが、ピラティス初心者の方にもおすすめです。<br>
                自分の力だけを使って動くマットピラティスは筋力アップにとても効果的である一方、身体を動かすことに力を出し尽くしてしまい、背骨や骨盤などへ意識を向けることが難しいなんてことも。<br>
                マシンピラティスなら、無駄な力をかけることなく全身の隅々にまで意識を向けながら、なめらかに動くことができます。
              </p>
            </div>
            <div class="mt-5 text-center">
              <video
                style="width:100%; max-width:720px;"
                controls
                allowfullscreen
                poster="/machine/chieko_rollup.jpg"
              >
                <source src="https://media.zen-jp.info/videos/movie/public/studio/other/rollup_chieko.mp4/play_high.mp4">
              </video>
            </div>
          </div>
        </div>
      </section>

      <section
        id="benefits"
        class="bg-light-gray pt-3 pb-5"
      >
        <div class="container pt-3">
          <h2
            class="c-heading text-left text-md-center pt-5"
          >
            マシンピラティスの効果
          </h2>
          <div class="pb-5">
            <p class="c-text text-left">
              マシンを使って様々な方向に身体を動かすことで可動域を広げていき、同時に体幹や体の軸を鍛え、安定性と柔軟性を得ることができます。
              普段意識しにくい細部の筋肉（インナーマッスル）を使うため、初めてマシンピラティスをされる方は、意識したことのない筋肉を使うことに驚かれるかもしれません。
            </p>
          </div>
          <div class="pb-5">
            <p class="c-text pb-3">
              <strong>インナーマッスルの強化</strong><br>
              マシンピラティスでは、姿勢を維持するために必要なインナーマッスルを鍛えます。
            </p>
            <p class="c-text pb-3">
              <strong>体調の改善</strong><br>
              負荷・補助を調整できるため、自分のペースで筋肉を鍛えて体調不良（肩こり、腰痛、頭痛など）の改善に役立てることができます。
            </p>
            <p class="c-text pb-3">
              <strong>姿勢の改善</strong><br>
              インナーマッスルが鍛えられると身体のバランスが整って姿勢改善につながり、正しい姿勢を維持できるようになります。
            </p>
            <p class="c-text pb-3">
              <strong>むくみや冷え性改善</strong><br>
              ピラティスのムーブメントと呼吸法で身体の歪みをなくし、多くの酸素を身体に取り込みながら運動することで、血流が改善されます。
            </p>
            <p class="c-text pb-3">
              <strong>基礎代謝の向上</strong><br>
              マシンピラティスは全身の筋肉を鍛えるものなので、全身の筋肉量が上がって基礎代謝の向上にもつながります。
            </p>
            <p class="c-text pb-3">
              <strong>前向きなマインドに</strong><br>
              ピラティスのエクササイズには自律神経を整える効果もあります。<br>
              脳と全身のつなぐ神経が活発になるため、<span class="highlight">身体だけでなく脳の状態、心の状態を良くしていけます。</span>
            </p>
          </div>
        </div>
      </section>

      <CtaLower />
      <section
        id="machines"
        class="pb-5 bg-white"
      >
        <div class="container pt-5">
          <h2

            class="c-heading text-left text-md-center my-5"
          >
            ピラティスマシン<br class="sp">（機械）の種類
          </h2>

          <div class="pt-5 row">
            <div class="col-12 col-md-6 pb-5 mb-5">
              <img
                src="~assets/images/pilates/machine/reformer-img.jpg"
                alt="ピラティス専用マシン リフォーマー"
                class="mx-auto mx-lg-0 px-0 pb-3 col-12 pb-3"
              >
              <div class="">
                <h3>リフォーマー</h3>
                <p class="c-text pb-5">
                  身体をリフォーム（改良）できる万能なマシンという事からその名がついたピラティスの代表的なマシンで、最も多くのピラティスエクササイズを行えることが特徴。<br>
                  タイヤ付きのベッドのようなイメージで動くマシンで、足元についているバネを伸ばしたり縮めたりすることで寝た状態でも能動的に運動が行えます。<br>
                  足腰のみならず、体幹の強化、局所的な部位のケア、全身のコンディショニングまで、様々なポジションであらゆるアプローチができるため、どんな目的にも応じてすべての方に最適なトレーニングを提供することができます。
                </p>

                <div class="mb-3 text-center">
                  <video
                    style="width:100%; max-width:500px;"
                    controls
                    allowfullscreen
                    poster="/machine/movie-reformer.jpg"
                  >
                    <source src="https://media.zen-jp.info/videos/movie/public/studio/other/reformer.mp4/play_high.mp4">
                  </video>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 pb-5 mb-5">
              <img
                src="~assets/images/pilates/machine/cadillac-img.jpg"
                alt="ピラティス専用マシン キャデラック"
                class="mx-auto mx-lg-0 px-0 pb-3 col-12"
              >
              <div class="pb-5">
                <h3>キャデラック</h3>
                <p class="c-text pb-5">
                  ジョセフ・ピラティス氏が最初に考案したと言われているピラティスのマシン。<br>
                  アメ車のキャディラックのように大きく、さまざまな装備が整っていることから「キャデラック」と名付けられた、ピラティスで最も大きなマシンです。<br>
                  第一次世界大戦中、戦争で負傷した兵士のリハビリを行うために病院のベッドを改造して作られた為、見た目はベッドそのもの！<br>
                  身体を支えてくれるバーや軽い負荷をかけられるバネ、脚をつるす台などを取り付けることで、起き上がるのが難しい状態でも安全にトレーニングする事を可能にしました。
                </p>

                <div class="mb-3 text-center">
                  <video
                    style="width:100%; max-width:500px;"
                    controls
                    allowfullscreen
                    poster="/machine/movie-cadillac.jpg"
                  >
                    <source src="https://media.zen-jp.info/videos/movie/public/studio/other/cadillac.mp4/play_high.mp4">
                  </video>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-md-6 pb-5 mb-5">
              <img
                src="~assets/images/pilates/machine/wunda-img2.jpg"
                alt="ピラティス専用マシン ワンダチェア"
                class="mx-auto mx-lg-0 px-0 pb-3 col-12"
              >
              <div class="">
                <h3>ワンダチェア</h3>
                <p class="c-text pb-5">
                  ジョセフ・ピラティスが小さなアパートに住むクライアントのために考案したと言われている椅子型のマシン。<br>
                  他のマシンと比べて小ぶりですがエクササイズバリエーションは豊富！脚や股関節を強化するフットワークから腹部で身体を支える腹筋のワーク、肩や腕のインナーマッスルを鍛えるアームワークなど、細かい部位をより細かく正確に動かすことが求められます。中級者以上の方に最適なマシンです。
                </p>

                <div class="mb-3 text-center">
                  <video
                    style="width:100%; max-width:500px;"
                    controls
                    allowfullscreen
                    poster="/machine/movie-chair.jpg"
                  >
                    <source src="https://media.zen-jp.info/videos/movie/public/studio/other/chair.mp4/play_high.mp4">
                  </video>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 pb-5 mb-5">
              <img
                src="~assets/images/pilates/machine/barrel-img.jpg"
                alt="ピラティス専用マシン ラダーバレル"
                class="mx-auto mx-lg-0 px-0 pb-3 col-12"
              >
              <div class="">
                <h3>ラダーバレル</h3>
                <p class="c-text pb-5">
                  ラダー（はしご）とバレル（樽）が一体となったマシン。<br>
                  ラダーの上に乗って背骨を動かしたり、バレルの上に脚を置いてハムストリングや股関節のストレッチをすることができます。<br>
                  身長に合わせてラダーとバレルの距離を調整できるので、難易度も自由自在。<br>
                  多くのバレエダンサーから好まれ、パフォーマンス向上に役立っています。
                </p>
                <div class="mb-3 text-center">
                  <video
                    style="width:100%; max-width:500px;"
                    controls
                    allowfullscreen
                    poster="/machine/movie-barrel.jpg"
                  >
                    <source src="https://media.zen-jp.info/videos/movie/public/studio/other/barrel.mp4/play_high.mp4">
                  </video>
                </div>
              </div>
            </div>
          </div>

          <div class="row pt-5">
            <div
              class="col-12 col-md-5"
              style="border:none;"
            >
              <img
                src="~assets/images/pilates/machine/spine-img.jpg"
                alt="ピラティス専用マシン スパインコレクター"
                class="align-self-start mx-auto mx-lg-0 px-0 pb-3 col-12"
              >
            </div>
            <div class="col-12 col-md-7 pb-5">
              <h3>スパインコレクター</h3>
              <p class="c-text pb-5">
                横から見るとクジラ！？のような丸い曲線が可愛らしいピラティスマシンの一種です。<br>
                まさにスパイン（背骨）をコレクター（正す）ために考案されたフォルムでこのカーブに沿って背骨を丸める・反らせる・曲げる・捻る動作が可能。<br>
                背骨の柔軟性、肩甲骨の可動域を向上させるエクササイズが多数行えます。<br>
                ピラティスの中でも小さいマシンなので場所を選ばず使えることから、ご自宅でもお気軽に肩こり、腰痛の解消＆姿勢改善が行えます。
              </p>
              <div class="mb-3 text-center">
                <video
                  style="width:100%; max-width:500px;"
                  controls
                  allowfullscreen
                  poster="/machine/movie-spine.jpg"
                >
                  <source src="https://media.zen-jp.info/videos/movie/public/studio/other/spinecorrector.mp4/play_high.mp4">
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="f2-system"
        class="bg-light-gray f2-system py-5"
      >
        <div class="container pb-5">
          <div class="my-5">
            <div class="">
              <h3 class="c-heading text-left text-md-center">
                F2システムとは
                <p class="c-text text-left text-md-center pt-3">
                  <strong>ピラティスムーブメントの<br class="sp">革新的な形状と機能</strong>
                </p>
              </h3>
              <p class="c-text">
                F2 システムは、BASI Systems ピラティス機器の心臓部です。<br>
                ピラティス ムーブメントの 1 イノベーションであり、スプリング角度と抵抗設定で前例のない汎用性と精度を提供します。<br>
                スプリングは、リフォーマー、キャデラック、バレル、チェア、スパイン コレクターの複数のポートに取り付けることができます。<br>
                複数のF2システムを同時に使用して、エキサイティングな新しいレパートリーの可能性を刺激することができます。<br>
                レバーはハンドルとしても機能し、体重負荷エクササイズに最適な位置で手首と肩をサポートします。<br>
                BASI Systems 機器には、F2 システムへのシームレスなアップグレードに対応するためのポートが用意されています。<br>
                ポートカバーを取り外し、F2 ソケットを挿入するだけで、ピラティスの動きの新しい精度と流れを探求する準備が整います。
              </p>
              <p class="pt-4 c-text">
                <strong>F2システムの強み</strong>
              </p>
              <p class="c-text">
                <span class="sub-title">1.強くて頑丈なマシン</span><br>
                皮などの素材に気を使っています。高級ブランド（Gucciなど）と同じ品質、だからこそ、マシン上で膝をついたときの感触がほかのマシンとは異なります（土台の木の硬さを感じません。他社は経年劣化で気の感触を感じます＝痛くなります。）<br><br>

                <span class="sub-title">2.細かく調整できます</span><br>
                BASIのマシンはアタッチメントで高身長の人にも合わせてムーブメントを行うことが可能です。クラシカルなマシンだと、調整が出来ずにマシンを使用できる人が限定されてしまいます。ギアを細かく調整ができ、だからこそ、アメリカでは理学療法士からのBASIマシン人気が高いです。
              </p>
              <p class="pt-4 c-text">
                <strong>アクセサリ パッケージ</strong>
              </p>
              <p class="c-text">
                フルアクセサリー パッケージには、イエロー スプリング (2)、ロング イエロー スプリング (2)、カラビナ (4)、ネオプレン ハンドル (2)、アルミニウム ハンドル (2) が含まれます。単品もご用意しております。
              </p>
              <p class="pt-4 c-text">
                <strong>コネクタは、機器に同梱されている</strong>
              </p>
              <p class="c-text">
                F2 システム コネクタは、機器に同梱されている BASI カバーの代わりになります。コネクタを機器の準備されたポートに接続し、F2 システム レバーを取り付けるだけで、この革新的なピラティスの動きを体験する準備が整います。(F2 システム コネクタは、アーム チェア バレルに既に含まれています。)
              </p>
            </div>
          </div>
          <!-- 動画 -->
          <div class="ytb-content">
            <iframe
              loading="lazy"
              class="ytb-iframe"
              src="https://www.youtube.com/embed/bzHBR5dD0is"
              title="zen placeのスタジオってどんなスタジオ？スタジオだけに目を向けて紹介！"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>
      </section>

      <section
        id="lessons"
        class="py-5 bg-white"
      >
        <div class="container pt-5">
          <h2
            class="c-heading text-left text-md-center"
          >
            マシンピラティスの<br class="sp">レッスン
            <p class="c-text text-left text-md-center pt-3">
              <strong>マシンピラティスのレッスンはグループでも、プライベートでも受講可能</strong>
            </p>
          </h2>
          <div class="row">
            <div class="col-12 col-md-6 my-5">
              <img
                loading="lazy"
                src="~assets/images/pilates/machine/machine-group.jpg"
                alt="リフォーマーグループレッスンをやっている女性の写真"
                class="w-100 d-block mx-auto pb-3"
              >
              <h3 class="pb-3">
                Reformer Group
                <span class="d-block">リフォーマーグループ</span>
              </h3>
              <p class="c-text pb-3">
                ピラティス専用マシーンのリフォーマーを使った少人数制のグループレッスンです。
                マシンの扱い方やピラティス特有の動き、呼吸を学ぶ「Beginnerレッスン」もありますので初心者でもとても安心です。
              </p>

              <nuxt-link
                to="/classes/reformergroup"
                class="btn-blue_border"
              >
                リフォーマーグループについて
              </nuxt-link>
            </div>
            <div class="col-12 col-md-6 my-5">
              <img
                loading="lazy"
                src="~assets/images/pilates/machine/machine-pv.jpg"
                alt="ピラティスマシンプライベートをやっている女性の写真"
                class="w-100 d-block mx-auto pb-3"
              >
              <h3 class="pb-3">
                Machine Private
                <span class="d-block">プライベート</span>
              </h3>
              <p class="c-text pb-3">
                その日の身体の状態や、個人のレベル、目的など、個々のニーズに合わせてレッスンを組み立てていくことが最大の特徴です。<br>
                グループレッスンで気づかなかった自分の動きの癖や、動きの修正も、適時、丁寧に指摘していくため、ピラティスの動きを短期間で上達させることができます。
              </p>
              <nuxt-link
                to="/pilates/private"
                class="btn-blue_border"
              >
                プライベートレッスンについて
              </nuxt-link>
            </div>
          </div>
        </div>
      </section>

      <section
        class="c-pilates-about mt-5"
      >
        <div class="l-new-container d-block">
          <h2 class="c-heading text-center">
            よくある質問
          </h2>
          <dl class="c-pilates-faq-box">
            <dt><span class="faq-box-icn">Q</span><span class="faq-box-cont">マシンピラティスが初めてでもできますか？</span></dt>
            <dd>
              <span class="faq-box-icn">A</span><span class="faq-box-cont">初心者でも大丈夫です！まずは初級のクラスをご受講ください。リフォーマーの使い方、ベーシックな動きを覚えていただけます。</span>
            </dd>
          </dl>
          <dl class="c-pilates-faq-box">
            <dt><span class="faq-box-icn">Q</span><span class="faq-box-cont">リフォーマーグループはマシンを使ったプライベートレッスンとはどう違うのですか？</span></dt>
            <dd>
              <span class="faq-box-icn">A</span><span class="faq-box-cont">他の参加者と共に動くことで、一緒に頑張ろうといった、次のレベルまでチャレンジしようという諦めない気持ちが生まれます。体幹はもちろんのこと足から手まで全身をカバーする動きを行いますので、偏りのない効率的なコンディショニングが可能となります。<br>
                プライベートレッスンと併せて受講いただくことでマシンピラティスの効果をより実感いただけます。</span>
            </dd>
          </dl>
          <dl class="c-pilates-faq-box">
            <dt>
              <span class="faq-box-icn">Q</span><span class="faq-box-cont">マシンのプライベートレッスンを1年ほど受講しているためマシンには慣れていますが、リフォーマーグループレッスンは初めてです。<br>
                その場合はどのクラスがおすすめですか？</span>
            </dt>
            <dd>
              <span class="faq-box-icn">A</span><span class="faq-box-cont">リフォーマーグループレッスンは、マシンプライベートレッスンとは違ってご自身でマシンの調整をしていただきます。マシンの使い方を知っていただくためにもまずは初級のレッスンの受講をおすすめします。<br>プライベートレッスンとグループレッスンではまた違った気づきを得られますので、ぜひその違いを楽しんでくださいね。</span>
            </dd>
          </dl>
        </div>
      </section>
      <div class="container pb-5">
        <nuxt-link
          to="/pilates"
          class="col-12 p-3 my-5 c-button font-weight-normal c-button--border"
          style="max-width:300px;"
        >
          ピラティスTOPに戻る
        </nuxt-link>
      </div>
    </div>
    <StudioList />
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue';
import StudioList from '~/components/studios/StudioList.vue';

const headerImg = require('@/assets/images/pilates/machine/header.jpg');

export default {
  head() {
    return {
      title: 'マシンピラティス',
      meta: [
        { hid: 'description', name: 'description', content: 'マシンピラティスは専用のマシンを使ってエクササイズを行います。マシンは筋肉の強化や、身体の使い方をより正確に学ぶ事が出来ます。器具のサポートがあることで、身体を無理なく動かすことができるため、ピラティス初心者の方にもおすすめです。' },
        { hid: 'keywords', name: 'keywords', content: 'ピラティス専用マシン, マシンピラティス, マシン, ピラティス, ゼンプレ' },
      ],
    };
  },
  layout: 'new',
  components: {
    PageHeader,
    StudioList,
  },
  data() {
    return {
      headerImg,
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
            name: 'マシンピラティス',
          },
        ],
      };
    },
  },
};
</script>

<style lang="scss">
@import "~assets/scss/newvariables";
@import url('https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@500;700&display=swap');
h1, h2, h3, h3, h5 {
  font-family: $mincho;
}

p {
  strong {
    font-size: 2rem;
  }
  .sub-title {
    font-weight: bold;
  }
}

.container {
  width: 100%;
  max-width: 1000px;
}

.c-pilates-jumbo { background-image: url(~assets/images/pilates/machine/img_hero.jpg); background-repeat: no-repeat; background-size: cover; background-position: center; height: 400px; padding: 7em; color: white; font-weight: 800; font-size: 2em; text-shadow:0px 0px 6px #555;}
.p-toppage .c-heading span { font-size: 1.6rem; line-height: 1.5;}
.p-toppage .c-text {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2;
}
.contents-navi li .btn:hover { border-bottom: 1px solid #0066a4;}

.t-blue{color:#0066a4; }

.c-button{padding:15px; font-size:1.8rem;}

// .d-flex { flex-wrap: wrap; }

#sec2 h3{color:#535353; padding-bottom:20px;}
#sec2 h3 span{font-size:1.6rem; padding-top:15px;}

#sec2 p strong{font-size:18px; color:#0066a4;}
span.highlight{background:linear-gradient(transparent 50%, #fffab4 60%);}

#carousel-fade{
  max-width:970px;
  margin:auto;
}

.c-pilates-point {

.point-item {
  width: 33.3333%;

  @media screen and (max-width: 870px) {
    width: 100%;
  }

  figure {
    margin: 0;

    img {
      max-width: 100%;
      min-height: 290px;
      object-fit: cover;
    }
  }

  .point-item-contents {
    background-color: #D3E2E4;
    padding: 30px;
    min-height: 510px;

    @media screen and (max-width: 870px) {
      padding: 15px;
      min-height: auto;
    }

    .icn-point {
      max-width: 100px;
      margin-top: -50px;
    }

    @media screen and (max-width: 870px) {
      padding: 15px;
      min-height: auto;
    }

    h3 {
      font-size: 2.4rem;
      line-height: 1.6;
      margin-bottom: 1.4rem;
    }

    p {
      font-size: 1.6rem;
      line-height: 1.75;
    }
  }

  .bg-even {
      background-color: #E8F1F3;
    }

}

}

 .c-pilates-faq-box {
        margin: 0 auto;
        max-width: 898px;

          dt{
            display: flex;
            align-items: center;
            padding: 20px 40px;
            background-color: #EAE8D8;

            @media screen and (max-width: 480px){
              padding: 4%;
            }

          }

          dd{
            display: flex;
            margin-bottom: 0;
            padding: 20px 40px;
            background-color: #F9F8EF;

            @media screen and (max-width: 480px){
              padding: 4%;
            }

          }

          .faq-box-icn{
            width: 75px;
            font-weight: 700;
            font-size: 4rem;

            @media screen and (max-width: 480px){
              width: 15%;
            }
          }

          .faq-box-cont{
            width: 80%;
            font-weight: normal;
            font-size: 1.6rem;
          }

        }

@media only screen and (max-width: 991px){
  .title-underlined { font-size: 2rem;}
  .title-sub { font-size: 2rem;}
  .c-pilates-jumbo { padding: 7em 1em}
  .contents-navi { text-align: center;}
  .contents-navi li { width: 100%;}
}

.intro-btn a{
  font-size:18px;
}

.nav-anchor {
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 2em;
  ul {
    display: flex;
    justify-content: space-between;

    padding: 0;
    @include tab {
      flex-wrap: wrap;
    }
    li {
      border: 1px solid $blue;
      margin-bottom: 1em;
      padding: 0.8em 0;
      text-align: center;
      width: 19%;
      @include tab {
        width: 48%;
      }
      a {
        color: $blue;
        font-size: 15px;
        @include sp {
          font-size: pv(12);
        }
      }
    }
  }
}

</style>
