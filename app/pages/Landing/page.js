import About from "@/app/components/About";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
 import Services from "@/app/components/Services";

export default function Landing() {
  return (
    <>
      <Header isAbsolute={true} />
      <Hero />
       <About />
      <Services />
      <Footer />
    </>
  );
}
