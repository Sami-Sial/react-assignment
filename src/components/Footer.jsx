import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="w-full" style={{ backgroundColor: "#0d2d3e" }}>
      {/* Main Footer Content */}
      <div className="w-full px-5 sm:px-8 lg:px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1 - Logo & Description */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="flex-shrink-0">
                <svg width="42" height="42" viewBox="0 0 52 52" fill="none">
                  <polygon
                    points="26,2 49,14 49,38 26,50 3,38 3,14"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                  <polygon
                    points="26,8 44,18 44,34 26,44 8,34 8,18"
                    stroke="white"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.4"
                  />
                  <text
                    x="26"
                    y="31"
                    textAnchor="middle"
                    fill="white"
                    fontSize="16"
                    fontWeight="bold"
                    fontFamily="serif"
                  >
                    M
                  </text>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-white text-sm font-extrabold tracking-widest uppercase leading-tight">
                  MODERN AMINOS
                </span>
                <span
                  className="text-gray-400 font-semibold tracking-widest uppercase mt-0.5"
                  style={{ fontSize: "9px" }}
                >
                  QUALITY PRODUCTS WITH QUALITY SERVICE
                </span>
              </div>
            </div>
            <p className="text-gray-200 text-xs sm:text-sm font-medium leading-relaxed">
              Quality products and exceptional service are very important to us
            </p>
          </div>

          {/* Column 2 - Contact & Quick Links */}
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="text-white text-sm font-extrabold mb-2 tracking-tight">
                Contact Us
              </h3>
              <div className="flex items-center gap-2 text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-xs sm:text-sm font-medium">
                  cs@modernaminos.com
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-white text-sm font-extrabold mb-2 tracking-tight">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-1.5">
                <li>
                  <a
                    href="#"
                    className="text-gray-200 text-xs sm:text-sm font-medium hover:text-white transition-colors duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-200 text-xs sm:text-sm font-medium hover:text-white transition-colors duration-200"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3 - Subscribe */}
          <div className="flex flex-col gap-3 md:col-span-2 lg:col-span-1">
            <h3 className="text-white text-base font-extrabold leading-tight tracking-tight">
              Subscribe now to save 15%
            </h3>
            <p className="text-gray-200 text-xs sm:text-sm font-medium leading-relaxed">
              Subscribe and Get Exclusive Updates Straight to your Inbox for
              Free
            </p>

            {/* Email Input */}
            <div className="flex items-stretch w-full mt-1">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 min-w-0 px-4 py-2 text-xs sm:text-sm font-medium outline-none border border-gray-400 bg-transparent text-white placeholder-gray-400 focus:border-white transition-colors duration-200"
                style={{
                  borderTopLeftRadius: "9999px",
                  borderBottomLeftRadius: "9999px",
                  borderTopRightRadius: "0",
                  borderBottomRightRadius: "0",
                  borderRight: "none",
                }}
              />
              <button
                className="flex items-center justify-center gap-1.5 px-4 py-2 bg-white text-gray-800 text-xs sm:text-sm font-bold hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 whitespace-nowrap flex-shrink-0 cursor-pointer"
                style={{
                  borderTopRightRadius: "9999px",
                  borderBottomRightRadius: "9999px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="w-full px-5 mt-5 sm:px-8 lg:px-12 pb-5 text-center">
        <p className="text-gray-300 text-xs font-medium leading-relaxed max-w-4xl mx-auto">
          Please be advised: All compounds and research materials provided by
          Modern Aminos are strictly for laboratory and research use only. They
          are not approved for human consumption by the Food and Drug
          Administration (FDA). These products should not be used for any form
          of in vivo experimentation or for any other non-laboratory purpose. By
          purchasing these products, you acknowledge that they will be used
          exclusively within a controlled and qualified research environment.
        </p>
      </div>

      {/* Bottom Bar */}
      <div className="w-full px-5 sm:px-8 lg:px-12 mt-5 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-2.5">
        <span className="text-gray-300 text-xs font-semibold">
          Copyright 2026, All Rights Reserved.
        </span>
        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-x-4 gap-y-1">
          {[
            "Privacy Policy",
            "Refund Policy",
            "Terms & Conditions",
            "Terms of Service",
          ].map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-300 text-xs font-semibold hover:text-white transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
