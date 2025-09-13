import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import Navigation from "../Navigation/Navigation";
import Footer from "../../footer/footer";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import Checkout from "../Checkout/Checkout"
import ProductDetails from "../ProductDetails/ProductDetails";
import Order from "../Order/Order"
import OrderDetails from "../Order/OrderDetails"; // ✅ use a different name

const CustomerRouters = () => {
    return (
        <div>
            <div>
                <Navigation />
            </div>

            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
                <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
                <Route path="/product/details" element={<ProductDetails />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/account/order" element={<Order />} />
                <Route path="/account/order/:orderId" element={<OrderDetails />} />

            </Routes>

            <div>
                <Footer />
            </div>

        </div >
    )
}


// Make sure you have this at the bottom
export default CustomerRouters;
