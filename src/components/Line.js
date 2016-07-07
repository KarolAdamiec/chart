import React from 'react';

export default class Line extends React.Component {

  render() {
    const {line, data} = this.props;
    const pathData = line.call(this, data);
    return <path className="line" ref="line" d={pathData}></path>;
  }
}