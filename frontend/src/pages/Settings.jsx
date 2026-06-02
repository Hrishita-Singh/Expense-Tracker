import Sidebar from "../components/Sidebar";

function Settings() {
  return (
    <div className="flex bg-[#b4e8ed] min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8 ml-64">

        <h1 className="text-4xl font-bold text-[#111827]">
          Settings
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your account settings
        </p>

        {/* Profile Section */}

        <div className="bg-[#ceeff0] rounded-3xl shadow p-6 mt-8">

          <h2 className="text-2xl font-bold mb-6">
            Profile Information
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-400 rounded-xl p-3"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-400 rounded-xl p-3"
            />

          </div>

          <button className="mt-6 bg-[#2a7d85] text-white px-6 py-3 rounded-xl">
            Save Changes
          </button>

        </div>

        {/* Password Section */}

        <div className="bg-[#ceeff0] rounded-3xl shadow p-6 mt-8">

          <h2 className="text-2xl font-bold mb-6">
            Change Password
          </h2>

          <div className="space-y-4">

            <input
              type="password"
              placeholder="Current Password"
              className="w-full border border-gray-400 rounded-xl p-3"
            />

            <input
              type="password"
              placeholder="New Password"
              className="w-full border border-gray-400 rounded-xl p-3"
            />

          </div>

          <button className="mt-6 bg-[#2a7d85] text-white px-6 py-3 rounded-xl">
            Update Password
          </button>

        </div>

      </div>
    </div>
  );
}

export default Settings;