import React from 'react'
import App from './App'
import {ApolloClient,InMemoryCache,ApolloProvider,} from '@apollo/client'
import authReducer, { initialState } from "./authReducer";
import { AuthProvider } from "./authContext";

const client=new ApolloClient({
    uri:'http://localhost:3000',
    cache:new InMemoryCache()
})

export default (
  <ApolloProvider client={client}>
    <AuthProvider initialState={initialState} reducer={authReducer}>
      <App/>
    </AuthProvider>
  </ApolloProvider>
);
