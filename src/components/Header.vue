<template>
  <div class="header-wrap">
    <div class="header-inner">
      <h1 class="logo">
        <img src="@/assets/site-logo.png" alt="logo" />
      </h1>
      <h2>
        Portfolio Sepak Life
      </h2>
    </div>
    <!-- /.header-inner -->
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header-wrap {
  width: 1000px;
  margin: 0 auto;
}
.header-inner {
  display: flex;
  justify-content: space-between;
}
.logo {
  height: 50px;
}
.logo img {
  width: 50px;
}
h2 {
  display: inline-block;
  color: #1c273e;
  line-height: 50px;
  height: 50px;
  font-size: 1.8em;
}

@media screen and (max-width: 599px) {
  .header-wrap {
    width: 100%;
  }
  .header-inner {
    justify-content: space-around;
  }
}
</style>
