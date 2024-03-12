<template>
  <div class="p-cp-50days">
    <div class="container">
      <h1
        class="sub-main-title text-center title-underlined py-5"
      >
        50daysチャレンジ
      </h1>
      <img
        src="~assets/images/cp/50days.jpg"
        alt="50daysチャレンジ"
        class="w-100 d-block mx-auto pb-5"
        style="max-width:900px;"
      >
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: '',
      title: 'zen place 50daysチャレンジ | ピラティス・ヨガを楽しく習慣に ',
      meta: [
        { hid: 'description', name: 'description', content: 'ウェルビーイングな一年をおくるためのzen place 50daysチャレンジスタート！50日間で、スタジオ・オンラインのレッスンを30日受講達成した方に素敵な特典がもらえる！2022年はピラティス・ヨガを楽しく習慣にして、こころとカラダを整えましょう！' },
        { hid: 'keywords', name: 'keywords', content: 'ピラティス, ヨガ, マインドフル, ウェルビーイング, チャレンジ, zenplace50days' },
      ],

    };
  },
};
</script>

<style scoped lang="scss">
@import '~assets/scss/newvariables';

.pc{display:block;}
.sp{display:none;}
p{max-width:700px; }
a.blue-link{color:#0066a4; text-decoration:underline;}
span.blog-date{
    font-size: 1.5rem;
    color: #999;
    display: block;
    padding-bottom: 10px;}

h1{color:#0066a4;}
.cp-date{color:#0066a4; font-size:3rem;}

p.limit-p{font-size:2rem;}
p.main-p{font-size:2.5rem; color:#0066a4; line-height:5rem;}
p.main-p span.big{font-size:4rem;}
p.exp-p{font-size:2rem; line-height:3rem;}
.exp-p span{font-size:1.5rem;}
p.infonote{background-color:#f3f3f3; padding:15px;
font-size:1.3rem;
}

@media screen and (max-width:768px){
  .pc{display:none;}
.sp{display:block;}
p.main-p{font-size:2rem; color:#0066a4; line-height:4rem;}
p.main-p span.big{font-size:3.5rem;}
p.exp-p{font-size:1.8rem;}
}

</style>
