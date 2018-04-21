import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {IndexRoute} from 'react-router';

class Form4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.goSubmit = this.goSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  goSubmit(e){
    e.preventDefault();
    console.log(this.props.fieldValues);
  }

  nextStep(e){
    e.preventDefault();
    console.log(this.refs.stateValue.value);
    var data = {
      stateValue : this.refs.stateValue.value
    };

    this.props.saveValues(data);
  }

  render() {
    return (
      <form >
        <label>
          State:
          <input type="text" ref="stateValue" defaultValue={this.props.fieldValues.state} />
          
        </label>
        <button className="btn-default pull-left" onClick={this.props.prevclick}>Back</button>
        <button className="btn-default pull-left" onClick={this.nextStep}>Save </button>
        <button className="btn-default pull-left" onClick={this.goSubmit}>Submit </button>
      </form>
    );
  }
}

export default Form4;