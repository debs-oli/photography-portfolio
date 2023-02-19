import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeContextProvider(props) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const [lightTheme] = useState({
    color: "#303030",
    backgroundColor: "#ffffff",
  });

  const [darkTheme] = useState({
    color: "#ffffff",
    backgroundColor: "#1b1f23",
  });

  function changeTheme() {
    setIsDarkTheme((currentState) => !currentState);
  }

  return (
    <ThemeContext.Provider value={{ isDarkTheme, lightTheme, darkTheme, changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
