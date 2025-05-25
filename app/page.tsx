import About from "@/components/About";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (  
    <div>
      <Navbar/>
      <Hero/>  
      <About />
      <Services/>
      <Events/>
      <Team/>
      <Testimonials/>
      <Footer />
    </div>
  );
}
