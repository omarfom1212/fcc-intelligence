import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import WhyFCC from "@/components/whyFCC";
import Packages from "@/components/Packages";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
 return (
<main className="min-h-screen bg-[#030712] text-white overflow-hidden">
<Navbar />
<Hero />
<Services />
<Portfolio />
<WhyFCC />
<Packages />
<Process />
<Contact />
<Footer />
</main>
 );
}