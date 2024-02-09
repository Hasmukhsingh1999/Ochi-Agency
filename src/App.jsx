import Landing from "./components/Landing/Landing";
import Marquee from "./components/Marquee/Marquee";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <Landing />
      <Marquee />
    </div>
  );
};

export default App;
