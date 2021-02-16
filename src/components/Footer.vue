<template>
  <div>
    <p class="copy_right">&copy; 2021 Kobayashi Hirokazu</p>
    <div class="sns">
      <ul class="sns-item">
        <li class="sns__icon">
          <a href="https://twitter.com/hi6kaz" target="_blank"
            ><img src="images/sns002.png"
          /></a>
        </li>
        <li class="sns__icon">
          <a
            href="https://www.facebook.com/hirokazu.kobayashi.50"
            target="_blank"
            ><img src="images/sns001.png"
          /></a>
        </li>
        <li class="sns__icon">
          <a href="https://www.instagram.com/hi6kaz/?hl=ja" target="_blank"
            ><img src="images/sns000.png"
          /></a>
        </li>
      </ul>
    </div>
    <p>
      当サイト内の画像等の内容の無断転載及び複製等の行為はご遠慮ください。
    </p>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
ul,
li {
  list-style: none;
  padding: 0;
}
.sns__icon a {
  width: 50px;
  height: 50px;
  display: block;
}
.sns-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 200px;

  margin: 0 auto;
}

.copy_right {
  font-size: 1rem;
  color: white;
  margin: 50px auto 20px;
}

.sns__icon {
  width: 50px;
  height: 50px;
  display: inline-block;
}

.sns__icon img {
  width: 100%;
}

@media screen and (max-width: 599px) {
  p {
    font-size: 10px;
  }
  .sns__icon a {
    width: 40px;
    height: 40px;
  }
}
</style>
