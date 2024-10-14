import About from "@/app/components/About";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import ProductList from "@/app/components/ProductList";
import Section from "@/app/components/Section";
import Services from "@/app/components/Services";

export default function Landing() {
  return (
    <>
      <Header />
      <Hero />
      <ProductList />
      {/* <About /> */}
      {/* <Services /> */}
      <Footer />
    </>
  );
}
