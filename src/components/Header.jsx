import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

function Header(props) {
  const [navigate, setNavigate] = useState(false);

  return navigate ? (
    <Redirect to="/jobs" push={true} />
  ) : (
    <div className="header">
      <ul className="header__navigator">
        <li className="navigator__name">
          <a href="#">{"Jobest"}</a>
        </li>
        <li className="navigator__link">
          <a href="#">{"Home"}</a>
        </li>
        <li className="navigator__link">
          <a href="#">{"Jobs"}</a>
        </li>
        <li className="navigator__link">
          <a href="#">{"Career tips"}</a>
        </li>
      </ul>
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
            onClick={() => {
              props.onClick();
              setNavigate(true);
            }}
          />
        </div>
      </div>
      <img
        src={require("../images/illustration0.png")}
        className="header__image"
        alt=""
      />
    </div>
  );
}

export default Header;
