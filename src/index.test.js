//Sanity
import { expect } from 'chai';

describe('Always pass, unless env issues', () => {
    it('false dichotomy', () => {
        expect(true).to.be.truthy;
    })
})