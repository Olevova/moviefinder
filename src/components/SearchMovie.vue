<template>
  <div class="search-form">
    <el-form
      :model="formSearching"
      :rules="rules"
      ref="searchForm"
      @submit.prevent="onFormSubmit"
    >
      <el-form-item
        :class="{ 'is-success': isActive, input: true }"
        prop="searchMovie"
      >
        <el-input
          v-model="formSearching.searchMovie"
          placeholder="Type the name of the Movie in English "
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">Find</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useMovieFind } from "../store/movieFindStore";
import { useRouter } from "vue-router";

const movieFind = useMovieFind();
const router = useRouter();
const searchForm = ref(null);
const formSearching = reactive({
  searchMovie: "",
});

const validateLatinLatters = (rule, value, callback) => {
  const latinPattern = /^[a-zA-Z]+$/;
  if (!latinPattern.test(value)) {
    callback(new Error("Please enter Latin latters only"));
  } else {
    callback();
  }
};

const rules = reactive({
  searchMovie: [
    {
      validator: validateLatinLatters,
      message: "Please enter Latin latters only",
      trigger: "blur",
    },
  ],
});

const onFormSubmit = () => {
  searchForm.value.validate(async (valid) => {
    if (valid) {
      findMovies(formSearching.searchMovie);
      redirectToMoviesPage();
    }
  });
};

const findMovies = (findWord) => {
  movieFind.findFilms(findWord);
};

const redirectToMoviesPage = () => {
  router.push("/movies");
};

const isActive = ref(false);
</script>

<style lang="scss" scoped>
.search-form {
  display: flex;
  width: 300px;
}
.input {
  width: 100%;
}
:deep(.el-form) {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  width: 100%;
}

:deep(.el-button) {
  background-color: rgba(0, 128, 128, 0.2);
  border: 1px solid rgb(130, 118, 118);
}

:deep(.el-button:hover) {
  background-color: rgb(130, 118, 118);
  border: 1px solid rgb(130, 118, 118);
  color: #fff;
}

:deep(:el-input_wrapper) {
  width: 100%;
}
:deep(.el-input__wrapper.is-focus) {
  box-shadow: 0 0 0 1px rgba(0, 128, 128, 0.2);
}
</style>
