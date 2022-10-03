import React from 'react'
import { TouchableOpacity, ImageBackground, View, Text, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

function ShoppingCartIcon() {
  const navigation = useNavigation()
  const cartItems = useSelector(state => state)

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('CartScreen')}
      style={styles.button}>
      <Image resizeMode={'contain'} style={styles.shopping} source={require('../assets/Images/shopping-bag.png')} />
      <View style={styles.itemCountContainer}>
        <Text style={styles.itemCountText}>{cartItems.length}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    // marginLeft:20,
    alignItems: 'center',
    borderRadius: 55,
    // marginRight: 20,
    backgroundColor: '#182229',
    justifyContent: 'center',
    width: 55,
    height: 55
  },
  itemCountContainer: {
    position: 'absolute',
    height: 25,
    width: 25,
    borderRadius: 15,
    backgroundColor: '#FF7D7D',
    left: 35,
    bottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000
  },
  itemCountText: {
    fontSize: 10,
    color: 'white',
    fontWeight: 'bold'
  },
  shopping: {
    height: 25,
    width: 25,
    tintColor:'#fff'
  }
})

export default ShoppingCartIcon