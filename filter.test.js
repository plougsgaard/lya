/* global describe, expect, test */

const _ = require('./lya')

describe('curry', () => {
  test('curry works as intended', () => {
    expect(_.filter(v => v > 0)([-1, 1, 3])).toEqual([1, 3])
    expect(_.filter('a')).toBeInstanceOf(Function)
  })
})

describe('iteratees', () => {
  test('keys', () => {
    expect(_.filter('a', [{ a: true }, { a: false }])).toEqual([{ a: true }])
    expect(_.filter('a.b', [{ a: { b: 123 } }, { a: { b: undefined } }])).toEqual([{ a: { b: 123 } }])
  })
})
