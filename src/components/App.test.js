import React from 'react';
import { renderIntoDocument,
    findRenderedDOMComponentWithTag,
    scryRenderedDOMComponentsWithTag,
    findRenderedDOMComponentWithClass,
    scryRenderedDOMComponentsWithClass,
    Simulate
} from 'react-addons-test-utils';

import App from './App';

import { expect } from 'chai';

describe('App', () => {

    it('renders ok', () => {
        const component = renderIntoDocument(<App/>);
        expect(component).to.be.ok;
    });

    it('sets proper default filter', () => {
        const component = renderIntoDocument(<App/>);

        expect(component.state.filter).to.equal('GOG');
    });

    it('filters and transforms data correctly', () => {
        const component = renderIntoDocument(<App/>);
        const result = component.prepData({
            data:
            [
                { stock: 'ABC', time: '2015-02-04T08:01:41.113Z' },
                { stock: 'GOG', time: '2015-02-04T08:01:41.113Z' },
                { stock: 'ABC', time: '2015-02-04T08:01:41.113Z' }
            ]});

        expect(result.length).to.equal(1);
        expect(result[0].time.valueOf()).to.equal(new Date('2015-02-04T08:01:41.113Z').valueOf());
    });

});