import { Geist, Geist_Mono, Inter, Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";


//plus jakarta font for all types of headings and titles
const plusJakartaFont=Plus_Jakarta_Sans({
  variable:'--font-plus-jakarta-sans',
    subsets:['latin'],
  weigths:['500','600','700','800','900']
})


//used inter font for body
const interFont=Inter({
  variable:'--font-inter',
  subsets:['latin'],
  weigths:['400','500','600','700','800','900']
})


//outfit font for only Fable logo 
const outfitFont=Outfit({
  variable:'--font-outfit',
  subsets:['latin'],
  weigths:['600','700','800','900']

})

export const metadata = {
  title: "Fable - Ebook Sharing Platform",
  description: "Fable is an ebook sharing platform that allows users to share and discover ebooks with friends and family.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${interFont.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}
    <Toaster />

      </body>
    </html>
  );
}
