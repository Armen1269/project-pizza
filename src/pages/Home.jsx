import React from "react";

import { useEffect, useState } from "react";
import Catigories from "../Components/Content-top/Catigories/Catigories";
import Sort from "../Components/Content-top/Sort/Sort";
import PizzaBlockSkeleton from "../Components/PizzaBlock/PizzaBlockSkeleton";
import PizaaBlock from "../Components/PizzaBlock/PizzaBlock";
import { useDispatch, useSelector } from "react-redux";
import { setCatigoriesIndex } from "../redux/slices/filterSlice";

const Home = () => {
  const dispatch = useDispatch();
  const catigoriesIndex = useSelector((state) => state.filter.catigoriesIndex);
	const sortType = useSelector((state) => state.filter.sort.sortProperty);
  console.log(catigoriesIndex, "sortik");

  const [pizzaBlockSkeleton, setPizzaplockSkeleton] = useState(true);
  const [items, setItems] = useState([]);
  const Arr = new Array(10).fill(undefined);
  //------------------------------------------------------
  // const [catigoriesIndex, setCatigoriesIndex] = useState(0);
  // const [sortTypePizzas, setSortTypePizzas] = useState({
  //   name: "популярности",
  //   sortProperty: "rating",
  // });
  const onClickPizzaCategoriesName = (id) => {
    console.log(id);
		dispatch(setCatigoriesIndex(id));
  };
  //------------------------------------------------------
  const catigoriesPizzas =
    catigoriesIndex > 0 ? `category=${catigoriesIndex}&` : "";
  const sortPizzasAsc = `sortBy=${sortType}&order=asc`;
console.log(sortPizzasAsc,"asc");
  useEffect(() => {
    setPizzaplockSkeleton(true);
    fetch(
      `https://6465c337228bd07b3551cd41.mockapi.io/item?${catigoriesPizzas}${sortPizzasAsc}`
    )
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setPizzaplockSkeleton(false);
      });
    window.scrollTo(0, 0);
  }, [catigoriesPizzas, sortPizzasAsc]);

  return (
    <div>
      <div className="content__top">
        <Catigories
          value={catigoriesIndex}
          onClickPizzaCategoriesName={onClickPizzaCategoriesName}
        />
        <Sort />{" "}  {/*   sortTypePizzas={sortTypePizzas}
          clickSortAvtive={(obj) => setSortTypePizzas(obj)} */}
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzaBlockSkeleton
          ? Arr.map((_, index) => <PizzaBlockSkeleton key={index} />)
          : items.map((obj) => <PizaaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};
export default Home;
