import Vue from 'vue'
import Router from 'vue-router'
import PokemonList from './components/PokemonList.vue'
import PokemonDetails from './components/PokemonDetails.vue'
import NotFound from './components/NotFound.vue'

Vue.use(Router)

export default new Router({
  routes: [
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
})
