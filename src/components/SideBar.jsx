import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div>
      <div className="bg-white w-58 h-screen border-1 border-line">
        {/* Logo BankDash. */}
        <div className="m-6">
          <div className="flex justify-center">
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="/src/assets/icon/bdash.svg" alt="" />
              <div className="font-bold text-2xl text-textprim">BankDash.</div>
            </div>
          </div>

          {/* isi sidebar */}
          <div className=" flex justify-center">
            <div className="mt-10  space-y-8 md:space-y-6">
              {/* Dashboard */}
              <Link
                to=""
                className="cursor-pointer flex justify-center items-center gap-4 md:gap-2"
              >
                <div className=" flex justify-end">
                  <img
                    src="/src/assets/icon/dash.svg"
                    alt=""
                    className="md:h-4 md:w-4"
                  />
                </div>
                <div className="font-medium text-lg text-tthird md:text-base w-32">
                  Dashboard
                </div>
              </Link>
              {/* Transaction */}
              <Link
                to=""
                className="cursor-pointer flex justify-center items-center gap-4 md:gap-2"
              >
                <div className="flex justify-end">
                  <img
                    src="/src/assets/icon/transaction.svg"
                    alt=""
                    className="md:h-4 md:w-4"
                  />
                </div>
                <div className="font-medium text-lg text-textblue font-primary md:text-base text-left w-32">
                  Transaction
                </div>
              </Link>
              {/* Accounts */}
              <Link
                to=""
                className="cursor-pointer flex items-center gap-4 md:gap-2"
              >
                <img
                  src="/src/assets/icon/user.svg"
                  alt=""
                  className="md:h-4 md:w-4"
                />
                <div className="font-medium text-lg text-tthird md:text-base">
                  Accounts
                </div>
              </Link>
              {/* Investments */}
              <Link
                to=""
                className="cursor-pointer flex items-center gap-4 md:gap-2"
              >
                <img
                  src="/src/assets/icon/investment.svg"
                  alt=""
                  className="md:h-4 md:w-4"
                />
                <div className="font-medium text-lg text-tthird md:text-base ">
                  Investments
                </div>
              </Link>
              {/* Credit Cards */}
              <Link
                to=""
                className="cursor-pointer flex items-center gap-4 md:gap-2"
              >
                <img
                  src="/src/assets/icon/credit.svg"
                  alt=""
                  className="md:h-4 md:w-4"
                />
                <div className="font-medium text-lg text-tthird md:text-base">
                  Credit Cards
                </div>
              </Link>
              {/* Loans */}
              <Link
                to=""
                className="cursor-pointer flex items-center gap-4 md:gap-2"
              >
                <img
                  src="/src/assets/icon/loan.svg"
                  alt=""
                  className="md:h-4 md:w-4"
                />
                <div className="font-medium text-lg text-tthird md:text-base">
                  Loans
                </div>
              </Link>
              {/* Services */}
              <Link
                to=""
                className="cursor-pointer flex items-center gap-4 md:gap-2"
              >
                <img
                  src="/src/assets/icon/service.svg"
                  alt=""
                  className="md:h-4 md:w-4"
                />
                <div className="font-medium text-lg text-tthird md:text-base">
                  Services
                </div>
              </Link>
              {/* My Privileges */}
              <Link
                to=""
                className="cursor-pointer flex items-center gap-4 md:gap-2"
              >
                <img
                  src="/src/assets/icon/priv.svg"
                  alt=""
                  className="md:h-4 md:w-4"
                />
                <div className="font-medium text-lg text-tthird md:text-base">
                  My Privileges
                </div>
              </Link>
              {/* Setting */}
              <Link
                to=""
                className="cursor-pointer flex items-center gap-4 md:gap-2"
              >
                <img
                  src="/src/assets/icon/set1.svg"
                  alt=""
                  className="md:h-4 md:w-4"
                />
                <div className="font-medium text-lg text-tthird md:text-base">
                  Setting
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
