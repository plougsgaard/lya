/* global describe, expect, test */

const _ = require('../lya')

describe('curry', () => {
  test('curry works as intended', () => {
    expect(_.get('a')({ a: 'horse' })).toBe('horse')
    expect(_.get('a')).toBeInstanceOf(Function)
  })
})

describe('object lookup', () => {
  test('can get values with string keys', () => {
    expect(_.get('a', { a: 'horse' })).toBe('horse')
    expect(_.get('a.b', { a: { b: 123 } })).toBe(123)
  })
  test('can get values with array keys', () => {
    expect(_.get(['a'], { a: 'horse' })).toBe('horse')
    expect(_.get(['a', 'b'], { a: { b: 123 } })).toBe(123)
  })
})

describe('array lookup', () => {
  test('can get values with string (number) keys', () => {
    expect(_.get('0', ['horse', 'sheep'])).toBe('horse')
  })
})

describe('combined object/array lookup', () => {
  test('can get values with string (number) keys', () => {
    expect(_.get('a.1', { a: ['horse', 'sheep'] })).toBe('sheep')
  })
})

describe('lookup of non-existent paths', () => {
  test('gets undefined from crazy path', () => {
    const obj = { a: { b: { d: 'horse' } } }
    expect(_.get('a.b.c', obj)).toBeUndefined()
    expect(_.get(null, obj)).toBeUndefined()
    expect(_.get(NaN, obj)).toBeUndefined()
    expect(_.get('', obj)).toBeUndefined()
    expect(_.get([''], obj)).toBeUndefined()
    expect(_.get([NaN, NaN], obj)).toBeUndefined()
    expect(_.get([undefined], obj)).toBeUndefined()
    expect(_.get([null], obj)).toBeUndefined()
    expect(_.get([], obj)).toEqual(obj)
  })
})
