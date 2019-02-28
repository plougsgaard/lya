/* global describe, expect, test */

const _ = require('../lya')

describe('concat', () => {
  test('concat value', () => {
    expect(_.concat(3, [1, 2])).toEqual([1, 2, 3])
  })
  test('concat array', () => {
    expect(_.concat([3, 4], [1, 2])).toEqual([1, 2, 3, 4])
  })
  test('concat two non-arrays gives array', () => {
    expect(_.concat(1, 2)).toEqual([2, 1])
  })
})
