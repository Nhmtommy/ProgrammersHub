import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Components/Header files/header";
import About from "./Components/Other/About";
import Courses from "./Components/Other/cource";
import Blog from "./Components/Other/blog";
import Contact from "./Components/Other/contact";
import { Route, Routes } from "react-router-dom";
import { updatePageMeta } from "./utils/seoConfig";

function App() {
  const location = useLocation();

  useEffect(() => {
    // Update page meta tags based on route
    const pathToKey = {
      "/": "home",
      "/home": "home",
      "/about": "about",
      "/courses": "courses",
      "/contact": "contact",
      "/blog": "blog",
    };
    
    const pageKey = pathToKey[location.pathname] || "home";
    updatePageMeta(pageKey);
    
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/home" element={<Header />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default App;
