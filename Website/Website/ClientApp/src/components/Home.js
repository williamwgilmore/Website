import React, { Component } from 'react';
import { Welcome } from './Welcome.js';
import { Body } from './Body.js';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div className="fullHeight">
            <Welcome />
            <Body />
      </div>
    );
  }
}
