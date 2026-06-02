import { Link,useNavigate} from "react-router-dom";
import { useState } from "react";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSignup = (e) => {
  e.preventDefault();

  const savedEmail = localStorage.getItem("userEmail");

  if (email === savedEmail) {
    alert("This email already has an account. Please login.");
    navigate("/login");
    return;
  }

  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  alert("Account created successfully! Please login.");
  navigate("/login");
};

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-lg">

        <h1 className="text-4xl font-bold text-center text-[#111827]">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Join Expense Hub and start managing your finances.
        </p>

        <form onSubmit={handleSignup} className="mt-8 space-y-5">

          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#6ED3CF]"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#6ED3CF]"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#6ED3CF]"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-sm text-[#2a7d85] mt-2"
            >
              {showPassword ? "Hide Password" : "Show Password"}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-[#2a7d85] text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Create Account
          </button>

        </form>

        <p className="text-center mt-6 text-gray-500">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-[#6ED3CF] font-semibold"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Signup;