import Sidebar from "../components/Sidebar";

function Transactions() {
  return (
    <div className="flex bg-[#b4e8ed] min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8 ml-64">
        <h1 className="text-4xl font-bold text-[#111827]">
          Transactions
        </h1>

        <p className="text-gray-500 mt-2">
          View all your income and expense records
        </p>

        {/* Total Transactions Card */}

        <div className="bg-[#ceeff0] rounded-3xl shadow p-6 mt-8">
          <h2 className="text-gray-500">
            Total Transactions
          </h2>

          <p className="text-4xl font-bold mt-2">
            5
          </p>
        </div>

        {/* Search Box */}

        <div className="bg-[#ceeff0] rounded-3xl shadow p-6 mt-8">
          <input
            type="text"
            placeholder="Search transactions..."
            className="w-full border border-gray-400 rounded-xl p-3 outline-none focus:border-[#6ED3CF]"
          />
        </div>

        {/* Transactions Table */}

        <div className="bg-[#ceeff0] rounded-3xl shadow p-6 mt-8">
          <h2 className="text-2xl font-bold mb-6">
            Transaction History
          </h2>

          <table className="w-full">
            <thead>
              <tr className="border-b text-left">
                <th className="py-3">Type</th>
                <th>Category / Source</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="py-3 text-green-600 font-medium">
                  Income
                </td>
                <td>Salary</td>
                <td className="text-green-600">
                  +₹45,000
                </td>
                <td>01/06/2026</td>
              </tr>

              <tr className="border-b">
                <td className="py-3 text-red-500 font-medium">
                  Expense
                </td>
                <td>Food</td>
                <td className="text-red-500">
                  -₹1,200
                </td>
                <td>02/06/2026</td>
              </tr>

              <tr className="border-b">
                <td className="py-3 text-red-500 font-medium">
                  Expense
                </td>
                <td>Transport</td>
                <td className="text-red-500">
                  -₹500
                </td>
                <td>03/06/2026</td>
              </tr>

              <tr className="border-b">
                <td className="py-3 text-green-600 font-medium">
                  Income
                </td>
                <td>Freelancing</td>
                <td className="text-green-600">
                  +₹5,000
                </td>
                <td>05/06/2026</td>
              </tr>

              <tr>
                <td className="py-3 text-red-500 font-medium">
                  Expense
                </td>
                <td>Shopping</td>
                <td className="text-red-500">
                  -₹2,000
                </td>
                <td>08/06/2026</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Transactions;