<template>
  <router-link
    class="pokemon-list-item"
    :to="{
      name: 'pokemon-details',
      params: {
        num: pokemon.id
      }
    }"
  >
    <div class="name">
      {{ pokemon.name }}
    </div>
    <BaseImage
      :src="pokemon.image"
      :alt="`Image de ${pokemon.name}`"
      class="preview"
    />
  </router-link>
</template>

<script>
export default {
  props: {
    pokemon: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="stylus">
.pokemon-list-item
  display flex
  flex-direction column
  align-items center
  justify-content center
  text-align center
  background $color-grey
  border-radius $br
  transition background .15s
  &:hover
    color $color-primary
    background $color-secondary

  .preview
    width 96px
    height @width
</style>
