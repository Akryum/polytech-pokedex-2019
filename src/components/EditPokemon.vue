<template>
  <form
    class="edit-pokemon"
    @submit="save()"
  >
    <div class="form">
      <div>
        <label for="pokemon-habitat">
          Habitat:
        </label>
        <select
          id="pokemon-habitat"
          v-model="formData.habitat"
        >
          <option value="" />
          <option
            v-for="option of habitats"
            :key="option"
            :value="option"
          >
            {{ option }}
          </option>
        </select>
      </div>
    </div>

    <div class="actions">
      <button type="submit">
        Save
      </button>
    </div>
  </form>
</template>

<script>
import habitats from '@/assets/habitat.json'
import gql from 'graphql-tag'

export default {
  props: {
    pokemon: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      habitats,
      formData: {
        habitat: this.pokemon.habitat
      }
    }
  },

  methods: {
    async save () {
      await this.$apollo.mutate({
        mutation: gql`
          mutation EditPokemon ($input: EditPokemonInput!) {
            editPokemon (input: $input) {
              id
              name
              image
              habitat
            }
          }
        `,
        variables: {
          input: {
            id: this.pokemon.id,
            habitat: this.formData.habitat
          }
        }
      })

      this.$emit('done')
    }
  }
}
</script>

<style lang="stylus" scoped>
.edit-pokemon
  height 100%

.form
  flex 1

.edit-pokemon,
.form
  display flex
  flex-direction column
  align-items center
  justify-content center

label
  margin-right 8px

.actions
  margin-top 12px

  button
    min-width 128px
</style>
