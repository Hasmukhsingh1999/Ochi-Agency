import About from "./components/About/About";
import Landing from "./components/Landing/Landing";
import Marquee from "./components/Marquee/Marquee";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Parallax />
    </div>
  );
};

export default App;
