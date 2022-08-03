import Navbar from "./componets/Nav";
import About from "./componets/About"
import Home from "./componets/Home";
import Skills from "./componets/Skills";
import Projects from "./componets/Projects";
import ContactUs from "./componets/Contact";
import Footer from "./componets/Footer";

//import Home from "./componets/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
