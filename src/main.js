import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueRellax from 'vue-rellax'
import VueDraggableResizable from 'vue-draggable-resizable'
// import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

Vue.use(VueRellax)
Vue.component('vue-draggable-resizable', VueDraggableResizable)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
