<template>
  <main>
    <div class="home-page">
      <h1 class="title">MovieFinder</h1>
      <div class="content">
        <SearchMovie />
      </div>
    </div>
  </main>
</template>

<script setup>
import SearchMovie from "../components/SearchMovie.vue";
</script>

<style lang="scss" scoped>
@import "../assets//scss/variables.scss";
.home-page {
  position: relative;
  background-image: url("/image/dog-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 300px;
  border-radius: 6px;
}

title {
  color: rgba(0, 128, 128, 0.2);
  position: absolute;
  left: 30px;
  top: 100px;
  @media (max-width: $tab-screen) {
    left: 20px;
    top: 0;
  }
}

.content {
  position: absolute;
  bottom: 0;
  left: 30px;
  @media (max-width: $tab-screen) {
    left: 10px;
  }
}
</style>
