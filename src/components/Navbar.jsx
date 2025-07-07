import React from "react";
import { assets } from "../assets/assets.js";

const Navbar = () => {
  return (
    <div className="flex justify-between my-4  px-10 items-center border-solid border-b-2 border-black">
      <div className="flex flex-col items-center">
        <img className="w-10" src={assets.logo} alt="" />
        <div className="font-semibold">Flex Living</div>
      </div>
      <div className="flex font-semibold gap-10">
        <div>Home</div>
        <div>Landlord</div>
        <div>Blog</div>
        <div>Contacts</div>
      </div>
    </div>
  );
};

export default Navbar;
