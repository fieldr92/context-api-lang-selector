import React, { Component } from 'react';
import LangaugeContext from '../contexts/LanguageContext';

export default class Button extends Component {
  static contextType = LangaugeContext; // has to be called 'contextType'

  render() {
    console.log(this.context);
    return <button className="ui button primary">Submit</button>;
  }
}
