import React from "react";
import { Link } from "react-router-dom";
import Arrows from "../../arrow.svg";

class ArticleCard extends React.Component {
  render() {
    return (
      <li className="card">
        <Link
          to={{
            pathname: `/blog/${this.props.details.slug}`
          }}
        >
          <img
            className="card__img"
            src={
              this.props.details.better_featured_image.media_details.sizes
                .articleBlog.source_url
            }
            alt={this.props.details.title.rendered}
          />

          <h3 className="card__title mt">{this.props.details.title.rendered}</h3>

          <div className="card__link">
            <span className="card__link__label">Read This article</span>
            <span className="card__link__arrow">
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

export default ArticleCard;
