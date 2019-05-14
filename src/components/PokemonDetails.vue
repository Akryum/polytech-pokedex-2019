<template>
  <div class="pokemon-details">
    <template v-if="pokemon">
      <div class="id">
        <span class="symbol">#</span>
        <span class="number">{{ pokemon.id }}</span>
      </div>
      <div class="name">
        {{ pokemon.name }}
      </div>
      <BaseImage
        :src="pokemon.image"
        :alt="`Image of ${pokemon.name}`"
        class="preview"
      />
    </template>
    <div
      v-else
      class="empty"
    >
      Pokemon not found
    </div>
  </div>
</template>

<script>
import pokemons from '@/assets/pokemons.json'

export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },

  computed: {
    pokemon () {
      return pokemons.find(
        p => p.id === this.id
      )
    }
  },

  created () {
    console.log(this.$route.params.id)
  }
}
</script>

<style lang="stylus" scoped>
.pokemon-details
  background $color-grey
  border-radius $br
  margin $padding
  padding $padding

.id
  .symbol
    color $color-grey-dark

.name
  font-size 2em
  font-weight lighter

.preview
  width 192px
  height @width
  >>> .image
    image-rendering pixelated
</style>
