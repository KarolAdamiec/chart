import React from 'react';
import ReactDom from 'react-dom';
import Axis from './Axis';
import Line from './Line';
import {scaleTime, scaleLinear} from 'd3-scale';
import {select} from 'd3-selection';
import {max, extent} from 'd3-array';
import {line} from 'd3-shape';
import {axisLeft, axisBottom} from 'd3-axis';

export default class Chart extends React.Component {
    componentDidMount() {

        this.d3Node = select(ReactDom.findDOMNode(this));

    }

    render() {
        const { series, height = 500, width = 800 } = this.props;

        const x = scaleTime().range([0, width]);
        const y = scaleLinear().range([0, height]);
        const xAxis = axisBottom(x);
        const yAxis = axisLeft(y);
        const path = line()
            .x(d => x(d.time))
            .y(d => y(d.price));
        x.domain(extent(series, d => d.time));
        y.domain(extent(series, d => d.price));

        return (
            <svg width={width} height={height}>
                <g className="chart">
                    <Line line={path} data={series}/>
                    <Axis axis={yAxis}/>
                    <Axis axis={xAxis}/>
                </g>
            </svg>
        );
    }
}