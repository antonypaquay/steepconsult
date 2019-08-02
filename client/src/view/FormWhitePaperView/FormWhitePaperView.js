import React from "react";
import config from "../../config";
import ContentTextFixed from "../../components/ContentTextFixed/ContentTextFixed";
import FormWhitePaper from "../../components/FormWhitePaper/FormWhitePaper";
import Revealer from "../../components/Revealer/Revealer";
import "./formwhitepaper.scss";


class FormWhitePaperView extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    document.getElementById("root").className = "white-paper";
  }

  componentDidMount() {
    let ExpertiseForm =
      config.domain + "wp-json/wp/v2/pages/" + config.WhitePaperForm;
    fetch(ExpertiseForm)
      .then(response => response.json())
      .then(response =>
        this.setState({
          title: response.title.rendered,
          content: response.content.rendered,
          imgDesktop:
            response.better_featured_image.media_details.sizes.desktop
              .source_url
        })
      );
  }
  render() {
    let { title, content, imgDesktop } = this.state;
    return (
          <section className="section section__whitepaper article__scroll contact">
        <Revealer/>
        <ContentTextFixed label="Read more" title={title} content={content} className="grid__content--contact" />
        <FormWhitePaper />
        <div className="gc-ce gr-be">
          <img className="obj-fit" src={imgDesktop} alt={title} />
        </div>
      </section>
    );
  }
}

export default FormWhitePaperView;
