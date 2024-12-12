
import './App.css';

import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import ThemeWrapper from "./ThemeWrapper";
// import ThemeToggleButton from "./ThemeToggleButton";
import Navbar from './Navbar/Navbar';
// import Falcon from './Falcon';
function App() {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <div>
          <Navbar/>
          {/* <ThemeToggleButton /> */}
        </div>
      </ThemeWrapper>
    </ThemeProvider>
  );
}

export default App;

