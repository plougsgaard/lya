/* global describe, expect, test */

const _ = require('../lya')

describe('curry', () => {
  test('curry works as intended', () => {
    expect(_.getOr('lamb')('a')({ a: 'horse' })).toBe('horse')
    expect(_.getOr('lamb')).toBeInstanceOf(Function)
    expect(_.getOr('lamb')('a')).toBeInstanceOf(Function)
  })
})

describe('object lookup', () => {
  test('can get values with string keys', () => {
    expect(_.getOr('ignored', 'a', { a: 'horse' })).toBe('horse')
    expect(_.getOr('ignored', 'a.b', { a: { b: 123 } })).toBe(123)
  })
  test('can get values with array keys', () => {
    expect(_.getOr('ignored', ['a'], { a: 'horse' })).toBe('horse')
    expect(_.getOr('ignored', ['a', 'b'], { a: { b: 123 } })).toBe(123)
    expect(_.getOr('default-value', ['a', 'q'], { a: { b: 123 } })).toBe('default-value')
  })
})

describe('array lookup', () => {
  test('can get values with string (number) keys', () => {
    expect(_.getOr('ignored', '0', ['horse', 'sheep'])).toBe('horse')
    expect(_.getOr('last-animal', '2', ['horse', 'sheep'])).toBe('last-animal')
  })
})

describe('combined object/array lookup', () => {
  test('can get values with string (number) keys', () => {
    expect(_.getOr('ignored', 'a.1', { a: ['horse', 'sheep'] })).toBe('sheep')
    expect(_.getOr('last-animal', 'a.2', { a: ['horse', 'sheep'] })).toBe('last-animal')
  })
})

describe('lookup of non-existent paths', () => {
  test('gets undefined from crazy path', () => {
    const obj = { a: { b: { d: 'horse' } } }
    expect(_.getOr('lamb', 'a.b.c', obj)).toBe('lamb')
    expect(_.getOr('lamb', null, obj)).toBe('lamb')
    expect(_.getOr('lamb', NaN, obj)).toBe('lamb')
    expect(_.getOr('lamb', '', obj)).toBe('lamb')
    expect(_.getOr('lamb', [''], obj)).toBe('lamb')
    expect(_.getOr('lamb', [NaN, NaN], obj)).toBe('lamb')
    expect(_.getOr('lamb', [undefined], obj)).toBe('lamb')
    expect(_.getOr('lamb', [null], obj)).toBe('lamb')
    expect(_.getOr('lamb', [], obj)).toEqual(obj)
  })
})
