import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className="flex bg-[#b4e8ed]">

      <Sidebar />

      <div className="flex-1 p-8 ml-64">

        <h1 className="text-4xl font-bold text-[#111827]">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back to Expense Hub
        </p>

        {/* Summary Cards */}

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="bg-[#ceeff0] p-6 rounded-3xl shadow">
            <h2 className="text-gray-500">Total Balance</h2>
            <p className="text-3xl font-bold mt-2">₹1,24,850</p>
          </div>

          <div className="bg-[#ceeff0] p-6 rounded-3xl shadow">
            <h2 className="text-gray-500">Total Income</h2>
            <p className="text-3xl font-bold mt-2 text-green-600">
              ₹45,000
            </p>
          </div>

          <div className="bg-[#ceeff0] p-6 rounded-3xl shadow">
            <h2 className="text-gray-500">Total Expense</h2>
            <p className="text-3xl font-bold mt-2 text-red-500">
              ₹12,500
            </p>
          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <button className="bg-[#2a7d85] text-white p-4 rounded-2xl font-semibold">
            + Add Income
          </button>

          <button className="bg-[#2a7d85] text-white p-4 rounded-2xl font-semibold">
            + Add Expense
          </button>

          <button className="bg-[#2a7d85] text-white p-4 rounded-2xl font-semibold">
            + Set Budget
          </button>

        </div>

        <div className="bg-[#ceeff0] rounded-3xl shadow p-6 mt-8">

          <h2 className="text-2xl font-bold mb-4">
            Recent Transactions
          </h2>

          <table className="w-full">

            <thead>
              <tr className="text-left border-b">
                <th className="py-3">Title</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="py-3">Salary</td>
                <td className="text-green-600">+₹45,000</td>
                <td>01 Jun</td>
              </tr>

              <tr className="border-b">
                <td className="py-3">Groceries</td>
                <td className="text-red-500">-₹1,250</td>
                <td>03 Jun</td>
              </tr>

              <tr>
                <td className="py-3">Electricity Bill</td>
                <td className="text-red-500">-₹2,450</td>
                <td>05 Jun</td>
              </tr>

            </tbody>

          </table>

        </div>

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
              <span>50%</span>
            </div>

            <div className="w-full bg-gray-200 h-3 rounded-full">
              <div className="bg-[#6ED3CF] h-3 rounded-full w-[50%]"></div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;