import React from "react";

class ExpertiseCardNav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <img
          className="card__nav__img"
          src={
            this.props.details.better_featured_image.media_details.sizes
              .expertiseSlideGal.source_url
          }
          alt={this.props.details.title.rendered}
        />
      </React.Fragment>
    );
  }
}

export default ExpertiseCardNav;
