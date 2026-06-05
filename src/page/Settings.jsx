// import Background from "../components/Background";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Background from "../components/Background";
import ProfileIcon from "/src/assets/icon/profile.png";
import EditBIcon from "/src/assets/icon/editb.svg";

export default function Setting() {
  const [isOpen, setIsOpen] = useState(false);

  function handleBurger() {
    setIsOpen((open) => !open);
  }

  const [activeTab, setActiveTab] = useState("edit-profile");

  const tabs = [
    { id: "edit-profile", label: "Edit Profile" },
    { id: "preferences", label: "Preferences" },
    { id: "security", label: "Security" },
  ];

  const [isToggle1, setIsToggle1] = useState(false);
  const [isToggle2, setIsToggle2] = useState(false);
  const [isToggle3, setIsToggle3] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <SideBar isOpen={isOpen} setIsOpen={handleBurger} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-shrink-0">
          <Navbar isOpen={isOpen} setIsOpen={handleBurger} title="Settings" />
        </div>
        <Background>
          <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
            <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
              <div className="bg-white rounded-2xl border border-line">
                {/* Tab Navigation */}
                <div className="flex gap-4 sm:gap-8 border-b border-line px-4 sm:px-6 pt-4 sm:pt-6 overflow-x-auto scrollbar-hide">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-2 pb-2 sm:pb-3 transition-all duration-300 ease-in-out cursor-pointer whitespace-nowrap text-sm sm:text-base ${
                        activeTab === tab.id
                          ? "text-textblue border-b-2 border-textblue"
                          : "text-[#718EBF] border-b-2 border-transparent hover:text-textblue hover:border-textblue"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Konten aktif */}
                <div className="p-4 sm:p-6">
                  {activeTab === "edit-profile" && (
                    <div className="flex flex-col lg:flex-row">
                      <div className="relative w-28 h-28 cursor-pointer mx-auto lg:mx-0">
                        <img
                          src={ProfileIcon}
                          alt="Profile"
                          className="w-28 h-28 rounded-full object-cover"
                        />
                        <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full flex items-center justify-center">
                          <img src={EditBIcon} alt="Edit" className="w-8 h-8" />
                        </div>
                      </div>
                      <div className="lg:px-6 xl:px-24 flex-1">
                        <div className="flex flex-col lg:flex-row gap-6 lg:gap-36">
                          <div className="space-y-4 flex-1">
                            <div className="space-y-2">
                              <div className="text-sm sm:text-base">
                                Your Name
                              </div>
                              <input
                                type="text"
                                placeholder="Charlene Reed"
                                className="w-full border p-2 rounded-xl placeholder:text-[#718EBF] border-[#DFEAF2] focus:outline-none text-[#232323] text-sm sm:text-base"
                              />
                            </div>
                            <div className="space-y-2">
                              <div className="text-sm sm:text-base">Email</div>
                              <input
                                type="email"
                                placeholder="charlenereed@gmail.com"
                                className="w-full border p-2 rounded-xl placeholder:text-[#718EBF] border-[#DFEAF2] focus:outline-none text-[#232323] text-sm sm:text-base"
                              />
                            </div>
                            <div className="space-y-2">
                              <div className="text-sm sm:text-base">
                                Date of Birth
                              </div>
                              <input
                                type="text"
                                placeholder="25 January 1990"
                                className="w-full border p-2 rounded-xl placeholder:text-[#718EBF] border-[#DFEAF2] focus:outline-none text-[#232323] text-sm sm:text-base"
                              />
                            </div>
                            <div className="space-y-2">
                              <div className="text-sm sm:text-base">
                                Permanent Address
                              </div>
                              <input
                                type="text"
                                placeholder="San Jose, California, USA"
                                className="w-full border p-2 rounded-xl placeholder:text-[#718EBF] border-[#DFEAF2] focus:outline-none text-[#232323] text-sm sm:text-base"
                              />
                            </div>
                            <div className="space-y-2">
                              <div className="text-sm sm:text-base">
                                Postal Code
                              </div>
                              <input
                                type="text"
                                placeholder="45962"
                                className="w-full border p-2 rounded-xl placeholder:text-[#718EBF] border-[#DFEAF2] focus:outline-none text-[#232323] text-sm sm:text-base"
                              />
                            </div>
                          </div>
                          <div className="space-y-4 flex-1">
                            <div className="space-y-2">
                              <div className="text-sm sm:text-base">
                                User Name
                              </div>
                              <input
                                type="text"
                                placeholder="Charlene Reed"
                                className="w-full border p-2 rounded-xl placeholder:text-[#718EBF] border-[#DFEAF2] focus:outline-none text-[#232323] text-sm sm:text-base"
                              />
                            </div>
                            <div className="space-y-2">
                              <div className="text-sm sm:text-base">
                                Password
                              </div>
                              <input
                                type="password"
                                placeholder="**********"
                                className="w-full border p-2 rounded-xl placeholder:text-[#718EBF] border-[#DFEAF2] focus:outline-none text-[#232323] text-sm sm:text-base"
                              />
                            </div>
                            <div className="space-y-2">
                              <div className="text-sm sm:text-base">
                                Present Address
                              </div>
                              <input
                                type="text"
                                placeholder="San Jose, California, USA"
                                className="w-full border p-2 rounded-xl placeholder:text-[#718EBF] border-[#DFEAF2] focus:outline-none text-[#232323] text-sm sm:text-base"
                              />
                            </div>
                            <div className="space-y-2">
                              <div className="text-sm sm:text-base">City</div>
                              <input
                                type="text"
                                placeholder="San Jose"
                                className="w-full border p-2 rounded-xl placeholder:text-[#718EBF] border-[#DFEAF2] focus:outline-none text-[#232323] text-sm sm:text-base"
                              />
                            </div>
                            <div className="space-y-2">
                              <div className="text-sm sm:text-base">
                                Country
                              </div>
                              <input
                                type="text"
                                placeholder="USA"
                                className="w-full border p-2 rounded-xl placeholder:text-[#718EBF] border-[#DFEAF2] focus:outline-none text-[#232323] text-sm sm:text-base"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center lg:justify-end mt-6">
                          <button className="bg-textblue text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer text-sm max-md:w-full w-48  sm:text-base">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "preferences" && (
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                        <div className="space-y-2 flex-1">
                          <div className="text-sm sm:text-base">Country</div>
                          <input
                            type="text"
                            placeholder="USA"
                            className="w-full border p-2 rounded-xl placeholder:text-[#718EBF] border-[#DFEAF2] focus:outline-none text-[#232323] text-sm sm:text-base"
                          />
                        </div>

                        <div className="space-y-2 flex-1">
                          <div className="text-sm sm:text-base">Time Zone</div>
                          <input
                            type="text"
                            placeholder="(GMT-12:00) International Date Line West"
                            className="w-full border p-2 rounded-xl placeholder:text-[#718EBF] border-[#DFEAF2] focus:outline-none text-[#232323] text-sm sm:text-base"
                          />
                        </div>
                      </div>

                      <div className="text-base sm:text-lg">Notification</div>

                      <div className="flex flex-col gap-4">
                        {/* Toggle 1 */}
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => setIsToggle1(!isToggle1)}
                            className={`w-14 h-8 rounded-full transition-all duration-300 cursor-pointer flex-shrink-0 ${
                              isToggle1 ? "bg-[#16DBCC]" : "bg-gray-300"
                            }`}
                          >
                            <div
                              className={`w-5 h-5 bg-white rounded-full transition-all duration-300 transform ${
                                isToggle1 ? "translate-x-8" : "translate-x-0.5"
                              }`}
                            />
                          </button>

                          <div className="flex-1 text-sm sm:text-base text-[#232323]">
                            I send or receive digital currency
                          </div>
                        </div>

                        {/* Toggle 2 */}
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => setIsToggle2(!isToggle2)}
                            className={`w-14 h-8 rounded-full transition-all duration-300 cursor-pointer flex-shrink-0 ${
                              isToggle2 ? "bg-[#16DBCC]" : "bg-gray-300"
                            }`}
                          >
                            <div
                              className={`w-5 h-5 bg-white rounded-full transition-all duration-300 transform ${
                                isToggle2 ? "translate-x-8" : "translate-x-0.5"
                              }`}
                            />
                          </button>

                          <div className="flex-1 text-sm sm:text-base text-[#232323]">
                            I receive merchant orders
                          </div>
                        </div>

                        {/* Toggle 3 */}
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => setIsToggle3(!isToggle3)}
                            className={`w-14 h-8 rounded-full transition-all duration-300 cursor-pointer flex-shrink-0 ${
                              isToggle3 ? "bg-[#16DBCC]" : "bg-gray-300"
                            }`}
                          >
                            <div
                              className={`w-5 h-5 bg-white rounded-full transition-all duration-300 transform ${
                                isToggle3 ? "translate-x-8" : "translate-x-0.5"
                              }`}
                            />
                          </button>

                          <div className="flex-1 text-sm sm:text-base text-[#232323]">
                            There are recommendations for my account
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-center sm:justify-end mt-6">
                        <button className="bg-textblue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer max-md:w-full w-48  text-sm sm:text-base">
                          Save
                        </button>
                      </div>
                    </div>
                  )}

                  {activeTab === "security" && (
                    <div className="space-y-4">
                      <h2 className="text-base sm:text-lg text-[#343C6A]">
                        Two-factor Authentication
                      </h2>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <button
                          onClick={() => setIsToggle1(!isToggle1)}
                          className={`w-14 h-8 rounded-full transition-all duration-300 cursor-pointer ${
                            isToggle1 ? "bg-[#16DBCC]" : "bg-gray-300"
                          }`}
                        >
                          <div
                            className={`w-5 h-5 bg-white rounded-full transition-all duration-300 transform ${
                              isToggle1 ? "translate-x-8" : "translate-x-0.5"
                            }`}
                          />
                        </button>
                        <div className="text-sm sm:text-base text-[#232323]">
                          Enable or disable two factor authentication
                        </div>
                      </div>
                      <h2 className="text-base sm:text-lg text-[#343C6A] pt-4">
                        Change Password
                      </h2>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="text-sm sm:text-base text-[#232323]">
                            Current Password
                          </div>
                          <input
                            type="password"
                            placeholder="**********"
                            className="w-full border p-2 rounded-xl placeholder:text-[#718EBF] border-[#DFEAF2] focus:outline-none text-[#232323] text-sm sm:text-base"
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="text-sm sm:text-base text-[#232323]">
                            New Password
                          </div>
                          <input
                            type="password"
                            placeholder="**********"
                            className="w-full border p-2 rounded-xl placeholder:text-[#718EBF] border-[#DFEAF2] focus:outline-none text-[#232323] text-sm sm:text-base"
                          />
                        </div>
                      </div>
                      <div className="flex justify-center sm:justify-end mt-6">
                        <button className="bg-textblue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer text-sm max-md:w-full w-48 sm:text-base">
                          Save
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Background>
      </div>
    </div>
  );
}
