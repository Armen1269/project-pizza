import React from "react";
const Catigories = ({ value, onClickPizzaCategoriesName }) => {
  const catigoriesPizza = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  return (
    <div className="categories">
      <ul>
        {catigoriesPizza.map((namePizza, index) => {
          return (
            <li
              key={index}
              onClick={() => onClickPizzaCategoriesName(index)}
              className={value === index ? "active" : ""}
            >
              {namePizza}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Catigories;
