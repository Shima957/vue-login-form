<template>
  <div class="container">
    <h2>User</h2>
    <button @click="signOut" class="btn" >SignOut</button>
    <div class="logged">
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
import 'firebase/auth'
import 'firebase/firestore'

export default {
  name: 'User',

  data() {
    return {
      db: null,
      todosRef: null,
      todos: {}
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
  },
  
  methods: {
   signOut() {
      try {
        firebase.auth().signOut();
        this.$router.go({ name: 'Home' });
      } catch (err) {
        console.log(err);
      }
    },
  }
}
</script>

<style scoped>
h2 {
  display: flex;
  justify-content: center;
}

.btn {
  display: flex;
  flex-flow: column;
  margin: 0 auto;
  width: 4rem;
}

.logged {
  display: flex;
  justify-content: center;
}
</style>