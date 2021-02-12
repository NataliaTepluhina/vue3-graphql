<template>
  <div>
    <p v-for="character in characters" :key="character.id">
      {{ character.name }}
    </p>
  </div>
</template>

<script>
import charactersQuery from './graphql/characters.query.gql'
import { useQuery, useResult } from '@vue/apollo-composable'

export default {
  name: 'App',
  setup() {
    const { result } = useQuery(charactersQuery, {
      variables: { name: 'rick' }
    })

    const characters = useResult(result, null, data => data.characters.results)

    return { characters }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
