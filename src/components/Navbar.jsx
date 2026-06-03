import { useState } from "react";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-white w-full h-24 border-t border-r border-b border-line">
      <div className="flex items-center h-full px-4 sm:px-6 md:px-10 justify-between gap-4">
        {/* Title */}
        <div className="font-bold text-xl sm:text-2xl text-[#343C6A] whitespace-nowrap">
          Transactions
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
          {/* Search */}
          <div className="hidden sm:flex items-center gap-3 bg-[#F5F7FA] p-2 rounded-full px-4">
            <img
              src="/src/assets/icon/search.svg"
              alt="search"
              className="w-4 h-4"
            />
            <input
              type="text"
              placeholder="Search for something"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-[#8BA3CB] text-sm bg-transparent outline-none w-32 md:w-48"
            />
          </div>

          {/* Mobile Search Button */}
          <button className="sm:hidden bg-[#F5F7FA] p-2 rounded-full">
            <img
              src="/src/assets/icon/search.svg"
              alt="search"
              className="w-5 h-5"
            />
          </button>

          {/* Setting */}
          <button className="cursor-pointer">
            <img
              src="/src/assets/icon/setting.svg"
              alt="setting"
              className="bg-[#F5F7FA] p-2 sm:p-3 rounded-full w-8 h-8 sm:w-10 sm:h-10"
            />
          </button>

          {/* Notif */}
          <button className="cursor-pointer">
            <img
              src="/src/assets/icon/notif.svg"
              alt="notification"
              className="bg-[#F5F7FA] p-2 sm:p-3 rounded-full w-8 h-8 sm:w-10 sm:h-10"
            />
          </button>

          {/* Profile */}
          <div className="border border-line p-0.5 sm:p-1 rounded-full cursor-pointer">
            <img
              src="/src/assets/icon/profile.png"
              alt="Profile"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
