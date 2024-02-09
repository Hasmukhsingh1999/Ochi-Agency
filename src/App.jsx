import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 text-white">
      <Navbar />
      <Landing/>
    </div>
  );
};

export default App;
