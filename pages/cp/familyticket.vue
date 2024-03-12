<template>
  <div class="p-cp-change">
    <div class="container pt-5">
      <h1
        class="sub-main-title text-center title-underlined py-3"
      >
        Lucky Family Ticket
      </h1>
      <img
        src="~assets/images/cp/luckyfamilyday.jpg"
        alt="Lucky Family Ticket"
        class="w-100 d-block mx-auto pb-5"
        style="max-width:900px;"
      >
    </div>
  </div>
</template>

<script>
export default {
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
  ],
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
