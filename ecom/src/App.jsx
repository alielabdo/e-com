import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { SearchDetailsProvider } from "./context/searchDetails";
import {routes} from './constants'

function App() {
  const [search, setSearch] = useState("");
  const[isLogin,setIsLogin]=useState(false);
  return (
    <div>
      <SearchDetailsProvider search={search} setSearch={setSearch}>
        <Navbar />
        <div className="flex-1 min-h-screen">
          <div>
            <Routes>
              {routes.map((route) => (
                <Route path={route.path} element={route.element}/>
              ))}
            </Routes>
          </div>
        </div>
      </SearchDetailsProvider>
      <Footer />
    </div>
  );
}

export default App;