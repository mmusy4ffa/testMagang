// import Background from "../components/Background";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Background from "../components/Background";

export default function Setting() {
  const [isOpen, setIsOpen] = useState(false);

  function handleBurger() {
    setIsOpen((open) => !open);
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <SideBar isOpen={isOpen} setIsOpen={handleBurger} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-shrink-0">
          <Navbar isOpen={isOpen} setIsOpen={handleBurger} />
        </div>
        <Background>
          <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
            <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
              {/* Header */}
              <div className="flex justify-between items-center flex-wrap gap-4">
                <div className="font-bold text-xl sm:text-2xl text-[#343C6A]">
                  Page Title
                </div>
                <div className="text-sm sm:text-base font-semibold text-[#343C6A] cursor-pointer hover:text-blue-700 px-3 sm:px-4 py-1 sm:py-2 rounded-lg transition">
                  + Add New
                </div>
              </div>
            </div>
          </div>
        </Background>
      </div>
    </div>
  );
}
