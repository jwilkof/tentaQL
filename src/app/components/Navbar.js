const React = require("react");
const ReactDOM = require("react-dom");
import {Component} from "react";
import {Button, Icon, Input, Checkbox, Form, Menu, Sticky} from "semantic-ui-react";
import { uriFetch } from '../actions/index.js';


class Navbar extends Component{

  constructor() {
    super();
    this.state = {
      dbURI: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    // this.onChange = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    console.log("Triggered onSubmit");
    e.preventDefault();
    // e.target.input

    console.log(e.target);
  }



  render() {
      return (
        <Sticky>
        <Menu>
          {/* <form onSubmit={this.onSubmit}>
            <input placeholder="Enter your DB URI">
              
            </input>
            <button>Submit</button>
          </form> */}
          <Menu.Item position='left'>
            <Form.Field onSubmit={this.onSubmit}>
              <Input action='Search' placeholder='Fetch a DB URI...'/>
            </Form.Field>
          </Menu.Item>
          <Menu.Item position='left'>
            <h1>TentaQL</h1>
          </Menu.Item>
          <Menu.Item position='left'>
            <Button>TentaQL</Button>
          </Menu.Item>
          <Menu.Item position='left'>
          <Button size='small' color='green'>
              <Icon name='download' />
              Download
            </Button>
            </Menu.Item>
        </Menu>
        </Sticky>
      )
  }

}

export default Navbar;

