import { useState } from "react";
import Sidebar from "react-sidebar";
import {Route, Routes} from "react-router-dom";
import DashBoard from "./Components/DashBoard";
import NavBarOffCanvas from "./Components/NavBarOffCanvas";
import NavHeader from "./Components/NavHeader";


function App() {
  const [open, setOpen] = useState(false);
  return (
    <Sidebar 
      sidebar={
        <NavBarOffCanvas/>
      }
      open={open}
      docked={open}
      onSetOpen={setOpen}
      styles={{
        sidebar: { width: "260px" },
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
            z-50 transition-all duration-300 border-0
            ${open ? "left-[230px]" : "left-4"}
        `}
      >
        ☰
      </button>

      <header className="h-16 text-white flex items-center px-6 shadow-md justify-between">
        <NavHeader/>
      </header>

      <main className="bg-gray-100">
        <Routes>
          <Route path="/dashboard" element={<DashBoard/>}/>
        </Routes>
      </main>

      <footer className="h-14 bg-gray-200 flex items-center px-6">
        Footer
      </footer>
    </Sidebar>
  );
}

export default App;
