import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Companies from "@/components/sections/Companies";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Advantages from "@/components/sections/Advantages";
import Geography from "@/components/sections/Geography";
import Projects from "@/components/sections/Projects";
import Timeline from "@/components/sections/Timeline";
import Partners from "@/components/sections/Partners";
import Compliance from "@/components/sections/Compliance";
import Contacts from "@/components/sections/Contacts";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Companies />
        <Stats />
        <Services />
        <Advantages />
        <Geography />
        <Projects />
        <Timeline />
        <Partners />
        <Compliance />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
