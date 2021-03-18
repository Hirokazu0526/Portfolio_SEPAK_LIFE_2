<template>
  <div class="home">
    <div class="container">
      <h2>
        本サイトはVue CLIを使用したSPA(Single Page
        Application)で制作しております。
      </h2>

      <p>
        Vue Routerのプラグインを利用しコンポーネントのルーティングを実装。<br />
        GalleryコンポーネントではFirebaseのFirestoreとStorageを利用。※2021/03/18機能追加<br />
        Authenticationを利用したログイン認証を実装し、上記サービスへのデータの格納、<br />
        保存したデータをGalleryコンポーネントにて表示しております。※2021/03/18機能追加<br />
        レスポンシブに対応している他、vue-gtagのプラグインを利用しGoogleAnalyticsの設定をしております。
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
  margin: 0 auto 50px;
}

h2,
h3,
p {
  color: #1c273e;
}
p {
  font-size: 20px;
}

h3 {
  font-size: 25px;
}

/* .ab {
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
} */

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
