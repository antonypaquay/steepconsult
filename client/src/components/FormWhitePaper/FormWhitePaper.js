import React from "react";
import { Form, FormGroup, Input, Button} from "reactstrap";

class FormWhitePaper extends React.Component {
    constructor() {
        super();

        this.state = {
          email: ""
        };


      }

     
  render() {
    return (
        <React.Fragment>
        <Form  className="grid__content--formContact"  onSubmit={this.handleSubmit}>
          <FormGroup>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button>Download</Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default FormWhitePaper;
