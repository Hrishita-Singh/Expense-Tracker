import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
  e.preventDefault();

  const savedEmail = localStorage.getItem("userEmail");
  const savedPassword = localStorage.getItem("userPassword");

  console.log("Entered Email:",email);
  console.log("Entered Password:",password);
  console.log("Saved Email:",savedEmail);
  console.log("Saved Password:",savedPassword);


  if (email === savedEmail && password === savedPassword) {
    localStorage.setItem("isLoggedIn", "true");
    alert("Logged in successfully!");
    navigate("/");
  } else {
    alert("Account not found. Please sign up first.");
    navigate("/signup");
  }
};


  return (
    <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-lg">

        <h1 className="text-4xl font-bold text-center text-[#111827]">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Login to access your Expense Hub account
        </p>

        <form onSubmit={handleLogin} autoComplete="off" className="mt-8 space-y-5">

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              name="login-email"
              autoComplete="new-email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
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
              name="login-password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
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

          <div className="flex justify-between items-center">

            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#" className="text-sm text-[#6ED3CF]">
              Forgot Password?
            </a>

          </div>

          <button
            type="submit"
            className="w-full bg-[#2a7d85] text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-6 text-gray-500">

          Don't have an account?{" "}

          <Link
            to="/signup"
            className="text-[#6ED3CF] font-semibold"
          >
            Sign Up
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;