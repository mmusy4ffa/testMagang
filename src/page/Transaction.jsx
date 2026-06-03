// import Background from "../components/Background";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Background from "../components/Background";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { CiCircleChevUp } from "react-icons/ci";
import { CiCircleChevDown } from "react-icons/ci";

export default function Transaction() {
  const [isOpen, setIsOpen] = useState(false);
  function handleBurger() {
    setIsOpen((open) => !open);
  }
  const [active, setActive] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  const tabs = [
    { id: "all", label: "All Transactions" },
    { id: "income", label: "Income" },
    { id: "expense", label: "Expense" },
  ];

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const allTransactions = [
    {
      id: 1,
      name: "Spotify Subscription",
      transactionId: "#12548796",
      type: "Shopping",
      card: "1234 ****",
      date: "28 Jan, 12.30 AM",
      amount: "-$2,500",
      amountClass: "text-[#FE5C73]",
      icon: "up",
    },
    {
      id: 2,
      name: "Freepik Sales",
      transactionId: "#12548796",
      type: "Transfer",
      card: "1234 ****",
      date: "25 Jan, 10.40 PM",
      amount: "+$750",
      amountClass: "text-[#16DBAA]",
      icon: "down",
    },
    {
      id: 3,
      name: "Mobile Service",
      transactionId: "#12548796",
      type: "Service",
      card: "1234 ****",
      date: "20 Jan, 10.40 PM",
      amount: "-$150",
      amountClass: "text-[#FE5C73]",
      icon: "up",
    },
    {
      id: 4,
      name: "Wilson",
      transactionId: "#12548796",
      type: "Transfer",
      card: "1234 ****",
      date: "15 Jan, 03.29 PM",
      amount: "-$1050",
      amountClass: "text-[#FE5C73]",
      icon: "up",
    },
    {
      id: 5,
      name: "Emilly",
      transactionId: "#12548796",
      type: "Transfer",
      card: "1234 ****",
      date: "14 Jan, 10.40 PM",
      amount: "+$840",
      amountClass: "text-[#16DBAA]",
      icon: "down",
    },
    {
      id: 6,
      name: "Netflix Subscription",
      transactionId: "#12548796",
      type: "Entertainment",
      card: "1234 ****",
      date: "10 Jan, 08.30 PM",
      amount: "-$15.99",
      amountClass: "text-[#FE5C73]",
      icon: "up",
    },
    {
      id: 7,
      name: "Uber Eats",
      transactionId: "#12548796",
      type: "Food",
      card: "1234 ****",
      date: "08 Jan, 07.15 PM",
      amount: "-$45.50",
      amountClass: "text-[#FE5C73]",
      icon: "up",
    },
    {
      id: 8,
      name: "Salary Deposit",
      transactionId: "#12548796",
      type: "Income",
      card: "1234 ****",
      date: "01 Jan, 12.00 PM",
      amount: "+$3,500",
      amountClass: "text-[#16DBAA]",
      icon: "down",
    },
  ];

  const getFilteredTransactions = () => {
    if (active === "income") {
      return allTransactions.filter((t) => t.amount.includes("+"));
    } else if (active === "expense") {
      return allTransactions.filter((t) => t.amount.includes("-"));
    }
    return allTransactions;
  };

  const itemsPerPage = 5;
  const filteredTransactions = getFilteredTransactions();
  const totalFilteredPages = Math.ceil(
    filteredTransactions.length / itemsPerPage,
  );
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTransactions = filteredTransactions.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

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
              <div className="flex justify-between items-center flex-wrap gap-4">
                <div className="font-bold text-xl sm:text-2xl text-[#343C6A]">
                  My Cards
                </div>
                <div className="text-sm sm:text-base font-semibold text-[#343C6A] cursor-pointer hover:text-blue-700 px-3 sm:px-4 py-1 sm:py-2 rounded-lg transition">
                  + Add Cards
                </div>
              </div>

              {/* Cards */}
              <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
                <div className="flex gap-4 min-w-max xl:min-w-0 xl:grid xl:grid-cols-3 xl:gap-4">
                  {/* Card 1 */}
                  <div className="w-[280px] sm:w-[320px] md:w-[350px] xl:w-auto rounded-2xl bg-gradient-to-r from-[#4C49ED] to-[#0A06F4] flex-shrink-0 xl:flex-shrink">
                    <div className="m-4 sm:m-6 space-y-4">
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
                          src="/src/assets/icon/Chip_Card.svg"
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
                    <div className="w-full bg-gradient-to-b from-[#4C49ED] to-[#0A06F4] rounded-b-2xl">
                      <div className="px-4 py-3">
                        <div className="flex justify-between items-center">
                          <div className="text-white text-sm sm:text-xl truncate">
                            3778 **** **** 1234
                          </div>
                          <img
                            src="/src/assets/icon/dsds.svg"
                            alt=""
                            className="w-6 h-6 sm:w-8 sm:h-8"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="w-[280px] sm:w-[320px] md:w-[350px] xl:w-auto rounded-2xl bg-white border border-gray-200 flex-shrink-0 xl:flex-shrink">
                    <div className="m-4 sm:m-6 space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-black text-xs sm:text-sm">
                            Balance
                          </div>
                          <div className="text-black text-xl sm:text-2xl">
                            $5,756
                          </div>
                        </div>
                        <img
                          src="/src/assets/icon/Chip_CardB.svg"
                          alt=""
                          className="w-8 h-8 sm:w-10 sm:h-10"
                        />
                      </div>
                      <div className="flex flex-wrap items-center gap-4 sm:gap-10">
                        <div>
                          <div className="text-black text-xs sm:text-sm">
                            CARD HOLDER
                          </div>
                          <div className="text-black text-xs sm:text-sm font-semibold">
                            Eddy Cusuma
                          </div>
                        </div>
                        <div>
                          <div className="text-black text-xs sm:text-sm">
                            VALID THRU
                          </div>
                          <div className="text-black text-xs sm:text-sm font-semibold">
                            12/22
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-white rounded-b-2xl border-t border-gray-200">
                      <div className="px-4 py-3">
                        <div className="flex justify-between items-center">
                          <div className="text-black text-sm sm:text-xl truncate">
                            3778 **** **** 1234
                          </div>
                          <img
                            src="/src/assets/icon/dsdsB.svg"
                            alt=""
                            className="w-6 h-6 sm:w-8 sm:h-8"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="w-[280px] sm:w-[320px] md:w-[350px] xl:w-auto rounded-2xl bg-gradient-to-r from-[#2D2A8F] to-[#1A18B0] flex-shrink-0 xl:flex-shrink">
                    <div className="m-4 sm:m-6 space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-white text-xs sm:text-sm">
                            Balance
                          </div>
                          <div className="text-white text-xl sm:text-2xl">
                            $3,245
                          </div>
                        </div>
                        <img
                          src="/src/assets/icon/Chip_Card.svg"
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
                    <div className="w-full bg-gradient-to-b from-[#2D2A8F] to-[#1A18B0] rounded-b-2xl">
                      <div className="px-4 py-3">
                        <div className="flex justify-between items-center">
                          <div className="text-white text-sm sm:text-xl truncate">
                            3778 **** **** 1234
                          </div>
                          <img
                            src="/src/assets/icon/dsds.svg"
                            alt=""
                            className="w-6 h-6 sm:w-8 sm:h-8"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-xl sm:text-2xl font-bold text-[#343C6A] pt-2">
                Recent Transactions
              </div>

              {/* Tablet */}
              <div className="flex gap-4 sm:gap-8 border-b border-line overflow-x-auto scrollbar-hide">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActive(tab.id);
                      setCurrentPage(1);
                    }}
                    className={`px-2 py-2 transition-all duration-300 ease-in-out cursor-pointer whitespace-nowrap text-sm sm:text-base ${
                      active === tab.id
                        ? "text-textblue border-b-2 border-textblue"
                        : "text-[#718EBF] border-b-2 border-transparent hover:text-textblue hover:border-textblue"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Mobile */}
              <div className="overflow-x-auto scrollbar-hide">
                <div className="min-w-[800px] lg:min-w-full">
                  <div className="bg-white rounded-xl h-auto shadow-sm">
                    <div className="p-3 sm:p-4">
                      {/* Header */}
                      <div className="border-b border-[#718EBF] pb-3 sm:pb-4">
                        <div className="grid grid-cols-7 gap-2 sm:gap-4">
                          <div className="text-[#718EBF] font-medium text-xs sm:text-sm">
                            Descriptions
                          </div>
                          <div className="text-[#718EBF] font-medium text-xs sm:text-sm">
                            Transaction ID
                          </div>
                          <div className="text-[#718EBF] font-medium text-xs sm:text-sm">
                            Type
                          </div>
                          <div className="text-[#718EBF] font-medium text-xs sm:text-sm">
                            Card
                          </div>
                          <div className="text-[#718EBF] font-medium text-xs sm:text-sm">
                            Date
                          </div>
                          <div className="text-[#718EBF] font-medium text-xs sm:text-sm">
                            Amount
                          </div>
                          <div className="text-[#718EBF] font-medium text-xs sm:text-sm">
                            Receipt
                          </div>
                        </div>
                      </div>

                      {paginatedTransactions.length > 0 ? (
                        paginatedTransactions.map((item, idx) => (
                          <div
                            key={item.id}
                            className={`${
                              idx !== paginatedTransactions.length - 1
                                ? "border-b border-[#718EBF]"
                                : ""
                            } py-3 sm:py-4`}
                          >
                            <div className="grid grid-cols-7 gap-2 sm:gap-4 items-center">
                              <div className="flex items-center gap-2 sm:gap-3">
                                {item.icon === "up" ? (
                                  <CiCircleChevUp className="text-[#718EBF] text-xl sm:text-3xl flex-shrink-0" />
                                ) : (
                                  <CiCircleChevDown className="text-[#718EBF] text-xl sm:text-3xl flex-shrink-0" />
                                )}
                                <div className="text-[#232323] text-xs sm:text-sm truncate">
                                  {item.name}
                                </div>
                              </div>
                              <div className="text-[#232323] text-xs sm:text-sm">
                                {item.transactionId}
                              </div>
                              <div className="text-[#232323] text-xs sm:text-sm">
                                {item.type}
                              </div>
                              <div className="text-[#232323] text-xs sm:text-sm">
                                {item.card}
                              </div>
                              <div className="text-[#232323] text-xs sm:text-sm">
                                {item.date}
                              </div>
                              <div
                                className={`${item.amountClass} text-xs sm:text-sm font-semibold`}
                              >
                                {item.amount}
                              </div>
                              <div>
                                <button className="outline-1 outline-[#123288] hover:bg-textblue text-[#123288] hover:text-white px-2 sm:px-4 py-1 sm:py-2 rounded-xl sm:rounded-2xl text-xs sm:text-sm transition cursor-pointer whitespace-nowrap">
                                  Download
                                </button>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="py-8 text-center text-gray-500">
                          No transactions found
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {filteredTransactions.length > itemsPerPage && (
                <div className="flex justify-end items-center gap-1 sm:gap-2 mt-4 overflow-x-auto scrollbar-hide pb-2">
                  <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className={`flex items-center gap-1 cursor-pointer text-xs sm:text-sm ${
                      currentPage === 1
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:text-textblue"
                    }`}
                  >
                    <IoIosArrowBack />
                    <div className="font-bold">Previous</div>
                  </button>

                  {Array.from(
                    { length: totalFilteredPages },
                    (_, i) => i + 1,
                  ).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-2 sm:px-4 py-1 sm:py-2 rounded-xl transition text-xs sm:text-sm ${
                        currentPage === page
                          ? "bg-textblue text-white"
                          : "bg-gray-100 text-textblue hover:bg-textblue hover:text-white"
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={handleNext}
                    disabled={currentPage === totalFilteredPages}
                    className={`flex items-center gap-1 cursor-pointer text-xs sm:text-sm ${
                      currentPage === totalFilteredPages
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:text-textblue"
                    }`}
                  >
                    <div className="font-bold">Next</div>
                    <IoIosArrowForward />
                  </button>
                </div>
              )}
            </div>
          </div>
        </Background>
      </div>
    </div>
  );
}
