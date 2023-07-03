import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Catigories from "../Components/Content-top/Catigories/Catigories";
import Sort from "../Components/Content-top/Sort/Sort";
import PizzaBlockSkeleton from "../Components/PizzaBlock/PizzaBlockSkeleton";
import PizaaBlock from "../Components/PizzaBlock/PizzaBlock";
import { useDispatch, useSelector } from "react-redux";
import { setCatigoriesIndex } from "../redux/slices/filterSlice";

const Home = ({searchValue, setSearchValue}) => {
  const dispatch = useDispatch();
  const catigoriesIndex = useSelector((state) => state.filter.catigoriesIndex);
  const sortType = useSelector((state) => state.filter.sort.sortProperty);

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
  useEffect(() => {
    setPizzaplockSkeleton(true);
    axios
      .get(
        `https://6465c337228bd07b3551cd41.mockapi.io/item?${catigoriesPizzas}${sortPizzasAsc}`
      )
      .then((res) => setItems(res.data));
			 setPizzaplockSkeleton(false);

    window.scrollTo(0, 0);
  }, [catigoriesPizzas, sortPizzasAsc]);
const pizzas = items.filter(obj=>{
if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
  return true;
}
	return false
}).map((obj) => <PizaaBlock key={obj.id} {...obj} />)
const skeleton =  Arr.map((_, index) => <PizzaBlockSkeleton key={index} />)
  return (
    <div>
      <div className="content__top">
        <Catigories
          value={catigoriesIndex}
          onClickPizzaCategoriesName={onClickPizzaCategoriesName}
        />
        <Sort />{" "}
        {/*   sortTypePizzas={sortTypePizzas}
          clickSortAvtive={(obj) => setSortTypePizzas(obj)} */}
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzaBlockSkeleton
          ? skeleton
          :pizzas }
      </div>
    </div>
  );
};
export default Home;
