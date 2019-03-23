/* global describe, expect, test */

var _ = require('../lya')

describe('trimRight', () => {
  test('normal strings', () => {
    expect(_.trimRight(' a ')).toBe(' a')
    expect(_.trimRight(' a')).toBe(' a')
    expect(_.trimRight('a ')).toBe('a')
  })
})
