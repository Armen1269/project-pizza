import React, { useEffect, useState } from "react";
import "./scss/app.scss";
import Header from "./Components/Header/Header";
import Catigories from "./Components/Content-top/Catigories/Catigories";
import Sort from "./Components/Content-top/Sort/Sort";
//import pizzas from "./assets/pizzas.json";  -//  JSON  failic  anjatvum  enq  vorpezi  nuyn  fail@   stananq  serveric
import PizaaBlock from "./Components/PizzaBlock/PizzaBlock";
//console.log(pizzas);

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`https://6465c337228bd07b3551cd41.mockapi.io/items`)
      .then((response) => response.json())
      .then((items) => setItems(items));
  },[]);
console.log(items);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Catigories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {/* ------------------FETCH - i   mijocov ------------------------------ */}

            {items.map((obj) => (
              <PizaaBlock key={obj.id} {...obj} /> 
            ))}
            {/* ---------------------------------------------------------------------- */}
            {/* ---  ajs  varyan@  <<JSON>> -  i mijocov e ----- isk  sranic verev@  <<FETCHI>>   mijocov------- */}
            {/* {pizzas.map((obj) => (
             <PizaaBlock
               key={obj.id}
                {...obj} karelia  nerqevi  sax graci  poxaren ogtvel SPRED operatoris  aysinqn {...obj}
                //title={obj.title}
                //price={obj.price}
              //imageUrl={obj.imageUrl}
                //sizes={obj.sizes}
                //types ={obj.types}
              />
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
