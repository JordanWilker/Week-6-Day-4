<template>
  <div class="container">
    <div class="SinglePokemonPage" v-if="state.activePokemon.name">
      {{ state.activePokemon.name }}
      <img :src="state['activePokemon']['sprites']['other']['official-artwork']['front_default']" alt="">
    </div>
    <div v-else>
      loading...
    </div>

    <button class="btn btn-danger" @click="catchPokemon(state.activePokemon)">
      Catch
    </button>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { wildPokemonsService } from '../services/WildPokemonsService'
import { caughtPokemonsService } from '../services/CaughtPokemonsService'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
export default {
  name: 'SinglePokemonPage',
  setup() {
    const route = useRoute()
    const state = reactive({
      activePokemon: computed(() => AppState.activePokemon)
    })
    onMounted(async() => {
      await wildPokemonsService.getActivePokemon(route.params.name)
    })
    return {
      state,
      async catchPokemon(activePokemon) {
        activePokemon.img = state.activePokemon.sprites.other['official-artwork'].front_default
        await caughtPokemonsService.catchPokemon(activePokemon)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
