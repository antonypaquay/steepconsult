import React from "react";
import { Link } from "react-router-dom";
import "./ContentTextFixed.scss";

const testLink = () => {
  var link = document.getElementById('btnLink');
  if(link.value === undefined) {
    link.value = "empty";
  }
}

class ContentTextFixed extends React.Component {
  componentDidMount(){
    testLink();
  }
  render() {
    return (
      <div
        className="content__text__fixed content__text--fixed"
        id="contentText"
      >
        <span className="greyLabel " data-swiper-parallax-y="-140">{this.props.label}</span>
        <h2 className="content__text__title" data-swiper-parallax-y="-160">{this.props.title}</h2>

        <div
          className="content__text__paragraph"data-swiper-parallax-y="-180"
          data-wow-offset="80"
          dangerouslySetInnerHTML={{ __html: this.props.content }}
        />

        <Link className="btn cta " data-swiper-parallax-y="-200" id="btnLink" to={this.props.link}>
          {this.props.linkName}
        </Link>
      </div>
    );
  }
}

export default ContentTextFixed;
