/* global describe, expect, test */

const _ = require('../lya')

describe('indexOf', () => {
  test('found in array', () => {
    expect(_.indexOf(2, [1, 2])).toBe(1)
  })
  test('missing in array', () => {
    expect(_.indexOf(3, [1, 2])).toBe(-1)
  })
  test('found in string', () => {
    expect(_.indexOf('c', 'abc')).toBe(2)
  })
  test('missing in string', () => {
    expect(_.indexOf('d', 'abc')).toBe(-1)
  })
  test('not even string or array', () => {
    expect(_.indexOf('a', null)).toBe(-1)
    expect(_.indexOf('a', undefined)).toBe(-1)
    expect(_.indexOf('a', { a: '123' })).toBe(-1)
  })
})
