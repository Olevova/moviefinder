import axios from "axios";

const ENDPOINT = "https://www.omdbapi.com";

export async function getSearchMovie(search) {
  const response = await axios.get(`${ENDPOINT}/?s=${search}&apikey=523def0`);
  if (response?.data?.Search === undefined) {
    return [];
  }

  return response?.data?.Search;
}

export async function getMovieById(id) {
  const response = await axios.get(`${ENDPOINT}/?i=${id}&apikey=523def0`);
  if (response?.data === undefined) {
    return [];
  }
  return response?.data;
}
