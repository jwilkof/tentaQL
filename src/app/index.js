const React = require("react");
const ReactDOM = require("react-dom");
import {Component} from "react";
require("./index.css");
import Navbar from "./components/Navbar"
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

import TextBox from "./components/TextBox"
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import {Button, Icon, Input, Checkbox, Form, Menu} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Navbar/>
          <AddTodo />
          <VisibleTodoList />
          <Footer />
          <TextBox/>
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
