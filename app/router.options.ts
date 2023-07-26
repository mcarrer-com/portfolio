import type { RouterConfig } from '@nuxt/schema'
import { createWebHistory} from 'vue-router'

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
    history: base => process.client ? createWebHistory(base) : null,
    scrollBehavior(to) {
        if (to.hash === '#hero') {
            return {
                top: 0,
                behavior: 'smooth',
            }
        } else if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
    },
}