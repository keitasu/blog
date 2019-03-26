---
date: '2019-02-19'
title: 'StoryBook for Angularでチルダのpathを解決する'
tags: ['JavaScript']
description: 'StoryBook for Angular'
---

## 概要
Storybook for Angularでsassのinportでチルダを使うとpath解決できずにエラーが出たので解決法のメモ

とりあえずng newします。  
`ng new storybook-for-angular`

次にstorybookのsetupをします。
[Automatic setup](https://storybook.js.org/docs/guides/guide-angular/#automatic-setup)を使います。  
`npx -p @storybook/cli sb init --type angular`  

以下src配下のディレクトリ
```
  src/
  ├── app
  ├── assets
  ├── browserslist
  ├── environments
  ├── favicon.ico
  ├── index.html
  ├── karma.conf.js
  ├── main.ts
  ├── polyfills.ts
  ├── stories
  ├── styles
  │   ├── styles.scss
  │   └── _color.scss
  ├── test.ts
  ├── tsconfig.app.json
  ├── tsconfig.spec.json
  └── tslint.json
```

コンポーネントのscssファイル内で`_color.scss`をインポートしようとすると以下のエラーがでる

```
@import "~styles/color"
^
      File to import not found or unreadable: ~styles/color.
```


## 解決法

.storybook配下にwebpack.config.jsを作成して以下の内容を追加すれば解決

```javascript
const path = require('path');

module.exports = ({ config, mode }) => {
  config.resolve.alias['styles'] = path.resolve(__dirname, '../src/styles');

  return config;
};
```

## まとめ
ちなみにチルダを使わずに相対パスで記述すればwebpack.congif.jsを書かなくても動く。