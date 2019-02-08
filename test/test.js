/* eslint-disable no-undef */
import { roundPoint, formatNumber } from '../src/js/number';
import { createCurves, createVerticalCurves } from '../src/js/path';
import { generateLegendBackground } from '../src/js/graph';

const assert = require('assert');

describe('Test number functions', () => {
    it('round number test', () => {
        assert.equal(roundPoint(19.99999999998), 20);
    });

    it('number format test', () => {
        assert.equal(formatNumber(12500), '12,500');
    });
});

describe('Add tests for paths', () => {
    it('can create points for curves', () => {
        assert.equal(createCurves(0, 0, 6, 2), ' C3,0 3,2 6,2');
    });

    it('can create points for vertical curves', () => {
        assert.equal(createVerticalCurves(0, 0, 6, 2), ' C0,1 6,1 6,2');
    });
});

describe('Add tests for background color generator', () => {
    it('can generate a solid background', () => {
        assert.equal(generateLegendBackground('red'), 'background-color: red');
    });

    it('can generate a solid background from an array with single element', () => {
        assert.equal(generateLegendBackground(['red']), 'background-color: red');
    });

    it('can generate a gradient background', () => {
        assert.equal(
            generateLegendBackground(['red', 'orange']),
            'background-image: linear-gradient(to right, red, orange)'
        );
    });

    it('can generate a vertical gradient background', () => {
        assert.equal(
            generateLegendBackground(['red', 'orange'], 'vertical'),
            'background-image: linear-gradient(red, orange)'
        );
    });
});
