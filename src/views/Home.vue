<template>
  <div class="container">
    <h1>Home</h1>

    <div class="link__container">
      <router-link class="link" to="/login">ログイン</router-link> |
      <router-link class="link" to="/signin">新規登録</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.container{
  display: flex;
  flex-flow: column;
  align-items: center;
}
</style>