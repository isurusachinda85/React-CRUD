import React, { useState } from "react";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full shadow-md sticky top-0 left-0 mb-5 z-10 ">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7  ">
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-2 ">
          <StorefrontIcon className="text-green-500" fontSize="large" />
          <h1 className="text-blue-600">TecnnoMobile</h1>
        </div>
        <div
          className="text-3xl absolute right-8 top-3 cursor-pointer md:hidden "
          onClick={() => setOpen(!open)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out ${
            open ? "top-20 opacity-100 " : "top-[-490px] opacity-0"
          } md:opacity-100`}
        >
          <li className="md:ml-8 md:my-0 my-7 text-xl font-bold hover:text-gray-400 duration-500 cursor-pointer">
            <Link to={"/"}>Home</Link>
          </li>

          <li className="md:ml-8 md:my-0 my-7 text-xl font-bold hover:text-gray-400 duration-500 cursor-pointer">
            <Link to={"/user"}>User</Link>
          </li>

          <li className="md:ml-8 md:my-0 my-7 text-xl font-bold hover:text-gray-400 duration-500 cursor-pointer">
            <Link to={"/about"}>About</Link>
          </li>

          <li className="md:ml-8 md:my-0 my-7 text-xl font-bold hover:text-gray-400 duration-500 cursor-pointer">
            <Link to={"/contact"}>Contact</Link>
          </li>

          <button className="bg-indigo-600 text-white py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500">
            Get Start
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
