import React from "react";
import style from "./NodFoundBlock.module.scss"
const NodFoundBlock = () => {
  return (
    <div className={style.root}>
      <h1>
        <span>😕</span>
        <br />
        {"Ничего не найденно :("}
      </h1>
			<p>к сожиленнию данная  интернет страница отсуствует в нашем интернет магазине</p>
    </div>
  );
};

export default NodFoundBlock;
