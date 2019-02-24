/* global describe, expect, test */

const _ = require('./lya')

describe('identity is identity', () => {
  test('it is always the same', () => {
    expect(_.identity('horse')).toBe('horse')
    expect(_.identity(30)).toBe(30)
  })
})
