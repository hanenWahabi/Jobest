import React from "react";

function Header(props) {
  return (
    <div className="header">
      <img src={require("../images/bg1.png")} className="header__oval" alt="" />
      <div className="header__body">
        <p className="header__title">{"Find your job better and faster"}</p>
        <p className="header__subtitle">
          {"Find your best job better and faster with Jobest"}
        </p>
        <div className="searchBar">
          <input
            className="searchBar__input"
            type="text"
            placeholder="Seacrh by skill, company and job"
          />
          <img
            src={require("../images/search.png")}
            className="searchBar__icon"
            alt=""
          />
        </div>
      </div>
      <img
        src={require("../images/illustration1.png")}
        className="header__image"
        alt=""
      />
    </div>
  );
}

export default Header;
