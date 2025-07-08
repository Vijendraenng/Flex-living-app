import React from "react";
import Navbar from "../components/Navbar";
import { CiSearch } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-between items-center rounded-full border-black border-2 mx-40 px-5 py-2">
        <div className="flex items-center gap-4">
          {" "}
          <CiSearch /> Select a city{" "}
        </div>
        <div className="flex items-center gap-4">
          {" "}
          <MdOutlineDateRange /> Move-in <FaArrowRight /> Move-out
        </div>
        <div className="flex items-center gap-4">
          {" "}
          <IoMdContacts /> Guests + 1 -
          <div className=" bg-green-800 rounded-full px-4 py-1 text-white">
            Search
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
