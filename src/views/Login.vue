<template>
  <div>
    <h2>ログイン</h2>
    <form @submit.prevent='login' class="form__container">
      <label>email</label>
      <input v-model='email' type="email" autocomplete="email">

      <label>password</label>
      <input v-model="password" type="password" autocomplete="password">

      <button class="btn" type="submit">ログイン</button>
      <router-link class="link" to="/register">アカウントをお持ちでない方</router-link>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'Login',

  data() {
    return{
      email: '',
      password: '',
    }
  },

  methods: {
    async login() {
      try {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        this.$router.replace({name: 'User'})
      }
      catch(err) {
        console.log(err);
      }
    }
  }
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