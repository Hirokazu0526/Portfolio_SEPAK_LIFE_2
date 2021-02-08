<template>
  <div class="header-wrap">
    <div class="header-inner">
      <h1 class="logo">
        <img src="" alt="logo" />
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
.header-inner {
  display: flex;
  justify-content: space-between;
}
.logo {
  width: 300px;
  height: 50px;
}
h2 {
  display: inline-block;
  color: white;
  line-height: 50px;
  height: 50px;
}
</style>
