import { assert } from 'chai'
import { mixPoints, fillSegments } from '../../src/operations/mix'
import { parse } from '../../src/operations/parse';

describe('mix()', () => {
    it('finds the midpoint when .25 is provided', () => {
        assert.deepEqual(mixPoints([0, 0, 0], [10, 100, 1000], 0.25), [2.5, 25, 250])
    })
    it('finds the midpoint when .5 is provided', () => {
        assert.deepEqual(mixPoints([0, 0, 0], [10, 100, 1000], 0.5), [5, 50, 500])
    })
    it('finds the midpoint when .75 is provided', () => {
        assert.deepEqual(mixPoints([0, 0, 0], [10, 100, 1000], 0.75), [7.5, 75, 750])
    })
})

describe('fillSegments()', () => {
  it('fills segments from the right', () => {
    const left = parse('M0,0 V12 H12 V0z M16,16 V20 H20 V16z');
    const right = parse('M0,0 V12 H12 V0z');

    fillSegments(left, right);

    assert.equal(left.length, right.length);
  })
  it('fills segments from the left', () => {
    const right = parse('M0,0 V12 H12 V0z M16,16 V20 H20 V16z');
    const left = parse('M0,0 V12 H12 V0z');

    fillSegments(left, right);

    assert.equal(left.length, right.length);
  })
})
