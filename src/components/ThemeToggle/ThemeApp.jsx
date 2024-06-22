import React, { createContext, useState } from 'react';
import ThemedComp from './ThemedComp';

export const ThemeContext = createContext();

const ThemeApp = () => {
    const [darkTheme, setDarkTheme] = useState(true);

    const toggleTheme = () => {
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    };
  return (
    <ThemeContext.Provider value={darkTheme}>
        <h2>Example using context API</h2>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <ThemedComp />
    </ThemeContext.Provider>
  )
}

export default ThemeApp;