import React, { Component } from 'react';

export class Welcome extends Component {
  static displayName = Welcome.name;

  render () {
    return (
      <div id="backgroundImage" className="fullHeight">
        Welcome
      </div>
    );
  }
}
