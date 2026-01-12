import { useState, useEffect } from "react";
import Sidebar from "react-sidebar";
import {Route, Routes} from "react-router-dom";
import DashBoard from "./Components/DashBoard";
import NavBarOffCanvas from "./Components/NavBarOffCanvas";
import NavHeader from "./Components/NavHeader";


function App() {
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Sidebar 
      sidebar={
        <NavBarOffCanvas/>
      }
      open={open}
      docked={isDesktop ? open : false}
      onSetOpen={setOpen}
      styles={{
        sidebar: { 
          width: "260px",
          zIndex: 100
        },
        overlay: {
          zIndex: 99,
          backgroundColor: "rgba(0,0,0,0.5)"
        },
        content: {
          transition: "margin 0.3s ease",
          minHeight: "100vh",
        },
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className={`
          fixed top-3
            h-10 w-10
            bg-red-600 text-white !rounded-full
            flex items-center justify-center
            z-[150] transition-all duration-300 border-0
            ${open && isDesktop ? "left-[230px]" : "left-4"}
        `}
      >
        ☰
      </button>

      <header className="h-16 text-white flex items-center px-6 shadow-md justify-between">
        <NavHeader/>
      </header>

      <main className="bg-gray-100">
        <Routes>
          <Route path="/" element={<DashBoard/>}/>
        </Routes>
      </main>

      <footer className="h-14 bg-gray-200 flex items-center px-6">
        Footer
      </footer>
    </Sidebar>
  );
}

export default App;