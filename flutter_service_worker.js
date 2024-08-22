'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b3bc47de7a8375680ba3272baaa5bc12",
".git/config": "7908f65ba0802abd8ecf373f77c40bec",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4abf48a949f67e54f01d14e8ba718d5d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/info/refs": "a97c6da9802b6beea94e28a1f83bae0b",
".git/logs/HEAD": "7ee6dbb4fc05af549eebb8d3cc1b5c3a",
".git/logs/refs/heads/main": "e846557d341ef83e14c169baf4517c8b",
".git/logs/refs/remotes/origin/main": "f56b4b0b1ad347036141ede711a652b1",
".git/objects/info/packs": "466e5f4f165daab1fec64b8053ef68a1",
".git/objects/pack/pack-f2604ead247604432586c55c4d498665075f67da.idx": "16ace594d513cae3530e8faa94e42383",
".git/objects/pack/pack-f2604ead247604432586c55c4d498665075f67da.pack": "34a7d0d313b9fc6c4b8eb88fed18e35f",
".git/objects/pack/pack-f2604ead247604432586c55c4d498665075f67da.rev": "c8768c1a5183e670dd16713b87ed3e0c",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "fbf4b8fb0b7c46eef13aa30c5543af5c",
".git/refs/remotes/origin/main": "fbf4b8fb0b7c46eef13aa30c5543af5c",
"404.html": "e057ac8854a715e290e2f6188ddde31f",
"assets/AssetManifest.bin": "4a506b22af95eec177cd75ac3e25ecb7",
"assets/AssetManifest.bin.json": "544dbfae5428491a3b7e1b95f5046a60",
"assets/AssetManifest.json": "a14d135d073fad08abfb604ff31d31a2",
"assets/assets/Cylindrical_Fit/Cylindrical_Fits.xlsx": "34d9a12b6d443240fb6afc5cc28eafad",
"assets/assets/hole_wizard/Counterbore/Ansi%2520Inch/Hex%2520Bolt.xlsx": "a5de46251ec3d2064780fa3bae3efebb",
"assets/assets/hole_wizard/Counterbore/Ansi%2520Inch/Socket%2520Button%2520Head%2520Cap%2520Screw.xlsx": "9ea985333b6be1a8ec84e10ac72c2793",
"assets/assets/hole_wizard/Counterbore/Ansi%2520Inch/Socket%2520Head%2520Cap%2520Screw.xlsx": "a8939b00c031a8a1685df87aefc03787",
"assets/assets/hole_wizard/Counterbore/Ansi%2520Inch/Socket%2520Head%2520Shoulder%2520Screw.xlsx": "aea28f4b5174b73ba5b64f3b43d69e07",
"assets/assets/hole_wizard/Counterbore/Ansi%2520Metric/Hex%2520Screw.xlsx": "ba7ca0519b4516beac25a477163b562e",
"assets/assets/hole_wizard/Counterbore/Ansi%2520Metric/Socket%2520Button%2520Head%2520Cap%2520Screw.xlsx": "499df95d909f50eb6f23bf1f3863220d",
"assets/assets/hole_wizard/Counterbore/Ansi%2520Metric/Socket%2520Head%2520Cap%2520Screw.xlsx": "a2280a784888cad31bfb8554d0dfce85",
"assets/assets/hole_wizard/Counterbore/Ansi%2520Metric/Socket%2520Head%2520Shoulder%2520Screw.xlsx": "892539feec7461c8ad5f3350c00e2a15",
"assets/assets/hole_wizard/Countersink/Ansi%2520Inch/Flat%2520Head%2520Screw%2520(100).xlsx": "149a4dbd82bf1ba4ff127bb0629896c2",
"assets/assets/hole_wizard/Countersink/Ansi%2520Inch/Flat%2520Head%2520Screw%2520(82).xlsx": "5f6f959d98bd8169cc9c00380c4525c7",
"assets/assets/hole_wizard/Countersink/Ansi%2520Inch/Oval%2520Head.xlsx": "1051134f8483ac9c1a6299f3f4a5396a",
"assets/assets/hole_wizard/Countersink/Ansi%2520Inch/Socket%2520Countersunk%2520Head%2520Cap%2520Screw.xlsx": "55cc8a1df397cb7f7fba5eee932d3ad0",
"assets/assets/hole_wizard/Countersink/Ansi%2520Metric/Flat%2520Head%2520Screw.xlsx": "fd35b7a3d1b094324c2f33f9f5c57881",
"assets/assets/hole_wizard/Countersink/Ansi%2520Metric/Oval%2520Head%2520Screw.xlsx": "bd03da6667e873a3f38088954f8d3a7b",
"assets/assets/hole_wizard/Countersink/Ansi%2520Metric/Socket%2520Countersunk%2520Head%2520Cap%2520Screw.xlsx": "34266e1e4cda69d3983f8450ea64b22d",
"assets/assets/hole_wizard/Hole/Ansi%2520Inch/All%2520Drill%2520sizes.xlsx": "8e30ec4feb5f5a7ba92ddc8089fe7da5",
"assets/assets/hole_wizard/Hole/Ansi%2520Inch/Fractional%2520Drill%2520Sizes.xlsx": "626376dbd6d7158ca7a1d3bf55fa307e",
"assets/assets/hole_wizard/Hole/Ansi%2520Inch/Letter%2520Drill%2520sizes.xlsx": "f71159c97e60d198cc455329f236a099",
"assets/assets/hole_wizard/Hole/Ansi%2520Inch/Number%2520Drill%2520Sizes.xlsx": "62bc8ead0df20b065087d6f28ef86aeb",
"assets/assets/hole_wizard/Hole/Ansi%2520Inch/Screw%2520Clearances.xlsx": "28d6ee72cc4f52f6df9cf228ea91b190",
"assets/assets/hole_wizard/Hole/Ansi%2520Metric/Drill%2520sizes.xlsx": "0e58b558f9b667208cfa871e8d07cc6b",
"assets/assets/hole_wizard/Hole/Ansi%2520Metric/Screw%2520Clearances.xlsx": "76dde6a2221cd24356135d087ef268cb",
"assets/assets/hole_wizard/Hole/Ansi%2520Metric/Tap%2520Drills.xlsx": "1aaf95433d3b8d5e686e0ce5b58db3fa",
"assets/assets/hole_wizard/Hole/PEM%2520Inch/PEM%25C2%25AE%2520Inch_Straight%2520Holes_300%25C2%25AE%2520SC%2520Nuts%2520(SP).xlsx": "eeb62000bce64bcdb9d95b90cfdca68a",
"assets/assets/hole_wizard/Hole/PEM%2520Inch/PEM%25C2%25AE%2520Inch_Straight%2520Holes_Aluminum%2520SC%2520Nuts%2520(CLA).xlsx": "42983c74223bcd7b8204954202a31e0e",
"assets/assets/hole_wizard/Hole/PEM%2520Inch/PEM%25C2%25AE%2520Inch_Straight%2520Holes_Self-clinching%2520Nuts%2520(S,SS,CLS,CLSS).xlsx": "c57c392abe750b942f7593589ad16fee",
"assets/assets/hole_wizard/Hole/PEM%2520Metric/PEM%25C2%25AE%2520Metric_Straight%2520Holes_300%25C2%25AE%2520SC%2520Nuts%2520(SP).xlsx": "7a19f67097053524bfcef21a20da3da8",
"assets/assets/hole_wizard/Hole/PEM%2520Metric/PEM%25C2%25AE%2520Metric_Straight%2520Holes_Aluminum%2520SC%2520Nuts%2520(CLA).xlsx": "ec1a9e45c27a0d2af875ce6e24c22ee5",
"assets/assets/hole_wizard/Hole/PEM%2520Metric/PEM%25C2%25AE%2520Metric_Straight%2520Holes_Self-clinching%2520Nuts%2520(S,SS,CLS,CLSS).xlsx": "9f5fd2a60cfb135a7152e3ac2d8c46e4",
"assets/assets/hole_wizard/Tapped%2520Hole/Ansi%2520Inch/Tapped%2520hole.xlsx": "5aa078607f60688c3dc09fd38a42d7d9",
"assets/assets/hole_wizard/Tapped%2520Hole/Ansi%2520Metric/Tapped%2520hole.xlsx": "ac02165fc863cc8f9983671ace3abe5b",
"assets/assets/images/clearance_fit_dark.png": "ea46dbb346368740c39963ef500aee73",
"assets/assets/images/clearance_fit_light.png": "aee98ab313b8db0870883da1528f2740",
"assets/assets/images/Compression.png": "9a92bfddc7c734228d0650adb35a72a7",
"assets/assets/images/counterbore.png": "b1f04c6b50b5b9d14d250006d50cf5ad",
"assets/assets/images/counterbore_dim_dark.png": "1bfcc59a8ebb7a648d828425f405e4e0",
"assets/assets/images/counterbore_dim_light.png": "36160e4f88812009b76ac10aab7e5824",
"assets/assets/images/countersink.png": "6585be4d60b8ccbffffd111281707a0a",
"assets/assets/images/countersink_dim_dark.png": "093473f64f3f2f8272795475f1c65a65",
"assets/assets/images/countersink_dim_light.png": "f405f7eacba8678f25549bfa9b9c5d5b",
"assets/assets/images/crosssection_1.png": "c231275a08a0af87321d7455b0980b01",
"assets/assets/images/crosssection_1_dim_dark.png": "689d1acb5b8faf1eb194f81b72ac1133",
"assets/assets/images/crosssection_1_dim_light.png": "d43ef08abf2d684aeb89e1e6b1903e9f",
"assets/assets/images/crosssection_2.png": "efe5eccc38b838077409fb37de577f43",
"assets/assets/images/crosssection_2_dim_dark.png": "333ea34fe83cbc5ef6e1ede5014a13dd",
"assets/assets/images/crosssection_2_dim_light.png": "8d39b342c744baf8dd46cf723259b285",
"assets/assets/images/cylndrical_fit_main_dark.png": "771c690c3d8b184fcb962c890cd0fa65",
"assets/assets/images/cylndrical_fit_main_light.png": "9af1c48dfd98435514c2a857a1746d40",
"assets/assets/images/Extension.png": "5aa630a6389d611c62d3932ac32deef7",
"assets/assets/images/hole.png": "af7bb35f2b76b041c9045b6ea25edee2",
"assets/assets/images/hole_dim_dark.png": "9f4856fa89c1638882e9758996ae20e6",
"assets/assets/images/hole_dim_light.png": "a6e602f1e6c8140ff51af5454748a3b0",
"assets/assets/images/hole_wizard.png": "34fd93347b6fbfd383375c5d57e09b8b",
"assets/assets/images/hole_wizard_dark.png": "941d3c567b1daf30def9a9d4a2100c81",
"assets/assets/images/hole_wizard_old.png": "76494a76569171000d95381346b71eb9",
"assets/assets/images/interference_fit_dark.png": "6c0c87800b1fe8826e2e11f183ca132a",
"assets/assets/images/interference_fit_light.png": "428fd7669329b9991114a3a2bf22c18c",
"assets/assets/images/press_fit.png": "375be7c12cb3a3a02a659069b0b016ea",
"assets/assets/images/press_fit_dark.png": "47c4af79c4fc169153ed76aa77e9c064",
"assets/assets/images/press_fit_old.png": "32e9483550493103ee95d14a4b8d01b2",
"assets/assets/images/pump-logo-horiz-white3.png": "0b897fef5d0916b828b282557cd8dcbe",
"assets/assets/images/Pump_Round_Orange.png": "642eae8aa94b3a1885d34568919a46a2",
"assets/assets/images/resistor.png": "332f0ff8031592355a72d888de920938",
"assets/assets/images/resistor2.png": "fd5e1bd2ef07a9942328e26b8506325c",
"assets/assets/images/resistor_dark.png": "767ad4248f0eb913429535b11287b63c",
"assets/assets/images/resistor_old.png": "83d5c4d09193e9d95807a7fa357a3162",
"assets/assets/images/resistor_old2.png": "f65974499be867423c25307af2db9637",
"assets/assets/images/sheet_metal.png": "f788688a934ff7fa3044ffc063909712",
"assets/assets/images/sheet_metal_dark.png": "297586d462cb78291107062a9f972afc",
"assets/assets/images/snap_fit.png": "ab489dcbee3ed14b29b859da101e88eb",
"assets/assets/images/snap_fit_dark.png": "55146b7049a1548ad46da2a36aa5da12",
"assets/assets/images/snap_fit_old.png": "b84e2fa71e52a4915693db117499e763",
"assets/assets/images/spring.png": "a0371e01f8fa03cd9a31c62d68eb947a",
"assets/assets/images/spring_dark.png": "294e91a299f585f83891d1e67aad2778",
"assets/assets/images/spring_old.png": "9a92bfddc7c734228d0650adb35a72a7",
"assets/assets/images/Straight%2520Beam.png": "c8d524bb13d5c84e1a3934312fc931ad",
"assets/assets/images/Straight%2520Beam_dim_dark.png": "e5415145f56086a8b37f0fcda7df8f69",
"assets/assets/images/Straight%2520Beam_dim_light.png": "93805ab5e58e30985160b53637eead38",
"assets/assets/images/Tapered%2520Beam%2520H%2520&%2520W.png": "e6be1f1ab6cead86be580a2a89d8fb1d",
"assets/assets/images/Tapered%2520Beam%2520Height.png": "08286650e0bb8dbc4dd4c991f5a2cad1",
"assets/assets/images/Tapered%2520Beam%2520Height_dim_dark.png": "923e373e3d6a45fc6ad417971610877b",
"assets/assets/images/Tapered%2520Beam%2520Height_dim_light.png": "372adc4fe11a602d408f7dd5f81bad1c",
"assets/assets/images/Tapered%2520Beam%2520Width.png": "4b63c9b4e684fcb1beb12903a7300fd9",
"assets/assets/images/Tapered%2520Beam%2520Width_dim_dark.png": "9f110b97e3b8971ef4145abb7e5e644d",
"assets/assets/images/Tapered%2520Beam%2520Width_dim_light.png": "598b23e7f2b6bc2e0ba432c5075f5958",
"assets/assets/images/tapped%2520hole.png": "2270c278e0d924dffa30403afc449d33",
"assets/assets/images/tapped%2520hole_dim_dark.png": "0de2a8701a2510ace45d022315918911",
"assets/assets/images/tapped%2520hole_dim_light.png": "61c2cbaffbaed4ba416d17a1995ca7d1",
"assets/assets/images/Torsional.png": "e661e7bdf1d97b2179d72126b796a8cb",
"assets/assets/images/transition_fit_dark.png": "43f0ce8e4a6738eec418e78fdb0381e6",
"assets/assets/images/transition_fit_light.png": "1a8f2f0a15407a6e6be66278d8009d15",
"assets/assets/material_library/material.csv": "d60213f4efb4250f6631a7c408705121",
"assets/assets/material_library/material.xlsx": "c5eea0eb032145e117ed83c0f531ebbd",
"assets/assets/material_library/material_properties.xlsx": "c079f903325c4e8a3d98dc9c250d907a",
"assets/assets/PumpLogosplash24.png": "dde64e4b341d49c4d602c32efce14b88",
"assets/assets/pump_logo.png": "43881890ef11c47cae7888e33d8cfef9",
"assets/assets/Sheet_Metal/Gauge_Chart.xlsx": "df4618e2c6495cbbe69bf6be9e73ac1d",
"assets/assets/Sheet_Metal/Sheet_Metal_jpg.jpg": "583c116f34fa177b60fb953d93462ac2",
"assets/assets/Sheet_Metal/Sheet_Metal_PNG.png": "64a9b2049c56da465fdbb1495e3e90e2",
"assets/assets/Sheet_Metal/~$Gauge_Chart.xlsx": "dbc83aba4b75e88097985a840bca599f",
"assets/FontManifest.json": "e7548778aaa5319327fc71dacb213a2e",
"assets/fonts/CustomIcons.ttf": "41daf449018129fb0f08ccab89cd44e4",
"assets/fonts/MaterialIcons-Regular.otf": "19bfbfd66662f9292de587f7257b2f34",
"assets/NOTICES": "0cc64c1dee2f917732907149daaf3687",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "553d7e20cca9843deee7479b538c5968",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/geekyants_flutter_gauges/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.js.symbols": "9b6b1e39dfbb5cb103bdfbce39b0abc5",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.js.symbols": "018c9fd483007609bbde5d296a4e9ef5",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.js.symbols": "2a2df8895eb98e2ab2061693eccf460b",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "43881890ef11c47cae7888e33d8cfef9",
"favicon_old.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0895a873cbda9b5ed1503c36a3935e8c",
"/": "0895a873cbda9b5ed1503c36a3935e8c",
"main.dart.js": "a57e05b560c77a1a36dcad7f7d094ab2",
"manifest.json": "593b333114510e8b3e2f3f7b71e4a0ac",
"version.json": "5248088adb9ce1e58b8da710d0230141"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
