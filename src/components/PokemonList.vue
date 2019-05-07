<template>
  <div class="pokemon-list">
    <h1>Pokedex</h1>
    <div class="toolbar">
      <input
        v-model="search"
        placeholder="Filter..."
      >
    </div>

    <div class="pokemons">
      <PokemonListItem
        v-for="pokemon in filteredPokemons"
        :key="pokemon.id"
        :pokemon="pokemon"
      />
    </div>
  </div>
</template>

<script>
import pokemons from '@/assets/pokemons.json'
import PokemonListItem from './PokemonListItem.vue'

export default {
  components: {
    PokemonListItem
  },

  data () {
    return {
      pokemons,
      search: ''
    }
  },

  computed: {
    filteredPokemons () {
      if (!this.search) {
        return this.pokemons
      }
      // Handle spaces
      const pattern = this.search.trim().replace(/\s+/g, '|')
      // console.log(pattern)
      // Search regex which is case insensitive
      const regex = new RegExp(pattern, 'i')
      // Filter
      return this.pokemons.filter(
        pokemon => regex.test(pokemon.name)
      )
    }
  }
}
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
</style>
