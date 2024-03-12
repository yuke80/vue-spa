<template>
  <section class="c-aboutOnline">
    <div class="l-new-container">
      <!-- <h2 class="c-header-orange-border">
        忙しいあなたに、新しい受け方
        <div class="orange">
          全スタジオの全てのレッスンが受講可能
        </div>
      </h2> -->
      <div class="wrap">
        <div class="content">
          <span class="head"><div>全スタジオの全てのレッスンが</div>オンラインでも受講可能</span>
          <img
            src="~assets/images/yoga/studiolivestreaming.jpg"
            loading="lazy"
            alt="Studio live Streaming"
          >
          <p>月10,000レッスン以上オンラインライブ中継！全国のスタジオグループレッスンはオンライン受講も可能になりました！スタジオに行ってレッスン参加できない日もご自宅で、インストラクターやスタジオの受講生の様子のライブ中継を見ながらレッスン参加できます。</p>
          <nuxt-link
            to="/online"
            class="btn-blue_border"
          >
            オンラインレッスンについて
          </nuxt-link>
        </div>
        <div class="img">
          <img
            src="~assets/images/yoga/live.jpg"
            loading="lazy"
          >
        </div>
      </div>
    </div>
  </section>
<!-- /.p-yoga-foryou -->
</template>

<style lang="scss" scoped>
@import '~assets/scss/newvariables';

.c-aboutOnline{
  padding: 80px 0;

  h2{
    padding: 30px 0;
    .orange{
      font-size: 16px;
    }
    margin-bottom: 60px;

    @media screen and(max-width: 640px){
      font-size: pv(20);
    }
  }

  .wrap{
    display: flex;
    .content{
      flex: 1;

      .head{
        display: block;
        font-size: 30px;
        font-weight: bold;
        color: $blue;
        margin-bottom: 20px;

        @media screen and(max-width: 640px){
          font-size: pv(20);
        }

        div{
          color: black;
          font-size: 20px;
          font-weight: normal;
        }
      }

      img{
        display: block;
        width: 100%;
        max-width: 360px;
        margin-bottom: 10px;
      }

      p{
        line-height: 2.3;
        margin-bottom: 20px;
      }
    }

    .img{
      width: 50%;
      margin-left: 60px;
      img{
        width: 100%;
      }

      @include tab{
        width: 40%;
        margin-left: 30px;
      }

      @media screen and(max-width: 640px){
        width: 100%;
        margin: pv(30) 0 0;
      }
    }

    @media screen and(max-width: 640px){
      display: block;
    }

  }
}// .p-yoga-foryou

</style>
