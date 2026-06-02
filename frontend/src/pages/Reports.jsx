import Sidebar from "../components/Sidebar";

function Reports() {
  return (
    <div className="flex bg-[#b4e8ed] min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8 ml-64">

        <h1 className="text-4xl font-bold text-[#111827]">
          Reports
        </h1>

        <p className="text-gray-500 mt-2">
          Track your financial performance
        </p>

        {/* Summary Cards */}

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="bg-[#ceeff0] rounded-3xl shadow p-6">
            <h2 className="text-gray-500">Total Income</h2>
            <p className="text-3xl font-bold text-green-600 mt-2">
              ₹50,000
            </p>
          </div>

          <div className="bg-[#ceeff0] rounded-3xl shadow p-6">
            <h2 className="text-gray-500">Total Expense</h2>
            <p className="text-3xl font-bold text-red-500 mt-2">
              ₹20,000
            </p>
          </div>

          <div className="bg-[#ceeff0] rounded-3xl shadow p-6">
            <h2 className="text-gray-500">Savings</h2>
            <p className="text-3xl font-bold text-[#6ED3CF] mt-2">
              ₹30,000
            </p>
          </div>

        </div>

        {/* Monthly Report Table */}

        <div className="bg-[#ceeff0] rounded-3xl shadow p-6 mt-8">

          <h2 className="text-2xl font-bold mb-6">
            Monthly Summary
          </h2>

          <table className="w-full">

            <thead>
              <tr className="border-b text-left">
                <th className="py-3">Month</th>
                <th>Income</th>
                <th>Expense</th>
                <th>Savings</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="py-3">January</td>
                <td className="text-green-600">₹50,000</td>
                <td className="text-red-500">₹20,000</td>
                <td>₹30,000</td>
              </tr>

              <tr className="border-b">
                <td className="py-3">February</td>
                <td className="text-green-600">₹55,000</td>
                <td className="text-red-500">₹25,000</td>
                <td>₹30,000</td>
              </tr>

              <tr>
                <td className="py-3">March</td>
                <td className="text-green-600">₹60,000</td>
                <td className="text-red-500">₹30,000</td>
                <td>₹30,000</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
}

export default Reports;