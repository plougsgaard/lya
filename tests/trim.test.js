/* global describe, expect, test */

var _ = require('../lya')

describe('trim', () => {
  test('normal strings', () => {
    expect(_.trim(' a ')).toBe('a')
    expect(_.trim(' a')).toBe('a')
    expect(_.trim('a ')).toBe('a')
  })
})
