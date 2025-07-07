import React from "react";
import { assets } from "../assets/assets.js";

const Navbar = () => {
  return (
    <div className="flex justify-between  px-10 items-center bg-red-400">
      <div>
        <img className="w-32" src={assets.logo} alt="" />
      </div>
      <div className="flex gap-10">
        <div>Home</div>
        <div>Landlord</div>
        <div>Blog</div>
        <div>Contacts</div>
      </div>
    </div>
  );
};

export default Navbar;
