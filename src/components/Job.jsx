import React from "react";
import calendar from "../images/calendar.png";
import locationic from "../images/location.png";
import file from "../images/file.png";
import placeholderic from "../images/placeholder.png";

function Job({ title, logo, company, location, created_at, type }) {
  return (
    <div className="job">
      <img src={logo ? logo : placeholderic} className="job__logo" alt="" />
      <p className="job__title">{title}</p>
      <div
        className="job__type"
        style={{
          backgroundColor: type === "Full Time" ? "#D2FFDC" : "#FEE3D0",
        }}
      >
        <p>{type}</p>
      </div>
      <div className="job__details">
        <div>
          <img src={file} alt="" />
          <p>{company}</p>
        </div>
        <div>
          <img src={locationic} alt="" />
          <p>{location}</p>
        </div>
        <div className="job__date">
          <img src={calendar} alt="" />
          <p>
            {created_at.slice(4, 10).concat(". ").concat(created_at.slice(23))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Job;
