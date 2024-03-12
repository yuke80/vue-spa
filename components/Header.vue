<template>
  <header id="tophead">
    <div class="shadow">
      <div class="col-4 space" />
      <!-- <div :is="$route.path==='/'?'h1':'div'"> -->
      <nuxt-link
        to="/"
      >
        <logo />
      </nuxt-link>
      <!-- </div> -->
      <div class="col-4 p-2 d-flex justify-content-end">
        <nuxt-link
          to="/info/houjin"
          class="btn-orange btn-houjin ml-4"
        >
          法人の方
        </nuxt-link>
        <a
          href="/welcome/schedule.php"
          class="btn-orange ml-4"
        >
          体験レッスン
        </a>
        <nuxt-link
          to="/login"
          class="btn-blue ml-4"
        >
          会員の方
        </nuxt-link>
      </div>
      <div
        class="nav-switch px-4"
        :class="{'open':show}"
        @click="show = !show"
      >
        <span />
        <span />
        <span />
      </div>
    </div>
    <nav
      :class="{'show':show}"
    >
      <div
        class="meganavbar"
      >
        <div class="megadropdown d-block d-md-none pb-4">
          <a
            href="#"
          />
        </div>
        <div
          class="megadropdown"
          @mouseover="active1 = true"
          @mouseleave="active1 = false"
        >
          <button
            class="dropbtn"
            :class="{'open-contents':active1}"
            @click="active1 = !active1;"
          >
            <span
              :class="{'text-white':active1}"
            >ピラティス</span>
          </button>
          <div
            v-show="active1"
            class="megadropdown-content"
            @click="show = !show"
          >
            <div
              class="row content-box"
              @click="active1 = false"
            >
              <div class="column column-title d-none d-md-block">
                <h3>Pilates</h3>
                <h3>ピラティスについて</h3>
                <img
                  loading="lazy"
                  src="~assets/images/header/pilates.webp"
                  alt="ピラティス"
                  class="w-100 pt-4 d-none d-md-block"
                >
                <!-- <p class="to-top">
                  ピラティスTOPへ
                </p> -->
              </div>
              <div class="column column-content">
                <div class="item">
                  <nuxt-link to="/pilates">
                    <h4>ピラティスについて</h4>
                  </nuxt-link>
                  <div class="sub-item">
                    <nuxt-link to="/pilates/apropos">
                      <span>ピラティスとは</span>
                    </nuxt-link>
                    <nuxt-link to="/pilates/aboutus">
                      <span>zen placeピラティスとは</span>
                    </nuxt-link>
                    <nuxt-link to="/pilates/about/basi">
                      <span>basiピラティスとは</span>
                    </nuxt-link>
                  </div>
                </div>
                <div class="item">
                  <nuxt-link to="/pilates/benefits">
                    <h4>ピラティスの効果</h4>
                  </nuxt-link>
                  <div class="sub-item">
                    <nuxt-link to="/pilates/knowmore/diet">
                      <span>ダイエット効果</span>
                    </nuxt-link>
                    <nuxt-link to="/classes/kafun">
                      <span>花粉症に効果</span>
                    </nuxt-link>
                    <nuxt-link to="/pilates/knowmore/stress">
                      <span>ストレス解消</span>
                    </nuxt-link>
                  </div>
                </div>
                <div class="item">
                  <nuxt-link to="#">
                    <h4>ピラティスの種類</h4>
                  </nuxt-link>
                  <div class="sub-item">
                    <nuxt-link to="/pilates#mat-lesson">
                      <span>マットピラティス</span>
                    </nuxt-link>
                    <nuxt-link to="/pilates/machine">
                      <span>マシンピラティス</span>
                    </nuxt-link>
                  </div>
                </div>
                <div class="item">
                  <nuxt-link to="#">
                    <h4>特別レッスン</h4>
                  </nuxt-link>
                  <div class="sub-item">
                    <nuxt-link to="/classes/package32">
                      <span>32回パッケージ</span>
                    </nuxt-link>
                    <nuxt-link to="/classes/worldpilates">
                      <span>世界のピラティス</span>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="megadropdown"
          @mouseover="active2 = true"
          @mouseleave="active2 = false"
        >
          <button
            class="dropbtn"
            :class="{'open-contents':active2}"
            @click="active2 = !active2;"
          >
            <span
              :class="{'text-white':active2}"
            >ヨガ</span>
          </button>
          <div
            v-show="active2"
            class="megadropdown-content"
            @click="show = !show"
          >
            <div
              class="row content-box"
              @click="active2 = false"
            >
              <div class="column column-title d-none d-md-block">
                <h3>Yoga</h3>
                <h3>ヨガについて</h3>
                <img
                  loading="lazy"
                  src="~assets/images/header/yoga.webp"
                  alt="ピラティス"
                  class="w-100 pt-4 d-none d-md-block"
                >
                <!-- <p class="to-top">
                  ヨガTOPへ
                </p> -->
              </div>
              <div class="column column-content">
                <div class="item">
                  <nuxt-link to="/yoga">
                    <h4>ヨガについて</h4>
                  </nuxt-link>
                  <div class="sub-item">
                    <nuxt-link to="/yoga/about">
                      <span>ヨガとは</span>
                    </nuxt-link>
                    <nuxt-link to="/yoga/history">
                      <span>ヨガの歴史</span>
                    </nuxt-link>
                    <nuxt-link to="/yoga/aboutus">
                      <span>zen placeヨガとは</span>
                    </nuxt-link>
                  </div>
                </div>
                <div class="item">
                  <nuxt-link to="/yoga/benefits">
                    <h4>ヨガの効果</h4>
                  </nuxt-link>
                  <div class="sub-item">
                    <nuxt-link to="/yoga/knowmore/diet/basics">
                      <span>ヨガと食</span>
                    </nuxt-link>
                    <nuxt-link to="/yoga/knowmore/cancer/betterlife">
                      <span>ヨガとがん</span>
                    </nuxt-link>
                    <nuxt-link to="/yoga/knowmore/heartdisease">
                      <span>心臓病への効果</span>
                    </nuxt-link>
                  </div>
                </div>
                <div class="item">
                  <nuxt-link to="#">
                    <h4>ヨガレッスン</h4>
                  </nuxt-link>
                  <div class="sub-item">
                    <nuxt-link to="/yoga#yoga-g-lesson">
                      <span>グループレッスン</span>
                    </nuxt-link>
                    <nuxt-link to="/yoga#yoga-p-lesson">
                      <span>プライベートレッスン</span>
                    </nuxt-link>
                    <nuxt-link to="/yoga/hotyoga">
                      <span>ホットヨガについて</span>
                    </nuxt-link>
                  </div>
                </div>
                <div class="item">
                  <nuxt-link to="#">
                    <h4>特別レッスン</h4>
                  </nuxt-link>
                  <div class="sub-item">
                    <nuxt-link to="/classes/yoga-for-well-being">
                      <span>Yoga for well-being</span>
                    </nuxt-link>
                  </div>
                </div>
                <div class="item" />
              </div>
            </div>
          </div>
        </div>
        <div
          class="megadropdown"
          @mouseover="active3 = true"
          @mouseleave="active3 = false"
        >
          <button
            class="dropbtn"
            :class="{'open-contents':active3}"
            @click="active3 = !active3;"
          >
            <span
              :class="{'text-white':active3}"
            >スタジオ</span>
          </button>
          <div
            v-show="active3"
            class="megadropdown-content"
            @click="show = !show"
          >
            <div
              class="row content-box"
              @click="active3 = false"
            >
              <div class="column column-title d-none d-md-block">
                <h3>Studio</h3>
                <h3>スタジオ</h3>
                <!-- <p class="to-top">
                  スタジオTOPへ
                </p> -->
              </div>
              <div class="column column-content">
                <div class="item">
                  <nuxt-link to="/studios">
                    <h4>スタジオ一覧</h4>
                  </nuxt-link>
                  <div class="sub-item">
                    <nuxt-link to="/studios">
                      <span>スタジオを検索する</span>
                    </nuxt-link>
                    <nuxt-link to="/info/studios/renewal">
                      <span>New Openスタジオ</span>
                    </nuxt-link>
                    <nuxt-link to="/instructors">
                      <span>エデュケーター一覧</span>
                    </nuxt-link>
                  </div>
                </div>
                <div class="item">
                  <nuxt-link to="/studios">
                    <h4>地域特設ページ</h4>
                  </nuxt-link>
                  <div class="sub-item">
                    <nuxt-link to="/info/studios/kansai">
                      <span>関西のスタジオ</span>
                    </nuxt-link>
                    <nuxt-link to="/info/studios/nagoya">
                      <span>名古屋のスタジオ</span>
                    </nuxt-link>
                    <nuxt-link to="/info/studios/fukuoka">
                      <span>福岡のスタジオ</span>
                    </nuxt-link>
                  </div>
                </div>
                <div class="item">
                  <nuxt-link to="/online">
                    <h4>オンラインレッスン</h4>
                  </nuxt-link>
                  <div class="sub-item">
                    <nuxt-link to="/online/member">
                      <span>オンライン専用会員</span>
                    </nuxt-link>
                    <nuxt-link to="/online/cramuru">
                      <span>クラムるについて</span>
                    </nuxt-link>
                    <nuxt-link to="/online/howto">
                      <span>Zoomで参加する方法</span>
                    </nuxt-link>
                  </div>
                </div>
                <div class="item">
                  <nuxt-link to="/price">
                    <h4>料金について</h4>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="megadropdown"
          @mouseover="active4 = true"
          @mouseleave="active4 = false"
        >
          <button
            class="dropbtn"
            :class="{'open-contents':active4}"
            @click="active4 = !active4;"
          >
            <span
              :class="{'text-white':active4}"
            >アカデミー</span>
          </button>
          <div
            v-show="active4"
            class="megadropdown-content"
            @click="show = !show"
          >
            <div
              class="row content-box"
              @click="active4 = false"
            >
              <div class="column column-title d-none d-md-block">
                <h3>Academy</h3>
                <h3>アカデミー</h3>
              </div>
              <div class="column column-content">
                <div class="item">
                  <nuxt-link to="#">
                    <h4>人気のワークショップ</h4>
                  </nuxt-link>
                  <div class="sub-item">
                    <a href="https://www.bodymindspiritresearchlab.com/workshops?tag_id=46&keyword=">
                      <span>ピラティス</span>
                    </a>
                    <a href="https://www.bodymindspiritresearchlab.com/workshops?tag_id=3&keyword=">
                      <span>スキルアップ</span>
                    </a>
                    <a href="https://www.bodymindspiritresearchlab.com/workshops?tag_id=5&keyword=">
                      <span>解剖学</span>
                    </a>
                  </div>
                </div>
                <div class="item">
                  <a href="https://www.pilates-education.info/">
                    <h4>BASIピラティス資格養成</h4>
                  </a>
                  <div class="sub-item">
                    <a href="https://www.pilates-education.info/welcome/about_education">
                      <span>養成コースについて</span>
                    </a>
                    <a href="https://www.pilates-education.info/welcome/index">
                      <span>お申込みの流れ</span>
                    </a>
                  </div>
                </div>
                <div class="item">
                  <a href="https://balancedbody.co.jp/">
                    <h4>balanced body®</h4>
                  </a>
                  <div class="sub-item">
                    <a href="https://balancedbody.co.jp/trial-lesson/">
                      <span>体験レッスン</span>
                    </a>
                    <a href="https://balancedbody.co.jp/course/">
                      <span>コース一覧</span>
                    </a>
                    <a href="https://balancedbody.co.jp/course/price/">
                      <span>料金</span>
                    </a>
                  </div>
                </div>
                <div class="item">
                  <a href="https://www.yoga-works.jp/">
                    <h4>yogaworks®</h4>
                  </a>
                  <div class="sub-item">
                    <a href="https://www.yoga-works.jp/about/yogaworks">
                      <span>ヨガワークスとは</span>
                    </a>
                    <a href="https://www.yoga-works.jp/free_lessons">
                      <span>無料説明会/体験</span>
                    </a>
                  </div>
                </div>
                <!-- <div class="item">
                  <nuxt-link to="#">
                    <h4>yogaインストラクター資格</h4>
                  </nuxt-link>
                  <div class="sub-item">
                    <nuxt-link to="#">
                      <span>小カテゴリ</span>
                    </nuxt-link>
                    <nuxt-link to="#">
                      <span>小カテゴリ</span>
                    </nuxt-link>
                    <nuxt-link to="#">
                      <span>小カテゴリ</span>
                    </nuxt-link>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </div>
        <div
          class="megadropdown"
          @mouseover="active5 = true"
          @mouseleave="active5 = false"
        >
          <button
            class="dropbtn"
            :class="{'open-contents':active5}"
            @click="active5 = !active5;"
          >
            <span
              :class="{'text-white':active5}"
            >オンラインストア</span>
          </button>
          <div
            v-show="active5"
            class="megadropdown-content"
            @click="show = !show"
          >
            <div
              class="row content-box"
              @click="active5 = false"
            >
              <div class="column column-title d-none d-md-block">
                <h3>Online Store</h3>
                <h3>オンラインストア</h3>
                <!-- <p class="to-top">
                  オンラインストアTOPへ
                </p> -->
              </div>
              <div class="column column-content">
                <div class="item">
                  <a href="https://zenplaceonline-store.myshopify.com/">
                    <h4>オンラインストア</h4>
                  </a>
                  <div class="sub-item">
                    <a href="https://zenplaceonline-store.myshopify.com/pages/about-cbd">
                      <span>CBDとは</span>
                    </a>
                    <a href="https://zenplaceonline-store.myshopify.com/collections/fitness">
                      <span>フィットネス用品</span>
                    </a>
                    <a href="https://zenplaceonline-store.myshopify.com/collections/cbd-herb-1">
                      <span>CBD & Herb</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="megadropdown"
          @mouseover="active6 = true"
          @mouseleave="active6 = false"
        >
          <button
            class="dropbtn"
            :class="{'open-contents':active6}"
            @click="active6 = !active6;"
          >
            <span
              :class="{'text-white':active6}"
            >zen placeとは</span>
          </button>
          <div
            v-show="active6"
            class="megadropdown-content"
            @click="show = !show"
          >
            <div
              class="row content-box"
              @click="active6 = false"
            >
              <div class="column column-title d-none d-md-block">
                <h3>About zen place</h3>
                <h3>zen placeについて</h3>
                <!-- <p class="to-top">
                  zen placeについてTOPへ
                </p> -->
              </div>
              <div class="column column-content">
                <div class="item">
                  <nuxt-link to="/about">
                    <h4>zen placeとは</h4>
                  </nuxt-link>
                  <div class="sub-item">
                    <nuxt-link to="/about/beginner">
                      <span>初めての方</span>
                    </nuxt-link>
                    <nuxt-link to="/about#zen-place-reason">
                      <span>選ばれる理由</span>
                    </nuxt-link>
                    <nuxt-link to="/voice">
                      <span>ご利用者の声</span>
                    </nuxt-link>
                  </div>
                </div>
                <div class="item">
                  <nuxt-link to="#">
                    <h4>zen placeのコンセプト</h4>
                  </nuxt-link>
                  <div class="sub-item">
                    <nuxt-link to="/about/since2004">
                      <span>Since 2004</span>
                    </nuxt-link>
                    <nuxt-link to="/about/history">
                      <span>zen placeの歴史</span>
                    </nuxt-link>
                  </div>
                </div>
                <div class="item">
                  <a href="https://corporate.zenplace.co.jp/">
                    <h4>企業情報</h4>
                  </a>
                  <div class="sub-item">
                    <a href="https://corporate.zenplace.co.jp/about/">
                      <span>企業紹介</span>
                    </a>
                    <a href="https://corporate.zenplace.co.jp/dx/">
                      <span>DX戦略</span>
                    </a>
                    <a href="https://corporate.zenplace.co.jp/recruit.html">
                      <span>採用情報</span>
                    </a>
                  </div>
                </div>
                <!-- <div class="item">
                  <nuxt-link to="#">
                    <h4>採用情報</h4>
                  </nuxt-link>
                  <div class="sub-item">
                    <nuxt-link to="#">
                      <span>小カテゴリ</span>
                    </nuxt-link>
                    <nuxt-link to="#">
                      <span>小カテゴリ</span>
                    </nuxt-link>
                  </div>
                </div>
                <div class="item">
                  <nuxt-link to="#">
                    <h4>最近の動向</h4>
                  </nuxt-link>
                  <div class="sub-item">
                    <nuxt-link to="#">
                      <span>ジャーナル</span>
                    </nuxt-link>
                    <nuxt-link to="#">
                      <span>AI背骨解析</span>
                    </nuxt-link>
                    <nuxt-link to="#">
                      <span>メタバース</span>
                    </nuxt-link>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </div>
        <div
          class="megadropdown"
          @mouseover="active7 = true"
          @mouseleave="active7 = false"
        >
          <button
            class="dropbtn"
            :class="{'open-contents':active7}"
            @click="active7 = !active7;"
          >
            <span
              :class="{'text-white':active7}"
            >FAQ</span>
          </button>
          <div
            v-show="active7"
            class="megadropdown-content"
            @click="show = !show"
          >
            <div
              class="row content-box"
              @click="active7 = false"
            >
              <div class="column column-title d-none d-md-block">
                <h3>FAQ</h3>
                <h3>よくあるご質問</h3>
                <!-- <p class="to-top">
                  よくあるご質問TOPへ
                </p> -->
              </div>
              <div class="column column-content">
                <div class="item">
                  <div class="sub-item">
                    <nuxt-link to="/faq#about">
                      <span>ピラティス・ヨガについて</span>
                    </nuxt-link>
                    <nuxt-link to="/faq#trial">
                      <span>体験予約について</span>
                    </nuxt-link>
                    <nuxt-link to="/faq#lesson">
                      <span>レッスンについて</span>
                    </nuxt-link>
                  </div>
                </div>
                <div class="item">
                  <div class="sub-item">
                    <nuxt-link to="/faq#studio">
                      <span>スタジオ設備について</span>
                    </nuxt-link>
                    <nuxt-link to="/faq#price">
                      <span>料金・月会費について</span>
                    </nuxt-link>
                    <nuxt-link to="/faq#maternity">
                      <span>妊娠中・出産後について</span>
                    </nuxt-link>
                  </div>
                </div>
                <div class="item">
                  <div class="sub-item">
                    <nuxt-link to="/faq#system">
                      <span>予約システムについて</span>
                    </nuxt-link>
                    <nuxt-link to="/faq#recess">
                      <span>休会・退会について</span>
                    </nuxt-link>
                    <nuxt-link to="/faq#online">
                      <span>オンラインレッスンについて</span>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="megadropdown d-block d-md-none">
          <button
            class="dropbtn"
            @click="show = !show"
          >
            <nuxt-link
              to="/info/houjin"
              class="text-white p-0"
            >
              法人の方
            </nuxt-link>
          </button>
        </div>
        <div
          class="megadropdown d-block d-md-none"
          @mouseover="active8 = true"
          @mouseleave="active8 = false"
        >
          <button
            class="dropbtn"
            :class="{'open-contents':active8}"
            @click="active8 = !active8;"
          >
            <span
              :class="{'text-white':active8}"
            >SNS</span>
          </button>
          <div
            v-show="active8"
            class="megadropdown-content"
            @click="show = !show"
          >
            <div
              class="row content-box"
              @click="active8 = false"
            >
              <div class="column column-content">
                <div class="item">
                  <div class="sub-item">
                    <a href="https://www.instagram.com/zenplace_official/">
                      公式Instagram
                    </a>
                    <a href="https://www.instagram.com/zenplacenow/">
                      zen place now
                    </a>
                    <a href="https://twitter.com/zenplace_jp/">
                      Twitter
                    </a>
                    <a href="https://www.facebook.com/zenplaceOfficial/">
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      active1: false,
      active2: false,
      active3: false,
      active4: false,
      active5: false,
      active6: false,
      active7: false,
      active8: false,
    };
  },
};
</script>
<style lang="scss" scoped>
@import '~assets/scss/newvariables';
@import '~assets/scss/variables';

