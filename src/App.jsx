import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { Contact, Home, About } from "./pages";

const App = () => {
  const navbarStyles = {
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  };

  return (
    <main className="bg-slate-300/20">
      <Router>
        <div style={navbarStyles}>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/*"
            element={
              <>
                <Routes>
                  <Route path="/about" element={<About />} />
                  {/* <Route path="/studies" element={<Studies />} /> */}
                  <Route path="/contact" element={<Contact />} />
                  <Route
                    path="/Food-Bank-App-for-the-Scarborough-Food-Network-Hackathon-3rd-Place-7d555abc539d4bfcaa7148deaf6b1b5f"
                    element={<Navigate to="https://seyeonjo.notion.site/Food-Bank-App-for-the-Scarborough-Food-Network-Hackathon-3rd-Place-7d555abc539d4bfcaa7148deaf6b1b5f?pvs=4" />}
                  />
                </Routes>
              </>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
