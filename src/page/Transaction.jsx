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
    <div className="flex h-screen overflow-hidden">
      <SideBar />
      <div className="flex-1 flex flex-col overflow-hidden min-w-">
        <div className="">
          <Navbar />
        </div>
        <div className="flex-1 overflow-x-hidden scrollbar-hide ">
          <div className="m-8 space-y-6">
            <div className="flex justify-between ">
              <div className="font-bold text-2xl text-[#343C6A]">My Cards</div>
              <div>Add Cards</div>
            </div>

            {/* Cards 1 */}
            <div className="w-full">
              <div className="flex flex-wrap gap-4">
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
                {/* Cards 2 */}
                <div className="w-86 h-52  rounded-2xl bg-black"></div>
                {/* Cards  */}
                <div className="w-86 h-52  rounded-2xl bg-black"></div>
              </div>
            </div>

            {/* Cards Bot */}
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
              <div className="bg-blue-300 rounded-xl h-auto">
                <div className="p-4">
                  {/* All Transaction */}
                  <div className="border-b border-white pb-4">
                    <div className="grid grid-cols-7 gap-4">
                      <div className="text-white font-medium">Descriptions</div>
                      <div className="text-white font-medium">
                        Transaction ID
                      </div>
                      <div className="text-white font-medium">Type</div>
                      <div className="text-white font-medium">Card</div>
                      <div className="text-white font-medium">Date</div>
                      <div className="text-white font-medium">Amount</div>
                      <div className="text-white font-medium">Receipt</div>
                    </div>
                  </div>

                  {/* List Item 1 */}
                  <div className="border-b border-white/50 py-4">
                    <div className="grid grid-cols-7 gap-4 items-center">
                      <div className="text-white">Spotify Subscription</div>
                      <div className="text-white">#TRX001</div>
                      <div className="text-white">Entertainment</div>
                      <div className="text-white">Visa ****1234</div>
                      <div className="text-white">25 Jan 2025</div>
                      <div className="text-white">-$12.99</div>
                      <div>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm transition cursor-pointer">
                          Download
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* List Item 2 */}
                  <div className="border-b border-white/50 py-4">
                    <div className="grid grid-cols-7 gap-4 items-center">
                      <div className="text-white">Freelance Payment</div>
                      <div className="text-white">#TRX002</div>
                      <div className="text-white">Income</div>
                      <div className="text-white">Mastercard ****5678</div>
                      <div className="text-white">24 Jan 2025</div>
                      <div className="text-green-300">+$500.00</div>
                      <div>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm transition cursor-pointer">
                          Download
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* List Item 3 */}
                  <div className="border-b border-white/50 py-4">
                    <div className="grid grid-cols-7 gap-4 items-center">
                      <div className="text-white">Netflix Subscription</div>
                      <div className="text-white">#TRX003</div>
                      <div className="text-white">Entertainment</div>
                      <div className="text-white">Visa ****1234</div>
                      <div className="text-white">23 Jan 2025</div>
                      <div className="text-white">-$15.99</div>
                      <div>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm transition cursor-pointer">
                          Download
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* List Item 4 */}
                  <div className="border-b border-white/50 py-4">
                    <div className="grid grid-cols-7 gap-4 items-center">
                      <div className="text-white">Coffee Shop</div>
                      <div className="text-white">#TRX004</div>
                      <div className="text-white">Food</div>
                      <div className="text-white">Amex ****9876</div>
                      <div className="text-white">22 Jan 2025</div>
                      <div className="text-white">-$5.50</div>
                      <div>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm transition cursor-pointer">
                          Download
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* List Item 5 */}
                  <div className="border-b border-white/50 py-4">
                    <div className="grid grid-cols-7 gap-4 items-center">
                      <div className="text-white">Grocery Shopping</div>
                      <div className="text-white">#TRX005</div>
                      <div className="text-white">Shopping</div>
                      <div className="text-white">Visa ****1234</div>
                      <div className="text-white">21 Jan 2025</div>
                      <div className="text-white">-$89.47</div>
                      <div>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm transition cursor-pointer">
                          Download
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* List Item 6 */}
                  <div className="py-4">
                    <div className="grid grid-cols-7 gap-4 items-center">
                      <div className="text-white">Electric Bill</div>
                      <div className="text-white">#TRX006</div>
                      <div className="text-white">Utilities</div>
                      <div className="text-white">Mastercard ****5678</div>
                      <div className="text-white">20 Jan 2025</div>
                      <div className="text-white">-$75.00</div>
                      <div>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm transition cursor-pointer">
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
