<template>
  <div class="container">
    <h1>Home</h1>


    <div class="link__container" v-if="!state">
      <router-link to="/login">ログイン</router-link> |
      <router-link to="/register">新規登録</router-link>
    </div>

    <ul>
      <li v-for="(todo, key) in todos" :key="key">
        {{todo.description}}
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  name: 'Home',

  data() {
    return {
      db: null,
      todosRef: null,
      todos: {},
    }
  },

  created() {
    this.db = firebase.firestore()
    this.todosRef = this.db.collection('users')
    this.todosRef.onSnapshot(querySnapshot => {
      const obj = {}
      querySnapshot.forEach(doc => {
        obj[doc.id] = doc.data()
      })
      this.todos = obj
    })

    this.$store.commit('changeLoginState')
    this.state = this.$store.state.loginState
 
  },
}
</script>

<style scoped>
.container{
  display: flex;
  flex-flow: column;
  align-items: center;
}
</style>