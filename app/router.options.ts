import Hero from '~/views/hero/index.vue'
import About from '~/views/about/index.vue'
import Experiences from '~/views/experiences/index.vue'
import Contact from '~/views/contact/index.vue'
import type { RouterConfig } from '@nuxt/schema'
import { createMemoryHistory } from 'vue-router'

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
    history: base => process.client ? createMemoryHistory(base) : null,
    routes: () => [
        {
            path: '/',
            components: {
                hero: Hero,
                about: About,
                experiences: Experiences,
                contact: Contact
            }
        }
    ],
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