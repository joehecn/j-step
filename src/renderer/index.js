
import { TabPane, Tabs } from 'element-ui'
import Vue from 'vue'
import Router from 'vue-router'
import routerConfig from './router/router-config.js'
import App from './App.vue'

Vue.use(Router)

const router = new Router(routerConfig)

Vue.component(TabPane.name, TabPane)
Vue.component(Tabs.name, Tabs)

// 关闭生产环境下的提示
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
