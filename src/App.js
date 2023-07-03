import React, { createContext, useState } from "react";
import "./scss/app.scss";
import Header from "./Components/Header/Header";
import Home from "./pages/Home";
import NodFound from "./pages/NodFound";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";

export const searchPizzas = createContext() 


function App() {
const [searchValue,setSearchValue] = useState("")

  return (
    <div className="wrapper">
      <searchPizzas.Provider value={{ searchValue, setSearchValue }}>
        <Header />
     
        <div className="content">
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                  />
                }
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NodFound />} />
            </Routes>
          </div>
        </div>
      </searchPizzas.Provider>
    </div>
  );
}

export default App;
