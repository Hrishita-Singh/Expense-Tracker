import Sidebar from "../components/Sidebar";

function BudgetPlanner() {
  return (
    <div className="flex bg-[#b4e8ed] min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8 ml-64">

        <h1 className="text-4xl font-bold text-[#111827]">
          Budget Planner
        </h1>

        <p className="text-gray-500 mt-2">
          Set and track your monthly budgets
        </p>

        {/* Budget Summary */}

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="bg-[#ceeff0] rounded-3xl shadow p-6">
            <h2 className="text-gray-500">Total Budget</h2>
            <p className="text-3xl font-bold mt-2">₹20,000</p>
          </div>

          <div className="bg-[#ceeff0] rounded-3xl shadow p-6">
            <h2 className="text-gray-500">Spent</h2>
            <p className="text-3xl font-bold text-red-500 mt-2">
              ₹8,500
            </p>
          </div>

          <div className="bg-[#ceeff0] rounded-3xl shadow p-6">
            <h2 className="text-gray-500">Remaining</h2>
            <p className="text-3xl font-bold text-green-600 mt-2">
              ₹11,500
            </p>
          </div>

        </div>

        {/* Set Budget */}

        <div className="bg-[#ceeff0] rounded-3xl shadow p-6 mt-8">

          <h2 className="text-2xl font-bold mb-6">
            Set Budget
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Category (Food, Travel...)"
              className="border border-gray-300 rounded-xl p-3 outline-none focus:border-[#6ED3CF]"
            />

            <input
              type="number"
              placeholder="Budget Amount"
              className="border border-gray-300 rounded-xl p-3 outline-none focus:border-[#6ED3CF]"
            />

          </div>

          <button className="mt-6 bg-[#2a7d85] text-white px-6 py-3 rounded-xl font-semibold">
            Save Budget
          </button>

        </div>

        {/* Budget Progress */}

        <div className="bg-[#ceeff0] rounded-3xl shadow p-6 mt-8">

          <h2 className="text-2xl font-bold mb-6">
            Budget Progress
          </h2>

          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span>Food</span>
              <span>70%</span>
            </div>

            <div className="w-full bg-gray-200 h-3 rounded-full">
              <div className="bg-[#6ED3CF] h-3 rounded-full w-[70%]"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span>Travel</span>
              <span>45%</span>
            </div>

            <div className="w-full bg-gray-200 h-3 rounded-full">
              <div className="bg-[#6ED3CF] h-3 rounded-full w-[45%]"></div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default BudgetPlanner;