'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2254638506a42415bccb378a94ef5a3d",
".git/config": "7e0c8d814ebae455a7209d95c09ca1fd",
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
".git/index": "55897968e0fb757de9e834a7dce29c81",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fa2d77142057b52a8555e8e9ca1da6a8",
".git/logs/refs/heads/main": "bbd372188be18664f3b1135d9834b854",
".git/logs/refs/remotes/origin/main": "677d7a06f40ee4755d02880dd0868143",
".git/objects/00/5c582685ffd57d7ccf5a5e3da97c8483df4b9f": "0435cd70cc5fff658520416df5167e12",
".git/objects/00/5de4a23d1cd56926f69965149ae768da1e75b1": "226b70852f616ea7b788c036e9d70a1a",
".git/objects/01/83968280a50a93136983d3885dc9bc2f73f4b7": "578eb0c51ab324be3700022e62b79f11",
".git/objects/01/eac33ae49d75dd8e844f80e25e60ee77a14838": "7860e4b843324a805f46e48325e442ee",
".git/objects/02/6316e947e74de1a779fe1b73955ea946617b76": "bd86d3194d6ee8b8f59867282a95f76c",
".git/objects/03/282c301adcb79f2846fb6a7ac939956874928c": "5e049c280fb1eb8e9ea41cf5e8677489",
".git/objects/03/2a7e502159def0463fb8f8f60aa3bbcb488953": "2b2c72f3d3920a457d6a589b0176ba81",
".git/objects/03/5daff508968106fd84442b0370cc57666bc737": "f487ec5b4f7fae5fc684ad5936d489a5",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/534b43693dcb6e9046de97b68d446ca86a90ef": "0203d28ae9dfb7fa310bb6f2f9caa56c",
".git/objects/06/0fd4ed5c4e889d1c20fb988e77ca97652ded8c": "0c2b1f88c592566e2d44cd6cb3ca27e2",
".git/objects/07/594e4b2de6f618ea11988cc5150622367652e5": "f567fea526d657fc3264ddd07ad0af0e",
".git/objects/07/73b19da2909eff6ba5988098b7856a45b2c060": "7ba5da3ecb320c621bade77fbde9db5d",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/09/2e72cceab72e2bf718ede77d18455b5114ba52": "c4be641de12cf466bf1bbe28a66b51aa",
".git/objects/09/f3ed9599438104187d56adb88d71a2fba76689": "19eaed3c1edab636cad583e7a7bf24b5",
".git/objects/0a/1286d9b580d35af1d35307b02fef88cadea24e": "49839927a43edcd11ca47af741efc4b3",
".git/objects/0b/5c02f0f8bf47ee48909d34ae80479850eaceba": "34110ec2a070fe2ab8f927d93fcfb612",
".git/objects/0c/9a488d3a3b4beeb03ac95607c6000e0b9f3c0e": "5d1cebf8855fd2144790ef6707e479a6",
".git/objects/0c/bca88584fa4b9cc07332a5a73123b58b5e4cae": "5aee247656317adac0bfd1d5a5b1a99f",
".git/objects/0d/09ab2bc99d9061bbe77030fe2c3ab442278bd3": "489650fdfd1839499a99e39f3d21d124",
".git/objects/0d/42d1289245aa39e253f08a25e95fb5a24e16b2": "4f93e3496cef37e5faddb90d2e692cdc",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/5b6f507c8a79eb340b0ee99e74cbd2accf458a": "b7792d566a640215b8349168f585c8e2",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/0f/1cc04a361e7315bf4d26abfde566783c4a0ccf": "3ddde92dd8b7cc362fe96b64442fd302",
".git/objects/10/48cf3f8426f9fe49f03844a5f0d8eeecfb12b1": "8b7d0426f77ded055ffe0e85bbdf416b",
".git/objects/11/46b5cdd5f5baac4794d78d7c4cc909711f73a5": "d37639f0fe40036a56ad33eabc86548c",
".git/objects/16/71177a7ff7bf77f67bb613fbf318483937b271": "2c55ea26381643f389b912fd6c704715",
".git/objects/17/bb7bdef112625f13af8a4157c4f88b1a6b3ee9": "f796727774df919c6d30e159688fb576",
".git/objects/19/2174df6554dd07231b29e9a8f4c62e552784b0": "80fb792aebd044bf24854bd2c4ddd176",
".git/objects/19/26fcce6e82a95547e2b9156ebf22e4b34a55b2": "0c1d15d71299173788ecfc74a0191821",
".git/objects/19/33daa546c5a29f209d15dacb3b0dfdebb8f1ee": "966ec81b24cc049c9ac9fd51e38407c9",
".git/objects/19/49491fe9516a8989f036896a3e154583671459": "c597fc5e3d4267aa11ceba8cade49846",
".git/objects/1a/5bf15fa238dc7c0c832b1317b0ed2394b835af": "c290ff8552c4ace0843a9dcd50777ca7",
".git/objects/1a/ed86f07b2ce792b57c4b3408d1dd1c7a377092": "a5c350df8ae70a6619e0ebd538cd5f34",
".git/objects/1c/1cada376d5472a3b455da41c92dc3504159d59": "21dc6bff3c74a574847f76854b6f30a7",
".git/objects/1c/828b3775861eaa241fc01acff698922fe82c59": "735364aac567b249e975baf213bed3cb",
".git/objects/1d/ab6b55d05b8ad6d5f4cc8225596a08ce8bfce2": "c59c062042e9bfebd6ff0d6e20bf6262",
".git/objects/1d/c97f514507671010fb34e0264abb1ac8309003": "f91bbea44eebc127d0038468939b82d4",
".git/objects/1e/727aefc44c39e1197960ea9579a496dc469929": "f822872fb8623c94de480b45c918a3e8",
".git/objects/1f/5637650e51a79de184cc300eb41500c9c1f59a": "6b06a48524baa8ab74a72c76f6089836",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/ec1f89c4b622e7afd51b8f9dede45476beee39": "8ade9f5f9d295f4f5c7716ba751bcf88",
".git/objects/21/4536439777a515a776d9bf8259b5ad96a45659": "4b16b9d06ed541fc1711c257cdadd190",
".git/objects/22/b4f38ccbf0e6c80daf3e4544c6fcc52c905886": "418528994d3520398fc4847aa5eb5ccb",
".git/objects/23/d9d44abc7af979614c84304a56fae154d40795": "0c51acce71a29a4114a5d5a1aa30c339",
".git/objects/24/a1f7ec097b8046ea64e6999e4c35fccc85b758": "3ff5e89b1d38b10ca87b7586395e55ef",
".git/objects/25/42b61d226f4a53cc50f0ba9fdf60a445d6ce27": "3917b9a7c4a3fdc3ede4c1c30601ed94",
".git/objects/26/2e0005d73973e61d8e95fd93d9974279412c6f": "9a96dc5fb62e2397abdebdacaa479b8f",
".git/objects/26/8905b7744ae4aba2c022b4d485987af9a26725": "3da24d7128aab45bda946099cf0de719",
".git/objects/27/53bef7b4f9a063f7b36a15fe597d1112450e30": "79bb70bb647162eb342595f53a7d3107",
".git/objects/27/e936d8e8568609423bc3790c50758ec71f5535": "bdd2be87008f5e7b32c10d1d590a3f20",
".git/objects/28/f945ac5b19c2d98741a3ed545f741078b3b58d": "56d41f20021de816cbfb26a97e1646ec",
".git/objects/29/ecf01651174935ca35a970169825912dd14266": "f41a3b56cf54023b1a91965e7148c537",
".git/objects/2b/160a4fff38b7e56bd51dc0d721e3d1bbaad3ed": "1a03640ec05becd4ba73ba71fa0ed176",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2b/f74eb86f1a75ecca721403724b136de17901f5": "9254877999341332cecb4bf349bb5d9f",
".git/objects/2c/a9d0168c323079281f216ea92a6031c25dc70e": "0ef2f06b2b8357cf53e664ec3579b738",
".git/objects/2c/d7b71bd4e27cf59e873b341be4758f88457468": "48917df3859167af3945e2f85d7cb48b",
".git/objects/2c/eca0ffd8e5ace87b7c78cac6e45aab388354d5": "44e457ee2dc53e1dd32da6abe50f9048",
".git/objects/2e/629918e629c7d61a5f962e6d8529ebb0f055b6": "da9aa0946b037b0695c7c650635cf97d",
".git/objects/2f/1f0cfe771f7f8730049a55773600c5752735fc": "e2751adaa0f58d27eca0e6d14e4c5a99",
".git/objects/30/fe9608a38ef6a625872feaf51cf1c64764f65b": "a2063ab20347960531e754a0eca74551",
".git/objects/31/162331b6e99881da4be16b453380fb3401084e": "e70abfb346969b7f55b0f3805ee3a5e3",
".git/objects/32/4dbb7d443ed7cd7f2abaa2de90de282b41d8c1": "24d035820ac5c82312087d025b113323",
".git/objects/33/833b4e97f5136073415410337a9cefd29e2556": "1b9ef31eb71a7791ff4ec25079aee850",
".git/objects/34/59b49388a889ec27566ec5667b9bdf8e40b9da": "d8ebe2e8d48b2dc2fe5a5799afed31aa",
".git/objects/34/760ec77f4d713959509b116f54330c84863210": "680dd635023a91367a6fa5436bed77d9",
".git/objects/35/63be35942c71f294199422fb8ee4b8032069a4": "47ad7293d46594afb3749b1bd7d9194f",
".git/objects/36/3c0738ecc61f8f3322aa5ce71c8e0a5d4d1991": "9efe3e8491e7d590056c923481b26a62",
".git/objects/36/af5dfff7a4cf2f5dcde66c28dbe30a15dfa80b": "8b89aac6b743f9951aef4f9255116b83",
".git/objects/36/ee9038ef8da196738698ac073ac018ded168be": "c6834ef8f3c401ee4e3e928c29153ea8",
".git/objects/37/21ff64034cda4d0ee4f8c1f941155b602951c8": "b753a9daa68ff81d3db607bf86e65ad3",
".git/objects/38/b3de1eb1d8dc3e64cedc3d7270ebf898abd283": "78bff37ac47364d2295a098e7f4e8eee",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3a/7b7530fc8e8c8eedbfd1bcb77fbcb463391fe2": "00e1ba00916dfa40f54c8f5b9248ce7b",
".git/objects/3b/fa4756755a24d76085e7d39c06ade491035d23": "6d1f747de11343a7eebc9d77a623189f",
".git/objects/3c/e6bb4847b6f4840919084f0827686a8edeb43c": "f092ca9e8cfb2ea55867f82acf8a26a7",
".git/objects/3e/4f521e1ab6b517d2385bd5c92460a3938978a6": "dea91f7c89734656d5ac3d94273f868b",
".git/objects/3e/acae35cdef76c609018410104e1aeddd75b6bb": "60ff097602f4cf23fd01d042365098f6",
".git/objects/3f/69c6f57f5cad41bbed9243063c2a77576108b9": "4d16a0e59f425d2d55f754b48cf68472",
".git/objects/40/389adab3f569e57939e65f759d302a1a8d1036": "7c722029de4d1c6f6347477d15d5481c",
".git/objects/41/6e006eba2768bb252fee5ecdd136fb2f56a8dd": "a6a6856059dc36a1eceec8e0143f2985",
".git/objects/42/570ee1206d07c04f85f5befb73b19bb95f6e92": "8d832b8c3c9fd09379a70452ceda07d2",
".git/objects/42/a7f2caa90cc80db34a15653f2e3b374699a730": "d3fc04a57e98501c8295431da4d52771",
".git/objects/42/faadaaaffaf15408d1f2d6e2ce8e637be4a92c": "e68926fcf54dea4b10d8eb81ade52892",
".git/objects/43/521ba9af7a2cc60c5b33d6deab2caf5083fdca": "b48857ce6c64c4c13262206a9c01b68e",
".git/objects/43/cee83911d7c5931e37cc41d7d960467101b511": "dad3c3909608fd8a81d81daba43aa55c",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/44/4cf344bd7e42699d87918cfd70fe56a0eccfab": "7c6bb369c9a444f64822ba08ef4a7c21",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/b6d654cc60b16a56d48323280b0764181a6e7b": "12637159abd5834da00121f8a0281ed6",
".git/objects/46/6ebb514db55fc21e28684d5a6d736e27dca98e": "e758c77425601b44ab785a70795a866f",
".git/objects/46/bc64d040240d4d0415de2baae55b8d08c45daa": "219aa42e91a03ae742df953e7330de1d",
".git/objects/47/f2848ff7ac0937501f6e274c48ced9f8a96afd": "7506605d75a8e2c5fe54fabfe0415e32",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/b376a63a9ebaffc103aeec60d78a85ca5e57ca": "e350d424ca17ed24cbd0e722717affeb",
".git/objects/49/2d9689d62a27d12e1e145051dc813446d753f8": "44a36fcb448bddc45dde9851e8ab1ebe",
".git/objects/4a/07ee2bd1cf331ba0bcab090578685accefde16": "d7b73b06433db27e98b5e5f09541abe5",
".git/objects/4a/9946f77e3c9fb3ed20d8ee87b8be2b98238c48": "1a001f0c6bb1cb7a38182e77ec92a15d",
".git/objects/4b/2831e62b739fa03655eed77a35983fc84d9749": "7eaa13ab61368e697d3a5b221f45986b",
".git/objects/4b/3c9e5b46c022a3303c2e2e9800a776df295580": "e36cf5cb3d25992c9b691de346ce5946",
".git/objects/4b/497402f1412b79b1be6dbd821abdff0926b17e": "9d9f4644bc1063f868bba8145ac04656",
".git/objects/4b/51de6dc5b3b0289ea3f6746832b823f4a77899": "092a4729ab2386f890d816e146a050b2",
".git/objects/4b/79477cdbd366648385b31b4f45a20eff9fd3b5": "a893c52db85e7144d20bcb0fe7ab0c55",
".git/objects/4b/8a2ab60ccf0c9fb3d5693db3f34b245d3826b7": "dd0d05f592af592a674ff4d5347c32cd",
".git/objects/4b/f267251bd36399934745ca5749cc9382917162": "6fd15d3a2e6ac1c8bd3ccaa2bdb9ccba",
".git/objects/4e/62b834ceeeff9680872d9eaca8758a982ddc06": "735ff1b5a56ce178cb93f94a76830cea",
".git/objects/4e/94e929ec1b96b378f87b7f65b7630400dd3e0f": "1adcd8291756e1fa58cd1cd56ed8fbec",
".git/objects/4f/557443a43c2c6f4f6b473467ffa46b36652232": "ea2a38f3244a8122e93f2b08876817fd",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/50/3d20b1796e9aa146de762fca4b7f24f2102d23": "993f5374e4a2b768b9a2e7840e6d9464",
".git/objects/51/a3c52579247db34436759938537466bba20aba": "fd027d24ca0641126d24c56dbe79586e",
".git/objects/51/e5820e555246c67d434ddb68fb6a1987ca8f0d": "245e4bc9c3b05067e17b5728e13f0f08",
".git/objects/52/1314012099163b7a58486833f702c9355cb849": "92a3fbcf9d9cc7f95b61a15704560b42",
".git/objects/52/36413fd7619eea3b0a41310ec0548a1e1287fc": "4410985419efa7765a74b837e676e871",
".git/objects/52/b8f4edcd552daad699bb6c3dd51a16268302ba": "1a59bb6f149e6e4da08e73bee2e69cec",
".git/objects/53/6a4458db3798281cf661fa9c18123ddc60ab70": "916732371a21e174e45c488cb6104807",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/22a31c5dd115511b503fa03e7aa13290fb0643": "e3ef1078dcec9ed43923a8d6adc52665",
".git/objects/54/918a9506f67ec0a38d01f16ccd2dc54b1d4c7f": "3160e9e7fadbdc68c5c88048837a403e",
".git/objects/54/b7f4d5663795deb57ef0bbd27453a81e03d5be": "1fd95d836622faef585617ced5387e10",
".git/objects/55/21a5f8015a92f5dd3c2c0cfe56c6bcaea7e58c": "d67703a5686bf740c18f61ebe4c1e92f",
".git/objects/55/88f6d3a78f91d3c58b9cf3c7294db52fee18db": "4b8f1cbb5555e769c0d68a48c46566fc",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/58/12d1cab85e7eec3e87a78233327cd6320d9c64": "55422ffecb32473ece7cfa1b75fbbc9b",
".git/objects/58/867d8542342064504d6aa9f9f8528b0ae042b2": "44fb855a4b4fb5518ba998096d31448e",
".git/objects/59/4785a32f72215a49d73ef2ddd35eeb86fabb6c": "5a5323bc64429c2f9e8ad62e4a825cc5",
".git/objects/5a/2350f31799711004c95e47e23ba99bc78736d9": "3ea67b86d7b1e2346ea27ae4adeaf7c1",
".git/objects/5a/45531fc24bab1176d26c204facb4630d22ef93": "85a575b0b1e21c8b22b184f31a8042d5",
".git/objects/5b/e8ff37b22b96a23e186040d6f84aaf003557ad": "a1b8a7fd754685f960f6ecc2806d72ab",
".git/objects/5e/0b910d49034d5976dcb1e58db970b91e9f9258": "0f13c8d78633650a735ce6f1eeb2aaeb",
".git/objects/60/8d373a48a5fd9602b2104aef89c6dcc331a3fb": "2f69681be4c149e72cb25ab1f92aa685",
".git/objects/60/b491480364399a9db513accf8d32f153a7b457": "22479325ca123e7f644ebb9e39ea02b3",
".git/objects/60/c451f578f9cc90a60481d91a4287cd382de6a5": "624937390d34ea5cdb7c978b1964baf6",
".git/objects/60/faf4b1a60ec18900937cba8b44e84dfb2ed4bc": "1f6caa69faa84a9c75f4118cd1bdaed1",
".git/objects/62/ee15ed80177674eff3febd903ae09083ace21d": "0a1bf9242d6d990677bd72b8ba404234",
".git/objects/63/c1c47067a0910db27a636214dfda6f2cb87bbb": "362d2a63f1242dc3012bc705c199da07",
".git/objects/64/1652f50d2f0c52aa1c6eb75d038d0e9b926a13": "9b828603b0047cd5459261c5f675fa24",
".git/objects/64/5688c5c6eec10785894e1f979f71a2857f812b": "54996fd8a265bbb2bcfc06bcfaa16cfb",
".git/objects/65/7553ed9ffd7a0ba312cca33c8980c09f923146": "277faca4986cd344d45231e2561d108f",
".git/objects/66/030ad9a8491a952eb2a8d20ad5971739cb76cc": "62184532f8d65d964df01614d690bb09",
".git/objects/66/7a2ecc76a06ab9c1579f81e538ce044d045278": "819caa6fd9bbff424233523c4abc8aa4",
".git/objects/66/8c03c08a64bb880e07213b8e68032281195b4a": "c6bdfba1f993712712b045384607f7b2",
".git/objects/66/b59ca3d5a63b81cbce14ecb24abd33f60ad1b0": "67e807de0e5ea47d9d335152f0293ec8",
".git/objects/66/fd1dbd444f12ac14e57917ed3da6de8ab3c10d": "770fd8bf4857972df06356602484e59f",
".git/objects/67/2e9e49d2f0c4c8aa44b496beb98f32cb36720e": "8b66be9a4797f8f3922fb5816494c68e",
".git/objects/67/eb581ccec9bd8b1f27783b51bd591638184426": "d89e89799766e5336042bec923fcc56e",
".git/objects/68/3dfc62b8e1149bfc9e719b4391fd3cb806b0e0": "e8df32220599c73550ccd1cd86b376e6",
".git/objects/6a/a753ef8908c68043a2187bb4b0e180b09f4ef5": "2c6eda9fc095e4a060545ca853b5263b",
".git/objects/6b/4d619e86f46d406a8b99bacbe8184f8177869e": "3ca15beeb2970e45d0832f6cde5144e4",
".git/objects/6b/b6f559f5f60d269e622d8e17e1e7c5c7ae60f5": "00a93c1ee8e1bcde6c2c8e3189931425",
".git/objects/6e/103501ce8acc58f0230b5ac0f12dc986699bde": "a627b6ace963ee9375f5d14900cfb007",
".git/objects/6e/edb19bbba34713aa4d858c4bf1f4570c2fc35c": "62569b74f8bd88500b7c0ae21b6283e4",
".git/objects/6f/7c1b16fb385e484faace5435a56c0be82f1a70": "55444c0117eca0b8c1d78aee30ec6390",
".git/objects/71/47dfbc57a608300715022707fdc3d522f98f40": "3cc295e61cf6548734f8738d2b0ca56e",
".git/objects/72/4a4eb33f00b329c6d9d3b8e1aed228c6d37409": "f63f7c2574093f0a49cec267e80e3c88",
".git/objects/72/a7faf789032d731f7d312603d67f649689e6b0": "7b71a23f0aaa004d40fc39410bb3c622",
".git/objects/73/378779f6fcb1124205cacf1329b0016097f54f": "d7f8fee808f0640b4c08e88a1477f09e",
".git/objects/74/f7119f5132c60f32bcc9056a06d4b64eb7b58a": "3f02888063babf1e1493c1fb7b862605",
".git/objects/74/fac5aa3e8a8eaacd75e9003c30a8cbd4b71bc6": "9990048bd29866ff550f89bd96b19d89",
".git/objects/75/7e2e61ba2b24b94e30a2490103a4eb09c60ff5": "c886352518f96786dff2e89754449a45",
".git/objects/76/18d2dbd539a89e1341ce551d38341840e19980": "ff6a2c938175dc32a465dad3ec78f243",
".git/objects/7a/4b19677453fa586da9e95d95890ba51bc73872": "af5cbc4c8a9bd72944725a800a790f8b",
".git/objects/7a/8873da7b35ea995db6b33cbc0e4ed4b691729c": "b633b5be7101cef5a20e5e8535c29d1a",
".git/objects/7b/2742821e84e4ef16c5bb49d93ff280299bef3c": "15989635144fed50aa42bdb3fded01a5",
".git/objects/7b/dec678f76c45790a86dc5adb901375593b9245": "3ab3927caab89bf4d83469e0f7754375",
".git/objects/7c/5bd93968aeae768546410cf2c0274e0cde3b27": "91fd1e081e31d800fc78134537a505d7",
".git/objects/7d/3da2373418ac7d504773fc2e5670cc178b631b": "b01717c8ad74b005a30bbf246a291e44",
".git/objects/7d/4cfe55c89824ed4c05c59f13487c1aff564cd5": "679fe3155d62db09247dec44db14921e",
".git/objects/7e/6644ffcce907d386ccbea6cfd133eb76d3fe5c": "8071cd3931416e1424ee626fcb206d37",
".git/objects/7e/f7a498e82a40c022cabd827fe5047ca52fefc0": "54a6f8de76e9dbb4abc356b4385a221f",
".git/objects/7f/1dd29371f82db2490d73d7b5f25b325769dcba": "28d8e89de94abf3972d75021eba656f0",
".git/objects/7f/f003e4a20ee073f8873e174bbf49ad23c7199c": "1b8d3f919cfbf4851e74daa54059d9ff",
".git/objects/80/50bc94fbe687b00255427cac8dd21a26dea785": "aab688a52c0cca487b923ac2ed01a70b",
".git/objects/81/0a21fb9cfd0fb3b7693a92d440a7df54323831": "3e73ae02f2bdd2756e98a6b9088c7e37",
".git/objects/81/bae6b6b705feabc7d92f44f7349986e2c6c6b9": "e7bc466defcb0841323c4475db7eb1cb",
".git/objects/82/15edf23f40791f9f59aba2eab5daf538b3bcaf": "76c3747de29375d473a811f68ab86c43",
".git/objects/82/c23f8e2ab94991d15b6870849012544377222d": "031c18f2591864127d5ebde3d919b426",
".git/objects/83/9ccbf66290cde375cb268487bc225d8b35b8a1": "a56f97169899e834f235484d8af9c644",
".git/objects/83/cc7e660469746f28a48014bc5c9f42259bab9e": "b6c65efa30082fabf720b69eb3e0786f",
".git/objects/83/fa0d7a8b0ecb6c82a86c7f9b2c28d138e0bc85": "cf34a8c8e301ab951f8c00d45511856b",
".git/objects/84/8b7735578750d1660dad6c0eee501d08104029": "a621d85464dfe000fa59439852ace05d",
".git/objects/84/e6b59fc7155dacbd9d4bd4a2dee6b51da7ec5d": "ac23ddd1102ed7429ffb4f71835dbc82",
".git/objects/85/0427c7b61eaaa9dc39c763dd42d4598f772f93": "42ec5dab1b92b92262402cd65a90678b",
".git/objects/87/31e252d625109307b7c54ec4654c7563713b6d": "abbe02ba533e12cb7e3671d61ecf49bf",
".git/objects/87/48b0962fc646c383f46e582cc4756bf7a78c9b": "6c685946ae29398a1cbf08ca92743d33",
".git/objects/87/dd81d210901c14a736ae36e3a514ffa73e66af": "979666b5387607d10b88dc4309da594b",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/f0f3f2d000b1b31ba249b2c415d20b0e0f7ad2": "25a17e3cd169af478fc5f7b1f153ae37",
".git/objects/89/6294a9586bcc75c8456cbd23c3a95cb55164d1": "41505b2623a697d184ab3d05a76f34fd",
".git/objects/8a/26c3702e27e7a98a329deb9568245bf708cd63": "1124b637054429eb3764d3a38bd572e4",
".git/objects/8a/8bc07bb6b564ba3fc34783d4e5cd4e89a8864f": "7f973e4027d94cc8a9ad5cc7776f654c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/b292dd9c81fc23e05104b29c8f0c498664208a": "974044f5037cb3865c8c4dfb2777d5d5",
".git/objects/8b/95d693992061388198a31279ed9599418f4da5": "e6769d00101e037ddafffa66bb6ad35b",
".git/objects/8c/07339e364fc3a37fbbe087004fd560ebdf1025": "dca822273d339abd555a677ca42f0934",
".git/objects/8c/e95c1973a31d467b0886fcf6ac2373046761d0": "0a5179211ec2bb78058c17f916ca9999",
".git/objects/8e/2a3cc1d02a3dac0ac8eb674ff4a04ab43c127f": "f5c72b44d784e6bf3c5d375dea192792",
".git/objects/8e/2cb903376e8c1bf2a024416d5c389004849f73": "aea17b660b55b907fc2ce7aef1ef4a4d",
".git/objects/8f/35b08804898a86ca7be10d94936ddda09811d8": "e4e6ac29e1b82536f148f33db3369f7d",
".git/objects/8f/6c5bd8d5f03e3b0e572fa83c08cc46c5ecb085": "285644a72bc16ba29f68d3851cd7af38",
".git/objects/90/c0eba19d892eb6506ca726ba472675e23d0dda": "4f72ecafd59eab6488d3cfd5610992fd",
".git/objects/93/644e1fd922b41e64e01bb256f7da9b105ccbf9": "f368a9d045c28a9ead8b2af275dfd510",
".git/objects/93/df6b9f71c842cc02a9e48cc9b962f4502d15d2": "824dbe373534714f5f20c42718f6444e",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/96/79c22bfc18e343bc26a0a101c66468f3b889e2": "49d39034593fecf5002263438ae22f63",
".git/objects/96/97f0d8db13dc6d7a296121cf1ce598feee99b9": "31abd495f2ae93faf213ab9c4edc910f",
".git/objects/97/9d211bf1dfec3be37d637c8cc7da1a271675e9": "197853068c542deaa68f7ef93c514f0d",
".git/objects/97/dca6377d7d2f1af6cedbe97741b21f0f6bd961": "ad3fed6ed482830711cf37aaf130ae6a",
".git/objects/98/fa568eda9244d8534ac54bca0a2ad1093f18e5": "5e53ef18f748d11726dd71fddf5e5c16",
".git/objects/9a/3b4ca7a40100cd34a72fb70a10145553dd0b36": "b57d5045349176dc12d054851bb5e2d9",
".git/objects/9b/5d92c80c4f7b3ad3591c085cf3bf1ebf3a3df5": "a13c4ba20f5f4ed6ec967fa711d8e73c",
".git/objects/9c/35bae2c09783bb70a3770dd7ce944c6e0cfa33": "941d2e763c0b325cccf0b8faadd0f4b5",
".git/objects/9d/28607a36d7241fbbf91a7706ad814f97602999": "71f5b87dee9b36cc1e695177f119eb62",
".git/objects/9d/767b307f0c5b6ccb8ec88e418343cdb2a16db2": "6c2b53a2ae6fb4424454cd015bc9d090",
".git/objects/9e/1139cb5c1ef77530cc6d7c23bfc435721223b1": "6da3b42c094a8e6d362aaff9a9d377f1",
".git/objects/9e/a9a5546dd5c83f5db9f2b636210c33065c52fe": "193a3fd1821e0cf237b7f2b59b6325ab",
".git/objects/a0/4ad4a44e196134e76c696d7100f40aa3f21b1c": "644a684b8b7129c9e527064f8778ff27",
".git/objects/a1/c3119e274c9958381863bcd9d19cc42425e4de": "abd54a2c2086b75b45268044b026f65e",
".git/objects/a1/c34624bf075a89fb8155f7a05e864573f63696": "98eba8a3e6b2f6823077cc2ceed4acd3",
".git/objects/a4/69609dc8c6a9dc2ee2d779d0c51053629bc43a": "a7757a396cdd9c8c444af3f5bd07c7d5",
".git/objects/a4/72b800b65a6d0c8fb4c384e3a7cec604754888": "b5d982ada19bf51a299eb86ec1a1c040",
".git/objects/a4/b97dfd5bc3c5387a01955212d6fc5b2b927d8e": "a43fc6acab7da9f0d53d12a261c11e46",
".git/objects/a4/c11e5ae7cc7d1586111fa94f02a2cf34118e43": "3cfce07c27fc9c02bcfea23f37c6ae20",
".git/objects/a5/6565570d802d1a0fd8bf37a01997bd9c6f0b7c": "bddf6ddd18769abc2c208afec633b177",
".git/objects/a5/74225b395c8e0f19ec32066bfdf2a8fc3fd8fa": "7ad8ae706a1a8e37bd8d6a00a389c462",
".git/objects/a6/a6631845fdd905c25d6ac3d5691b6302c59972": "e66abf17876147623c8286bc99f4f7b6",
".git/objects/a7/6be12ba6bbdd256ea43ece462bf895b26abeb9": "31921989abc35b7bde4193f3fbd7652d",
".git/objects/a8/2d27b1afc92a42485a83e4e580b833e7960d5e": "bf05dfa9711f321a8e34f6f58f29ca66",
".git/objects/a9/f7b12df4dbe36a999c24efa77f8761a1898b54": "fc35aafef24100a4bc23eaa45144d208",
".git/objects/aa/ace59d73dfd89ca62911633da78f5d88d4c045": "19a3de06a681f694c8c76604c9a87eee",
".git/objects/aa/c3b6d999da846ea04412790083a4d3f3368f27": "63dde9d1a6a0d2b433b50cbe811451f4",
".git/objects/ab/48f51997c74aa8c4ab5d6e3fb49c6230780a8e": "f3035e0b1b8f20f6187cc92db2a3e165",
".git/objects/ad/546f79364dd2e1e1d8dd184c4a349145c18232": "3197aee0e3ac39f9c46876af4f83beb3",
".git/objects/ad/ad845be6d0404cc3ff1c1e9295a1e32c963c28": "7e08c548990bad7d526be37809d9253a",
".git/objects/b0/df22deff9006f5526f31bb88ea3cb0ac00e236": "edd9911f88ae12e7f0f6ba615a43a198",
".git/objects/b0/f9a70a80663856518c19e149b94ea0bf814682": "e7653bd485dec18454598e5dab31a076",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b4/73a7899c69a8c47a36c0a93b5c299903534c67": "e931d3b1f27a53b045cb48a3574e524e",
".git/objects/b4/7a4a9b697ff03e1fbb5dc706e4ffa19d8220c2": "c1f94ebaf728caaa52024a701b092648",
".git/objects/b4/c7fd3981a28cccbab19b231bc9040302cb4198": "cac0907c651cba589ce084c28d1d4f4a",
".git/objects/b4/dc44cff4075aa1b1a8c77b8fd59b033c6919fd": "5af6260cdb0ff844d1f24ce868768f45",
".git/objects/b6/a348acd7d4826baf5d413a1ed1ea2aa88ca598": "49ceb193967d5c7b3791d213d64c76b4",
".git/objects/b6/a8a9205a13aa34a4f400270c84314d1b47b14b": "2a44663610810771c15d6c6922318418",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/5f0d0e4408b5006debd95875cbdd739b9257d9": "e1fec1a22e0c57b2aaf706ed8fcb95b1",
".git/objects/b7/8da03bf76a39770a0c1f7bd4e447011f8a38be": "2c53c94eee6244dee60e8939f690faa8",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/096b87d8ef3ca1c42bf132877d6bbe2fa6ad96": "d56d0240fa8adf988ff5492c00d53984",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/b708384f95904c86893f39c370c8c62ca6b935": "e24c0467606f90f7472d2a09a250513b",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/3302127b5568decbcc85a643425ffe7f0f437f": "50ee927fe5352731c929c7f633b56f12",
".git/objects/bb/e5a36b683eb5582d519f74ac06fd8c8fefbf90": "643d91cae952cfb479362f50a8056bcf",
".git/objects/bc/39733548297d8d872385f62f76ad61badf46e0": "20506182743411afbf0591cafb3855c1",
".git/objects/bc/c6465d60c1376526ecc699335a656d7f129cf2": "ec6c806bf3fa11c745f08810194ab2f7",
".git/objects/bd/5efb896bd55c753ce2378a5b7f86da6753fd5a": "f8cb10ae0ba5ae8f2fbee936a84ee456",
".git/objects/bf/093fcc8f79e6ad50aa17cc65c2e5c25b0509de": "a1cdb6d097d5b7a4a7ab6b3ebe1d3362",
".git/objects/c0/71cd49fc158fc894da7f2a8c4c620d54ef48d4": "5be274502cf440c3ec3d7016a34de93b",
".git/objects/c1/07bf88696fbc585524ede209a92fdb1175134e": "34e05d473de3ab06e4839ea29f1cada5",
".git/objects/c2/a1a0b0ca8fe3964713240d28332bdecd930445": "6119b0659a839f6f651b82f9c72f4a80",
".git/objects/c3/0833c7f8e008407dd95159451ef380f8dbae2c": "dcd9efb844967b2cec5d0d80b4b39669",
".git/objects/c4/27ad39282a92dab3a91753cb393470207f5b44": "082bd2ca51e07151b07eb63486577165",
".git/objects/c6/f72c5d249340964a2987ddc78d913c021ab62c": "169d18f3deb9c4808786f3057db69e95",
".git/objects/c7/9c6d9d75d3afa04ff486d6d6a2dfd32f010a0c": "ca6b19f143992f8ec7ca6eb2858beacd",
".git/objects/c8/98ab55d763326b78194a17e130b465b98d14e3": "f731a64a18b2531bc3e6abf43cb2b9e6",
".git/objects/c8/ae52f753f55697f83fee57e9ae0796709d24cf": "d3a21417c2ca42bdc90e455d0625cddb",
".git/objects/c9/3e2f61301e9b8099b2a5d7915e85e5b5aa4666": "616af46b16c8314276bdd0560cd27d95",
".git/objects/c9/c89d8076af6dbe9d2925c15ffd30e3fa447bd8": "2e52e460c3fecae21b40609d57d45b1a",
".git/objects/cb/e866ddc1324cbbde518d998a17e866590c52a6": "d9f9fc590af9257c92ac01ebc24fbe18",
".git/objects/cb/f3c6027a20b3e91359d8310071c545e0251bfb": "82209491ee130beb7d71bb47e2a86824",
".git/objects/cc/2a876e82ed0b0e849cdbf74b6e4989670f39da": "8f05250e478929f7c49b916c1fdfd79a",
".git/objects/cc/56c3d7207d0deb2478cae803f26f5a1c770f00": "7bc027c34e69697b6375e810a620215c",
".git/objects/cc/ac1c07762a3614447e8ebce103dacfcbf846d9": "9f89f9fee2a4fe0e9bd90a47f31414ce",
".git/objects/cd/611172a597fc005dcdcc5eed67dfea3833256a": "9bd79f5709856b2689ba4fa85464f38a",
".git/objects/cd/90080aae9043fa51e551f74807c73cf93ab77d": "4abdbdd6ed69a6d3539a9d7546b284e1",
".git/objects/cd/a20fc65b6e63dab75703f58282d61e76d7c536": "e610260865519b900ea591cd58c114cd",
".git/objects/cf/4fe14ac488967f4ade46ee11ad8cef79cd86c2": "60862fef1fa33d39df2b0ab028b26a9b",
".git/objects/cf/fca225b57bd8bf5e421a810b203270ec6e9774": "c9831e64d44dd1a89341e22ca87829b3",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/37570ae401bc963b88934b0e9dd380eaf74eb3": "8b1f3b9a82247e8fcd557a66205dd772",
".git/objects/d0/59c151dbe2a31e50b65f88ea8ae18d85c8e4a7": "c8f862b04b8704082f91b29cd418f359",
".git/objects/d0/bce0a230719b6fecaf2bfc0afcf9117dde0d1a": "8f143f448e3e7e7455016f2fb4274a02",
".git/objects/d1/4b9affde9ec731398288b9197f576f84c0d00b": "1ae5f651fcecbc0073f56dd60b766536",
".git/objects/d1/4f62e71027450ad58364a6eaab565087fe7bd7": "46f287c16735a1786edd92d2d995f538",
".git/objects/d2/a83ec9cf33c1a357c02bb8cbfc776ebb74a6e5": "df9e1df6ac168017881ae383755160fc",
".git/objects/d3/302dafed160ac707efc517debd296b3db44472": "fac6a02b2c7dfd2dccd0e7af71451469",
".git/objects/d3/6de157c7052590e89014f4f7fe66ca16d668cc": "ecb2cbe105f190de74854bcd21d17b70",
".git/objects/d3/94b471028d5bc980e22dcbdd07d24e87d583ad": "06a3b68d733f897c46cf798548f6856a",
".git/objects/d4/114cd0f93c47a58df38ad29d4141ad0d42daff": "85e0936eb4a0bdb2bf5c3b3441e184d5",
".git/objects/d4/18286074acd9fb01a5e07780d894f66cf3796c": "638d6442a1523c135a45e0b081c890d2",
".git/objects/d5/d63595eadd097b628184ee0c9527fc1d170b1b": "31470585933a8e752a06c3586fb72601",
".git/objects/d5/f7f94ecfbb97d18abdab3654d73327d2a83555": "9f1a78b67696f7fdab38db316f2c501d",
".git/objects/d5/fac4a8eb5bf8bb8afaca2bbe9b54cf36e28133": "4d965e972f737f0c4513cc6872351a8a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/cbaa27dee078ddb61bb353fdde05b6825b4b40": "abb2dc6c430af4640a164e48c162b9a9",
".git/objects/d6/de5ff3cb4da5195c748164c67c82348c7f32e6": "3a6780a1691401c7a33d6ecdc07522e0",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/47606b4d610b207dfd6a0638e3b1d4522858af": "f984cbd9427453c53fa29b627bcc325a",
".git/objects/d7/e61d64444d3e9f9f4026cbeed2c26ad45a8f84": "a07f82cae45753c11d60d17254444d13",
".git/objects/d9/0ed3479ed45fee118bb6f22f42a8b8a165f3a9": "4e415d93b7f77382360ad2ab428bfc3d",
".git/objects/d9/938c028a5be260bda2125b888606060d5dfb2e": "6b55ee433ebec0003f7e965dd34bf180",
".git/objects/da/c2f95bb335e866cd5657e74ff1c0fb83652992": "011012c8815d9ef02204eb4bd7717604",
".git/objects/db/11095487b27899eff036670702b6b696b8f4b4": "cc7a38ce05812007520f316486c7572a",
".git/objects/db/35e6912dc9057bb8abf7a53c8bd76be2922c3a": "9bfedbfcebb04d472125791febfc0ac8",
".git/objects/dc/508baf399cfbea32f51b9542fe69f91cfae884": "b96c46ed4195adad3b35a2d13f3b26e1",
".git/objects/dc/8bf36cdf62d9356a1bbe5a663ddece82e7ef6c": "2b8eae30fd879d40d3920a88f9c21e0a",
".git/objects/dd/f4bfacb396e97546364ccfeeb9c31dfaea4c25": "049d11285bcbd30a249b4dff756126a0",
".git/objects/de/4e32b0becc77e3f69167cbf10587cecfed9e1f": "d3404c4568dd25df78903504f4eb1c2a",
".git/objects/df/5bcad02ab015de0a77c002a25ee2e74df66c9c": "5c258a47f903de693a140fdee5f4ce8f",
".git/objects/df/bd47772a44168b4754c49a0e470b11235ebcab": "8e002bd3b73a8f8e568ffa8702dafbd3",
".git/objects/df/d219ce96fab2df05ab8cda5157e25167a92652": "e4a5207de02d2e6db153fdd8f4e40454",
".git/objects/e0/00766852ea51fd6ea86629c4a9d717369659cd": "0009da3b8aa639ec91a6be9e96c2819b",
".git/objects/e0/f8defbc2c422cd7c4d0146a987c381265971da": "2f5c6cbf62678aa540d26b941dba9937",
".git/objects/e1/6532e556b53f9666fc3b56ad91260f35d876eb": "8faf8126ad16a3e951c3ae995fdec901",
".git/objects/e2/2f80ab53e0a65750dc5cc52893079686ded5db": "54c8616ea104dadd6a61f4e4adb789ce",
".git/objects/e3/31664f96ab2a3d89f3b5c5bf070f0a3b92cc9d": "cfd806c1a9e497ca71956a9e94f993e2",
".git/objects/e3/42971fbd593c7f621557657c5df8935bc44c90": "60103f52ea2e54356acf1f873050753a",
".git/objects/e3/ae08d613a4f1d53e3ce3c07e43ebde0bae18b3": "0d1c5f81c6e76a90ce5eee33240560dc",
".git/objects/e5/15fea3df3651fb1d0080b6f69cabda75b32c7f": "7b1bf8a09d7c3182466c36666e95a5d7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/a8bf0e38ef07047153b051729df243ec2ba20e": "13b2c4094e153d1e33f6e893174f475a",
".git/objects/e8/b57ff5200d3a284486ccad937d0b516c159513": "705394ab58b0bf995320cd2d0c1c9627",
".git/objects/e9/ed7d77f5b7732992d1363c8680fc4bdd8d2594": "153f4446a824f4e58e8dac885244db21",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/e0bd51ffbaac0247879537d3166ace2a6ac148": "feaad231d175e4aacfe358f66ef6a752",
".git/objects/eb/f6725c427a4c2e5484fb21a1c6ccd405a921cd": "2feb4549dd666bdcbf3d3c6408c9b7c9",
".git/objects/ec/5e04111e43d461e98d0b155416e4eb14153cd2": "54e6dbf7b207c544ed847fc99d40a653",
".git/objects/ee/ce413a514f6728d945ce9e72c08ad4239e6368": "17fe91d415d31766379e94ff3e123bb6",
".git/objects/f1/48d7a7faa8d54c9e65bd9a19e7967dd050e289": "839c81b7a8c69a9de7e28a3bf2bb77cc",
".git/objects/f1/87b409ec506b55f19f5d8f43298a2517658fb8": "41df95ba84ea08bbda73a4c02d3112c3",
".git/objects/f1/ae41b4a0fc082cb7f8d5a11466e47124066069": "2403e2673657a9d4fab27a8a34ba8756",
".git/objects/f1/dcdb3d6e6704be0786e3524fc33e3be948a254": "5f4f42dd298a0e20689a81bdea08cf70",
".git/objects/f3/2acd5cf19ad730e8f9ef21409d05f297090bd2": "d824da4dcfb567a53a31a32e067f2e8e",
".git/objects/f3/75a0579679a35be81d23c0e46dfd3caf2d0e40": "9c39dc9c7a5a218e9888824a5204dc5f",
".git/objects/f5/330e76426e25deab2ec203ee7e20d33d5b82c5": "6928e58d23f93a3d2618cc72bd1dcea0",
".git/objects/f7/9f5d8ed9903714561105fdfa20680fb85a14c5": "335fe91c7d5376b7f08755408f55a647",
".git/objects/fa/3566290b098c59ed6d32f026027c3aab77618a": "7149caf48d471f055018ff253ac53e8f",
".git/objects/fb/6c66e8c1396600a56552034f8001d43417f125": "71be65a1a6c587f7639602cc2cfcde98",
".git/objects/fb/730946ce1684ed8f5967b26983cbecde8365ba": "cfc5cbb9991dfc350e40ad3b04926d0b",
".git/objects/fc/63d0158cd7114997c22d6cd2c527eac1b6d863": "d7935d5606f82db31f7a4cf760d034c9",
".git/objects/fc/8f4696dc9f21f91459486d977cfa0de94091f5": "d0bbb2f6f1f74908f52ef79fe701c534",
".git/objects/fd/297d450985cdbd706c7ee7fca63176b7bb5b3f": "f83e1d6dec8f68c04685c317cb13817f",
".git/objects/fd/4ae39b6b0477ff778e5be52b22f55afc646e06": "41fafa98717f666486f8786781ace0d5",
".git/objects/ff/0485b9557704c084841eb324ac538622c4b5dd": "664378c6b59fcb5a1817933bd3875f9e",
".git/refs/heads/main": "8db0607fc7d136921eb1f13bc4e9ffdb",
".git/refs/remotes/origin/main": "8db0607fc7d136921eb1f13bc4e9ffdb",
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
"index.html": "7a12d53d9a28a5827f438ebb69008ddc",
"/": "7a12d53d9a28a5827f438ebb69008ddc",
"main.dart.js": "b935ca5f042d8c8ea2df3a9afd6e3fa3",
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
