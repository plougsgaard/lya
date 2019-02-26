/* global describe, expect, test */

const _ = require('./lya')

describe('join', () => {
  test('curry', () => {
    expect(_.join('+')([1, 2])).toBe('1+2')
  })
  test('negative cases should give empty string', () => {
    expect(_.join(',', null)).toBe('')
    expect(_.join(',', undefined)).toBe('')
    expect(_.join(',', NaN)).toBe('')
    expect(_.join(',', 123)).toBe('')
    expect(_.join(',', 'foobar')).toBe('')
    expect(_.join(',', { a: 123 })).toBe('')
  })
})
