import React from "react";
import { Link } from "react-router-dom";
import config from "../../config";


class JoinWhy extends React.Component {
  constructor() {
    super();
    this.state = {
      csrdesc: {}
    };
  }

  componentDidMount() {

    let csrPage = config.domain + "wp-json/wp/v2/pages/" + config.JoinUsWhyPage;
    fetch(csrPage)
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
      <section className="section section__joinUs">
        <div className="block__img">
          <picture className="block__img__picture">
            <source media="(min-width: 956px)" srcSet={imgDesktop} />
            <img src={imgIpad} alt="Change management" />
          </picture>
          <Link className="block__img__link" to="/about">
            <div className="spinner">
              <svg
                className="spinner__unactive"
                width="43px"
                height="43px"
                viewBox="0 0 66 66"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  fill="none"
                  strokeWidth="6"
                  strokeLinecap="round"
                  cx="33"
                  cy="33"
                  r="30"
                />
              </svg>
              <svg
                className="spinner__progress"
                width="43px"
                height="43px"
                viewBox="0 0 66 66"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  fill="none"
                  strokeWidth="6"
                  strokeLinecap="round"
                  cx="33"
                  cy="33"
                  r="30"
                />
              </svg>
              <svg
                className="arrow"
                width="14px"
                height="9px"
                viewBox="0 0 14 9"
              >
                <g
                  id="Symbols"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="slider-arrow-/-type-1-/-normal"
                    transform="translate(-15.000000, -17.000000)"
                    fill="#ffffff"
                  >
                    <path
                      d="M25.6470588,21.5 C25.6470588,21.6042084 25.5945017,21.7214429 25.5156661,21.7995992 L19.3927633,27.8697395 C19.3139276,27.9478958 19.1956741,28 19.0905599,28 C18.9854457,28 18.8671922,27.9478958 18.7883566,27.8697395 L18.1313928,27.2184369 C18.0525571,27.1402806 18,27.0360721 18,26.9188377 C18,26.8146293 18.0525571,26.6973948 18.1313928,26.6192385 L23.2951284,21.5 L18.1313928,16.3807615 C18.0525571,16.3026052 18,16.1853707 18,16.0811623 C18,15.9769539 18.0525571,15.8597194 18.1313928,15.7815631 L18.7883566,15.1302605 C18.8671922,15.0521042 18.9854457,15 19.0905599,15 C19.1956741,15 19.3139276,15.0521042 19.3927633,15.1302605 L25.5156661,21.2004008 C25.5945017,21.2785571 25.6470588,21.3957916 25.6470588,21.5 Z"
                      id=""
                      transform="translate(21.823529, 21.500000) rotate(-270.000000) translate(-21.823529, -21.500000) "
                    />
                  </g>
                </g>
              </svg>
            </div>
            <span className="spinner__label">Discover the team</span>
          </Link>
        </div>

        <div className="block__content">
          <div className="content__text__fixed">
            <span className="greyLabel">Why join us?</span>
            <h2
              dangerouslySetInnerHTML={{ __html: title }}
              className="content__text__title"
            />
            <p
              dangerouslySetInnerHTML={{ __html: content }}
              className="content__text__paragraph"
            />

            <div className="content__text__links">
              <Link to="/jobs" className="btn">
                Find a job
              </Link>
              <Link to="/contact" className="btn btn--inverse">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default JoinWhy;
