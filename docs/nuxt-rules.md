# Nuxt を使う時に注意するポイント

WIP (work in progress) のドキュメントです

## Nuxtとは

NuxtはVue.jsの上のフレームワークです。

## Nuxtのしっとくべきのところ

### 1. フォルダー構造 / Folder Structure

開発に主に必要なところは

1. `layouts` ヘッダーフッターの様々なパターン
2. `pages` ファイル名によってURLになる部分
3. `components` ページやlayoutに再利用する部分

### 2. SPAと外部リンクを分ける必要ある

SPAリンクとは、ページ繊維するときに「変わった部分だけをロードする」方法です。
例えば、すでにロードされてあるcss、javascript、bootstrapなどをロードせず、ページ繊維の時にロードしない。
新しいページのテキストだけをロードすると、繊維は5-10kbくらいで住むはず。

基本的に、同じ nuxt 内にリンクする時に、SPAリンクを使う。
SPAリンクの書き方は下記になります。

```html
<nuxt-link to="/studios">
```

あるいは、URLに入っているパラメータが変わる時に、

```html
<nuxt-link :to="`/studios/${studioId}`">
```

などになります。

外部サイト (basipilates, corporate.zenplace.co.jp, 腰痛? など)、またはLPなどのページにリンクする時には、普通の `<a></a>` タグを使う。

```html
<a href="https://...">Link</a>
```

そうしないと、ページ繊維ちゃんと行わない。

### 3. PagesのURLになる方法

`/pages` の下にあるファイルはそのままURLになります。
例外としては、`index.vue` はrootで、 `_` で始まるファイル名は URL (`$route.params`)になります
いくつかの例

* `/pages/index.vue` => `/`
* `/pages/about.vue` => `/about`
* `/pages/studios/index.vue` => `/studios`
* `/pages/studios.vue` => `/studios` (上記と同じ、studios以下に他のページなければ、これの方がおすすめです)
* `/pages/studios/_studioId/index.vue` => `/studios/123/`, `{ $route.params.studioId: 123 }`

#### 共通部分

URL以下の全部のページの共通部分（header, footer）がある場合は、 `<nuxt-child></nuxt-child>` を使う。例：

* `/pages/studios/_studioId.vue` => `/studios/123/*`

```html
<template>
  <div>
    <div>Studioヘッダー</div>
    <nuxt-child></nuxt-child>
  </div>
</template>
```

* `/pages/studios/_studioId/index.vue` => `/studios/123/`, `<template>`内容が `nuxt-child` のところに入る
* `/pages/studios/_studioId/hello.vue` => `/studios/123/hello`, `<template>`内容が `nuxt-child` のところに入る

### 3. Componentの使い方

Componentはどの Page, Component, Layout でも再利用できる要素のことです。例えば、`Logo.vue`。

ファイルの場所は `/components` になります。

componentを作る時に、 `/plugins/global-components.js` に2行（import + `Vue.component`) を追加することで、
どのページでも使えます。ネーミングルールとして、 `ComponenName` が `<component-name>` という要素になります。

## 最適化について

### 1. 最適化のための注意項目

fontawesome, bootstrapを全部読み込むと重くなる可能性がありますので、必要な部分だけを読み込んでるようにしてます。
なので、使いたい部分だけをロードするようにしてます。

`plugins/fontawesome.js` にfontawesomeで使いたいアイコンを書いて、ロードしているようにしてます。1MBくらいページロードが早くなります。

TODO: bootstrapも同じことやる。

## 2. 画像をlazy loadingする

スクロールしたタイミングに画像がロードするように下記の書き方しましょう

```html
<b-img-lazy src="~assets/images/common/image.jpg">
```
