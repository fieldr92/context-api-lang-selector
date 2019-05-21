import React, { Component } from 'react';
import LangaugeContext from '../contexts/LanguageContext';

export default class Button extends Component {
  static contextType = LangaugeContext; // has to be called 'contextType'

  render() {
    const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    return <button className="ui button primary">{text}</button>;
  }
}
