/* global describe, expect, test */

const mapValues = require('./mapValues')

describe('curry', () => {
  const o0 = { a: 1, b: 2 }
  test('curry works as intended', () => {
    expect(mapValues(v => v * 2)(o0)).toEqual({ a: 2, b: 4 })
    expect(mapValues(v => v * 2, o0)).toEqual({ a: 2, b: 4 })
    expect(mapValues(v => v * 2)).toBeInstanceOf(Function)
  })
})

describe('advanced iteratees', () => {
  const o0 = { a: { age: 32, stats: { speed: 100 } }, b: { age: 59, stats: { speed: 2 } } }
  test('keys', () => {
    expect(mapValues('age', o0)).toEqual({ a: 32, b: 59 })
    expect(mapValues(['age'], o0)).toEqual({ a: 32, b: 59 })
  })
  test('nested keys', () => {
    expect(mapValues('stats.speed', o0)).toEqual({ a: 100, b: 2 })
    expect(mapValues(['stats', 'speed'], o0)).toEqual({ a: 100, b: 2 })
  })
})
