/* global describe, expect, test */

const map = require('./map')

describe('curry', () => {
  test('curry works as intended', () => {
    expect(map(v => v * 2)([1])).toEqual([2])
    expect(map(v => v * 2, [1])).toEqual([2])
    expect(map('a')([{ a: 'horse' }])).toEqual(['horse'])
    expect(map('a')).toBeInstanceOf(Function)
  })
})

describe('advanced iteratees', () => {
  test('nested keys', () => {
    const a0 = [{ a: { b: 123 } }, { a: { b: 'c' } }]
    expect(map('a.b', a0)).toEqual([123, 'c'])
    expect(map(['a', 'b'], a0)).toEqual([123, 'c'])
  })
})
