<template>
  <div class="p-lp-rolldown">
    <section class="p-lp-rolldown-mv">
      <div class="container">
        <div class="copy-block">
          <h1>
            <p>
              Well-beingの実現を目指す
              ZEN PLACEと<br>
              最先端AI技術のEXAWIZARDSが共同開発！
            </p>
            <img
              src="~assets/images/info/rolldown/brand-logos.png"
              alt="zen place x EXAWIZARDS"
              class="d-block w-100 pb-4"
            >
            世界初！AIによる<br>
            ピラティス・ヨガ<br>
            背骨ムーブメント解析
          </h1>
        </div>
        <!-- <div class="cp-block">
          会員限定！<br>
          12月無料解析<br>
          受付中
        </div> -->
      </div>
      <div class="movie-bg">
        <video-background
          poster="/mv-bg.png"
          src="/movie_pc.mp4"
          :sources="[
            {src: '/movie_sp.mp4', res: 638, autoplay: true, poster: '/mv-bg_sp.png'}
          ]"
        />
      </div>
    </section>

    <section
      class="p-lp-rolldown-recommend bg-light-gray"
    >
      <div class="container">
        <div class="desc">
          <P class="p-text-center">
            ピラティス・ヨガは、背骨周りとコアの微細なインナーマッスルを使うことに効果の秘密があります。<br class="pc">特にピラティスは動きの質・正確性を重要視するエクササイズであり、<br class="pc">微細なムーブメントの質が心と身体の変化や効果に大きく関わってきます。<br lass="pc">>これまで定性的でしか評価できなかったピラティス・ヨガの動きをAI解析で正確に、誰がみてもわかるように可視化・数値化することで、<br class="pc">より質や正確性を重視したムーブメントの実践が可能になり、ピラティス・ヨガの効果を<br class="pc">今まで以上に早く、最大化できると考えました。
          </P>
        </div>
        <h2 class="text-center main-title">
          こんな方におすすめ
        </h2>
        <div class="row">
          <div class="col-12 col-md-4 mb-5">
            <div class="cards">
              <img
                src="~assets/images/info/rolldown/icon-beginner.png"
                alt="ピラティス初心者の方"
              >
              <span class="font-weight-bold txt-red">CASE1</span>
              <h3>ピラティス・ヨガ初心者の方<span /></h3>
              <p>
                ピラティス・ヨガを初めてみたいけど、
                できるか不安
              </p>
            </div>
          </div>
          <div class="col-12 col-md-4 mb-5">
            <div class="cards">
              <img
                src="~assets/images/info/rolldown/icon-pilates.png"
                alt="自宅で復習したい方"
              >
              <span class="font-weight-bold txt-red">CASE2</span>
              <h3>自宅で復習したい方<span /></h3>
              <p>
                自宅でも正しい動きで
                ピラティス・ヨガをしたい
              </p>
            </div>
          </div>
          <div class="col-12 col-md-4 mb-5">
            <div class="cards">
              <img
                src="~assets/images/info/rolldown/icon-arrow.png"
                alt="成長が見たい方"
              >
              <span class="font-weight-bold txt-red">CASE3</span>
              <h3>成長が見たい方<span /></h3>
              <p>ピラティス・ヨガの継続による成長度合いを知りたい</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="p-lp-rolldown-about">
      <div class="container">
        <h2 class="text-md-left text-center">
          背骨ムーブメント解析とは
        </h2>
        <div class="row">
          <div class="col-12 col-md-5 mb-5">
            <img
              src="~assets/images/info/rolldown/logo-zenandexa.png"
              alt="zen place x EXAWIZARDS"
              class="pc w-100 mx-auto py-5"
              style="max-width:350px;"
            >
            <img
              src="~assets/images/info/rolldown/logo-zenandexa_sp.png"
              alt="zen place x EXAWIZARDS"
              class="sp w-100 mx-auto pb-5"
              style="max-width:170px;"
            >
            <p>
              最先端研究結果・科学をもとに、テクノロジードリブンでシームレスな事業展開によりHolistic WellnessとWell-beingの実現を目指す株式会社ZEN PLACEと最先端AI技術とムーブメント解析において圧倒的な知見とピラティス・ヨガの理解があるエクサウィザーズ社が共同開発した背骨の動きを可視化するAIシステム。<br>
              <br>
              ピラティス・ヨガによる背骨の動きに特化し、AIによって解析する世界初のレッスンサポートシステムです。
            </p>
          </div>
          <div class="col-12 col-md-6 mb-5 ml-auto">
            <video
              style="width:100%; max-width:500px;"
              controls
              allowfullscreen
              poster=""
            >
              <source src="/rolldown_kan.mp4">
            </video>
          </div>
        </div>
      </div>
    </section>
    <section class="p-lp-rolldown-about-rolldown bg-light-gray">
      <div class="container">
        <h2 class="text-md-left text-center">
          <span>背骨ムーブメント解析第一弾</span><br>ロールダウン解析
        </h2>
        <div class="row">
          <div class="col-12 col-md-5 order-1 order-md-2 about-text mx-auto">
            <p>
              ロールダウンとは背骨を正しい位置へと戻し、体幹を鍛えるためのピラティスの基本動作の1つ。自分の身体に生じた変化、背骨の可動域の広がりや歪みの改善・解消などをチェックする指標ともなるエクササイズです。<br><br>
              立った状態で上体を曲げてゆっくりと背骨一骨一骨を順番に丸め、骨との骨の空間をとり背骨を伸ばし・戻すというシンプルな動作です。腹部や背骨を支える微細なインナーマッスルにアプローチ・強化するので、姿勢改善や背骨をしっかり伸ばしたり縮めたりすることで柔軟性が養われる効果が期待されます。<br><br>
              ロールダウン解析は、これまで定性的な評価でしか判断できなかったロールダウンの背骨の動きをAIの動画解析技術により可視化、５つの要素別に点数を算出し解析、評価結果をレポートとして提供します。
            </p>
          </div>
          <div class="col-12 col-md-6 order-2 order-md-1 rolldown-img">
            <img
              src="~assets/images/info/rolldown/rolldown.png"
              alt="ロールダウンとは？"
              class="d-block w-100 mx-auto"
            >
            <span />
          </div>
        </div>
      </div>
    </section>
    <section class="p-lp-rolldown-benefits">
      <div class="container">
        <h2>ロールダウン解析で得られる効果</h2>
        <div class="row">
          <div class="col-12 col-md-4 mb-5">
            <div class="benef-img">
              <img
                src="~assets/images/info/rolldown/effect1.png"
                alt="ロールダウンが可視化される"
                class="mx-auto w-100"
              >
              <span />
            </div>
            <h3>ロールダウンが可視化される</h3>
            <p>これまで数値化が難しかったロールダウンが、最新の技術で可視化されるようになりました。</p>
          </div>
          <div class="col-12 col-md-4 mb-5">
            <div class="benef-img">
              <img
                src="~assets/images/info/rolldown/effect2.png"
                alt="ロールダウンが可視化される"
                class="mx-auto w-100"
              >
              <span class="left" />
            </div>
            <h3>自分の動きを知ることができる</h3>
            <p>自分がどのようなロールダウンをしているのかを客観的に理解できるようになります。</p>
          </div>
          <div class="col-12 col-md-4 mb-5">
            <div class="benef-img">
              <img
                src="~assets/images/info/rolldown/effect3.png"
                alt="ロールダウンが可視化される"
                class="mx-auto w-100"
              >
              <span />
            </div>
            <h3>美しい身体と心づくりができる</h3>
            <p>効果的にピラティスを行うことが可能になり、美しい身体と心づくりに貢献します。</p>
          </div>
        </div>
      </div>
    </section>
    <section class="p-lp-rolldown-howto bg-light-gray">
      <div class="container">
        <h2 class="text-center">
          計測の仕方
        </h2>
        <div class="row">
          <div class="col-5 col-md-6">
            <img
              src="~assets/images/info/rolldown/step1.png"
              alt="ステップ１：スタジオで撮影"
              class="mx-auto w-100"
            >
          </div>
          <div class="col-7 col-md-6">
            <span class="step-ttl txt-red">STEP1</span>
            <h3>スタジオで撮影</h3>
            <p>zen place スタジオに設置してあるiPadでロールダウンを撮影します。</p>
          </div>
        </div>
        <div class="row">
          <div class="col-5 col-md-6">
            <img
              src="~assets/images/info/rolldown/step2.png"
              alt="ステップ２：スマートフォンから結果をチェック"
              class="mx-auto w-100"
            >
          </div>
          <div class="col-7 col-md-6">
            <span class="step-ttl txt-red">STEP2</span>
            <h3>スマートフォンから結果をチェック</h3>
            <p>お手持ちのスマートフォンから結果を確認できます。ご自宅や、お好きな場所でいつでもご自身のロールダウンの数値が見られます。</p>
          </div>
        </div>
      </div>
    </section>
    <section class="report">
      <div class="container">
        <h2 class="text-center">
          結果レポート
        </h2>
        <p class="p-text-center">
          マイページにアクセスし、評価結果をレポートで確認することができます。
        </p>
        <a
          href="https://www.zenplace.co.jp/upload/99624451/mypage_rooldown20221102_v2.png"
          class="rolldown-cta-btn mx-auto d-block"
        >サンプルはこちら
        </a>
      </div>
    </section>
    <section class="next-release">
      <div class="container">
        <h2 class="text-center">
          第二弾リリース予定
        </h2>
        <p class="next-release-text">
          背骨ムーブメント解析 第2弾として、2023年春に<br class="sp">「ペルビックカール解析」を導入予定です。
        </p>
      </div>
    </section>
    <section class="p-lp-rolldown-story">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <h2 class="txt-red">
              STORY
            </h2>
            <h3>
              ピラティス・ヨガの効果を最大化する<br class="pc">
              ために開発されたシステム
            </h3>
            <p>
              テクノロジードリブンでシームレスな事業展開によりHolistic WellnessとWell-beingの実現を目指す株式会社ZEN PLACEと最先端AI技術とムーブメント解析において圧倒的な知見とピラティス・ヨガの理解があるエクサウィザーズ社の共同開発により、世界初背骨の動きに特化しAI解析するレッスンサポートシステム「背骨ムーブメント解析」は誕生しました。<br>
            </p>
          </div>
          <div class="col-md-6 pc">
            <img
              src="~assets/images/info/rolldown/story.png"
              alt="ピラティスの効果を最大化するために開発されたシステム"
              class="w-100 mx-auto"
            >
          </div>
        </div>
        <div class="row story2">
          <div class="col-md-6 pc story2-img">
            <img
              src="~assets/images/info/rolldown/story2.jpg"
              alt="ピラティスの効果を最大化するために開発されたシステム"
              class="w-100 mx-auto"
            >
          </div>
          <div class="col-12 col-md-6">
            <p>
              ピラティス・ヨガは、背骨周りとコアの微細なインナーマッスルを使うことに効果の秘密があります。特にピラティスは他のトレーニングのように反復の回数ではなく、動きの質・正確性を重要視するエクササイズです。正しく効率よく動くことが心と身体の変化や効果に大きく関わっており、効果を最大化させるために、自分のムーブメント＝動きを知ることが重要です。<br>
              これまで「動きの質」はクライアント自身が感じるものやインストラクターの定性的な評価に委ねられる場合が多く、可視化・数値化できるものではありませんでした。<br>
              <br>
              「背骨ムーブメント解析」は、世界で初めてピラティス・ヨガの動きをAI解析で正確に、誰がみてもわかるように可視化・数値化しました。これまで以上に、より質や正確性を重視したムーブメントの実践を可能にし、ピラティス・ヨガの効果を今まで以上に早く、最大化し、ウィルビーイングなライフスタイルをサポートします。
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="p-lp-rolldown-price bg-blue text-white">
      <div class="container">
        <h2 class="text-center apply-text-title">
          お申し込み方法
        </h2>
        <div class="first-time-user mx-auto">
          <p class="font-weight-bold text-center ttl-p">
            zen place 初めての方
          </p>
          <div class="user-price first-time-user-price d-flex">
            <div class="price">
              <span class="d-block text-center">通常価格</span>
              <span class="strike-span">2,000</span><span class="yen">円</span>
            </div>
            <div class="arrow-price" />
            <div class="price-free">
              <strong>無料</strong>
            </div>
          </div>
          <p class="price-desc">
            体験レッスンをお申込みいただき、入会すると背骨ムーブメント解析を無料で受けられます
          </p>
          <a
            href="/welcome/schedule.php"
            class="rolldown-cta-btn mx-auto d-block"
          >体験レッスンを予約する</a>
        </div>
        <div class="zenplace-member mx-auto">
          <p class="font-weight-bold text-center ttl-p">
            zen place 会員の方
          </p>
          <div class="user-price zenplace-member-price d-flex mb-5">
            <div class="price">
              <span class="d-block text-center">通常価格</span>
              <span class="strike-span">2,000</span><span class="yen">円</span>
            </div>
            <div class="arrow-price" />
            <div class="price-free price-member">
              <div class="pv-price">
                <strong>年内無料</strong>
                <p>※背骨ムーブメント解析を体験で2週間無料</p>
              </div>
            </div>
          </div>
          <p class="price-desc">
            「ムーブメント解析 ロールダウン無料」でご予約またはスタジオスタッフまで
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'new',
  head() {
    return {
      title: '世界初！AIによるピラティス・ヨガ背骨ムーブメント解析',
    };
  },
  components: {
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
@import '~assets/scss/newvariables';

.p-lp-rolldown{

section{
  padding:60px 0;
}

div.container{
  max-width: 1000px;
  margin: auto;
}

h2, h3{
  font-weight:bold;
}

h2{
  font-size:30px;
  padding-bottom: 30px;

  @include sp{
    font-size:24px;
    padding-bottom: 30px;
  }
}

.txt-red{
  color:#E93842;
}

  &-mv{
    padding: 0!important;
    position: relative;
    height: 67vh;

    @include sp{
      height: 80vh;
    }

    .movie-bg {
      .vue-responsive-videobg {
        height: 67vh;
        padding: 0;
        @include sp {
          height: 80vh;
          padding: 0;
        }
      }
    }

    .container{
      position: absolute;
      left: 0;
      right: 0;
      z-index:2;

      @include sp{
        height: 80vh;
        padding: 18px;
      }

    }

    .copy-block{
      width: 513px;
      background: rgba(233, 56, 66, 0.6);
      color:#fff;
      position: relative;
      padding: 25px;
      top: 120px;

      @include sp{
        width: 100%;
        top:10%;
        margin: auto;
        padding: 20px;
      }

      h1{
        font-size:40px;
        line-height: 60px;
        font-weight: bold;
        padding-bottom: 20px;

        @include sp{
         font-size:28px;
         line-height: 40px;
         }

        img{
          max-width: 350px;
        }

        p {
          line-height: 36px;
        }
      }

      span{
        font-size: 20px;
        @include sp{
          font-size: 18px;
        }
      }

    }

    .cp-block{
      background: rgba(0, 111, 177, 0.7);
      color:#fff;
      font-weight: bold;
      font-size: 20px;
      padding: 40px;
      width: 206px;
      margin-left: auto;
      position:relative;
      top: -10px;

      @include sp{
        position: absolute;
        width: 166px;
        top: auto;
        bottom: 10%;
        right: 18px;
        padding: 20px;
        font-size: 18px;
      }

    }

  }

  &-recommend{
    .row{
      align-items: normal;

      span.txt-red{
        display: block;
        font-weight: bold;
        text-align:center;
        font-size: 20px;
        padding: 15px 0;
      }

      h3{
        font-size: 18px;
        text-align: center;

        span{
          background:#E93842;
          display: block;
          margin: 20px auto;
          width: 63px;
          height: 1px;

        }
      }

      div.cards{
        background: #fff;
        padding:50px 20px;

        @include sp{
        padding:30px 20px;
        }

        img{
          max-width: 85px;
          display:block;
          margin: auto;
        }

      }
    }

  }

  &-about{
    .row{
      align-items: end;
    }

  }

  &-about-rolldown{

    .about-text{
      padding-left: 20px;
      margin-top: 60px;

      @include sp{
       padding-left: 15px;
       margin-bottom: 30px;
       margin-top: 0;
      }
    }

    .rolldown-img{
      align-self: flex-start;
      position:relative;
      z-index: 1;
      margin-top: 70px;

      @include sp{
        margin-top: 0;
        margin-bottom: 30px;
      }

      img{
        position: relative;
        top:0;
        max-width: 450px;

      }
      span{
        position: absolute;
        bottom: -40px;
        left: 0;
        right: 0;
        width: 100%;
        height: 89px;
        background-color: #333;
        display: block;
        margin: auto;
        z-index: -1;
      }
    }

  }

  &-benefits{
     overflow-x:hidden;

    h3{
      font-size:20px;
      text-align: center;
      padding-bottom: 15px;
    }

    .benef-img {
      position:relative;
      text-align:center;
      margin-bottom: 70px;

      @include sp{
        margin-bottom: 40px;
        }

      img{
        position: relative;
        z-index: 1;
        max-width: 325px;

        @include sp{
          max-width: 100%;
        }
        }

        span{
        position: absolute;
        width: 350px;
        left: -23px;
        right: 0;
        height: 78px;
        display: block;
        margin: auto;
        z-index: -1;
        bottom: -45px;
        background-color: #619ac9;

          @include sp{
             width: 244px;
             left: auto;
             right: 0;
             bottom: -23px;
              height: 23px;

              &.left{
                left:0;
                right:auto;
              }
          }

        }

      }

  }

  &-howto{
    margin-bottom: 50px;
      @include sp{
        margin-bottom: 0px;
      }

    .row{
      max-width: 610px;
      margin: 40px auto;

      span.step-ttl{
        font-size:30px;
        display: block;
        margin-bottom: 30px;
        font-weight: bold;

        @include sp{
        font-size:18px;
        margin-bottom: 20px;
        }
      }

      h3{
        font-size: 20px;
      }

    }

  }

  &-story{
    @include tab {
      background: url('~assets/images/info/rolldown/story-bg.png')no-repeat center/cover;
    }

     @include sp {
    .container{
      padding: 30px 15px 80px;
      @include sp{
         padding: 15px;
      }

    h2{
      font-size: 60px;
      @include sp{
        font-size: 40px;
      }
    }
    h3{
      font-size: 20px;
      padding-bottom: 30px;
    }
    p{
      max-width: 400px;
    }

    div.col-md-6.pc{
      margin-top:120px;

      img{
        max-width:531px;
      }
    }
    }
    }
  }

  &-price{

     .container{
      max-width:650px;
     }

     p.ttl-p{
      border-bottom:1px solid #fff;
      font-size: 20px;
     }

    .user-price{

      justify-content: center;
      align-items: center;

      .price{
        font-size:48px;
        padding: 20px 30px;

          @include sp{
            font-size:30px;
            padding: 12px;
          }

        span.d-block.text-center{
          font-size:26px;
          @include sp{
            font-size:16px;
          }
        }

        span.yen{
          font-size:25px;
          @include sp{
            font-size: 16px;
          }
        }

        span.strike-span{
          position:relative;
          z-index: 1;

          &::before{
            content:'';
              background: #E93842;
              width: 150px;
              height: 3px;
              display: block;
              position: absolute;
              bottom: 25px;
              left: -6px;
              transform: rotate(15deg);
              z-index: -1;

              @include sp{
                width: 87px;
                bottom: 15px;
                left: 0px;
              }
          }
        }

      }

      .arrow-price{
        height: 0;
        width: 0;
        border-top: 15px solid transparent;
        border-left: 29px solid #fff;
        border-bottom: 15px solid transparent;

        @include sp{
              border-top: 10px solid transparent;
              border-left: 20px solid #fff;
              border-bottom: 10px solid transparent;
        }
      }

      .price-free{
        font-size:70px;
        padding: 20px 30px;

        @include sp{
          font-size:50px;
          padding: 10px;
        }

      }

      .price-free.price-member{
        font-size:44px;
        .pv-price {
          text-align: center;
        }
        p {
          font-size: 10px;
          margin: 0;
        }

        @include sp{
          font-size:24px;
        }
        .pv-price span.pv-block{
          font-size:14px;
          line-height: 15px;
          text-align: center;
          display: inline-block;
          font-weight:bold;
          background:#333;
          width:120px;
          padding: 8px 20px;
          margin-right: 15px;
          vertical-align: middle;

            @include sp{
             font-size:12px;
             display: inline-block;
             width: 85px;
             padding: 5px 8px;
             margin-bottom: 5px;
             }

             span.yen{
               background:none!important;
               font-size:25px;
               @include sp{
               font-size: 16px;
               }
             }
        }

        .pv-price.no-pv-price {
          line-height: 40px;

          @include sp{
            line-height: 20px;
            font-size: 20px;
          }

          span.pv-block{
            vertical-align: top;
          }

          span.yen{
               background:none!important;
               font-size:25px;

               @include sp{
               font-size: 16px;
               }
             }

        }

      }

      span.yen{
        background:none!important;
        font-size:25px;
      }

    }

    a{
      color:#fff;
      font-weight:bold;
      font-size:20px;
      background-color:#E93842;
      border:1px solid #E93842;
      text-align:center;
      max-width:247px;
      padding:15px;

      @include sp{
        max-width:330px;
        font-size: 22px;
    }

      &:hover{
        color:#E93842;
        background-color:#fff;
        opacity:1;
      }

    }
  }

}
// LP追記修正
.p-lp-rolldown-mv .copy-block h1 {
  padding-bottom: 0px;
}

h1, h2 {
  font-family: $mincho;
}

h2 {
  padding-top: 20px;
}

p {
  line-height: 30px;
}

.p-text-center {
  text-align: center;
  margin-bottom: 40px;
}
.copy-block p {
  font-size: 20px;
  font-family: initial;
  font-weight: 300;
  line-height: 40px;
  @media (max-width:480px) {
    font-size: 16px;
    line-height: 36px;
  }
}
.p-lp-rolldown-price a {
  font-size: 18px;
}
.first-time-user {
  margin-bottom: 60px;
}
.price-desc {
  text-align: center;
  margin-bottom: 30px;
}
.rolldown-cta-btn {
  @media (max-width:480px) {
    margin-top: 20px;
  }
}
.desc {
  margin-top: 10px;
}
.next-release-text {
  text-align: center;
}
.report a {
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    background-color: #E93842;
    border: 1px solid #E93842;
    text-align: center;
    max-width: 247px;
    padding: 15px;
    margin: 0 auto;
    font-size: 18px;
    @include sp {
      max-width: 330px;
    }
}
.next-release {
  background-color: #ececec;
}
.p-lp-rolldown-howto {
  margin-bottom: 0;
}
.story2 {
  margin-top: 50px;
}
.story2-img {
  margin-top: 0px !important;
}
.p-lp-rolldown-about-rolldown span {
  display: inline-block;
  font-size: 20px;
  margin-bottom: 15px;
}
.p-lp-rolldown-howto h3 {
  margin-bottom: 10px;
}
.p-lp-rolldown-story {
  h2 {
    font-size: 60px;
  }
  h3 {
    font-size: 26px;
    font-family: $mincho;
    margin-bottom: 20px;
  }
}
.p-lp-rolldown-recommend .p-text-center {
  @include tab {
    text-align: left;
  }
}
// 料金箇所デザイン微調整
.p-lp-rolldown-price {
  .font-weight-bold {
    width: 70%;
    margin: 0 auto;
    background-color: #fff;
    color: #2E6EAC;
    padding: 5px 0;
    @include tab {
      width: 100%;
    }
  }
}
.zenplace-member-price {
  margin-bottom: 0 !important;
}
</style>
