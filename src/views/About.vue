<template>
  <div class="about">
    <h1>This is an About page</h1>
    <section>
      <div class="container">
        <h2>My life so far</h2>
        <div class="content-info">
          <img src="/images/image003.jpg" alt="" />
          <p class="text">
            小林 裕和（コバヤシ ヒロカズ）<br />
            １９８６年５月２６日生まれ<br />
            長野県で幼少時代を過ごす。<br />
            ２００２年に日本体育大学入学しセパタクローという<br />
            スポーツに出会う。セパタクローの魅力に取り憑かれ<br />
            学生時代の時間を部活動に注いできた。<br />
            ２００９年、卒業と同時に全日本代表候補に選抜され<br />
            現在までの１１年間数多くの国際大会に出場してきた。<br />
            過去最高成績は２０１８年アジア競技大会で銀メダルを獲得。<br />
            国内大会は全日本選手権を５度優勝している。
          </p>
        </div>
        <div class="content-info2">
          <img src="/images/image002.jpg" alt="" />
          <p class="text">
            競技と並行して会社員として勤務。<br />
            某医療機製造メーカーにて販売促進業務を担当。<br />
            オウンドメディアの運用、動画コンテンツの制作や<br />
            コーポレートサイトの運用に従事。<br />
            Web運用に興味を持ち、２０２０年より本格的にWeb制作の<br />
            学習を開始し独学でWeb制作のノウハウを習得。<br />
            現在はVeu.jsなどフロントサイドエンジニアに向けての<br />
            学習を継続している。
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about {
  color: white;
  width: 1000px;
  margin: 0 auto;
}
.content-info img {
  width: 50%;
}
.content-info2 img {
  width: 50%;
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
}

.content-info .text {
  text-align: start;
  font-weight: bold;
  padding: 10px auto;
  /* background: darkgray; */
  border-radius: 10px;
  width: 500px;
  margin-left: 10px;
  line-height: 30px;
}
.content-info2 .text {
  text-align: start;
  font-weight: bold;
  padding: 10px auto;
  /* background: darkgray; */
  border-radius: 10px;
  width: 500px;
  margin-right: 10px;
  line-height: 30px;
}
</style>
