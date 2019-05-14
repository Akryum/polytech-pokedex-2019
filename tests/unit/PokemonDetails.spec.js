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
