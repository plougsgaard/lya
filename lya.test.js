/* global describe, expect, test */

const lya = require('./lya')

describe('lya', () => {
  test('is object', () => {
    expect(lya).toBeInstanceOf(Object)
  })
})
