/* global describe, expect, test */

const _ = require('../lya')

describe('split', () => {
  const a = 'a|b|c'
  const b = 'a--b-c'
  test('curry works as intended', () => {
    expect(_.split('|', a)).toEqual(['a', 'b', 'c'])
    expect(_.split('|')(a)).toEqual(['a', 'b', 'c'])
    expect(_.split('|')).toBeInstanceOf(Function)
  })
  test('multicharacter delimeter', () => {
    expect(_.split('-', b)).toEqual(['a', '', 'b', 'c'])
    expect(_.split('--', b)).toEqual(['a', 'b-c'])
  })
  test('negative cases', () => {
    expect(_.split(undefined, a)).toEqual([a])
    expect(_.split(0, a)).toEqual([a])
    expect(_.split(null, a)).toEqual([a])
    expect(_.split(NaN, a)).toEqual([a])
  })
})
