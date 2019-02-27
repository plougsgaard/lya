/* global describe, expect, test */

const _ = require('./lya')

describe('clone', () => {
  test('simple properties copied', () => {
    let o = { a: 1 }
    expect(_.clone(o)).toEqual(o)
  })
  test('copied object is not identical-this', () => {
    let o1 = { a: 1 }
    let o2 = _.clone(o1)
    expect(o1).toEqual(o2)
    expect(o1).toBe(o1)
    expect(o1).not.toBe(o2)
  })
  test('copied object cannot alter source', () => {
    let o1 = { a: 1 }
    let o2 = _.clone(o1)
    o2.a = 100
    expect(o1.a).toBe(1)
  })
  test('nested keys still alter source', () => {
    let o1 = { a: { b: 2 } }
    let o2 = _.clone(o1)
    o2.a.b = 100
    expect(o1.a.b).toBe(100)
  })
  test('clone arrays', () => {
    let a1 = [1, 2, 3]
    let a2 = _.clone(a1)
    expect(a1).toEqual(a2)
    expect(a1).not.toBe(a2)
    expect(a1).toBe(a1)
    a1.push(10)
    expect(a2.length).toBe(3)
    a2.push(11)
    expect(a1.length).toBe(4)
  })
})
