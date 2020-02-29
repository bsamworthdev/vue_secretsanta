import Vue from 'vue'
import routes from './routes'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Install BootstrapVue
Vue.use(BootstrapVue)
    // install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

library.add(faPlus)
library.add(faTimes)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const app = new Vue({
    el: '#app',
    data: {
        currentRoute: window.location.pathname
    },
    computed: {
        ViewComponent() {
            const matchingView = routes[this.currentRoute]
            return matchingView ?
                require('./pages/' + matchingView + '.vue').default :
                require('./pages/404.vue').default
        }
    },
    render(h) {
        return h(this.ViewComponent)
    }
})

window.addEventListener('popstate', () => {
    app.currentRoute = window.location.pathname
})