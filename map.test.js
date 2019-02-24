/* global describe, expect, test */

const _ = require('./lya')

describe('curry', () => {
  test('curry works as intended', () => {
    expect(_.map(v => v * 2)([1])).toEqual([2])
    expect(_.map(v => v * 2, [1])).toEqual([2])
    expect(_.map('a')([{ a: 'horse' }])).toEqual(['horse'])
    expect(_.map('a')).toBeInstanceOf(Function)
  })
})

describe('advanced iteratees', () => {
  test('nested keys', () => {
    const a0 = [{ a: { b: 123 } }, { a: { b: 'c' } }]
    expect(_.map('a.b', a0)).toEqual([123, 'c'])
    expect(_.map(['a', 'b'], a0)).toEqual([123, 'c'])
  })
})
