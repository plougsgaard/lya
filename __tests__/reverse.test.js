/* global describe, expect, test */

const _ = require('../lya')

describe('reverse', () => {
  test('edge cases', () => {
    expect(_.reverse([])).toEqual([])
    expect(_.reverse(undefined)).toEqual([])
    expect(_.reverse(null)).toEqual([])
    expect(_.reverse(() => 123)).toEqual([])
    expect(_.reverse(NaN)).toEqual([])
    expect(_.reverse('foobar')).toEqual([])
  })
  test('does not alter the original array', () => {
    var originalArray = [1, 2, 3, 4, 5, 6, 7, 8]
    var reversedArray = _.reverse(originalArray)
    expect(originalArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
    expect(reversedArray).toEqual([8, 7, 6, 5, 4, 3, 2, 1])
  })
})
