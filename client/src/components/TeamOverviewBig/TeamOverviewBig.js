import React from "react";
import TeamCard from "../TeamCard/TeamCard";
import Slider from "react-slick";
import { Link } from "react-router-dom";

class TeamOverviewBig extends React.Component {
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

  render() {


    const settings = {
      centerMode: true,
      centerPadding: "100px",
      focusOnSelect: true,
      dots: false,
      infinite: true,
      slidesToShow: 1,
      variableWidth: true,
      variableHeight: true,
      arrows: false
    };

    const experts = Object.keys(this.props.expertDetails).map(key => (
      <TeamCard key={key} details={this.props.expertDetails[key]} />
    ));

    return (
      <React.Fragment>
        <Slider
          ref={c => (this.slider = c)}
          className="team__slider team__slider--full"
          {...settings}
        >
          {experts}
        </Slider>

        <div className="g-col-center g-ch g-cv">
          <button className="button" onClick={this.next}>
            Previously
          </button>
          <button className="button" onClick={this.previous}>
            Nexttoclick
          </button>
        </div>




        <Link to="/our-team-list" className="switch">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewbox="0 0 12 11.9"
            height="18"
            fill="#fff"
          >
            <title>Switch to grid</title>
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
          Switch to grid
        </Link>
      </React.Fragment>
    );
  }
}

export default TeamOverviewBig;
