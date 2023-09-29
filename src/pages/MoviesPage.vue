<template>
  <div>
    <div v-if="movieFind.loader" v-loading="loading"></div>
    <div v-else>
      <h1 class="page-title">Movies</h1>

      <div class="error" v-if="movieFind.movies.length === 0">
        <p>Try another word or film title for searching</p>
        <img src="/image/moviespage.png" alt="no-movies" width="300" />
      </div>
      <div v-else>
        <swiper
          class="swiper"
          :modules="modules"
          :space-between="30"
          :slides-per-view="5"
          :pagination="{ clickable: true }"
          :breakpoints="{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 5 },
          }"
        >
          <swiper-slide
            class="slide"
            v-for="movie in movieFind.movies"
            :key="movie.Title"
          >
            <MovieCard :movie="movie" :showButton="true" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useMovieFind } from "../store/movieFindStore";
import MovieCard from "../components/MovieCard.vue";
import { ref } from "vue";

const movieFind = useMovieFind();
const loading = ref(false);
const modules = [Pagination];
</script>

<style lang="scss" scoped>
.page-title {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.error {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  flex-direction: column;
  align-items: center;
}
.example-showcase .el-loading-mask {
  z-index: 9;
}

:deep(.el-loading-spinner .path) {
  stroke: red;
}
:deep(.el-card) {
  width: 270px;
  height: 500px;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: red;
}

:deep(.swiper-slide) {
  flex-shrink: none;
}
</style>
