function Contact() {
  return (

    <section
      id="contact"
      className="
      w-full
      py-28
      px-8
      md:px-20
      bg-[#b4e8ed]
      "
    >

      {/* Heading */}

      <div className="text-center">

        <h1 className="
        text-5xl
        font-bold
        text-[#111827]
        ">
          Contact Us
        </h1>

        <p className="
        mt-5
        text-lg
        text-gray-500
        max-w-2xl
        mx-auto
        leading-8
        ">
          Have questions or need support?
          We are here to help you anytime.
        </p>

      </div>

      {/* Contact Form */}

      <div className="
      max-w-4xl
      mx-auto
      mt-20
      bg-[#ceeff0]
      rounded-3xl
      shadow-lg
      p-10
      md:p-14
      ">

        <form className="
        flex
        flex-col
        gap-8
        ">

          {/* Name */}

          <div>

            <label className="
            text-[#111827]
            font-semibold
            block
            mb-3
            ">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="
              w-full
              border
              border-gray-400
              rounded-2xl
              px-6
              py-4
              outline-none
              focus:border-[#6ED3CF]
              "
            />

          </div>

          {/* Email */}

          <div>

            <label className="
            text-[#111827]
            font-semibold
            block
            mb-3
            ">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="
              w-full
              border
              border-gray-400
              rounded-2xl
              px-6
              py-4
              outline-none
              focus:border-[#6ED3CF]
              "
            />

          </div>

          {/* Message */}

          <div>

            <label className="
            text-[#111827]
            font-semibold
            block
            mb-3
            ">
              Message
            </label>

            <textarea
              rows="6"
              placeholder="Write your message..."
              className="
              w-full
              border
              border-gray-400
              rounded-2xl
              px-6
              py-4
              outline-none
              resize-none
              focus:border-[#6ED3CF]
              "
            ></textarea>

          </div>

          {/* Button */}

          <button
            className="
            bg-[#2a7d85]
            hover:bg-[#50858a]
            text-white
            py-4
            rounded-2xl
            text-lg
            font-semibold
            transition
            shadow-lg
            "
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;