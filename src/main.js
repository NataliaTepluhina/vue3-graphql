import { createApp, provide, h } from 'vue'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'
import App from './App.vue'

const defaultClient = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})

createApp({
  setup() {
    provide(DefaultApolloClient, defaultClient)
  },
  render: () => h(App)
}).mount('#app')
