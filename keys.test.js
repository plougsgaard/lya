/* global describe, expect, test */

const _ = require('./lya')

describe('keys', () => {
  test('regular object keys', () => {
    expect(_.keys({ a: 1, b: 2 })).toEqual(['a', 'b'])
    expect(_.keys({ 'very-special-key': 123 })).toEqual(['very-special-key'])
    expect(_.keys([1, 2, 3])).toEqual(['0', '1', '2'])
  })
  test('keys of non-objects (negative case)', () => {
    expect(_.keys([])).toEqual([])
    expect(_.keys(undefined)).toEqual([])
    expect(_.keys(null)).toEqual([])
    expect(_.keys(() => 123)).toEqual([])
    expect(_.keys(NaN)).toEqual([])
    expect(_.keys('foobar')).toEqual([])
  })
})
