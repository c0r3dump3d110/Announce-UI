import React, { useState } from 'react'

export default function Navbar() {

    const [navbarOpen, setNavbarOpen] = useState("");

    return (
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-sky-500/100 mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <a
                        className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                    >
                        SmartWalkability ADS
                    </a>
                    <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <div
                    className={
                        "lg:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        {[
                            ['Home', '/dashboard'],
                            ['Team', '/team'],
                            ['Projects', '/projects'],
                            ['Reports', '/reports'],
                        ].map(([title, url]) => (

                            <li className="nav-item">
                                <a
                                    href={url}
                                    className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                                >
                                    <i className="text-lg leading-lg text-white opacity-75"></i><span className="ml-2">{title}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
