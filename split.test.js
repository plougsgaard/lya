/* global describe, expect, test */

const split = require('./split')

describe('split', () => {
  const a = 'a|b|c'
  const b = 'a--b-c'
  test('curry works as intended', () => {
    expect(split('|', a)).toEqual(['a', 'b', 'c'])
    expect(split('|')(a)).toEqual(['a', 'b', 'c'])
    expect(split('|')).toBeInstanceOf(Function)
  })
  test('multicharacter delimeter', () => {
    expect(split('-', b)).toEqual(['a', '', 'b', 'c'])
    expect(split('--', b)).toEqual(['a', 'b-c'])
  })
  test('negative cases', () => {
    expect(split(undefined, a)).toEqual([a])
    expect(split(0, a)).toEqual([a])
    expect(split(null, a)).toEqual([a])
    expect(split(NaN, a)).toEqual([a])
  })
})
