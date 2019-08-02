import React from "react";
import WOW from "wowjs";

class SingleArticlesDetails extends React.Component {
  componentDidMount() {
    new WOW.WOW({
      boxClass: "wow", // default
      animateClass: "animated", // default
      offset: 0, // default
      mobile: false, // default
      live: true // default
    }).init();
  }

  render() {
    return (
      <section className="section section__singleblog">
        <div class="container__article wow fadeInYo"
          data-wow-delay="1s"
          data-wow-duration=".8s"
        >
          <article class="article__scroll">
            <h1
              className="article__title"
              dangerouslySetInnerHTML={{ __html: this.props.detailsTitle }}
            />
            <div
              className="article__content"
              dangerouslySetInnerHTML={{ __html: this.props.detailsContent }}
            />
          </article>
        </div>

        
      </section>
    );
  }
}

export default SingleArticlesDetails;
