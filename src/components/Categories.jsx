import React from "react";

function Categories(props) {
  return (
    <div className="categories-wrapper">
      <p className="categories__title">{"Browse jobs by category"}</p>
      <p className="categories__subtitle">
        {"Choose from the list of most popular categories"}
      </p>

      <div className="categories">
        {props.data.map((category) => (
          <div className="category">
            <img src={category.icon} className="category__image" alt="" />
            <p className="category__name">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
