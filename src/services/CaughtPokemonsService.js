import { logger } from '../utils/Logger'
import { sandboxApi } from './AxiosService'
import { AppState } from '../AppState'

class CaughtPokemonsService {
  async catchPokemon(activePokemon) {
    try {
      const res = sandboxApi.post('', activePokemon)
      AppState.caughtPokemon = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async getCaughtPokemons() {
    try {
      const res = await sandboxApi.get('')
      logger.log(res.data, 'get caught pokemon from sandbox')
      AppState.caughtPokemon = res.data
    } catch (error) {
      logger.error(error)
    }
  }
}

export const caughtPokemonsService = new CaughtPokemonsService()
