import React from "react";
import batchTestedImg from "../assets/batch-tested.webp";

export default function BatchTestedSection() {
  return (
    <div className="w-full" style={{ backgroundColor: "#eef0f5" }}>
      <div className="w-full flex flex-col lg:flex-row items-center px-6 sm:px-10 py-10 lg:py-12 gap-10 lg:gap-14">
        {/* ── LEFT: Image ── */}
        <div className="w-full lg:w-1/2 flex-shrink-0">
          <img
            src={batchTestedImg}
            alt="Scientist working in laboratory with microscope"
            className="w-full object-cover object-center rounded-2xl shadow-lg"
            style={{ height: "380px" }}
          />
        </div>

        {/* ── RIGHT: Content ── */}
        <div className="w-full lg:w-1/2 flex flex-col gap-5">
          <h2
            className="text-xl font-bold leading-tight tracking-tight"
            style={{ color: "#0d2d3e" }}
          >
            3rd Party Multi Vial Batch Tested
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            At Modern Aminos, we prioritize the quality and authenticity of
            every product we offer. Each product undergoes third-party,
            multi-vial batch testing to verify purity, compound identity,
            quantity, and endotoxin levels. In addition to this rigorous testing
            process, every vial includes a unique batch number, allowing you to
            directly match your product to its corresponding laboratory testing
            report.
          </p>

          <p
            className="text-base sm:text-lg font-medium"
            style={{ color: "#0d2d3e" }}
          >
            Login for the full experience.
          </p>

          <div>
            <button className="px-8 py-1.5 text-white text-sm sm:text-base rounded-3xl hover:opacity-90 active:scale-95 transition-all duration-200 shadow-md bg-[#1260AE]">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
