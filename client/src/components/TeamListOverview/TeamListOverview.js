import React from "react";
import TeamCard from "../TeamCard/TeamCard";
import { Link } from "react-router-dom";
import Revealer from "../Revealer/Revealer";

class TeamListOverview extends React.Component {
  render() {
    const experts = Object.keys(this.props.expertDetails).map(key => (
      <TeamCard key={key} details={this.props.expertDetails[key]} />
    ));

    return (
      <React.Fragment>
     
        <Revealer/>
        <Link
          to="/our-team"
          onClick={this.onClick}
          className="switch switch--team"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewbox="0 0 12 11.9"
            height="18"
            fill="#fff"
          >
            <title>Switch to grid</title>
            <g>
              <rect width="3.3" height="3.29" />
              <rect x="4.4" width="3.3" height="3.29" />
              <rect x="8.7" width="3.3" height="3.29" />
              <rect y="4.3" width="3.3" height="3.29" />
              <path d="M6,4.3A1.7,1.7,0,0,0,4.4,6h0A1.6,1.6,0,0,0,7.6,6h0A1.7,1.7,0,0,0,6,4.3Z" />
              <rect x="8.7" y="4.3" width="3.3" height="3.29" />
              <rect y="8.6" width="3.3" height="3.29" />
              <rect x="4.4" y="8.6" width="3.3" height="3.29" />
              <rect x="8.7" y="8.6" width="3.3" height="3.29" />
            </g>
          </svg>
          Switch to grid
        </Link>
        {experts}
      </React.Fragment>
    );
  }
}

export default TeamListOverview;
