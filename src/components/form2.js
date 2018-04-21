import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {IndexRoute} from 'react-router';

class Form2 extends React.Component {
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
      age : this.refs.age.value
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
          Age :
          <input type="text" ref="age" defaultValue={this.props.fieldValues.age} />       
        </label>
        <button className="btn-default pull-left" onClick={this.props.prevclick}>Back</button>
        <button className="btn-default pull-left" onClick={this.nextStep}>Save </button>
        <button className="btn-default pull-left" onClick={this.goNext}>Next </button>
      </form>
    );
  }
}

export default Form2;