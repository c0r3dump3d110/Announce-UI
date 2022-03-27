import React from 'react'
import { NavLink } from 'react-router-dom'
import { backgroundColor } from 'tailwindcss/defaultTheme'

export default function AdminNav() {

    const user = {
        name: JSON.parse(localStorage.getItem('organisation')).name,
        email: JSON.parse(localStorage.getItem('organisation')).email,
        imageUrl:
            `https://avatars.dicebear.com/api/initials/${JSON.parse(localStorage.getItem('organisation')).name}.svg`,
    }
    const navigation = [
        { name: 'Home', href: '/', current: true },
        { name: 'Announcements', href: '/Announcments', current: false },
        { name: 'Sites', href: '#', current: false },
        { name: 'New Announcment', href: '/createAnnouncement', current: false },
        { name: 'New Site', href: '/createSite', current: false }
    ]

    const userNavigation = [
        { name: 'Your Profile', href: '#' },
        { name: 'Settings', href: '#' },
        // { name: 'Sign out', href: '#' },
    ]

    return (
        <nav style={{ backgroundColor: "#111827" }} class="border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-800">
            <div class="container flex flex-wrap justify-between items-center mx-auto max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <a href="/" class="flex items-center">
                    <img src={user.imageUrl} class="mr-3 h-6 sm:h-9" alt={user.name} />
                    <span style={{ color: "white" }} class="self-center text-xl font-semibold whitespace-nowrap white:text-white">{user.name}</span>
                </a>
                <div class="flex items-center md:order-2">
                    <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" type="button" data-dropdown-toggle="dropdown">
                        <span class="sr-only">Open user menu</span>
                        <img class="w-8 h-8 rounded-full" src={user.imageUrl} alt="user photo" />
                    </button>
                    {/* <!-- Dropdown menu --> */}
                    <div class="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown">
                        <div class="py-3 px-4">
                            <span class="block text-sm text-gray-900 dark:text-white">{user.name}</span>
                            <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{user.email}</span>
                        </div>
                        <ul class="py-1" aria-labelledby="dropdown">

                            {userNavigation.map((item) => (
                                <li>
                                    <a href={item.href} class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">{item.name}</a>
                                </li>
                            ))}
                            <li>
                                <a onClick={(e) => {
                                    e.preventDefault();
                                    localStorage.clear();
                                    window.location.href = '/'
                                }} href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign Out </a>
                            </li>
                        </ul>
                    </div>
                    <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                    <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">

                        {navigation.map((item) => (
                            <li>
                                <NavLink
                                    activeStyle={{ color:'red' }}
                                    style={{ color: "white" }}
                                    to={item.href}
                                    >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
