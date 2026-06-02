import logo from "../assets/logo.png";
import {Link} from "react-router-dom";

function Navbar() {
  return (

    <nav className="
    w-full
    flex
    items-center
    justify-between
    px-8
    md:px-20
    py-7
    bg-[#2a7d85]
    sticky
    top-0
    z-50
    ">

      {/* Logo */}

      <div className="flex items-center gap-3">

        <img
          src={logo}
          alt="logo"
          className="w-12 h-12 object-contain"
        />

        <h1 className="
        text-3xl
        font-bold
        text-[#111827]
        ">
          EXPENSE

          <span
            className="
            ml-2
            text-[#111827]
            "
            style={{ fontFamily: "Pacifico" }}
          >
          hub
          </span>
        </h1>

      </div>

      {/* Nav Links */}

      <ul className="
      hidden
      md:flex
      items-center
      gap-10
      text-[#111827]
      font-semibold
      text-lg
      ">

        <li>
          <a href="#home" className="hover:text-white transition">
            Home
          </a>
        </li>

        <li>
          <a href="#features" className="hover:text-white transition">
            Features
          </a>
        </li>

        <li>
          <a href="#about" className="hover:text-white transition">
            About
          </a>
        </li>

        <li>
          <a href="#reviews" className="hover:text-white transition">
            Reviews
          </a>
        </li>

        <li>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </li>

      </ul>

      {/* Buttons */}

      <div className="hidden md:flex items-center gap-4">

        <Link to="/login" className="
        px-6
        py-2
        rounded-xl
        bg-[#76bcc2]
        text-[#111827]
        hover:bg-[#50858a]
        transition
        ">
          Login
        </Link>

        <Link to="/signup" className="
        px-6
        py-2
        rounded-xl
        bg-[#76bcc2]
        text-black
        hover:bg-[#50858a]
        transition
        ">
          Sign Up
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;