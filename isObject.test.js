/* global describe, expect, test */

const isObject = require('./isObject')

describe('isObject', () => {
  test('should be objects', () => {
    expect(isObject({})).toBe(true)
    expect(isObject(new Date())).toBe(true)
  })
  test('should not be objects', () => {
    expect(isObject([])).toBe(false)
    expect(isObject(() => true)).toBe(false)
    expect(isObject(null)).toBe(false)
    expect(isObject(undefined)).toBe(false)
    expect(isObject(false)).toBe(false)
    expect(isObject(123)).toBe(false)
    expect(isObject('string')).toBe(false)
    expect(isObject(NaN)).toBe(false)
  })
})
