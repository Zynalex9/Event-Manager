'use client'
import React, { useState } from "react";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  if (isLoggedIn === true) {
    return (
      <>
        <header className="flex items-center justify-between px-4 py-4 absolute w-full">
          <div className="left bg-white flex items-center justify-evenly px-4 py-2 rounded-xl gap-2 text-md ">
            <h2>All Events</h2>
            <h2>Profile</h2>
            <h2>Sign Out</h2>
          </div>
          <div className="middle"><h2 className="text-4xl">Evento.</h2></div>

          <div className="right bg-white flex items-center justify-evenly px-6 py-4 rounded-xl text-md">All Events</div>
        </header>
      </>
    );
  } else {
    return (
      <>
        <header>
          <div className="left">
            <h2>About Us</h2>
            <h2>Contact Us</h2>
            <h2>Services</h2>
          </div>
          <div className="middle">Evento.</div>
          <div className="right">Join Now</div>
        </header>
      </>
    );
  }
};

export default NavBar;
