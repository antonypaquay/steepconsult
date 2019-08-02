import React from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import config from "../../config";
import axios from "axios";
import ContentTextFixed from "../../components/ContentTextFixed/ContentTextFixed";
import Revealer from "../../components/Revealer/Revealer";
import Socials from "../../social.svg";
import "./jobsform.scss";

class JobsFormView extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      linkedin: "",
      sent: false,
      buttonText: "Apply now"
    };
  }

  formSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      buttonText: "...sending"
    });

    let data = {
      name: this.state.name,
      email: this.state.email,
      linkedin: this.state.linkedin,
      emailType: "New Application"
    };

    axios
      .post("/api/form", data)
      .then(res => {
        this.setState({ sent: true }, this.resetForm());
        console.log("Application sent");
      })
      .catch(() => {
        console.log("Application not sent");
      });
  };

  // reset form
  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      linkedin: "",
      buttonText: "You're amazing!"
    });
  };

  componentWillMount() {
    document.getElementById("root").className = "work-together";
  }

  componentDidMount() {
    let ExpertiseForm =
      config.domain + "wp-json/wp/v2/pages/" + config.JoinUsApplyForm;
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
      <section className="section section__formview  fp-auto-height article__scroll contact">
        <Revealer />
        <Form
          onSubmit={e => this.formSubmit(e)}
          className="grid__content--formContact flex-row"
        >
          <FormGroup className="f-form">
            <Input
              type="name"
              name="name"
              id="name"
              placeholder="Your name"
              onChange={e => this.setState({ name: e.target.value })}
            />
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              onChange={e => this.setState({ email: e.target.value })}
            />
            <Input
              type="url"
              name="email"
              id="email"
              placeholder="Your linkedin"
              onChange={e => this.setState({ linkedin: e.target.value })}
            />
          </FormGroup>

          <Button type="submit">{this.state.buttonText}</Button>
        </Form>
        <ContentTextFixed
          title={title}
          content={content}
          className="grid__content--contact p"
        />
        <div className="gc-ce gr-be">
          <img className="obj-fit" src={imgDesktop} alt={title} />
        </div>
        <div className="soc-net">
          <ul className="soc-net__list">
            <li>
                        <svg viewBox="0 0 16.9 16.9" width="20">
                          <use fill="#47494D" href={Socials + "#fb"} />
                        </svg>
                      </li>
                      <li>
                        <svg viewBox="0 0 16.9 16.9" width="20">
                          <use fill="#47494D" href={Socials + "#twi"} />
                        </svg>
                      </li>
                      <li>
                        <svg viewBox="0 0 16.9 16.9" width="20">
                          <use fill="#47494D" href={Socials + "#pin"} />
                        </svg>
                      </li>
                      <li>
                        <svg viewBox="0 0 16.9 16.9" width="20">
                          <use fill="#47494D" href={Socials + "#link"} />
                        </svg>
                      </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default JobsFormView;
