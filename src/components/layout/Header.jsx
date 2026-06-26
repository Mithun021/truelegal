import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

import TopBar from "../common/TopBar";

import { navItems } from "../../utils/navigation";
import logo from "../../assets/images/logo.webp";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  return (
    <>
      <TopBar />

      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto">

          <div className="h-24 px-4 flex items-center justify-between">

            {/* Logo */}

            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="h-16 object-contain"
              />
            </Link>

            {/* Desktop Menu */}

            <nav className="hidden lg:flex items-center gap-8">

              {navItems.map((item, index) => (
                <div
                  key={item.label}
                  className="relative group"
                >
                  {item.children ? (
                    <>
                      <button className="flex items-center gap-2 font-medium text-[15px] text-gray-800 hover:text-blue-700 transition">

                        {item.label}

                        <FaChevronDown
                          size={12}
                          className="group-hover:rotate-180 transition"
                        />
                      </button>

                      {/* Dropdown */}

                      <div
                        className={`
                            invisible
                            opacity-0
                            group-hover:visible
                            group-hover:opacity-100
                            absolute
                            top-full
                            mt-4
                            w-80
                            bg-white
                            rounded-xl
                            shadow-2xl
                            border
                            border-gray-100
                            transition-all
                            duration-300
                            overflow-hidden

                            ${
                            index >= navItems.length - 3
                                ? "right-0"
                                : "left-0"
                            }
                        `}
                        >
                        {item.children.map((sub) => (
                            <Link
                            key={sub.label}
                            to={sub.path}
                            className="
                                flex
                                justify-between
                                items-center
                                px-5
                                py-4
                                text-sm
                                text-gray-700
                                hover:bg-gray-50
                                hover:text-blue-700
                                border-b
                                border-gray-100
                            "
                            >
                            {sub.label}

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                                />
                            </svg>
                            </Link>
                        ))}
                        </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="font-medium text-[15px] text-gray-800 hover:text-blue-700 transition"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* <button
                className="
                bg-red-700
                text-white
                px-6
                py-3
                rounded-xl
                font-semibold
                hover:bg-red-800
                transition
              "
              >
                Join Membership
              </button> */}
            </nav>

            {/* Mobile */}

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-2xl"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}

      {/* Mobile Drawer */}

        <div
        className={`
            fixed
            top-0
            left-0
            h-screen
            w-[90%]
            bg-white
            z-[70]
            transition-all
            duration-300
            overflow-y-auto
            shadow-2xl
            ${
            mobileOpen
                ? "translate-x-0"
                : "-translate-x-full"
            }
        `}
        >
        <div className="h-full flex flex-col">

            {/* Header */}

            <div className="bg-[#071A3D] p-5 flex justify-between items-center">

            <img
                src={logo}
                alt=""
                className="h-12 bg-white rounded p-1"
            />

            <button
                onClick={() => setMobileOpen(false)}
                className="text-white text-2xl"
            >
                <FaTimes />
            </button>

            </div>

            {/* Menus */}

            <div className="flex-1 p-5">

            {navItems.map((item) => (
                <div key={item.label}>

                {item.children ? (
                    <>
                    <button
                        onClick={() =>
                        setMobileDropdown(
                            mobileDropdown === item.label
                            ? null
                            : item.label
                        )
                        }
                        className="
                        w-full
                        flex
                        justify-between
                        items-center
                        py-4
                        border-b
                        border-gray-200
                        font-semibold
                        text-gray-800
                        "
                    >
                        {item.label}

                        <FaChevronDown
                        className={`
                            transition-all duration-300
                            ${
                            mobileDropdown === item.label
                                ? "rotate-180"
                                : ""
                            }
                        `}
                        />
                    </button>

                    <div
                        className={`
                        overflow-hidden
                        transition-all
                        duration-300
                        ${
                            mobileDropdown === item.label
                            ? "max-h-[500px]"
                            : "max-h-0"
                        }
                        `}
                    >
                        <div className="bg-gray-50">

                        {item.children.map((sub) => (
                            <Link
                            key={sub.label}
                            to={sub.path}
                            onClick={() => {
                                setMobileOpen(false);
                                setMobileDropdown(null);
                            }}
                            className="
                                flex
                                justify-between
                                items-center
                                px-4
                                py-3
                                border-b
                                border-gray-200
                                text-sm
                                text-gray-600
                                hover:text-blue-700
                            "
                            >
                            {sub.label}

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                                />
                            </svg>
                            </Link>
                        ))}

                        </div>
                    </div>
                    </>
                ) : (
                    <NavLink
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className="
                        block
                        py-4
                        border-b
                        border-gray-200
                        text-gray-700
                        font-medium
                    "
                    >
                    {item.label}
                    </NavLink>
                )}

                </div>
            ))}

            {/* Button */}

            <button
                className="
                mt-8
                w-full
                bg-red-700
                hover:bg-red-800
                text-white
                py-4
                rounded-xl
                font-semibold
                transition
                "
            >
                Join Membership
            </button>

            </div>

        </div>
        </div>
    </>
  );
}