import { useState } from "react";
import { assets } from "../../assets/assets.js";
export const Menubar = () => {
  const [open, setOpen] = useState(false);
  const navLinkClass =
    "font-medium uppercase mr-4 transition-colors duration-300 text-white hover:text-gray-400";
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-gray-900 shadow-md relative">
      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <a href="#" className="flex items-center font-bold text-2xl">
          <img src={assets.logo} alt="Logo" className="h-8 mr-2" />
        </a>
        <a href="#" className={navLinkClass}> Dashboard</a>
        <a href="#" className={navLinkClass}>Explore</a>
        <a href="#" className={navLinkClass}>Manage Items</a>
        <a href="#" className={navLinkClass}>Manage Categories</a>
        <a href="#" className={navLinkClass}>Manage Users</a>
      </div>

      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        aria-label="Menu"
        className="sm:hidden"
      >
        {/* Menu Icon SVG */}
        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
      >
        <a href="#" className="block">Dashboard</a>
        <a href="#" className="block">Explore</a>
        <a href="#" className="block">Manage Items</a>
        <a href="#" className="block">Manage Categories</a>
        <a href="#" className="block">Manage Users</a>
      </div>
    </nav>
  );
};  
