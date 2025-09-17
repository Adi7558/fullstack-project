export const filters = [
    {
        id: "category",
        name: "Category",
        options: [
            { value: "men", label: "Men" },
            { value: "women", label: "Women" },
            { value: "kids", label: "Kids" },
            { value: "electronics", label: "Electronics" },
            { value: "home-kitchen", label: "Home & Kitchen" },
        ],
    },
    {
        id: "price",
        name: "Price",
        options: [
            { value: "0-500", label: "Below ₹500" },
            { value: "500-1000", label: "₹500 - ₹1000" },
            { value: "1000-2000", label: "₹1000 - ₹2000" },
            { value: "2000+", label: "Above ₹2000" },
        ],
    },
    {
        id: "brand",
        name: "Brand",
        options: [
            { value: "Nike", label: "Nike" },
            { value: "Adidas", label: "Adidas" },
            { value: "Puma", label: "Puma" },
            { value: "Zara", label: "Zara" },
            { value: "H&M", label: "H&M" },
            { value: "Majestic Man", label: "Majestic Man" },
            { value: "SG LEMAN", label: "SG LEMAN" },
            { value: "FUBAR", label: "FUBAR" },
            { value: "ALY JOHN", label: "ALY JOHN" },
            { value: "PETER ENGLAND", label: "PETER ENGLAND" },
            { value: "WRODSS", label: "WRODSS" },
            { value: "Manthan", label: "Manthan" },
            { value: "RAHUL LOOK", label: "RAHUL LOOK" },
            { value: "FRELURO", label: "FRELURO" },
            { value: "allan peter", label: "allan peter" },
            { value: "COMBRAIDED", label: "COMBRAIDED" },
            { value: "FOLGEN", label: "FOLGEN" },
            { value: "Tap in", label: "Tap in" },
            { value: "Vida Loca", label: "Vida Loca" },
            { value: "Nofilter", label: "Nofilter" },
            { value: "KSH Trendz", label: "KSH Trendz" },
            { value: "ARMAAN ETHNIC", label: "ARMAAN ETHNIC" },
            { value: "DEEMOON", label: "DEEMOON" },
            { value: "More & More", label: "More & More" }
        ],
    },
    {
        id: "color",
        name: "Color",
        options: [
            { value: "black", label: "Black" },
            { value: "white", label: "White" },
            { value: "blue", label: "Blue" },
            { value: "red", label: "Red" },
            { value: "green", label: "Green" },
        ],
    },
    {
        id: "size",
        name: "Size",
        options: [
            { value: "s", label: "S" },
            { value: "m", label: "M" },
            { value: "l", label: "L" },
            { value: "xl", label: "XL" },
            { value: "xxl", label: "XXL" },
        ],
    },
    {
        id: "discount",
        name: "Discount",
        options: [
            { value: "10", label: "10% and above" },
            { value: "20", label: "20% and above" },
            { value: "30", label: "30% and above" },
            { value: "40", label: "40% and above" },
            { value: "50", label: "50% and above" },
        ],
    },


];

// ✅ singleFilter for radio buttons (like "Sort By")
export const singleFilter = [
    {
        id: "sort",
        name: "Sort By",
        options: [
            { value: "newest", label: "Newest" },
            { value: "price-low-high", label: "Price: Low to High" },
            { value: "price-high-low", label: "Price: High to Low" },
            { value: "discount", label: "Discount" },
        ],
    },
];