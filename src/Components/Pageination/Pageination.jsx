import React from 'react'
import style from "./Pageination.module.scss"
import ReactPaginate from 'react-paginate';
const Pageination = ({ setPizzaPages, pizzaPages }) => {
  return (
    <ReactPaginate
      className={style.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => setPizzaPages(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={pizzaPages - 1}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pageination