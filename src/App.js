import './App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import CustomCursor from './components/CustomCursor';
import Hero from "./components/Hero"
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/AllProjects';
import Contact from "./components/Contact";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
