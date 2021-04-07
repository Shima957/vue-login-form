<template>
  <div>
    <h2>新規登録</h2>
    <form class="form__container">
      <label>email</label>
      <input type="email" autocomplete="email">

      <label>password</label>
      <input type="password" autocomplete="password">

      <button class="btn">サインイン</button>

      <router-link class="link" to="/login">アカウントをお持ちの方</router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Signin'
}
</script>

<style scoped>
h2{
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
  display: flex;
  justify-content: center;
  margin-top: 16px;
}
</style>