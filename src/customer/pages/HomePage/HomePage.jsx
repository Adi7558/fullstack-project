import React, { useState } from "react";
import MainCaurosel from "../../components/HomeCaurosel/MainCaurosel";
import HomeSectionCarousel from "../../components/HomeSectionCaurosel/HomeSectionCaurosel";
import { mens_kurta } from "../../Data/mens_kurta";
import Login from "../../components/Auth/Login";
import SignUp from "../../components/Auth/SignUp";

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
                <HomeSectionCarousel data={mens_kurta} SectionName={"Men's Shoes"} />
                <HomeSectionCarousel data={mens_kurta} SectionName={"Men's Shirt"} />
                <HomeSectionCarousel data={mens_kurta} SectionName={"Women's Saree"} />
                <HomeSectionCarousel data={mens_kurta} SectionName={"Women's Dress"} />
            </div>
        </div>
    );
};

export default HomePage;
