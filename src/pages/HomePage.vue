<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div>
      <CaughtPokemon v-for="pokemon in state.caughtPokemon" :key="pokemon" :caught-pokemon-info="pokemon" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { caughtPokemonsService } from '../services/CaughtPokemonsService'
export default {
  name: 'Home',
  setup() {
    const state = reactive({
      caughtPokemon: computed(() => AppState.caughtPokemon)
    })
    onMounted(() => {
      caughtPokemonsService.getCaughtPokemons()
    })
    return {
      state
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
