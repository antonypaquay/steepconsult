import React from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import Axios from "axios";

class FormApplyView extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async handleSubmit(e) {
    e.preventDefault();

    const { name, email, message } = this.state;

    const form = await Axios.post("/api/form", {
      name,
      email,
      message
    });
  }

  render() {
    return (
      <React.Fragment>
        <Form className="grid__content--formContact flex-row" onSubmit={this.handleSubmit}>
          <FormGroup className="f-form">
            <Input
              type="name"
              name="name"
              id="name"
              placeholder="Your name"
              onChange={this.handleChange}
            />
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              onChange={this.handleChange}
            />
            <Input
              type="textarea"
              name="message"
              id="message"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button>Submit?</Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default FormApplyView;
