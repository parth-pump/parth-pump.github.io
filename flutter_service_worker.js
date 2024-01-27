'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "90325946e493cc09f128062f8f87cb7f",
".git/config": "31ccbb2698cfb779107b1b98e0e2720d",
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
".git/index": "6d269f22ebcd88be36bf978fdaeb2869",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2e590eeab8547a9f0c1e25d0781389ec",
".git/logs/refs/heads/main": "6154e20bfd4e88d82299150ddee48afb",
".git/logs/refs/remotes/origin/main": "c1c78b074477b5f14b4b5d77f57914eb",
".git/objects/00/7491cca198db08a681d106204bb9df9b10ba18": "10824770141127e40a307bd06a7dbd6f",
".git/objects/01/83968280a50a93136983d3885dc9bc2f73f4b7": "578eb0c51ab324be3700022e62b79f11",
".git/objects/01/eac33ae49d75dd8e844f80e25e60ee77a14838": "7860e4b843324a805f46e48325e442ee",
".git/objects/02/6316e947e74de1a779fe1b73955ea946617b76": "bd86d3194d6ee8b8f59867282a95f76c",
".git/objects/02/f695027b32abf8d00e1e169cb6d72d78038e92": "871f87e46ac640a97e389b4384f23ad9",
".git/objects/03/2a7e502159def0463fb8f8f60aa3bbcb488953": "2b2c72f3d3920a457d6a589b0176ba81",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/05/534b43693dcb6e9046de97b68d446ca86a90ef": "0203d28ae9dfb7fa310bb6f2f9caa56c",
".git/objects/06/0fd4ed5c4e889d1c20fb988e77ca97652ded8c": "0c2b1f88c592566e2d44cd6cb3ca27e2",
".git/objects/09/2e72cceab72e2bf718ede77d18455b5114ba52": "c4be641de12cf466bf1bbe28a66b51aa",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0c/9a488d3a3b4beeb03ac95607c6000e0b9f3c0e": "5d1cebf8855fd2144790ef6707e479a6",
".git/objects/19/33daa546c5a29f209d15dacb3b0dfdebb8f1ee": "966ec81b24cc049c9ac9fd51e38407c9",
".git/objects/19/49491fe9516a8989f036896a3e154583671459": "c597fc5e3d4267aa11ceba8cade49846",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/c97f514507671010fb34e0264abb1ac8309003": "f91bbea44eebc127d0038468939b82d4",
".git/objects/1e/727aefc44c39e1197960ea9579a496dc469929": "f822872fb8623c94de480b45c918a3e8",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/182a9156031e71bb7de18b449fd916b6e30cb6": "eeaf8008dc04acbe0b78e5879bab7209",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/ec1f89c4b622e7afd51b8f9dede45476beee39": "8ade9f5f9d295f4f5c7716ba751bcf88",
".git/objects/21/5ce91d34935e4af3ef9815134820112f799606": "9b8fa19b7e82fc2ae2862ea42ff16bba",
".git/objects/25/42b61d226f4a53cc50f0ba9fdf60a445d6ce27": "3917b9a7c4a3fdc3ede4c1c30601ed94",
".git/objects/26/8905b7744ae4aba2c022b4d485987af9a26725": "3da24d7128aab45bda946099cf0de719",
".git/objects/27/53bef7b4f9a063f7b36a15fe597d1112450e30": "79bb70bb647162eb342595f53a7d3107",
".git/objects/2c/d7b71bd4e27cf59e873b341be4758f88457468": "48917df3859167af3945e2f85d7cb48b",
".git/objects/2c/eca0ffd8e5ace87b7c78cac6e45aab388354d5": "44e457ee2dc53e1dd32da6abe50f9048",
".git/objects/31/a821109ec886e89d8221ec5c9723bc60c7653c": "fe8d497cb6f99c12f15b46e14f4e3a87",
".git/objects/33/2425f47bce216c7d2c5292568901034838615b": "a52e1121e9c04fe6c272fe3832d899c0",
".git/objects/35/63be35942c71f294199422fb8ee4b8032069a4": "47ad7293d46594afb3749b1bd7d9194f",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/6eae279cde5506372ea8a073091791d3d4d2a1": "61cdb7441371e71e3ac3db56e8ddfac4",
".git/objects/36/af5dfff7a4cf2f5dcde66c28dbe30a15dfa80b": "8b89aac6b743f9951aef4f9255116b83",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/38/b3de1eb1d8dc3e64cedc3d7270ebf898abd283": "78bff37ac47364d2295a098e7f4e8eee",
".git/objects/3c/53114fe4003b753374fb7cc0d99e4ce75a80d0": "86ab52e6d2d39dc8b77130c5c6d720a2",
".git/objects/3c/95120bf6134b04238736c935d39f4aafbfb77d": "91beaaa97312299a25f6a380667c01a1",
".git/objects/3d/542583893c78d05d2d55759cdde511e34c2a21": "03c83d1d98f0d788014d9f6973f6cd97",
".git/objects/3e/3a3ec32a9a18ebbca1a2e0e67d9fee4f5e8b8f": "ab66a328b55e3f282d412222584e26d7",
".git/objects/3e/8a44003e48d3d7d52e25051cec1a8a2c2fdc63": "d7d22a6435f75966c477200c52c905e7",
".git/objects/42/570ee1206d07c04f85f5befb73b19bb95f6e92": "8d832b8c3c9fd09379a70452ceda07d2",
".git/objects/42/a7f2caa90cc80db34a15653f2e3b374699a730": "d3fc04a57e98501c8295431da4d52771",
".git/objects/42/dbbae6f2576c896000133defd0fec9f352c4e7": "dfd75479e3fc9ec00bd7ea7797b8eb10",
".git/objects/43/521ba9af7a2cc60c5b33d6deab2caf5083fdca": "b48857ce6c64c4c13262206a9c01b68e",
".git/objects/43/cee83911d7c5931e37cc41d7d960467101b511": "dad3c3909608fd8a81d81daba43aa55c",
".git/objects/44/4cf344bd7e42699d87918cfd70fe56a0eccfab": "7c6bb369c9a444f64822ba08ef4a7c21",
".git/objects/44/c229e9bf4ff0d109b0b472fcc1e9f98ca2aaa4": "1dae58b7f5e594d89aeda9a4b04edcf6",
".git/objects/45/b6d654cc60b16a56d48323280b0764181a6e7b": "12637159abd5834da00121f8a0281ed6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/6ebb514db55fc21e28684d5a6d736e27dca98e": "e758c77425601b44ab785a70795a866f",
".git/objects/49/2d9689d62a27d12e1e145051dc813446d753f8": "44a36fcb448bddc45dde9851e8ab1ebe",
".git/objects/49/50544b86782ef4abb8ed88e55f3c2a414a604a": "464f54d67faab335d66b2722ab000ff5",
".git/objects/4b/51de6dc5b3b0289ea3f6746832b823f4a77899": "092a4729ab2386f890d816e146a050b2",
".git/objects/4b/f267251bd36399934745ca5749cc9382917162": "6fd15d3a2e6ac1c8bd3ccaa2bdb9ccba",
".git/objects/4e/62b834ceeeff9680872d9eaca8758a982ddc06": "735ff1b5a56ce178cb93f94a76830cea",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/1314012099163b7a58486833f702c9355cb849": "92a3fbcf9d9cc7f95b61a15704560b42",
".git/objects/52/36413fd7619eea3b0a41310ec0548a1e1287fc": "4410985419efa7765a74b837e676e871",
".git/objects/52/b8f4edcd552daad699bb6c3dd51a16268302ba": "1a59bb6f149e6e4da08e73bee2e69cec",
".git/objects/54/918a9506f67ec0a38d01f16ccd2dc54b1d4c7f": "3160e9e7fadbdc68c5c88048837a403e",
".git/objects/55/88f6d3a78f91d3c58b9cf3c7294db52fee18db": "4b8f1cbb5555e769c0d68a48c46566fc",
".git/objects/5a/2350f31799711004c95e47e23ba99bc78736d9": "3ea67b86d7b1e2346ea27ae4adeaf7c1",
".git/objects/5e/0b910d49034d5976dcb1e58db970b91e9f9258": "0f13c8d78633650a735ce6f1eeb2aaeb",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/64/5688c5c6eec10785894e1f979f71a2857f812b": "54996fd8a265bbb2bcfc06bcfaa16cfb",
".git/objects/66/7a2ecc76a06ab9c1579f81e538ce044d045278": "819caa6fd9bbff424233523c4abc8aa4",
".git/objects/66/8c03c08a64bb880e07213b8e68032281195b4a": "c6bdfba1f993712712b045384607f7b2",
".git/objects/66/b59ca3d5a63b81cbce14ecb24abd33f60ad1b0": "67e807de0e5ea47d9d335152f0293ec8",
".git/objects/67/2e9e49d2f0c4c8aa44b496beb98f32cb36720e": "8b66be9a4797f8f3922fb5816494c68e",
".git/objects/67/eb581ccec9bd8b1f27783b51bd591638184426": "d89e89799766e5336042bec923fcc56e",
".git/objects/68/3dfc62b8e1149bfc9e719b4391fd3cb806b0e0": "e8df32220599c73550ccd1cd86b376e6",
".git/objects/6a/64dc77c78e7a6808aa68180b4fdee52f0d5a35": "bdddeed19125153bac55a86253b70e18",
".git/objects/6b/b6f559f5f60d269e622d8e17e1e7c5c7ae60f5": "00a93c1ee8e1bcde6c2c8e3189931425",
".git/objects/6e/edb19bbba34713aa4d858c4bf1f4570c2fc35c": "62569b74f8bd88500b7c0ae21b6283e4",
".git/objects/6f/5b71f813f37720f5385b7d92145cd8b975dc9b": "6b8cc491b45247598fa9631b4f368ecc",
".git/objects/6f/7c1b16fb385e484faace5435a56c0be82f1a70": "55444c0117eca0b8c1d78aee30ec6390",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/71/47dfbc57a608300715022707fdc3d522f98f40": "3cc295e61cf6548734f8738d2b0ca56e",
".git/objects/74/88c0bb1ae88a39eea36a848c040a06695f8ff8": "d108bf926e24ea50ad07e2440889e6b4",
".git/objects/74/f7119f5132c60f32bcc9056a06d4b64eb7b58a": "3f02888063babf1e1493c1fb7b862605",
".git/objects/75/7e2e61ba2b24b94e30a2490103a4eb09c60ff5": "c886352518f96786dff2e89754449a45",
".git/objects/7a/8873da7b35ea995db6b33cbc0e4ed4b691729c": "b633b5be7101cef5a20e5e8535c29d1a",
".git/objects/7b/bde971794111c05c28a14133b1cea8b8c9531e": "647851aa6da05e58bdb640aae758c4e7",
".git/objects/7b/dec678f76c45790a86dc5adb901375593b9245": "3ab3927caab89bf4d83469e0f7754375",
".git/objects/7c/70e3224755505d35ea8e4e5235907951cd2753": "a968b6e35e955a3fe693831cae5d222d",
".git/objects/7d/3da2373418ac7d504773fc2e5670cc178b631b": "b01717c8ad74b005a30bbf246a291e44",
".git/objects/7d/4cfe55c89824ed4c05c59f13487c1aff564cd5": "679fe3155d62db09247dec44db14921e",
".git/objects/7f/1dd29371f82db2490d73d7b5f25b325769dcba": "28d8e89de94abf3972d75021eba656f0",
".git/objects/80/50bc94fbe687b00255427cac8dd21a26dea785": "aab688a52c0cca487b923ac2ed01a70b",
".git/objects/81/ac72a628d91645612bdd2ac163e795bb9fe4cc": "6e9bc6d1e87cc14f43d25b540c507dc7",
".git/objects/83/9ccbf66290cde375cb268487bc225d8b35b8a1": "a56f97169899e834f235484d8af9c644",
".git/objects/83/b92edcc889b677237ec3bbb09fb129efad0e3a": "d094db50f804dab90a19bdbae402ad41",
".git/objects/85/0427c7b61eaaa9dc39c763dd42d4598f772f93": "42ec5dab1b92b92262402cd65a90678b",
".git/objects/87/31e252d625109307b7c54ec4654c7563713b6d": "abbe02ba533e12cb7e3671d61ecf49bf",
".git/objects/87/48b0962fc646c383f46e582cc4756bf7a78c9b": "6c685946ae29398a1cbf08ca92743d33",
".git/objects/88/671e2ef482e6ee07888ef624d1fa84682ae999": "7c4a31694ac0f4a706ce88ed50cf58bd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/8bc07bb6b564ba3fc34783d4e5cd4e89a8864f": "7f973e4027d94cc8a9ad5cc7776f654c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/b292dd9c81fc23e05104b29c8f0c498664208a": "974044f5037cb3865c8c4dfb2777d5d5",
".git/objects/8c/e95c1973a31d467b0886fcf6ac2373046761d0": "0a5179211ec2bb78058c17f916ca9999",
".git/objects/8c/fd0d4be549a682a8d85446dbe41f4053b8e57c": "48d120a0933b9b1b093779321002f316",
".git/objects/8e/2cb903376e8c1bf2a024416d5c389004849f73": "aea17b660b55b907fc2ce7aef1ef4a4d",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/90/c0eba19d892eb6506ca726ba472675e23d0dda": "4f72ecafd59eab6488d3cfd5610992fd",
".git/objects/96/97f0d8db13dc6d7a296121cf1ce598feee99b9": "31abd495f2ae93faf213ab9c4edc910f",
".git/objects/98/fa568eda9244d8534ac54bca0a2ad1093f18e5": "5e53ef18f748d11726dd71fddf5e5c16",
".git/objects/9d/767b307f0c5b6ccb8ec88e418343cdb2a16db2": "6c2b53a2ae6fb4424454cd015bc9d090",
".git/objects/a0/b1f78db36cd2f7c3eed7b88d86890edc5a1b21": "053a6ca6931a70c0c90dc1c0ac51c578",
".git/objects/a2/18def21588ea2609ba23f341a50e88865f8d61": "99f9bc33222f71e5bce9aa7bf2bdd07d",
".git/objects/a4/c11e5ae7cc7d1586111fa94f02a2cf34118e43": "3cfce07c27fc9c02bcfea23f37c6ae20",
".git/objects/a5/6565570d802d1a0fd8bf37a01997bd9c6f0b7c": "bddf6ddd18769abc2c208afec633b177",
".git/objects/a8/2d27b1afc92a42485a83e4e580b833e7960d5e": "bf05dfa9711f321a8e34f6f58f29ca66",
".git/objects/a9/248b32d19aff3dc7f6ea6ce018fb91c2979dad": "af048fc80f44a2e33dfb881b345d5052",
".git/objects/aa/c3b6d999da846ea04412790083a4d3f3368f27": "63dde9d1a6a0d2b433b50cbe811451f4",
".git/objects/ad/ad845be6d0404cc3ff1c1e9295a1e32c963c28": "7e08c548990bad7d526be37809d9253a",
".git/objects/ae/2533d7191e61ffaf9b0bccf6856b30f13dd7f9": "dcc16c55044bff7c356d576f0978c5bb",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b0/df22deff9006f5526f31bb88ea3cb0ac00e236": "edd9911f88ae12e7f0f6ba615a43a198",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b4/73a7899c69a8c47a36c0a93b5c299903534c67": "e931d3b1f27a53b045cb48a3574e524e",
".git/objects/b4/7a4a9b697ff03e1fbb5dc706e4ffa19d8220c2": "c1f94ebaf728caaa52024a701b092648",
".git/objects/b6/a348acd7d4826baf5d413a1ed1ea2aa88ca598": "49ceb193967d5c7b3791d213d64c76b4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/8da03bf76a39770a0c1f7bd4e447011f8a38be": "2c53c94eee6244dee60e8939f690faa8",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/d4409000252ddbcac0a417a955de1619ec4181": "bdd596e99447cbe5b0dfa2851326b432",
".git/objects/bd/ef27a3adc2281fcfd0ded6546375a9a00c560d": "595dc84824aab6b317cce99f61c9b392",
".git/objects/bf/093fcc8f79e6ad50aa17cc65c2e5c25b0509de": "a1cdb6d097d5b7a4a7ab6b3ebe1d3362",
".git/objects/bf/9da87aae71bcce3c39da039da171c6b30c3107": "05b797bad0033230a571bafc886d371b",
".git/objects/c0/71cd49fc158fc894da7f2a8c4c620d54ef48d4": "5be274502cf440c3ec3d7016a34de93b",
".git/objects/c1/07bf88696fbc585524ede209a92fdb1175134e": "34e05d473de3ab06e4839ea29f1cada5",
".git/objects/c2/a1a0b0ca8fe3964713240d28332bdecd930445": "6119b0659a839f6f651b82f9c72f4a80",
".git/objects/c3/78b4822e8608cf1ae786fcdd8559fe6635c1d9": "e7e07d2d95e5fbefe67ab90494b4e0d6",
".git/objects/c4/27ad39282a92dab3a91753cb393470207f5b44": "082bd2ca51e07151b07eb63486577165",
".git/objects/c4/380d7745dbf514c57add7adc83d9b276a6bfd7": "1ad2c9992e68daf57253f12281678b63",
".git/objects/c5/b42089e52194cd0a8997fcda180bb0c76be599": "63a91f0ba3cc3cb876fda0a8be8b5bbb",
".git/objects/c8/1329e6c4dc0ffd78801e074569d6e368d87ac1": "6a86b2c4aa41b631388e7ed6b37863c3",
".git/objects/cb/e866ddc1324cbbde518d998a17e866590c52a6": "d9f9fc590af9257c92ac01ebc24fbe18",
".git/objects/cc/2a876e82ed0b0e849cdbf74b6e4989670f39da": "8f05250e478929f7c49b916c1fdfd79a",
".git/objects/cc/ac1c07762a3614447e8ebce103dacfcbf846d9": "9f89f9fee2a4fe0e9bd90a47f31414ce",
".git/objects/cd/611172a597fc005dcdcc5eed67dfea3833256a": "9bd79f5709856b2689ba4fa85464f38a",
".git/objects/d0/37570ae401bc963b88934b0e9dd380eaf74eb3": "8b1f3b9a82247e8fcd557a66205dd772",
".git/objects/d0/bce0a230719b6fecaf2bfc0afcf9117dde0d1a": "8f143f448e3e7e7455016f2fb4274a02",
".git/objects/d1/4f62e71027450ad58364a6eaab565087fe7bd7": "46f287c16735a1786edd92d2d995f538",
".git/objects/d2/a83ec9cf33c1a357c02bb8cbfc776ebb74a6e5": "df9e1df6ac168017881ae383755160fc",
".git/objects/d3/6de157c7052590e89014f4f7fe66ca16d668cc": "ecb2cbe105f190de74854bcd21d17b70",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/114cd0f93c47a58df38ad29d4141ad0d42daff": "85e0936eb4a0bdb2bf5c3b3441e184d5",
".git/objects/d5/fac4a8eb5bf8bb8afaca2bbe9b54cf36e28133": "4d965e972f737f0c4513cc6872351a8a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/47606b4d610b207dfd6a0638e3b1d4522858af": "f984cbd9427453c53fa29b627bcc325a",
".git/objects/d7/e61d64444d3e9f9f4026cbeed2c26ad45a8f84": "a07f82cae45753c11d60d17254444d13",
".git/objects/d9/13c1f7adc0f90b5d6a9f2274d572c80385cd0f": "4c6a78035899ad6d777b4ef4ea8bc386",
".git/objects/db/35e6912dc9057bb8abf7a53c8bd76be2922c3a": "9bfedbfcebb04d472125791febfc0ac8",
".git/objects/dc/8bf36cdf62d9356a1bbe5a663ddece82e7ef6c": "2b8eae30fd879d40d3920a88f9c21e0a",
".git/objects/dc/aabe74374256d115811486676046f3771fee9a": "f15736c5282b158668a9d7cb790a8ff1",
".git/objects/de/e8cc0df483255da855b259fb1ca158ec596e1e": "49fcd4707282a544e5c0d56e8f71a60d",
".git/objects/df/5bcad02ab015de0a77c002a25ee2e74df66c9c": "5c258a47f903de693a140fdee5f4ce8f",
".git/objects/df/bd47772a44168b4754c49a0e470b11235ebcab": "8e002bd3b73a8f8e568ffa8702dafbd3",
".git/objects/df/d219ce96fab2df05ab8cda5157e25167a92652": "e4a5207de02d2e6db153fdd8f4e40454",
".git/objects/e0/00766852ea51fd6ea86629c4a9d717369659cd": "0009da3b8aa639ec91a6be9e96c2819b",
".git/objects/e0/c62c0bda637096fd7ec0db2f03e44acd00b644": "f1d93f78dafef12f5bd1e198414231b2",
".git/objects/e0/f8defbc2c422cd7c4d0146a987c381265971da": "2f5c6cbf62678aa540d26b941dba9937",
".git/objects/e1/91c061e60d85438c947cf4b784d59a02ee993f": "ea52f169f433ea5179547afb133d4296",
".git/objects/e2/2f80ab53e0a65750dc5cc52893079686ded5db": "54c8616ea104dadd6a61f4e4adb789ce",
".git/objects/e3/31664f96ab2a3d89f3b5c5bf070f0a3b92cc9d": "cfd806c1a9e497ca71956a9e94f993e2",
".git/objects/e5/15fea3df3651fb1d0080b6f69cabda75b32c7f": "7b1bf8a09d7c3182466c36666e95a5d7",
".git/objects/e8/b57ff5200d3a284486ccad937d0b516c159513": "705394ab58b0bf995320cd2d0c1c9627",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/e0bd51ffbaac0247879537d3166ace2a6ac148": "feaad231d175e4aacfe358f66ef6a752",
".git/objects/eb/f6725c427a4c2e5484fb21a1c6ccd405a921cd": "2feb4549dd666bdcbf3d3c6408c9b7c9",
".git/objects/ef/896ab92c8402dddb42929d30b520f01652a924": "22ff2f3f59f364439265761f3ed97b5e",
".git/objects/f1/87b409ec506b55f19f5d8f43298a2517658fb8": "41df95ba84ea08bbda73a4c02d3112c3",
".git/objects/f3/75a0579679a35be81d23c0e46dfd3caf2d0e40": "9c39dc9c7a5a218e9888824a5204dc5f",
".git/objects/f5/330e76426e25deab2ec203ee7e20d33d5b82c5": "6928e58d23f93a3d2618cc72bd1dcea0",
".git/objects/f6/87d8aa81c1cb4282ce0604b7df69c16e3832b4": "7bd63b16de1b02147945bcdbab0ab7b7",
".git/objects/f7/26a874a53f88580a462698438f97ad9ddd63f0": "97142734ab353ad34d8fe0fb727950ff",
".git/objects/f9/6947fb1029ab42727d1d927bc78f847442dc08": "5e5bbac49d98feb4c14109dc86d98543",
".git/objects/fb/730946ce1684ed8f5967b26983cbecde8365ba": "cfc5cbb9991dfc350e40ad3b04926d0b",
".git/objects/fc/63d0158cd7114997c22d6cd2c527eac1b6d863": "d7935d5606f82db31f7a4cf760d034c9",
".git/objects/fc/8f4696dc9f21f91459486d977cfa0de94091f5": "d0bbb2f6f1f74908f52ef79fe701c534",
".git/objects/fd/4ae39b6b0477ff778e5be52b22f55afc646e06": "41fafa98717f666486f8786781ace0d5",
".git/objects/ff/0485b9557704c084841eb324ac538622c4b5dd": "664378c6b59fcb5a1817933bd3875f9e",
".git/refs/heads/main": "6a44831d81c81ffba09dd568dabad961",
".git/refs/remotes/origin/main": "6a44831d81c81ffba09dd568dabad961",
"assets/AssetManifest.bin": "73d570b30c527a48799ae2d75bbc7ed7",
"assets/AssetManifest.json": "c278776c131bf2dd42f00700af6bae66",
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
"assets/assets/hole_wizard/Tapped%2520Hole/Ansi%2520Metric/Tapped%2520hole.xlsx": "fe31ffbbce3e88ad5bc006ef6f9dd58e",
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
"assets/assets/material_library/material_properties.xlsx": "c079f903325c4e8a3d98dc9c250d907a",
"assets/assets/pump_logo.png": "43881890ef11c47cae7888e33d8cfef9",
"assets/assets/Sheet_Metal/Gauge_Chart.xlsx": "df4618e2c6495cbbe69bf6be9e73ac1d",
"assets/assets/Sheet_Metal/Sheet_Metal_jpg.jpg": "583c116f34fa177b60fb953d93462ac2",
"assets/assets/Sheet_Metal/Sheet_Metal_PNG.png": "64a9b2049c56da465fdbb1495e3e90e2",
"assets/assets/Sheet_Metal/~$Gauge_Chart.xlsx": "dbc83aba4b75e88097985a840bca599f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "00235f475abf240b37c709650af2fe96",
"assets/NOTICES": "a7efe022bcac19caaea01695a2f52a73",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "43881890ef11c47cae7888e33d8cfef9",
"favicon_old.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "72289789d14898c81f2c388749753953",
"/": "72289789d14898c81f2c388749753953",
"main.dart.js": "e453ca129c58d3395ec1aec57b45f542",
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
