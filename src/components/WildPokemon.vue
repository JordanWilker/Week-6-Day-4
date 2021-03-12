
<template class="">
  <router-link :to="{name: 'SinglePokemonPage', params:{name: wildPokemonInfo.name}}">
    <ul class="WildPokemon text-capitalize">
      <li>{{ wildPokemonInfo.name }}</li>
    </ul>
  </router-link>
</template>

<script>
export default {
  name: 'WildPokemon',
  props: {
    wildPokemonInfo: Object
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
