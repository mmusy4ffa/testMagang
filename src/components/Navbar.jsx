function Navbar() {
  return (
    <div>
      <div className="bg-white w-full h-24 flex-1  border-t border-r border-b border-line">
        <div className="flex items-center h-full mx-10 justify-between">
          {/* Title */}
          <div className="font-bold text-2xl text-[#343C6A]">Transactions</div>

          <div className="flex items-center gap-6">
            {/* Search */}
            <div className="items-center flex gap-4 bg-[#F5F7FA] p-2 rounded-full px-4">
              <img
                src="/src/assets/icon/search.svg"
                alt="logo search"
                className="text-[#718EBF]"
              />
              <input
                type="text"
                placeholder="Search for something"
                className="text-[#8BA3CB] text-md bg-transparent outline-none w-full"
              />
            </div>

            {/* Setting */}
            <div>
              <button className="cursor-pointer">
                <img
                  src="/src/assets/icon/setting.svg"
                  alt="setting"
                  className="bg-[#F5F7FA] p-3 rounded-full"
                />
              </button>
            </div>

            {/* Notif */}
            <div>
              <button className="cursor-pointer">
                <img
                  src="/src/assets/icon/notif.svg"
                  alt="setting"
                  className="bg-[#F5F7FA] p-3 rounded-full"
                />
              </button>
            </div>

            {/* Profile */}
            <div className=" rounded-full  border-line p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center cursor-pointer">
                <img
                  src="/src/assets/icon/profile.png"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
