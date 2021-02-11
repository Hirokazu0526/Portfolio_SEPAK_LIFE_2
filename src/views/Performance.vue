<template>
  <div class="performance">
    <h1 class="yellow">Performance of WORKS</h1>
    <div class="container">
      <ul>
        <li v-for="photo in photos" :key="photo.id">
          <img :src="photo.img" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Performance",
  data() {
    return {
      photos: [
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
};
</script>

<style scoped>
.performance {
  width: 1000px;
  margin: 0 auto;
}
.yellow {
  color: #adff2e;
}
img {
  width: 100%;
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
}
</style>
