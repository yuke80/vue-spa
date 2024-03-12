# HTML/CSS/SCSS/Vue の styleguide

## HTML/Vue

HTMLは基本的に `.vue` ファイルの `<template></template>` の中に書きます。
普通のHTMLはそのままに動きます。

一つの注意点として、テンプレートの中に1つだけの root element が必要

```html
<template>
  <div>
    ここに書きます。。。
    <div>Element1</div>
    <div>Element2</div>
  </div>
</template>
```

これをできません：

```
<template>
  <div>Element1</div>
  <div>Element2</div>
</template>
```

### ファイルの場所

Layouts => 現在 `default.vue` だけで、共通 Header/Footer などの部分です。
Pages => URL になるページ
Components => 様々なページに共通に使える部分

Componentを追加する時に、 `plugins/global-components.js` に追加すれば、どのページでも使えます。
例: StudioInfo.vue が `<studio-info>` タグで使えます。

### HTMLのスタイル

HTML書く時 eslintの自動 formatter autofixを ON にしてください。
[vscode設定](./vscode.md)

そうすると例えば下記のようなことが自動的になります：

- タグに 0,1 の attributeある時

```html
<div class="classname">Hello</div>
```

または

```html
<div class="classname">
  Hello
</div>
```

- タグに 2以上 の attributeある時、 1 attribute/1行

```html
<div
  class="classname"
  style="margin-left: 2px"
>
  Hello
</div>
```

こうすることで、git変更点がみやすくなり、みんなの書いたコードスタイルが同じになるメリットがあります。

## Assets

画像、CSSなどのフォルダーは `/assets` に起きます。

**でも、HTML/CSSの中にそれらのファイルを使いたい時に、そのままURL/想定パスなどを使うことはできません。**

理由は、assetsの内容が、本番にいれる前に様々な optimization (最適化）が自動的に行う。
例えば： imageサイズ最適化、scssコンパイル、内容のminificationなど。

assetsを使いたい時は、下記の書き方をするのが必要です：

### img

```html
<img loading="lazy" src="~assets/images/common/default-studio-bg.jpg">
```

### CSS/SCSSの中

```css
.c-component {
    background-image: url(~assets/images/common/bg.jpg);
}
```

こうすると、自動で最適化されたファイルが本番でも提供されます。

## CSS/SCSS

どっちでも使えます。簡単なことやる時は、cssを使っても良いし、グローバルな色などを使いたい時は、
SCSSを使った方がいいです。

zenplace-spaは基本 Bootstrap 4 ベースになっていますので、bootstrapの機能で作れるところは、bootstrapの既存のcssを使う。

<https://getbootstrap.com/docs/4.4/getting-started/introduction/>

### CSS/SCSSをどこに書きますか

一つの Page・Component だけに変更を加えたい時に、その page / component の `<style>` tagの中が良いです。
共通点があることを `/assets/scss/` の中にまとめた方がいいです。

メインのscssファイルは `/assets/scss/zenplace.scss` になります。

Bootstrapの動きをカスタマイズ、全てのページに色、変数などを追加したい (e.g. `btn-zen-special` など)場合は `/assets/scss/_variables.scss` を変更した方がいいです。

### class名

bootstrap 以外のクラスを使う時に、下記のようなことが望ましい

1. class に prefixを付けると分かりやすくなります

Layout関連の component には `l-`, e.g. `l-header`
Page の top には `p-`, e.g. `p-studio-list`
Component のような様子には `c-`, e.g. `c-studio-info`
ステートや状況を表せたいクラスに、 `is-` `has-` を使う `is-selected` `has-shadow` (but bootstrap usually already has these)

2. Page/Componentのトップに、そのPage/Componentに限るclassを付ける

例：
`/pages/studios/index.vue` (URL `/studios`) に `p-studio-list`
`/pages/studios/_studioId.vue` (URL `/studios/:slug`) に `p-studio-details`

そして、scssの中で、このように書くと他のページに影響ない

```html
<style lang="scss">
.p-studio-list {
  .navigation {
    height: 80px;
  }
}
</style>
```

3. なるべくユニークなクラス名で、目的をわかるようなclass名

NO: `highlighted` `loading` `is-red`
YES: `p-studio-list__studio-higlighted` ,`c-component__marginless`, `background-red`

 (ただし、全てのページで共通に使いたいなら、genericな名前でも大丈夫です。）

### SCSSを使う時のテンプレート

Page/Componentの中で SCSS を使いたい場合、このようなことを最初に入れることで、variableを使えるようになります：

```html
<style lang="scss">
@import "node_modules/bootstrap/scss/mixins";
@import '~assets/scss/variables';

/* Make links same as zen color */
a {
  color: $zenblue;
}

</style>
```
