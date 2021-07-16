import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faUmbrella, faUsers, faSchool, faBookReader, faCloudDownloadAlt, faPaperPlane, faCog, faAddressBook, faChalkboard, faArrowAltCircleRight, faTicketAlt, faLessThan,  faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faUmbrella, faUsers, faSchool, faBookReader, faCloudDownloadAlt, faPaperPlane, faCog, faAddressBook, faChalkboard, faArrowAltCircleRight, faTicketAlt, faLessThan, faExclamationCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

//Custom bootstrap themeing
import './app.scss'

import router from './router'
import store from './store'
Vue.use(BootstrapVue)


Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
