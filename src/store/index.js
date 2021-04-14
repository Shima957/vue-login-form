import { createStore } from 'vuex'
import firebase from 'firebase/app'
import 'firebase/auth'

export default createStore({
  state: {
    loginState: false,
  },
  mutations: {
    changeLoginState(state) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          state.loginState = true;
        } else {
          state.loginState = false;
        }
      });
    },
  },
  actions: {},
  modules: {},
});
