/* global describe, expect, test */

const slice = require('./slice')

describe('slice', () => {
  const a = [1, 2, 3]
  test('curry works as intended', () => {
    expect(slice(0, 0, a)).toEqual([])
    expect(slice(0, 1, a)).toEqual([1])
    expect(slice(0, 1)(a)).toEqual([1])
    expect(slice(0)).toBeInstanceOf(Function)
    expect(slice(0, 0)).toBeInstanceOf(Function)
    expect(slice(0)(0)).toBeInstanceOf(Function)
  })
  test('can slice backwards', () => {
    expect(slice(0, -1, a)).toEqual([1, 2])
    expect(slice(0, -2, a)).toEqual([1])
    expect(slice(1, -1, a)).toEqual([2])
  })
})
