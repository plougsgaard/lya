/* global describe, expect, test */

const _ = require('../lya')

describe('concat', () => {
  test('concat value', () => {
    expect(_.concat(3, [1, 2])).toEqual([1, 2, 3])
  })
  test('concat array', () => {
    expect(_.concat([3, 4], [1, 2])).toEqual([1, 2, 3, 4])
  })
  test('concat strings', () => {
    expect(_.concat('1', '2')).toEqual('21')
  })
  test('concat string with non-strings', () => {
    expect(_.concat({}, 'str')).toEqual('str[object Object]')
    expect(_.concat(undefined, 'str')).toEqual('strundefined')
  })
  test('concat array with string', () => {
    expect(_.concat('1', ['2'])).toEqual(['2', '1'])
  })
})
