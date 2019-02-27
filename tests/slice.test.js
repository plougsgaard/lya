/* global describe, expect, test */

const _ = require('../lya')

describe('slice', () => {
  const a = [1, 2, 3]
  test('curry works as intended', () => {
    expect(_.slice(0, 0, a)).toEqual([])
    expect(_.slice(0, 1, a)).toEqual([1])
    expect(_.slice(0, 1)(a)).toEqual([1])
    expect(_.slice(0)).toBeInstanceOf(Function)
    expect(_.slice(0, 0)).toBeInstanceOf(Function)
    expect(_.slice(0)(0)).toBeInstanceOf(Function)
  })
  test('can slice backwards', () => {
    expect(_.slice(0, -1, a)).toEqual([1, 2])
    expect(_.slice(0, -2, a)).toEqual([1])
    expect(_.slice(1, -1, a)).toEqual([2])
  })
})
