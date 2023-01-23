import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" index element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
