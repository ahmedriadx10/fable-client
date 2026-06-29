import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { stripe } from '@/lib/stripe';
import { getUserSession } from '@/lib/core/session';




export async function POST(request) {
  try {
    const headersList = await headers()
    const origin = headersList.get('origin')
    const formData=await request.formData()
    const price=formData.get('price')
    const bookId=formData.get('bookId')
const title=formData.get('title')
const coverImage=formData.get('coverImage')
const authorName=formData.get('authorName')
const authorId=formData.get('authorId')
const user=await getUserSession()
if(!user){
 return NextResponse.redirect(new URL('/login',request.url))
}
// console.log('user data',user)

// const bookData=await getBookDetails(bookId)

// console.log('book data is here',bookData)
    // Create Checkout Sessions from body params.
//have to fetch data from server using bookId for security purpose now i'm exploring

    const session = await stripe.checkout.sessions.create({
      customer_email:user?.email,
      line_items: [
        {
          // Provide the exact Price ID (for example, price_1234) of the product you want to sell
          price_data:{
            currency:'usd',
            unit_amount:Math.round(parseFloat(price)*100),
            product_data:{
              name:title
            }
          },
          quantity: 1,
        },
      ],
      metadata:{
        price:parseFloat(price),
        bookId,
        userId:user?.id,
        userName:user?.name,
        userEmail:user?.email,
        authorName,coverImage,
        authorId,
bookName:title
      },

      mode: 'payment',
      success_url: `${origin}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
    });
    return NextResponse.redirect(session.url, 303)
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    )
  }
}