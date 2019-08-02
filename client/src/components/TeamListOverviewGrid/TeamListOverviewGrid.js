import React from "react";
import TeamCard from "../TeamCardGrid/TeamCardGrid";

class TeamListOverviewGrid extends React.Component {
  render() {

    const experts = Object.keys(this.props.expertDetails).map((key, i) => (
        <TeamCard index={i} key={key} details={this.props.expertDetails[key]} />
    ));

    return (
      <React.Fragment>
        {experts}
      </React.Fragment>
    );
  }
}

export default TeamListOverviewGrid;
