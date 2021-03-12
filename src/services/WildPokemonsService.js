import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class WildPokemonsService {
  async getWildPokemons() {
    try {
      const res = await api.get('?limit=151')
      // logger.log(res.data)
      AppState.pokemons = res.data.results
    } catch (error) {
      logger.error(error)
    }
  }

  async getActivePokemon(name) {
    try {
      const res = await api.get(`${name}`)
      logger.log(res.data)
      AppState.activePokemon = res.data
    } catch (error) {
      logger.error(error)
    }
  }
}

export const wildPokemonsService = new WildPokemonsService()
