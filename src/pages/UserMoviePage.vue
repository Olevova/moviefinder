<template>
  <div v-if="movieUser.movies.length === 0" class="message">
    <h1>Your page does not contain movies yet, please add movie</h1>
    <img src="/image/userpage.png" alt="add-film" width="300" />
  </div>
  <div class="content" v-else>
    <h2>You Added such Movies</h2>
    <div class="user-movie">
      <div v-for="movie in movieUser.movies" :key="movie">
        <MovieCard
          :movie="movie"
          :showButton="false"
          :showButtonDelete="true"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { useMovieStore } from "../store/movieUserStore";
import MovieCard from "../components/MovieCard.vue";
const movieUser = useMovieStore();
</script>
<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.content {
  & h2 {
    text-align: center;
  }
}
.message {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  align-items: center;
  flex-direction: column;
}
.user-movie {
  margin-top: 30px;
  margin-left: 10px;
  margin-right: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 10px;
  & div {
    transition: transform 0.3s ease;
  }

  & div:hover {
    transform: scale(1.01);
  }
}

@media screen and (max-width: $desktop-s) and (min-width: $tab-screen) {
  .user-movie {
    gap: 10px;
  }
}

@media screen and (max-width: $tab-screen) {
  .user-movie {
    gap: 10px;
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
