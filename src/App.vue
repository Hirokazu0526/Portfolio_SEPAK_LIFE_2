<template>
  <div id="app">
    <div class="container">
      <Header />
      <Swiper />
      <div id="nav" class="g-nav-list">
        <router-link to="/" class="g-nav-item">Home</router-link> |
        <router-link to="/about" class="g-nav-item">About</router-link> |
        <router-link to="/performance" class="g-nav-item"
          >Performance</router-link
        >
        |
        <router-link to="/gallery" class="g-nav-item">Gallery</router-link>
      </div>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Swiper from "./components/Swiper";

export default {
  name: "App",
  components: {
    Header,
    Swiper,
  },
};
</script>

<style>
body {
  background: #001b36;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  width: 1280px;
  margin: 0 auto;
}

.g-nav-list {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
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
  color: rgb(31, 0, 206);
}

.g-nav-item:first-child {
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
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
</style>
