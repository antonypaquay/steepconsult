import React from "react";
import Revealer from "../../components/Revealer/Revealer";
import config from "../../config";
import "./SingleJob.scss";
import JoinUsFormView from "../JoinUsFormView/JoinUsFormView";
import TeamViewFull from "../TeamViewFull/TeamViewFull";
import SingleJobDetails from "../SinngleJobDetails/SingleJobDetails";
import { blendMode, resetTop } from "../../index";
import Footer from "../../components/Footer/Footer";

class SingleJob extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    blendMode();
    resetTop();
    const id = this.props.match.params.id;
    let expertisesURL = `${config.domain}/wp-json/wp/v2/${
      config.jobPosts
    }?slug=${id}`;
    fetch(expertisesURL)
      .then(response => response.json())
      .then(response =>
        this.setState({
          title: response[0].title.rendered,
          content: response[0].content.rendered,
          imgDesktop:
            response[0].better_featured_image.media_details.sizes.desktopHalf
              .source_url,
          imgIpad:
            response[0].better_featured_image.media_details.sizes.desktop
              .source_url
        })
      );
  }
  render() {
    return (
      <React.Fragment>
        <Revealer />
        <SingleJobDetails
          detailsTitle={this.state.title}
          detailsContent={this.state.content}
          detailsimgDesktop={this.state.imgDesktop}
          detailsimgIpad={this.state.imgIpad}
        />
        <TeamViewFull />
        <JoinUsFormView />
        <Footer />
      </React.Fragment>
    );
  }
}

export default SingleJob;
