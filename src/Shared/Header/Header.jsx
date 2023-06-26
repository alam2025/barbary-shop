import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const navList = (
      <>
            <li>
                  <Link>Home</Link>
            </li>
            <li>
                  <Link>Features</Link>
            </li>
            <li>
                  <Link>The Shop</Link>
            </li>
            <li>
                  <Link>The Blog</Link>
            </li>
      </>
);

const Header = () => {
      const [isNavbarFixed, setIsNavbarFixed] = useState(false);

      useEffect(() => {
            const handleScroll = () => {
                  if (window.pageYOffset > 0) {
                        setIsNavbarFixed(true);
                  } else {
                        setIsNavbarFixed(false);
                  }
            };

            const scrollTimeout = setTimeout(() => {
                  setIsNavbarFixed(true);
            }, 3000);

            window.addEventListener('scroll', handleScroll);

            return () => {
                  clearTimeout(scrollTimeout);
                  window.removeEventListener('scroll', handleScroll);
            };
      }, []);

      return (
            <div
                  className={`z-10 navbar shadow-lg bg-white h-[100px] ${isNavbarFixed ? 'fixed top-0 w-full transition-all duration-500' : ''
                        }`}
            >
                  <div className="navbar-start">
                        <div className="dropdown z-10">
                              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-5 w-5"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                    >
                                          <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h8m-8 6h16"
                                          />
                                    </svg>
                              </label>
                              <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-100 rounded-box w-52"
                              >
                                    {navList}
                              </ul>
                        </div>
                        <a className="btn btn-ghost normal-case text-xl">BARBARY SHOP</a>
                  </div>
                  <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">{navList}</ul>
                  </div>
                  <div className="navbar-end">
                        <a className="btn">Button</a>
                  </div>
            </div>
      );
};

export default Header;
