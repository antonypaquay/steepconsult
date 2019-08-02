import React from "react";
import Slider from "react-slick";
import ExpertiseCard from "../ExpertiseCard/ExpertiseCard";
import ExpertiseCardBg from "../ExpertiseCardBg/ExpertiseCardBg";
import ExpertiseCardNav from "../ExpertiseCardNav/ExpertiseCardNav";
import "./ExpertisesOverview.scss";

class ExpertisesOverview extends React.Component {
  next() {
    this.slider1.slickNext();
  }
  previous() {
    this.slider1.slickPrev();
  }

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.state = {
      nav1: null,
      nav2: null,
      nav3: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
      nav3: this.slider3
    });
  }

  render() {
    const settings_focus = {
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: false,
      arrows: false
    };

    const settings_nav = {
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      centerMode: false,
      focusOnSelect: false,
      arrows: false
    };

    const settings_for = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: false
    };

    const expertises = Object.keys(this.props.expertisePosts).map(key => (
      <ExpertiseCard key={key} details={this.props.expertisePosts[key]} />
    ));

    const expertisesnav = Object.keys(this.props.expertisePosts).map(key => (
      <ExpertiseCardNav key={key} details={this.props.expertisePosts[key]} />
    ));

    const expertisesbg = Object.keys(this.props.expertisePosts).map(key => (
      <ExpertiseCardBg key={key} details={this.props.expertisePosts[key]} />
    ));

    return (
      <React.Fragment>
        <div className="container__expertises">
          <div className="block block__left" data-swiper-parallax-y="-200">
            <Slider
              className="slider__focus"
              ref={c => (this.slider1 = c)}
              asNavFor={this.state.nav2}
              // FIXME
              // eslint-disable-next-line
              ref={slider => (this.slider1 = slider)}
              {...settings_focus}
            >
              {expertises}
            </Slider>

            <Slider
              className="slider__for"
              asNavFor={this.state.nav3}
              ref={slider => (this.slider2 = slider)}
              {...settings_for}
            >
              {expertisesbg}
            </Slider>
          </div>

          <div className="block block__right" data-swiper-parallax-y="-100">
            <Slider
              className="slider__gallery"
              asNavFor={this.state.nav1}
              ref={slider => (this.slider3 = slider)}
              {...settings_nav}
            >
              {expertisesnav}
            </Slider>
            <div className="button__for__slider">
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
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ExpertisesOverview;
