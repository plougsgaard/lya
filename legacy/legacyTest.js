/* global describe, it */

var _ = require('../lya')

var chai = require('chai')
var expect = chai.expect

describe('lya can execute all the functions', () => {
  it('has `assign` function', () => {
    expect(_.assign({ a: 1 }, { a: 2 })).to.deep.equal({ a: 1 })
  })
  it('has `clone` function', () => {
    expect(_.clone({ a: 1 })).to.deep.equal({ a: 1 })
  })
  it('has `flow` function', () => {
    expect(_.flow(_.clone, _.assign({ a: 2 }), { a: 1 })).to.deep.equal({ a: 2 })
  })
  it('has `get` function', () => {
    expect(_.get('a.b', { a: { b: 1 } })).to.deep.equal(1)
  })
  it('has `identity` function', () => {
    expect(_.identity({ a: { b: 1 } })).to.deep.equal({ a: { b: 1 } })
  })
  it('has `isObject` function', () => {
    expect(_.isObject({ a: { b: 1 } })).to.deep.equal(true)
  })
  it('has `keys` function', () => {
    expect(_.keys({ a: 1, b: 2 })).to.deep.equal(['a', 'b'])
  })
  it('has `map` function', () => {
    expect(_.map(v => v + 1, [1, 2, 3])).to.deep.equal([2, 3, 4])
  })
  it('has `mapValues` function', () => {
    expect(_.mapValues(v => v + 1, { a: 1, b: 2 })).to.deep.equal({ a: 2, b: 3 })
  })
  it('has `reduce` function', () => {
    expect(_.reduce((m, c) => m + c, 0, [1, 2, 3])).to.deep.equal(6)
  })
  it('has `set` function', () => {
    expect(_.set('a.c', 42, { a: { b: 1 } })).to.deep.equal({ a: { b: 1, c: 42 } })
  })
  it('has `slice` function', () => {
    expect(_.slice(0, 1, ['a', 'b', 'c'])).to.deep.equal(['a'])
  })
  it('has `split` function', () => {
    expect(_.split('.', 'a.b.c')).to.deep.equal(['a', 'b', 'c'])
  })
  it('has `values` function', () => {
    expect(_.values({ a: { b: 1 }, c: 123 })).to.deep.equal([{ b: 1 }, 123])
  })
})
