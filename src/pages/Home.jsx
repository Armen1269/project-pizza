import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Catigories from "../Components/Content-top/Catigories/Catigories";
import Sort from "../Components/Content-top/Sort/Sort";
import PizzaBlockSkeleton from "../Components/PizzaBlock/PizzaBlockSkeleton";
import PizaaBlock from "../Components/PizzaBlock/PizzaBlock";
import { useDispatch, useSelector } from "react-redux";
import { setCatigoriesIndex } from "../redux/slices/filterSlice";
import Pageination from "../Components/Pageination/Pageination";

const Home = ({ searchValue }) => {
  const dispatch = useDispatch();
  const catigoriesIndex = useSelector((state) => state.filter.catigoriesIndex);
  const sortType = useSelector((state) => state.filter.sort.sortProperty);
  const [pizzaPages, setPizzaPages] = useState(1);
  const [pizzaBlockSkeleton, setPizzaplockSkeleton] = useState(true);
  const [items, setItems] = useState([]);
  const Arr = new Array(10).fill(undefined);
  //------------------------------------------------------
  // });
  const onClickPizzaCategoriesName = (id) => {
    dispatch(setCatigoriesIndex(id));
  };
  //------------------------------------------------------
  const catigoriesPizzas =
    catigoriesIndex > 0 ? `category=${catigoriesIndex}&` : "";
  const sortPizzasAsc = `sortBy=${sortType}&order=asc`;
  const search = searchValue ? `&search=${searchValue}` : "";
  useEffect(() => {
    setPizzaplockSkeleton(true);
    axios
      .get(
        `https://6465c337228bd07b3551cd41.mockapi.io/item?page=${pizzaPages}&limit=4&${catigoriesPizzas}${sortPizzasAsc}${search}`
      )
      .then((res) => setItems(res.data));
    setPizzaplockSkeleton(false);

    window.scrollTo(0, 0);
  }, [catigoriesPizzas, sortPizzasAsc, searchValue, pizzaPages, search]);
  const pizzas = items.map((obj) => <PizaaBlock key={obj.id} {...obj} />);
  console.log(items);
  const skeleton = Arr.map((_, index) => <PizzaBlockSkeleton key={index} />);
  return (
    <div>
      <div className="content__top">
        <Catigories
          value={catigoriesIndex}
          onClickPizzaCategoriesName={onClickPizzaCategoriesName}
        />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzaBlockSkeleton ? skeleton : pizzas}
      </div>
      <Pageination setPizzaPages={(number) => setPizzaPages(number)} />
    </div>
  );
};
export default Home;
