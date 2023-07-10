import { View, Text, SafeAreaView, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  ChevronDownIcon,
  UserIcon,
  ShoppingBagIcon
} from 'react-native-heroicons/outline'
import { MagnifyingGlass } from 'phosphor-react-native'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import ProductCards from '../components/ProductCards'
import { PRODUCTS } from '../products'
import { useDispatch, useSelector } from 'react-redux'
import { selectBasketItems, addToBasket } from '../features/basketSlice'

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect( () =>{
      navigation.setOptions({
        headerShown: false
      });
    }, []);

    const dispatch = useDispatch()
    const items = useSelector(selectBasketItems)
    const addItemToBasket = () => {
      dispatch(addToBasket({ id, productName, price, productImage }))
    }
    
  return (
    <SafeAreaView className='bg-white pt-5'>

        {/* Header */}
        <View className='flex-row pb-3 items-center mx-4 space-x-2'>
          <Image 
            source={{ 
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBlTwUH797PRGoT3_pNNwFn1SmKt0xePLvqe7QhOilJg&s'
            }} 
            className='h-7 w-7 bg-gray-300 p-4 rounded-full' 
          />
          
          <View className='flex-1'>
            <Text className='font-bold text-gray-400 text-xs '>
              Deliver Now !
            </Text>
            <Text className='font-bold text-xl'>
              Current Location
              <ChevronDownIcon size={20} color='#00CCBB' />
            </Text>
          </View>
          <View>
            <UserIcon size={32} color='#00CCBB' />
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate('Basket')}>
            <ShoppingBagIcon size={32} color='#00CCBB' /> 
            <View // className='bg-red-600 absolute w-5 h-5 right-2 rounded-md'>
                style={{
                  position: 'absolute',
                  backgroundColor: 'red',
                  width: 20,
                  height: 20,
                  borderRadius: 15 / 2,
                  right: 6,
                  top: +14,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: "#FFFFFF",
                    fontSize: 10,
                  }}>
                  {items.length}
                </Text>
              </View>
            </TouchableOpacity>
        </View>

        <View>
          <View className='flex-row'>
            <MagnifyingGlass size={32} />
            <TextInput placeholder='Search for products and items'/>
          </View>
        </View>

          {/* Body */}
          <ScrollView className='bg-gray-100 flex-1'>
              {/* Categories */}
                <Categories />

            <View className='mt-4 items-center flex-row mx-4 justify-between flex-wrap'>
                {
                  PRODUCTS.map(product => (
                  <ProductCards 
                    key={product.id}
                    id={product.id} 
                    productName={product.productName} 
                    price={product.price}
                    productImage={product.productImage}
                  />)
                )}
            </View>
              
              
              {/* Featured rows */}
               <FeaturedRow
                id="123"
                title="Featured"
                description="Paid placement from partners" />
              
              <FeaturedRow
                id="1234"
                title="Tasty discounts"
                description="Everyone's been enjoying these juicy discounts" />

              <FeaturedRow
                id="12345"
                title="Offers near you"
                description="Why not support your local restaurants tonight" />   

          </ScrollView>
          

    </SafeAreaView>
  )
}

export default HomeScreen