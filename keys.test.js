/* global describe, expect, test */

const keys = require('./keys')

describe('keys', () => {
  test('regular object keys', () => {
    expect(keys({ a: 1, b: 2 })).toEqual(['a', 'b'])
    expect(keys({ 'very-special-key': 123 })).toEqual(['very-special-key'])
    expect(keys([1, 2, 3])).toEqual(['0', '1', '2'])
  })
  test('keys of non-objects (negative case)', () => {
    expect(keys([])).toEqual([])
    expect(keys(undefined)).toEqual([])
    expect(keys(null)).toEqual([])
    expect(keys(() => 123)).toEqual([])
    expect(keys(NaN)).toEqual([])
    expect(keys('foobar')).toEqual([])
  })
})
