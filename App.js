import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainStackNavigator from './Src/AppNavigation/MainStackNavigator'
import { Provider as StoreProvider } from 'react-redux'
import store from './Src/redux/store'
const App = () => {
  return (
    <StoreProvider store={store}>
    <MainStackNavigator />
  </StoreProvider>  )
}

export default App

const styles = StyleSheet.create({})