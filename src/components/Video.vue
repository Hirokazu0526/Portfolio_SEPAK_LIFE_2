<template>
  <div>
    <video autoplay :src="video" muted></video>
  </div>
</template>

<script>
export default {
  name: "Video",
  data() {
    return {
      video: "video/sepak_life_pv.mp4",
    };
  },
};
</script>

<style scoped>
video {
  width: 100%;
  margin-bottom: 30px;
}
</style>
