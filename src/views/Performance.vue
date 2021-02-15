<template>
  <div class="performance">
    <h1 class="yellow">Performance of WORKS</h1>

    <div class="container">
      <ul class="works__thumbnails">
        <li v-for="work in works" :key="work.id">
          <img :src="work.img" alt="セパタクローの写真" />
          <div class="works__info">
            <h3>
              <a :href="work.link" target="_blank">{{ work.title }}</a>
            </h3>
            <h4>制作担当</h4>
            <p>{{ work.skillTheme }}</p>
            <p>{{ work.skill }}</p>
            <h4>コンセプト</h4>
            <p>
              {{ work.coment }}
            </p>
          </div>
        </li>
      </ul>
      <!--モーダルの表示非表示-->
    </div>
  </div>
</template>

<script>
export default {
  name: "Performance",
  data() {
    return {
      active: 0,
      isShow: false,
      works: [
        {
          id: 0,
          img: "images/works000.png",
          title: "第31回全日本セパタクロー選手権大会特設サイト ",
          link: "https://sepaktakraw-alljapan2020.jp/",
          skillTheme: "デザイン / コーディング / リリース",
          skill:
            "Adobe XD Illustrator Photoshop / HTML5 CSS3 JavaScript Vue.js",
          coment:
            "「第31回全日本セパタクロー選手権大会」大会特設サイトのLP制作を担当させていただきました。グループステージの結果をテーブルにて表示することでスコアを分かりやすく表示した他、以前制作したサイトの仕様を踏襲しトンマナを保ちながらも違った雰囲気を演出いたしました。Vue.jsも取り入れコーディングやjs実装を効率的に行いました。",
        },
        {
          id: 1,
          img: "images/works001.jpg",
          title: "第27回全日本セパタクローオープン大会特設サイト ",
          link: "https://sepaktakraw-open-championship.games/",
          skillTheme: "デザイン / コーディング / リリース",
          skill: "Adobe XD Illustrator Photoshop / HTML5 CSS3 JavaScript",
          coment:
            "「第27回全日本セパタクローオープン大会」大会特設サイトのLP制作を担当させていただきました。大会メインビジュアル、スケジュール、トーナメント表、大会結果、当日はライブ配信をサイト内に表示しました。アニメーションを加え、動きのあるサイトを制作しました。",
        },
        {
          id: 2,
          img: "images/works002.png",
          title: "YouTube オープニング制作事例_1 ",
          link: "https://youtu.be/4PKNMz24ugA",
          skillTheme: "映像編集",
          skill: "Adobe AfterEffects Illustrator Photoshop",
          coment:
            "元のデザイン画ができておりましたので、Adobe AfterEffectsを利用しネオンの電光が文字を飾るエフェクトを入れ制作いたしました。",
        },
        {
          id: 3,
          img: "images/works003.png",
          title: "YouTube オープニング制作事例_2 ",
          link: "https://youtu.be/EqgLmllZ-oI",
          skillTheme: "映像編集",
          skill: "Adobe AfterEffects PremierePro Illustrator Photoshop",
          coment:
            "短い時間の中に競技のダイナミックなプレーを入れ、インパクトを残すようにエフェクトを使い表現いたしました。",
        },
      ],
    };
  },
  methods: {
    current(id) {
      this.active = id;
    },
    prev() {
      if (this.active <= 0) {
        this.active = this.photos.length - 1;
      } else {
        this.active--;
      }
    },
    next() {
      if (this.active >= this.photos.length - 1) {
        this.active = 0;
      } else {
        this.active++;
      }
    },
  },
};
</script>

<style scoped>
.performance {
  width: 1000px;
  height: 1450px;
  margin: 0 auto;
}
.yellow {
  color: #adff2e;
}

.container {
  width: 1000px;
  height: 100vh;
  margin: 0 auto;
}

a {
  text-decoration: none;
  color: white;
}

ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  width: 100%;
  margin-top: 10px;
}

h4 {
  padding-bottom: 0;
  margin-bottom: 0;
}
p {
  margin: 0;
}

/* カルーセルサムネ*/
.works__thumbnails > li img {
  width: 50%;
  height: 50%;
}

.works__thumbnails li {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.works__info {
  text-align: start;
  padding: 10px;
  color: white;
}

.works__info a::after {
  content: "";
  display: inline-block;
  width: 18px; /*画像の幅*/
  height: 18px; /*画像の高さ*/
  background-image: url(/images/icon001.png);
  background-size: contain;
  vertical-align: middle;
}
.active-enter {
  opacity: 0;
}

.active-enter-to {
  opacity: 1;
}

.active-enter-active {
  -webkit-transition: opacity 0.5s;
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>
