'use client'

import { useState } from 'react'
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
import { mens_kurta } from '../../Data/mens_kurta'
import ProductCard from './ProductCard'
import { filters, singleFilter } from './FilterData'
import FilterListIcon from '@mui/icons-material/FilterList';
import { Navigate, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';


const sortOptions = [
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Product() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate();

    const handleFilter = (value, sectionId) => {
        const searchParams = new URLSearchParams(location.search);

        // Get all existing values for this filter
        const existingValues = searchParams.getAll(sectionId);

        if (existingValues.includes(value)) {
            // Remove the value if already selected
            const newValues = existingValues.filter((v) => v !== value);

            searchParams.delete(sectionId); // remove old
            newValues.forEach((v) => searchParams.append(sectionId, v)); // add remaining
        } else {
            // Add the new value
            searchParams.append(sectionId, value);
        }

        // Update the URL
        navigate(`?${searchParams.toString()}`);
    };


    // 🐞 Debug
    console.log('🔍 filters data:', filters)
    console.log('🔍 singleFilter data:', singleFilter)

    return (
        <div className="bg-white">
            {/* ================= MOBILE FILTERS ================= */}
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

                        {/* Mobile Filters Form */}
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
                                                    <span className="font-medium text-gray-900">
                                                        {section.name}
                                                    </span>
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

                            {/* Single Filters (Radios) */}
                            {singleFilter.map((section) => (
                                <div
                                    key={`mobile-single-${section.id}`}
                                    className="border-t border-gray-200 px-4 py-6"
                                >
                                    <h3 className="flow-root">
                                        <span className="font-medium text-gray-900">{section.name}</span>
                                    </h3>
                                    <div className="pt-4 space-y-4">
                                        {section.options.map((option, optionIdx) => (
                                            <div
                                                key={`mobile-single-${section.id}-${option.value}-${optionIdx}`}
                                                className="flex gap-3 items-center"
                                            >
                                                <input
                                                    onChange={() => handleFilter(option.value, section.id)}
                                                    id={`mobile-single-${section.id}-${optionIdx}`}
                                                    name={section.id}
                                                    value={option.value}
                                                    type="checkbox"
                                                    className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                                />
                                                <label
                                                    htmlFor={`mobile-single-${section.id}-${optionIdx}`}
                                                    className="text-gray-500"
                                                >
                                                    {option.label}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </form>
                    </DialogPanel>
                </div>
            </Dialog>

            {/* ================= DESKTOP FILTERS + PRODUCTS ================= */}
            <main className="mx-auto px-4 sm:px-6 lg:px-20">
                <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                        New Arrivals
                    </h1>

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

                {/* Products Section */}
                <section aria-labelledby="products-heading" className="pt-6 pb-24">
                    <h2 id="products-heading" className="sr-only">
                        Products
                    </h2>

                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
                        {/* Desktop Filters */}
                        <div>
                            <div className='py-10 flex justify-between items-centre'>
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
                                                    <PlusIcon
                                                        aria-hidden="true"
                                                        className="h-5 w-5 group-data-open:hidden"
                                                    />
                                                    <MinusIcon
                                                        aria-hidden="true"
                                                        className="h-5 w-5 group-not-data-open:hidden"
                                                    />
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
                                {mens_kurta.map((item, idx) => (
                                    <ProductCard key={idx} product={item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}