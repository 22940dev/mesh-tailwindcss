import Vue from 'vue'
import App from '@/App'

import vClickOutside from 'v-click-outside'

import 'tailwindcss/tailwind.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/900.css'

Vue.config.productionTip = false

Vue.use(vClickOutside)

new Vue({
  render: (h) => h(App),
}).$mount('#app')
