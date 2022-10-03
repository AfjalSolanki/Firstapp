import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BooksScreen from '../Screen/BooksScreen';
import CartScreen from '../Screen/CartScreen';
import ShoppingCartIcon from '../components/ShoppingCartIcon';
const MainStackNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='BooksScreen'
                screenOptions={{ headerShown: false }}
                >
                <Stack.Screen name="BooksScreen" component={BooksScreen} />
                <Stack.Screen name="CartScreen" component={CartScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator

const styles = StyleSheet.create({})