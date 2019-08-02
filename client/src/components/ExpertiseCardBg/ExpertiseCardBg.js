import React from "react";

class ExpertiseCardBg extends React.Component {
  render() {
    return (
      <React.Fragment>
        <img
          className="obj-fit multiply"
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

export default ExpertiseCardBg;
