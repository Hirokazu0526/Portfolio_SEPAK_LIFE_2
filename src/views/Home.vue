<template>
  <div class="home">
    <div class="container">
      <h2>
        本サイトはVue CLIを使用したSPA(Single Page
        Application)で制作しております。
      </h2>

      <p>
        Vue Routerのプラグインを利用しコンポーネントのルーティングを実装。<br />
        Galleryコンポーネントではモーダルやカルーセルスライダーを実装し、<br />
        選択した画像と紐付けて操作を行える様にしました。<br />
        レスポンシブに対応している他、vue-analyticsのプラグインを利用しGoogleAnalyticsの設定をしております。
      </p>
      <br />
      <h3>
        <span class="ab">About</span>・<span class="pf">Performance</span
        >・<span class="gl">Gallery</span> にて私のこれまでの<span class="st"
          >STORY</span
        >をご覧ください
      </h3>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.home {
  width: 1000px;
  margin: 0 auto;
}

h2,
h3,
p {
  color: white;
}
p {
  font-size: 20px;
}

h3 {
  font-size: 25px;
}

.ab {
  color: #ff04ff;
}
.pf {
  color: #adff2e;
}
.gl {
  color: #8b16f9;
}
.st {
  color: cyan;
}

@media screen and (max-width: 599px) {
  .home {
    width: 100%;
  }
  h2 {
    font-size: 20px;
  }
  .container {
    width: 90%;
    margin: 0 auto;
  }
  p {
    font-size: 11px;
  }
  h3 {
    font-size: 15px;
  }
}
</style>
