import { StyleSheet, StatusBar, Text, FlatList, Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { REMOVE_FROM_CART } from "../redux/CartItem"
const CartScreen = ({ navigation }) => {
  const cartItems = useSelector(state => state)
  const dispatch = useDispatch()

  const removeItemFromCart = item =>
    dispatch({
      type: REMOVE_FROM_CART,
      payload: item
    })
  return (
    <View style={{ flex: 1, backgroundColor: 'rgba(219, 211, 200, 1)' }}>
      <StatusBar barStyle='dark-content' backgroundColor={"rgba(219, 211, 200, 1)"} />
      <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
        <Image style={styles.backarrayImg} source={require('../assets/Images/back-arrownew.png')} />
      </TouchableOpacity>
      {cartItems.length !== 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={cartItems}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.bookItemContainer}>
              <Image source={item.prodect} resizeMode={'contain'} style={{ width: "100%", height: 400 }} />
              <View style={styles.bookItemMetaContainer}>
                <View>
                  <Text style={styles.textTitle}>{item.prodectName}</Text>
                  <Text style={styles.textAuthor}>{item.price}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => removeItemFromCart(item)}
                  style={styles.button}>
                  <Text style={styles.buttonText}>Remove</Text>
                </TouchableOpacity>

              </View>
            </View>
          )}
        />
      ) : (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartMessage}>Your cart is empty </Text>
        </View>
      )}
    </View>
  )
}
export default CartScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  backarrayImg: {
    height: 22, width: 22,
    resizeMode: 'contain',
    tintColor: 'black',
    marginVertical: 20,
    marginHorizontal: 5,
    // backgroundColor:'red',
  },
  bookItemContainer: {
    // flexDirection: 'row',
    // padding: 10
  },
  thumbnail: {
    width: 100,
    height: 150
  },
  bookItemMetaContainer: {
    flexDirection: 'row',
    alignItems:'center'
  },
  textTitle: {
    color: "#000",
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 10,
    marginTop:5
  },
  textAuthor: {
    color: "#000",
    fontSize: 20,
     fontWeight: '800',
    marginLeft: 10,
    marginVertical:5
  },
  buttonContainer: {
    position: 'absolute',
    top: 110,
    left: 10
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#ff333390',
    width:100,
    height:45,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:'auto',
    marginEnd:10
  },
  buttonText: {
    fontSize: 18,
    color: '#fff'
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyCartMessage: {
    fontSize: 28
  }
})

