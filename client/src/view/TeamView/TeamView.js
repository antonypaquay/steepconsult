import React from "react";
import config from "../../config";
import TeamOverview from "../../components/TeamOverview/TeamOverview";

import Revealer from "../../components/Revealer/Revealer";
import './TeamView.scss';

class TeamView extends React.Component {
  constructor() {
    super();
    this.state = {
      expertDetails: []
    };
  }

 
  componentDidMount() {
    let expertPage =
      config.domain + "wp-json/wp/v2/pages/" + config.expertSmallPage;
    let expertPosts =
      config.domain + "wp-json/wp/v2/" + config.expertSmallPosts;
    fetch(expertPage)
      .then(response => response.json())
      .then(response =>
        this.setState({
          title: response.title.rendered,
          content: response.content.rendered
        })
      );
    fetch(expertPosts)
      .then(response => response.json())
      .then(response =>
        this.setState({
          expertDetails: response
        })
      );
  }

  render() {
    return (
      <section className="swiper-slide section__team">
        <Revealer/>
        <TeamOverview
          title={this.state.title}
          content={this.state.content}
          expertDetails={this.state.expertDetails}
        />

      </section>
    );
  }
}

export default TeamView;
