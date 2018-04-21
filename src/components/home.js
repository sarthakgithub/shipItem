import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
// import {IndexRoute} from 'react-router';
// import TileList from './tileList.js';
// import Search from './search.js';
// import {getData} from '../dataapi/api.js';
// import _ from 'lodash';
import Form1 from './form1.js';
import Form2 from './form2.js';
import Form3 from './form3.js';
import Form4 from './form4.js';

var fieldValues = {
  name : null,
  surname : null,
  age : null,
  city :null,
  stateValue: null
};

class Home extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	steps:1
	  };

     this.prevclick = this.prevclick.bind(this);
     this.nextClick = this.nextClick.bind(this);
     this.saveValues = this.saveValues.bind(this);
  }

  prevclick() {
    this.setState({steps: this.state.steps - 1});
  }

  nextClick() {
    this.setState({steps: this.state.steps + 1}); 
  }

  saveValues(field_value){
    fieldValues = Object.assign({},fieldValues, field_value);
  }

  render() {
  	switch (this.state.steps) {
         
			case 1:
				return (
          <div>
            <Form1 
              fieldValues={fieldValues} 
                  nextClick={this.nextClick}
                  prevclick={this.prevclick}
                  saveValues={this.saveValues}/>

            </div>
          );

			case 2:
        return (
          <div>
            <Form2 
              fieldValues={fieldValues} 
                  nextClick={this.nextClick}
                  prevclick={this.prevclick}
                  saveValues={this.saveValues}/>
            />
              
            </div>
          );

      case 3:
        return (
          <div>
            <Form3 
              fieldValues={fieldValues} 
                  nextClick={this.nextClick}
                  prevclick={this.prevclick}
                  saveValues={this.saveValues}
            />
              
            </div>
          );

      case 4:
        return (
          <div>
            <Form4 
              fieldValues={fieldValues} 
                  nextClick={this.nextClick}
                  prevclick={this.prevclick}
                  saveValues={this.saveValues}
              />
            </div>
          );
      
        default: 
          return (
            <div>
              <Form1 
                fieldValues={fieldValues} 
                  nextClick={this.nextClick}
                  prevclick={this.prevclick}
                  saveValues={this.saveValues}
              />
                
              </div>
            );
		}
  }
}

export default Home;