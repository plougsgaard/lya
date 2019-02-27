/* global describe, expect, test */

const _ = require('../lya')

describe('notEmpty', () => {
  test('strings', () => {
    expect(_.notEmpty('')).toBe(false)
    expect(_.notEmpty('foo')).toBe(true)
  })
  test('collections', () => {
    expect(_.notEmpty([])).toBe(false)
    expect(_.notEmpty([1])).toBe(true)
    expect(_.notEmpty({})).toBe(false)
    expect(_.notEmpty({ length: 1 })).toBe(true)
    expect(_.notEmpty({ a: 0 })).toBe(true)
  })
  test('assorted falsy values', () => {
    expect(_.notEmpty(NaN)).toBe(false)
    expect(_.notEmpty(null)).toBe(false)
    expect(_.notEmpty(undefined)).toBe(false)
    expect(_.notEmpty(123)).toBe(false)
    expect(_.notEmpty(0)).toBe(false)
    expect(_.notEmpty(false)).toBe(false)
    expect(_.notEmpty(true)).toBe(false)
    expect(_.notEmpty(Number.Intinity)).toBe(false)
  })
})
