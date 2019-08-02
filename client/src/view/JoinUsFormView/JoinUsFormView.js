import React from "react";
import axios from "axios";
import { Form, FormGroup, Input, Button } from "reactstrap";
import config from "../../config";
import ContentTextFixed from "../../components/ContentTextFixed/ContentTextFixed";
import Revealer from "../../components/Revealer/Revealer";
import "./JoinUsForm.scss";

class JoinUsFormView extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      linkedin: "",
      spontaneous: "",
      sent: false,
      buttonText: "Apply now"
    };
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
            response.better_featured_image.media_details.sizes.desktopForm
              .source_url
        })
      );
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
      spontaneous: this.state.spontaneous,
      linkedin: this.state.linkedin,
      emailType: "New Spontaneous Application"
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
      spontaneous: "",
      buttonText: "You're amazing!"
    });
  };

  render() {
    let { title, content, imgDesktop } = this.state;
    return (
      <section className=" section section__joinusform">
        <Revealer />
        <div className="block__left">
          <ContentTextFixed title={title} content={content} />
        </div>
        <div className="block__right">
          <Form
            onSubmit={e => this.formSubmit(e)}
            className="form"
          >
            <FormGroup className="form__group">
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
                type="select"
                name="spontaneous"
                id="spontaneous"
                onChange={e => this.setState({ spontaneous: e.target.value })}
              >
                <option value="" disabled selected>
                  I wanna be...
                </option>
                <option>Project Manager</option>
                <option>Process Analyst</option>
                <option>Functional Analyst</option>
                <option>Other</option>
              </Input>
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
        </div>

        <div className="bottom__picture">
          <img src={imgDesktop} alt={title} />
        </div>
      </section>
    );
  }
}

export default JoinUsFormView;
