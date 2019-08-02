import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import ContentTextFixed from "../ContentTextFixed/ContentTextFixed";

class GridOverviewBlog extends React.Component {
  render() {
    let { title, content } = this.props;

    let { slug } = this.props;

    const articles = Object.keys(this.props.blogPosts).map(key => (
      <ArticleCard
        key={key}
        parentArticle={slug}
        details={this.props.blogPosts[key]}
      />
    ));

    return (
      <div className="overview__blog">
        <div className="blog__info" data-swiper-parallax-y="-200">
          <ContentTextFixed label="Explore" title={title} content={content} />
        </div>

        <div className="blog__list" data-swiper-parallax-y="-100">
          <article className="blog__list__article">
            <ul className="cards__list">{articles}</ul>
          </article>
        </div>
      </div>
    );
  }
}

export default GridOverviewBlog;
