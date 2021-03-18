<template>
  <div class="about">
    <h1 class="pink">About Me</h1>
    <section>
      <div class="container">
        <h2>My life so far</h2>
        <div class="content-info">
          <img src="/images/image001.jpg" alt="セパタクローの写真" />
          <p class="text">
            <span class="jttl">小林 裕和</span><br />
            こばやし ひろかず<br />
            １９８６年５月２６日生まれ<br />
            長野県で幼少時代を過ごす。<br />
            ２００２年に日本体育大学入学しセパタクローという<br />
            スポーツに出会う。セパタクローの魅力に取り憑かれ<br />
            学生時代の時間を部活動に注いできた。<br />
            ２００９年、卒業と同時に全日本代表候補に選抜され<br />
            現在までの１１年間数多くの国際大会に出場してきた。<br />
            ２０１８年アジア競技大会では最高成績となる銀メダルを獲得。<br />
            国内大会は全日本選手権を５度優勝している。
          </p>
        </div>
        <div class="content-info2">
          <img src="/images/image006.jpg" alt="セパタクローの写真" />
          <p class="text">
            <span class="jttl">Job Career</span><br />
            競技と並行して会社員として勤務。<br />
            某医療機製造メーカーにて販売促進業務を担当。<br />
            コーポレートサイトではHTML・CSSを使ったマークアップからコーディングを担当しUI改善にも寄与。その他にもFaceBook・YouTubeの運用や動画コンテンツ制作を行なっていた。<br />
            Web運用に興味を持ち、２０２０年より本格的にプログラミングの学習を開始しする。<br />
            現在はVeu.jsにおいてVue
            Router,Vuex,Firebaseを利用したログイン認証機能、REST
            APIでのデータ取得などフロントエンドエンジニアに向けての学習を継続している。
          </p>
        </div>
        <div class="content-info3">
          <iframe
            v-if="show === true"
            id="pc"
            class="pc"
            width="500"
            height="281"
            src="https://www.youtube.com/embed/jsh2EIxesmk"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            v-else
            id="sp"
            class="sp"
            width="370"
            height="204"
            src="https://www.youtube.com/embed/jsh2EIxesmk"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p class="text">
            <span class="jttl">Introductory video</span><br />
            制作<br />
            株式会社XYOU<br />
            Creator<br />
            KENJI SHINODA<br />
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "About",
  computed: {
    show() {
      if (window.matchMedia("(min-width: 599px)").matches) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.about {
  color: #1c273e;
  width: 1000px;
  margin: 0 auto 80px;
}
/* .pink {
  color: #ff04ff;
} */
p,
span {
  padding: 0;
  margin: 0;
}
h1 {
  font-size: 40px;
  padding: 0 30px;
}
.content-info img {
  width: 50%;
  height: 50%;
}
.content-info2 img {
  width: 50%;
  height: 50%;
}

.content-info {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.content-info2 {
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  margin-bottom: 20px;
}

.content-info3 {
  display: flex;
  justify-content: center;
}

.content-info .text {
  text-align: start;
  font-weight: bold;
  /* background: darkgray; */
  border-radius: 10px;
  width: 500px;
  margin-left: 10px;
  line-height: 30px;
}
.content-info2 .text {
  text-align: start;
  font-weight: bold;
  /* background: darkgray; */
  border-radius: 10px;
  width: 500px;
  margin-right: 10px;
  line-height: 30px;
}
.content-info3 .text {
  text-align: start;
  font-weight: bold;
  /* background: darkgray; */
  border-radius: 10px;
  width: 500px;
  margin-left: 10px;
  line-height: 30px;
}

.jttl {
  font-size: 30px;
}

@media screen and (max-width: 599px) {
  .about {
    width: 100%;
  }
  .content-info,
  .content-info2,
  .content-info3 {
    flex-direction: column;
    margin: 20px;
  }

  .content-info img {
    width: 100%;
    height: 100%;
  }
  .content-info2 img {
    width: 100%;
    height: 100%;
  }

  .content-info .text,
  .content-info2 .text,
  .content-info3 .text {
    width: 100%;
    font-size: 13px;
    margin: 15px 0;
    line-height: 25px;
  }
  .jttl {
    font-size: 30px;
  }
  .sp {
    width: 100%;
  }
}
</style>
