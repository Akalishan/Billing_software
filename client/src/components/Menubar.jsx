import { useContext, useState, useRef, useEffect } from "react";
import { assets } from "../assets/assets.js";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";
import { ChevronDown, LogOut, Settings, Activity } from "lucide-react"; // Optional icons

export const Menubar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { setAuthData } = useContext(AppContext);

  const navLinkClass =
    "font-medium uppercase mr-4 transition-colors duration-300 text-white hover:text-gray-400";

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setAuthData(null, null);
    navigate("/login");
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-gray-900 shadow-md relative">
      {/* Left side (Logo + Links) */}
      <div className="hidden sm:flex items-center gap-8">
        <Link to="/" className="flex items-center font-bold text-2xl text-white">
          <img src={assets.logo} alt="Logo" className="h-8 mr-2" />
          NexusAuto
        </Link>

        <Link to="/dashboard" className={navLinkClass}>
          Dashboard
        </Link>
        <Link to="/explore" className={navLinkClass}>
          Explore
        </Link>
        <Link to="/items" className={navLinkClass}>
          Manage Items
        </Link>
        <Link to="/category" className={navLinkClass}>
          Manage Categories
        </Link>
        <Link to="/users" className={navLinkClass}>
          Manage Users
        </Link>

        {/* Tailwind Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center focus:outline-none"
          >
            <img
              src={assets.profile}
              alt="Profile"
              className="w-8 h-8 rounded-full border-2 border-white"
            />
            <ChevronDown className="ml-2 w-4 h-4 text-white" />
          </button>

          {dropdownOpen && (
            <ul className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
              <li>
                <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                  <Settings size={16} /> Settings
                </button>
              </li>
              <li>
                <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                  <Activity size={16} /> Activity Log
                </button>
              </li>
              <li>
                <hr className="my-1 border-gray-300" />
              </li>
              <li>
                <button
                  onClick={logout}
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 flex items-center gap-2"
                >
                  <LogOut size={16} /> Logout
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        className="sm:hidden"
      >
        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="21" height="1.5" rx=".75" fill="#ffffff" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#ffffff" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#ffffff" />
        </svg>
      </button>

      {/* Mobile dropdown menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[60px] left-0 w-full bg-gray-900 shadow-md py-4 flex-col items-start gap-3 px-5 text-white md:hidden`}
      >
        <Link to="/dashboard" className="block w-full hover:text-gray-400">
          Dashboard
        </Link>
        <Link to="/explore" className="block w-full hover:text-gray-400">
          Explore
        </Link>
        <Link to="/items" className="block w-full hover:text-gray-400">
          Manage Items
        </Link>
        <Link to="/category" className="block w-full hover:text-gray-400">
          Manage Categories
        </Link>
        <Link to="/users" className="block w-full hover:text-gray-400">
          Manage Users
        </Link>
        <button
          onClick={logout}
          className="mt-2 text-red-400 hover:text-red-500"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};
