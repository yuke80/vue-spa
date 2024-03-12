<template>
  <section
    class="c-pilates-about"
  >
    <div class="l-new-container">
      <div class="content">
        <h2 class="c-header-border-left small">
          ピラティスとは
        </h2>
        <div class="cf" />
        <p>
          「ピラティス」とは、考案者のJoseph Pilates（ジョセフ・ピラティス）さんの名前から名付けられた、エクササイズ・メソッドです。ピラティスは、呼吸と共に背骨やインナーマッスルを動かし、深く集中した状態を作ることで脳の神経を刺激しながら人間が本来持っている機能を正常化し、生きるための活力を最大限に引き出します。ピラティスのエクササイズは、スポーツジムのトレーニングのように身体の一部分に「負荷」を加えて強くするものではなく、リハビリを目的に作られた身体と心のコントロール術のため、運動経験や老若男女に関わらず安心して続けられます。<span class="ref-link">参考資料 (<a
            href="https://pubmed.ncbi.nlm.nih.gov/34776186/"
            target="_blank"
          >1</a>)  (<a
            href="https://pubmed.ncbi.nlm.nih.gov/31152703/"
            target="_blank"
          >2</a>) </span>
        </p>
        <nuxt-link
          to="/pilates/apropos"
          class="btn-blue_border"
        >
          詳しく読む
        </nuxt-link>
      </div>
      <div class="img">
        <img
          src="~assets/images/pilates/about/about-01.jpg"
          loading="lazy"
          alt="ピラティスとは"
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
.c-pilates-about{
    padding: 40px 0 80px;

    .l-new-container{
      display: flex;

      @media screen and (max-width: 870px){
        flex-direction: column;
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

       @media screen and (max-width: 870px){
          flex-direction: column-reverse;
          align-items: center;
        }
    }
  }

</style>
