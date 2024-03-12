<template>
  <section class="c-yoga-no1">
    <div class="l-new-container">
      <div class="top">
        <div class="img">
          <img
            src="~/assets/images/pilates/no1-top.png"
            loading="lazy"
            alt="ビジネスマンが選ぶヨガスタジオ"
          >
        </div>
        <div class="content">
          <p>ビジネスマンが選ぶヨガスタジオ<span>※1</span></p>
        </div>
      </div>
      <div class="bottom">
        <div class="single">
          <img
            src="~assets/images/yoga/yogano1.png"
            loading="lazy"
            alt="医師が選ぶ自分の健康のためのエクササイズNo.1　看護師が選ぶヨガスタジオNo.1"
          >
        </div>
      </div>
      <div class="desc">
        <p>※1  アンケートモニター提供元：ゼネラルリサーチ 調査期間：2020年1月29日～31日 調査方法：インターネット調査 調査概要：ピラティス・ヨガスタジオ10社を対象にしたサイト比較イメージ調査 調査対象：:全国の20代～50代の会社員の男性1134名 ※2 調査方法：インターネット調査 調査期間：2020年7月1日～2日 調査概要：(※4)エクササイズスタジオ10社を対象にしたサイト比較イメージ(※5)調査ピラティススタジオ10社を対象にしたサイト比較イメージ調査 調査対象：(※4)全国の20代～50代の男女(医師対象)1007名 (※5)全国の20代～50代の男女(理学療法士対象)1016名 アンケートモニター提供元：ゼネラルリサーチ※3 調査方法：インターネット調査 調査期間：2020年7月1日～2日 調査概要：(※4)エクササイズスタジオ10社を対象にしたサイト比較イメージ調査(※5)ヨガスタジオ10社を対象にしたサイト比較イメージ調査 調査対象：(※4)全国の20代～50代の男女(医師対象)1007名 (※5)全国の20代～50代の男女(看護師対象)1014名 アンケートモニター提供元：ゼネラルリサーチ</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '~assets/scss/newvariables';
.c-yoga-no1{
    padding: 40px 0;

    @include sp{
      padding: pv(40) 0;
    }

    .top{
      display: flex;
      justify-content: center;
      margin-bottom: 40px;
      flex-direction: column;
      align-items: center;

      @media screen and(max-width: 640px){
        flex-direction: column;
        align-items: center;
      }

      .img{
        max-width: 300px;
        margin-bottom: 32px;

        img{
          width: 100%;
        }
      }

      .content{
        p{
          line-height: 1.5;
          font-weight: bold;
          font-size: 24px;

          span{
            font-size: .4em;
            vertical-align: top;
          }
          @include sp{
            font-size: pv(16);
          }

          &:before{
            content: '';
            display: inline-block;
            width: 1.2em;
            height: 1.2em;
            margin-right: .5em;
            vertical-align: text-bottom;
            background: url('~assets/images/pilates/no1-crown.png')no-repeat center/contain;
          }
        }
      }
    }

    .bottom{
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      .single{
        text-align: center;
        width: 680px;
        margin: 0 16px 32px;

        @media screen and(max-width: 720px){
          max-width: 680px;
          width: 100%;
        }

        p{
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 1em;
        }

        img{
          width: 100%;
        }

      }
    }

    .desc{
      padding-top: 20px;
      font-size: 8px;
      max-width: 1000px;
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>
