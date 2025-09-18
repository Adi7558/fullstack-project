'use client'

import { useState, useMemo, useEffect } from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import {
    ChevronDownIcon,
    FunnelIcon,
    MinusIcon,
    PlusIcon,
    Squares2X2Icon,
} from '@heroicons/react/20/solid'

// 🔹 Import all JSON datasets
import women_jeans from '../../Data/women_jeans.json'
import women_dresses from '../../Data/women_dresses.json'
import women_lenghaCholi from '../../Data/LehngaCholi.json'
import women_top from '../../Data/women_top.json'
import { gounsPage1 } from '../../Data/womens_gouns.js'
import { kurtaPage1 } from '../../Data/womens_kurta.js'
// import women_tshirts from '../../Data/women_tshirts.json'  // ❌ missing
// import women_jackets from '../../Data/women_jackets.json'  // ❌ missing
import { sareePage1 } from '../../Data/Saree.js'
import { mens_kurta } from '../../Data/mens_kurta.js'
import mens_jeans from "../../Data/mens_jeans.json"
import mens_shirt from "../../Data/mens_shirt.json"
// import men_sweaters from '../../Data/men_sweaters.json'  // ❌ missing
// import men_tshirts from '../../Data/men_tshirts.json'    // ❌ missing
// import men_jackets from '../../Data/men_jackets.json'    // ❌ missing
// import men_activewear from '../../Data/men_activewear.json'  // ❌ missing


import ProductCard from './ProductCard'
import { filters } from './FilterData'
import FilterListIcon from '@mui/icons-material/FilterList';
import { useNavigate, useLocation, useParams } from 'react-router-dom'

