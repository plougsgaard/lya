/* global describe, expect, test */

const _ = require('../lya')

describe('isObject', () => {
  test('should be objects', () => {
    expect(_.isObject({})).toBe(true)
    expect(_.isObject(new Date())).toBe(true)
  })
  test('should not be objects', () => {
    expect(_.isObject([])).toBe(false)
    expect(_.isObject(() => true)).toBe(false)
    expect(_.isObject(null)).toBe(false)
    expect(_.isObject(undefined)).toBe(false)
    expect(_.isObject(false)).toBe(false)
    expect(_.isObject(123)).toBe(false)
    expect(_.isObject('string')).toBe(false)
    expect(_.isObject(NaN)).toBe(false)
  })
})
