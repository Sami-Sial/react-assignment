export default function QuoteBanner() {
  return (
    <div
      className="relative my-20 w-full overflow-hidden flex items-center justify-center"
      style={{ minHeight: "260px" }}
    >
      {/* Dark teal gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0a2233 0%, #0d3348 40%, #0e4060 70%, #0a2e45 100%)",
        }}
      />

      {/* Compass background image overlay using a CSS pattern to mimic compass texture */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 60% at 70% 50%, rgba(20,100,140,0.5) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 75% 45%, rgba(0,180,220,0.15) 0%, transparent 50%)`,
        }}
      />

      {/* Subtle diagonal compass needle line */}
      <div
        className="absolute opacity-20"
        style={{
          width: "3px",
          height: "280px",
          background:
            "linear-gradient(to bottom, #00bcd4, transparent, #e53935)",
          transform: "rotate(-35deg)",
          right: "28%",
          top: "-20px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 py-12 max-w-4xl mx-auto">
        {/* Quote icon circle */}
        <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-lg">
          <svg
            width="32"
            height="28"
            viewBox="0 0 32 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 28V17.2C0 14.1333 0.466667 11.3333 1.4 8.8C2.4 6.26667 3.73333 4.06667 5.4 2.2L9.4 5C8.06667 6.6 7 8.4 6.2 10.4C5.4 12.3333 5 14.4 5 16.6H9V28H0ZM18 28V17.2C18 14.1333 18.4667 11.3333 19.4 8.8C20.4 6.26667 21.7333 4.06667 23.4 2.2L27.4 5C26.0667 6.6 25 8.4 24.2 10.4C23.4 12.3333 23 14.4 23 16.6H27V28H18Z"
              fill="#1a3a4a"
            />
          </svg>
        </div>

        {/* Main text */}
        <h2 className="text-white leading-tight text-center text-2xl md:text-4xl font-bold">
          Quality products and exceptional
          <br />
          service are very important to us
        </h2>
      </div>
    </div>
  );
}
