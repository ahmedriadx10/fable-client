import { stripe } from '@/lib/stripe'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
// আইকন ইমপোর্ট (প্রয়োজন অনুযায়ী চেঞ্জ করতে পারো)
import { HiCheckCircle, HiOutlineBookOpen } from 'react-icons/hi'
import { FiShield } from 'react-icons/fi'
import { paymentSuccessDataAdd } from '@/lib/actions/Payment'

export default async function PaymentSuccessPage({ searchParams }) {
  const { session_id } = await searchParams

  if (!session_id)
    throw new Error('Please provide a valid session_id (`cs_test_...`)')

  const {
    status,
    customer_details: { email: customerEmail },
    metadata,
    payment_intent,
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent'],
  })

  if (status === 'open') {
    return redirect('/')
  }

  if (status === 'complete') {
    // মেটাডাটা এবং পেমেন্ট ইনটেন্ট থেকে ডেটা ডিস্ট্রাকচারিং
    const price = metadata?.price ? parseFloat(metadata.price).toFixed(2) : '0.00'
    const bookId = metadata?.bookId
    const authorName = metadata?.authorName || 'Unknown Author'
    const coverImage = metadata?.coverImage || '/placeholder-book.jpg' // একটি ডিফল্ট ইমেজ পাথ দিয়ে রাখতে পারো
    const bookName = metadata?.bookName || 'Unknown Book'
    const transactionId = payment_intent?.id || 'N/A'
const authorId=metadata?.authorId
const userId=metadata?.userId
const userName=metadata?.userName
await paymentSuccessDataAdd({userId,bookId,authorId,authorName,coverImage,bookName,transactionId,price,userName})

    return (
      <main className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-4 antialiased">
        <div className="w-full max-w-2xl text-center space-y-6">
          
          {/* সাকসেস গ্রিন আইকন */}
          <div className="flex justify-center">
            <div className="bg-[#E8FBF2] p-2 rounded-2xl inline-block">
              <HiCheckCircle className="text-[#22C55E] text-5xl" />
            </div>
          </div>

          {/* হেডিং টেক্সট */}
          <div className="space-y-2">
            <h1 className="text-3xl font-extrabold text-[#0F172A]">
              Purchase Successful!
            </h1>
            <p className="text-[#64748B] text-base font-medium">
              Your new fable has been added to your library.<br />
              Happy reading!
            </p>
          </div>

          {/* মেইন প্রোডাক্ট কার্ড */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-left flex flex-col md:flex-row gap-6 items-center md:items-start max-w-2xl mx-auto">
            
            {/* বুক কভার ইমেজ */}
            <div className="relative w-28 h-40 bg-[#F1F5F9] rounded-md overflow-hidden shadow-md shrink-0">
              <Image
                src={coverImage}
                alt={bookName}
                fill
                className="object-cover"
                sizes="(max-w-7xl) 100vw, 112px"
                priority
              />
            </div>

            {/* বইয়ের ডিটেইলস */}
            <div className="flex-1 w-full space-y-4">
              <div>
                <h2 className="text-xl font-bold text-[#1E293B] leading-tight">
                  {bookName}
                </h2>
                <p className="text-sm text-[#64748B] mt-1">
                  by {authorName}
                </p>
              </div>

              <hr className="border-[#E2E8F0]" />

              {/* ট্রানজেকশন এবং প্রাইস এরিয়া */}
              <div className="flex justify-between items-start gap-4">
                <div>
                  <span className="text-[11px] font-bold tracking-wider text-[#94A3B8] uppercase block">
                    Transaction ID
                  </span>
                  <span className="text-sm font-semibold text-[#475569] break-all">
                    {transactionId}
                  </span>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[11px] font-bold tracking-wider text-[#94A3B8] uppercase block">
                    Amount Paid
                  </span>
                  <span className="text-xl font-extrabold text-(--color-primary)">
                    ${price}
                  </span>
                </div>
              </div>

              {/* স্ট্রাইপ সিকিউরড ব্যাজ */}
              <div className="bg-[#EBFDF5] text-[#15803D] flex items-center justify-center gap-1.5 py-2 px-3 rounded-md text-xs font-semibold">
                <FiShield className="text-sm" />
                <span>Secure payment via Stripe</span>
              </div>
            </div>
          </div>

          {/* অ্যাকশন বাটন্স */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto pt-2">
            <Link 
              href={`/browse-ebooks/${bookId}`} // তোমার ফ্যাবলের রিডিং পেজের রাউট অনুযায়ী চেঞ্জ করে নিও
              className="w-full sm:w-auto bg-(--color-primary) hover:bg-[#4F46E5] text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm text-sm"
            >
              <span>Start Reading Now</span>
              <HiOutlineBookOpen className="text-lg" />
            </Link>
            
            <Link 
              href="/" 
              className="w-full sm:w-auto bg-white border border-[#D1D5DB] hover:bg-[#F8FAFC] text-[#475569] font-semibold px-8 py-3 rounded-lg transition-colors text-sm text-center"
            >
              Go to Home
            </Link>
          </div>

          {/* সাপোর্ট লিংক */}
          <div className="pt-4">
            <p className="text-xs font-medium text-[#64748B]">
              Need help?{' '}
              <a href="mailto:support@fable.com" className="text-(--color-primary) hover:underline font-semibold">
                Contact Support
              </a>
            </p>
          </div>

        </div>
      </main>
    )
  }
}