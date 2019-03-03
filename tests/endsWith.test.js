/* global describe, expect, test */

const _ = require('../lya')

describe('endsWith', () => {
  test('strings', () => {
    expect(_.endsWith('def', 'abcdef')).toBe(true)
    expect(_.endsWith('abc', 'abcdef')).toBe(false)
  })
  test('non-strings', () => {
    expect(_.endsWith([], 'abc')).toBe(false)
    expect(_.endsWith(undefined, 'abc')).toBe(false)
    expect(_.endsWith(null, 'abc')).toBe(false)
    expect(_.endsWith(() => 123, 'abc')).toBe(false)
    expect(_.endsWith(NaN, 'abc')).toBe(false)
  })
})
