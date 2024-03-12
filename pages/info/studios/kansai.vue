<template>
  <div class="p-studionewstop mx-auto">
    <section class="header-ban c-section--blue">
      <h1 class="col-12 text-center mb-0">
        <span class="d-block pb-4">複数店舗通えるから<br class="d-sm-none">継続しやすいzen place！</span>
        大阪 ピラティス<br class="d-sm-none">スタジオ一覧
      </h1>
    </section>
    <section class="py-5">
      <div class="container">
        <p
          class="py-5 mx-auto lead-text"
          style="max-width:720px;"
        >
          大阪エリア（大阪府・京都府・兵庫県）に駅チカで複数店舗あるzen placeだからこそ通いやすい！<br>
          スタジオ最寄駅からのアクセスはもちろんのこと、新大阪（大坂・梅田）からもアクセス抜群です。<br>
          <br>
          ピラティス専門スタジオならではのマットグループレッスンやエリア最大規模数のピラティスマシン台数を導入しているためピラティスマシンを利用したマシングループレッスン・プライベートレッスン数も充実しています。
        </p>
        <div>
          <div class="nav-anchor container">
            <ul>
              <li>
                <a
                  href="#osaka"
                  class=""
                >
                  大阪のスタジオ
                </a>
              </li> <li>
                <a
                  href="#hyogo"
                  class=""
                >
                  兵庫県のスタジオ
                </a>
              </li> <li>
                <a
                  href="#kyoto"
                  class=""
                >
                  京都府のスタジオ
                </a>
              </li> <li>
                <a href="#price">
                  料金情報など</a>
              </li>
            </ul>
          </div>
        </div>
        <h2 class="py-5 ext-center sec-title">
          <span>スタジオ情報</span>
          <strong>Studios</strong>
        </h2>
        <div
          id="osaka"
          class="erea-title py-3 mb-md-3"
        >
          <h3>
            大阪のスタジオ
          </h3>
        </div>
        <div class="pt-3 pb-5 studio-list">
          <div
            class="row py-5"
          >
            <div class="col-12 col-md-7">
              <div>
                <b-carousel
                  id="carousel-1"
                  v-model="slide"
                  :interval="4000"
                  controls
                  indicators
                  background="#ababab"
                  img-width="1024"
                  img-height="480"
                  style="text-shadow: 1px 1px 2px #333;"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
                >
                  <b-carousel-slide
                    loading="lazy"
                    img-src="~assets/images/info/studios/kansai/osaka/umeda/umeda-1.jpg"
                  />
                  <b-carousel-slide
                    loading="lazy"
                    img-src="~assets/images/info/studios/kansai/osaka/umeda/umeda-2.jpg"
                  />
                  <b-carousel-slide
                    loading="lazy"
                    img-src="~assets/images/info/studios/kansai/osaka/umeda/umeda-3.jpg"
                  />
                </b-carousel>
              </div>
              <b-container
                fluid
                class="p-0 pt-4"
              >
                <b-row>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      src="~assets/images/info/studios/kansai/osaka/umeda/umeda-1.jpg"
                      alt="スタジオ画像"
                    />
                  </b-col>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      src="~assets/images/info/studios/kansai/osaka/umeda/umeda-2.jpg"
                      alt="スタジオ画像"
                    />
                  </b-col>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      src="~assets/images/info/studios/kansai/osaka/umeda/umeda-3.jpg"
                      alt="スタジオ画像"
                    />
                  </b-col>
                </b-row>
              </b-container>
            </div>
            <div class="col-12 col-md-5">
              <div class="studio-info">
                <div class="studio-machine">
                  ＼ マシン台数: 19台 ／
                </div>
                <h3>梅田スタジオ</h3>
                <div class="studio-table">
                  <table class="col-12">
                    <tr>
                      <td class="studio-address studio-title">
                        住所
                      </td>
                      <td class="studio-text">
                        〒530-0001<br>
                        大阪府大阪市北区梅田1-12-17<br>
                        梅田スクエアビル10F
                      </td>
                    </tr>
                    <tr>
                      <td class="studio-time studio-title">
                        営業時間
                      </td>
                      <td class="studio-text">
                        月〜金 9:00-22:00<br>
                        土日祝 7:00-16:00
                      </td>
                    </tr>
                    <tr>
                      <td class="studio-map studio-title">
                        アクセス
                      </td>
                      <td class="studio-text">
                        梅田駅より1分・大阪駅より3分
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div class="studio-access">
                <div>
                  <studio-map
                    :studio="studio1"
                  />
                </div>
              </div>
            </div>
            <div class="col-12 center-block py-4">
              <nuxt-link
                class="
            studio-btn
            mx-auto"
                to="/studios/pilates-umeda"
              >
                スタジオページへ
              </nuxt-link>
            </div>
          </div>
          <div class="row py-5">
            <div class="col-12 col-md-7">
              <div>
                <b-carousel
                  id="carousel-1"
                  v-model="slide"
                  :interval="4000"
                  controls
                  indicators
                  background="#ababab"
                  img-width="1024"
                  img-height="480"
                  style="text-shadow: 1px 1px 2px #333;"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
                >
                  <b-carousel-slide img-src="~assets/images/info/studios/kansai/osaka/senrichuo/senrichuo-1.jpg" />
                  <b-carousel-slide img-src="~assets/images/info/studios/kansai/osaka/senrichuo/senrichuo-2.jpg" />
                  <b-carousel-slide img-src="~assets/images/info/studios/kansai/osaka/senrichuo/senrichuo-3.jpg" />
                </b-carousel>
              </div>
              <b-container
                fluid
                class="p-0 pt-4"
              >
                <b-row>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      src="~assets/images/info/studios/kansai/osaka/senrichuo/senrichuo-1.jpg"
                      alt="Image 1"
                    />
                  </b-col>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      src="~assets/images/info/studios/kansai/osaka/senrichuo/senrichuo-2.jpg"
                      alt="Image 2"
                    />
                  </b-col>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      src="~assets/images/info/studios/kansai/osaka/senrichuo/senrichuo-3.jpg"
                      alt="スタジオ画像"
                    />
                  </b-col>
                </b-row>
              </b-container>
            </div>
            <div class="col-12 col-md-5">
              <div class="studio-info">
                <div class="studio-machine">
                  ＼ マシン台数: 25台 ／
                </div>
                <h3>千里中央スタジオ</h3>
                <div class="studio-table">
                  <table class="col-12">
                    <tr>
                      <td class="studio-address studio-title">
                        住所
                      </td>
                      <td class="studio-text">
                        〒560-0082<br>
                        大阪府豊中市新千里東町1-4-2<br>
                        千里ライフサイエンスセンタービル ２F
                      </td>
                    </tr>
                    <tr>
                      <td class="studio-time studio-title">
                        営業時間
                      </td>
                      <td class="studio-text">
                        月〜金 6:00-22:55<br>
                        土日祝 7:10-20:25
                      </td>
                    </tr>
                    <tr>
                      <td class="studio-map studio-title">
                        アクセス
                      </td>
                      <td class="studio-text">
                        千里中央駅より3分・大阪駅より20分
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div class="studio-access">
                <div>
                  <studio-map
                    :studio="studio2"
                  />
                </div>
              </div>
            </div>
            <div class="col-12 center-block py-4">
              <nuxt-link
                class="
            studio-btn
            mx-auto"
                to="/studios/pilates-senrichuo"
              >
                スタジオページへ
              </nuxt-link>
            </div>
          </div>
          <div
            class="row py-5"
          >
            <div class="col-12 col-md-7">
              <div>
                <b-carousel
                  id="carousel-1"
                  v-model="slide"
                  :interval="4000"
                  controls
                  indicators
                  background="#ababab"
                  img-width="1024"
                  img-height="480"
                  style="text-shadow: 1px 1px 2px #333;"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
                >
                  <b-carousel-slide img-src="~assets/images/info/studios/kansai/osaka/shinsaibashi/shinsaibashi-1.jpg" />
                  <b-carousel-slide img-src="~assets/images/info/studios/kansai/osaka/shinsaibashi/shinsaibashi-2.jpg" />
                  <b-carousel-slide img-src="~assets/images/info/studios/kansai/osaka/shinsaibashi/shinsaibashi-3.jpg" />
                </b-carousel>
              </div>
              <b-container
                fluid
                class="p-0 pt-4"
              >
                <b-row>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      src="~assets/images/info/studios/kansai/osaka/shinsaibashi/shinsaibashi-1.jpg"
                      alt="Image 1"
                    />
                  </b-col>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      src="~assets/images/info/studios/kansai/osaka/shinsaibashi/shinsaibashi-2.jpg"
                      alt="スタジオ画像"
                    />
                  </b-col>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      src="~assets/images/info/studios/kansai/osaka/shinsaibashi/shinsaibashi-3.jpg"
                      alt="スタジオ画像"
                    />
                  </b-col>
                </b-row>
              </b-container>
            </div>
            <div class="col-12 col-md-5">
              <div class="studio-info">
                <div class="studio-machine">
                  ＼ マシン台数: 13台 ／
                </div>
                <h3>心斎橋スタジオ</h3>
                <div class="studio-table">
                  <table class="col-12">
                    <tr>
                      <td class="studio-address studio-title">
                        住所
                      </td>
                      <td class="studio-text">
                        〒542-0086<br>
                        大阪府 大阪市中央区 西心斎橋1-4-5<br>
                        御堂筋ビルディング 8F
                      </td>
                    </tr>
                    <tr>
                      <td class="studio-time studio-title">
                        営業時間
                      </td>
                      <td class="studio-text">
                        月〜金 7:30-22:00<br>
                        土日祝 8:15-20:40
                      </td>
                    </tr>
                    <tr>
                      <td class="studio-map studio-title">
                        アクセス
                      </td>
                      <td class="studio-text">
                        心斎橋駅より3分・大阪駅より20分
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div class="studio-access">
                <div>
                  <studio-map
                    :studio="studio3"
                  />
                </div>
              </div>
            </div>
            <div class="col-12 center-block py-4">
              <nuxt-link
                class="
            studio-btn
            mx-auto"
                to="/studios/pilates-shinsaibashi"
              >
                スタジオページへ
              </nuxt-link>
            </div>
          </div>
          <div class="row py-5">
            <div class="col-12 col-md-7">
              <div>
                <b-carousel
                  id="carousel-1"
                  v-model="slide"
                  :interval="4000"
                  controls
                  indicators
                  background="#ababab"
                  img-width="1024"
                  img-height="480"
                  style="text-shadow: 1px 1px 2px #333;"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
                >
                  <b-carousel-slide img-src="~assets/images/info/studios/kansai/osaka/tennoji/tennoji-1.jpg" />
                  <b-carousel-slide img-src="~assets/images/info/studios/kansai/osaka/tennoji/tennoji-2.jpg" />
                  <b-carousel-slide img-src="~assets/images/info/studios/kansai/osaka/tennoji/tennoji-3.jpg" />
                </b-carousel>
              </div>
              <b-container
                fluid
                class="p-0 pt-4"
              >
                <b-row>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      src="~assets/images/info/studios/kansai/osaka/tennoji/tennoji-1.jpg"
                      alt="Image 1"
                    />
                  </b-col>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      src="~assets/images/info/studios/kansai/osaka/tennoji/tennoji-2.jpg"
                      alt="スタジオ画像"
                    />
                  </b-col>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      src="~assets/images/info/studios/kansai/osaka/tennoji/tennoji-3.jpg"
                      alt="スタジオ画像"
                    />
                  </b-col>
                </b-row>
              </b-container>
            </div>
            <div class="col-12 col-md-5">
              <div class="studio-info">
                <div class="studio-machine">
                  ＼ マシン台数: 7台 ／
                </div>
                <h3>天王寺スタジオ</h3>
                <div class="studio-table">
                  <table class="col-12">
                    <tr>
                      <td class="studio-address studio-title">
                        住所
                      </td>
                      <td class="studio-text">
                        〒545-0052<br>
                        大阪府 大阪市阿倍野区 阿倍野筋1-3-15<br>
                        阿倍野共同ビル 6F
                      </td>
                    </tr>
                    <tr>
                      <td class="studio-time studio-title">
                        営業時間
                      </td>
                      <td class="studio-text">
                        月〜金 7:15-21:55<br>
                        土日祝 7:00-20:40
                      </td>
                    </tr>
                    <tr>
                      <td class="studio-map studio-title">
                        アクセス
                      </td>
                      <td class="studio-text">
                        天王寺駅前駅より徒歩3分・大阪阿倍野橋駅より徒歩3分
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div class="studio-access">
                <div>
                  <studio-map
                    :studio="studio4"
                  />
                </div>
              </div>
            </div>
            <div class="col-12 center-block py-4">
              <nuxt-link
                class="
            studio-btn
            mx-auto"
                to="/studios/pilates-tennoji"
              >
                スタジオページへ
              </nuxt-link>
            </div>
          </div>
          <div class="row py-5">
            <div class="col-12 col-md-7">
              <div>
                <b-carousel
                  id="carousel-1"
                  v-model="slide"
                  :interval="4000"
                  controls
                  indicators
                  background="#ababab"
                  img-width="1024"
                  img-height="480"
                  style="text-shadow: 1px 1px 2px #333;"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
                >
                  <b-carousel-slide img-src="~assets/images/info/studios/kansai/osaka/esaka/esaka-1.jpg" />
                  <b-carousel-slide img-src="~assets/images/info/studios/kansai/osaka/esaka/esaka-2.jpg" />
                  <b-carousel-slide img-src="~assets/images/info/studios/kansai/osaka/esaka/esaka-3.jpg" />
                </b-carousel>
              </div>
              <!-- Thumbnails -->
              <b-container
                fluid
                class="p-0 pt-4"
              >
                <b-row>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      src="~assets/images/info/studios/kansai/osaka/esaka/esaka-1.jpg"
                      alt="Image 1"
                    />
                  </b-col>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      src="~assets/images/info/studios/kansai/osaka/esaka/esaka-2.jpg"
                      alt="スタジオ画像"
                    />
                  </b-col>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      src="~assets/images/info/studios/kansai/osaka/esaka/esaka-3.jpg"
                      alt="スタジオ画像"
                    />
                  </b-col>
                </b-row>
              </b-container>
            <!-- Thumbnails -->
            </div>
            <div class="col-12 col-md-5">
              <div class="studio-info">
                <div class="studio-machine">
                  ＼ マシン台数: 8台 ／
                </div>
                <h3>江坂スタジオ</h3>
                <div class="studio-table">
                  <table class="col-12">
                    <tr>
                      <td class="studio-address studio-title">
                        住所
                      </td>
                      <td class="studio-text">
                        〒564-0051<br>
                        大阪府 吹田市豊津町 9-44<br>
                        ハートランド江坂 5F
                      </td>
                    </tr>
                    <tr>
                      <td class="studio-time studio-title">
                        営業時間
                      </td>
                      <td class="studio-text">
                        月〜金 7:15-22:05<br>
                        土日祝 7:15-20:55
                      </td>
                    </tr>
                    <tr>
                      <td class="studio-map studio-title">
                        アクセス
                      </td>
                      <td class="studio-text">
                        江坂駅より徒歩1分
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div class="studio-access">
                <div>
                  <studio-map
                    :studio="studio5"
                  />
                </div>
              </div>
            </div>
            <div class="col-12 center-block py-4">
              <nuxt-link
                class="
            studio-btn
            mx-auto"
                to="/studios/pilates-esaka"
              >
                スタジオページへ
              </nuxt-link>
            </div>
          </div>
          <div class="row py-5">
            <div class="col-12 col-md-7">
              <div>
                <b-carousel
                  id="carousel-1"
                  v-model="slide"
                  :interval="4000"
                  controls
                  indicators
                  background="#ababab"
                  img-width="1024"
                  img-height="480"
                  style="text-shadow: 1px 1px 2px #333;"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
                >
                  <b-carousel-slide img-src="~assets/images/info/studios/kansai/osaka/minamimorimachi/minamimorimachi-1.jpg" />
                  <b-carousel-slide img-src="~assets/images/info/studios/kansai/osaka/minamimorimachi/minamimorimachi-2.jpg" />
                  <b-carousel-slide img-src="~assets/images/info/studios/kansai/osaka/minamimorimachi/minamimorimachi-3.jpg" />
                </b-carousel>
              </div>
              <!-- Thumbnails -->
              <b-container
                fluid
                class="p-0 pt-4"
              >
                <b-row>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      src="~assets/images/info/studios/kansai/osaka/minamimorimachi/minamimorimachi-1.jpg"
                      alt="Image 1"
                    />
                  </b-col>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      src="~assets/images/info/studios/kansai/osaka/minamimorimachi/minamimorimachi-2.jpg"
                      alt="スタジオ画像"
                    />
                  </b-col>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      src="~assets/images/info/studios/kansai/osaka/minamimorimachi/minamimorimachi-3.jpg"
                      alt="スタジオ画像"
                    />
                  </b-col>
                </b-row>
              </b-container>
            <!-- Thumbnails -->
            </div>
            <div class="col-12 col-md-5">
              <div class="studio-info">
                <div class="studio-machine">
                  ＼ マシン台数: 3台 ／
                </div>
                <h3>南森町スタジオ</h3>
                <div class="studio-table">
                  <table class="col-12">
                    <tr>
                      <td class="studio-address studio-title">
                        住所
                      </td>
                      <td class="studio-text">
                        〒530-0041<br>
                        大阪府 大阪市北区天神橋 2-3-16<br>
                        AXIS南森町ビル 4F
                      </td>
                    </tr>
                    <tr>
                      <td class="studio-time studio-title">
                        営業時間
                      </td>
                      <td class="studio-text">
                        月〜金 7:15-21:55<br>
                        土日祝 7:00-21:45
                      </td>
                    </tr>
                    <tr>
                      <td class="studio-map studio-title">
                        アクセス
                      </td>
                      <td class="studio-text">
                        南森町駅より徒歩1分
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div class="studio-access">
                <div>
                  <studio-map
                    :studio="studio6"
                  />
                </div>
              </div>
            </div>
            <div class="col-12 center-block py-4">
              <nuxt-link
                class="
            studio-btn
            mx-auto"
                to="/studios/pilates-minamimorimachi"
              >
                スタジオページへ
              </nuxt-link>
            </div>
          </div>
          <div class="row py-5">
            <div class="col-12 col-md-7">
              <div>
                <b-carousel
                  id="carousel-1"
                  v-model="slide"
                  :interval="4000"
                  controls
                  indicators
                  background="#ababab"
                  img-width="1024"
                  img-height="480"
                  style="text-shadow: 1px 1px 2px #333;"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
                >
                  <b-carousel-slide img-src="~assets/images/info/studios/kansai/osaka/toyonaka/toyonaka-1.jpg" />
                  <b-carousel-slide img-src="~assets/images/info/studios/kansai/osaka/toyonaka/toyonaka-2.jpg" />
                  <b-carousel-slide img-src="~assets/images/info/studios/kansai/osaka/toyonaka/toyonaka-3.jpg" />
                </b-carousel>
              </div>
              <!-- Thumbnails -->
              <b-container
                fluid
                class="p-0 pt-4"
              >
                <b-row>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      src="~assets/images/info/studios/kansai/osaka/toyonaka/toyonaka-1.jpg"
                      alt="Image 1"
                    />
                  </b-col>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      src="~assets/images/info/studios/kansai/osaka/toyonaka/toyonaka-2.jpg"
                      alt="スタジオ画像"
                    />
                  </b-col>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      src="~assets/images/info/studios/kansai/osaka/toyonaka/toyonaka-3.jpg"
                      alt="スタジオ画像"
                    />
                  </b-col>
                </b-row>
              </b-container>
            <!-- Thumbnails -->
            </div>
            <div class="col-12 col-md-5">
              <div class="studio-info">
                <div class="studio-machine">
                  ＼ マシン台数: 4台 ／
                </div>
                <h3>豊中スタジオ</h3>
                <div class="studio-table">
                  <table class="col-12">
                    <tr>
                      <td class="studio-address studio-title">
                        住所
                      </td>
                      <td class="studio-text">
                        〒560-0021<br>
                        大阪府 豊中市 本町3-1-57<br>
                        ルミエール豊中 5F
                      </td>
                    </tr>
                    <tr>
                      <td class="studio-time studio-title">
                        営業時間
                      </td>
                      <td class="studio-text">
                        月〜金 8:00-21:55<br>
                        土日祝 7:10-20:55
                      </td>
                    </tr>
                    <tr>
                      <td class="studio-map studio-title">
                        アクセス
                      </td>
                      <td class="studio-text">
                        豊中駅より徒歩５分
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div class="studio-access">
                <div>
                  <studio-map
                    :studio="studio7"
                  />
                </div>
              </div>
            </div>
            <div class="col-12 center-block py-4">
              <nuxt-link
                class="
            studio-btn
            mx-auto"
                to="/studios/pilates-toyonaka"
              >
                スタジオページへ
              </nuxt-link>
            </div>
          </div>
          <div class="row py-5">
            <div class="col-12 col-md-7">
              <div>
                <b-carousel
                  id="carousel-1"
                  v-model="slide"
                  :interval="4000"
                  controls
                  indicators
                  background="#ababab"
                  img-width="1024"
                  img-height="480"
                  style="text-shadow: 1px 1px 2px #333;"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
                >
                  <b-carousel-slide img-src="~assets/images/info/studios/kansai/osaka/takatsuki/takatsuki-1.jpg" />
                  <b-carousel-slide img-src="~assets/images/info/studios/kansai/osaka/takatsuki/takatsuki-2.jpg" />
                  <b-carousel-slide img-src="~assets/images/info/studios/kansai/osaka/takatsuki/takatsuki-3.jpg" />
                </b-carousel>
              </div>
              <!-- Thumbnails -->
              <b-container
                fluid
                class="p-0 pt-4"
              >
                <b-row>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      src="~assets/images/info/studios/kansai/osaka/takatsuki/takatsuki-1.jpg"
                      alt="Image 1"
                    />
                  </b-col>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      src="~assets/images/info/studios/kansai/osaka/takatsuki/takatsuki-2.jpg"
                      alt="スタジオ画像"
                    />
                  </b-col>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      src="~assets/images/info/studios/kansai/osaka/takatsuki/takatsuki-3.jpg"
                      alt="スタジオ画像"
                    />
                  </b-col>
                </b-row>
              </b-container>
            <!-- Thumbnails -->
            </div>
            <div class="col-12 col-md-5">
              <div class="studio-info">
                <div class="studio-machine">
                  ＼ マシン台数: 5台 ／
                </div>
                <h3>高槻スタジオ</h3>
                <div class="studio-table">
                  <table class="col-12">
                    <tr>
                      <td class="studio-address studio-title">
                        住所
                      </td>
                      <td class="studio-text">
                        〒569-0804<br>
                        大阪府 高槻市 紺屋町6-5<br>
                        イマホリビル 3F
                      </td>
                    </tr>
                    <tr>
                      <td class="studio-time studio-title">
                        営業時間
                      </td>
                      <td class="studio-text">
                        月〜金 7:40-22:15<br>
                        土日祝 7:05-21:15
                      </td>
                    </tr>
                    <tr>
                      <td class="studio-map studio-title">
                        アクセス
                      </td>
                      <td class="studio-text">
                        高槻駅より徒歩２分
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div class="studio-access">
                <div>
                  <studio-map
                    :studio="studio8"
                  />
                </div>
              </div>
            </div>
            <div class="col-12 center-block py-4">
              <nuxt-link
                class="
            studio-btn
            mx-auto"
                to="/studios/pilates-takatsuki"
              >
                スタジオページへ
              </nuxt-link>
            </div>
          </div>
          <div
            id="hyogo"
            class="erea-title py-3 mt-md-5 mb-md-3"
          >
            <h3>
              兵庫県のスタジオ
            </h3>
          </div>
          <div class="row py-5">
            <div class="col-12 col-md-7">
              <div>
                <b-carousel
                  id="carousel-1"
                  v-model="slide"
                  :interval="4000"
                  controls
                  indicators
                  background="#ababab"
                  img-width="1024"
                  img-height="480"
                  style="text-shadow: 1px 1px 2px #333;"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
                >
                  <b-carousel-slide img-src="~assets/images/info/studios/kansai/hyogo/sannomiya/sannomiya-1.jpg" />
                  <b-carousel-slide img-src="~assets/images/info/studios/kansai/hyogo/sannomiya/sannomiya-2.jpg" />
                  <b-carousel-slide img-src="~assets/images/info/studios/kansai/hyogo/sannomiya/sannomiya-3.jpg" />
                </b-carousel>
              </div>
              <!-- Thumbnails -->
              <b-container
                fluid
                class="p-0 pt-4"
              >
                <b-row>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      src="~assets/images/info/studios/kansai/hyogo/sannomiya/sannomiya-1.jpg"
                      alt="Image 1"
                    />
                  </b-col>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      src="~assets/images/info/studios/kansai/hyogo/sannomiya/sannomiya-2.jpg"
                      alt="スタジオ画像"
                    />
                  </b-col>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      src="~assets/images/info/studios/kansai/hyogo/sannomiya/sannomiya-3.jpg"
                      alt="スタジオ画像"
                    />
                  </b-col>
                </b-row>
              </b-container>
            <!-- Thumbnails -->
            </div>
            <div class="col-12 col-md-5">
              <div class="studio-info">
                <div class="studio-machine">
                  ＼ マシン台数: 9台 ／
                </div>
                <h3>三宮スタジオ</h3>
                <div class="studio-table">
                  <table class="col-12">
                    <tr>
                      <td class="studio-address studio-title">
                        住所
                      </td>
                      <td class="studio-text">
                        〒650-0021<br>
                        兵庫県 神戸市中央区 三宮町1-3-15<br>
                        京町筋安田ビル 4F
                      </td>
                    </tr>
                    <tr>
                      <td class="studio-time studio-title">
                        営業時間
                      </td>
                      <td class="studio-text">
                        月〜金 7:15-21:40<br>
                        土日祝 7:15-20:55
                      </td>
                    </tr>
                    <tr>
                      <td class="studio-map studio-title">
                        アクセス
                      </td>
                      <td class="studio-text">
                        三宮・花時計前から１分以内
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div class="studio-access">
                <div>
                  <studio-map
                    :studio="studio9"
                  />
                </div>
              </div>
            </div>
            <div class="col-12 center-block py-4">
              <nuxt-link
                class="
            studio-btn
            mx-auto"
                to="/studios/pilates-sannomiya"
              >
                スタジオページへ
              </nuxt-link>
            </div>
          </div>
          <div class="row py-5">
            <div class="col-12 col-md-7">
              <div>
                <b-carousel
                  id="carousel-1"
                  v-model="slide"
                  :interval="4000"
                  controls
                  indicators
                  background="#ababab"
                  img-width="1024"
                  img-height="480"
                  style="text-shadow: 1px 1px 2px #333;"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
                >
                  <b-carousel-slide img-src="~assets/images/info/studios/kansai/hyogo/tsukaguchi/tsukaguchi-1.jpg" />
                  <b-carousel-slide img-src="~assets/images/info/studios/kansai/hyogo/tsukaguchi/tsukaguchi-2.jpg" />
                  <b-carousel-slide img-src="~assets/images/info/studios/kansai/hyogo/tsukaguchi/tsukaguchi-3.jpg" />
                </b-carousel>
              </div>
              <!-- Thumbnails -->
              <b-container
                fluid
                class="p-0 pt-4"
              >
                <b-row>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      src="~assets/images/info/studios/kansai/hyogo/tsukaguchi/tsukaguchi-1.jpg"
                      alt="Image 1"
                    />
                  </b-col>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      src="~assets/images/info/studios/kansai/hyogo/tsukaguchi/tsukaguchi-2.jpg"
                      alt="スタジオ画像"
                    />
                  </b-col>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      src="~assets/images/info/studios/kansai/hyogo/tsukaguchi/tsukaguchi-3.jpg"
                      alt="スタジオ画像"
                    />
                  </b-col>
                </b-row>
              </b-container>
            <!-- Thumbnails -->
            </div>
            <div class="col-12 col-md-5">
              <div class="studio-info">
                <div class="studio-machine">
                  ＼ マシン台数: 10台 ／
                </div>
                <h3>塚口スタジオ</h3>
                <div class="studio-table">
                  <table class="col-12">
                    <tr>
                      <td class="studio-address studio-title">
                        住所
                      </td>
                      <td class="studio-text">
                        〒661-0002<br>
                        兵庫県尼崎市塚口町1-16-6<br>
                        ハイネススガヤビル 4F
                      </td>
                    </tr>
                    <tr>
                      <td class="studio-time studio-title">
                        営業時間
                      </td>
                      <td class="studio-text">
                        月〜金 7:30-22:00<br>
                        土日祝 7:05-21:55
                      </td>
                    </tr>
                    <tr>
                      <td class="studio-map studio-title">
                        アクセス
                      </td>
                      <td class="studio-text">
                        阪急塚口駅から徒歩4分
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div class="studio-access">
                <div>
                  <studio-map
                    :studio="studio10"
                  />
                </div>
              </div>
            </div>
            <div class="col-12 center-block py-4">
              <nuxt-link
                class="
            studio-btn
            mx-auto"
                to="/studios/pilates-tsukaguchi"
              >
                スタジオページへ
              </nuxt-link>
            </div>
          </div>
          <div
            id="kyoto"
            class="erea-title py-3 mt-md-5 mb-md-3"
          >
            <h3>
              京都府のスタジオ
            </h3>
          </div>
          <div class="row py-5">
            <div class="col-12 col-md-7">
              <div>
                <b-carousel
                  id="carousel-1"
                  v-model="slide"
                  :interval="4000"
                  controls
                  indicators
                  background="#ababab"
                  img-width="1024"
                  img-height="480"
                  style="text-shadow: 1px 1px 2px #333;"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
                >
                  <b-carousel-slide img-src="~assets/images/info/studios/kansai/kyoto/kyoto-1.jpg" />
                  <b-carousel-slide img-src="~assets/images/info/studios/kansai/kyoto/kyoto-2.jpg" />
                  <b-carousel-slide img-src="~assets/images/info/studios/kansai/kyoto/kyoto-3.jpg" />
                </b-carousel>
              </div>
              <!-- Thumbnails -->
              <b-container
                fluid
                class="p-0 pt-4"
              >
                <b-row>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      src="~assets/images/info/studios/kansai/kyoto/kyoto-1.jpg"
                      alt="Image 1"
                    />
                  </b-col>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      src="~assets/images/info/studios/kansai/kyoto/kyoto-2.jpg"
                      alt="スタジオ画像"
                    />
                  </b-col>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      src="~assets/images/info/studios/kansai/kyoto/kyoto-3.jpg"
                      alt="スタジオ画像"
                    />
                  </b-col>
                </b-row>
              </b-container>
            <!-- Thumbnails -->
            </div>
            <div class="col-12 col-md-5">
              <div class="studio-info">
                <div class="studio-machine">
                  ＼ マシン台数: 5台 ／
                </div>
                <h3>京都スタジオ</h3>
                <div class="studio-table">
                  <table class="col-12">
                    <tr>
                      <td class="studio-address studio-title">
                        住所
                      </td>
                      <td class="studio-text">
                        〒600-8009<br>
                        京都府 京都市下京区 四条通り室町東入函谷鉾町79<br>
                        ヤサカ四条烏丸ビル 9F
                      </td>
                    </tr>
                    <tr>
                      <td class="studio-time studio-title">
                        営業時間
                      </td>
                      <td class="studio-text">
                        月〜金 7:05-22:10<br>
                        土日祝 7:10-21:55
                      </td>
                    </tr>
                    <tr>
                      <td class="studio-map studio-title">
                        アクセス
                      </td>
                      <td class="studio-text">
                        阪急烏丸駅24番出口より徒歩１分
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div class="studio-access">
                <div>
                  <studio-map
                    :studio="studio11"
                  />
                </div>
              </div>
            </div>
            <div class="col-12 center-block py-4">
              <nuxt-link
                class="
            studio-btn
            mx-auto"
                to="/studios/pilates-kyoto"
              >
                スタジオページへ
              </nuxt-link>
            </div>
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

    <section
      id="price"
      class="py-5 p-price-table"
    >
      <div class="l-new-container py-5">
        <h2 class="text-center pb-3 sec-title">
          <span>スタジオ料金</span>
          <strong>Price List</strong>
        </h2>
        <p class="text-left mb-5">
          zen placeは、わかりやすい月額料金＋チケット制。<br class="d-sp-none">
          同じグレード内なら、どのエリアでも通い放題です。<br>
          関西エリアのピラティス、ヨガの様々なレッスンを、<br class="d-none d-tab-block d-sp-none">あなたの好きな時好きな場所でいつでも、ご予約いただけます。
        </p>
        <div class="col-12 center-block py-4">
          <nuxt-link
            class="
            studio-btn
            mx-auto"
            to="/price"
          >
            料金ページへ
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="py-5 machine-pilates bg-light-gray">
      <div class="container pb-5">
        <h2 class="text-center pt-5 pb-3 sec-title">
          <span>マシンピラティスについて</span>
          <strong>About Pilates Machine</strong>
        </h2>
        <div class="row pb-3">
          <div class="col-12 col-md-6">
            <img
              loading="lazy"
              src="~assets/images/info/studios/kansai/machinepilates_about.jpg"
              alt="マシンピラティスをやっている女性の写真"
              class="w-100 d-block mx-auto pb-5"
              style="max-width:400px;"
            >
          </div>
          <div class="col-12 col-md-6">
            <p class="">
              マシンピラティスは専用のマシンを使ってエクササイズを行います。マシンは、リフォーマー、キャディラック、ワンダーチェアー、ラダーバレルがあり、筋肉の強化や、身体の使い方をより正確に学ぶ事が出来ます（マシンの種類はスタジオによって異なります）。<br>
              <br>
              マシンの使用は、まず、個人の身体的特徴や動き、目的に合わせて使うマシンを選択します。リフォーマーやキャディラック、ワンダーチェアーなどは、バネの重さや角度を細かいレベルで微調整します。器具のサポートがあることで、身体を無理なく動かすことができるため、ピラティス初心者の方にもおすすめです。<br>
              <br>
              普段意識しにくい細部の筋肉（インナーマッスル）を使うため、初めてマシンピラティスをされる方は、意識したことのない筋肉を使うことに驚かれるかもしれません。マシンを使って様々な方向に身体を動かすことで可動域を広げていき、同時に体幹や体の軸を鍛え、安定性と柔軟性を得ることができます。
            </p>
            <br>
          </div>
          <div class="col-12 py-4">
            <nuxt-link
              class="studio-btn mx-auto"
              to="/pilates/machine"
            >
              マシンピラティスページへ
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section class="py-5 machine-pilates">
      <div class="container pb-5">
        <h2 class="text-center pt-5 pb-3 sec-title">
          <span>本質を追い求めたレッスンをお楽しみください</span>
          <strong>Lessons</strong>
        </h2>
        <div class="row justify-content-md-center pb-3">
          <div class="col-12 col-md-4  py-4">
            <img
              loading="lazy"
              src="~assets/images/info/studios/kansai/lesson01.jpg"
              alt="マシンピラティスをやっている女性の写真"
              class="w-100 d-block mx-auto"
              style="max-width:400px;"
            >
            <div class="lesson-title">
              <p class="pt-3">
                マット・マシンピラティス
              </p>
              <h3>
                プライベートレッスン
              </h3>
            </div>
          </div>
          <div class="col-12 col-md-4  py-4">
            <img
              loading="lazy"
              src="~assets/images/info/studios/kansai/lesson02.jpg"
              alt="マシンピラティスをやっている女性の写真"
              class="w-100 d-block mx-auto"
              style="max-width:400px;"
            >
            <div class="lesson-title">
              <p class="pt-3">
                「リフォーマーグループ」
              </p>
              <h3>
                マシンピラティス グループレッスン
              </h3>
            </div>
          </div>
          <div class="col-12 col-md-4  py-4">
            <img
              loading="lazy"
              src="~assets/images/info/studios/kansai/lesson03.jpg"
              alt="マシンピラティスをやっている女性の写真"
              class="w-100 d-block mx-auto"
              style="max-width:400px;"
            >
            <div class="lesson-title">
              <p class="pt-3">
                マット・マシンピラティス
              </p>
              <h3>
                グループレッスン
              </h3>
            </div>
          </div>
          <!-- <div class="col-12 col-md-7">
              <h3 class="pb-3">
                マット・ピラティス<br><strong>グループレッスン</strong>
              </h3>
              <p class="pb-5">
                マット・ピラティスは、身体への意識を深めることを目的とした、ピラティスの基礎とも言うべきメソッドです。<br>
                ピラティスマットの上などで、呼吸のリズムや動きのテンポなどを協調させて動くことの気持ち良さ、楽しさを感じていただけるマットワークのレッスンです。<br>
                様々なテーマやレベルのクラスを用意しておりますが、初心者でも全てのクラスに参加できます。
              </p>
            </div> -->
        </div>
        <div class="col-12 center-block py-4">
          <nuxt-link
            class="
            studio-btn
            mx-auto"
            to="/pilates"
          >
            ピラティスTOPへ
          </nuxt-link>
        </div>
      </div>
    </section>
    <CtaLower />
    <section class="py-5">
      <div class="container py-5">
        <h2 class="text-center pb-5">
          大阪でピラティスをするならzen place!
        </h2>
        <div class="row pb-3">
          <div class="col-6 pr-2">
            <img
              loading="lazy"
              src="~assets/images/info/studios/kansai/pilates01.jpg"
              alt="ピラティスレッスン写真"
              class="w-100 d-block mx-auto pb-3"
              style="max-width:400px;"
            >
          </div>
          <div class="col-6 pl-2">
            <img
              loading="lazy"
              src="~assets/images/info/studios/kansai/pilates02.jpg"
              alt="ピラティスレッスン写真"
              class="w-100 d-block mx-auto pb-3"
              style="max-width:400px;"
            >
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
      title: '大阪エリア ピラティススタジオまとめ',
      meta: [
        { hid: 'description', name: 'description', content: '大阪にピラティススタジオが沿線上にたくさんあるから通いやすい！マシンピラティスのプライベートレッスン、マシンピラティスのグループレッスンやマットグループレッスン、すべてがピラティス専門スタジオで楽しめます！' },
        { hid: 'keywords', name: 'keywords', content: 'ピラティス, スタジオ, 関西, 大阪, マシン' },
      ],

    };
  },

  async asyncData({ app }) {
    const studio1 = await app.$zenplaceApi.getStudio(40);
    const studio2 = await app.$zenplaceApi.getStudio(28);
    const studio3 = await app.$zenplaceApi.getStudio(48);
    const studio4 = await app.$zenplaceApi.getStudio(77);
    const studio5 = await app.$zenplaceApi.getStudio(70);
    const studio6 = await app.$zenplaceApi.getStudio(160);
    const studio7 = await app.$zenplaceApi.getStudio(119);
    const studio8 = await app.$zenplaceApi.getStudio(56);
    const studio9 = await app.$zenplaceApi.getStudio(55);
    const studio10 = await app.$zenplaceApi.getStudio(126);
    const studio11 = await app.$zenplaceApi.getStudio(58);

    return {
      studio1,
      studio2,
      studio3,
      studio4,
      studio5,
      studio6,
      studio7,
      studio8,
      studio9,
      studio10,
      studio11,
    };
  },

};

