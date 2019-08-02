import React from "react";
import config from "../../config";
import ScrollRightContainer from "../../components/ScrollRightContainer/ScrollRightContainer";
import Revealer from "../../components/Revealer/Revealer";
import Footer from "../../components/Footer/Footer";
import { blendMode, resetTop } from '../../index';


class CsrView extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    let csrDetails = `${config.domain}/wp-json/wp/v2/pages/${
      config.csrBigPage
    }`;
    fetch(csrDetails)
      .then(response => response.json())
      .then(response =>
        this.setState({
          title: response.title.rendered,
          content: response.content.rendered,
          imgDesktop:
            response.better_featured_image.media_details.sizes.desktop
              .source_url.imgDesktop,
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
       
      
        <section className="section__duoText">
          <ScrollRightContainer
            label="Explore"
            title={title}
            content={content}
            imgDesktop={imgDesktop}
            imgIpad={imgIpad}
          />
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default CsrView;
