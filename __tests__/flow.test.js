/* global describe, expect, test */

const _ = require('../lya')

describe('flow', () => {
  test('simple function', () => {
    const f0 = (v) => v
    expect(_.flow(f0)).toBeInstanceOf(Function)
    expect(_.flow(f0)(1)).toBe(1)
    expect(_.flow(f0, f0)(1)).toBe(1)
    expect(_.flow(f0, f0)(1)).toBe(1)
  })
  test('simple function as array', () => {
    const f0 = (v) => v + 1
    expect(_.flow([f0])).toBeInstanceOf(Function)
    expect(_.flow([f0])(1)).toBe(2)
    expect(_.flow([f0, f0])(1)).toBe(3)
  })
  test('can accept initial value as last argument', () => {
    const f0 = (v) => v + 1
    expect(_.flow(f0, 4)).toBe(5)
    expect(_.flow(f0, f0, 4)).toBe(6)
  })
})
