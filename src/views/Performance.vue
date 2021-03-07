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
            <h4>コンセプト・概要</h4>
            <p>
              {{ work.coment }}
            </p>
          </div>
        </li>
      </ul>
      <div class="study">
        <h2>学習記録</h2>
        <div class="study_flex">
          <div class="study__icon_git">
            <a href="https://github.com/Hirokazu0526" target="_blank"
              ><img src="images/GitHub_.png" />
              <h3>GitHub</h3></a
            >
          </div>
          <div class="study__icon_net">
            <a
              href="https://app.netlify.com/teams/hirokazu0526/overview"
              target="_blank"
              ><img src="images/netlify.png" />
              <h3>Netlify</h3></a
            >
          </div>
        </div>
      </div>
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
            "「第31回全日本セパタクロー選手権大会」特設サイトのLP制作を担当させていただきました。一部にVue.jsを利用しマークアップの効率化と対戦結果のデータ反映を行いやすくし、テーブルにてスコアを分かりやすく表示いたしました。その他、JavaScriptでスクロール検知やアニメーションを実装し以前制作したサイトの仕様を踏襲しながらも違った雰囲気を演出いたしました。",
        },
        {
          id: 1,
          img: "images/works001.jpg",
          title: "第27回全日本セパタクローオープン大会特設サイト ",
          link: "https://sepaktakraw-open-championship.games/",
          skillTheme: "デザイン / コーディング / リリース",
          skill: "Adobe XD Illustrator Photoshop / HTML5 CSS3 JavaScript",
          coment:
            "「第27回全日本セパタクローオープン大会」特設サイトのLP制作を担当させていただきました。デザイン作成からマークアップ・コーディング、リリースまで全行程を担当し保守運用いたしました。大会メインビジュアル・スケジュール・トーナメント表などの画像制作やライブ配信も担当しました。JavaScriptでアニメーションを実装し、動きのあるサイトを制作しました。",
        },
        {
          id: 2,
          img: "images/works002.png",
          title: "YouTube オープニング制作事例_1 ",
          link: "https://youtu.be/4PKNMz24ugA",
          skillTheme: "映像編集",
          skill: "Adobe AfterEffects Illustrator Photoshop",
          coment:
            "デザイン画ができておりましたので、Adobe AfterEffectsを利用しネオンの電光が文字を飾るエフェクトを入れ制作いたしました。",
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
        {
          id: 4,
          img: "images/works004.png",
          title: "バナー制作事例_1 ",
          link: "https://www.hakuju.co.jp/",
          skillTheme: "デザイン制作",
          skill: "Adobe Illustrator Photoshop / HTML5 CSS3",
          coment:
            "某医療機器製造メーカーのコーポレートサイト運用、新製品発売等におけるキービジュアル制作を担当いたしました。",
        },
      ],
    };
  },
};
</script>

<style scoped>
.performance {
  width: 1000px;
  height: 2280px;
  margin: 0 auto;
}
/* .yellow {
  color: #adff2e;
} */

h1 {
  font-size: 40px;
  padding: 0 30px;
}

.container {
  width: 1000px;
  height: 100vh;
  margin: 0 auto;
}

a {
  text-decoration: none;
  color: #1c273e;
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

h3 {
  margin: 0;
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
  color: #1c273e;
}

.works__info a::after {
  content: "";
  display: inline-block;
  width: 20px; /*画像の幅*/
  height: 20px; /*画像の高さ*/
  background-image: url(/images/icon002.png);
  background-size: contain;
  vertical-align: middle;
}

.study {
  margin-top: 70px;
}

.study h2 {
  color: #1c273e;
}
.study h3 {
  color: #1c273e;
  margin: 0;
}

.study_flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 290px;
  margin: 0 auto;
}
.study_flex a {
  display: block;
  height: 152px;
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
@media screen and (max-width: 599px) {
  .performance {
    width: 100%;
    height: 3530px;
  }

  .container {
    width: 90%;
    margin: 0 auto;
  }

  .works__thumbnails > li img {
    width: 100%;
    height: 100%;
    margin-bottom: 0;
    margin-top: 20px;
  }

  .works__thumbnails li {
    display: flex;
    flex-direction: column;
  }
  .study_flex {
    width: 220px;
  }
  .study__icon_git img {
    width: 90px;
  }
  .study__icon_net img {
    width: 90px;
  }
}
</style>
