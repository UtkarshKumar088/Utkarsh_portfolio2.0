import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx"
import About from "./components/About.jsx"
import Skills from "./components/Skills.jsx";
import Work from "./components/Work.jsx";
import Contact from "./components/Contact.jsx";
function App() {
  return (
    <div className="text-2xl font-bold">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>

    </div>
  );
}

export default App;
