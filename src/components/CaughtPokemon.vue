
<template class="">
  <ul class="CaughtPokemon text-capitalize">
    <li>{{ caughtPokemonInfo.name }}</li>
  </ul>
</template>

<script>
export default {
  name: 'CaughtPokemon',
  props: {
    caughtPokemonInfo: Object
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
