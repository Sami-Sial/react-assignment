import React from "react";
import customerServiceImg from "../assets/customer-service.webp";

export default function CustomerServiceSection() {
  return (
    <div className="w-full" style={{ backgroundColor: "#eef0f5" }}>
      <div className="w-full flex flex-col lg:flex-row items-center px-6 sm:px-10 py-10 lg:py-12 gap-10 lg:gap-14">
        {/* ── LEFT: Content ── */}
        <div className="w-full lg:w-1/2 flex flex-col gap-5">
          {/* Title */}
          <h2
            className="text-xl font-bold leading-tight tracking-tight"
            style={{ color: "#0d2d3e" }}
          >
            Customer Service and Experience Always Comes First
          </h2>

          {/* Body Paragraph */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We understand that even though high quality research materials
            allows for the best most reliable results in labratory settingsg,
            things like slow shipping, and poor customer service can make
            already tedious research more of a headache. That is why here at
            Modern Aminos our customer service and shipping teams work around
            the clock to ensure that you are getting your material fast, and any
            shipping related inquries handled
          </p>

          {/* Login subheading */}
          <p
            className="text-base sm:text-lg font-medium"
            style={{ color: "#0d2d3e" }}
          >
            Login for the full experience.
          </p>

          {/* Login Button */}
          <div>
            <button className="px-8 py-1.5 text-white text-sm sm:text-base rounded-3xl hover:opacity-90 active:scale-95 transition-all duration-200 shadow-md bg-[#1260AE]">
              Login
            </button>
          </div>
        </div>

        {/* ── RIGHT: Lab Image with rounded corners ── */}
        <div className="w-full lg:w-1/2 flex-shrink-0">
          <img
            src={customerServiceImg}
            alt="Microscope in a modern laboratory"
            className="w-full object-cover object-center rounded-2xl shadow-lg"
            style={{ height: "380px" }}
          />
        </div>
      </div>
    </div>
  );
}
