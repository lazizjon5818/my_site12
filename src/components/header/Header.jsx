import React from "react";
import { RiCoupon3Line } from "react-icons/ri";
import { MdOutlineVibration } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { IoTvSharp } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import logo from "@/assets/logos/logo.png";

const navLinks = [
  {
    label: "Afisha",
    to: "/",
    icon: <IoTvSharp className="text-[20px]" />,
  },
  {
    label: "Seans",
    to: "/latest",
    icon: <MdOutlineVibration className="text-[20px]" />,
  },
  {
    label: "Ticket",
    to: "/ticket",
    icon: <RiCoupon3Line className="text-[20px]" />,
  },
  {
    label: "Search",
    to: "/search",
    icon: <FiSearch className="text-[20px]" />,
  },
  {
    label: "Liked",
    to: "/liked",
    icon: <AiOutlineLike className="text-[20px]" />,
  }
];

const lang = [
  {
    label: "Eng",
    value: "en",
  },
  {
    label: "Rus",
    value: "ru",
  },
  {
    label: "Uzb",
    value: "uzb",
  },
];

const Header = () => {
  return (
    <div className="h-[80px] bg-black">
      <div className="container flex items-center justify-between py-4 bg-black">
        <div className="w-[112px] h-[36px]">
          <img className="w-full h-full" src={logo} alt="Logo" />
        </div>

        <ul className="flex gap-6">
          {navLinks.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "flex flex-col items-center text-red-700"
                    : "flex flex-col items-center text-[#A1A1A1] hover:text-red-700"
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex gap-2 items-center">
          <select className="h-full bg-slate-900 px-2 py-2 rounded-md text-white">
            {lang.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <button className="w-[180px] bg-red-700 text-white py-3 rounded-md">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
