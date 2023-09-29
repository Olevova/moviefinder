<template>
  <header class="header">
    <div class="container">
      <ul class="nav-menu">
        <li class="nav-link">
          <router-link class="header-link" :to="{ name: 'search-page' }"
            >Search page</router-link
          >
        </li>
        <li class="nav-link">
          <router-link class="header-link" :to="{ name: 'movies' }"
            >Movies</router-link
          >
        </li>
        <li class="nav-link">
          <router-link class="header-link" :to="{ name: 'user-movies' }"
            >User Movie</router-link
          >
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.header {
  background-color: white;
}

.container {
  display: flex;
  align-items: center;
}

.nav-menu {
  list-style: none;
  padding-left: 0;
  display: flex;
  @media (max-width: $mobile-screen) {
    display: block;
  }
}

.nav-link {
  margin-left: 30px;
}

.header-link {
  text-decoration: none;
  color: rgba(0, 128, 128, 0.5);
}

.header-link:hover,
.header-link.router-link-exact-active {
  color: red;
}
</style>