</script>

<style lang="scss" scoped>
@import '~assets/scss/newvariables';

.p-studionewstop {
 font-family: $gothic !important;
 line-height: 1.75;
}
.pc{display:block;}
.sp{display:none;}
.c-section--gray {background-color:#efefef;}
.c-section--darkgray{background-color:#d7d7d7;}
.c-section--blue{background-color:#0066a4; color:#fff;}
.p-studionewstop a img {cursor: pointer;}
.t-blue{color:#0066a4;}
.p-studionewstop .studio-btn{background-color:#E93742; color:#fff; padding:15px 20px; font-size:1.8rem; display:block; max-width:280px; text-align:center;border-radius: 50px;}
.p-studionewstop h3{font-size:2rem; line-height:3rem;}

.studio-list h3{font-size: 2.5rem; }
.studio-list h3 span{font-size:1.5rem; color:#999;}
.studio-access h4{font-size:1.8rem; font-weight:bold;}

.machine-pilates h2{margin-bottom: 20px; font-size:2.5rem;}
.machine-pilates h3 {font-size:1.5rem;}
.machine-pilates h3 strong{font-size:2rem;}
.header-ban{
  background:url("~assets/images/info/studios/kansai/bg-img.jpg") center center no-repeat;
  background-size:cover;
  padding: 15rem 0;
  @include tab {
    padding: 5rem 0;
  }
}
.header-ban h1{font-weight: Medium; font-size:5.6rem; letter-spacing: 1px;}
.header-ban h1 span{font-size:2.8rem; padding-bottom: 10px;}

@media screen and (max-width:768px){

.pc{display:none;}
.sp{display:block;}

.header-ban h1{font-size:4rem; letter-spacing: 1px;}
.header-ban h1 span{font-size:2.5rem; padding-bottom:5px;}

.studio-list h3{font-size: 2.3rem; }
.studio-list h3 span{font-size:1.5rem; color:#999;}
.studio-access h4{font-size:1.8rem; font-weight:bold;}

}

body .l-new .c-header-border-bottom {
    font-size: 2.5rem;
}

.p-price-table h2 {
    font-size: 2.5rem;
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
      margin-bottom: 20px;

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
.bg-gray {
  background-color: #666;
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
.sec-title {
  margin-bottom: 0;
  text-align: center;
  font-size: 2rem;
  line-height: 1.8;

  @include tab{
    margin-bottom: 0;
  }
  span {
    display: block;
    color: #535353;
    font-size: 1.8rem;

    @include tab{
      font-size: 1.6rem;
    }
  }
  strong {
    color: #E93742;
    font-size: 3.6rem;
    font-family: 'Space Grotesk', sans-serif;

    @include tab{
      font-size: 2.6rem;
    }
  }
}
.sub-title {
  margin-bottom: 2rem;
  color: #E93742;
  font-weight: bold;
  font-size: 2.6rem;
  font-family: $gothic !important;
  line-height: 1.5;
}
.erea-title {
  margin: auto;
  background-color: #f0f0f0;
  border-radius: 10px;
  h3 {
  display: block;
  text-align: center;
  color: #535353;
  font-size: 2.6rem;
  font-weight: 600;
  letter-spacing: 0.125rem;
  padding: 10px 0;

  @include sp{
    font-size: 2.2rem;
    }
  }
}

.erea-title-2 {
  margin: auto;
  border-top: 3px solid #E93742;
  border-bottom: 3px solid #E93742;
  h3 {
  display: block;
  text-align: center;
  color: #296198;
  font-size: 2.6rem;
  font-weight: 600;
  letter-spacing: 0.125rem;
  padding: 10px 0;

  @include sp{
    font-size: 2.2rem;
    }
  }
}

.lesson-title {
  p {
    font-size: 1.3rem;
    margin-bottom: 0;
  }
  h3 {
    font-size: 1.8rem;
    font-weight: 600;
  }
}

#myCarousel {
  .list-inline{
    white-space:nowrap;
    overflow-x:auto;
  }
  .carousel-indicators {
    position: static;
    left: initial;
    width: initial;
    margin-left: initial;
    li {
      width: initial;
      height: initial;
      text-indent: initial;
    }
    li.active {
        img {
          opacity: 0.7;
        }
      }
  }
}

.nav-anchor {
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 2em;
  ul {
    display: flex;
    justify-content: space-between;

    padding: 0;
    @include tab {
      flex-wrap: wrap;
    }
    li {
      border: 2px solid #E93742;
      margin-bottom: 1em;
      padding: 0.8em 0;
      text-align: center;
      width: 24%;
      border-radius: 5px;
      @include tab {
        width: 48%;
      }
      a {
        color: #E93742;
        font-size: 16px;
        @include sp {
          font-size: pv(12);
        }
      }
    }
  }
}

.lead-text {
  font-family: $mincho;
}

.studio-machine {
    font-size: 1.5rem;
    font-weight: 500;
    color: #535353;
    @include sp {
      margin-top: 20px;
    font-size: 1.3rem;
    }
  }

.studio-table {
  padding: 20px 0 30px;
  tr {
    width: 100%;
  }
  td {
    padding: 10px;
    border-bottom: 1px solid #d0d0d0;
    border-top: 1px solid #d0d0d0;
  }
    td.studio-title {
      width: 27%;
      font-size: 1.6rem;
      font-weight: 600;
      @include sp {
        width: 35%;
      }
    }
    td.studio-text {
      width: 73%;
      @include sp {
        width: 65%;
      }
    }
    td.studio-address::before {
      content: '';
      display: inline-block;
      position: relative;
      top: 3px;
      width: 17px;
      height: 17px;
      background-image: url('~assets/images/info/studios/kansai/icon_home.svg');
      background-size: contain;
      background-repeat: no-repeat;
      margin-right: 5px;
    }
    td.studio-time::before {
      content: '';
      display: inline-block;
      position: relative;
      top: 3px;
      width: 17px;
      height: 17px;
      background-image: url('~assets/images/info/studios/kansai/icon_time.svg');
      background-size: contain;
      background-repeat: no-repeat;
      margin-right: 5px;
    }
    td.studio-map::before {
      content: '';
      display: inline-block;
      position: relative;
      top: 2px;
      width: 18px;
      height: 18px;
      background-image: url('~assets/images/info/studios/kansai/icon_access.svg');
      background-size: contain;
      background-repeat: no-repeat;
      margin-right: 3px;
      margin-left: 2px;
    }

}

</style>
