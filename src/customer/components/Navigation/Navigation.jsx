'use client'

import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'

import navigation from './navigationData'


export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false);


  console.log('navigation:', navigation);

  return (
    <div className="bg-white">

      <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
        Get free delivery on orders over $100
      </p>
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear" />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out">
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Tabs */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation?.categories?.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>

              <TabPanels as={Fragment}>
                {navigation?.categories?.map((category) => (
                  <TabPanel key={category.name} className="space-y-10 px-4 pt-10 pb-8">
                    <div className="grid grid-cols-2 gap-x-4">
                      {category?.featured?.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                          />
                          <Link to={item.href} className="mt-6 block font-medium text-gray-900">
                            {item.name}
                          </Link>
                          <p className="mt-1">Shop now</p>
                        </div>
                      ))}
                    </div>

                    {category?.sections?.map((section) => (
                      <div key={section.name}>
                        <p className="font-medium text-gray-900">{section.name}</p>
                        <ul className="mt-6 flex flex-col space-y-6">
                          {section?.items?.map((item) => (
                            <li key={item.name} className="flow-root">
                              <Link to={item.href} className="-m-2 block p-2 text-gray-500">
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            {/* Extra Pages */}
            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation?.pages?.map((page) => (
                <div key={page.name} className="flow-root">
                  <Link to={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                    {page.name}
                  </Link>
                </div>
              ))}
            </div>

            {/* Mobile Sign In / Create Account */}
            <div className="border-t border-gray-200 px-4 py-6">
              <Link
                to="/signin"
                className="-m-2 block p-2 font-medium text-gray-900"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="-m-2 block p-2 font-medium text-gray-900 mt-2"
              >
                Create Account
              </Link>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Desktop Navigation */}
      <header className="relative bg-white">

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to="/">
                  <span className="sr-only">Your Company</span>
                  <img
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Logo"
                    className="h-8 w-auto"
                  />
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="flex lg:hidden ml-2">
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Categories */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation?.categories?.map((category) => (
                    <Popover key={category.name} className="flex">
                      <div className="relative flex">
                        <PopoverButton className="group relative flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-800">
                          {category.name}
                        </PopoverButton>
                      </div>
                      <PopoverPanel className="absolute inset-x-0 top-full z-20 w-full bg-white text-sm text-gray-500">
                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                {category?.featured?.map((item) => (
                                  <div key={item.name} className="group relative text-base sm:text-sm">
                                    <img
                                      src={item.imageSrc}
                                      alt={item.imageAlt}
                                      className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                                    />
                                    <Link to={item.href} className="mt-6 block font-medium text-gray-900">
                                      {item.name}
                                    </Link>
                                    <p className="mt-1">Shop now</p>
                                  </div>
                                ))}
                              </div>

                              <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                {category?.sections?.map((section) => (
                                  <div key={section.name}>
                                    <p className="font-medium text-gray-900">{section.name}</p>
                                    <ul className="mt-6 space-y-6">
                                      {section?.items?.map((item) => (
                                        <li key={item.name} className="flex">
                                          <Link to={item.href} className="hover:text-gray-800">
                                            {item.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  ))}

                  {/* Extra Pages */}
                  {navigation?.pages?.map((page) => (
                    <Link
                      key={page.name}
                      to={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </PopoverGroup>

              {/* Right Side (Cart + Sign In / Create Account) */}
              <div className="ml-auto flex items-center space-x-4">
                {/* Sign In / Create Account */}
                <Link
                  to="/signin"
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Create Account
                </Link>

                {/* Cart Icon */}
                <Link to="/cart" className="group -m-2 flex items-center p-2">
                  <ShoppingBagIcon className="h-6 w-6 text-gray-400 group-hover:text-gray-500" />
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    0
                  </span>
                </Link>

                {/* User Profile Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setProfileOpen(!profileOpen)}
                    className="flex items-center focus:outline-none"
                  >
                    <img
                      src="https://i.pravatar.cc/40" // replace with your profile image URL
                      alt="Profile"
                      className="w-10 h-10 rounded-full object-cover border-2 border-indigo-600"
                    />
                  </button>

                  {profileOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-50">
                      <button
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100"
                        onClick={() => console.log("Go to Profile")}
                      >
                        Profile
                      </button>
                      <Link
                        to="/account/order"
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100"
                      >
                        My Orders
                      </Link>
                      <button
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100"
                        onClick={() => console.log("Logout")}
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
