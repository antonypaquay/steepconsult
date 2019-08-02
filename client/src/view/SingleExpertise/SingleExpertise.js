import React from "react";
import Revealer from "../../components/Revealer/Revealer";
import config from "../../config";
import CaseStudiesView from "../CaseStudiesview/CaseStudiesView";
import TeamViewFull from "../TeamViewFull/TeamViewFull";
import Footer from "../../components/Footer/Footer";
import { blendMode, resetTop } from "../../index";
import ScrollRightContainer from "../../components/ScrollRightContainer/ScrollRightContainer";

class SingleExpertise extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    let expertisesURL = `${config.domain}/wp-json/wp/v2/${
      config.expertisePost
    }?slug=${id}`;
    fetch(expertisesURL)
      .then(response => response.json())
      .then(response =>
        this.setState({
          title: response[0].title.rendered,
          content: response[0].content.rendered,
          imgDesktop:
            response[0].better_featured_image.media_details.sizes.desktop
              .source_url,
          imgIpad:
            response[0].better_featured_image.media_details.sizes.ipad
              .source_url
        })
      );
    blendMode();
    resetTop();
  }

  render() {
    return (
      <React.Fragment>
        <Revealer />

        <section className="section section__duoText">
          <ScrollRightContainer
            label="Expertise"
            title={this.state.title}
            content={this.state.content}
            imgDesktop={this.state.imgDesktop}
            imgIpad={this.state.imgIpad}
          />
        </section>
        <TeamViewFull />
        <CaseStudiesView />
        <Footer />
      </React.Fragment>
    );
  }
}

export default SingleExpertise;
