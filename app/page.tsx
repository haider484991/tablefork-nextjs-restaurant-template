import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Menu from "@/components/sections/Menu";
import About from "@/components/sections/About";
import Visit from "@/components/sections/Visit";
import Reservations from "@/components/sections/Reservations";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <About />
        <Visit />
        <Reservations />
      </main>
      <Footer />
    </>
  );
}
