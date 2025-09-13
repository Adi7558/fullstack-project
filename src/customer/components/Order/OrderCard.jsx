import React from 'react';
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/account/order/${5}`)} className="p-5 shadow-lg shadow-black hover:shadow-2xl rounded-xl">
            <div className="flex justify-between items-center gap-6">

                {/* Left Section - Product Image & Info */}
                <div className="flex items-center cursor-pointer w-1/3">
                    <img
                        className="w-[5rem] h-[5rem] object-cover object-top rounded-md"
                        src="https://images.meesho.com/images/products/497534320/10g7d_512.avif?width=360"
                        alt="Product"
                    />
                    <div className="ml-4 space-y-1">
                        <p className="font-medium">Men</p>
                        <p className="opacity-50 text-xs font-semibold">Size: M</p>
                        <p className="opacity-50 text-xs font-semibold">Color: Black</p>
                    </div>
                </div>

                {/* Middle Section - Price */}
                <div className="w-1/6 text-center -mt-9">
                    <p className="font-semibold text-lg">₹1099</p>
                </div>

                {/* Right Section - Status */}
                <div className="w-1/2 text-right -mt-9  pr-8">
                    <div className="space-y-1">
                        <p className="flex items-center justify-end text-sm">
                            <AdjustIcon
                                sx={{ width: "15px", height: "15px" }}
                                className="text-green-600 mr-2"
                            />
                            <span>Delivered on March 03</span>
                        </p>
                        <p className="text-xs text-gray-600">
                            Your Item Has Been Delivered
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;
