import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {IndexRoute} from 'react-router';

class Form1 extends React.Component {
	constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.goNext = this.goNext.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  nextStep(e){
    e.preventDefault();
    var data = {
      name : this.refs.name.value,
      surname : this.refs.surname.value
    };

    this.props.saveValues(data);
  }

  goNext(){
    this.props.nextClick();
  }

  render() {
    return (
      <form >
        <label>
          Name:
          <input type="text" ref="name" defaultValue={this.props.fieldValues.name}/>
        </label>
        <label>
          Surname: 
          <input type="text" ref="surname" defaultValue={this.props.fieldValues.surname}/>
        </label>
        <button onClick={this.nextStep}>Save </button>
        <button onClick={this.goNext}>Next</button>
      </form>
    );
  }
}

export default Form1;