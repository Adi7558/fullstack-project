import React from "react";
import { Button, Box, TextField } from "@mui/material";
import AddressCard from "../AddressCard/AddressCard";

const DeliveryAddressForm = (e) => {


    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        const data = new FormData(e.currentTarget);
        const address = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            address: data.get("address"),
            city: data.get("city"),
            state: data.get("state"),
            zip: data.get("zip"),
            phone: data.get("phone"),
        };
        console.log("address", address); // ✅ should now print
    };

    return (
        <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Section */}
            <div className="w-full lg:w-5/12 border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
                <div className="p-5 py-7 border-b cursor-pointer">
                    <AddressCard />
                    <Button sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }} size="large" variant="contained">
                        Delivere Here
                    </Button>
                </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-7/12">
                <Box className="border rounded-s-md shadow-md p-5">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* First Name */}
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="First Name"
                                fullWidth
                                autoComplete="given-name"
                            />

                            {/* Last Name */}
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Last Name"
                                fullWidth
                                autoComplete="family-name"
                            />

                            {/* Address (full width) */}
                            <TextField
                                required
                                id="address"
                                name="address"
                                label="Address"
                                fullWidth
                                autoComplete="street-address"
                                multiline
                                rows={3}
                                className="sm:col-span-2"
                            />

                            {/* City */}
                            <TextField
                                required
                                id="city"
                                name="city"
                                label="City"
                                fullWidth
                                autoComplete="address-level2"
                            />

                            {/* State */}
                            <TextField
                                required
                                id="state"
                                name="state"
                                label="State"
                                fullWidth
                            />

                            {/* Zip Code */}
                            <TextField
                                required
                                id="zip"
                                name="zip"
                                label="Zip Code"
                                fullWidth
                            />

                            {/* Phone Number */}
                            <TextField
                                required
                                id="phone"
                                name="phone"
                                label="Phone Number"
                                fullWidth
                            />
                        </div>

                        {/* Deliver Here Button */}
                        <Button sx={{ py: 1.5, mt: 2, bgcolor: "RGB(145 85 253)" }} size="large" variant="contained" type="submit">
                            Delivere Here
                        </Button>
                    </form>
                </Box>
            </div>


        </div>
    );
};

export default DeliveryAddressForm;
