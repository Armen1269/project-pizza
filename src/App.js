import React from "react";
import "./scss/app.scss";
// import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment } from "./redux/slices/filterSlice";
import Header from "./Components/Header/Header";
import Home from "./pages/Home";
import NodFound from "./pages/NodFound";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";

function App() {
	// const count = useSelector((state) => state.counter.count);
  // const dispatch = useDispatch();
  return (
    <div className="wrapper">
      {/* <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button> */}
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
