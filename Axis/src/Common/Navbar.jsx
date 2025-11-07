import React from "react";
import { Link } from "react-router-dom";
import ImgIcon from "../assets/Navbar/SVG.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <Link to="/">
        <img src={ImgIcon} alt="Logo" className="w-16" />
      </Link>
      <div className="flex gap-4">
        <Link to="/login" className="text-blue-600 hover:underline">ورود</Link>
        <Link to="/register" className="text-blue-600 hover:underline">ثبت‌نام</Link>
      </div>
    </nav>
  );
};

export default Navbar;
