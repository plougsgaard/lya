/* global describe, expect, test */

const _ = require('./lya')

describe('set top-layer keys', () => {
  let source = { a: 1 }
  let target = _.set('a', 42, source)
  test('result has the key', () => {
    expect(target).toEqual({ a: 42 })
  })
  test('does not alter source', () => {
    expect(source).toEqual({ a: 1 })
  })
})

describe('set nested (new) key', () => {
  test('result has the nested key', () => {
    let source = { a: { q: 32 } }
    let target = _.set('a.b.c', 42, source)
    expect(target).toEqual({ a: { b: { c: 42 }, q: 32 } })
  })
  test('does not alter source', () => {
    let source = { a: { q: 32 } }
    let target = _.set('a.b.c', 42, source)
    target.a = 123
    expect(source).toEqual({ a: { q: 32 } })
  })
})

describe('negative cases', () => {
  test('should remain unchanged', () => {
    expect(_.set('0', 123, [])).toEqual([])
    expect(_.set('0', 123, null)).toEqual(null)
    expect(_.set('0', 123, undefined)).toEqual(undefined)
  })
})
