// import Background from "../components/Background";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function Transaction() {
  const [active, setActive] = useState("all");

  const tabs = [
    { id: "all", label: "All Transactions" },
    { id: "income", label: "Income" },
    { id: "expense", label: "Expense" },
  ];
  return (
    <div className="w-screen">
      <div className="flex">
        <SideBar />
        <div className="w-screen">
          <Navbar />
          <div className="m-8 space-y-6">
            <div className="flex justify-between">
              <div className="font-bold text-2xl text-[#343C6A]">My Cards</div>
              <div>Add Cards</div>
            </div>
            <div className="flex justify-between">
              <div className="w-86 h-52 rounded-2xl bg-linear-to-r from-[#4C49ED] to-[#0A06F4]">
                <div className="m-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-white text-sm">Balance</div>
                      <div className="text-white text-2xl">$5,756</div>
                    </div>
                    <img src="/src/assets/icon/Chip_Card.svg" alt="" />
                  </div>
                  <div>
                    <div className="text-white text-sm">CARD HOLDER</div>
                    <div className="text-white text-sm font-semibold">
                      Eddy Cusuma
                    </div>
                  </div>
                  <div>
                    <div className="w-10 h-10 bg0"></div>
                  </div>
                </div>
              </div>
              <div className="w-86 h-48 rounded-2xl bg-black"></div>
              <div className="w-86 h-48 rounded-2xl bg-black"></div>
            </div>
            <div className="text-2xl font-bold text-[#343C6A]">
              Recent Transactions
            </div>
            <div className="flex gap-8 border-b border-line">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`px-2 py-2 transition-all duration-300 ease-in-out cursor-pointer ${
                    active === tab.id
                      ? "text-textblue border-b-2 border-textblue"
                      : "text-[#718EBF] border-b-2 border-transparent hover:text-textblue hover:border-textblue"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div>
              <div className="bg-black rounded-xl h-80">
                <div className="text-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
