import React from 'react';
import {select}    from 'd3-selection';

export default class Axis extends React.Component {
  componentDidMount() {
    this.renderAxis();
  }
  componentDidUpdate() {
    this.renderAxis();
  }
  renderAxis() {
    var node  = this.refs.axis;
    var axis = this.props.axis;
    select(node).call(axis);
  }
  render() {
    return <g className="axis" ref="axis"></g>
  }
}