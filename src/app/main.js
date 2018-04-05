import bulma from 'bulma'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import App from './App.vue'
import routes from './routes/router'
import VueSocketio from 'vue-socket.io'
import socketio from 'socket.io-client'
import Vuex from 'Vuex'
import counterModule from './modules/counterModule'
import EventBus from './modules/event-bus'

Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.use(EventBus)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    io: {}//rootState.io
  },
  mutations: {
    setSocket: (state, socket) => {
      state.io = socket 
    }
  },
  modules: {
    counterModule
  }
})
Vue.use(VueSocketio, 'http://localhost:3101', store)


const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  beforeCreate () {
    store.commit('setSocket', this.$socket)
  },
})
