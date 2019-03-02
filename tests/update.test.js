/* global describe, expect, test */

const _ = require('../lya')

describe('update top-layer keys', () => {
  let source = { a: 2 }
  let target = _.update('a', v => v * 3, source)
  test('result has the key', () => {
    expect(target).toEqual({ a: 6 })
  })
  test('does not alter source', () => {
    expect(source).toEqual({ a: 2 })
  })
})

describe('update nested (new) key', () => {
  test('result has the nested key', () => {
    let source = { a: { q: 32 } }
    let target = _.update('a.b.c', v => 42, source)
    expect(target).toEqual({ a: { b: { c: 42 }, q: 32 } })
  })
  test('does not alter source', () => {
    let source = { a: { q: 32 } }
    let target = _.update('a.b.c', v => 42, source)
    target.a = 123
    expect(source).toEqual({ a: { q: 32 } })
  })
})

describe('negative cases', () => {
  test('should remain unchanged', () => {
    expect(_.update('0', v => 123, [])).toEqual([])
    expect(_.update('0', v => 123, null)).toEqual(null)
    expect(_.update('0', v => 123, undefined)).toEqual(undefined)
  })
})
