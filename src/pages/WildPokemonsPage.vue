<template>
  <div class="WildPokemonsPage pokeheight overflow-auto">
    <WildPokemon v-for="pokemon in state.wildPokemon" :key="pokemon" :wild-pokemon-info="pokemon" />
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { wildPokemonsService } from '../services/WildPokemonsService'
import { WildPokemon } from '../components/WildPokemon'
export default {
  name: 'WildPokemonsPage',
  setup() {
    const state = reactive({
      wildPokemon: computed(() => AppState.pokemons)
    })
    onMounted(() => {
      wildPokemonsService.getWildPokemons()
    })
    return {
      state
    }
  },
  components: {
    WildPokemon
  }
}
</script>

<style lang="scss" scoped>

</style>
