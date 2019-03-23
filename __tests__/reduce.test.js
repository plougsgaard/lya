/* global describe, expect, test */

const _ = require('../lya')

describe('reduce', () => {
  const iteratee = (acc, current) => acc + current
  const sum = _.reduce(iteratee)
  const sumZeroBased = _.reduce(iteratee, 0)

  test('curry', () => {
    expect(sumZeroBased([1, 2, 3])).toBe(1 + 2 + 3)
    expect(sumZeroBased).toBeInstanceOf(Function)

    expect(sum).toBeInstanceOf(Function)
    expect(sum(0)([1, 2, 3])).toBe(1 + 2 + 3)
  })

  test('does not work on objects', () => {
    const sumObject = sumZeroBased({ a: 1, b: 2 })
    expect(sumObject).toBe(0)
  })

  test('does not work on arbitrary values other than arrays', () => {
    expect(sumZeroBased(undefined)).toBe(0)
    expect(sumZeroBased(null)).toBe(0)
    expect(sumZeroBased('horse')).toBe(0)
    expect(sumZeroBased(NaN)).toBe(0)
  })
})
