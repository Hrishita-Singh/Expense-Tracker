import Sidebar from "../components/Sidebar";

function Expense() {
  return (
    <div className="flex bg-[#b4e8ed] min-h-screen">
      
      <Sidebar />

      <div className="flex-1 p-8 ml-64">

        <h1 className="text-4xl font-bold text-[#111827]">
          Expense
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your expenses
        </p>

        {/* Total Expense Card */}

        <div className="bg-[#ceeff0] rounded-3xl shadow p-6 mt-8">

          <h2 className="text-gray-500">
            Total Expense
          </h2>

          <p className="text-4xl font-bold text-red-500 mt-2">
            ₹0
          </p>

        </div>

        {/* Add Expense Form */}

        <div className="bg-[#ceeff0] rounded-3xl shadow p-6 mt-8">

          <h2 className="text-2xl font-bold mb-6">
            Add Expense
          </h2>

          <div className="grid md:grid-cols-3 gap-4">

            <input
              type="text"
              placeholder="Expense Category"
              className="border border-gray-300 rounded-xl p-3 outline-none focus:border-[#6ED3CF]"
            />

            <input
              type="number"
              placeholder="Amount"
              className="border border-gray-300 rounded-xl p-3 outline-none focus:border-[#6ED3CF]"
            />

            <input
              type="date"
              className="border border-gray-300 rounded-xl p-3 outline-none focus:border-[#6ED3CF]"
            />

          </div>

          <button className="mt-6 bg-[#2a7d85] text-white px-6 py-3 rounded-xl font-semibold">
            Add Expense
          </button>

        </div>

        {/* Expense History */}

        <div className="bg-[#ceeff0] rounded-3xl shadow p-6 mt-8">

          <h2 className="text-2xl font-bold mb-6">
            Expense History
          </h2>

          <table className="w-full">

            <thead>
              <tr className="border-b text-left">
                <th className="py-3">Category</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td
                  colSpan="3"
                  className="text-center py-6 text-gray-500"
                >
                  No expenses added yet
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Expense;