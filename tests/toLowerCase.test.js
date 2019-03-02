/* global describe, expect, test */

const _ = require('../lya')

describe('toLowerCase', () => {
  test('strings', () => {
    expect(_.toLowerCase('aAbB')).toBe('aabb')
  })
  test('negative cases', () => {
    expect(_.toLowerCase(undefined)).toEqual(undefined)
    expect(_.toLowerCase(0)).toEqual(0)
    expect(_.toLowerCase(null)).toEqual(null)
    expect(_.toLowerCase(NaN)).toEqual(NaN)
  })
})
