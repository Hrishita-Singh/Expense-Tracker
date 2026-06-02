import {
  FaChartLine,
  FaWallet,
  FaMoneyBillWave,
  FaReceipt,
  FaChartPie,
  FaCalendarAlt,
  FaLock
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Features() {

  const navigate = useNavigate();

  const handleFeatureClick = (path) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
      navigate(path);
    } else {
      alert("Please login first!");
      navigate("/login");
    }
  };

  const features = [

    {
      title: "Expense Dashboard",
      description: "Track all expenses visually with analytics.",
      icon: <FaChartLine />,
      path: "/dashboard"
    },

    {
      title: "Transactions",
      description: "View complete income and expense history.",
      icon: <FaReceipt />,
      path: "/transactions"
    },

    {
      title: "Income",
      description: "Manage salary and income records easily.",
      icon: <FaMoneyBillWave />,
      path: "/income"
    },

    {
      title: "Expense",
      description: "Add and organize daily expenses smarter.",
      icon: <FaWallet />,
      path: "/expense"
    },

    {
      title: "Reports",
      description: "Analyze reports and spending habits.",
      icon: <FaChartPie />,
      path: "/reports"
    },

    {
      title: "Budget Planner",
      description: "Plan monthly budgets effectively.",
      icon: <FaCalendarAlt />,
      path: "/budget-planner"
    }

  ];

  return (

    <section
      id="features"
      className="
      w-full
      py-28
      px-8
      md:px-20
      bg-[#b4e8ed]
      "
    >

      {/* Heading */}

      <div className="text-center">

        <h1 className="
        text-5xl
        font-bold
        text-[#111827]
        ">
          Powerful Features
        </h1>

        <p className="
        mt-5
        text-lg
        text-[#4b5a5c]
        max-w-2xl
        mx-auto
        leading-8
        ">
          Everything you need to manage your money smarter
          and track expenses efficiently.
        </p>

      </div>

      {/* Cards */}

      <div className="
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      gap-10
      mt-20
      ">

        {features.map((item, index) => (

          <div
            key={index}

            className="
            bg-white
            p-8
            rounded-3xl
            shadow-lg
            hover:-translate-y-3
            transition
            duration-300
            relative
            border
            border-gray-100
            "
          >

            {/* Lock Icon */}
            {localStorage.getItem("isLoggedIn") !== "true"&& (
            <div className="
            absolute
            top-6
            right-6
            text-[#4c5454]
            text-lg
            ">
              <FaLock />
            </div>
            )}

            {/* Main Icon */}

            <div className="
            text-5xl
            text-[#2c5354]
            mb-6
            ">
              {item.icon}
            </div>

            {/* Title */}

            <h2 className="
            text-2xl
            font-bold
            text-[#111827]
            ">
              {item.title}
            </h2>

            {/* Description */}

            <p className="
            mt-4
            text-[#4b5a5c]
            leading-7
            ">
              {item.description}
            </p>

            {/* Button */}

            <button onClick={() => handleFeatureClick(item.path)} className="
            mt-8
            w-full
            bg-[#2a7d85]
            hover:bg-[#50858a]
            text-white
            py-3
            rounded-2xl
            font-semibold
            transition
            ">
              {localStorage.getItem("isLoggedIn")==="true"
              ?"Open Feature"
              : "Login to Access"
              }
              
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Features;

