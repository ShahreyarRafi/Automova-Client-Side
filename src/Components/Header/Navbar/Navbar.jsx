import React, { useState } from 'react';
import logoWhite from '/AUTOMOVA_WHITE.png'
import { NavLink } from 'react-router-dom';
import userPicPlaceholder from '../../../assets/images/userPicPlaceHolder.png'

import { useContext } from "react";
import { AuthContext } from "../../../services/Firebase/AuthProvider";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }

    
    return (
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black font-primary ">
            <div className="w-full px-7 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex items-center justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <div className='flex items-center gap-4 mr-5'>
                        <img className='w-16' src={logoWhite} alt="" />
                        <a
                            className="text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                            href="/"
                        >
                            AUTOMOVA
                        </a>
                    </div>
                    <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <details >
                            <summary>

                            </summary>
                        </details>
                    </button>
                </div>
                <div
                    className={
                        "lg:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <div className='w-full flex justify-between items-center'>
                        <div>
                            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto gap-5">

                                <li className="nav-item px-3 py-2 flex items-center text-base uppercase font-semibold leading-snug text-white hover:opacity-75">
                                    <NavLink
                                        to="/"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#FF9D00]" : ""
                                        }
                                    >
                                        HOME
                                    </NavLink>
                                </li>

                                {user ? (
                                    <li className="nav-item px-3 py-2 flex items-center text-base uppercase font-semibold leading-snug text-white hover:opacity-75">
                                        <NavLink
                                            to="/test-1"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-[#FF9D00]" : ""
                                            }
                                        >
                                            PAGE-1
                                        </NavLink>
                                    </li>
                                ) : null}

                                <li className="nav-item px-3 py-2 flex items-center text-base uppercase font-semibold leading-snug text-white hover:opacity-75">
                                    <NavLink
                                        to="/test-2"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#FF9D00]" : ""
                                        }
                                    >
                                        PAGE-2
                                    </NavLink>
                                </li>

                            </ul>
                        </div>

                        <div>
                            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto gap-5">
                                {user ? (
                                    <div className="lg:flex-row flex items-center flex-col">
                                        <div>
                                            {user.photoURL ? (
                                                <img
                                                    src={user.photoURL}
                                                    alt="Profile"
                                                    className="h-8 w-8 rounded-full"
                                                />
                                            ) : (
                                                <img
                                                    src={userPicPlaceholder}
                                                    alt="Placeholder"
                                                    className="h-8 w-8 rounded-full bg-gray-300"
                                                />
                                            )}
                                        </div>
                                        <div className="flex flex-col lg:flex-row list-none lg:ml-auto gap-5">
                                            {user.displayName ? (
                                                <p className="nav-item px-3 py-2 flex items-center text-base uppercase font-semibold leading-snug text-white hover:opacity-75">{user.displayName}</p>
                                            ) : (
                                                <p className="nav-item px-3 py-2 flex items-center text-base uppercase font-semibold leading-snug text-white hover:opacity-75">{user.email}</p>
                                            )}

                                            <button
                                                type="button"
                                                onClick={handleLogout}
                                                className="nav-item px-3 py-2 flex items-center text-base uppercase font-semibold leading-snug text-white hover:opacity-75"
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <ul className='flex items-center gap-5'>
                                        <li className="nav-item px-3 py-2 flex items-center text-base uppercase font-semibold leading-snug text-white hover:opacity-75">
                                            <NavLink
                                                to="/login"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "text-[#FF9D00]" : ""
                                                }
                                            >
                                                LOGIN
                                            </NavLink>
                                        </li>
                                        <li className="nav-item px-3 py-2 flex items-center text-base uppercase font-semibold leading-snug text-white hover:opacity-75">
                                            <NavLink
                                                to="/register"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "text-[#FF9D00]" : ""
                                                }
                                            >
                                                REGISTER
                                            </NavLink>
                                        </li>
                                    </ul>
                                )}
                                <li className="nav-item  mx-3 flex items-center text-base uppercase font-semibold leading-snug text-white hover:opacity-75 border-2 border-[#FF9D00] rounded-md">
                                    <NavLink
                                        to="/add-product"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#FF9D00]" : ""
                                        }
                                    >
                                        <p className='flex items-center mx-3 my-2'><span className='text-2xl mr-2'>+</span><span>ADD PRODUCT</span></p>
                                    </NavLink>
                                </li>
                            </ul>

                        </div>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
