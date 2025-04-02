import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import ThemeWrapper from "./ThemeWrapper";
import Scroop from './Scroop';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
function App() {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <div>
          <Navbar/>
          <Scroop/>
          <Footer/>
          {/* <ThemeToggleButton /> */}
        </div>
      </ThemeWrapper>
    </ThemeProvider>
  );
}

export default App;

