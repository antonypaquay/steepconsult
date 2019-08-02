import React from "react";
import Video from "./steep-header.mov";
import Play from "../App/play.svg";
import { config } from "../../config";
import LinksBox from "../../components/LinksBox/LinksBox";
import { Link } from "react-router-dom";

class IntroductionView extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    let pageHome = config.domain + "wp-json/wp/v2/pages/" + config.homePage;
    let pageAbout = config.domain + "wp-json/wp/v2/pages/" + config.aboutPage;
    let pageExpertises =
      config.domain + "wp-json/wp/v2/pages/" + config.expertisePage;
    fetch(pageHome)
      .then(response => response.json())
      .then(response =>
        this.setState({
          titleHome: response.title.rendered,
          imgLdesktopHome:
            response.better_featured_image.media_details.sizes.largedesktop
              .source_url,
          imgDesktopHome:
            response.better_featured_image.media_details.sizes.desktop
              .source_url,
          imgIpadHome:
            response.better_featured_image.media_details.sizes.ipad.source_url
        })
      );
    fetch(pageAbout)
      .then(response => response.json())
      .then(response =>
        this.setState({
          titleAbout: response.title.rendered,
          excerptAbout: response.excerpt.rendered
        })
      );

    fetch(pageExpertises)
      .then(response => response.json())
      .then(response =>
        this.setState({
          titleExpertises: response.title.rendered,
          excerptExpertises: response.excerpt.rendered
        })
      );
  }

  render() {
    let {
      titleHome,
      imgLdesktopHome,
      imgDesktopHome,
      imgIpadHome,
      titleAbout,
      excerptAbout,
      titleExpertises,
      excerptExpertises
    } = this.state;

    return (
      <section
        className="swiper-slide  section__introduction"
        id="section__introduction"
      >
        <div className="section__introduction__container">
          <div className="content">
            <div className="headline">
              {/* video disable */}
              <Link
                to="/"
                className="btn--play launch__btn"
                data-swiper-parallax-y="200"
              >
                <img src={Play} alt="Play button" />
                <img src={Play} alt="Play button" />
                <img src={Play} alt="Play button" />
              </Link>
              <div className="headline__content">
                <h1
                  data-swiper-parallax-y="-180"
                  dangerouslySetInnerHTML={{ __html: titleHome }}
                  className="headline__title"
                />
                <p className="headline__baseline" data-swiper-parallax-y="-200">
                  We deliver on our promises
                </p>
              </div>
            </div>
          </div>

          <picture className="background__full">
            <source srcSet={imgLdesktopHome} media="(min-width: 1200px)" />
            <source srcSet={imgDesktopHome} media="(min-width: 768px)" />
            <img className="cover__img" src={imgIpadHome} alt={titleHome} />
          </picture>
        </div>

        <LinksBox
          titleLeft={titleExpertises}
          textLeft={excerptExpertises}
          titleRight={titleAbout}
          textRight={excerptAbout}
        />

        <div className="mask" />
        <video id="vid" src={Video} autoPlay={true} data-autoplay loop={true} />

        {/* <button onClick={() => fullpageApi.moveSectionDown()}>
                    Click me to move down
                  </button> */}
      </section>
    );
  }
}

export default IntroductionView;
