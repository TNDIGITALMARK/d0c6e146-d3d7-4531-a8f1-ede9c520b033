export function LawWorkLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Hourglass Icon */}
      <div className="relative w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path
            d="M6 2H18V6.5C18 8.5 16.5 10 14.5 10.5L12 11.5L9.5 10.5C7.5 10 6 8.5 6 6.5V2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M6 22H18V17.5C18 15.5 16.5 14 14.5 13.5L12 12.5L9.5 13.5C7.5 14 6 15.5 6 17.5V22Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="currentColor"
            fillOpacity="0.5"
          />
          <line x1="6" y1="2" x2="18" y2="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="6" y1="22" x2="18" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>

      {/* LawWork Text */}
      <div className="text-2xl font-bold text-white">
        Law<span className="text-[#FF7B5F]">Work</span>
      </div>
    </div>
  );
}
