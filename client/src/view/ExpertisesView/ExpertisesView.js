import React from "react";
import ExpertisesOverview from "../../components/ExpertisesOverview/ExpertisesOverview";
import config from "../../config";
import Revealer from "../../components/Revealer/Revealer";
import { blendMode } from "../../index";



class ExpertisesView extends React.Component {
  constructor() {
    super();
    this.state = {
      expertises: []
    };
  }

  componentDidMount() {
    blendMode();
    let expertisesURL =
      config.domain + "/wp-json/wp/v2/" + config.expertisePost;

    fetch(expertisesURL)
      .then(response => response.json())
      .then(response =>
        this.setState({
          expertises: response
        })
      );
  }
  render() {
    return (
      <section className="swiper-slide section__expertise">
        <Revealer />
        <ExpertisesOverview expertisePosts={this.state.expertises} />
      </section>
    );
  }
}

export default ExpertisesView;
