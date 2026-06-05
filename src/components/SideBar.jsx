// src/components/SideBar.jsx
import { NavLink } from "react-router-dom";

function SideBar({ setIsOpen, isOpen }) {
  const menuItems = [
    {
      id: "dashboard",
      name: "Dashboard",
      icon: "/assets/icon/dash.svg", // ← hapus /src
      path: "/dashboard",
    },
    {
      id: "transaction",
      name: "Transaction",
      icon: "/assets/icon/transactionclose.svg",
      iconActive: "/assets/icon/transaction.svg",
      path: "/transaction",
    },
    {
      id: "accounts",
      name: "Accounts",
      icon: "/assets/icon/user.svg",
      iconActive: "/assets/icon/accountsopen.svg",
      path: "/accounts",
    },
    {
      id: "investments",
      name: "Investments",
      icon: "/assets/icon/investment.svg",
      path: "/investments",
    },
    {
      id: "creditcards",
      name: "Credit Cards",
      icon: "/assets/icon/credit.svg",
      path: "/creditcards",
    },
    {
      id: "loans",
      name: "Loans",
      icon: "/assets/icon/loan.svg",
      path: "/loans",
    },
    {
      id: "services",
      name: "Services",
      icon: "/assets/icon/service.svg",
      path: "/services",
    },
    {
      id: "privileges",
      name: "My Privileges",
      icon: "/assets/icon/priv.svg",
      path: "/privileges",
    },
    {
      id: "setting",
      name: "Setting",
      icon: "/assets/icon/setting1.svg",
      iconActive: "/assets/icon/settingopen.svg",
      path: "/setting",
    },
  ];

  return (
    <>
      {/*mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          fixed md:relative z-50 bg-white w-64 h-screen border-r border-line flex-shrink-0
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="m-6">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src="/src/assets/icon/bdash.svg"
                alt=""
                className="w-6 h-6"
              />
              <div className="font-bold text-2xl text-textprim">BankDash.</div>
            </div>
          </div>

          {/* Menu */}
          <div className="flex justify-center mt-10">
            <div className="space-y-6 w-full">
              {menuItems.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `relative flex items-center gap-4 px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "text-textblue"
                        : "text-tthird hover:bg-gray-50 hover:text-textblue"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {/* Bar */}
                      {isActive && (
                        <div className="absolute -left-6 w-1 h-6 bg-textblue rounded-full"></div>
                      )}

                      <div className="w-6 flex justify-end">
                        <img
                          src={
                            isActive && item.iconActive
                              ? item.iconActive
                              : item.icon
                          }
                          alt=""
                          className={`w-5 h-5 ${isActive ? "opacity-100" : "opacity-70"}`}
                        />
                      </div>
                      <div
                        className={`font-medium text-base ${
                          isActive
                            ? "text-textblue font-semibold"
                            : "text-tthird"
                        }`}
                      >
                        {item.name}
                      </div>
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
