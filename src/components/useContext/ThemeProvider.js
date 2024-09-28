import React,{useState, useEffect} from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');
    
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }

    useEffect(() => {
        document.body.style.backgroundColor = theme === 'light' ? '#fff' : '#333';
        document.body.style.color = theme === 'light' ? '#000' : '#fff'
    }, [theme])

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;