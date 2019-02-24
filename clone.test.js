/* global describe, expect, test */

const clone = require('./clone')

describe('clone', () => {
  test('simple properties copied', () => {
    let o = { a: 1 }
    expect(clone(o)).toEqual(o)
  })
  test('copied object is not identical-this', () => {
    let o1 = { a: 1 }
    let o2 = clone(o1)
    expect(o1).toEqual(o2)
    expect(o1).toBe(o1)
    expect(o1).not.toBe(o2)
  })
  test('copied object cannot alter source', () => {
    let o1 = { a: 1 }
    let o2 = clone(o1)
    o2.a = 100
    expect(o1.a).toBe(1)
  })
  test('nested keys still alter source', () => {
    let o1 = { a: { b: 2 } }
    let o2 = clone(o1)
    o2.a.b = 100
    expect(o1.a.b).toBe(100)
  })
})
