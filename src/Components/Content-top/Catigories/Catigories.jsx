import React, { useState } from "react";
const Catigories = () => {
  const [activeCatigories, setActiveCatigories] = useState(0);

  const onClicCatigories = (index) => {
    setActiveCatigories(index);
  };

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
        {/* <li className="active">Все</li> */}
        {catigoriesPizza.map((value,index) => {
          return (
            <li  key={index}
              onClick={() => onClicCatigories(index)}
              className={activeCatigories === index ? "active" : ""}
            >
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Catigories;
