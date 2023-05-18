// import React, { useEffect, useState } from "react";
import "./scss/app.scss";
import Header from "./Components/Header/Header";
// import Catigories from "./Components/Content-top/Catigories/Catigories";
// import Sort from "./Components/Content-top/Sort/Sort";
// import PizzaBlockSkeleton from "./Components/PizzaBlock/PizzaBlockSkeleton";
// import PizaaBlock from "./Components/PizzaBlock/PizzaBlock";

function App() {
  // const [pizzaBlockSkeleton, setPizzaplockSkeleton] = useState(true);
  // const [items, setItems] = useState([]);
  // const Arr = new Array(10).fill(undefined);
  // console.log(Arr);
  // console.log(items);
  // useEffect(() => {
  //   fetch(`https://6465c337228bd07b3551cd41.mockapi.io/items`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setTimeout(() => {
  //         setItems(data);
  //         setPizzaplockSkeleton(false);
  //       }, 1000);
  //     });
  // }, []);
  // console.log(items);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
					
          {/* <div className="content__top">
            <Catigories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzaBlockSkeleton
              ? Arr.map((_, index) => <PizzaBlockSkeleton key={index} />)
              : items.map((obj) => <PizaaBlock key={obj.id} {...obj} />)}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
// {
//               return pizzaBlockSkeleton ? (
//                 <PizzaBlockSkeleton key={obj.id} {...obj} />
//               ) : (
//                 <PizaaBlock key={obj.id} {...obj} />
//               );
//             }
