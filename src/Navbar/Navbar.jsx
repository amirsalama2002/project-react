import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./../Home/Home";
import About from "./../About/About";

 function Navbar() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navbar;