import React from "react";
import config from "../../config";
import ContentTextFixed from "../../components/ContentTextFixed/ContentTextFixed";
import "./csrHomeView.scss";

class CsrHomeView extends React.Component {
  constructor() {
    super();
    this.state = {
      csrdesc: []
    };
  }

  componentDidMount() {
    let csrPage = config.domain + "wp-json/wp/v2/pages/" + config.csrPage;
    fetch(csrPage)
      .then(response => response.json())
      .then(response =>
        this.setState({
          title: response.title.rendered,
          content: response.content.rendered,
          img:
            response.better_featured_image.media_details.sizes.desktop
              .source_url,
          imgDesktop:
            response.better_featured_image.media_details.sizes.desktop
              .source_url,
          imgIpad:
            response.better_featured_image.media_details.sizes.ipad.source_url
        })
      );
  }

  render() {
    let { title, content, imgDesktop, imgIpad } = this.state;

    return (
      <section className="swiper-slide section__csr">
        <div className="block block__content" data-swiper-parallax-y="-200">
          <ContentTextFixed
            label="About CSR"
            linkName="Discover"
            link="/csr"
            title={title}
            content={content}
          />
        </div>

        <div className="block block__img" >
          <picture className="block__img__picture">
            <source media="(min-width: 956px)" srcSet={imgDesktop} />
            <img src={imgIpad} alt="CSR" />
          </picture>
        </div>
      </section>
    );
  }
}

export default CsrHomeView;
