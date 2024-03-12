<template>
  <div class="p-toppage">
    <section class="p-shop-top">
      <h2 class="c-heading text-white">
        ピラティス用品の販売
      </h2>
    </section>

    <section class="p-shop-lead">
      <div class="container">
        <p class="c-text text-center pb-3">
          スタジオでも使用している、Balanced Body社製の専用マットやフォームローラーなどを販売しております。<br>
          ご自宅でのトレーニングや復習、ストレッチやマッサージにもご活用ください。
        </p>
      </div>
    </section>

    <section class="p-shop-list bg-white">
      <div class="container">
        <h3 class="c-heading">
          商品一覧
        </h3>
        <div class="d-flex justify-content-between flex-wrap mt-5">
          <div class="col-12 col-md-4 mb-5">
            <img
              loading="lazy"
              src="~assets/images/shop/img-item01.jpg"
            >
            <p class="pt-3">
              <strong>Mat（品切中）</strong><span class="d-block">マット</span>
            </p>
            <p>
              <span class="border-bottom d-block pb-3 mb-3">ピラティス専用のマットは厚さが18㎜程度であり、そしてかなりの弾力がある事が特徴です。ローリング等のエクササイズでも背骨に柔らかいです。</span>
              Balanced Body社製<br>
              サイズ：180cm×58cm×1.8cm<br>
              カラー：ブラック（写真右）<br>
              価格：￥9,000（税別）<br><br>
              ※品切中〜入荷時期未定のため受付できません
            </p>
          </div>
          <div class="col-12 col-md-4 mb-5">
            <img
              loading="lazy"
              src="~assets/images/shop/img-item02.jpg"
            >
            <p class="pt-3">
              <strong>Foam Roller</strong><span class="d-block">フォームローラー</span>
            </p>
            <p>
              <span class="border-bottom d-block pb-3 mb-3">背骨のマッサージ、ストレッチからバランス感覚向上にも役立ちます。</span>
              Balanced Body社製<br>
              サイズ：90cmX直径15cm<br>
              カラー：グレーマーブル（写真左）<br>
              価格：￥10,000（税別）
            </p>
          </div>
          <div class="col-12 col-md-4 mb-5">
            <img
              loading="lazy"
              src="~assets/images/shop/img-item03.jpg"
            >
            <p class="pt-3">
              <strong>Short Foam Roller</strong><span class="d-block">ショートフォームローラー</span>
            </p>
            <p>
              <span class="border-bottom d-block pb-3 mb-3">フォームローラーのショートバージョンです。</span>
              Balanced Body社製<br>
              サイズ：直径37cm<br>
              カラー：ブルー<br>
              価格：￥4,000（税別）
            </p>
          </div>
          <div class="col-12 col-md-4">
            <img
              loading="lazy"
              src="~assets/images/shop/img-item04.jpg"
            >
            <p class="pt-3">
              <strong>Magic Circle</strong><span class="d-block">マジックサークル</span>
            </p>
            <p>
              <span class="border-bottom d-block pb-3 mb-3">アイソメトリックの筋肉収縮で筋力を強化に。</span>
              Balanced Body社製<br>
              サイズ：直径37cm<br>
              カラー：ブラック<br>
              価格：￥4,500（税別）
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="p-shop-contact">
      <div class="container">
        <h3 class="c-heading">
          お申し込み方法
        </h3>
        <p class="c-text text-center pb-3">
          電話でお申込みください。代金引換にて商品を発送いたします。<br>
          ※初期不良以外の返品・交換はいたしかねますのでご了承ください。
        </p>
        <div class="text-center">
          <a
            data-v-18c49c0e=""
            href="tel:03-4405-1245"
            target="_blank"
            class="col-12 col-md-6 d-inline-block p-3 mt-3 zp-service-link btn btn-primary align-items-center"
          >
            電話をかける<br><span data-v-18c49c0e="">（平日9:30-20:00、土日祝9:00-18:00）</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'ピラティス用品の販売',
      meta: [
        { hid: 'description', name: 'description', content: 'zen place pilatesのスタジオでお馴染み、Balanced Body社製のピラティス専用マットや、フォームローラー、マジックサークルなどを販売しております。ご自宅でのピラティス実践にご活用ください。' },
        { hid: 'keywords', name: 'keywords', content: 'ピラティス, 道具, 通販' },
      ],

    };
  },
};

</script>

<style>
img{width:100%;}
.blue{color:#0066a4; font-weight:bold;}
a:hover{cursor: pointer; opacity:.8;}
a.zp-service-link{max-width: 300px; margin:10px;}
a.zp-service-link span{font-size:12px;}
.p-shop-top { background-image: url(~assets/images/shop/img_hero.jpg); background-size: 100%; background-repeat: no-repeat; height: 500px; display: flex; align-items: center; justify-content: center;}
.p-shop-lead { padding: 50px 0;}
.p-shop-lead .container { background-color: transparent;}
.p-shop-list { padding: 100px 0;}
.p-shop-contact { padding: 100px 0;}
.p-shop-contact .container { background-color: transparent;}

@media  only screen and (max-width: 768px){
a.zp-service-link{margin:10px auto;}
.p-shop-top { background-image: url(~assets/images/shop/img_hero.jpg); background-size: 150%; background-repeat: no-repeat; height: 300px;}
.p-shop-lead { padding: 20px 0;}
}
</style>
