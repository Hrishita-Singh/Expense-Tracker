import Sidebar from "../components/Sidebar";

function Income() {
  return (
    <div className="flex bg-[#b4e8ed] min-h-screen">

      <Sidebar />

      <div className="flex-1 p-8 ml-64">

        <h1 className="text-4xl font-bold text-[#111827]">
          Income
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your income sources
        </p>

        {/* Total Income Card */}

        <div className="bg-[#ceeff0] rounded-3xl shadow p-6 mt-8">

          <h2 className="text-gray-500">
            Total Income
          </h2>

          <p className="text-4xl font-bold text-green-600 mt-2">
            ₹52,000
          </p>

        </div>

        {/* Add Income Form */}

        <div className="bg-[#ceeff0] rounded-3xl shadow p-6 mt-8">

          <h2 className="text-2xl font-bold mb-6">
            Add Income
          </h2>

          <div className="grid md:grid-cols-3 gap-4">

            <input
              type="text"
              placeholder="Income Source"
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
            Add Income
          </button>

        </div>

        {/* Income History */}

        <div className="bg-[#ceeff0] rounded-3xl shadow p-6 mt-8">

          <h2 className="text-2xl font-bold mb-6">
            Income History
          </h2>

          <table className="w-full">

            <thead>
              <tr className="border-b text-left">
                <th className="py-3">Source</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="py-3">Salary</td>
                <td className="text-green-600">₹45,000</td>
                <td>01/06/2026</td>
              </tr>

              <tr className="border-b">
                <td className="py-3">Freelancing</td>
                <td className="text-green-600">₹5,000</td>
                <td>05/06/2026</td>
              </tr>

              <tr>
                <td className="py-3">Bonus</td>
                <td className="text-green-600">₹2,000</td>
                <td>10/06/2026</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Income;