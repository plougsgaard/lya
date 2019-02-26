/* global describe, expect, test */

const _ = require('./lya')

describe('curry', () => {
  test('curry works as intended', () => {
    expect(_.reject(v => v > 0)([-1, 1, 3])).toEqual([-1])
    expect(_.reject('a')).toBeInstanceOf(Function)
  })
})

describe('iteratees', () => {
  test('keys', () => {
    expect(_.reject('a', [{ a: true }, { a: false }])).toEqual([{ a: false }])
    expect(_.reject('a.b', [{ a: { b: 123 } }, { a: { b: undefined } }])).toEqual([{ a: { b: undefined } }])
  })
})
