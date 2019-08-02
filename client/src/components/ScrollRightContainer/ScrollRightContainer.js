import React from "react";
import ContentTextScroll from "../ContentTextScroll/ContentTextScroll";

class ScrollRightContainer extends React.Component {
  render() {
    return (
      <div className="container__duoscroll">
        <picture className="block block__left" data-swiper-parallax-y="-100">
          <source media="(min-width: 768px)" srcSet={this.props.imgDesktop} />
          <img
            className="cover__img"
            src={this.props.imgIpad}
            alt={this.props.title}
          />
        </picture>

        <div className="block block__right" data-swiper-parallax-y="-200">
          <ContentTextScroll
            title={this.props.title}
            content={this.props.content}
            label={this.props.label}
          />
        </div>
      </div>
    );
  }
}

export default ScrollRightContainer;
