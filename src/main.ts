import Vue from 'vue'
import VCA, { createApp, h } from '@vue/composition-api'
import router from './router'
import AddModules from './modules/index'
import store from './store'
import App from './App.vue'

Vue.use(VCA)

AddModules({ app: Vue, store, router })

Vue.config.productionTip = false

const app = createApp({
  router,
  store,
  render: () => h(App),
})

app.mount('#app')
