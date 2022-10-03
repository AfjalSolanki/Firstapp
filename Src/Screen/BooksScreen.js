import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React, { useState } from 'react'
import { SafeAreaView, FlatList, Dimensions, TouchableOpacity, Pressable, Image, StatusBar, StyleSheet, Text, View, ScrollView, } from 'react-native'
import { books } from '../Data'
import { useSelector, useDispatch } from 'react-redux'
import { ADD_TO_CART } from "../redux/CartItem"
import ShoppingCartIcon from '../components/ShoppingCartIcon'

function BookScreen(props) {
  const { navigation } = props;
  
  const [activeColor, setActiveColor] = useState('ALL')
  const dispatch = useDispatch()
  const addItemToCart = item => dispatch({ type: ADD_TO_CART, payload: item })
  const [Data, setData] = useState([
    { Name: 'ALL', },{ Name: 'Man', },{ Name: 'Women', },{ Name: 'Kids', },
    { Name: 'Man', },{ Name: 'Women', },{ Name: 'Kids', },
  ])
  const isSelect = (item) => {
    setActiveColor(item)
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='rgba(219, 211, 200, 1)' barStyle='dark-content' />
      <View style={{ margin: 10, }}>
        <View style={{ flexDirection: 'row', paddingBottom: 5 }}>
          <TouchableOpacity activeOpacity={0.5}>
            <Image style={styles.headericon}
              source={require('../assets/Images/sharing.png')} />
          </TouchableOpacity>
          <View style={styles.leftview}>
            <TouchableOpacity activeOpacity={0.5}>
              <Image style={[styles.headericon, { marginHorizontal: 10 }]}
                source={require('../assets/Images/search.png')} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
              <Image style={styles.headericon}
                source={require('../assets/Images/scan.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.TouchableOpacity}>
          <ShoppingCartIcon />
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image resizeMode={'stretch'} style={[styles.add,]}
              source={require('../assets/Images/add.png')} />
          </View>
          <Text style={styles.Product}>Product Catalog</Text>
          <View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={Data}
              renderItem={({ item, index }) =>
                <TouchableOpacity style={[styles.butto,
                { backgroundColor: item.Name == activeColor ? 'black' : 'white' }]}
                  onPress={() => { isSelect(item.Name) }}>
                  <Text style={[styles.textcolo, { color: item.Name == activeColor ? 'white' : 'black' }]}>{item.Name}</Text>
                </TouchableOpacity>
              }
            />
            <FlatList
              showsVerticalScrollIndicator={false}
              numColumns={2}
              data={books}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) =>
                <TouchableOpacity style={styles.card} onPress={() => addItemToCart(item)}>
                  <Image style={[styles.IMAGE,]}
                    source={item.prodect} />
                  <View style={{ alignSelf: 'flex-start', marginLeft: 10 }}>
                    <Text style={{ color: "#000", fontSize: 13, fontWeight: '400' }}>{item.prodectName}</Text>
                    <Text style={{ color: "#000", fontSize: 14, fontWeight: '800' }}>{item.price}</Text>
                  </View>
                </TouchableOpacity>
              }
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(219, 211, 200, 1)',
  },
  headericon: {
    height: 22,
    width: 22,
    resizeMode: 'contain'
  },
  leftview: {
    marginLeft: 'auto',
    flexDirection: 'row'
  },
  shopping: {
    height: 22,
    width: 22,
    resizeMode: 'contain',
    tintColor: '#fff'
  },
  TouchableOpacity: {
    position: 'absolute',
    backgroundColor: '#182229',
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 40,
    borderRadius: 40,
    zIndex: 2,
  },
  add: {
    height: hp('22%'),
    width: wp('100%')
  },
  Product: {
    fontSize: 22,
    color: '#0b141a',
    fontWeight: '600',
    marginVertical: 10
  },
  butto: {
    width: 100,
    height: 40,
    borderRadius: 10,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textcolo: {
    fontSize: 18,
    fontWeight: '300'
  },
  IMAGE: {
    height: 200,
    width: wp('40%'),
    margin: 5,
    resizeMode: 'contain',
  },
  card: {
    alignItems: 'center',
    flex: 1
  }
})
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff'
//   },
//   bookItemContainer: {
//     flexDirection: 'row',
//     padding: 10
//   },
//   thumbnail: {
//     width: 100,
//     height: 150
//   },
//   bookItemMetaContainer: {
//     padding: 5,
//     paddingLeft: 10
//   },
//   textTitle: {
//     fontSize: 22,
//     fontWeight: '400'
//   },
//   textAuthor: {
//     fontSize: 18,
//     fontWeight: '200'
//   },
//   buttonContainer: {
//     position: 'absolute',
//     top: 110,
//     left: 10
//   },
//   button: {
//     borderRadius: 8,
//     backgroundColor: '#24a0ed',
//     padding: 5
//   },
//   buttonText: {
//     fontSize: 22,
//     color: '#fff'
//   }
// })

export default BookScreen