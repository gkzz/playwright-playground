# Playwright Playground
**This is an `experimental` repository to familiarize myself with Playwright**.

## TL;DR

- Deploy App with nodejs
```
$ make build
$ make run
```

- Install Playwright
```
$ npm i -D playwright
$ npx playwright codegen localhost:8080
$ cd playwright
$ npx playwright test

Running 2 tests using 1 worker

  ✓  tests/example.spec.js:3:1 › basic test (2s)
  ✓  tests/example.spec.js:9:1 › test (180ms)


  2 passed (3s)
$
```

## Directory Structure

```
$ tree -L 1
├── LICENSE
├── README.md
├── app
│   ├── Dockerfile
│   ├── Makefile
│   ├── package.json
│   └── server.js
└── playwright
    ├── node_modules
    ├── package-lock.json
    ├── package.json
    └── tests

4 directories, 8 files
```

## Ref

- [microsoft/playwright: Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API.](https://github.com/microsoft/playwright)
- [PlaywrightでフロントエンドのE2Eテストを自動化してみた話](https://zenn.dev/mikana0918/articles/b6eb66377fb25a)
- [PlayWright を使ってE2Eテストを書いてみた](https://www.cresco.co.jp/blog/entry/14335/)
- [Node.js Web アプリケーションを Docker 化する | Node.js](https://nodejs.org/ja/docs/guides/nodejs-docker-webapp/)


## License
Copyright (c) 2021 [gkz](https://gkz.mit-license.org/2021)

Licensed under the [MIT license](LICENSE).

Unless attributed otherwise, everything is under the MIT licence. Some stuff is not from me, and without attribution, and I no longer remember where I got it from. I apologize for that..

