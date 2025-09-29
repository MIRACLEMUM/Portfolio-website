import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



export default function App() {
  return (
    <div className="bg-background min-h-screen text-textDark">
      <Navbar />

      {/* Add top padding to push all sections below the fixed navbar */}
      <main className="pt-24">
        <Hero />
        <About />
        <Skills />
        <Services/>
        <Projects/>
        <Contact />
        <Footer />  

        
      </main>
    </div>
  );
}
