import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { XCircle } from 'phosphor-react-native'

const Basket = () => {
  const navigation = useNavigation()
  const items = useSelector(selectBasketItems)
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])
  const dispatch = useDispatch()
  const basketTotal = useSelector(selectBasketTotal)

  useEffect(()=> {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id]=results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  },[items])

    console.log("testing basket")
    console.log(groupedItemsInBasket)

  return (
    <SafeAreaView>
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-green-500 bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center my-5">Basket</Text>
          </View>
          <TouchableOpacity onPress={navigation.goBack}
            className="absolute top-5 right-5 rounded-full bg-gray-100">
            <XCircle color="green" height={50} width={50}></XCircle>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image 
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBlTwUH797PRGoT3_pNNwFn1SmKt0xePLvqe7QhOilJg&s"
            }} 
            className="h-7 w-7 bg-gray-500 p-4 rounded-full"
            />
            <Text className="flex-1">Deliver in 50-75 mins</Text>
            <Text className="text-green">Change</Text>
        </View>

        <ScrollView>
        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View key={key} className="flex-row items-center space-x-4 bg-white py-2 px-5">
              <Text> {items.length} x </Text>
              <Image 
                source={{ uri: items[0]?.productImage }} 
                className="h-12 w-12 rounded-full" />
              
              <Text className="flex-1">{items[0]?.productName}</Text>
              <Text>${items[0]?.price}</Text>
              <TouchableOpacity onPress={() => dispatch(removeFromBasket({ id: items[0]?.id }))}>
                <Text 
                  className="text-[#00CCBB] text-xs" 
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        </ScrollView>

        <View className="p-5 bg-white mt-5 space-y-4 align-bottom">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">${basketTotal}</Text>
          </View>

          <View className="flex-row justify-between align-bottom">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">${5.99}</Text>
          </View>

          <View className="flex-row justify-between align-bottom">
            <Text>Orders total</Text>
            <Text className="font-extrabold">${basketTotal + 5.99}</Text>
          </View>


          <TouchableOpacity className="rounded-lg bg-green-500 p-4">
            <Text className="text-lg text-center font-bold">Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Basket