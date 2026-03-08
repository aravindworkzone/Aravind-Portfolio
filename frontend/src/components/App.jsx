import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Divider() {
  return <div style={{ height: 1, background: "#ece8e1" }} />;
}

export default function App() {
  return (
    <div style={{ background: "#fafaf8" }}>
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Projects />
      <Divider />
      <Stack />
      <Divider />
      <Contact />
      <Footer />
    </div>
  );
}
