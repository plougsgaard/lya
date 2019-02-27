/* global describe, expect, test */

const curry1 = require('../internal/curry1')
const curry2 = require('../internal/curry2')
const curry3 = require('../internal/curry3')

describe('curry', () => {
  test('arity 1 functions', () => {
    const f0 = (a) => [a]
    const f1 = curry1(f0)
    expect(f0(1)).toEqual([1])
    expect(f1(1)).toEqual([1])
    expect(f1()).toBeInstanceOf(Function)
    expect(f1(undefined)).toEqual([undefined])
  })
  test('arity 2 functions', () => {
    const f0 = (a, b) => [a, b]
    const f1 = curry2(f0)
    expect(f0(1, 2)).toEqual([1, 2])
    expect(f1(1)(2)).toEqual([1, 2])
    expect(f1(1, 2)).toEqual([1, 2])
    expect(f0(1)).toEqual([1, undefined])
    expect(f1(1)).toBeInstanceOf(Function)
  })
  test('arity 3 functions', () => {
    const f0 = (a, b, c) => [a, b, c]
    const f1 = curry3(f0)
    expect(f0(1, 2, 3)).toEqual([1, 2, 3])
    expect(f1(1)(2, 3)).toEqual([1, 2, 3])
    expect(f1(1, 2)(3)).toEqual([1, 2, 3])
    expect(f1(undefined)(2)(3)).toEqual([undefined, 2, 3])
    expect(f1(1)).toBeInstanceOf(Function)
    expect(f1(1, 2)).toBeInstanceOf(Function)
    expect(f1(1)(2)).toBeInstanceOf(Function)
  })
})
