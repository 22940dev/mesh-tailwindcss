import Vue from 'vue'
import VueGtag from 'vue-gtag'
import vClickOutside from 'v-click-outside'

import 'tailwindcss/tailwind.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/900.css'

import App from '@/App'

Vue.config.productionTip = false

Vue.use(vClickOutside)
Vue.use(VueGtag, { config: { id: 'G-KGTKN7MHDK' } })

new Vue({
  render: (h) => h(App),
}).$mount('#app')
