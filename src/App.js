import React from "react";
import "./scss/app.scss";
import Header from "./Components/Header/Header";
import Home from "./pages/Home";
import NodFound from "./pages/NodFound";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element= {<Cart/>}/>
            <Route path="*" element={<NodFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
