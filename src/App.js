import React from "react";
import "./scss/app.scss";
import Header from "./Components/Header/Header";
import Catigories from "./Components/Content-top/Catigories/Catigories";
import Sort from "./Components/Content-top/Sort/Sort";
import pizzas from "./assets/pizzas.json";
import PizaaBlock from "./Components/PizzaBlock/PizzaBlock";
console.log(pizzas);

function App() {
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
            {pizzas.map((obj) => (
              <PizaaBlock key={obj.id}
                {...obj} // karelia  nerqevi  sax graci  poxaren ogtvel SPRED operatoris  aysinqn {...obj}
                // key={obj.title}
                // title={obj.title}
                // price={obj.price}
                //imageUrl={obj.imageUrl}
                // sizes={obj.sizes}
                // types ={obj.types}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