const sortOptions = [
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

// 🔹 Mapping of categories to JSON files
const productDataMap = {
    women: {
        jeans: women_jeans,
        dresses: women_dresses,
        tops: women_top,
        'lengha-choli': women_lenghaCholi,
        // 't-shirts': women_tshirts,
        // jackets: women_jackets,
        gowns: gounsPage1,
        sarees: sareePage1,
        kurtas: kurtaPage1,
    },
    men: {
        kurtas: mens_kurta,
        shirts: mens_shirt,
        jeans: mens_jeans,
        // sweaters: men_sweaters,
        // 't-shirts': men_tshirts,
        // jackets: men_jackets,
        // activewear: men_activewear,
    },
}

export default function Product() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const productsPerPage = 8

    const location = useLocation()
    const navigate = useNavigate()
    const { levelOne, levelTwo, levelThree } = useParams()

    // 🔹 Get correct dataset from map
    const data = productDataMap[levelOne]?.[levelThree] || []

    // 🔹 Read search params
    const readSearchParams = () => {
        const sp = new URLSearchParams(location.search)
        const getAllCombined = (key) => [
            ...sp.getAll(key),
            ...sp.getAll(`${key}[]`)
        ]
        return { sp, getAllCombined }
    }

    // 🔹 Handle filter changes
    const handleFilter = (value, sectionId) => {
        const searchParams = new URLSearchParams(location.search);
        const existing = [
            ...searchParams.getAll(sectionId),
            ...searchParams.getAll(`${sectionId}[]`)
        ];

        const valueLower = String(value).trim().toLowerCase()

        if (existing.map(v => v.toLowerCase()).includes(valueLower)) {
            const newValues = existing.filter((v) => v.toLowerCase() !== valueLower)
            searchParams.delete(sectionId)
            searchParams.delete(`${sectionId}[]`)
            newValues.forEach((v) => searchParams.append(sectionId, v.toLowerCase()))
        } else {
            searchParams.append(sectionId, valueLower)
        }

        const q = searchParams.toString()
        if (q) navigate(`${location.pathname}?${q}`)
        else navigate(location.pathname)
    }

    const { getAllCombined } = readSearchParams()
    const selectedColors = getAllCombined('color').map((v) => v.trim().toLowerCase())
    const selectedPrices = getAllCombined('price').map((v) => v.trim())
    const selectedSizes = getAllCombined('size').map((v) => v.trim().toLowerCase())
    const selectedBrands = getAllCombined('brand').map((v) => v.trim().toLowerCase())
    const selectedDiscounts = getAllCombined('discount').map((v) => Number(v.trim()))

    // 🔹 Reset page when filters change
    useEffect(() => {
        setCurrentPage(1)
    }, [location.search])

    // 🔹 Check if a filter is selected
    const isChecked = (sectionId, value) => {
        const all = getAllCombined(sectionId).map((v) => String(v).trim().toLowerCase())
        return all.includes(String(value).trim().toLowerCase())
    }

    // 🔹 Filter products
    const filteredProducts = useMemo(() => {
        return data.filter((product) => {
            let matches = true

            if (selectedColors.length > 0) {
                matches = matches && selectedColors.some((c) =>
                    String(product.color || '').trim().toLowerCase() === c
                )
            }

            if (selectedPrices.length > 0) {
                matches = matches && selectedPrices.some((range) => {
                    const [minRaw, maxRaw] = range.split('-').map((x) => x?.trim())
                    const min = Number(minRaw ?? 0)
                    const max = Number(maxRaw ?? Infinity)
                    const value = Number(product.discountedPrice ?? product.price ?? 0)
                    if (Number.isNaN(min) || Number.isNaN(max) || Number.isNaN(value)) return false
                    return value >= min && value <= max
                })
            }

            if (selectedSizes.length > 0) {
                matches = matches && Array.isArray(product.size) &&
                    selectedSizes.some((selSize) => {
                        const sel = String(selSize).trim().toLowerCase()
                        return product.size.some((sizeObj) => {
                            const prodSize = typeof sizeObj === 'string'
                                ? sizeObj.trim().toLowerCase()
                                : String(sizeObj?.name ?? '').trim().toLowerCase()
                            return prodSize === sel
                        })
                    })
            }

            if (selectedBrands.length > 0) {
                matches = matches && selectedBrands.includes(String(product.brand || '').trim().toLowerCase())
            }

            if (selectedDiscounts.length > 0) {
                matches = matches && selectedDiscounts.some((discount) => Number(product.discountPersent ?? 0) >= discount)
            }

            return matches
        })
    }, [location.search, location.pathname, data])

    // 🔹 Pagination logic
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
    const paginatedProducts = useMemo(() => {
        const start = (currentPage - 1) * productsPerPage
        const end = start + productsPerPage
        return filteredProducts.slice(start, end)
    }, [filteredProducts, currentPage])

    return (
        <div className="bg-white">
            {/* MOBILE FILTERS */}
            <Dialog
                open={mobileFiltersOpen}
                onClose={setMobileFiltersOpen}
                className="relative z-40 lg:hidden"
            >
                <DialogBackdrop className="fixed inset-0 bg-black/25" />
                <div className="fixed inset-0 z-40 flex">
                    <DialogPanel className="ml-auto max-w-xs flex w-full flex-col overflow-y-auto bg-white pt-4 pb-6 shadow-xl">
                        <div className="flex items-center justify-between px-4">
                            <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                            <button
                                type="button"
                                onClick={() => setMobileFiltersOpen(false)}
                                className="relative -mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>

                        <form className="mt-4 border-t border-gray-200">
                            {filters.map((section) => (
                                <Disclosure
                                    as="div"
                                    key={`mobile-${section.id}`}
                                    className="border-t border-gray-200 px-4 py-6"
                                >
                                    {({ open }) => (
                                        <>
                                            <h3 className="-mx-2 -my-3 flow-root">
                                                <DisclosureButton className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                    <span className="font-medium text-gray-900">{section.name}</span>
                                                    <span className="ml-6 flex items-center">
                                                        {open ? (
                                                            <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                                        ) : (
                                                            <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                                        )}
                                                    </span>
                                                </DisclosureButton>
                                            </h3>
                                            <DisclosurePanel className="pt-6">
                                                <div className="space-y-6">
                                                    {section.options.map((option, optionIdx) => (
                                                        <div
                                                            key={`mobile-${section.id}-${option.value}-${optionIdx}`}
                                                            className="flex items-center"
                                                        >
                                                            <input
                                                                id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                name={`${section.id}[]`}
                                                                defaultValue={option.value}
                                                                type="checkbox"
                                                                checked={isChecked(section.id, option.value)}
                                                                onChange={() => handleFilter(option.value, section.id)}
                                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                            />
                                                            <label
                                                                htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                                className="ml-3 min-w-0 flex-1 text-gray-500"
                                                            >
                                                                {option.label}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure>
                            ))}
                        </form>
                    </DialogPanel>
                </div>
            </Dialog>

            {/* DESKTOP FILTERS + PRODUCTS */}
            <main className="mx-auto px-4 sm:px-6 lg:px-20">
                <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

                    <div className="flex items-center">
                        <Menu as="div" className="relative inline-block text-left">
                            <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                Sort
                                <ChevronDownIcon
                                    aria-hidden="true"
                                    className="-mr-1 ml-1 h-5 w-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                                />
                            </MenuButton>

                            <MenuItems className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none">
                                <div className="py-1">
                                    {sortOptions.map((option) => (
                                        <MenuItem key={option.name}>
                                            <a
                                                href={option.href}
                                                className={classNames(
                                                    option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                {option.name}
                                            </a>
                                        </MenuItem>
                                    ))}
                                </div>
                            </MenuItems>
                        </Menu>

                        <button
                            type="button"
                            className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                        >
                            <span className="sr-only">View grid</span>
                            <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                        </button>

                        <button
                            type="button"
                            onClick={() => setMobileFiltersOpen(true)}
                            className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                        >
                            <span className="sr-only">Filters</span>
                            <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                </div>

                <section aria-labelledby="products-heading" className="pt-6 pb-24">
                    <h2 id="products-heading" className="sr-only">Products</h2>

                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
                        {/* Desktop Filters */}
                        <div>
                            <div className='py-10 flex justify-between items-center'>
                                <h1 className="text-lg opacity-50 font-bold">Filters</h1>
                                <FilterListIcon />
                            </div>
                            <form className="hidden lg:block">
                                {filters.map((section) => (
                                    <Disclosure
                                        key={`desktop-${section.id}`}
                                        as="div"
                                        className="border-b border-gray-200 py-6"
                                    >
                                        <h3 className="-my-3 flow-root">
                                            <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                <span className="font-medium text-gray-900">{section.name}</span>
                                                <span className="ml-6 flex items-center">
                                                    <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-open:hidden" />
                                                    <MinusIcon aria-hidden="true" className="h-5 w-5 group-not-data-open:hidden" />
                                                </span>
                                            </DisclosureButton>
                                        </h3>

                                        <DisclosurePanel className="pt-6">
                                            <div className="space-y-4">
                                                {section.options.map((option, optionIdx) => (
                                                    <div
                                                        key={`desktop-${section.id}-${option.value}-${optionIdx}`}
                                                        className="flex gap-3 items-center"
                                                    >
                                                        <input
                                                            id={`filter-${section.id}-${optionIdx}`}
                                                            name={section.id}
                                                            value={option.value}
                                                            type="checkbox"
                                                            checked={isChecked(section.id, option.value)}
                                                            onChange={() => handleFilter(option.value, section.id)}
                                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                        />
                                                        <label
                                                            htmlFor={`filter-${section.id}-${optionIdx}`}
                                                            className="text-sm text-gray-600"
                                                        >
                                                            {option.label}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </DisclosurePanel>
                                    </Disclosure>
                                ))}
                            </form>
                        </div>

                        {/* Product Grid */}
                        <div className="lg:col-span-4 w-full">
                            <div className="flex flex-wrap justify-center bg-white py-5">
                                {paginatedProducts.length > 0 ? (
                                    paginatedProducts.map((item, idx) => (
                                        <ProductCard key={idx} product={item} />
                                    ))
                                ) : (
                                    <p className="text-gray-500 text-lg font-medium">No products found</p>
                                )}
                            </div>

                            {/* Pagination Controls */}
                            {totalPages > 1 && (
                                <div className="flex justify-center mt-6 space-x-2">
                                    <button
                                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                        disabled={currentPage === 1}
                                        className="px-3 py-1 border rounded disabled:opacity-50"
                                    >
                                        Prev
                                    </button>

                                    {[...Array(totalPages)].map((_, idx) => {
                                        const page = idx + 1
                                        return (
                                            <button
                                                key={page}
                                                onClick={() => setCurrentPage(page)}
                                                className={`px-3 py-1 border rounded ${currentPage === page ? 'bg-indigo-600 text-white' : ''}`}
                                            >
                                                {page}
                                            </button>
                                        )
                                    })}

                                    <button
                                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                        disabled={currentPage === totalPages}
                                        className="px-3 py-1 border rounded disabled:opacity-50"
                                    >
                                        Next
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
