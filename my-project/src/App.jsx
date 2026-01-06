import "bootstrap/dist/css/bootstrap.css";
import Header from "./Components/Header files/header";
import About from "./Components/Other/About";
import Courses from "./Components/Other/cource";
import Contact from "./Components/Other/contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/home" element={<Header />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
