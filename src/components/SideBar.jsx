import { HiCreditCard } from "react-icons/hi2";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div>
      <div className="bg-white w-58 h-screen border-1 border-line">
        {/* Logo BankDash. */}
        <div className="m-6">
          <div className="flex justify-center">
            <div className="flex items-center gap-2">
              <HiCreditCard className="text-5xl text-textblue" />
              <div className="font-bold text-2xl text-textprim">BankDash.</div>
            </div>
          </div>

          {/* isi sidebar */}
          <div className="flex justify-center">
            <div className="mt-10  space-y-8">
              {/* Dashboard */}
              <Link to="" className="cursor-pointer flex items-center gap-4">
                <IoMdHome className="text-3xl text-tthird" />
                <div className="font-medium text-lg text-tthird">Dashboard</div>
              </Link>
              {/* Transaction */}
              <Link to="" className="cursor-pointer flex items-center gap-4">
                <img src="/src/assets/icon/transaction.svg" alt="" />
                <div className="font-medium text-lg text-tthird font-primary">
                  Transaction
                </div>
              </Link>
              {/* Accounts */}
              <Link to="" className="cursor-pointer flex items-center gap-4">
                <IoMdHome className="text-3xl text-tthird" />
                <div className="font-medium text-lg text-tthird">Accounts</div>
              </Link>
              {/* Investments */}
              <Link to="" className="cursor-pointer flex items-center gap-4">
                <IoMdHome className="text-3xl text-tthird" />
                <div className="font-medium text-lg text-tthird">
                  Investments
                </div>
              </Link>
              {/* Credit Cards */}
              <Link to="" className="cursor-pointer flex items-center gap-4">
                <IoMdHome className="text-3xl text-tthird" />
                <div className="font-medium text-lg text-tthird">
                  Credit Cards
                </div>
              </Link>
              {/* Loans */}
              <Link to="" className="cursor-pointer flex items-center gap-4">
                <IoMdHome className="text-3xl text-tthird" />
                <div className="font-medium text-lg text-tthird">Loans</div>
              </Link>
              {/* Services */}
              <Link to="" className="cursor-pointer flex items-center gap-4">
                <IoMdHome className="text-3xl text-tthird" />
                <div className="font-medium text-lg text-tthird">Services</div>
              </Link>
              {/* My Privileges */}
              <Link to="" className="cursor-pointer flex items-center gap-4">
                <IoMdHome className="text-3xl text-tthird" />
                <div className="font-medium text-lg text-tthird">
                  My Privileges
                </div>
              </Link>
              {/* Setting */}
              <Link to="" className="cursor-pointer flex items-center gap-4">
                <IoMdHome className="text-3xl text-tthird" />
                <div className="font-medium text-lg text-tthird">Setting</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
