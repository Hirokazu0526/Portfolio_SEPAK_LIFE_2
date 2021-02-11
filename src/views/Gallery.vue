<template>
  <div>
    <h1 class="biolet">Gallery of SEPAKTAKRAW</h1>

    <section class="carousel">
      <div class="carousel__main">
        <transition name="active">
          <div
            class="carousel__main"
            :key="images[active].id"
            v-show="active === images[active].id"
          >
            <img :src="images[active].img" />
          </div>
        </transition>
      </div>
      <div @click="prev" class="carousel__prev"></div>
      <div @click="next" class="carousel__next"></div>
    </section>
    <h4>{{ images[active].title }}</h4>
    <p>{{ images[active].credit }}</p>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      active: 0,
      images: [
        {
          id: 0,
          img: "images/image000.jpg",
          title: "ALL JAPAN OPEN CHAMPIONSHIP 2020",
          credit: "Photo By NAGAHAMA KOMEI",
        },
        {
          id: 1,
          img: "images/image001.jpg",
          title: "18th ASIAN GAMES Palembang 2018",
          credit: "Photo By IWAMOTO KATSUAKI",
        },
        {
          id: 2,
          img: "images/image002.jpg",
          title: "ALL JAPAN OPEN CHAMPIONSHIP 2020",
          credit: "Photo By TAKASU TSUTOMU",
        },
        {
          id: 3,
          img: "images/image003.jpg",
          title: "18th ASIAN GAMES Palembang 2018",
          credit: "Photo By TAKASU TSUTOMU",
        },
        {
          id: 4,
          img: "images/image004.jpg",
          title: "18th ASIAN GAMES Palembang 2018",
          credit: "Photo By TAKASU TSUTOMU",
        },
        {
          id: 5,
          img: "images/image005.jpg",
          title: "18th ASIAN GAMES Palembang 2018",
          credit: "Photo By TAKASU TSUTOMU",
        },
        {
          id: 6,
          img: "images/image006.jpg",
          title: "18th ASIAN GAMES Palembang 2018",
          credit: "Photo By TAKASU TSUTOMU",
        },
        {
          id: 7,
          img: "images/image007.jpg",
          title: "18th ASIAN GAMES Palembang 2018",
          credit: "Photo By TAKASU TSUTOMU",
        },
        {
          id: 8,
          img: "images/image008.jpg",
          title: "18th ASIAN GAMES Palembang 2018",
          credit: "Photo By TAKASU TSUTOMU",
        },
        {
          id: 9,
          img: "images/image009.jpg",
          title: "18th ASIAN GAMES Palembang 2018",
          credit: "Photo By TAKASU TSUTOMU",
        },
        {
          id: 10,
          img: "images/image010.jpg",
          title: "18th ASIAN GAMES Palembang 2018",
          credit: "Photo By TAKASU TSUTOMU",
        },
        {
          id: 11,
          img: "images/image011.jpg",
          title: "18th ASIAN GAMES Palembang 2018",
          credit: "Photo By TAKASU TSUTOMU",
        },
        {
          id: 12,
          img: "images/image012.jpg",
          title: "18th ASIAN GAMES Palembang 2018",
          credit: "Photo By TAKASU TSUTOMU",
        },
        {
          id: 13,
          img: "images/image013.jpg",
          title: "18th ASIAN GAMES Palembang 2018",
          credit: "Photo By TAKASU TSUTOMU",
        },
        {
          id: 14,
          img: "images/image014.jpg",
          title: "18th ASIAN GAMES Palembang 2018",
          credit: "Photo By TAKASU TSUTOMU",
        },
        {
          id: 15,
          img: "images/image015.jpg",
          title: "18th ASIAN GAMES Palembang 2018",
          credit: "Photo By TAKASU TSUTOMU",
        },
        {
          id: 16,
          img: "images/image016.jpg",
          title: "18th ASIAN GAMES Palembang 2018",
          credit: "Photo By TAKASU TSUTOMU",
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
        this.active = this.images.length - 1;
      } else {
        this.active--;
      }
    },
    next() {
      if (this.active >= this.images.length - 1) {
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
.biolet {
  color: #8b16f9;
}
.carousel {
  width: 840px;
  height: 400px;
  margin: 0 auto 30px;
  position: relative;
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
  -webkit-transition: opacity 0.7s;
  transition: opacity 0.7s;
}

.active-leave {
  opacity: 1;
}

.active-leave-to {
  opacity: 0;
}

.active-leave-active {
  -webkit-transition: opacity 0.7s;
  transition: opacity 0.7s;
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
  transition: opacity 0.4s;
}
</style>
