/* global describe, expect, test */

var _ = require('../lya')

describe('trimLeft', () => {
  test('normal strings', () => {
    expect(_.trimLeft(' a ')).toBe('a ')
    expect(_.trimLeft(' a')).toBe('a')
    expect(_.trimLeft('a ')).toBe('a ')
  })
})
