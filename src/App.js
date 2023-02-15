import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Contacts />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
