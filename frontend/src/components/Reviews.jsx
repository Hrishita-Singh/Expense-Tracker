import {
  FaStar,
  FaArrowLeft,
  FaArrowRight
} from "react-icons/fa";

import { useRef } from "react";

function Reviews() {

  const sliderRef = useRef();

  // Scroll Left

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -350,
      behavior: "smooth"
    });
  };

  // Scroll Right

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 350,
      behavior: "smooth"
    });
  };

  // Reviews Data

  const reviews = [

    {
      name: "Suhani Kumari",
      role: "Student",
      stars: 5,
      review:
        "Expense Hub helped me manage my monthly spending easily."
    },

    {
      name: "Komal Kumari",
      role: "Freelancer",
      stars: 4,
      review:
        "The dashboard is very clean and useful for budgeting."
    },

    {
      name: "Nalini Shree",
      role: "Business Owner",
      stars: 4,
      review:
        "Budget planning became simple with this amazing app."
    },

    {
      name: "Ayush Saw",
      role: "Designer",
      stars: 5,
      review:
        "Very smooth interface and easy expense tracking."
    },

    {
      name: "Hrishita Singh",
      role: "Developer",
      stars: 5,
      review:
        "One of the best finance management apps I have used."
    },

    {
      name: "Puja Kumari",
      role: "Teacher",
      stars: 4,
      review:
        "The reports section helped me save money effectively."
    }

  ];

  return (

    <section
      id="reviews"
      className="
      w-full
      py-28
      px-8
      md:px-20
      bg-[#b4e8ed]
      overflow-hidden
      "
    >

      {/* Heading */}

      <div className="
      flex
      items-center
      justify-between
      flex-wrap
      gap-6
      ">

        <div>

          <h1 className="
          text-5xl
          font-bold
          text-[#111827]
          ">
            What Users Say
          </h1>

          <p className="
          mt-5
          text-lg
          text-gray-500
          max-w-2xl
          leading-8
          ">
            Trusted by thousands of users worldwide.
          </p>

        </div>

        {/* Arrow Buttons */}

        <div className="flex gap-4">

          <button
            onClick={scrollLeft}

            className="
            w-14
            h-14
            rounded-full
            bg-[#2a7d85]
            text-white
            flex
            items-center
            justify-center
            hover:bg-[#50858a]
            transition
            "
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={scrollRight}

            className="
            w-14
            h-14
            rounded-full
            bg-[#2a7d85]
            text-white
            flex
            items-center
            justify-center
            hover:bg-[#50858a]
            transition
            "
          >
            <FaArrowRight />
          </button>

        </div>

      </div>

      {/* Reviews Slider */}

      <div
        ref={sliderRef}

        className="
        flex
        gap-8
        overflow-x-auto
        scroll-smooth
        mt-20
        pb-4
        "
      >

        {reviews.map((item, index) => (

          <div
            key={index}

            className="
            min-w-[350px]
            bg-[#ceeff0]
            p-8
            rounded-3xl
            shadow-lg
            flex-shrink-0
            hover:-translate-y-3
            transition
            duration-300
            "
          >

            {/* Stars */}

            <div className="
            flex
            gap-1
            text-xl
            ">

            {
                [...Array(5)].map((_, i) => (

                    <FaStar
                        key={i}

                        className={
                            i < item.stars
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                    />

                ))
            }

</div>

            {/* Review Text */}

            <p className="
            mt-6
            text-gray-500
            leading-8
            text-lg
            ">
              "{item.review}"
            </p>

            {/* User Info */}

            <div className="mt-8">

              <h2 className="
              text-2xl
              font-bold
              text-[#2c5354]
              ">
                {item.name}
              </h2>

              <p className="
              text-[#2a7d85]
              mt-2
              font-medium
              ">
                {item.role}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Reviews;