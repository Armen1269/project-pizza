import React from 'react'

import { useEffect, useState } from "react";
import Catigories from "../Components/Content-top/Catigories/Catigories";
import Sort from "../Components/Content-top/Sort/Sort";
import PizzaBlockSkeleton from "../Components/PizzaBlock/PizzaBlockSkeleton";
import PizaaBlock from "../Components/PizzaBlock/PizzaBlock";


const Home = () => {
	  const [pizzaBlockSkeleton, setPizzaplockSkeleton] = useState(true);
    const [items, setItems] = useState([]);
    const Arr = new Array(10).fill(undefined);
    console.log(Arr);
    console.log(items);
    useEffect(() => {
      fetch(`https://6465c337228bd07b3551cd41.mockapi.io/items`)
        .then((response) => response.json())
        .then((data) => {
            setItems(data);
            setPizzaplockSkeleton(false);
        });
				window.scrollTo(0,0)
    }, []);
    console.log(items);
return (
  <div>
    <div className="content__top">
      <Catigories />
      <Sort />
    </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">
      {pizzaBlockSkeleton
        ? Arr.map((_, index) => <PizzaBlockSkeleton key={index} />)
        : items.map((obj) => <PizaaBlock key={obj.id} {...obj} />)}
    </div>
  </div>
);



}
export default Home