# lya

[![travis build](https://img.shields.io/travis/plougsgaard/lya.svg)](https://travis-ci.org/plougsgaard/lya) [![npm version](https://badge.fury.io/js/lya.svg)](https://badge.fury.io/js/lya)

> Don't mind me -- yet another (functional) lodash implementation

## Getting started

Add with your favorite (of these two) package managers.

```shell
$ yarn add -E lya
```

or

```shell
$ npm i -E -S lya
```

Import all or some of it.

```js
// Load with import statement
import _ from 'lya'

// Load as CommonJS module
var _ = require('lya')

// Load a submodule
var map = require('lya/map')
```

## Guiding Principles

All functions are curried.

All functions take the collection/value to be altered as the last argument.

All functions love to be used with `flow`.

## API

## Functions

<dl>
<dt><a href="#assign">assign(fromCollection, toCollection)</a> ⇒ <code>Object</code></dt>
<dd><p>Assign keys from left to right.</p>
</dd>
<dt><a href="#clone">clone(collection)</a> ⇒ <code>Object</code> | <code>Array</code></dt>
<dd><p>Get shallow clone of collection.</p>
</dd>
<dt><a href="#concat">concat(value, array)</a> ⇒ <code>Array</code> | <code>string</code></dt>
<dd><p>Append value or array to array, or value to string</p>
</dd>
<dt><a href="#endsWith">endsWith(searchString, string)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if string ends with searchString</p>
</dd>
<dt><a href="#filter">filter(iteratee, array)</a> ⇒ <code>Array</code></dt>
<dd><p>Filters array (keeps elements) by iteratee (function or path).</p>
</dd>
<dt><a href="#first">first(array)</a> ⇒ <code>*</code></dt>
<dd><p>Gets first element of array.</p>
</dd>
<dt><a href="#flow">flow(...predicates, value)</a> ⇒ <code>*</code></dt>
<dd><p>Threads a value through a series of functions.
If the last argument is not a function, it&#39;s applied as the value.</p>
</dd>
<dt><a href="#get">get(path, collection)</a> ⇒ <code>*</code></dt>
<dd><p>Gets value from (nested) path in a collection.</p>
</dd>
<dt><a href="#identity">identity(value)</a> ⇒ <code>*</code></dt>
<dd><p>Takes a value and returns the same value.</p>
</dd>
<dt><a href="#includes">includes(value, collection)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check whether collection includes some <code>value</code>.</p>
</dd>
<dt><a href="#indexOf">indexOf(value, array)</a> ⇒ <code>integer</code></dt>
<dd><p>Search for index of value in array or string.</p>
</dd>
<dt><a href="#isEmpty">isEmpty(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a value is empty.</p>
</dd>
<dt><a href="#isObject">isObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if a value is an object.
An object is something with type &#39;object&#39; that isn&#39;t an array or function</p>
</dd>
<dt><a href="#join">join(separator, array)</a> ⇒ <code>string</code></dt>
<dd><p>Joins elements of array together with separator between each.</p>
</dd>
<dt><a href="#keys">keys(collection)</a> ⇒ <code>Array</code></dt>
<dd><p>Get keys of collection.</p>
</dd>
<dt><a href="#last">last(array)</a> ⇒ <code>*</code></dt>
<dd><p>Gets last element of array.</p>
</dd>
<dt><a href="#map">map(iteratee, array)</a> ⇒ <code>Array</code></dt>
<dd><p>Map over array calling iteratee on each value.</p>
</dd>
<dt><a href="#mapValues">mapValues(iteratee, object)</a> ⇒ <code>Object</code></dt>
<dd><p>Map over object calling iteratee on each value.</p>
</dd>
<dt><a href="#match">match(regexp, string)</a> ⇒ <code>Array</code></dt>
<dd><p>Get result of matching <code>string</code> against <code>regexp</code></p>
</dd>
<dt><a href="#negate">negate(predicate)</a> ⇒ <code>function</code></dt>
<dd><p>Negates a function.</p>
</dd>
<dt><a href="#notEmpty">notEmpty(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a value is <em>not empty</em>. Inverse of <code>isEmpty</code>.</p>
</dd>
<dt><a href="#nth">nth(index, array)</a> ⇒ <code>*</code></dt>
<dd><p>Get nth element in array.
If index is negative, it gets the nth last element.</p>
</dd>
<dt><a href="#reduce">reduce(iteratee, accumulator, array)</a> ⇒ <code>*</code></dt>
<dd><p>Reduces array into a new value.
It calls the iteratee with each element in the array, providing the result as the accumulator in the following iteration.</p>
</dd>
<dt><a href="#reject">reject(iteratee, array)</a> ⇒ <code>Array</code></dt>
<dd><p>Rejects elements of array by running each though iteratee.</p>
</dd>
<dt><a href="#replace">replace(regexp, replacement, string)</a> ⇒ <code>string</code></dt>
<dd><p>Replace some or all matches with replacement pattern.</p>
</dd>
<dt><a href="#set">set(path, value, object)</a> ⇒ <code>Object</code></dt>
<dd><p>Set path of object to value returning the copy</p>
</dd>
<dt><a href="#slice">slice(start, end, array)</a> ⇒ <code>Array</code></dt>
<dd><p>Slice array returning dense array.</p>
</dd>
<dt><a href="#sortBy">sortBy(iteratee, array)</a> ⇒ <code>Array</code></dt>
<dd><p>Sort array using iteratee to compare elements.</p>
</dd>
<dt><a href="#split">split(delimeter, string)</a> ⇒ <code>Array</code></dt>
<dd><p>Split string into array by delimeter.</p>
</dd>
<dt><a href="#startsWith">startsWith(searchString, string)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if string starts with searchString</p>
</dd>
<dt><a href="#substring">substring(startIndex, endIndex, string)</a> ⇒ <code>string</code></dt>
<dd><p>Exracts substring from startIndex to endIndex (not included).</p>
</dd>
<dt><a href="#toLowerCase">toLowerCase(string)</a> ⇒ <code>string</code></dt>
<dd><p>Converts string to lower case.</p>
</dd>
<dt><a href="#toUpperCase">toUpperCase(string)</a> ⇒ <code>string</code></dt>
<dd><p>Converts string to upper case.</p>
</dd>
<dt><a href="#trim">trim(string)</a> ⇒ <code>string</code></dt>
<dd><p>Trim string by removing whitespace from left and right.</p>
</dd>
<dt><a href="#trimLeft">trimLeft(string)</a> ⇒ <code>string</code></dt>
<dd><p>Trim string by removing whitespace from left.</p>
</dd>
<dt><a href="#trimRight">trimRight(string)</a> ⇒ <code>string</code></dt>
<dd><p>Trim string by removing whitespace from right.</p>
</dd>
<dt><a href="#update">update(path, predicate, object)</a> ⇒ <code>Object</code></dt>
<dd><p>Update path of object to result of update function on existing value returning the copy</p>
</dd>
<dt><a href="#values">values(collection)</a> ⇒ <code>Array</code></dt>
<dd><p>Get values of collection.</p>
</dd>
</dl>

<a name="assign"></a>

## assign(fromCollection, toCollection) ⇒ <code>Object</code>
Assign keys from left to right.

**Returns**: <code>Object</code> - Returns copy of `toCollection` overwritten by `fromCollection`.  
**Since**: 0.2.0  

| Param | Type | Description |
| --- | --- | --- |
| fromCollection | <code>Object</code> | Source collection |
| toCollection | <code>Object</code> | Target collection |

**Example**  
```js
assign({ a: 1 }, { a: 4, b: 2 }) // => { a: 1, b: 2 }
```
<a name="clone"></a>

## clone(collection) ⇒ <code>Object</code> \| <code>Array</code>
Get shallow clone of collection.

**Returns**: <code>Object</code> \| <code>Array</code> - Returns shallow clone of `collection`  
**Since**: 0.2.0 - array clones introduced in 0.3.0  

| Param | Type | Description |
| --- | --- | --- |
| collection | <code>Object</code> \| <code>Array</code> | Collection to clone |

**Example**  
```js
var obj = { a: 1 }
var res = clone(obj) // => res = { a: 1 }, obj != res
```
**Example**  
```js
var arr = [1, 2, 3]
var res = clone(arr) // => res = [1, 2, 3], obj != res
```
<a name="concat"></a>

## concat(value, array) ⇒ <code>Array</code> \| <code>string</code>
Append value or array to array, or value to string

**Returns**: <code>Array</code> \| <code>string</code> - Returns concatenated array or string  
**See**: https://mdn.io/concat  
**Since**: 0.4.0  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Array</code> \| <code>\*</code> | value or array to append to array or string |
| array | <code>Array</code> \| <code>string</code> | string or array to expand |

**Example**  
```js
concat(4, [1, 2, 3]) // => [1, 2, 3, 4]
```
**Example**  
```js
concat([4, 5], [1, 2, 3]) // => [1, 2, 3, 4, 5]
```
**Example**  
```js
concat('def', 'abc') // => 'abcdef'
```
**Example**  
```js
concat('def', ['abc']) // => ['abc', 'def']
```
<a name="endsWith"></a>

## endsWith(searchString, string) ⇒ <code>boolean</code>
Checks if string ends with searchString

**Returns**: <code>boolean</code> - Returns `true` if `string` ends with `searchString`, false otherwise  
**See**: https://mdn.io/endsWith  
**Since**: 0.5.0  

| Param | Type | Description |
| --- | --- | --- |
| searchString | <code>string</code> | Substring to search for |
| string | <code>string</code> | String to check |

**Example**  
```js
endsWith('efg', 'abcdefg') // => true
```
<a name="filter"></a>

## filter(iteratee, array) ⇒ <code>Array</code>
Filters array (keeps elements) by iteratee (function or path).

**Returns**: <code>Array</code> - Returns filtered copy of array  
**Since**: 0.3.0  

| Param | Type | Description |
| --- | --- | --- |
| iteratee | <code>string</code> \| <code>function</code> | function or path to keep |
| array | <code>Array</code> | array to filter |

**Example**  
```js
filter('a', [{ a: true }, { a: false }]) // => [{ a: true }]
```
**Example**  
```js
filter(v => v > 0)([-1, 0, 1, 2]) // => [1, 2]
```
<a name="first"></a>

## first(array) ⇒ <code>\*</code>
Gets first element of array.

**Returns**: <code>\*</code> - Returns first element of `array`  
**Since**: 0.3.0  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | array to get first element from |

**Example**  
```js
first([1, 2, 3]) // => 1
```
<a name="flow"></a>

## flow(...predicates, value) ⇒ <code>\*</code>
Threads a value through a series of functions.
If the last argument is not a function, it's applied as the value.

**Returns**: <code>\*</code> - Returns value run though all the functions  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| ...predicates | <code>function</code> | Functions to apply (left to right) |
| value | <code>\*</code> |  |

**Example**  
```js
flow(x => x + 1, 1) // => 2
```
**Example**  
```js
flow(x => x + 1)(1) // => 2
```
**Example**  
```js
flow(x => x + 1, x => x + 1, 1) // => 3
```
<a name="get"></a>

## get(path, collection) ⇒ <code>\*</code>
Gets value from (nested) path in a collection.

**Returns**: <code>\*</code> - Returns value if found, `undefined` otherwise  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> \| <code>Array.&lt;string&gt;</code> | dot-string or string-array denoting path |
| collection | <code>Object</code> \| <code>Array</code> | collection to get value from |

**Example**  
```js
get('a.b', { a: { b: 42 } }) // => 42
```
**Example**  
```js
get(['a', 'b'], { a: { b: 42 } }) // => 42
```
**Example**  
```js
get('a.1', { a: [1, 2] }) // => 2
```
<a name="identity"></a>

## identity(value) ⇒ <code>\*</code>
Takes a value and returns the same value.

**Returns**: <code>\*</code> - Returns `value`  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

**Example**  
```js
identity(2) // => 2
```
**Example**  
```js
identity(() => 5) // => () => 5
```
<a name="includes"></a>

## includes(value, collection) ⇒ <code>boolean</code>
Check whether collection includes some `value`.

**Returns**: <code>boolean</code> - Returns `true` if collection includes value  
**Since**: 0.4.0  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | value to find |
| collection | <code>Array</code> \| <code>Object</code> | array or object to search for value in |

**Example**  
```js
includes(1, [1, 2]) // => true
```
**Example**  
```js
includes(1, { a: 1, b: 2 }) // => true
```
<a name="indexOf"></a>

## indexOf(value, array) ⇒ <code>integer</code>
Search for index of value in array or string.

**Returns**: <code>integer</code> - Returns index of value in array or string, -1 if not found  
**See**: https://mdn.io/indexOf  
**Since**: 0.5.0  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> \| <code>\*</code> | value to search for |
| array | <code>Array</code> \| <code>string</code> | string or array to search in |

**Example**  
```js
indexOf(3, [1, 2, 3]) // => 2
```
**Example**  
```js
indexOf('c', 'abc') // => 2
```
**Example**  
```js
indexOf('d', 'abc') // => -1
```
<a name="isEmpty"></a>

## isEmpty(value) ⇒ <code>boolean</code>
Checks if a value is empty.

**Returns**: <code>boolean</code> - Returns `true` if empty, `false` otherwise  
**Since**: 0.3.0  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | Value to check |

**Example**  
```js
isEmpty({}) // => true
```
**Example**  
```js
isEmpty([]) // => true
```
**Example**  
```js
isEmpty(123) // => true
```
**Example**  
```js
isEmpty('') // => true
```
**Example**  
```js
isEmpty('foo') // => false
```
<a name="isObject"></a>

## isObject(value) ⇒ <code>boolean</code>
Determines if a value is an object.
An object is something with type 'object' that isn't an array or function

**Returns**: <code>boolean</code> - Returns `true` if `value` is an object according to Lya's ad-hoc definition  
**Since**: 0.2.0  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

**Example**  
```js
isObject({}) // => true
```
**Example**  
```js
isObject(new Date()) // => true
```
**Example**  
```js
isObject([1, 2, 3]) // => false
```
<a name="join"></a>

## join(separator, array) ⇒ <code>string</code>
Joins elements of array together with separator between each.

**Returns**: <code>string</code> - String joined together with separator  
**See**: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join  
**Since**: 0.3.0  

| Param | Type |
| --- | --- |
| separator | <code>string</code> | 
| array | <code>Array</code> | 

**Example**  
```js
join('-', [1, 2, 3]) // => '1-2-3'
```
<a name="keys"></a>

## keys(collection) ⇒ <code>Array</code>
Get keys of collection.

**Returns**: <code>Array</code> - Returns array of `collection` keys  
**Since**: 0.2.0  

| Param | Type | Description |
| --- | --- | --- |
| collection | <code>Array</code> \| <code>Object</code> | object or array to get keys from |

**Example**  
```js
keys({ a: 123 }) // => ['a']
```
**Example**  
```js
keys([1, 2, 3]) // => ['0', '1', '2']
```
<a name="last"></a>

## last(array) ⇒ <code>\*</code>
Gets last element of array.

**Returns**: <code>\*</code> - Return last element of `array`  
**Since**: 0.3.0  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | array to get last element from |

**Example**  
```js
last([1, 2, 3]) // => 3
```
<a name="map"></a>

## map(iteratee, array) ⇒ <code>Array</code>
Map over array calling iteratee on each value.

**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| iteratee | <code>String</code> \| <code>function</code> | 
| array | <code>Array</code> | 

**Example**  
```js
map(x => x + 1, [1, 2, 3]) // => [2, 3, 4]
```
**Example**  
```js
map('x', [{ x: 1 }, { x: 2, y: 3 }]) // => [1, 2]
```
<a name="mapValues"></a>

## mapValues(iteratee, object) ⇒ <code>Object</code>
Map over object calling iteratee on each value.

**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| iteratee | <code>String</code> \| <code>function</code> | 
| object | <code>Object</code> | 

**Example**  
```js
mapValues(x => x + 1, { a: 10, b: 10 }) // => { a: 11, b: 11 }
```
<a name="match"></a>

## match(regexp, string) ⇒ <code>Array</code>
Get result of matching `string` against `regexp`

**Returns**: <code>Array</code> - Returns array of matches  
**See**: https://mdn.io/match  
**Since**: 0.5.0  

| Param | Type | Description |
| --- | --- | --- |
| regexp | <code>RegExp</code> | regular expression |
| string | <code>string</code> |  |

**Example**  
```js
match(/foo/g, 'foobarfoo') // => ['foo', 'foo']
```
<a name="negate"></a>

## negate(predicate) ⇒ <code>function</code>
Negates a function.

**Returns**: <code>function</code> - Returns function that calls the `predicate function and negates the result.  
**Since**: 0.3.0  

| Param | Type | Description |
| --- | --- | --- |
| predicate | <code>function</code> | Function to negate |

**Example**  
```js
var notTrue = negate(() => true)
notTrue() // => false
```
<a name="notEmpty"></a>

## notEmpty(value) ⇒ <code>boolean</code>
Checks if a value is *not empty*. Inverse of `isEmpty`.

**Returns**: <code>boolean</code> - Returns `true` if _not empty_, `false` if empty  
**Since**: 0.3.0  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | Value to check |

**Example**  
```js
notEmpty({}) // => false
```
**Example**  
```js
notEmpty[1, 2, 3] // => true
```
**Example**  
```js
notEmpty('foo') // => true
```
<a name="nth"></a>

## nth(index, array) ⇒ <code>\*</code>
Get nth element in array.
If index is negative, it gets the nth last element.

**Returns**: <code>\*</code> - Value at nth index starting from 0  
**Since**: 0.3.0  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>integer</code> | index in array to grab |
| array | <code>\*</code> | to grab value from |

**Example**  
```js
nth(1, [6, 7, 8]) // => 7
```
**Example**  
```js
nth(5, [6, 7, 8]) // => undefined
```
**Example**  
```js
nth(-1, [6, 7, 8]) // => 8
```
<a name="reduce"></a>

## reduce(iteratee, accumulator, array) ⇒ <code>\*</code>
Reduces array into a new value.
It calls the iteratee with each element in the array, providing the result as the accumulator in the following iteration.

**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| iteratee | <code>function</code> | 
| accumulator | <code>\*</code> | 
| array | <code>Array</code> | 

**Example**  
```js
reduce(
  (acc, current) => acc + current, // sum function
  0,
  [1, 2, 3]
) // => 6
```
<a name="reject"></a>

## reject(iteratee, array) ⇒ <code>Array</code>
Rejects elements of array by running each though iteratee.

**Returns**: <code>Array</code> - Returns copy of array with rejected elements removed  
**Since**: 0.3.0  

| Param | Type | Description |
| --- | --- | --- |
| iteratee | <code>string</code> \| <code>function</code> | function or path to reject |
| array | <code>Array</code> | array to reject |

**Example**  
```js
reject('a', [{ a: true }, { a: false }]) // => [{ a: false }]
```
**Example**  
```js
reject(v => v > 0)([-1, 0, 1, 2]) // => [-1, 0]
```
<a name="replace"></a>

## replace(regexp, replacement, string) ⇒ <code>string</code>
Replace some or all matches with replacement pattern.

**Returns**: <code>string</code> - Returns replaced `string`  
**See**: https://mdn.io/replace  
**Since**: 0.4.0  

| Param | Type | Description |
| --- | --- | --- |
| regexp | <code>RegExp</code> \| <code>string</code> | RegExp literal or string to replace |
| replacement | <code>string</code> \| <code>function</code> | replacement pattern |
| string | <code>string</code> | string to run replace on |

**Example**  
```js
replace(/a/i, 'b', 'a-a-a') // => 'b-a-a'
```
**Example**  
```js
replace(/a/gi, 'b', 'a-a-a') // => 'b-b-b'
```
<a name="set"></a>

## set(path, value, object) ⇒ <code>Object</code>
Set path of object to value returning the copy

**Returns**: <code>Object</code> - Returns copy of `object` with `value` set at `path`  
**Since**: 0.2.0  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>Array</code> \| <code>string</code> | path to set |
| value | <code>\*</code> | value to set at path |
| object | <code>Object</code> | object to set value in |

**Example**  
```js
set('a.b', 2, { a: { b: 1 } }) // => { a: { b: 2 } }
```
<a name="slice"></a>

## slice(start, end, array) ⇒ <code>Array</code>
Slice array returning dense array.

**Returns**: <code>Array</code> - Returns densely sliced array  
**See**: https://github.com/lodash/lodash/blob/master/slice.js  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| start | <code>number</code> | first index |
| end | <code>number</code> | last index |
| array | <code>Array</code> | array to slice |

**Example**  
```js
slice(0, 0, [1, 2, 3]) // => []
```
**Example**  
```js
slice(0)(0)([1, 2, 3]) // => []
```
**Example**  
```js
slice(0, -1, [1, 2, 3]) // => [1, 2]
```
<a name="sortBy"></a>

## sortBy(iteratee, array) ⇒ <code>Array</code>
Sort array using iteratee to compare elements.

**Returns**: <code>Array</code> - Returns `array` sorted by `iteratee`  
**See**: https://mdn.io/sort  
**Since**: 0.3.0  

| Param | Type | Description |
| --- | --- | --- |
| iteratee | <code>string</code> \| <code>function</code> | string or function to sort by |
| array | <code>Array</code> | array to sort |

**Example**  
```js
sortBy(identity, ['c', 'a', 'b']) // => ['a', 'b', 'c']
```
**Example**  
```js
sortBy('a', [{ a: 1 }, { a: 9 }, { a: 5 }]) // => [{ a: 1 }, { a: 5 }, { a: 9 }]
```
<a name="split"></a>

## split(delimeter, string) ⇒ <code>Array</code>
Split string into array by delimeter.

**Returns**: <code>Array</code> - array of the split string  
**See**: https://mdn.io/split  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| delimeter | <code>string</code> | 
| string | <code>string</code> | 

**Example**  
```js
split('-', '1-2-3') // => ['1', '2', '3']
```
**Example**  
```js
split('-')('1-2-3') // => ['1', '2', '3']
```
<a name="startsWith"></a>

## startsWith(searchString, string) ⇒ <code>boolean</code>
Checks if string starts with searchString

**Returns**: <code>boolean</code> - Returns `true` if `string` starts with `searchString`, false otherwise  
**See**: https://mdn.io/startsWith  
**Since**: 0.5.0  

| Param | Type | Description |
| --- | --- | --- |
| searchString | <code>string</code> | Substring to search for |
| string | <code>string</code> | String to check |

**Example**  
```js
startsWith('abc', 'abcdefg') // => true
```
<a name="substring"></a>

## substring(startIndex, endIndex, string) ⇒ <code>string</code>
Exracts substring from startIndex to endIndex (not included).

**Returns**: <code>string</code> - Returns substring of `string`  
**See**: https://mdn.io/substring  
**Since**: 0.5.0  

| Param | Type |
| --- | --- |
| startIndex | <code>integer</code> | 
| endIndex | <code>integer</code> | 
| string | <code>string</code> | 

**Example**  
```js
substring(0, 2, 'abcde') // => 'ab'
```
**Example**  
```js
substring(0, undefined, 'abcde') // => 'abcde'
```
<a name="toLowerCase"></a>

## toLowerCase(string) ⇒ <code>string</code>
Converts string to lower case.

**Returns**: <code>string</code> - Returns `string` converted to lower case  
**See**: https://mdn.io/toLowerCase  
**Since**: 0.5.0  

| Param | Type |
| --- | --- |
| string | <code>string</code> | 

**Example**  
```js
toLowerCase('aAbBcC') // => 'aabbcc'
```
<a name="toUpperCase"></a>

## toUpperCase(string) ⇒ <code>string</code>
Converts string to upper case.

**Returns**: <code>string</code> - Returns `string` converted to upper case  
**See**: https://mdn.io/toUpperCase  
**Since**: 0.5.0  

| Param | Type |
| --- | --- |
| string | <code>string</code> | 

**Example**  
```js
toUpperCase('aAbBcC') // => 'aabbcc'
```
<a name="trim"></a>

## trim(string) ⇒ <code>string</code>
Trim string by removing whitespace from left and right.

**Returns**: <code>string</code> - String with whitespace removed from left and right  
**See**: https://mdn.io/trim  
**Since**: 0.4.0  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | string to trim |

**Example**  
```js
trim(' a ') // => 'a'
```
<a name="trimLeft"></a>

## trimLeft(string) ⇒ <code>string</code>
Trim string by removing whitespace from left.

**Returns**: <code>string</code> - Returns `string` with whitespace removed from left  
**Since**: 0.4.0  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | string to trim |

**Example**  
```js
trim(' a ') // => 'a '
```
<a name="trimRight"></a>

## trimRight(string) ⇒ <code>string</code>
Trim string by removing whitespace from right.

**Returns**: <code>string</code> - Returns `string` with whitespace removed from right  
**Since**: 0.4.0  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | string to trim |

**Example**  
```js
trim(' a ') // => ' a'
```
<a name="update"></a>

## update(path, predicate, object) ⇒ <code>Object</code>
Update path of object to result of update function on existing value returning the copy

**Returns**: <code>Object</code> - Returns copy of `object` with `predicate` applied at `path`  
**Since**: 0.5.0  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>Array</code> \| <code>string</code> | path to update |
| predicate | <code>function</code> \| <code>\*</code> | function or value to apply at path |
| object | <code>Object</code> | object to update path in |

**Example**  
```js
update('a.b', v => v + 10, { a: { b: 1 } }) // => { a: { b: 10 } }
```
**Example**  
```js
update('a.c', v => 10, { a: { b: 1 } }) // => { a: { b: 1, c: 10 } }
```
<a name="values"></a>

## values(collection) ⇒ <code>Array</code>
Get values of collection.

**Returns**: <code>Array</code> - Returns array of values  
**Since**: 0.2.0  

| Param | Type | Description |
| --- | --- | --- |
| collection | <code>Array</code> \| <code>Object</code> | object or array to get values from |

**Example**  
```js
values({ a: 123 }) // => [123]
```
**Example**  
```js
values([1, 2, 3]) // => [1, 2, 3]
```

* * *

&copy; plougsgaard
