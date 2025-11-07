import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;