header#tophead{
  .tab-on{
    display: none;
  }

  .btn-orange,
  .btn-blue{
    max-width: 160px;
    font-size: 16px;
    height: 52px;
  }

  .shadow{
    box-shadow: 0px 3px 6px #00000029;
    margin-bottom: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    h1 {
      margin-bottom: 0;
    }
  }
  .nav-switch, .sns{
    display: none!important;
  }

  .btn-houjin {
    border: #535353 1px solid;
    background-color: #fff;
    color: #3e3a39;
  }

  @media screen and (max-width: 964px){
    .tab-on{
      display: block;
    }

    position: fixed;
    width: 100vw;
    top: 0;
    left: 0;
    background: $white;
    z-index: 10000;

    .shadow{
      padding: 18px 16px;

      .btn-orange,
      .btn-blue,
      .space{display: none;}

    }

    .nav-switch{
      display: block!important;
      width: 28px;
      height: 22px;
      position: relative;
      cursor: pointer;
      z-index: 10000;

      span{
        display: block;
        height: 1px;
        width: 100%;
        position: absolute;
        left: 50%;
        background: $blue;
        transform-origin: center;
        transition: .2s;

        &:nth-child(1){top:0;transform: translate(-50%,0);}
        &:nth-child(2){top:50%;transform: translate(-50%,-50%);}
        &:nth-child(3){bottom:0;transform: translate(-50%,0);}

      }

      &.open{
        span{
          background: $white;
          &:nth-child(1){top:50%;transform: translate(-50%,-50%) rotate(45deg);}
          &:nth-child(2){opacity: 0}
          &:nth-child(3){bottom:50%;transform: translate(-50%,-50%) rotate(-45deg);}
        }
      }
    }

    nav{
      position: fixed;
      width: 100vw;
      height: 100vh;
      background: $primary;
      top: 0;
      left: 0;
      z-index: 1000;
      overflow: scroll;

      transform: translateX(100%);
      transition: .3s cubic-bezier(0.79, 0.04, 0.45, 0.68);

      &.show{
        transform: translateX(0);
      }

      .meganavbar-nav{
        display: block;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        padding-top: 10px;
      > a{
        display: block;
        margin: 0 auto;
        width: 100%;
        max-width: 500px;
        text-align: center;
        padding: 10px 0;
        border: none;
        height: unset;
        font-size: 16px;
        border-bottom: 1px solid $white;
        color: $white;
      }
      .sns{
        display: flex!important;
        margin-top: 15px;
        justify-content: center;

        a{
          width: 24px;
          height: 24px;
          display: block;
          margin: 8px;
          &:before,&:after{
            content: none;
          }
          img{
            width: 100%;
          }
        }
      }
      }
    }
  }// tab
}

