import Vue from 'vue'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'

import AlertComponent from './components/Shared/Alert.vue'

Vue.use(Vuetify)
Vue.use(VueResource)

Vue.config.productionTip = false

Vue.component('app-alert', AlertComponent)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBWWWr5g83SNOgn4QowKxYaCY3F45XSohM',
      authDomain: 'chat-real-time-89875.firebaseapp.com',
      databaseURL: 'https://chat-real-time-89875.firebaseio.com',
      projectId: 'chat-real-time-89875',
      storageBucket: 'chat-real-time-89875.appspot.com',
      messagingSenderId: '511685233314'
    })
  }
})
