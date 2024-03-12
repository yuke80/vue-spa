<template>
  <!------------------------- FOOTER --------------------------->
  <footer class="l-footer">
    <div class="l-container l-container--lg">
      <div class="row pb-5">
        <div class="d-inline-block text-center col-md-4 py-2">
          <nuxt-link
            to="/online"
            class="d-block text-center mx-auto"
            style="cursor:pointer; "
          >
            <img
              loading="lazy"
              src="~assets/images/top_new/topban_studiolive.jpg"
              alt="スタジオからのオンラインレッスン"
              style="width:100%; max-width:400px;"
            >
          </nuxt-link>
        </div>

        <div class="d-inline-block text-center col-md-4 py-2">
          <a
            href="https://yo-tsu-media.com/"
            target="_blank"
            class="d-block text-center mx-auto"
            style="cursor:pointer; "
          ><img
            loading="lazy"
            src="~assets/images/top/bnr-yotsumedia.jpg"
            alt="腰痛自動問診改善アプリモニター募集"
            style="width:100%; max-width:400px;"
          ></a>
        </div>

        <div class="d-inline-block text-center col-md-4 py-2">
          <a
            href="https://www.wholebodyeducator.com/"
            target="_blank"
            class="d-block text-center mx-auto"
            style="cursor:pointer; "
          ><img
            loading="lazy"
            src="~assets/images/top/bnr_inst.png"
            alt="未経験からプロに ヨガ・ピラティス インストラクター募集"
            style="width:100%; max-width:400px;"
          ></a>
        </div>
        <div class="d-inline-block text-center col-md-4 py-2">
          <a
            href="https://www.yoga-works.jp/"
            target="_blank"
            class="d-block text-center mx-auto"
            style="cursor:pointer; "
          ><img
            loading="lazy"
            src="~assets/images/top/zpban_ywtt.jpg"
            alt="YogaWorksヨガインストラクター養成コース"
            style="width:100%; max-width:400px;"
          ></a>
        </div>
        <div class="d-inline-block text-center col-md-4 py-2">
          <a
            href="https://www.pilates-education.info/"
            target="_blank"
            class="d-block text-center mx-auto"
            style="cursor:pointer; "
          ><img
            loading="lazy"
            src="~assets/images/top/zpban_basitt.jpg"
            alt="BASIPilates指導者養成コース"
            style="width:100%; max-width:400px;"
          ></a>
        </div>
      </div>
      <div class="l-footer__top">
        <div class="l-footer__logo">
          <nuxt-link to="/">
            <logo />
          </nuxt-link>
        </div>
        <div class="l-footer__tel">
          総合受付
          <a href="tel:03-4405-1245"><span>03-4405-1245</span></a>
        </div>
        <div class="l-footer__button">
          <nuxt-link
            to="/studios"
            class="c-button c-button--lg"
          >
            体験レッスンお申込み
          </nuxt-link>
        </div>
      </div>
      <div class="l-footer__bottom">
        <ul class="l-footer__menu">
          <li class="l-footer__menu-item">
            <nuxt-link
              to="/studios"
              target="_blank"
            >
              スタジオ一覧
            </nuxt-link>
          </li>
          <li class="l-footer__menu-item">
            <nuxt-link
              to="/online"
              target="_blank"
            >
              オンラインレッスン
            </nuxt-link>
          </li>
          <li class="l-footer__menu-item">
            <a
              href="https://corporate.zenplace.co.jp/privacy.html"
              target="_blank"
            >
              プライバシーポリシー
            </a>
          </li>
          <li class="l-footer__menu-item">
            <nuxt-link to="/rule">
              ご利用について
            </nuxt-link>
          </li>
          <li class="l-footer__menu-item">
            <nuxt-link to="/terms">
              利用規約
            </nuxt-link>
          </li>
          <li class="l-footer__menu-item">
            <a
              href="https://corporate.zenplace.co.jp/tokusho.html"
              target="_blank"
            >特定商取引法に基づく表記</a>
          </li>
        </ul>
      </div>
      <div class="l-footer__bottom">
        <ul class="l-footer__menu">
          <li class="l-footer__menu-item">
            <a
              href="https://corporate.zenplace.co.jp/"
              target="_blank"
            >会社情報</a>
          </li>
          <li class="l-footer__menu-item">
            <a
              href="https://www.wholebodyeducator.com/"
              target="_blank"
            >採用情報</a>
          </li>
          <li class="l-footer__menu-item">
            <a
              href="https://academy.zenplace.co.jp/"
              target="_blank"
            >zen place アカデミー</a>
          </li>
          <li class="l-footer__menu-item">
            <a
              href="https://nurse.zenplace.co.jp/"
              target="_blank"
            >zen place 訪問看護</a>
          </li>
          <li class="l-footer__menu-item">
            <a
              href="https://zenplaceonline-store.myshopify.com/"
              target="_blank"
            >zen place online store</a>
          </li>

          <li class="l-footer__menu-item">
            <a
              href="https://www.zenplace.co.jp/column/index.php"
              target="_blank"
            >ピラティス・ヨガ コラム</a>
          </li>
          <li class="l-footer__menu-item">
            <a
              href="https://mental-health.zenplace.co.jp/"
              target="_blank"
            >メンタルヘルスガイド</a>
          </li>

          <!--<li class="l-footer__menu-item"><a href="/about/">お知らせ</a></li>-->
        </ul>
        <div class="l-footer__sns">
          <div class="l-footer__sns-heading">
            Follow us
          </div>
          <div class="l-footer__sns-item">
            <a
              href="https://www.facebook.com/zenplaceOfficial/"
              target="_blank"
              class="c-icon-facebook"
            />
          </div>
          <div class="l-footer__sns-item">
            <a
              href="https://www.instagram.com/zenplace_official/"
              target="_blank"
              class="c-icon-instagram"
            />
          </div>
          <div class="l-footer__sns-item">
            <a
              href="https://www.instagram.com/mainichi_zenplace/"
              target="_blank"
              class="c-icon-instagram"
            />
          </div>
        </div>
      </div>
      <div class="l-footer__copyright">
        © 2020 ZEN PLACE inc. All Rights Reserved.
      </div>
    </div>
  </footer>
  <!------------------------- /FOOTER --------------------------->
