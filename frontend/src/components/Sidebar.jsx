import {Link,useLocation,useNavigate } from "react-router-dom";
import {
  FaChartPie,
  FaMoneyBillWave,
  FaWallet,
  FaExchangeAlt,
  FaChartLine,
  FaBullseye,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () =>{
    localStorage.removeItem("isLoggedIn");
    alert("Logged out successfully!");
    navigate("/");
  };

  return (
    <div className="fixed left-0 top-0 w-64 h-screen bg-[#ceeff0] shadow-lg p-6">

      <h1 className="text-3xl font-bold text-[#111827] mb-10">
        EXPENSE
        <span
          className="ml-2 text-[#111827] text-3xl"
          style={{ fontFamily: "Sacramento" }}
        >
          hub
        </span>
      </h1>

      <ul className="space-y-6">

        <Link to="/dashboard" 
          className={`flex items-center gap-3 p-3 rounded-xl ${
            location.pathname === "/dashboard"
            ?"bg-[#6ED3CF] text-white"
            : "hover:bg-gray-100"
          }`}
        >
          <FaChartPie />
          Dashboard
        </Link>

        <Link to="/income" 
          className={`flex items-center gap-3 p-3 rounded-xl ${
            location.pathname === "/income"
            ?"bg-[#6ED3CF] text-white"
            : "hover:bg-gray-100"
          }`}
        >
          <FaMoneyBillWave />
          Income
        </Link>

        <Link to="/expense" 
          className={`flex items-center gap-3 p-3 rounded-xl ${
            location.pathname === "/expense"
            ?"bg-[#6ED3CF] text-white"
            : "hover:bg-gray-100"
          }`}
        >
          <FaWallet />
          Expense
        </Link>

        <Link to="/transactions" 
          className={`flex items-center gap-3 p-3 rounded-xl ${
            location.pathname === "/transactions"
            ?"bg-[#6ED3CF] text-white"
            : "hover:bg-gray-100"
          }`}
        >
          <FaExchangeAlt />
          Transactions
        </Link>

        <Link to="/reports" 
          className={`flex items-center gap-3 p-3 rounded-xl ${
            location.pathname === "/reports"
            ?"bg-[#6ED3CF] text-white"
            : "hover:bg-gray-100"
          }`}
        >
          <FaChartLine />
          Reports
        </Link>

        <Link to="/budget-planner" 
          className={`flex items-center gap-3 p-3 rounded-xl ${
            location.pathname === "/budget-planner"
            ?"bg-[#6ED3CF] text-white"
            : "hover:bg-gray-100"
          }`}
        >
          <FaBullseye />
          Budget Planner
        </Link>

        <Link to="/settings" 
          className={`flex items-center gap-3 p-3 rounded-xl ${
            location.pathname === "/settings"
            ?"bg-[#6ED3CF] text-white"
            : "hover:bg-gray-100"
          }`}
        >
          <FaCog />
          Settings
        </Link>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 p-3 rounded-xl
          text-red-500 hover:bg-red-50 w-full text-left"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </ul>

    </div>
  );
}

export default Sidebar;