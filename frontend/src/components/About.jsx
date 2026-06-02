import about from "../assets/about.png";

function About() {
  return (

    <section
      id="about"
      className="
      w-full
      py-28
      px-8
      md:px-20
      bg-[#b4e8ed]
      "
    >

      <div className="
      flex
      flex-col
      lg:flex-row
      items-center
      justify-between
      gap-20
      ">

        {/* Left Image */}

        <div className="flex-1">

          <img
            src={about}
            alt="about"
            className="
            w-full
            max-w-2xl
            mx-auto
            "
          />

        </div>

        {/* Right Content */}

        <div className="flex-1">

          {/* Small Tag */}

          <div className="
          inline-block
          bg-[#2a7d85]
          text-white
          px-5
          py-2
          rounded-full
          text-sm
          font-medium
          mb-6
          ">
            About Us
          </div>

          {/* Heading */}

          <h1 className="
          text-5xl
          font-bold
          text-[#111827]
          leading-tight
          ">

            Smart Finance
            Management For
            Everyone

          </h1>

          {/* Description */}

          <p className="
          mt-8
          text-gray-500
          text-lg
          leading-8
          ">

            Expense Hub helps users track expenses,
            manage budgets, monitor transactions,
            and improve financial habits using a
            modern and easy-to-use interface.

          </p>

          {/* Stats */}

          <div className="
          grid
          grid-cols-2
          gap-8
          mt-10
          ">

            <div>

              <h2 className="
              text-4xl
              font-bold
              text-[#2a7d85]
              ">
                10K+
              </h2>

              <p className="text-gray-500 mt-2">
                Active Users
              </p>

            </div>

            <div>

              <h2 className="
              text-4xl
              font-bold
              text-[#2a7d85]
              ">
                99%
              </h2>

              <p className="text-gray-500 mt-2">
                Secure Platform
              </p>

            </div>

          </div>

          {/* Button */}

          <button className="
          mt-10
          bg-[#2a7d85]
          hover:bg-[#50858a]
          text-white
          px-8
          py-4
          rounded-2xl
          text-lg
          font-semibold
          transition
          shadow-lg
          ">

            Learn More

          </button>

        </div>

      </div>

    </section>
  );
}

export default About;