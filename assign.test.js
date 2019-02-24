/* global describe, expect, test */

const _ = require('./lya')

describe('assign', () => {
  test('regular old objects', () => {
    expect(_.assign({ a: 1, b: 2 }, {})).toEqual({ a: 1, b: 2 })
    expect(_.assign({}, { a: 1, b: 2 })).toEqual({ a: 1, b: 2 })
  })
  test('does not alter members (immutable)', () => {
    let o1 = { a: 1 }
    let o2 = { a: 4 }
    let o3 = _.assign(o1, o2)
    expect(o1).toEqual({ a: 1 })
    expect(o2).toEqual({ a: 4 })
    expect(o3).toEqual({ a: 1 })
    expect(o3).not.toBe(o1)
  })
})
