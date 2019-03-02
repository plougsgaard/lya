/* global describe, expect, test */

const _ = require('../lya')

describe('substring', () => {
  test('strings', () => {
    expect(_.substring(0, 1, 'abcde')).toBe('a')
    expect(_.substring(0, undefined, 'abcde')).toBe('abcde')
  })
  test('negative cases', () => {
    expect(_.substring(undefined, undefined, '')).toBe('')
  })
})
