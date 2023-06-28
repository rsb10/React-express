import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  ChevronDownIcon,
  UserIcon,
  ShoppingBagIcon
} from 'react-native-heroicons/outline'
import { MagnifyingGlass } from 'phosphor-react-native'
import Categories from '../components/Categories'

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect( () =>{
      navigation.setOptions({
        headerShown: false
      });
    }, []);
    
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
          <ShoppingBagIcon size={32} color='#00CCBB' /> 
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
              {/* Featured rows */}

        </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen