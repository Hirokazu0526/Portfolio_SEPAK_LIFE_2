<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="banner in banners" :key="banner">
      <img :src="banner" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-next" slot="pagination"></div>
    <div class="swiper-button-prev" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  data() {
    return {
      banners: [
        "./img/ogp_image.png",
        "./img/KI204712.jpg",
        "./img/ceremony.jpg",
      ],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
};
</script>
<style scoped>
.swiper-wrapper {
  margin-bottom: 30px;
}

.swiper-slide img {
  height: 500px;
  overflow: hidden;
  object-fit: cover;
}
</style>
