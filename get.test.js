/* global describe, expect, test */

const get = require('./get')

describe('curry', () => {
  test('curry works as intended', () => {
    expect(get('a')({ a: 'horse' })).toBe('horse')
    expect(get('a')).toBeInstanceOf(Function)
  })
})

describe('object lookup', () => {
  test('can get values with string keys', () => {
    expect(get('a', { a: 'horse' })).toBe('horse')
    expect(get('a.b', { a: { b: 123 } })).toBe(123)
  })
  test('can get values with array keys', () => {
    expect(get(['a'], { a: 'horse' })).toBe('horse')
    expect(get(['a', 'b'], { a: { b: 123 } })).toBe(123)
  })
})

describe('array lookup', () => {
  test('can get values with string (number) keys', () => {
    expect(get('0', ['horse', 'sheep'])).toBe('horse')
  })
})

describe('combined object/array lookup', () => {
  test('can get values with string (number) keys', () => {
    expect(get('a.1', { a: ['horse', 'sheep'] })).toBe('sheep')
  })
})

describe('lookup of non-existent paths', () => {
  test('gets undefined from crazy path', () => {
    const obj = { a: { b: { d: 'horse' } } }
    expect(get('a.b.c', obj)).toBeUndefined()
    expect(get(null, obj)).toBeUndefined()
    expect(get(NaN, obj)).toBeUndefined()
    expect(get('', obj)).toBeUndefined()
    expect(get([''], obj)).toBeUndefined()
    expect(get([NaN, NaN], obj)).toBeUndefined()
    expect(get([undefined], obj)).toBeUndefined()
    expect(get([null], obj)).toBeUndefined()
    expect(get([], obj)).toEqual(obj)
  })
})
