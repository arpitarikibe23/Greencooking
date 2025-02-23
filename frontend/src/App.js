import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ShareRecipe from "./pages/ShareRecipe";
import SaveRecipe from "./pages/SaveRecipe";
import About from "./pages/About";      // ✅ Import About Page
import ContactUs from "./pages/ContactUs";  // ✅ Import Contact Page

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("username");
    setIsLoggedIn(!!user);
  }, []);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/share-recipe" element={<ShareRecipe />} />
        <Route path="/save-recipe" element={<SaveRecipe />} />
        <Route path="/about" element={<About />} />       {/* ✅ About Page Route */}
        <Route path="/contact" element={<ContactUs />} />   {/* ✅ Contact Page Route */}
      </Routes>
    </Router>
  );
}

export default App;
