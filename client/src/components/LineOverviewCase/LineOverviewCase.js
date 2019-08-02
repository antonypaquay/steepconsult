import React from "react";
import CaseCard from "../CaseCard/CaseCard";

class LineOverviewCase extends React.Component {
  render() {
    let { slug } = this.props;

    const articles = Object.keys(this.props.post)
      .map(key => (
        <CaseCard
          key={key}
          parentArticle={slug}
          details={this.props.post[key]}
        />
      ));

    return (
      <div className="blog__list__oneline">
      <article className="blog__list__article">
        <ul className="cards__list">{articles}</ul>
      </article>
    </div>
    );
  }
}

export default LineOverviewCase;
