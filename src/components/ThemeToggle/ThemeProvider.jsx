import React, { useState } from 'react';
import ThemedComp from './ThemedComp';

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    };
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

const App = () => {
    <ThemeProvider>
        <ThemedComp />
    </ThemeProvider>
}

export default App;