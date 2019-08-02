import React from "react";
import config from "../../config";
import ScrollRightContainer from "../../components/ScrollRightContainer/ScrollRightContainer";
import Revealer from "../../components/Revealer/Revealer";
import Footer from "../../components/Footer/Footer";
import { blendMode, resetTop } from '../../index';

class TermsView extends React.Component {
  constructor() {
    super();
    this.state = {
      GDPR: []
    };
  }

  componentDidMount() {
    blendMode();
    resetTop();
    let GDPR = config.domain + "wp-json/wp/v2/pages/" + config.GDPRPage;
    fetch(GDPR)
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

export default TermsView;
