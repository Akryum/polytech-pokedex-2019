<template>
  <div id="app">
    <PokemonList />
  </div>
</template>

<script>
import PokemonList from './components/PokemonList.vue'

export default {
  name: 'App',
  components: {
    PokemonList
  }
}
</script>

<style lang="stylus">
@import '~@/style/main'
</style>
