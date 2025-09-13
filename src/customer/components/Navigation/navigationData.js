const navigation = {
    categories: [
        {
            id: 'women',
            name: 'Women',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '/',
                    imageSrc: 'https://t3.ftcdn.net/jpg/03/61/36/20/360_F_361362088_SrD8MheIsIMKTwcO6P0WqTD9pxJY4LLM.webp',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Basic Tees',
                    href: '/',
                    imageSrc: 'https://images.meesho.com/images/products/508767698/i5qey_512.avif?width=360',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
            ],
            sections: [
                {
                    id: 'clothing',
                    name: 'Clothing',
                    items: [
                        { name: 'Tops', href: '/women/clothing/tops' },
                        { name: 'Dresses', href: '/women/clothing/dresses' },
                        { name: 'Women Jeans', href: '/women/clothing/jeans' },
                        { name: 'Lengha Choli', href: '/women/clothing/lengha-choli' },
                        { name: 'Sweaters', href: '/women/clothing/sweaters' },
                        { name: 'T-Shirts', href: '/women/clothing/t-shirts' },
                        { name: 'Jackets', href: '/women/clothing/jackets' },
                        { name: 'Gowns', href: '/women/clothing/gowns' },
                        { name: 'Sarees', href: '/women/clothing/sarees' },
                        { name: 'Kurtas', href: '/women/clothing/kurtas' },
                    ],
                },
                {
                    id: 'accessories',
                    name: 'Accessories',
                    items: [
                        { name: 'Watches', href: '/women/accessories/watches' },
                        { name: 'Wallets', href: '/women/accessories/wallets' },
                        { name: 'Bags', href: '/women/accessories/bags' },
                        { name: 'Sunglasses', href: '/women/accessories/sunglasses' },
                        { name: 'Hats', href: '/women/accessories/hats' },
                        { name: 'Belts', href: '/women/accessories/belts' },
                    ],
                },
                {
                    id: 'brands',
                    name: 'Brands',
                    items: [
                        { name: 'Full Nelson', href: '/women/brands/full-nelson' },
                        { name: 'My Way', href: '/women/brands/my-way' },
                        { name: 'Re-Arranged', href: '/women/brands/re-arranged' },
                        { name: 'Counterfeit', href: '/women/brands/counterfeit' },
                        { name: 'Significant Other', href: '/women/brands/significant-other' },
                    ],
                },
            ],
        },
        {
            id: 'men',
            name: 'Men',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '/',
                    imageSrc: 'https://nobero.com/cdn/shop/files/BeAuthentic.jpg?v=1757679594&width=360',
                    imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
                },
                {
                    name: 'Artwork Tees',
                    href: '/',
                    imageSrc: 'https://nobero.com/cdn/shop/files/1_f91742a0-d352-47f5-9b6d-7c7c34fb98cf.jpg?v=1752233248&width=360',
                    imageAlt: 'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
                },
            ],
            sections: [
                {
                    id: 'clothing',
                    name: 'Clothing',
                    items: [
                        { name: 'Mens Kurtas', href: '/men/clothing/kurtas' },
                        { name: 'Shirts', href: '/men/clothing/shirts' },
                        { name: 'Men Jeans', href: '/men/clothing/jeans' },
                        { name: 'Sweaters', href: '/men/clothing/sweaters' },
                        { name: 'T-Shirts', href: '/men/clothing/t-shirts' },
                        { name: 'Jackets', href: '/men/clothing/jackets' },
                        { name: 'Activewear', href: '/men/clothing/activewear' },
                    ],
                },
                {
                    id: 'accessories',
                    name: 'Accessories',
                    items: [
                        { name: 'Watches', href: '/men/accessories/watches' },
                        { name: 'Wallets', href: '/men/accessories/wallets' },
                        { name: 'Bags', href: '/men/accessories/bags' },
                        { name: 'Sunglasses', href: '/men/accessories/sunglasses' },
                        { name: 'Hats', href: '/men/accessories/hats' },
                        { name: 'Belts', href: '/men/accessories/belts' },
                    ],
                },
                {
                    id: 'brands',
                    name: 'Brands',
                    items: [
                        { name: 'Re-Arranged', href: '/men/brands/re-arranged' },
                        { name: 'Counterfeit', href: '/men/brands/counterfeit' },
                        { name: 'Full Nelson', href: '/men/brands/full-nelson' },
                        { name: 'My Way', href: '/men/brands/my-way' },
                    ],
                },
            ],
        },
    ],
    pages: [
        { name: 'Company', href: '/company' },
        { name: 'Stores', href: '/stores' },
    ],
}

export default navigation;
