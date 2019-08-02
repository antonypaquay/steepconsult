import React from "react";
import { Link } from "react-router-dom";
import config from "../../config";
import TeamListOverviewGrid from "../../components/TeamListOverviewGrid/TeamListOverviewGrid";
import ScrollHoriz from "../../components/ScrollHoriz/ScrollHoriz";
import "./listMember.scss";
import Arrows from "../../arrow.svg";
import Revealer from "../../components/Revealer/Revealer";

class ListMemberView extends React.Component {
  constructor() {
    super();
    this.state = {
      expertDetails: []
    };
  }

  componentWillMount() {
    document.getElementById("root").className = "g-rid-gallery";
  }

  componentDidMount() {
    let expertPosts =
      config.domain + "wp-json/wp/v2/" + config.expertSmallPosts;
    fetch(expertPosts)
      .then(response => response.json())
      .then(response =>
        this.setState({
          expertDetails: response
        })
      );
  }

  render() {
    return (
      <section className="section grid--page grid--about-team section__listMember bg--black">
        <Revealer />
        <div className="cover " />

        <Link to="/about" className="switch">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 11.9"
            height="18"
            fill="#fff"
          >
            <title>Switch to slider</title>
            <g>
              <rect width="2" height="11.94" />
              <rect x="10" width="2" height="11.94" />
              <rect x="3" width="6" height="11.94" />
            </g>
          </svg>
          Switch to slider
        </Link>
        <div className="team__content team__content--about team--grid">
          <Link to="/jobs" className="member--about team--stretch">
            <h2>Maybe You?</h2>

            <a className="card__zonelink" href="/jobs">
              <span className="card__link">Discover our jobs</span>
              <span className="card__arrow">
                <svg viewBox="0 0 16.9 16.9" width="20">
                  <use fill="#fff" href={Arrows + "#right"} />
                </svg>
              </span>
              </a>
          </Link>
          <TeamListOverviewGrid expertDetails={this.state.expertDetails} />
        </div>

        <ScrollHoriz label="Scroll" />
      </section>
    );
  }
}

export default ListMemberView;
