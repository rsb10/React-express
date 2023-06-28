import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCards from './CategoryCards'

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }} 
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCards imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBlTwUH797PRGoT3_pNNwFn1SmKt0xePLvqe7QhOilJg&s' title='testing1'/>
      <CategoryCards imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBlTwUH797PRGoT3_pNNwFn1SmKt0xePLvqe7QhOilJg&s' title='testing2'/>
      <CategoryCards imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBlTwUH797PRGoT3_pNNwFn1SmKt0xePLvqe7QhOilJg&s' title='testing3'/>

    </ScrollView>
  )
}

export default Categories