/* meganavbar container */
.meganavbar {
  display: flex;
  overflow: hidden;
  background-color: #fff;
  font-family: Arial;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  @include tab {
    background-color: $primary;
    flex-direction: column;
    width: 100%;
  }
}

/* Links inside the meganavbar */
.meganavbar a {
  float: left;
  font-size: 16px;
  color: #535353;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* The megadropdown container */
.megadropdown {
  float: left;
  overflow: hidden;
  // position: relative;
  width: 16.666%;
  max-width: 170px;
  @include tab {
    width: 100%;
    max-width: 100%;
  }
}
.content-box {
  width: 100%;
  display: flex;
  @include tab {
    margin-right: 0;
    margin-left: 0;
  }
}
/* megadropdown button */
.dropbtn {
  font-size: 16px;
  font-family: $gothic !important;
  border: none;
  outline: none;
  color: $primary;
  padding: 15px 0;
  background-color: inherit;
  font: inherit; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
  width: 100%;
  position: relative;

  &:before{
  content: '';
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 2.2em;
  background: #707070;
  @media screen and (max-width: 964px){
    display: none;
    }
  }
  @include tab {
    color: #fff;
    text-align: left;
    padding-left: 20px;
    font-size: 2rem;
    border-bottom: solid 1px rgba(255, 255, 255, .5);
    &::before, &::after {
    position: absolute;
    top: 0;
    right: 6.4%;
    bottom: 0;
    display: block;
    margin: auto;
    width: 15px;
    height: 1px;
    background-color: #fff;
    content: "";
    }
    &::after {
    transition: .3s ease;
    transform: rotate(90deg);
    transform-origin: center;
    }

    a {
      font-size: 2rem;
    }
  }
}

  .megadropdown:hover{
  background-color: $primary;
}

.megadropdown-content {
  // display: none;
  position: absolute;
  background-color: #fff;
  width: 100%;
  left: 0;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  animation: fadein .3s ease-in-out normal both;
  @keyframes fadein{
  0%{
    opacity: 0;
    transform: translateY(-3px);
  }
  100%{
    opacity: 1;
    transform: translateY(0px);
  }
}
  @include tab {
    position: unset;
  }
  z-index: 9999;
}
.open-contents {
  &::after {
      transform: rotate(0);
    }
}
.column {
  float: left;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
}
.column-title {
  width: 28%;
  flex-direction: column;
  // justify-content: center;
  padding: 46px 50px;
  background-color: #eee;
  @include tab {
    width: 100%;
    padding: 23px 25px;
    h3 {
      font-size: 2.4rem;
    }
  }
  .to-top {
    padding-top: 10px;
  }
}

.column-content {
  width: 68%;
  margin-left: 40px;
  justify-content: space-between;
  padding: 30px 0;
  @include tab {
    width: 100%;
    flex-direction: column;
    padding: 15px;
    margin-left: 0;

  }
  .item {
    width: 30%;
    a:hover {
      color: #fff;
    }
    @include tab {
      width: 100%;
    }
  }
}

/* Style links inside the columns */
.column a {
  float: none;
  padding: 15px 10px;
  text-decoration: none;
  display: block;
  text-align: left;
  @include tab {
    padding: 10px 15px;
  }
}

.column h4 {
  margin-bottom: 0;
  font-size: 2rem;
  font-weight: bold;
  font-family: $gothic;
  // position: relative;
  // &:after {
  //   position: absolute;
  //   bottom: 0;
  //   left: 10px;
  //   display: block;
  //   width: 36px;
  //   height: 1px;
  //   background-color: #535353;
  //   content: "";
  // }
}

/* Add a background color on hover */
.column a:hover {
  background-color: $primary;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

// .hide {
//     visibility: hidden !important;
// }
</style>
