import React from 'react';
import Chart from './Chart';
import { data } from './data.js';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { filter: 'GOG' };
    }
    prepData(coll) {
        return coll.data
            .filter(x => x.stock === this.state.filter)
            .map(x => ({...x, time: new Date(x.time)}));
    }
    changeFilter(value) {
        this.setState({ filter: value.toUpperCase() });
    }
    render() {

    const filtered = this.prepData(data);
    // console.log(filtered);
    return(<div>
        <div className="menu">
            <p>Enter stock symbol.IE GOG, PLM, ABC</p>
            <input placeholder="enter stock symbol" onChange={e => this.changeFilter(e.target.value) }/>
        </div>
        <Chart series={filtered}/>
    </div>);
    }
}