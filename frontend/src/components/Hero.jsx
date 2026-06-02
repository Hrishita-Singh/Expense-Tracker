import hero from "../assets/hero.png";

function Hero() {
  return (

    <section
      id="home"
      className="
      w-full
      min-h-screen
      bg-[#b4e8ed]
      flex
      flex-col
      lg:flex-row
      items-center
      justify-between
      px-8
      md:px-15
      py-20
      "
    >

      {/* Left Content */}

      <div className="max-w-2xl">

        {/* Small Badge */}

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
          Smart Expense Tracking
        </div>

        {/* Heading */}

        <h1 className="
        text-5xl
        md:text-6xl
        font-bold
        leading-tight
        text-[#111827]
        ">

          Manage Your
  
          <span className="text-[#2a7d85]">
            {" "} Money
          </span>

          {" "}With Confidence

        </h1>

        {/* Description */}

        <p className="
        mt-4
        text-lg
        text-[#4b5a5c]
        leading-6
        max-w-xl
        ">

          Expense Hub helps you track daily expenses, manage budgets,
          and grow your savings - all in one place.

        </p>

        {/* Buttons */}

        <div className="
        flex
        gap-5
        mt-10
        flex-wrap
        ">

          <button className="
          bg-[#2a7d85]
          hover:bg-[#59c3bf]
          text-white
          px-8
          py-4
          rounded-2xl
          text-lg
          font-semibold
          transition
          shadow-lg
          ">
            Get Started
          </button>

          <button className="
          border-2
          border-[#6ED3CF]
          text-[#111827]
          bg-[#76bcc2]
          hover:bg-[#6ED3CF]
          hover:text-white
          px-8
          py-4
          rounded-2xl
          text-lg
          font-semibold
          transition
          ">
            Watch Demo
          </button>

        </div>

        {/* Users */}

        <div className="mt-14">

          <h2 className="
          text-4xl
          font-bold
          text-[#111827]
          ">
            10K+ Users
          </h2>

          <p className="
          text-gray-500
          mt-2
          ">
            Trusted by people worldwide
          </p>

        </div>

      </div>

      {/* Right Image */}

      <div className="mt-20 lg:mt-0">

        <img
          src={hero}
          alt="hero"
          className="
        
          max-w-3xl
          w-[750px]
          drop-shadow-2xl
          "
        />

      </div>

    </section>
  );
}

export default Hero;