import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";
import { ThemeContext, ThemeContextProvider } from "./Components/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <ThemeContext.Consumer>
        {(context) => {
          const theme = context.isDarkTheme ? context.darkTheme : context.lightTheme;
          return (
            <div className="App" style={theme}>
              <Navbar />
              <Home />
              <About />
              <Work />
              <Contacts />
              <Footer />
            </div>
          );
        }}
      </ThemeContext.Consumer>
    </ThemeContextProvider>
  );
}

export default App;
