// import Background from "../components/Background";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Background from "../components/Background";
import YMoneyIcon from "/src/assets/icon/ymoney.svg";
import BMoneyIcon from "/src/assets/icon/bmoney.svg";
import PMoneyIcon from "/src/assets/icon/pmoney.svg";
import GMoneyIcon from "/src/assets/icon/gmoney.svg";
import ChipCardIcon from "/src/assets/icon/Chip_Card.svg";
import DsdsIcon from "/src/assets/icon/dsds.svg";
import AppleIcon from "/src/assets/icon/apple.svg";
import UsersIcon from "/src/assets/icon/users.svg";
import PsIcon from "/src/assets/icon/ps.svg";
import Users2Icon from "/src/assets/icon/users2.svg";

export default function Accounts() {
  const [isOpen, setIsOpen] = useState(false);

  function handleBurger() {
    setIsOpen((open) => !open);
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <SideBar isOpen={isOpen} setIsOpen={handleBurger} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-shrink-0">
          <Navbar isOpen={isOpen} setIsOpen={handleBurger} title="Accounts" />
        </div>
        <Background>
          <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
            <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
              {/* Cards - Balance, Income, Expense, Savings */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {/* Card 1 */}
                <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl h-28 sm:h-32 lg:h-36 flex justify-between items-center px-4 sm:px-6 gap-2">
                  <img
                    src={YMoneyIcon}
                    alt=""
                    className="h-10 w-10 sm:h-14 sm:w-14 lg:h-18 lg:w-18"
                  />
                  <div className="text-right">
                    <div className="text-gray-400 text-xs sm:text-sm lg:text-base text-[#718EBF]">
                      My Balance
                    </div>
                    <div className="font-bold text-base sm:text-xl lg:text-2xl text-[#232323]">
                      $12,750
                    </div>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl h-28 sm:h-32 lg:h-36 flex justify-between items-center px-4 sm:px-6 gap-2">
                  <img
                    src={BMoneyIcon}
                    alt=""
                    className="h-10 w-10 sm:h-14 sm:w-14 lg:h-18 lg:w-18"
                  />
                  <div className="text-right">
                    <div className="text-gray-400 text-xs sm:text-sm lg:text-base text-[#718EBF]">
                      Income
                    </div>
                    <div className="font-bold text-base sm:text-xl lg:text-2xl text-[#232323]">
                      $5,600
                    </div>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl h-28 sm:h-32 lg:h-36 flex justify-between items-center px-4 sm:px-6 gap-2">
                  <img
                    src={PMoneyIcon}
                    alt=""
                    className="h-10 w-10 sm:h-14 sm:w-14 lg:h-18 lg:w-18"
                  />
                  <div className="text-right">
                    <div className="text-gray-400 text-xs sm:text-sm lg:text-base text-[#718EBF]">
                      Expense
                    </div>
                    <div className="font-bold text-base sm:text-xl lg:text-2xl text-[#232323]">
                      $3,460
                    </div>
                  </div>
                </div>
                {/* Card 4 */}
                <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl h-28 sm:h-32 lg:h-36 flex justify-between items-center px-4 sm:px-6 gap-2">
                  <img
                    src={GMoneyIcon}
                    alt=""
                    className="h-10 w-10 sm:h-14 sm:w-14 lg:h-18 lg:w-18"
                  />
                  <div className="text-right">
                    <div className="text-gray-400 text-xs sm:text-sm lg:text-base text-[#718EBF]">
                      Total Saving
                    </div>
                    <div className="font-bold text-base sm:text-xl lg:text-2xl text-[#232323]">
                      $7,920
                    </div>
                  </div>
                </div>
              </div>

              {/* Last Transaction, My Card */}
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                {/* Last Transaction */}
                <div className="lg:flex-[2]">
                  <div className="font-bold text-xl sm:text-2xl text-[#343C6A] mb-3">
                    Last Transaction
                  </div>
                  <div className="w-full rounded-2xl bg-white border border-gray-200">
                    <div className="p-4 sm:p-5 space-y-4">
                      {[
                        {
                          icon: "/src/assets/icon/Gtran.svg",
                          iconBg: "bg-[#DCFAF1]",
                          name: "Spotify Subscription",
                          date: "25 Jan 2021",
                          category: "Shopping",
                          card: "1234 ****",
                          status: "Pending",
                          statusColor: "text-[#718EBF]",
                          amount: "-$150",
                          amountColor: "text-[#718EBF]",
                        },
                        {
                          icon: "/src/assets/icon/Rtran.svg",
                          iconBg: "bg-[#FFE8EC]",
                          name: "Mobile Service",
                          date: "25 Jan 2021",
                          category: "Service",
                          card: "1234 ****",
                          status: "Completed",
                          statusColor: "text-[#718EBF]",
                          amount: "-$340",
                          amountColor: "text-[#718EBF]",
                        },
                        {
                          icon: "/src/assets/icon/Btran.svg",
                          iconBg: "bg-[#E7F0FF]",
                          name: "Emilly Wilson",
                          date: "25 Jan 2021",
                          category: "Transfer",
                          card: "1234 ****",
                          status: "Completed",
                          statusColor: "text-[#718EBF]",
                          amount: "+$780",
                          amountColor: "text-[#718EBF]",
                        },
                      ].map((tx, i) => (
                        <div
                          key={i}
                          className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-3"
                        >
                          <div className="flex items-center gap-3 flex-1 min-w-[160px]">
                            <div
                              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 ${tx.iconBg}`}
                            >
                              <img
                                src={tx.icon}
                                alt=""
                                className="w-10 h-10 sm:w-12 sm:h-12"
                              />
                            </div>
                            <div>
                              <div className="text-[#232323] font-semibold text-sm sm:text-base">
                                {tx.name}
                              </div>
                              <div className="text-[#718EBF] text-xs sm:text-sm">
                                {tx.date}
                              </div>
                            </div>
                          </div>

                          {/* Kategori, Card, Status */}
                          <div className="flex items-center gap-4 sm:gap-8 flex-1 justify-end">
                            <div className="hidden sm:block text-[#718EBF] text-sm lg:text-base min-w-[80px]">
                              {tx.category}
                            </div>
                            <div className="hidden sm:block text-[#718EBF] text-sm lg:text-base min-w-[100px]">
                              {tx.card}
                            </div>
                            <div
                              className={`hidden sm:block text-sm lg:text-base ${tx.statusColor} min-w-[85px]`}
                            >
                              {tx.status}
                            </div>
                          </div>

                          {/* Jumlah */}
                          <div
                            className={`text-base sm:text-lg  ${tx.amountColor} text-right min-w-[80px]`}
                          >
                            {tx.amount}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* My Card */}
                <div className="lg:flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-bold text-xl sm:text-2xl text-[#343C6A]">
                      My Card
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-[#343C6A] cursor-pointer hover:text-blue-700 transition">
                      See All
                    </div>
                  </div>
                  <div className="w-full rounded-2xl bg-gradient-to-r from-[#2D60FF] to-[#539BFF]">
                    <div className="p-4 sm:p-6 space-y-4 max-xl:space-y-19 lg:space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-white text-xs sm:text-sm">
                            Balance
                          </div>
                          <div className="text-white text-xl sm:text-2xl">
                            $5,756
                          </div>
                        </div>
                        <img
                          src={ChipCardIcon}
                          alt=""
                          className="w-8 h-8 sm:w-10 sm:h-10"
                        />
                      </div>
                      <div className="flex flex-wrap items-center gap-4 sm:gap-10">
                        <div>
                          <div className="text-white text-xs sm:text-sm">
                            CARD HOLDER
                          </div>
                          <div className="text-white text-xs sm:text-sm font-semibold">
                            Eddy Cusuma
                          </div>
                        </div>
                        <div>
                          <div className="text-white text-xs sm:text-sm">
                            VALID THRU
                          </div>
                          <div className="text-white text-xs sm:text-sm font-semibold">
                            12/22
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-gradient-to-r from-white/25 to-white/5 rounded-b-2xl">
                      <div className="px-4 py-3">
                        <div className="flex justify-between items-center">
                          <div className="text-white text-sm sm:text-xl truncate">
                            3778 **** **** 1234
                          </div>
                          <img
                            src={DsdsIcon}
                            alt=""
                            className="w-6 h-6 sm:w-8 sm:h-8"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Debit */}
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                {/* Debit */}
                <div className="lg:flex-[2]">
                  <div className="font-bold text-xl sm:text-2xl text-[#343C6A] mb-4">
                    Debit & Credit Overview
                  </div>
                  <div className="w-full rounded-2xl bg-white border border-gray-200">
                    <div className="p-4">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row sm:justify-between gap-3 mb-6">
                        <div className="text-[#718EBF] text-base max-lg:hidden">
                          <span className="text-[#333B69] font-semibold">
                            $7,560
                          </span>{" "}
                          Debited &{" "}
                          <span className="text-[#333B69] font-semibold">
                            $5,420
                          </span>{" "}
                          Credited in this Week
                        </div>
                        <div className="max-lg:flex max-lg:justify-end sm:flex sm:justify-end">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-[#4C78FF] rounded-sm"></div>
                              <span className="text-xs text-gray-500">
                                Debit
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-[#FCAA0B] rounded-sm"></div>
                              <span className="text-xs text-gray-500">
                                Credit
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Chart Bars - Full width */}
                      <div className="w-full">
                        <div className="flex justify-around items-end gap-2 h-54">
                          {/* Sat */}
                          <div className="flex flex-col items-center gap-2 flex-1">
                            <div className="flex gap-1 w-full max-w-[60px] mx-auto h-32 items-end">
                              <div
                                className="flex-1 bg-[#4C78FF] rounded-xl"
                                style={{ height: "60%", minHeight: "4px" }}
                              ></div>
                              <div
                                className="flex-1 bg-[#FCAA0B] rounded-xl"
                                style={{ height: "40%", minHeight: "4px" }}
                              ></div>
                            </div>
                            <div className="text-gray-400 text-xs">Sat</div>
                          </div>
                          {/* Sun */}
                          <div className="flex flex-col items-center gap-2 flex-1">
                            <div className="flex gap-1 w-full max-w-[60px] mx-auto h-32 items-end">
                              <div
                                className="flex-1 bg-[#4C78FF] rounded-xl"
                                style={{ height: "55%", minHeight: "4px" }}
                              ></div>
                              <div
                                className="flex-1 bg-[#FCAA0B] rounded-xl"
                                style={{ height: "45%", minHeight: "4px" }}
                              ></div>
                            </div>
                            <div className="text-gray-400 text-xs">Sun</div>
                          </div>
                          {/* Mon */}
                          <div className="flex flex-col items-center gap-2 flex-1">
                            <div className="flex gap-1 w-full max-w-[60px] mx-auto h-32 items-end">
                              <div
                                className="flex-1 bg-[#4C78FF] rounded-xl"
                                style={{ height: "70%", minHeight: "4px" }}
                              ></div>
                              <div
                                className="flex-1 bg-[#FCAA0B] rounded-xl"
                                style={{ height: "30%", minHeight: "4px" }}
                              ></div>
                            </div>
                            <div className="text-gray-400 text-xs">Mon</div>
                          </div>
                          {/* Tue */}
                          <div className="flex flex-col items-center gap-2 flex-1">
                            <div className="flex gap-1 w-full max-w-[60px] mx-auto h-32 items-end">
                              <div
                                className="flex-1 bg-[#4C78FF] rounded-xl"
                                style={{ height: "50%", minHeight: "4px" }}
                              ></div>
                              <div
                                className="flex-1 bg-[#FCAA0B] rounded-xl"
                                style={{ height: "50%", minHeight: "4px" }}
                              ></div>
                            </div>
                            <div className="text-gray-400 text-xs">Tue</div>
                          </div>
                          {/* Wed */}
                          <div className="flex flex-col items-center gap-2 flex-1">
                            <div className="flex gap-1 w-full max-w-[60px] mx-auto h-32 items-end">
                              <div
                                className="flex-1 bg-[#4C78FF] rounded-xl"
                                style={{ height: "80%", minHeight: "4px" }}
                              ></div>
                              <div
                                className="flex-1 bg-[#FCAA0B] rounded-xl"
                                style={{ height: "20%", minHeight: "4px" }}
                              ></div>
                            </div>
                            <div className="text-gray-400 text-xs">Wed</div>
                          </div>
                          {/* Thu */}
                          <div className="flex flex-col items-center gap-2 flex-1">
                            <div className="flex gap-1 w-full max-w-[60px] mx-auto h-32 items-end">
                              <div
                                className="flex-1 bg-[#4C78FF] rounded-xl"
                                style={{ height: "45%", minHeight: "4px" }}
                              ></div>
                              <div
                                className="flex-1 bg-[#FCAA0B] rounded-xl"
                                style={{ height: "55%", minHeight: "4px" }}
                              ></div>
                            </div>
                            <div className="text-gray-400 text-xs">Thu</div>
                          </div>
                          {/* Fri */}
                          <div className="flex flex-col items-center gap-2 flex-1">
                            <div className="flex gap-1 w-full max-w-[60px] mx-auto h-32 items-end">
                              <div
                                className="flex-1 bg-[#4C78FF] rounded-xl"
                                style={{ height: "35%", minHeight: "4px" }}
                              ></div>
                              <div
                                className="flex-1 bg-[#FCAA0B] rounded-xl"
                                style={{ height: "65%", minHeight: "4px" }}
                              ></div>
                            </div>
                            <div className="text-gray-400 text-xs">Fri</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Invoice Sent */}
                <div className="lg:flex-1">
                  <div className="font-bold text-xl sm:text-2xl text-[#343C6A] mb-4">
                    Invoices Sent
                  </div>
                  <div className="w-full rounded-2xl min-h-[295px] bg-white border border-gray-200">
                    <div className="p-4 space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <img
                            src={AppleIcon}
                            alt=""
                            className="w-10 h-10 sm:w-12 sm:h-12"
                          />
                          <div>
                            <div className="text-[#232323] font-semibold text-sm sm:text-base">
                              Apple Store
                            </div>
                            <div className="text-[#718EBF] text-xs sm:text-sm">
                              5h ago
                            </div>
                          </div>
                        </div>
                        <div className="text-[#718EBF]  text-sm sm:text-base">
                          $450
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <img
                            src={UsersIcon}
                            alt=""
                            className="w-10 h-10 sm:w-12 sm:h-12"
                          />
                          <div>
                            <div className="text-[#232323] font-semibold text-sm sm:text-base">
                              Michael
                            </div>
                            <div className="text-[#718EBF] text-xs sm:text-sm">
                              2 days ago
                            </div>
                          </div>
                        </div>
                        <div className="text-[#718EBF] text-sm sm:text-base">
                          $160
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <img
                            src={PsIcon}
                            alt=""
                            className="w-10 h-10 sm:w-12 sm:h-12"
                          />
                          <div>
                            <div className="text-[#232323] font-semibold text-sm sm:text-base">
                              Playstation
                            </div>
                            <div className="text-[#718EBF] text-xs sm:text-sm">
                              5 days ago
                            </div>
                          </div>
                        </div>
                        <div className="text-[#718EBF] text-sm sm:text-base">
                          $1085
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <img
                            src={Users2Icon}
                            alt=""
                            className="w-10 h-10 sm:w-12 sm:h-12"
                          />
                          <div>
                            <div className="text-[#232323] font-semibold text-sm sm:text-base">
                              William
                            </div>
                            <div className="text-[#718EBF] text-xs sm:text-sm">
                              10 days ago
                            </div>
                          </div>
                        </div>
                        <div className="text-[#718EBF] text-sm sm:text-base">
                          $90
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Background>
      </div>
    </div>
  );
}
