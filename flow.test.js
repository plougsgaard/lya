/* global describe, expect, test */

const flow = require('./flow')

describe('flow', () => {
  test('simple function', () => {
    const f0 = (v) => v
    expect(flow(f0)).toBeInstanceOf(Function)
    expect(flow(f0)(1)).toBe(1)
    expect(flow(f0, f0)(1)).toBe(1)
    expect(flow(f0, f0)(1)).toBe(1)
  })
  test('simple function as array', () => {
    const f0 = (v) => v + 1
    expect(flow([f0])).toBeInstanceOf(Function)
    expect(flow([f0])(1)).toBe(2)
    expect(flow([f0, f0])(1)).toBe(3)
  })
  test('can accept initial value as last argument', () => {
    const f0 = (v) => v + 1
    expect(flow(f0, 4)).toBe(5)
    expect(flow(f0, f0, 4)).toBe(6)
  })
})
