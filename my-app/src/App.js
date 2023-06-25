import './App.css';
import React, { useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from  "./components/navbar"
// import { ShopContext } from './context/shop-context';
import { Cart } from"./pages/cart/cart"
import { Shop } from "./pages/shop/shop"
import { ShopContextProvider } from './context/shop-context';
// import { Alert } from '@mui/material';


function App() {
const [backendData, setBackendData] = useState([{}])
useEffect(() => {
  fetch("/api").then(
    response => response.json()
  ).then(
    data => {
      setBackendData(data)
    }
  )
}, [])

console.log("I'm here")
backendData.products.map(product => console.log(product.productName));

  return <div className="App">
    <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </Router>
    </ShopContextProvider>
  </div>;
}

export default App;
