<template>
  <div class="pokemon-details">
    <BaseLoading
      v-if="$apollo.loading"
    />
    <template v-else-if="pokemon">
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
      <div>
        Habitat: <b>{{ pokemon.habitat }}</b>
      </div>

      <div class="actions">
        <button @click="showEdit = true">
          Edit
        </button>
      </div>
    </template>
    <div
      v-else
      class="empty"
    >
      Pokemon not found
    </div>

    <BaseModal
      v-if="showEdit"
      :title="`Edit Pokemon #${id}`"
      @close="showEdit = false"
    >
      <template #title>
        Edit Pokemon #{{ id }}
      </template>

      <EditPokemon
        :pokemon="pokemon"
        @done="showEdit = false"
      />
    </BaseModal>
  </div>
</template>

<script>
import EditPokemon from './EditPokemon.vue'

import gql from 'graphql-tag'

export default {
  components: {
    EditPokemon
  },

  props: {
    id: {
      type: Number,
      required: true
    }
  },

  data () {
    return {
      showEdit: false
    }
  },

  apollo: {
    pokemon: {
      query: gql`
        query Pokemon ($id: Int!) {
          pokemon (id: $id) {
            id
            name
            image
            habitat
          }
        }
      `,
      variables () {
        return {
          id: this.id
        }
      }
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

.actions
  margin-top 12px
</style>
