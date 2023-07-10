import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCards from './CategoryCards'
import { PRODUCTS } from '../products'

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
      
      <CategoryCards 
        imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK2lkpgkGDMOAMfVtfmW-qiRZ-Xt9S_wiLxw&usqp=CAU' 
        title='testing1'/>
      <CategoryCards
        imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK2lkpgkGDMOAMfVtfmW-qiRZ-Xt9S_wiLxw&usqp=CAU' 
        title='testing2'/>
      <CategoryCards 
      imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK2lkpgkGDMOAMfVtfmW-qiRZ-Xt9S_wiLxw&usqp=CAU' 
        title='testing3'/>
      <CategoryCards 
        imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK2lkpgkGDMOAMfVtfmW-qiRZ-Xt9S_wiLxw&usqp=CAU' 
        title='testing4'/>
      <CategoryCards 
        imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK2lkpgkGDMOAMfVtfmW-qiRZ-Xt9S_wiLxw&usqp=CAU' 
        title='testing5'/>
      <CategoryCards 
        imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK2lkpgkGDMOAMfVtfmW-qiRZ-Xt9S_wiLxw&usqp=CAU' 
        title='testing6'/>
      <CategoryCards 
        imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK2lkpgkGDMOAMfVtfmW-qiRZ-Xt9S_wiLxw&usqp=CAU' 
        title='testing7'/>

    </ScrollView>
  )
}

export default Categories