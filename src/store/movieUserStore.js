import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useMovieStore = defineStore("movieStore", () => {
  const movies = ref([]);
  const userMoviesInLocalStorage = localStorage.getItem("movies");
  if (userMoviesInLocalStorage) {
    movies.value = JSON.parse(userMoviesInLocalStorage)._value;
  }
  const removeMovie = (movie) => {
    const movieIndex = movies.value.findIndex(
      (item) => item.imdbID === movie.imdbID
    );
    if (movieIndex !== -1) {
      movies.value.splice(movieIndex, 1);
    }
  };

  watch(
    () => movies,
    (state) => {
      localStorage.setItem("movies", JSON.stringify(state));
    },
    { deep: true }
  );

  return {
    movies,
    removeMovie,
  };
});
