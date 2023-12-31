import React, { useCallback, useContext, useRef, useState } from "react";
import style from "./Search.module.scss";
import { searchPizzas } from "../../App";
import debounce from "lodash.debounce";
const Search = () => {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");
  const { setSearchValue } = useContext(searchPizzas);
  function clickClear() {
    setSearchValue("");
		setInputValue("")
    inputRef.current.focus();
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const uppdateChangeInput = useCallback(
    debounce((value) => {
      setSearchValue(value);
    }, 1000),
    []
  );

  function onChangeInput(e) {
    setInputValue(e.target.value);
    uppdateChangeInput(inputValue);
  }

  return (
    <div className={style.root}>
      <svg
        className={style.icon}
        height="512px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 512 512"
        width="512px"
      >
        <path d="M448.3,424.7L335,311.3c20.8-26,33.3-59.1,33.3-95.1c0-84.1-68.1-152.2-152-152.2c-84,0-152,68.2-152,152.2  s68.1,152.2,152,152.2c36.2,0,69.4-12.7,95.5-33.8L425,448L448.3,424.7z M120.1,312.6c-25.7-25.7-39.8-59.9-39.8-96.3  s14.2-70.6,39.8-96.3S180,80,216.3,80c36.3,0,70.5,14.2,96.2,39.9s39.8,59.9,39.8,96.3s-14.2,70.6-39.8,96.3  c-25.7,25.7-59.9,39.9-96.2,39.9C180,352.5,145.8,338.3,120.1,312.6z" />
      </svg>
      <input
        ref={inputRef}
        placeholder="...Начать поиск"
        className={style.input}
        value={inputValue}
        onChange={onChangeInput}
      />
      {inputValue && (
        <svg
          onClick={clickClear}
          className={style.close}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      )}
    </div>
  );
};

export default Search;
