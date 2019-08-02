import React from "react";
import { Link } from "react-router-dom";


class ExpertiseCard extends React.Component {
  render() {
    return (
      <div className="focus__frame">
        {" "}
        <Link
          to={{
            pathname: `/expertises/${this.props.details.slug}`
          }}
        >
          <img
            src={
              this.props.details.better_featured_image.media_details.sizes
                .expertiseSlideGal.source_url
            }
            alt={this.props.details.title.rendered}
          />

          <div className="content">
            <h2>{this.props.details.title.rendered}</h2>
            <span>Discover</span>
          </div>
        </Link>
      </div>
    );
  }
}

export default ExpertiseCard;
