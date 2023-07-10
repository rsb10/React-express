import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const counterSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id)
      
      newBasket = [...state.items]
      console.log("in basketslice")
      console.log(index)
      if (index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload.id}) as its not in your basket` 
        )
        console.log(newBasket)
      }

      state.items = newBasket;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = counterSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemWithId = (state, id) =>
  state.basket.items.filter(item => item.id === id)

export const selectBasketTotal = (state) => 
  state.basket.items.reduce((total, item) => total += item.price, 0)

export default counterSlice.reducer