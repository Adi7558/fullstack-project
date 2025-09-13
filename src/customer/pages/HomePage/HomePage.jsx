import React from "react";
import MainCaurosel from "../../components/HomeCaurosel/MainCaurosel";
import HomeSectionCarousel from "../../components/HomeSectionCaurosel/HomeSectionCaurosel";
import { mens_kurta } from "../../Data/mens_kurta";

const HomePage = () => {
    return (
        <div>
            <MainCaurosel />
            <div className="space-y-10 py-20 flex flex-col justify-centre px-5 lg:px-10">
                <HomeSectionCarousel data={mens_kurta} SectionName={"Men's Kurta"} />
                <HomeSectionCarousel data={mens_kurta} SectionName={"Men's Shoes"} />
                <HomeSectionCarousel data={mens_kurta} SectionName={"Men's Shirt"} />
                <HomeSectionCarousel data={mens_kurta} SectionName={"Women's Saree"} />
                <HomeSectionCarousel data={mens_kurta} SectionName={"Women's Dress"} />
            </div>
        </div>



    )
}

export default HomePage;