import React, { useState } from "react";

const faqs = [
  {
    question: "Do you ship internationally?",
    answer:
      "Currently, we only ship within the United States. We are working on expanding our shipping options internationally in the future.",
  },
  {
    question: "Why do I need an account to view the site?",
    answer:
      "We require an account to ensure that our products are only accessible to verified researchers and laboratory professionals, in compliance with regulations.",
  },
  {
    question: "How long do orders take to arrive?",
    answer:
      "Orders placed before 12 PM CST Monday through Friday are shipped same-day. Most orders arrive within 2–5 business days depending on your location.",
  },
  {
    question:
      "I think my package may be lost, or I'm having an order issue, what should I do?",
    answer:
      "Please contact our customer support team at cs@modernaminos.com as soon as possible. We work around the clock to resolve any shipping or order-related issues quickly.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div
      className="w-full py-10 sm:py-14 px-4 sm:px-8"
      style={{ backgroundColor: "#eef0f5" }}
    >
      {/* ── Header ── */}
      <div className="flex flex-col items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
        <span
          className="px-4 sm:px-5 py-1 sm:py-1.5 rounded-full text-white text-xs sm:text-sm font-semibold tracking-wide text-center"
          style={{ backgroundColor: "#1a4a5c" }}
        >
          Frequently Asked Questions
        </span>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center"
          style={{ color: "#0d2d3e" }}
        >
          Need Help?
        </h2>
      </div>

      {/* ── FAQ Container ── */}
      <div className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg">
        {/* Section Header Bar */}
        <div
          className="w-full py-3 sm:py-4 px-4 sm:px-6 text-center"
          style={{ backgroundColor: "#0d2d3e" }}
        >
          <span className="text-white text-xs font-extrabold tracking-widest uppercase">
            General Questions
          </span>
        </div>

        {/* Gap */}
        <div className="h-3 sm:h-5" style={{ backgroundColor: "#eef0f5" }} />

        {/* ── Accordion Items ── */}
        <div
          className="flex flex-col gap-2 sm:gap-3 px-3 sm:px-4 pb-3 sm:pb-4"
          style={{ backgroundColor: "#eef0f5" }}
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  borderRadius: isOpen ? "1.25rem" : "9999px",
                  border: isOpen ? "none" : "1.5px solid #111",
                  transition: "border-radius 0.3s ease, border 0.2s ease",
                  overflow: "hidden",
                }}
              >
                {/* Question Row */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 text-left cursor-pointer transition-colors duration-200"
                  style={{ backgroundColor: "#0d2d3e" }}
                >
                  <span className="text-white text-xs sm:text-sm md:text-base font-semibold pr-3 sm:pr-4 leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full border-2 border-white transition-transform duration-300"
                    style={{
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg
                      className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M12 5v14M5 12h14"
                      />
                    </svg>
                  </span>
                </button>

                {/* Answer Panel */}
                <div
                  style={{
                    maxHeight: isOpen ? "300px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.35s ease",
                    backgroundColor: "#0d2d3e",
                  }}
                >
                  <p className="text-white text-xs sm:text-sm leading-relaxed px-4 sm:px-6 pb-4 sm:pb-5 pt-1">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
