import React from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext'
import { ThemeContext } from './App'

const FunctionComponent = () => {
    const darkTheme = useTheme(ThemeContext)
    const toggleTheme = useThemeUpdate(ThemeContext)
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#ccc',
        color: darkTheme ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem'
    }
    return (
        <> 
        <button onClick={toggleTheme}>toggle theme</button>
            <div style={themeStyles}>fUNCTION Theme</div>
        </>

    )
}

export default FunctionComponent