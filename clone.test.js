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
})
