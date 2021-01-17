/**
 * Check if value is NaN
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus
 *  
 * @param {*} value 
 */
function isNaN (value) {
  return (typeof value === 'number') && (value != +value)
}

module.exports = isNaN
