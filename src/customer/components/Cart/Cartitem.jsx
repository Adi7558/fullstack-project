import React from "react";
import { IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import Button from "@mui/material/Button";

const CartItem = () => {
    return (
        <div className="p-5 shadow-lg border rounded-md">
            <div className="flex items-center">

                <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
                    <img className="w-full h-full object-cover object-top" src="https://images.meesho.com/images/products/497534320/10g7d_512.avif?width=360" alt="" />
                </div>

                <div className="ml-5 space-y-1">
                    <p className="font-semibold">FTX Men's Baggy Light Blue Jeans</p>
                    <p className="opacity-70">Sizes: 34 (Waist Size : 34 in, Length Size: 40 in, Hip Size: 50 in)</p>
                    <p className="opacity-70 mt-2">Seller:Denim</p>

                    <div className='flex space-x-5 items-centre  text-gray-900 pt-6'>
                        <p className='font-semibold'>$192</p>
                        <p className='opacity-50 line-through'>$211</p>
                        <p className='text-green-600 font-semibold'>5 % off</p>
                    </div>
                </div>
            </div>
            <div className="lg:flex items-centre lg:space-x-10 pt-4">
                <div className="flex items-centre space-x-2">
                    <IconButton>
                        <RemoveCircleOutlineIcon />
                    </IconButton>

                    <span className="py-1 px-7 border rounded-sm">3</span>
                    <IconButton sx={{ color: "RGB(145 85 253)" }}>
                        <AddCircleOutlineIcon />
                    </IconButton>

                </div>

                <div>
                    <Button sx={{ color: "RGB(145 85 253)" }}>remove</Button>
                </div>
            </div>
        </div >
    )
}

export default CartItem;