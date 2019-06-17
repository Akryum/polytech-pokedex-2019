import PokemonDetails from '@/components/PokemonDetails.vue'
import { shallowMount } from '@vue/test-utils'

describe('PokemonDetails', () => {
  const stubs = [
    'BaseImage'
  ]

  const mocks = {
    $route: {
      params: {
        id: 2
      }
    },
    $apollo: {
      loading: false
    },
    pokemon: {
      id: 2,
      name: 'Ivysaur',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
      habitat: 'forest'
    }
  }

  test('snapshot', () => {
    const wrapper = shallowMount(PokemonDetails, {
      propsData: {
        id: 2
      },
      stubs,
      mocks
    })
    expect(wrapper.find('.number').text()).toBe('2')
    expect(wrapper.find('.name').text()).toBe('Ivysaur')
    expect(wrapper).toMatchSnapshot()
  })
})