</template>

<script>
export default {

};
</script>

<style>
  .l-footer {
    position: relative;
    z-index: 100;
    padding: 100px 0 60px;
    background-color: #fff;
    font-size: 12px;
    border-top: 1px solid #dadada;
  }
  @media (max-width: 1023px) {
    .l-footer {
      padding: 80px 0 50px;
    }
  }
  @media (max-width: 767px) {
    .l-footer {
      padding: 60px 0 40px;
    }
  }
  .l-footer__top {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 46px;
    padding-bottom: 100px;
    border-bottom: 1px solid #f2f2f2;
  }
  @media (max-width: 1023px) {
    .l-footer__top {
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      margin-bottom: 40px;
      padding-bottom: 40px;
    }
  }
  .l-footer__logo {
    -ms-flex-preferred-size: 220px;
    /* flex-basis: 220px; */
    max-width: 220px;
    margin-right: auto;
  }
  .l-footer__logo img {
    width: 100%;
  }
  @media (max-width: 1023px) {
    .l-footer__logo {
      -ms-flex-preferred-size: 240px;
      /* flex-basis: 240px; */
      max-width: 240px;
      margin: 0 auto 40px;
    }
  }
  @media (max-width: 767px) {
    .l-footer__logo {
      -ms-flex-preferred-size: 180px;
      /* flex-basis: 180px; */
      max-width: 180px;
      margin-bottom: 47px;
    }
  }
  .l-footer__tel {
    font-size: 20px;
    font-size: 2rem;
    font-weight: 500;
    line-height: 1;
    margin-right: 90px;
  }
  .l-footer__tel span {
    font-size: 30px;
    font-size: 3rem;
    margin-left: 20px;
  }
  @media (max-width: 1023px) {
    .l-footer__tel {
      font-size: 16px;
      font-size: 1.6rem;
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
      max-width: 100%;
      margin-right: 0;
      margin-bottom: 30px;
      text-align: center;
    }
    .l-footer__tel span {
      font-size: 25px;
      font-size: 2.5rem;
      margin-left: 18px;
    }
  }
  @media (max-width: 767px) {
    .l-footer__tel {
      font-size: 14px;
      font-size: 1.4rem;
      margin-bottom: 26px;
    }
    .l-footer__tel span {
      font-size: 20px;
      font-size: 2rem;
      margin-left: 15px;
    }
  }
  .l-footer__button {
    width: 100%;
    max-width: 356px;
  }
  @media (max-width: 1023px) {
    .l-footer__button {
      max-width: 400px;
    }
  }
  @media (max-width: 767px) {
    .l-footer__button {
      width: 100%;
    }
  }
  .l-footer__bottom {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-bottom: 120px;
  }
  @media (max-width: 1023px) {
    .l-footer__bottom {
      display: block;
      padding-bottom: 60px;
      text-align: center;
    }
  }
  @media (max-width: 767px) {
    .l-footer__bottom {
      padding-bottom: 30px;
    }
  }
  .l-footer__menu {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-right: auto;
    padding: 0;
  }
  @media (max-width: 1023px) {
    .l-footer__menu {
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      margin-bottom: 50px;
    }
  }
  @media (max-width: 767px) {
    .l-footer__menu {
      margin-bottom: 25px;
    }
  }
  .l-footer__menu-item {
    font-size: 12px;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 2;
    margin-right: 30px;
  }
  .l-footer__menu-item:last-child {
    margin-right: 0;
  }
  @media (max-width: 767px) {
    .l-footer__menu-item {
      margin: 0 15px 20px;
    }
    .l-footer__menu-item:last-child {
      margin: 0 20px 20px;
    }
  }
  .l-footer__sns {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  @media (max-width: 1023px) {
    .l-footer__sns {
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
    }
  }
  @media (max-width: 767px) {
    .l-footer__sns {
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
  }
  .l-footer__sns-heading {
    font-size: 11px;
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1;
    margin-right: 10px;
  }
  @media (max-width: 767px) {
    .l-footer__sns-heading {
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
      max-width: 100%;
      margin: 0 0 20px;
    }
  }
  .l-footer__sns-item {
    font-size: 16px;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1;
    margin-left: 13px;
  }
  @media (max-width: 767px) {
    .l-footer__sns-item {
      margin: 0 6px;
    }
  }
  .l-footer__copyright {
    font-size: 10px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    text-align: right;
  }
  @media (max-width: 1023px) {
    .l-footer__copyright {
      text-align: center;
    }
  }

</style>
