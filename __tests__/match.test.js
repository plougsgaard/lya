/* global describe, expect, test */

const _ = require('../lya')

describe('match', () => {
  test('single match', () => {
    const m = _.match('a', 'abc')
    expect(m['0']).toBe('a')
    expect(m['index']).toBe(0)
    expect(m['input']).toBe('abc')
    expect(m).toBeInstanceOf(Array)
    expect(Array.isArray(m)).toBe(true) // yeah it's not really though
  })
  test('global match', () => {
    const m = _.match(/a/g, 'ababab')
    expect(m).toEqual(['a', 'a', 'a'])
    expect(m['index']).toBe(undefined)
    expect(m['input']).toBe(undefined)
    expect(m).toBeInstanceOf(Array)
  })
})
