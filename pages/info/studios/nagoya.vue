<template>
  <div class="p-studionewstop mx-auto">
    <section class="header-ban mt-0 c-section--blue">
      <h1 class="text-center py-5 mb-0">
        名古屋でピラティス
        <span class="pt-4 d-block">マット・マシンピラティス専門スタジオ</span>
      </h1>
    </section>

    <section class="py-5">
      <div class="container">
        <p
          class="pt-3 pb-5 mx-auto"
          style="max-width:800px;"
        >
          名古屋駅周辺でマット・マシンピラティスをするならピラティス専門スタジオzen place pilates!<br>
          zen placeのピラティススタジオは少人数のマットグループレッスンとマシンピラティスのマンツーマン・プライベートレッスンを受講できます。<br>
          初心者から、インストラクターを目指す方まで、様々なレッスンで学びながら楽しめます！
        </p>

        <h2 class="py-3 ext-center title-underlined">
          スタジオ情報
        </h2>
        <div class="row pt-3 pb-5 studio-list">
          <div class="col-12 col-md-5">
            <img
              loading="lazy"
              src="~assets/images/info/studios/nagoya/meieki.jpg"
              alt="名古屋・名駅スタジオのピラティスマシンの写真"
              class="w-100 d-block mx-auto pb-3"
            >
          </div>
          <div class="col-12 col-md-7">
            <div class="studio-info">
              <h3><span class="d-block">マットピラティス・マシンピラティス</span>名駅 スタジオ</h3>
              <p class="py-3">
                <b>住所:</b> 〒450-0002<br>
                愛知県 名古屋市中村区名駅四丁目26-10 名駅ファーストビル6B<br>
                <b>TEL:</b> 052-526-3825<br>
                <b>E-mail:</b> nagoya.pilates2@zenplace.co.jp<br>
                <b>営業時間:</b><br>
                月〜金 9:00-22:00<br>
                土日祝 7:00-16:00
              </p>
            </div>
            <div class="studio-access pb-5">
              <h4 class="">
                アクセス
              </h4>
              <p>
                名古屋駅より1分
              </p>
              <studio-map
                :studio="studio1"
              />
            </div>
            <nuxt-link
              class="studio-btn mx-auto"
              to="/studios/pilates-meieki"
            >
              スタジオページへ
            </nuxt-link>
          </div>
        </div>
        <div class="row py-5 studio-list">
          <div class="col-12 col-md-5">
            <img
              loading="lazy"
              src="~assets/images/info/studios/nagoya/sakae.jpg"
              alt="名古屋・栄スタジオのピラティスマシンの写真"
              class="w-100 d-block mx-auto pb-3"
            >
          </div>
          <div class="col-12 col-md-7">
            <div class="studio-info">
              <h3><span class="d-block">マットピラティス・マシンピラティス</span>栄 スタジオ</h3>
              <p class="py-3">
                <b>住所:</b> 〒460-0008<br>
                愛知県 名古屋市中区栄 ２－４－１２ TOSHIN HONMACHIビル５階<br>
                <b>TEL:</b> 052-201-7560<br>
                <b>E-mail:</b> sakae.pilates2@zenplace.co.jp<br>
                <b>営業時間:</b><br>
                月〜金 7:00-20:00<br>
                土日祝 7:00-16:00
              </p>
            </div>
            <div class="studio-access pb-5">
              <h4 class="">
                アクセス
              </h4>
              <p>
                栄駅より11分・伏見駅より5分
              </p>
              <studio-map
                :studio="studio2"
              />
            </div>

            <nuxt-link
              class="studio-btn mx-auto"
              to="/studios/pilates-sakae"
            >
              スタジオページへ
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <CtaLower />
    <section class="py-5 p-price-table bg-light-gray">
      <div class="l-new-container py-5">
        <h2 class="text-center pb-3 title-underlined">
          スタジオ料金
        </h2>
        <p class="text-left mb-5">
          zen placeは、わかりやすい月額料金＋チケット制。<br class="d-sp-none">
          同じグレード内なら、どのエリアでも通い放題です。<br>
          ピラティス、ヨガの様々なレッスンを、<br class="d-none d-tab-block d-sp-none">あなたの好きな時好きな場所でいつでも、ご予約いただけます。
        </p>
        <div class="text-center">
          <nuxt-link
            to="/price"
            class="d-block mx-auto btn-light py-3 px-5"
            style="cursor: pointer; max-width:400px;"
          >
            料金ページへ
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="py-5 machine-pilates c-section--gray">
      <div class="container pb-5">
        <h2 class="text-center pt-5 pb-3 title-underlined">
          ピラティスレッスン詳細
        </h2>
        <div class="row pt-5 pb-3">
          <div class="col-12 col-md-5">
            <img
              loading="lazy"
              src="~assets/images/info/studios/nagoya/lesson01.jpg"
              alt="マシンピラティスをやっている女性の写真"
              class="w-100 d-block mx-auto pb-5"
              style="max-width:400px;"
            >
          </div>
          <div class="col-12 col-md-7">
            <h3 class="pb-3">
              マット・マシンピラティス<br><strong>プライベートレッスン</strong>
            </h3>
            <p class="pb-5">
              その日の身体の状態や、個人のレベル、目的など、個々のニーズに合わせてレッスンを組み立てていくことが最大の特徴です。プライベートレッスンは、目的を達成するためにマットやマシンを自由に組み合わせます。<br>
              インストラクターが個人の状態に合わせてレッスンを組み立てることで、エクササイズの理解をより深めることができます。<br><br>
              グループレッスンで気づかなかった自分の動きの癖や、動きの修正も、適時、丁寧に指摘していくため、ピラティスの動きを短期間で上達させることができます。
            </p>
          </div>
        </div>
        <div class="row pb-3">
          <div class="col-12 col-md-5">
            <img
              loading="lazy"
              src="~assets/images/info/studios/nagoya/lesson03.jpg"
              alt="マシンピラティスをやっている女性の写真"
              class="w-100 d-block mx-auto pb-5"
              style="max-width:400px;"
            >
          </div>
          <div class="col-12 col-md-7">
            <h3 class="pb-3">
              マット・ピラティス<br><strong>グループレッスン</strong>
            </h3>
            <p class="pb-5">
              マット・ピラティスは、身体への意識を深めることを目的とした、ピラティスの基礎とも言うべきメソッドです。<br>
              ピラティスマットの上などで、呼吸のリズムや動きのテンポなどを協調させて動くことの気持ち良さ、楽しさを感じていただけるマットワークのレッスンです。<br>
              様々なテーマやレベルのクラスを用意しておりますが、初心者でも全てのクラスに参加できます。
            </p>
          </div>
        </div>
      </div>
    </section>
    <div class="c-ctalower bg-cta text-center">
      <div class="l-new-container">
        <!-- <p class="fa-2x white">
          まずは体験から
          <span style="display: block; font-size: 1.5rem;">こちらのキャンペーンは2022年12月中に申し込みされた方が対象です。<br class="pc">2023年1月以降は体験料および入会キャンペーンが変更されます。</span>
        </p> -->
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

    <section class=" py-5 school-sec">
      <div class="container py-5">
        <h2
          class="pb-3"
        >
          名古屋スタジオでピラティスインストラクター資格コースも開催
        </h2>
        <p class="">
          ピラティスインストラクターの養成コースを栄・名駅スタジオで開催しています。<br>
          ハイブリッドコース（スタジオとオンライン）とオンラインのコースがあります。
        </p>
        <div class="row py-5">
          <div class="col-12 col-md-4">
            <img
              loading="lazy"
              src="~assets/images/info/studios/fukuoka/basi_shikaku.jpg"
              alt="名古屋スタジオでもBasiピラティス資格の養成コースを開催"
              class="w-100 d-block mx-auto pb-3"
            >
          </div>
          <div class="col-12 col-md-8">
            <h3><span class="d-block">ピラティスインストラクター資格</span>BASIピラティス</h3>
            <p class="pt-3 pb-5">
              BASIピラティス(Body Arts Sience International/BASI)は、研究された理論や革新性、他の追随を許さない価値の高さによって、30年以上一流のインストラクターを養成するティーチャートレーニングと教育を行ってきました。<br>
              <br>
              高度な技術を有するBASIピラティス指導者養成コースの卒業生は世界中の幅広い分野で指導を行い、ピラティスのプロフェッショナルとしての姿を追求し続けるBASIコミュニティの拡大に一役を担っています。<br>
              <br>
              日本で主流のマットピラティスに加え、本格的なマシンピラティスのコースもご用意しております。
            </p>
            <a
              class="school-btn"
              href="https://www.pilates-education.info/"
              target="_blank"
            >
              Basiピラティス HPへ
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '名古屋で本格的なマット・マシンピラティス専門スタジオ',
      meta: [
        { hid: 'description', name: 'description', content: '名古屋の駅近くにピラティス専門スタジオが2つあります。マットとマシンピラティスのプライベートレッスンやマットグループレッスン、全てが栄・名駅のピラティス専門スタジオで楽しめます！' },
        { hid: 'keywords', name: 'keywords', content: 'ピラティス, スタジオ, 関西, 大阪, マシン' },
      ],

    };
  },

  async asyncData({ app }) {
    const studio1 = await app.$zenplaceApi.getStudio(192);
    const studio2 = await app.$zenplaceApi.getStudio(153);

    return {
      studio1,
      studio2,
    };
  },

};

