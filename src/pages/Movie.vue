<template>
  <div v-if="findMovie.movie.length === 0" v-loading="loading"></div>

  <div v-else class="container">
    <div class="card">
      <div class="card-image">
        <img :src="findMovie.movie.Poster" :alt="findMovie.movie.Title" />
      </div>
      <div class="card-content">
        <div class="year">
          <span>Year {{ findMovie.movie.Year }}</span>
        </div>

        <div class="selection-items">
          <div class="selection-item">
            <h3>Type:</h3>
            {{ findMovie.movie.Type }}
          </div>
          <div class="selection-item">
            <h3>Ganre:</h3>
            {{ findMovie.movie.Genre }}
          </div>
          <div class="selection-item">
            <h3>Director</h3>
            <span>{{ findMovie.movie.Director }}</span>
          </div>
        </div>
        <div class="about">
          <h1 class="heading">{{ findMovie.movie.Title }}</h1>
          <div class="card-content">
            <div class="description">
              <p>{{ findMovie.movie.Plot }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useMovieFind } from "../store/movieFindStore";

const findMovie = useMovieFind();
</script>
<style lang="scss" scoped>
.container {
  margin-top: 50px;
}
.card {
  display: flex;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 700px;
  margin: auto;
  border-radius: 6px;
}

.card-image {
  padding: 10px;
}

.card-content {
  padding: 10px;
}
.year {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100px;
  background-color: rgb(235, 153, 153);
  border-radius: 6px;
  & span {
    color: white;
    font-size: 16px;
    padding: 5px;
  }
}
.selection-items {
  display: flex;
  flex-direction: column;
}
.selection-item {
  display: flex;
  align-items: center;
  & h3 {
    margin: 0;
    margin-right: 10px;
  }
}
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  & h1 {
    margin: 10px 0 10px 0;
  }
}
</style>
