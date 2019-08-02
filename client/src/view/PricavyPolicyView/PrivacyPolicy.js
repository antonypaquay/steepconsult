import React from "react";
import config from "../../config";
import ScrollRightContainer from "../../components/ScrollRightContainer/ScrollRightContainer";
import Revealer from "../../components/Revealer/Revealer";
import "./privacy.scss";
import Footer from "../../components/Footer/Footer";
import { blendMode, resetTop } from "../../index";

class PrivacyPolicyView extends React.Component {
  constructor() {
    super();
    this.state = {
      Privacy: []
    };
  }

  componentDidMount() {
    let Privacy = config.domain + "wp-json/wp/v2/pages/" + config.PrivacyPage;
    fetch(Privacy)
      .then(response => response.json())
      .then(response =>
        this.setState({
          title: response.title.rendered,
          content: response.content.rendered,
          imgDesktop:
            response.better_featured_image.media_details.sizes.desktop
              .source_url,
          imgIpad:
            response.better_featured_image.media_details.sizes.ipad.source_url
        })
      );

    blendMode();
    resetTop();
  }
  render() {
    const { title, content, imgDesktop, imgIpad } = this.state;

    return (
      <React.Fragment>
        <Revealer />

        <section className="section section__duoText section__duoText--onepage ">
          <ScrollRightContainer
            label="Explore"
            title={title}
            content={content}
            imgDesktop={imgDesktop}
            imgIpad={imgIpad}
          />
        </section>

        {/* HOME Footer */}

        <Footer />
      </React.Fragment>
    );
  }
}

export default PrivacyPolicyView;
