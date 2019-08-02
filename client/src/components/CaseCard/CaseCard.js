import React from "react";
import { Link } from "react-router-dom";
import Arrows from "../../arrow.svg";

class CaseCard extends React.Component {
  render() {
    return (
      <li className="card">
        <Link
          to={{
            pathname: `/case-studies/${this.props.details.slug}`
          }}
        >
          <img
            class="card__img"
            src={
              this.props.details.better_featured_image.media_details.sizes
                .articleBlog.source_url
            }
            alt={this.props.details.title.rendered}
          />
          <h3 class="card__title mt">{this.props.details.title.rendered}</h3>

          <div className="card__link">
            <span class="card__link__label">Read This article</span>
            <span class="card__link__arrow">
              <svg viewBox="0 0 16.9 16.9" width="20">
                <use fill="#39938E" href={Arrows + "#right"} />
              </svg>
            </span>
          </div>
        </Link>
      </li>
    );
  }
}

export default CaseCard;
