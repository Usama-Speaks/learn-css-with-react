import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Videos from "./Components/Navbar/Videos";
import About from "./Components/Navbar/About";
import Roadmap from "./Components/Navbar/Roadmap";
import Meet from "./Components/Navbar/Meet";
import Footer from "./Components/Navbar/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Videos />
      <About />
      <Roadmap />
      <Meet />
      <Footer />
      <Footer />
    </div>
  );
}

export default App;
