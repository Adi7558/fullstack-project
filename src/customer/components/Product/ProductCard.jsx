import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    if (!product) return null;
    return (
        <div onClick={() => navigate("/product/details", { state: { product } })} className="productCard w-[15rem] m-3 transition-all cursor-pointer border rounded-lg shadow-md">
            {/* Product Image */}
            <div className="h-[23rem]">
                <img
                    className="h-full w-full object-cover object-left-top"
                    src={product.imageUrl}
                    alt={product.title || "Product"}
                />
            </div>

            {/* Product Details */}
            <div className="textPart bg-white p-3">
                <div>
                    <p className="font-bold opacity-60">{product.brand}</p>
                    <p className="text-sm">{product.title}</p>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                    <p className="font-semibold">₹{product.discountedPrice}</p>
                    <p className="line-through opacity-50">₹{product.price}</p>
                    <p className="text-green-600 font-semibold">
                        {product.discountPersent}% off
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
