<template>
  <div id="app" class="bg" v-cloak>
    <div class="container">
      <!-- <div > -->
      <Header />
      <div>
        <img src="images/portfolio.png" alt="セパタクローライフ" />
        <!-- <video
          autoplay
          :src="video"
          muted
          playsinline
          poster="images/video_img.png"
          loop
        ></video> -->
      </div>
      <!-- <Video /> -->
      <!-- </div> -->
      <div id="nav" class="g-nav-list sp">
        <router-link to="/" class="g-nav-item">Home</router-link>
        <router-link to="/about" class="g-nav-item">About</router-link>
        <router-link to="/performance" class="g-nav-item"
          >Performance</router-link
        >
        <router-link to="/gallery" class="g-nav-item">Gallery</router-link>
      </div>
      <div id="nav" class="g-nav-list pc">
        <router-link to="/" class="g-nav-item">Home</router-link>
        <router-link to="/about" class="g-nav-item">About</router-link>
        <router-link to="/performance" class="g-nav-item"
          >Performance</router-link
        >
        <router-link to="/gallery" class="g-nav-item">Gallery</router-link>
      </div>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <!-- <router-link to="/imageupload">ImageUpload</router-link> -->
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
// import Video from "./components/Video";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    // Video,
    Footer,
  },
  data() {
    return {
      video: "video/sepak_life_pv5.mp4",
    };
  },
};
</script>

<style>
[v-cloak] {
  display: none;
}
body {
  background: #f0eee6;
  margin: 0;
  padding: 0;
  color: #1c273e;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1c273e;
}

video {
  width: 100%;
  margin-bottom: 30px;
}
img {
  width: 100%;
  margin-bottom: 30px;
}

.g-nav-list {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}
.g-nav-list.sp {
  display: none;
}
.g-nav-item {
  display: inline-block;
  width: 200px;
  height: 50px;
  margin-left: 50px;
  border-radius: 5px;
  line-height: 50px;
  font-weight: bold;
  text-decoration: none;
  font-size: 25px;
  color: #fff;
}

.g-nav-item {
  background: #1c273e;
}
.g-nav-item:first-child {
  margin-left: 0;
}
.g-nav-item:focus {
  background: #588af7;
}
/* .g-nav-item:first-child {
  margin-left: 0;
  background: cyan;
}
.g-nav-item:nth-child(2) {
  background: fuchsia;
}
.g-nav-item:nth-child(3) {
  background: greenyellow;
}
.g-nav-item:nth-child(4) {
  background: rgb(139, 21, 250);
} */

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}

@media screen and (max-width: 599px) {
  .g-nav-list.pc {
    display: none;
  }
  .g-nav-list.sp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .g-nav-item {
    margin: 10px;
  }
  .g-nav-item:first-child {
    margin-left: 10px;
  }
}
</style>
