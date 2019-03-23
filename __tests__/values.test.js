/* global describe, expect, test */

const _ = require('../lya')

describe('values', () => {
  test('regular object values', () => {
    expect(_.values({ a: 1, b: 2 })).toEqual([1, 2])
    expect(_.values({ 'very-special-key': 123 })).toEqual([123])
    expect(_.values([1, 2, 3])).toEqual([1, 2, 3])
  })
  test('values of non-objects (negative case)', () => {
    expect(_.values([])).toEqual([])
    expect(_.values(undefined)).toEqual([])
    expect(_.values(null)).toEqual([])
    expect(_.values(() => 123)).toEqual([])
    expect(_.values(NaN)).toEqual([])
    expect(_.values('foobar')).toEqual([])
  })
})
