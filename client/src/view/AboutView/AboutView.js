import React from "react";
import Revealer from "../../components/Revealer/Revealer";
import AboutSteep from "../AboutSteep/AboutSteep";
import TeamView from "../TeamView/TeamView";
import ExpertisesView from "../ExpertisesView/ExpertisesView";
import { blendMode, resetTop } from "../../index";
import Footer from "../../components/Footer/Footer";
import { config } from "../../config";

class AboutView extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    let pageHome = config.domain + "wp-json/wp/v2/pages/" + config.aboutPage;
    fetch(pageHome)
      .then(response => response.json())
      .then(response =>
        this.setState({
          title: response.title.rendered,
          content: response.content.rendered,

          imgDesktop:
            response.better_featured_image.media_details.sizes.desktopHalf
              .source_url,
          imgIpad:
            response.better_featured_image.media_details.sizes.ipad.source_url
        })
      );
    blendMode();
    resetTop();
  }

  render() {
    let { title, content, imgDesktop, imgIpad } = this.state;
    return (
      <React.Fragment>
        <Revealer />
        <AboutSteep
          label="The company"
          title={title}
          content={content}
          imgDesktop={imgDesktop}
          imgIpad={imgIpad}
        />
        <TeamView />
        <ExpertisesView />
        <Footer />
      </React.Fragment>
    );
  }
}

export default AboutView;
