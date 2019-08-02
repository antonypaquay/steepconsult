import React from "react";
import { Link } from "react-router-dom";
import TeamCard from "../TeamCard/TeamCard";
import ContentTextFixed from "../ContentTextFixed/ContentTextFixed";
import Slider from "react-slick";
import WOW from "wowjs";

class TeamOverview extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    let { title, content } = this.props;

    const settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: false,
      arrows: false,
      centerMode: true
    };

    const experts = Object.keys(this.props.expertDetails).map(key => (
      <TeamCard key={key} details={this.props.expertDetails[key]} />
    ));

    return (
      <div className="container__team">
        <div className="block block__left">
          <Link to="/teamlist" className="switch switch--team">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 12 11.9"
              height="18"
            >
              <g>
                <rect width="3.3" height="3.29" />
                <rect x="4.4" width="3.3" height="3.29" />
                <rect x="8.7" width="3.3" height="3.29" />
                <rect y="4.3" width="3.3" height="3.29" />
                <path d="M6,4.3A1.7,1.7,0,0,0,4.4,6h0A1.6,1.6,0,0,0,7.6,6h0A1.7,1.7,0,0,0,6,4.3Z" />
                <rect x="8.7" y="4.3" width="3.3" height="3.29" />
                <rect y="8.6" width="3.3" height="3.29" />
                <rect x="4.4" y="8.6" width="3.3" height="3.29" />
                <rect x="8.7" y="8.6" width="3.3" height="3.29" />
              </g>
            </svg>
            <span>Switch to grid</span>
          </Link>
          <Slider
            ref={c => (this.slider = c)}
            className="slider__team"
            {...settings}
          >
            {experts}
          </Slider>

          <div className="nav-slide" style={{ textAlign: "center" }}>
            <button className="button" onClick={this.previous}>
              <svg width="20px" height="9px" viewBox="0 0 20 9">
                <g id="Symbols" stroke="none" strokeWidth="1">
                  <g
                    id="slider-/-expertises"
                    transform="translate(-1378.000000, -494.000000)"
                  >
                    <g
                      id="Group"
                      transform="translate(1378.000000, 494.000000)"
                    >
                      <path
                        d="M19.2857373,4.24917876 C19.2857373,4.34962531 19.2410944,4.45007186 19.17413,4.51703622 L14.8884106,8.46793379 C14.7768033,8.56838034 14.6317139,8.59070179 14.4977851,8.53489816 C14.3750171,8.47909452 14.2857313,8.35632651 14.2857313,8.21123706 L14.2857313,5.71123408 L0.357143283,5.71123408 C0.156250186,5.71123408 0,5.55498389 0,5.35409079 L0,3.21123109 C0,3.010338 0.156250186,2.85408781 0.357143283,2.85408781 L14.2857313,2.85408781 L14.2857313,0.354084832 C14.2857313,0.208995373 14.3638564,0.0862273696 14.4977851,0.0304237316 C14.6317139,-0.0253799063 14.7768033,-0.00305845116 14.8884106,0.0862273696 L19.17413,3.99248203 C19.2410944,4.05944639 19.2857373,4.14873221 19.2857373,4.24917876 Z"
                        id="-copy"
                        transform="translate(9.642869, 4.282396) scale(-1, 1) translate(-9.642869, -4.282396) "
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </button>
            <button className="button" onClick={this.next}>
              <svg width="20px" height="9px" viewBox="0 0 20 9">
                <g id="Symbols" stroke="none" strokeWidth="1">
                  <g
                    id="slider-/-expertises"
                    transform="translate(-1378.000000, -522.000000)"
                  >
                    <g
                      id="Group"
                      transform="translate(1378.000000, 494.000000)"
                    >
                      <path
                        d="M19.2857373,32.2491788 C19.2857373,32.3496253 19.2410944,32.4500719 19.17413,32.5170362 L14.8884106,36.4679338 C14.7768033,36.5683803 14.6317139,36.5907018 14.4977851,36.5348982 C14.3750171,36.4790945 14.2857313,36.3563265 14.2857313,36.2112371 L14.2857313,33.7112341 L0.357143283,33.7112341 C0.156250186,33.7112341 0,33.5549839 0,33.3540908 L0,31.2112311 C0,31.010338 0.156250186,30.8540878 0.357143283,30.8540878 L14.2857313,30.8540878 L14.2857313,28.3540848 C14.2857313,28.2089954 14.3638564,28.0862274 14.4977851,28.0304237 C14.6317139,27.9746201 14.7768033,27.9969415 14.8884106,28.0862274 L19.17413,31.992482 C19.2410944,32.0594464 19.2857373,32.1487322 19.2857373,32.2491788 Z"
                        id=""
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>

        <div className="block block__right">
          <ContentTextFixed
            className="team__content"
            label="Our team"
            title={title}
            content={content}
            link="/join-us"
            linkName="Join Us"
          />
        </div>
      </div>
    );
  }
}

export default TeamOverview;
