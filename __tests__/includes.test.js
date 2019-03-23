/* global describe, expect, test */

const _ = require('../lya')

describe('includes', () => {
  test('arrays', () => {
    expect(_.includes(1, [1, 2, 3])).toBe(true)
    expect(_.includes('a', ['a', 'b', 'c'])).toBe(true)
    expect(_.includes(0, [1, 2, 3])).toBe(false)
  })
  test('objects', () => {
    expect(_.includes(1, { a: 1 })).toBe(true)
    expect(_.includes('a', { foo: 'a', bar: 'b' })).toBe(true)
    expect(_.includes('c', { foo: 'a', bar: 'b' })).toBe(false)
    expect(_.includes('foo', { foo: 'a', bar: 'b' })).toBe(false)
  })
})
