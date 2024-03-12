<template>
  <section
    class="c-yoga-about"
  >
    <div class="l-new-container">
      <div class="content">
        <h2 class="c-header-border-left small">
          zen place ヨガは<br>
          こころを溶かすヨガスタジオ
        </h2>
        <div class="cf" />
        <p>
          ヨガは「ウェルビーイング/マインドフルネスになり、豊かな生き方を作る方法論のひとつ」だと、私たちzen placeは考えます。<br><br>
          ウェルビーイングとは、心と身体が満たされた状態。<br>
          マインドフルネスとは、”今この瞬間”の自分にただ集中している状態。<br><br>
          zen place ヨガのコンセプトは「こころを溶かすヨガスタジオ 」。<br><br>
          代謝アップ、ボディライン改善といった表面の変化だけでなく、こころもマインドフルになる。<br>
          瞑想など心と向き合う時間を取り、「ウェルビーイングを作る方法論」をまるごと楽しむスタジオです。<br><br>
          世界最先端の情報提供はもちろんのこと、瞑想・ポジティブ心理学 ・東洋/西洋哲学など<br>
          あらゆる要素を織り混ぜ、音楽・アート・ボディワークなど様々な切り口を通じて、マインドフルな状態をつくりあげていきます。
        </p>
        <nuxt-link
          :to="btnUrl"
          class="btn-blue_border"
        >
          {{ btnLabel }}
        </nuxt-link>
      </div>
      <div class="img">
        <img
          src="~assets/images/yoga/about-gp.jpg"
          loading="lazy"
          alt="zen placeヨガのグループレッスン"
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    btnLabel: String,
    btnUrl: String,
  },
};
</script>

<style lang="scss" scoped>
@import '~assets/scss/newvariables';
.c-yoga-about{
    padding: 40px 0 80px;

    .l-new-container{
      display: flex;

       @media screen and (max-width: 870px){
          flex-direction: column-reverse;
          align-items: center;
        }

      .content{
        width: 100%;
        margin-right: 60px;

        h2{
          color: $blue;
          margin-bottom: 24px;
          font-weight: bold;

          @include sp{
            font-size: pv(24);
            text-align: center;
          }
        }

        p{
          font-size: 16px;
          line-height: 2;
          margin-bottom: 20px;
        }
        @media screen and (max-width: 870px){
          margin-right: 0;

          a{display: flex;
            margin-left: auto;
            margin-right: auto;
          }
        }
      }

      .img{
        max-width: 50%;
        width: 100%;

        img{
          width: 100%;
        }

        @media screen and (max-width: 870px){
          margin-bottom: 32px;
          max-width: 70%;
        }
        @include sp{
          max-width: 100%;
        }
      }
    }
  }

</style>
