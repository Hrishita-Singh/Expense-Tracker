import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn
} from "react-icons/fa";

import logo from "../assets/logo.png";

function Footer() {

  return (

    <footer
      className="
      w-full
      bg-[#111827]
      text-white
      px-8
      md:px-20
      py-20
      "
    >

      <div className="
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-4
      gap-14
      ">

        {/* Logo Section */}

        <div>

          <div className="
          flex
          items-center
          gap-3
          ">

            <img
              src={logo}
              alt="logo"
              className="
              w-12
              h-12
              object-contain
              "
            />

            <h1 className="
            text-3xl
            font-bold
            text-white
            ">

                EXPENSE

                <span
                    className="
                    ml-2
                    text-white
                    text-3xl
                    "
                    style={{ fontFamily: "Sacramento" }}
                >
                    hub
                </span>

            </h1>

          </div>

          <p className="
          text-gray-400
          mt-6
          leading-8
          ">
            Smart expense tracking and budgeting
            platform for modern users.
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h2 className="
          text-2xl
          font-semibold
          mb-6
          ">
            Quick Links
          </h2>

          <ul className="
          flex
          flex-col
          gap-4
          text-gray-400
          ">

            <li>
              <a href="#home" className="hover:text-[#6ED3CF] transition">
                Home
              </a>
            </li>

            <li>
              <a href="#features" className="hover:text-[#6ED3CF] transition">
                Features
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-[#6ED3CF] transition">
                About
              </a>
            </li>

            <li>
              <a href="#reviews" className="hover:text-[#6ED3CF] transition">
                Reviews
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-[#6ED3CF] transition">
                Contact
              </a>
            </li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h2 className="
          text-2xl
          font-semibold
          mb-6
          ">
            Contact
          </h2>

          <div className="
          flex
          flex-col
          gap-4
          text-gray-400
          ">

            <p>support@expensehub.com</p>

            <p>+91 98765 43210</p>

            <p>India</p>

          </div>

        </div>

        {/* Social Icons */}

        <div>

          <h2 className="
          text-2xl
          font-semibold
          mb-6
          ">
            Follow Us
          </h2>

          <div className="
          flex
          gap-5
          ">

            <div className="
            w-12
            h-12
            rounded-full
            bg-[#76bcc2]
            hover:bg-[#50858a]
            flex
            items-center
            justify-center
            cursor-pointer
            hover:scale-110
            transition
            ">
              <FaFacebookF />
            </div>

            <div className="
            w-12
            h-12
            rounded-full
            bg-[#76bcc2]
            hover:bg-[#50858a]
            flex
            items-center
            justify-center
            cursor-pointer
            hover:scale-110
            transition
            ">
              <FaInstagram />
            </div>

            <div className="
            w-12
            h-12
            rounded-full
            bg-[#76bcc2]
            hover:bg-[#50858a]
            flex
            items-center
            justify-center
            cursor-pointer
            hover:scale-110
            transition
            ">
              <FaTwitter />
            </div>

            <div className="
            w-12
            h-12
            rounded-full
            bg-[#76bcc2]
            hover:bg-[#50858a]
            flex
            items-center
            justify-center
            cursor-pointer
            hover:scale-110
            transition
            ">
              <FaLinkedinIn />
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Line */}

      <div className="
      w-full
      h-[1px]
      bg-gray-700
      my-12
      ">
      </div>

      {/* Copyright */}

      <div className="
      text-center
      text-gray-400
      ">
        © 2026 Expense Hub. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;