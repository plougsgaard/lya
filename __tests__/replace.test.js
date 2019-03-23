/* global describe, expect, test */

var _ = require('../lya')

describe('replace regex', () => {
  test('replace with string', () => {
    expect(_.replace(/a/i, 'b', 'a-a-a')).toBe('b-a-a')
    expect(_.replace(/a/gi, 'b', 'a-a-a')).toBe('b-b-b')
  })
})
