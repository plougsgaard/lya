/* global describe, expect, test */

const _ = require('../lya')

describe('toUpperCase', () => {
  test('strings', () => {
    expect(_.toUpperCase('aAbB')).toBe('AABB')
  })
  test('negative cases', () => {
    expect(_.toUpperCase(undefined)).toEqual(undefined)
    expect(_.toUpperCase(0)).toEqual(0)
    expect(_.toUpperCase(null)).toEqual(null)
    expect(_.toUpperCase(NaN)).toEqual(NaN)
  })
})
