<template>
  <div class="performance">
    <h1 class="yellow">Performance of WORKS</h1>

    <div class="container">
      <ul class="works__thumbnails">
        <li v-for="work in works" :key="work.id">
          <img :src="work.img" target="_blank" />
          <div class="works__info">
            <h3>
              <a href="#">{{ work.title }}</a>
            </h3>
            <h4>制作担当</h4>
            <p>デザイン / コーディング / リリース</p>
            <p>{{ work.skill }}</p>
            <h4>コンセプト</h4>
            <p>
              ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー
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
          skill:
            "Adobe XD Illustrator Photoshop / HTML5 CSS3 JavaScript VueCLI",
        },
        {
          id: 1,
          img: "images/works001.jpg",
          title: "第27回全日本セパタクローオープン大会特設サイト ",
          credit: "Adobe XD Illustrator Photoshop / HTML5 CSS3 JavaScript",
        },
        {
          id: 2,
          img: "images/works003.png",
          title: "YouTube オープニング制作事例 ",
          credit: "Photo By NAGAHAMA KOMEI",
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
  height: 1350px;
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
