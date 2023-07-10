import { View, Text, Image, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { addToBasket } from '../features/basketSlice'
import { useDispatch } from 'react-redux';

const ProductCards = ({ id, productName, price, productImage }) => {
  // const { id, productName, price, productImage } = props.data;
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const addItemToBasket = () => {
    dispatch(addToBasket({ id, productName, price, productImage }))
  }

  return (
      <TouchableOpacity 
      onPress={()=>{
        navigation.navigate('Cart',{
          id,
          productName,
          price,
          productImage
        })
      }}
      className='m-6 flex-col'>
        <Image source={{
          uri: productImage
        }}
        className='h-32 w-32 rounded'
        ></Image>
        <Text className='flex-nowrap text-xs w-32'>{productName}</Text>
        <Text className='flex-nowrap text-xs w-32 justify-center font-bold'>${price}</Text>
        <TouchableOpacity>
          <Button title='Add to Cart' onPress={addItemToBasket} />
        </TouchableOpacity>
        
      </TouchableOpacity>
  )
}

export default ProductCards