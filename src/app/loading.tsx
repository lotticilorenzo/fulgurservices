import React from 'react'

export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 z-[100] bg-[var(--bg)] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-6">
        
        {/* Pulsing Lightning Bolt Logo Container */}
        <div className="relative w-24 h-24 rounded-full border border-[var(--br)] bg-[var(--bg-2)] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 rounded-full border-t-2 border-[var(--accent)] animate-spin" />
          
          <svg
            width="40" height="40" viewBox="0 0 24 24" fill="none"
            className="text-[var(--accent)] animate-pulse"
          >
            <path
              d="M13 3L4 14H12L11 21L20 10H12L13 3Z"
              fill="url(#accent-gradient)"
            />
            <defs>
              <linearGradient id="accent-gradient" x1="4" y1="3" x2="20" y2="21" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4ECBA0" />
                <stop offset="1" stopColor="#1B5E6E" />
              </linearGradient>
            </defs>
          </svg>
        </div>

      </div>
    </div>
  )
}
