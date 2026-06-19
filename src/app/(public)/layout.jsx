import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

export default function PublicLayout({ children }) {
  return <section>
    <Navbar/>
    {children}
  <Footer/>
  </section>;
}
