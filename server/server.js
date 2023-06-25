const express = require('express')
const app = express()

app.get("/api", (req, res) =>{
    res.json(
        { "products": 
            [
                {
                    id: 1,
                    productName: "IPhone",
                    price: 999.0,
                    productImage: "./assets/products/1.png",
                },
                {
                    id: 2,
                    productName: "Macbook Pro 2022 (M1)",
                    price: 1999.0,
                    productImage: "./assets/products/2.png",
                },
                {
                    id: 3,
                    productName: "Cannon M50 Camera",
                    price: 699.0,
                    productImage: "./assets/products/3.png",
                },
                {
                    id: 4,
                    productName: "WLS Van Gogh Denim Jacket",
                    price: 228.0,
                    productImage: "./assets/products/4.png",
                },
                {
                    id: 5,
                    productName: "LED Light Strips",
                    price: 19.99,
                    productImage: "./assets/products/5.png",
                },
                {
                    id: 6,
                    productName: "SPECTRUM LS TEE",
                    price: 68.0,
                    productImage: "./assets/products/6.png",
                },
                {
                    id: 7,
                    productName: "AUTO SERVICE SHIRT by GOLF WANG",
                    price: 120.0,
                    productImage: "./assets/products/7.png",
                },
                {
                    id: 8,
                    productName: "DON'T TRIP UNSTRUCTURED HAT",
                    price: 40.0,
                    productImage: "./assets/products/8.png",
                }
            ]
        })
})

app.listen(5000, ()=> {console.log("Server started on port 5000") })