import { Navbar } from "./components/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Experience from "./pages/experience";
import Contact from "./pages/contact";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Home />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </Navbar>
    </div>
  );
}

export default App;
