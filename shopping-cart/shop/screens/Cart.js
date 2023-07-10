import { View, Text, Image, TouchableOpacity, ScrollView} from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { ArrowLeftIcon, PlusCircleIcon, MinusCircleIcon } from 'react-native-heroicons/solid'
import { MinusCircle } from 'phosphor-react-native'
import { useDispatch, useSelector } from 'react-redux'
import { selectBasketItems, addToBasket, selectBasketItemWithId, removeFromBasket } from '../features/basketSlice'
import BasketIcon from '../components/BasketIcon'

const CartScreen = () => {

  const {
    params: {
      id,
      productName,
      price,
      productImage
    }
  } = useRoute()

  const dispatch = useDispatch()
  const items = useSelector((state) => selectBasketItemWithId(state, id))
  
  const addItemToBasket = () => {
    dispatch(addToBasket({ id, productName, price, productImage }))
  }

  const removeItemFromBasket = () => {
    if (!items.length > 0) return;

    dispatch(removeFromBasket({ id }))
  }
  console.log(items)

  const [isPressed, setIsPressed] = useState(false)

  // const { id, productName, price, productImage } = props.data;
  // console.log("Cartssss")
  // console.log(id)
  // console.log(productName)
  // console.log(price)
  // console.log(productImage)


  return (
    <>
    <BasketIcon />
    <ScrollView>
    <View className='bg-white'> 
      <View className='items-center'>
        <Image source={{
            uri: productImage
          }}
          className='h-80 w-80'
        ></Image>
        <Text>{productName}</Text>
        <Text> ${price}</Text>
        <View className='flex-row item-center'>
          <TouchableOpacity onPress={removeItemFromBasket}>
            <MinusCircleIcon size={32} color='red'></MinusCircleIcon>
          </TouchableOpacity>
          <Text>  {items.length}  </Text>
          <TouchableOpacity onPress={addItemToBasket}>
            <PlusCircleIcon size={32} color='red'></PlusCircleIcon>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </ScrollView>
    </>
  )
}

export default CartScreen