</script>

<style lang="scss" scoped>
@import "node_modules/bootstrap/scss/mixins";
@import '~assets/scss/newvariables';

.school-sec h2{font-size:2.5rem;}
.school-sec h3 span{font-size:1.5rem; margin-bottom:6px;}
.school-sec h3 {border-left:3px solid #d82c30; padding-left:10px; }
.school-btn{border:1px solid #333; color:#333; border-radius:30px; padding:15px; display:block; margin:0 auto; text-align:center; max-width:250px;}

.p-studionewstop {
 font-family: $gothic !important;
}
.pc{display:block;}
.sp{display:none;}
.c-section--gray {background-color:#efefef;}
.c-section--darkgray{background-color:#d7d7d7;}
.c-section--blue{background-color:#0066a4; color:#fff;}
.p-studionewstop a img {cursor: pointer;}
.t-blue{color:#0066a4;}
.studio-btn{background-color:#0066a4; color:#fff; padding:15px 10px; font-size:1.8rem; display:block; max-width:200px; text-align:center;}
.p-studionewstop h3{font-size:2rem; line-height:3rem;}

.studio-list h3{font-size: 2.5rem; }
.studio-list h3 span{font-size:1.5rem; color:#999;}
.studio-access h4{font-size:1.8rem; font-weight:bold;}

.machine-pilates h2{font-size:2.5rem;}
.machine-pilates h3 {font-size:1.5rem;}
.machine-pilates h3 strong{font-size:2rem;}
.header-ban{background:url("~assets/images/info/studios/kansai/bg-img.jpg") center center no-repeat;
background-size:cover;
}
.header-ban h1{ font-weight:bold; font-size:6rem; letter-spacing: 1px;}
.header-ban h1 span{font-size:3.6rem; padding-bottom:10px;}

@media screen and (max-width:768px){

.pc{display:none;}
.sp{display:block;}

.header-ban h1{font-size:3rem; letter-spacing: 1px;}
.header-ban h1 span{font-size:1.8rem; padding-bottom:5px;}

}

body .l-new .c-header-border-bottom {
    font-size: 2.5rem;
}

.p-price-table h2 {
    font-size: 2.5rem;
}
.p-price-table h3 {
    font-size: 1.8rem;
}

.p-price{
  &-about{
    margin-bottom: 80px;
    @include sp{
      margin-bottom: pv(40);
      padding-top: pv(30);
    }

    p{

      font-size: 16px;
      line-height: 2;
      margin-bottom: 16px;

      @include sp{
        font-size: pv(12);
        margin-bottom: pv(20);
      }

      &.blue{
        font-size: 22px;
        line-height: 1.5;

        @include sp{
          font-size: pv(14);

          span{
            display: inline-block;
            padding-bottom: pv(4);
            margin-bottom: pv(12);
            font-size: pv(20);
            border-bottom: 2px solid $blue;

            &.baloon{
              background: $blue;
              color: white;
              font-size: pv(19);
              padding: pv(4) pv(12);
              border-radius: pv(32);
              border-bottom: none;
              position: relative;

              &:before{
                content: '';
                display: block;
                position: absolute;
                top: 100%;
                left: calc(50% - #{pv(6)});
                width: 0;
                height: 0;
                border: pv(6) solid transparent;
                border-top: pv(8) solid $blue;
              }
            }
          }
        }
      }
    }
  } // .p-price-about

  &-course{
    padding-top: 100px;

    h2{
      margin-bottom: 60px;
    }

    .c-column-alternate-single{

      &:nth-of-type(1),
      &:nth-of-type(3){
        h3{left: -50px;}
      padding-top: 80px!important;
      background-position-y: top!important;
      }
      &:nth-of-type(2){
      padding-bottom: 160px!important;
      background-position-y: bottom!important;
        h3{right: -50px;}
      }
      &:nth-of-type(1){background-image: url('~assets/images/price/course-1.jpg');}
      &:nth-of-type(2){background-image: url('~assets/images/price/course-2.jpg');}
      &:nth-of-type(3){background-image: url('~assets/images/price/course-3.jpg');}

      @include sp{
        &:nth-of-type(1){background-image: url('~assets/images/price/course-1-sp.jpg');}
        &:nth-of-type(2){background-image: url('~assets/images/price/course-2-sp.jpg');}
        &:nth-of-type(3){background-image: url('~assets/images/price/course-3-sp.jpg');}
      }

      .bg-white{
        padding: 140px 80px 40px!important;
        box-shadow: none!important;
        max-width: 680px!important;
        position: relative;
      }
      h3{
        background: $blue;
        color: white;
        display: inline-flex;
        align-items: center;
        font-weight: bold;
        white-space: nowrap;
        padding: 30px 40px!important;
        position: absolute;
        top: 0;
        .num{
          width: 60px;
          margin-right: 20px;
        }
      }

      p{
        margin-bottom: 16px;
      }

      @media screen and(max-width: 1280px){
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3){
          padding-top: 300px!important;
          padding-bottom: 0!important;
          background-position-y: top!important;
        }

        .bg-white{
          padding-top: 110px!important;
          h3{
            top: -40px;
          }
        }
      }
      @media screen and(max-width: 768px){
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3){
          padding-top: 400px!important;
          padding-bottom: 0!important;
          background-position-y: top!important;
        }

        .bg-white{
          padding-top: 110px!important;
          h3{
            top: -40px;
          }
        }
      }
      @include sp{

        padding-left: 0!important;
        padding-right: 0!important;

        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3){
          padding-top: pv(307)!important;
        }
        &:nth-child(1),
        &:nth-child(3){
          h3{
            left: 0;
          }
        }
        &:nth-child(2){
          h3{
            right: 0;
          }
        }

        .bg-white{
          width: 100vw!important;
          padding: pv(65) pv(25) pv(30)!important;
          h3{
            top: pv(-43);
            width: pv(303);
            position: absolute;
            padding: pv(30) pv(25)!important;

            .num{
              width: pv(50);
              position:absolute;
              top: pv(-25);
            }
          }
        }
      }

      .btn-blue_border{
        max-width: 43rem;
      }
    }
  } // .p-price-course

  &-grade{
    padding: 100px 0;

    .desc{
      text-align: center;
      font-size: 20px;
      margin-bottom: 40px;
      line-height: 1.7;
    }

    @include sp{
      padding-top: pv(50);
      padding-bottom: pv(35);

      .desc{
        padding-top: pv(60);
      }

      .row{
        display: block;

        img{
          width: 100%;
          max-width: 100%;
          height: 160px;
          margin-bottom: pv(15);
        }
      }
    }

    h2{
      margin-bottom: 80px;

      @include sp{
        margin-bottom: pv(0);
      }
    }
  } // .p-price-grade

  &-table{
    padding: 100px 0 80px;

    @include sp{
      padding: 37px 0;
    }

    .c-twotitles.tab{

      @include sp{
        display: none;
      }
    }

    h2{
      margin-bottom: 60px;

      @include sp{
        margin-bottom: 32px;
      }
    }
    img{
      margin: 40px 0;
    }
    p{
      display: flex;
      justify-content: center;
      font-size: 16px;
      line-height: 2;
    }

    &-h3{
      display: none;
        @include sp{
          display: block;
          font-weight: bold;
          color: $blue;
          border-bottom: 2px solid $blue;
          padding-bottom: 8px;
          font-size: 16px;
        }
    }

    .c-pricetable{
      width: 100%;
      margin: 40px 0;
      border-top: 1px solid $blue;

      @include sp{
        margin: 20px 0;
      }

      &-wrap{
        @include sp{
          display: block!important;

          p{
            font-size: 10px;
            margin-bottom: 40px;
            justify-content: flex-start;
          }
        }
      }

      &-row{
        display: flex;
        width: 100%;
        border-bottom: 1px solid $blue;

        @include sp{
          &:first-child{

            .c-pricetable-col > div{
              transform: scale(.7);
              margin-left: -30px;
              margin-right: -30px;
            }
          }
        }
      }

      &-col{
        display: inline-block;
        border-right: 1px solid $blue;
        text-align: center;
        width: 100%;
        font-weight: bold;
        font-size: 16px;
        padding: 16px 0;

        @media screen and (max-width: 600px){
          font-size: 13px;
          padding: 8px 0;
        }

        @include sp{
          font-size: 10px;
          padding: 4px 0;
        }

        &:first-child{
          display: flex;
          align-items: center;
          justify-content: center;
          width: 240px;
          background: rgba(46, 110, 172, .7);
          color: white;

          @media screen and (max-width: 940px){
            width: 120px;
          }

          @media screen and (max-width: 600px){
            width: 100px;
          }

          @include sp{
            width: pv(70);
          }
        }

        &:not(:first-child){
          flex: 1 1 0;
          color: $blue;
          background: white;
        }

        >div{

          span{
            font-size: .8em;
            vertical-align: bottom;

            @media screen and (max-width: 940px){
              display: none;
            }
          }

          div{
            display: none;

            @media screen and (max-width: 940px){
              display: block;
              font-size: 10px;
            }

            @media screen and (max-width: 600px){
              transform: scale(.9);
            }

            @include sp{
              transform: scale(.7) translateY(-2px);
            }
          }
        }
      }
    }
  }// .p-price-table

  .c-lifestyle{
    .desc{
      margin-top: 24px;
      line-height: 2.3;
      font-size: 17px;

      @include sp{
        font-size: 14px;
      }
    }
  }
  @include sp{
    .c-header-border-bottom{
      font-size: pv(24)!important;
    }
  }
}

.bg-blue{
  background: $blue;
}

.white{
  color: $white;
}
.c-ctalower{

  padding: 60px 32px 60px;

  @include tab{
    padding: 40px 32px;
  }

  @include sp{
    padding: pv(49) pv(25) pv(40);

    .l-new-container{
      padding: 0!important;
    }
    .d-flex{
      display: block!important;
    }
  }

  p{
    margin-bottom: 3rem;

    @include sp{
      font-size: pv(20);
      font-weight: bold;
      margin-bottom: pv(24);
    }
  }

  img{
    margin-bottom: 4rem;

    @include sp{
      margin-bottom: 0;
    }
  }

  a{
    margin: 0 10px;
    width: 50%;
    max-width: 320px;
    height: 68px;
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    font-size: 22px;
    font-weight: bold;

    @media screen and (max-width: 600px){
      width: 160px;
      height: 160px;
    }
    @include sp{
      width: 100%;
      max-width: unset;
      height: pv(60);
      margin-bottom: pv(24);
    }

    i{
      width: 28px;
      height: 36px;
      margin-right: 16px;
    }

    @include sp{
      margin: pv(9) 0 0;
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
