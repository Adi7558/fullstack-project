import React, { useState } from "react";
import MainCaurosel from "../../components/HomeCaurosel/MainCaurosel";
import HomeSectionCarousel from "../../components/HomeSectionCaurosel/HomeSectionCaurosel";
import { mens_kurta } from "../../Data/mens_kurta";
import { mensShoesPage1 } from "../../Data/mens_shoes";
import Login from "../../components/Auth/Login";
import SignUp from "../../components/Auth/SignUp";
import mens_shirt from "../../Data/mens_shirt.json"
import { sareePage1 } from "../../Data/Saree";
import women_dress from "../../Data/women_dress.json";

const HomePage = () => {
    const [showAuth, setShowAuth] = useState(null);
    // null → no form, "login" → Login, "signup" → SignUp

    return (
        <div>
            <MainCaurosel />

            {/* ✅ Auth Modals */}
            {showAuth === "login" && (
                <Login switchToSignUp={() => setShowAuth("signup")} closeModal={() => setShowAuth(null)} />
            )}
            {showAuth === "signup" && (
                <SignUp switchToLogin={() => setShowAuth("login")} closeModal={() => setShowAuth(null)} />
            )}

            {/* ✅ Product Sections */}
            <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
                <HomeSectionCarousel data={mens_kurta} SectionName={"Men's Kurta"} />
                <HomeSectionCarousel data={mensShoesPage1} SectionName={"Men's Shoes"} />
                <HomeSectionCarousel data={mens_shirt} SectionName={"Men's Shirt"} />
                <HomeSectionCarousel data={sareePage1} SectionName={"Women's Saree"} />
                <HomeSectionCarousel data={women_dress} SectionName={"Women's Dress"} />
            </div>
        </div>
    );
};

export default HomePage;
