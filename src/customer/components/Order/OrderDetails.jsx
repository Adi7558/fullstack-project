import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTraker from "./OrderTraker";
import { StarIcon } from "@heroicons/react/24/outline";

const OrderDetails = () => {
    return (
        <div className="px-5 lg:px-20 mb-5">
            {/* Delivery Address */}
            <div>
                <h1 className="font-bold text-xl py-6">Delivery Address</h1>
                <AddressCard />
            </div>

            {/* Order Tracker */}
            <div className="py-16">
                <OrderTraker activeStep={3} />
            </div>

            {/* Product + Review Section */}
            <div className="space-y-5">
                {[1, 1, 1, 1, 1].map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center shadow-md rounded-lg p-5 border hover:shadow-lg transition-shadow"
                    >
                        {/* Left side (Image + Details) */}
                        <div className="flex items-center">
                            <img
                                className="w-20 h-20 rounded-md object-cover object-top"
                                src="https://images.meesho.com/images/products/497534320/10g7d_512.avif?width=360"
                                alt="Product"
                            />

                            <div className="ml-5 space-y-1">
                                <p className="font-semibold text-gray-800">Men Slim</p>
                                <p className="space-x-5 text-xs text-gray-500">
                                    <span>Color: Pink</span>
                                    <span>Size: M</span>
                                </p>
                                <p className="text-sm text-gray-500">Seller: Linaria</p>
                                <p className="text-base font-bold text-green-600">₹1099</p>
                            </div>
                        </div>

                        {/* Right side (Rate & Review) */}
                        <button className="flex items-center text-purple-700 hover:text-purple-900 font-medium">
                            <StarIcon className="w-6 h-6 mr-2" />
                            <span>Rate & Review</span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderDetails;
