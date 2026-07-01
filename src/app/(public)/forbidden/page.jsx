import Link from 'next/link'

export default function Forbidden() {
  return (
    <div className="min-h-[75vh] bg-[#fafafa] flex flex-col items-center justify-center px-6 py-12 transition-colors duration-300">
      <div className="text-center max-w-md w-full space-y-8">
        
        {/* Visual 403 Badge and Typography */}
        <div className="relative inline-block">
          <span className="absolute -top-3 -right-12 bg-[#ef4444] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
            Restricted
          </span>
          <h1 className="text-9xl font-black tracking-tight text-[#111827] select-none opacity-90">
            4<span className="text-[#6d28d9]">0</span>3
          </h1>
        </div>

        {/* Informative Text Section */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold tracking-tight text-[#111827] sm:text-3xl">
            Access Forbidden
          </h2>
          <p className="text-base text-[#6b7280] leading-relaxed">
            You don't have the necessary permissions or the proper account role to view this section.
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2 flex justify-center">
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-3 text-sm font-semibold text-white bg-[#6d28d9] rounded-xl shadow-md hover:bg-[#8b5cf6] transition-all duration-200 text-center"
          >
            Go to Homepage
          </Link>
        </div>

      </div>
    </div>
  )
}