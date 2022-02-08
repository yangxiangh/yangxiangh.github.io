/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e828ab2220b865f671049d8db91638e7"
  },
  {
    "url": "algorithm/index.html",
    "revision": "f20f67d989f1951f4a2049aa5e5b1268"
  },
  {
    "url": "assets/css/0.styles.6aaa91c1.css",
    "revision": "fde2c425d4e8a0f87d70ece6f5dd13a3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ead2ca8b.js",
    "revision": "ce90ef45a5e0a995866e829e23ef8824"
  },
  {
    "url": "assets/js/11.bcbbc96f.js",
    "revision": "a97ce09acf838ba7c0659334fd87f93d"
  },
  {
    "url": "assets/js/12.899a07f7.js",
    "revision": "be6a7875b123dc6ecfaed38ebfb966f7"
  },
  {
    "url": "assets/js/13.ba4119f2.js",
    "revision": "7219962c09a0576acebd228dcbfeb174"
  },
  {
    "url": "assets/js/14.5281b704.js",
    "revision": "13fd93156c65514cc97de0f3684ba82f"
  },
  {
    "url": "assets/js/2.858e80da.js",
    "revision": "59b9e09855a16d382db7d8ff58d74b0d"
  },
  {
    "url": "assets/js/3.3ede1f01.js",
    "revision": "9b7caca6b3a043c92a0bb63cc1c94984"
  },
  {
    "url": "assets/js/4.1511343f.js",
    "revision": "fdd315009cf3922495355e19c59b3e0e"
  },
  {
    "url": "assets/js/5.29417f79.js",
    "revision": "39a4aeafcc7d14a8f95521126b9c2e0c"
  },
  {
    "url": "assets/js/6.6724774f.js",
    "revision": "ce65c7fe73d30e97646baf1d487437da"
  },
  {
    "url": "assets/js/7.8eb64389.js",
    "revision": "08f5c1a1b75b89ab365de77768b0a0b2"
  },
  {
    "url": "assets/js/8.6cda7792.js",
    "revision": "eb6be9ffc954041f00b703d7a86c44a1"
  },
  {
    "url": "assets/js/9.8c7aadfd.js",
    "revision": "0f61894acb920875bff7cc5420b77346"
  },
  {
    "url": "assets/js/app.719bf657.js",
    "revision": "9b5e23363dad84450b65584fe88556b4"
  },
  {
    "url": "css/html.html",
    "revision": "46f712cc0d4381ba03df7475776d4612"
  },
  {
    "url": "guide.html",
    "revision": "58560728644bc4b890e2b559e69c3a1b"
  },
  {
    "url": "html/html.html",
    "revision": "586fd2480914201f01b92262de83c3ed"
  },
  {
    "url": "images/css.png",
    "revision": "bd1f478643d191370a4831ab634cb7b0"
  },
  {
    "url": "images/js.png",
    "revision": "cd8d3d59a6f6b2a6c190baec3cace7dc"
  },
  {
    "url": "images/photo.jpg",
    "revision": "999249e2a9b5f677f0f08ff652e36010"
  },
  {
    "url": "images/webpack.png",
    "revision": "2431b1ff9612ac60ef171d73968d1900"
  },
  {
    "url": "images/前端工程化.png",
    "revision": "59c8889588d2af81f3a3cfa93ff62c7a"
  },
  {
    "url": "images/计算机网络.png",
    "revision": "4d6869252bb9113cb45d73b4ecc7be93"
  },
  {
    "url": "index.html",
    "revision": "a8603595e4df5e967c036ead11a27edb"
  },
  {
    "url": "interview/html.html",
    "revision": "044f4e6104cb6a4816fefe82112cd469"
  },
  {
    "url": "js/html.html",
    "revision": "35acae7ee69782a027cd94f72ffe0812"
  },
  {
    "url": "network/html.html",
    "revision": "5f5098ed09343875eac592283c9b631f"
  },
  {
    "url": "network/index.html",
    "revision": "d85f7bf988265aaec3b372d3107f1409"
  },
  {
    "url": "others/index.html",
    "revision": "5484ecc6136d62a279afd933805cff46"
  },
  {
    "url": "vue/html.html",
    "revision": "e27c15ae6ea59132b7b5026916a74f09"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
