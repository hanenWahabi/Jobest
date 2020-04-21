import React from "react";
import "../../sass/main.scss";
import Search from "../../components/Search";
import Job from "../../components/Job";
import { connect } from "react-redux";
import { getJOBS } from "../../actions/Job";

function Jobs({ jobs }) {
  return (
    <div>
      <Search />
      <div className="jobs-wrapper">
        {jobs.map((item) => (
          <Job
            title={item.title}
            logo={item.company_logo}
            type={item.type}
            created_at={item.created_at}
            company={item.company}
            location={item.location}
          />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = ({ Job }) => {
  const { jobs } = Job;

  return { jobs };
};
export default connect(mapStateToProps, { getJOBS })(Jobs);
