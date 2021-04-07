<template>
  <div>
    <h2>ログイン</h2>
    <form class="form__container">
      <label>email</label>
      <input type="email" autocomplete="email">

      <label>password</label>
      <input type="password" autocomplete="password">

      <button class="btn">ログイン</button>

      <router-link class="link" to="/signin">アカウントをお持ちでない方</router-link>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Login',
}
</script>

<style scoped>
h2 {
  display: flex;
  justify-content: center;
}

.form__container {
  display: flex;
  flex-flow: column;
  width: 13rem;
  margin: 0 auto;
  margin-top: 32px;
}

.btn {
  margin-top: 16px;
}

.link {
  margin-top: 16px;
}
</style>