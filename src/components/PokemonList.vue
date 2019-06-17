<template>
  <div class="pokemon-list">
    <h1>Pokedex</h1>
    <div
      v-if="width > 1000"
      class="toolbar"
    >
      <input
        v-model="search"
        placeholder="Filter..."
      >
    </div>

    <div class="pokemons">
      <PokemonListItem
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        :pokemon="pokemon"
      />
    </div>

    <div class="bottom-actions">
      <button
        v-if="showLoadMore"
        @click="loadMore()"
      >
        Load more
      </button>
    </div>
  </div>
</template>

<script>
import PokemonListItem from './PokemonListItem.vue'
import gql from 'graphql-tag'

const SEARCH_LOCAL_NAME = 'pokedex.search'

let page = 0

export default {
  components: {
    PokemonListItem
  },

  data () {
    return {
      search: '',
      showLoadMore: true,
      width: window.innerWidth
    }
  },

  apollo: {
    pokemons: {
      query: gql`
        query Pokemons ($filter: String, $page: Int) {
          pokemons (filter: $filter, page: $page) {
            id
            name
            image
          }
        }
      `,
      variables () {
        return {
          filter: this.search,
          page: 0
        }
      },
      throttle: 500,
      result ({ data: { pokemons } }) {
        this.showLoadMore = pokemons.length >= 20
      }
    }
  },

  watch: {
    search (value, oldValue) {
      localStorage.setItem(SEARCH_LOCAL_NAME, value)
      page = 0
      this.showLoadMore = true
    }
  },

  created () {
    this.loadSearch()
    window.addEventListener('resize', this.onResize)
  },

  destroyed () {
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    loadSearch () {
      const result = localStorage.getItem(SEARCH_LOCAL_NAME)
      if (result != null) {
        this.search = result
      }
    },

    onResize () {
      this.width = window.innerWidth
    },

    async loadMore () {
      page++

      await this.$apollo.queries.pokemons.fetchMore({
        variables: {
          filter: this.search,
          page
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          this.showLoadMore = fetchMoreResult.pokemons.length >= 20
          return {
            pokemons: [
              ...previousResult.pokemons,
              ...fetchMoreResult.pokemons
            ]
          }
        }
      })
    }
  }
}

window.addEventListener('unload', () => {
  localStorage.removeItem(SEARCH_LOCAL_NAME)
})
</script>

<style lang="stylus">
.pokemon-list
  margin $padding

.pokemons
  display grid
  grid-template-columns repeat(auto-fill, 200px)
  grid-auto-rows 200px
  grid-gap 12px

.toolbar
  margin-bottom $padding

.bottom-actions
  display flex
  justify-content center
  margin-top 12px
</style>
