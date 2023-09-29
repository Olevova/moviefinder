import { defineStore } from "pinia";
import { getSearchMovie, getMovieById } from "./app";
import { useMovieStore } from "./movieUserStore";
import { ref } from "vue";

export const useMovieFind = defineStore("movieFind", () => {
  const loader = ref(false);
  const movies = ref([]);
  const movie = ref([]);

  const findFilms = async (search) => {
    loader.value = true;
    movies.value = await getSearchMovie(search);
    loader.value = false;
  };

  const addFilmToUserStore = (movie) => {
    const movieUser = useMovieStore();
    console.log(movieUser.movies);
    if (movieUser.movies.length === 0) {
      movieUser.movies.push(movie);
    } else {
      const isMovieAlreadyAdded = movieUser.movies.some(
        (item) => item.imdbID === movie.imdbID
      );
      if (!isMovieAlreadyAdded) {
        movieUser.movies.push(movie);
      }
    }
  };

  const findOneMovie = async (id) => {
    movie.value = await getMovieById(id);
  };

  return {
    loader,
    movies,
    movie,
    findFilms,
    addFilmToUserStore,
    findOneMovie,
  };
});
