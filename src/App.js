import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import FunctionComponent from './FunctionComponent';
import ClassComponentContext from './ClassContextComponent';
import React from 'react';
import { ThemeProvider } from './ThemeContext';


export const ThemeContext = React.createContext()

const App = () => {




  return (
    <>
      <ThemeProvider>
        <FunctionComponent />
      </ThemeProvider>

    </>
  )
}
export default App;
