import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import Navigation from "../Navigation/Navigation";
import Footer from "../../footer/footer";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import Checkout from "../Checkout/Checkout";
import ProductDetails from "../ProductDetails/ProductDetails";
import Order from "../Order/Order";
import OrderDetails from "../Order/OrderDetails";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";  // ✅ import Signin


const CustomerRouters = () => {
    return (
        <div>
            <div>
                <Navigation />
            </div>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
                <Route path="/product/details" element={<ProductDetails />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/account/order" element={<Order />} />
                <Route path="/account/order/:orderId" element={<OrderDetails />} />

                {/* ✅ New Auth Routes */}
                <Route path="/signin" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>

            <div>
                <Footer />
            </div>
        </div>
    );
};

// ✅ export it
export default CustomerRouters;
