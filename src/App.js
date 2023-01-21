import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" index element={<Home/>}/>
        <Route path="/project" index element={<Projects/>}/>
      </Routes>
    </>
  );
}

export default App;
