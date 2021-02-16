<template>
  <div class="gallery">
    <h1 class="biolet">Gallery of SEPAKTAKRAW</h1>

    <div class="container">
      <ul class="carousel__thumbnails">
        <li
          v-for="(photo, id) in photos"
          :key="photo.id"
          :class="{ current: active === id }"
          @click="current(photo.id)"
        >
          <img
            :src="photo.img"
            @click="isShow = !isShow"
            alt="セパタクローの写真"
          />
        </li>
      </ul>
      <!--モーダルの表示非表示-->
      <transition name="fade">
        <div class="show" v-show="isShow">
          <!--モーダル-->
          <div class="modal__background">
            <div class="modal__inner" v-cloak>
              <div class="modal__close" @click="isShow = !isShow">×</div>
              <!--モーダルの中のカルーセル-->
              <div class="carousel__inner">
                <div
                  class="carousel__main"
                  :key="photos[active].id"
                  v-show="active === photos[active].id"
                >
                  <img :src="photos[active].img" alt="セパタクローの画像" />
                  <h4 class="lz">{{ photos[active].title }}</h4>
                  <p class="lz">&copy;{{ photos[active].credit }}</p>
                  <div @click="prev" class="carousel__prev"></div>
                  <div @click="next" class="carousel__next"></div>
                </div>
                <!--モーダルの中のカルーセル-->
              </div>
            </div>
          </div>
          <!--モーダル-->
        </div>
        <!--モーダルの表示非表示-->
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      active: 0,
      isShow: false,
      photos: [
        {
          id: 0,
          img: "images/image000.jpg",
          title: "ALL JAPAN OPEN CHAMPIONSHIP 2020",
          credit: " Yoshiteru Nagahama",
        },
        {
          id: 1,
          img: "images/image001.jpg",
          title: "18th ASIAN GAMES Palembang 2018",
          credit: " Katsuaki Iwamoto",
        },
        {
          id: 2,
          img: "images/image002.jpg",
          title: "18th ASIAN GAMES Palembang 2018",
          credit: " Katsuaki Iwamoto",
        },
        {
          id: 3,
          img: "images/image003.jpg",
          title: "18th ASIAN GAMES Palembang 2018",
          credit: " Tsutomu Takasu",
        },
        {
          id: 4,
          img: "images/image004.jpg",
          title: "ALL JAPAN CHAMPIONSHIP 2019",
          credit: " Yoshiteru Nagahama",
        },
        {
          id: 5,
          img: "images/image005.jpg",
          title: "ALL JAPAN OPEN CHAMPIONSHIP 2020",
          credit: " Katsuaki Iwamoto",
        },
        {
          id: 6,
          img: "images/image006.jpg",
          title: "ALL JAPAN OPEN CHAMPIONSHIP 2020",
          credit: " Katsuaki Iwamoto",
        },
        {
          id: 7,
          img: "images/image007.jpg",
          title: "18th ASIAN GAMES Palembang 2018",
          credit: " Katsuaki Iwamoto",
        },
        {
          id: 8,
          img: "images/image008.jpg",
          title: "ALL JAPAN OPEN CHAMPIONSHIP 2020",
          credit: " Tsutomu Takasu",
        },
        {
          id: 9,
          img: "images/image009.jpg",
          title: "ALL JAPAN OPEN CHAMPIONSHIP 2020",
          credit: " Tsutomu Takasu",
        },
        {
          id: 10,
          img: "images/image010.jpg",
          title: "18th ASIAN GAMES Palembang 2018",
          credit: " Tsutomu Takasu",
        },
        {
          id: 11,
          img: "images/image011.jpg",
          title: "18th ASIAN GAMES Palembang 2018",
          credit: " Tsutomu Takasu",
        },
        {
          id: 12,
          img: "images/image012.jpg",
          title: "18th ASIAN GAMES Palembang 2018",
          credit: " Tsutomu Takasu",
        },
        {
          id: 13,
          img: "images/image013.jpg",
          title: "18th ASIAN GAMES Palembang 2018",
          credit: " Tsutomu Takasu",
        },
        {
          id: 14,
          img: "images/image014.jpg",
          title: "18th ASIAN GAMES Palembang 2018",
          credit: " Tsutomu Takasu",
        },
        {
          id: 15,
          img: "images/image015.jpg",
          title: "18th ASIAN GAMES Palembang 2018",
          credit: " Tsutomu Takasu",
        },
        {
          id: 16,
          img: "images/image016.jpg",
          title: "18th ASIAN GAMES Palembang 2018",
          credit: " Tsutomu Takasu",
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
  //   mounted() {
  //     let that = this;
  //     setInterval(() => {
  //       that.next();
  //     }, 3000);
  //   },
};
</script>

<style scoped>
[v-cloak] {
  display: none;
}
.gallery {
  width: 1000px;
  height: 1350px;
  margin: 0 auto;
}

.biolet {
  color: #8b16f9;
}
h1 {
  font-size: 40px;
  padding: 0 30px;
}
.container {
  width: 1000px;
  height: 100vh;
  margin: 0 auto;
}

ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

ul::after {
  content: "";
  display: block;
  width: 30%;
}

li {
  width: 30%;
  margin-top: 10px;
  cursor: pointer;
}

/* カルーセルサムネ*/
.carousel__thumbnails img {
  width: 100%;
}

/* モーダル */
.modal__inner {
  position: relative;
  width: 1000px;
  height: 560px;
  padding: 20px;
  background-color: #fff;
  box-sizing: border-box;
  z-index: 2;
}

.modal__background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal__close {
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  font-size: 50px;
  z-index: 10;
}

/* カルーセル */
.carousel__inner {
  width: 840px;
  height: 400px;
  margin: 0 auto 30px;
  position: absolute;
  top: 43%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.carousel__main {
  width: 640px;
  height: 400px;
  margin: 0 auto;
}

.carousel__main img {
  width: 600px;
}

.carousel__prev {
  position: absolute;
  top: 150px;
  left: 20px;
  cursor: pointer;
  color: lightgray;
  z-index: 10;
}

.carousel__prev:hover {
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -webkit-transform: translateX(-10px);
  transform: translateX(-10px);
}

.carousel__next {
  position: absolute;
  top: 150px;
  right: 20px;
  cursor: pointer;
  color: lightgray;
  z-index: 10;
}

.carousel__next:hover {
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -webkit-transform: translateX(10px);
  transform: translateX(10px);
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

.active-leave {
  opacity: 1;
}

.active-leave-to {
  opacity: 0;
}

.active-leave-active {
  -webkit-transition: opacity 0.5s;
  transition: opacity 0.5s;
}
/*# sourceMappingURL=app.css.map */

.carousel__prev::before {
  content: "＜";
  width: 50px;
  height: 60px;
  font-size: 50px;
  color: rgb(21, 41, 75);
  background: rgb(230, 230, 230);
  border-radius: 10px;
  display: block;
  line-height: 66px;
}
.carousel__next::before {
  content: "＞";
  width: 50px;
  height: 60px;
  font-size: 50px;
  color: rgb(21, 41, 75);
  background: rgb(230, 230, 230);
  border-radius: 10px;
  display: block;
  line-height: 66px;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.lz {
  animation: lazyLoad 1s;
}

@keyframes lazyLoad {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@media screen and (max-width: 599px) {
  .gallery {
    width: 100%;
    height: 1380px;
  }
  .container {
    width: 90%;
    margin: 0 auto;
  }

  ul::after {
    content: "";
    display: block;
    width: 48%;
  }

  li {
    width: 48%;
    margin-top: 10px;
    cursor: pointer;
  }

  .modal__inner {
    width: 95%;
    height: 70%;
    padding: 0;
  }

  .carousel__inner {
    width: 100%;
    height: 400px;
    top: 50%;
  }
  .carousel__main {
    width: 100%;
    height: 400px;
    margin: 0 auto;
  }

  .carousel__main img {
    width: 95%;
  }

  .carousel__prev {
    top: 280px;
    left: 100px;
  }

  .carousel__next {
    top: 280px;
    right: 100px;
  }

  .carousel__main h4 {
    margin-top: 100px;
  }
}
</style>
