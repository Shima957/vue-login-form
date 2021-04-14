<template>
  <div>
    <h2>新規登録</h2>
    <form @submit.prevent="register" class="form__container">
      <label>email</label>
      <input v-model="email" type="email" autocomplete="email">

      <label>password</label>
      <input v-model="password" type="password" autocomplete="password">

      <button class="btn" type="submit">サインイン</button>

      <router-link class="link" to="/login">アカウントをお持ちの方</router-link>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import  'firebase/auth'

export default {
  name: 'Register',
  data() {
    return{
      email: '',
      password: ''
    }
  },

  methods: {
    async register() {
      try {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        this.$router.go({name: 'User'})
      }catch(err) {
        console.log(err);
      }
    }
  }
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