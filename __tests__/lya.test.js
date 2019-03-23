/* global describe, expect, test */

const _ = require('../lya')

describe('lya', () => {
  test('is object', () => {
    expect(_).toBeInstanceOf(Object)
  })
})
