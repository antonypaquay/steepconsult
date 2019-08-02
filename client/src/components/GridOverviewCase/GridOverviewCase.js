import React from "react";
import CaseCard from "../CaseCard/CaseCard";
import ContentTextFixed from "../ContentTextFixed/ContentTextFixed";

class GridOverviewCase extends React.Component {
  render() {
    let { title, content } = this.props;

    let { slug } = this.props;

    const articles = Object.keys(this.props.casestudies)
      .map(key => (
        <CaseCard
          key={key}
          parentArticle={slug}
          details={this.props.casestudies[key]}
        />
      ));

    return (
      <div class="overview__blog">

        <div className="blog__info">
          <ContentTextFixed label="Explore" title={title} content={content} />
        </div>

        <div className="blog__list">
          <article className="blog__list__article">
            <ul className="cards__list">{articles}</ul>
          </article>
        </div>
        
      </div>
    );
  }
}

export default GridOverviewCase;
