"use client";
import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <header className="flex items-center justify-between px-6 py-4 absolute w-full z-40 bg-transparent">
        {isLoggedIn ? (
          <div className="left flex items-center gap-6 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg">
            <h2 className="text-lg font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
              All Events
            </h2>
            <h2 className="text-lg font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
              Profile
            </h2>
            <h2 className="text-lg font-semibold text-gray-800 hover:text-red-500 cursor-pointer">
              Sign Out
            </h2>
          </div>
        ) : (
          <div className="left flex items-center gap-6">
            <h2 className="text-lg font-medium text-gray-200 hover:text-blue-400 cursor-pointer">
              About Us
            </h2>
            <h2 className="text-lg font-medium text-gray-200 hover:text-blue-400 cursor-pointer">
              Contact Us
            </h2>
            <h2 className="text-lg font-medium text-gray-200 hover:text-blue-400 cursor-pointer">
              Services
            </h2>
          </div>
        )}

        <div className="middle">
          <Link href={'/'}> <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-wider">
            Evento<span className="text-blue-500">.</span>
          </h1></Link>
        </div>

        {isLoggedIn ? (
          <div className="right bg-white/80 backdrop-blur-md px-6 py-2 rounded-xl shadow-lg">
            <h2 className="text-lg font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
              All Events
            </h2>
          </div>
        ) : (
          <div className="right">
            <button className="bg-blue-500 text-white py-2 px-6 rounded-lg font-semibold shadow-lg hover:bg-blue-600 transition">
              Join Now
            </button>
          </div>
        )}
      </header>
    </>
  );
};

export default NavBar;
