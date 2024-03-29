import About from "./components/About/About";
import Alumini from "./components/Alumini/Alumini";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import Marquee from "./components/Marquee/Marquee";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll()


  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Parallax />
      <Features />
      <Alumini />
      <Footer />
    </div>
  );
};

export default App;
