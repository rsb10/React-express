import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRight } from 'phosphor-react-native'


const FeaturedRow = ({id, title, description}) => {
  return (
    <View>
      <View className='mt-4 items-center flex-row mx-4 justify-between'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRight size={32} color='#00CCBB'/>
      </View>
      <Text className='text-xs px-4 text-gray-500'>{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15
        }}
        showsHorizontalScrollIndicator={false}
        className='pt-4 '
        >
          {/* restaurant cards */}
          
        </ScrollView>
    </View>
  )
}

export default FeaturedRow