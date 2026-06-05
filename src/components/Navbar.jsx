import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import ProfileIcon from "/src/assets/icon/profile.png";
import SearchIcon from "/src/assets/icon/search.svg";
import SettingIcon from "/src/assets/icon/setting.svg";
import NotifIcon from "/src/assets/icon/notif.svg";

function Navbar({ setIsOpen, isOpen, title }) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-white w-full border-b border-line px-4 sm:px-6 lg:px-10 py-3 lg:py-0 lg:h-24 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 lg:gap-0">
      <div className="flex items-center justify-between lg:justify-start lg:gap-4">
        {/* Hamburger */}
        <button
          onClick={setIsOpen}
          className="md:hidden text-black p-2 rounded-lg flex items-center"
        >
          {isOpen ? <IoClose size={24} /> : <GiHamburgerMenu size={24} />}
        </button>

        <div className="font-bold text-xl sm:text-2xl text-[#343C6A] whitespace-nowrap">
          {title}
        </div>

        <div className="lg:hidden p-1 rounded-full cursor-pointer">
          <img
            src={ProfileIcon}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
        {/* Search Bar */}
        <div className="flex flex-1 lg:flex-none items-center gap-3 bg-[#F5F7FA] rounded-full px-4 py-2">
          <img src={SearchIcon} alt="search" className="w-4 h-4" />
          <input
            type="text"
            placeholder="Search for something"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="text-[#8BA3CB] text-sm bg-transparent outline-none w-full lg:w-48"
          />
        </div>

        {/* Setting */}
        <Link to="/setting" className="cursor-pointer hidden lg:block">
          <img
            src={SettingIcon}
            alt="setting"
            className="bg-[#F5F7FA] p-3 rounded-full w-10 h-10"
          />
        </Link>

        {/* Notif */}
        <button className="cursor-pointer hidden lg:block">
          <img
            src={NotifIcon}
            alt="notification"
            className="bg-[#F5F7FA] p-3 rounded-full w-10 h-10"
          />
        </button>

        {/* Profile */}
        <div className="hidden lg:block p-1 rounded-full cursor-pointer">
          <Link to="/setting">
            <img
              src={ProfileIcon}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
