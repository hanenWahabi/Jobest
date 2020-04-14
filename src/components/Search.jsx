import React from "react";
import { Link } from "react-router-dom";

function Search(props) {
  return (
    <div>
      <div className="search">
        <Link to="/" className="app-name">
          {"Jobest"}
        </Link>
        <div className="search__header">
          <p className="search__title">{"Finding your new job got easier"}</p>
        </div>
        <div className="search__wrapper">
          <input className="search__input" placeholder="search for job" />
          <button className="search__button">{"Search"}</button>
        </div>
      </div>
    </div>
  );
}

export default Search;
