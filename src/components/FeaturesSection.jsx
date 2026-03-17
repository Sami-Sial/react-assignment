import React from "react";

export default function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16"
        >
          <rect
            x="10"
            y="8"
            width="36"
            height="44"
            rx="3"
            stroke="white"
            strokeWidth="2.5"
            fill="none"
          />
          <line
            x1="18"
            y1="20"
            x2="38"
            y2="20"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="18"
            y1="27"
            x2="38"
            y2="27"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="18"
            y1="34"
            x2="30"
            y2="34"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle
            cx="42"
            cy="44"
            r="10"
            stroke="white"
            strokeWidth="2.5"
            fill="none"
          />
          <path
            d="M38 44l3 3 6-6"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Third party tested",
      text: "Third Party Multi Vial Batch Tested: Our products undergo rigorous third-party, multi-vial batch testing to ensure exceptional safety, purity, and quality. Batch testing also allows you to easily match each peptide to its corresponding Certificate of Analysis (COA).",
    },
    {
      icon: (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16"
        >
          {/* Truck body */}
          <rect
            x="4"
            y="26"
            width="36"
            height="22"
            rx="2"
            stroke="white"
            strokeWidth="2.5"
            fill="none"
          />
          {/* Truck cab */}
          <path
            d="M40 36h10l6 8v4H40V36z"
            stroke="white"
            strokeWidth="2.5"
            fill="none"
            strokeLinejoin="round"
          />
          {/* Wheels */}
          <circle
            cx="14"
            cy="50"
            r="5"
            stroke="white"
            strokeWidth="2.5"
            fill="none"
          />
          <circle
            cx="48"
            cy="50"
            r="5"
            stroke="white"
            strokeWidth="2.5"
            fill="none"
          />
          {/* Speed lines */}
          <line
            x1="4"
            y1="20"
            x2="22"
            y2="20"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="2"
            y1="14"
            x2="16"
            y2="14"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Leaf on top */}
          <path
            d="M28 10 C28 6 34 4 36 8 C38 4 44 6 44 10 C44 15 36 20 36 20 C36 20 28 15 28 10Z"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ),
      title: "Fast Shipping",
      text: "Same-Day Shipping Monday through Friday when you order before 12 PM CST! At Modern Aminos, we take pride in our fast, reliable shipping to ensure your order arrives without delay.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16"
        >
          {/* Head */}
          <circle
            cx="32"
            cy="18"
            r="10"
            stroke="white"
            strokeWidth="2.5"
            fill="none"
          />
          {/* Shoulders / body */}
          <path
            d="M12 52c0-11 9-18 20-18s20 7 20 18"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Headset left arc */}
          <path
            d="M18 18 C18 8 46 8 46 18"
            stroke="white"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          {/* Headset left ear cup */}
          <rect
            x="13"
            y="18"
            width="6"
            height="10"
            rx="3"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          {/* Headset right ear cup */}
          <rect
            x="45"
            y="18"
            width="6"
            height="10"
            rx="3"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          {/* Mic arm */}
          <path
            d="M19 26 Q14 34 18 38"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <circle
            cx="18"
            cy="39"
            r="2"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      ),
      title: "24/7 Customer Support (Monday–Friday)",
      text: "Our dedicated customer service team is available Monday through Friday, and for most of the day on weekends, to ensure your needs are handled quickly and efficiently.",
    },
  ];

  return (
    <div
      className="w-full py-10 px-5 sm:px-8"
      style={{ backgroundColor: "#eef0f5" }}
    >
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center px-8 py-10 rounded-2xl gap-5"
            style={{ backgroundColor: "#0d2d3e" }}
          >
            {/* Icon */}
            <div className="flex items-center justify-center mb-2">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-white text-xl font-extrabold leading-tight tracking-tight">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
