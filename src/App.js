import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Education from "./components/Education/Education";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import { useEffect } from "react";

console.log("Changes done!!");
// useEffect(() => {
window.addEventListener("message", (eventData) => {
  console.log("eventData::React::", eventData);
});
// }, []);



function App() {
  return (
    <>
      
      {/* <Navbar /> */}
      <Home />
      {/* <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer /> */}
    </>
  );
}

export default App;
