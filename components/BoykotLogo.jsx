import Link from "next/link";

export default function BoykotLogo({ className = "", size = 32, showText = true, textClassName = "" }) {
 return (
  <Link href="/">
   <div className={`flex items-center gap-3 ${className}`}>
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-orange-600">
     <svg
      width={size > 32 ? 28 : 28}
      height={size > 32 ? 28 : 28}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
     >
      <circle
       cx="12"
       cy="12"
       r="9.5"
       stroke="currentColor"
       strokeWidth="2"
       fill="none"
       opacity="0.4"
      />

      <g>
       <rect
        x="7"
        y="8"
        width="10"
        height="10"
        rx="1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
       />

       <path
        d="M7 8L12 5L17 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
       />

       <path
        d="M11 8V11M13 8V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
       />

       <path
        d="M9.5 12H14.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
       />
       <path
        d="M9.5 14H14.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
       />
      </g>

      <path
       d="M4.5 4.5L19.5 19.5"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       opacity="0.6"
      />
     </svg>
    </span>
    {showText && (
     <span className={`text-lg font-semibold text-slate-900 md:text-xl ${textClassName}`}>
      Boykot Rehberi
     </span>
    )}
   </div>
  </Link>
 );
}