/* global describe, expect, test */

const identity = require('./identity')

describe('identity is identity', () => {
  test('it is always the same', () => {
    expect(identity('horse')).toBe('horse')
    expect(identity(30)).toBe(30)
  })
})
