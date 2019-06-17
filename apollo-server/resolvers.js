import GraphQLJSON from 'graphql-type-json'
import { getPokemons, getPokemonById, updatePokemon } from './connectors/pokemon'

export default {
  JSON: GraphQLJSON,

  Pokemon: {
    image: (pokemon, args, context) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
    // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemon.id + '.png'
  },

  Query: {
    pokemons: (root, args, context) => getPokemons(args, context),
    pokemon: (root, { id }, context) => getPokemonById(id, context)
    // pokemon: (root, args, context) => getPokemonById(args.id, context)
  },

  Mutation: {
    editPokemon: (root, { input }, context) => updatePokemon(input, context)
  },

  Subscription: {
    mySub: {
      subscribe: (parent, args, { pubsub }) => pubsub.asyncIterator('hey')
    }

  }
}
