import React, { useState } from "react";
import logo from "../assets/logo.svg";

export default function ModernAminosPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* ── DRAWER OVERLAY ── */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 sm:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* ── LEFT SIDE DRAWER (mobile) ── */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out sm:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <img
            src={logo}
            alt="Modern Aminos Logo"
            className="h-10 w-auto object-contain"
          />
          <button
            className="p-2 text-gray-500 hover:text-gray-900 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="px-4 py-6 flex flex-col gap-2">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-white"
            style={{ backgroundColor: "#0d2d3e" }}
            onClick={() => setMenuOpen(false)}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l9-9 9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9"
              />
            </svg>
            Home
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Contact Us
          </a>
        </div>

        <div className="mt-auto px-4 py-4 border-t border-gray-100">
          <p className="text-xs text-gray-400 text-center">
            For laboratory research use only.
            <br />
            Not for human consumption.
          </p>
        </div>
      </div>

      {/* ── NAVBAR ── */}
      <nav className="w-full bg-white border-b border-gray-200">
        <div className="w-full px-4 sm:px-6 lg:px-10 py-3 flex items-center justify-between">
          <div className="flex items-center flex-shrink-0">
            <img
              src={logo}
              alt="Modern Aminos Logo"
              className="h-8 md:h-13 w-auto object-contain"
            />
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <a
              href="#"
              className="px-4 py-1.5 bg-[#1161901A] text-[#116190] rounded-2xl text-sm font-semibold"
            >
              Home
            </a>
            <a
              href="#"
              className="px-4 py-1.5 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact Us
            </a>
          </div>
          <div className="flex items-center gap-1">
            <button className="text-gray-500 hover:text-gray-800 transition-colors cursor-pointer p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
            <button
              className="sm:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* ── ANNOUNCEMENT BANNER ── */}
      <div className="w-full py-2.5 px-4 bg-[#116190] text-center text-white text-xs sm:text-sm font-semibold tracking-wide">
        Login for the full experience. – For laboratory research use only. Not
        for human consumption.
      </div>

      {/* ── MAIN CONTENT AREA ── */}
      <div className="flex-1 px-3 sm:px-6 pt-4 sm:pt-6 pb-8 sm:pb-10">
        <div
          className="w-full rounded-2xl overflow-hidden relative"
          style={{
            background:
              "linear-gradient(135deg, #0a1f2e 0%, #0d3347 40%, #0e4060 70%, #0d3a55 100%)",
          }}
        >
          {/* Ambient glows */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10"
              style={{
                background:
                  "radial-gradient(circle, rgba(100,180,220,0.6), transparent 70%)",
              }}
            />
            <div
              className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-10"
              style={{
                background:
                  "radial-gradient(circle, rgba(50,130,170,0.6), transparent 70%)",
              }}
            />
          </div>

          {/* Inner content */}
          <div className="relative z-10 w-full flex flex-col lg:flex-row items-stretch justify-between gap-6 lg:gap-0 py-8 sm:py-10 lg:py-16 px-4 sm:px-6 lg:px-10">
            {/* ── LEFT: Text content ── */}
            <div className="w-full lg:w-[45%] flex-shrink-0 text-white flex flex-col gap-4 text-left items-start justify-center lg:pb-0 lg:pr-10 xl:pr-16">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight">
                Thank you for Visiting
                <br />
                Modern Aminos
              </h1>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-prose">
                At Modern Aminos, we are committed to maintaining a highly
                compliant and researcher-friendly experience. To support this
                commitment, we now require researchers to log in to their user
                account in order to view our full selection of research
                materials. If you do not have an existing account with us please
                register below.
              </p>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-prose">
                <span className="font-extrabold text-white">
                  Please be advised:{" "}
                </span>
                All compounds and research materials provided by Modern Aminos
                are strictly for laboratory and research use only. They are not
                approved for human consumption by the Food and Drug
                Administration (FDA). These products should not be used for any
                form of in vivo experimentation or for any other non-laboratory
                purpose. By purchasing these products, you acknowledge that they
                will be used exclusively within a controlled and qualified
                research environment.
              </p>
              <button className="mt-1 sm:mt-2 px-6 sm:px-7 py-2.5 sm:py-3 border-2 border-white text-white text-sm font-bold tracking-wide hover:bg-white hover:text-gray-900 transition-all duration-200 rounded-sm cursor-pointer">
                Register Now
              </button>
            </div>

            {/* ── RIGHT: Login card ── */}
            <div className="w-full lg:w-[50%] flex items-center justify-center">
              <div className="rounded-xl shadow-2xl px-5 sm:px-8 lg:px-10 py-8 sm:py-10 border border-white w-full max-w-lg lg:max-w-none">
                <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-5 sm:mb-6 tracking-tight">
                  Login
                </h2>

                <div className="mb-4">
                  <label className="block text-xs sm:text-sm font-semibold text-white mb-1.5">
                    Username or email address{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 sm:py-2.5 border border-gray-300 rounded text-sm text-white bg-transparent outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all placeholder-gray-400"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-xs sm:text-sm font-semibold text-white mb-1.5">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 sm:py-2.5 border border-gray-300 rounded text-sm text-white bg-transparent outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
                  />
                </div>

                <div className="flex items-center gap-2 mb-4 sm:mb-5">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="w-4 h-4 accent-blue-600 cursor-pointer"
                  />
                  <label
                    htmlFor="remember"
                    className="text-xs sm:text-sm font-semibold text-white cursor-pointer select-none"
                  >
                    Remember Me
                  </label>
                </div>

                <button
                  className="px-6 sm:px-7 py-1.5 sm:py-2 text-white text-sm font-bold rounded-2xl hover:opacity-90 active:scale-95 transition-all duration-200 mb-3 sm:mb-4 cursor-pointer"
                  style={{ backgroundColor: "#12608E" }}
                >
                  Log In
                </button>

                <p className="text-xs sm:text-sm text-white mb-4 sm:mb-5">
                  Lost your password?{" "}
                  <a href="#" className="font-bold text-white hover:underline">
                    Register
                  </a>
                </p>

                <button className="flex items-center justify-center gap-3 px-4 py-2 sm:py-2.5 border border-gray-300 rounded text-xs sm:text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200 shadow-sm cursor-pointer w-full sm:w-auto">
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Continue with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
