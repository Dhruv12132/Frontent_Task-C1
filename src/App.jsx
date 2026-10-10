import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Banner from "./Banner";
import About from "./About";
import Projects from "./Projects";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Subscribe from "./Subscribe";
import Articles from "./Articles";
import Tutorials from "./Tutorials";
import Footer from "./route/Footer";

import Login from "./route/Login";
import Signup from "./route/Signup";

function Home() {
  return (
    <>
      <Banner />
      <About />
      <Projects />
      <Gallery />
      <Contact />
      <Subscribe />
      <Articles />
      <Tutorials />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
