/* global describe, expect, test */

const _ = require('../lya')

describe('isEmpty', () => {
  test('strings', () => {
    expect(_.isEmpty('')).toBe(true)
    expect(_.isEmpty('foo')).toBe(false)
  })
  test('collections', () => {
    expect(_.isEmpty([])).toBe(true)
    expect(_.isEmpty([1])).toBe(false)
    expect(_.isEmpty({})).toBe(true)
    expect(_.isEmpty({ length: 1 })).toBe(false)
    expect(_.isEmpty({ a: 0 })).toBe(false)
  })
  test('assorted falsy values', () => {
    expect(_.isEmpty(NaN)).toBe(true)
    expect(_.isEmpty(null)).toBe(true)
    expect(_.isEmpty(undefined)).toBe(true)
    expect(_.isEmpty(123)).toBe(true)
    expect(_.isEmpty(0)).toBe(true)
    expect(_.isEmpty(false)).toBe(true)
    expect(_.isEmpty(true)).toBe(true)
    expect(_.isEmpty(Number.Intinity)).toBe(true)
  })
})
