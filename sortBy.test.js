/* global describe, expect, test */

const _ = require('./lya')

describe('normal sortBy usage', () => {
  test('sort array of strings', () => {
    expect(_.sortBy(_.identity, ['c', 'a', 'b'])).toEqual(['a', 'b', 'c'])
  })
  test('sort array of numbers', () => {
    expect(_.sortBy(_.identity, [7, 2, 4])).toEqual([2, 4, 7])
  })
  test('sort array of objects by `get` key', () => {
    let a1 = [{ a: 1 }, { a: 9 }, { a: 5 }]
    expect(_.sortBy(_.get('a'), a1)).toEqual([{ a: 1 }, { a: 5 }, { a: 9 }])
  })
  test('sort array of objects by key', () => {
    let a1 = [{ a: 1 }, { a: 9 }, { a: 5 }]
    expect(_.sortBy('a', a1)).toEqual([{ a: 1 }, { a: 5 }, { a: 9 }])
  })
})

// this seems dirty to me, but people probably will expect this to work
describe('edge case usage', () => {
  test('sort array of strings using `undefined`', () => {
    expect(_.sortBy(undefined, ['c', 'a', 'b'])).toEqual(['a', 'b', 'c'])
  })
  test('sort array of strings using `null`', () => {
    expect(_.sortBy(null, ['c', 'a', 'b'])).toEqual(['a', 'b', 'c'])
  })
})
