import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./../Home/Home";
import About from "./../About/About";
import Server from "./../Server/Server";

 function Navbar() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/server" element={<Server/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navbar;