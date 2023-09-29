<template>
  <div class="error-page">
    <h1>There is no such page</h1>
    <img src="/image/error.png" alt="error" />
  </div>
</template>

<style lang="scss" scoped>
.error-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;

  & h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  & img {
    max-width: 350px;
    height: auto;
  }
}
</style>
