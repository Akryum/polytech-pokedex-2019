import Vue from 'vue'
import Router from 'vue-router'
import PokemonList from './components/PokemonList.vue'
import PokemonDetails from './components/PokemonDetails.vue'
import NotFound from './components/NotFound.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: PokemonList
  },
  {
    path: '/pokemon/:num',
    name: 'pokemon-details',
    component: PokemonDetails,
    props: route => {
      return {
        id: parseInt(route.params.num)
      }
    }
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

function scrollBehavior (to, from, savedPosition) {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}

    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash

      // specify offset of the element
      if (to.hash === '#anchor2') {
        position.offset = { y: 100 }
      }

      if (document.querySelector(to.hash)) {
        return position
      }

      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      return false
    }

    return new Promise(resolve => {
      // check if any matched route config has meta that requires scrolling to top
      if (to.matched.some(m => m.meta.scrollToTop)) {
        // coords will be used if no selector is provided,
        // or if the selector didn't match any element.
        position.x = 0
        position.y = 0
      }

      // wait for the out transition to complete (if necessary)
      this.app.$root.$once('triggerScroll', () => {
        // if the resolved position is falsy or an empty object,
        // will retain current scroll position.
        resolve(position)
      })
    })
  }
}

export default new Router({
  mode: 'history',
  routes,
  scrollBehavior
})
