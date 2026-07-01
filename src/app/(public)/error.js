'use client'

import { useEffect } from 'react'

export default function Error({ error, unstable_retry }) {
  useEffect(() => {
    // Log the error to an error reporting service like Sentry or LogRocket
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[75vh] bg-[#fafafa] flex flex-col items-center justify-center px-6 py-12 transition-colors duration-300">
      <div className="text-center max-w-md w-full space-y-8">
        
        {/* Visual Error Badge and Typography */}
        <div className="relative inline-block">
          <span className="absolute -top-3 -right-14 bg-[#ef4444] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
            System Error
          </span>
          <h1 className="text-9xl font-black tracking-tight text-[#111827] select-none opacity-90">
            5<span className="text-[#6d28d9]">0</span>0
          </h1>
        </div>

        {/* Informative Text Section */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold tracking-tight text-[#111827] sm:text-3xl">
            Something went wrong!
          </h2>
          <p className="text-base text-[#6b7280] leading-relaxed">
            An unexpected error occurred while processing your request. Our team has been notified, and we are working to fix it.
          </p>
        </div>

        {/* Action Button to Recover / Retry */}
        <div className="pt-2 flex justify-center">
          <button
            onClick={() => unstable_retry()}
            className="w-full sm:w-auto px-8 py-3 text-sm font-semibold text-white bg-[#6d28d9] rounded-xl shadow-md hover:bg-[#8b5cf6] focus:outline-none focus:ring-2 focus:ring-[#6d28d9] focus:ring-offset-2 transition-all duration-200 text-center cursor-pointer"
          >
            Try Again
          </button>
        </div>

      </div>
    </div>
  )
}