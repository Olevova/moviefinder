<template>
  <div class="movie-card">
    <RouterLink
      :to="`/movies/${movie.imdbID}`"
      @click="redirectToMoviePage(movie.imdbID)"
    >
      <el-card :body-style="{ padding: '0px' }">
        <img :src="movie.Poster" class="image" />
        <div style="padding: 14px">
          <span>{{ movie.Title }}</span>
          <div class="bottom">
            <p>{{ movie.Type }}</p>
            <p>{{ movie.Year }}</p>
          </div>
        </div>
      </el-card>
    </RouterLink>
    <el-button v-if="showButton" text class="button" @click="onBtnClick(movie)"
      >Add</el-button
    >
    <el-button
      v-if="showButtonDelete"
      text
      class="button-del"
      @click="onBtnClickDelete(movie)"
      >Delete</el-button
    >
  </div>
</template>
<script setup>
import { useMovieStore } from "../store/movieUserStore";
import { useMovieFind } from "../store/movieFindStore";
import { useRouter } from "vue-router";

const router = useRouter();
const movieFind = useMovieFind();
const movieUser = useMovieStore();
const props = defineProps({
  movie: {
    type: Object,
    required: true,
    default: () => {},
  },
  showButton: {
    type: Boolean,
    default: false,
  },
  showButtonDelete: {
    type: Boolean,
    default: false,
  },
});
const onBtnClick = (movie) => {
  movieFind.addFilmToUserStore(movie);
  router.push("/user-movie");
};
const onBtnClickDelete = (movie) => {
  movieUser.removeMovie(movie);
};
const redirectToMoviePage = (id) => {
  movieFind.findOneMovie(id);
};
</script>
<style lang="scss" scoped>
.movie-card {
  width: 260px;
  position: relative;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  position: absolute;
  top: 5px;
  right: 10px;
}

.button-del {
  position: absolute;
  top: 5px;
  left: 10px;
}

.image {
  width: 100%;
  display: block;
  object-fit: contain;
}
:deep(.el-card) {
  height: 480px;
}

:deep(.el-button.is-text) {
  background-color: rgb(148, 231, 145);
  width: 50px;
}
</style>
