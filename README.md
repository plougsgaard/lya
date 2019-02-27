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
<dd><p>Clone (shallow) collection.</p>
</dd>
<dt><a href="#filter">filter(iteratee, array)</a> ⇒ <code>Array</code></dt>
<dd><p>Filters array (keeps elements) by iteratee (function or path).</p>
</dd>
<dt><a href="#flow">flow(...functions, value)</a> ⇒ <code>*</code></dt>
<dd><p>Threads a value through a series of functions.
If the last argument is not a function, it&#39;s applied as the value.</p>
</dd>
<dt><a href="#get">get(path, [collection])</a> ⇒ <code>*</code></dt>
<dd><p>Gets value from (nested) path in a collection.</p>
</dd>
<dt><a href="#identity">identity(value)</a> ⇒ <code>*</code></dt>
<dd><p>Takes a value and return the same value.</p>
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
<dt><a href="#map">map(iteratee, array)</a> ⇒ <code>Array</code></dt>
<dd><p>Map over array calling iteratee on each value.</p>
</dd>
<dt><a href="#mapValues">mapValues(iteratee, object)</a> ⇒ <code>Object</code></dt>
<dd><p>Map over object calling iteratee on each value.</p>
</dd>
<dt><a href="#negate">negate(fun)</a> ⇒ <code>function</code></dt>
<dd><p>Negates a function.</p>
</dd>
<dt><a href="#reduce">reduce(iteratee, accumulator, array)</a> ⇒ <code>*</code></dt>
<dd><p>Reduces array into a new value.
It calls the iteratee with each element in the array, providing the result as the accumulator in the following iteration.</p>
</dd>
<dt><a href="#reject">reject(iteratee, array)</a> ⇒ <code>Array</code></dt>
<dd><p>Rejects elements of array by running each though iteratee.</p>
</dd>
<dt><a href="#set">set(path, value, object)</a> ⇒ <code>Object</code></dt>
<dd><p>Set value of object at some path, returning a copy with that value.</p>
</dd>
<dt><a href="#slice">slice(start, end, array)</a> ⇒ <code>Array</code></dt>
<dd><p>Slice array densely.</p>
</dd>
<dt><a href="#split">split(delimeter, string)</a> ⇒ <code>Array</code></dt>
<dd><p>Split string into array by delimeter.</p>
<p>This is a safe, curried version of the <code>String.split</code> function.</p>
</dd>
<dt><a href="#values">values(collection)</a> ⇒ <code>Array</code></dt>
<dd><p>Get values of collection.</p>
</dd>
</dl>

<a name="assign"></a>

## assign(fromCollection, toCollection) ⇒ <code>Object</code>
Assign keys from left to right.

**Returns**: <code>Object</code> - Target collection with keys from source overwritten.  
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
Clone (shallow) collection.

**Returns**: <code>Object</code> \| <code>Array</code> - shallow clone of collection  
**Since**: 0.2.0 - array clones introduced in 0.3.0  

| Param | Type | Description |
| --- | --- | --- |
| collection | <code>Object</code> \| <code>Array</code> | Collection to clone |

**Example**  
```js
let obj = { a: 1 }
let res = clone(obj) // => res = { a: 1 }, obj != res
```
**Example**  
```js
let arr = [1, 2, 3]
let res = clone(arr) // => res = [1, 2, 3], obj != res
```
<a name="filter"></a>

## filter(iteratee, array) ⇒ <code>Array</code>
Filters array (keeps elements) by iteratee (function or path).

**Since**: 0.3.0  

| Param | Type |
| --- | --- |
| iteratee | <code>string</code> \| <code>function</code> | 
| array | <code>Array</code> | 

**Example**  
```js
filter('a', [{ a: true }, { a: false }]) // => [{ a: true }]
```
**Example**  
```js
filter(v => v > 0)([-1, 0, 1, 2]) // => [1, 2]
```
<a name="flow"></a>

## flow(...functions, value) ⇒ <code>\*</code>
Threads a value through a series of functions.
If the last argument is not a function, it's applied as the value.

**Returns**: <code>\*</code> - value run though all the functions  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| ...functions | <code>function</code> | to apply (left to right) |
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

## get(path, [collection]) ⇒ <code>\*</code>
Gets value from (nested) path in a collection.

**Returns**: <code>\*</code> - value if found, `undefined` otherwise  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| path | <code>string</code> \| <code>Array.&lt;string&gt;</code> | 
| [collection] | <code>Object</code> \| <code>Array</code> | 

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
Takes a value and return the same value.

**Returns**: <code>\*</code> - value  
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
<a name="isObject"></a>

## isObject(value) ⇒ <code>boolean</code>
Determines if a value is an object.
An object is something with type 'object' that isn't an array or function

**Returns**: <code>boolean</code> - True if `value` is an object according to Lya's definition  
**Since**: 0.2.0  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

**Example**  
```js
isObject({}) // => true
isObject(new Date()) // => true
```
<a name="join"></a>

## join(separator, array) ⇒ <code>string</code>
Joins elements of array together with separator between each.

**Returns**: <code>string</code> - String joined together with separator  
**Since**: 0.3.0  

| Param | Type |
| --- | --- |
| separator | <code>string</code> | 
| array | <code>Array</code> | 

<a name="keys"></a>

## keys(collection) ⇒ <code>Array</code>
Get keys of collection.

**Returns**: <code>Array</code> - array of collection keys, empty if not collection  
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
<a name="negate"></a>

## negate(fun) ⇒ <code>function</code>
Negates a function.

**Returns**: <code>function</code> - Function that when called, calls the original function and negates the result.  
**Since**: 0.3.0  

| Param | Type | Description |
| --- | --- | --- |
| fun | <code>function</code> | Function to negate |

**Example**  
```js
let notTrue = negate(() => true)
notTrue() // => false
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

**Since**: 0.3.0  

| Param | Type |
| --- | --- |
| iteratee | <code>string</code> \| <code>function</code> | 
| array | <code>Array</code> | 

**Example**  
```js
reject('a', [{ a: true }, { a: false }]) // => [{ a: false }]
```
**Example**  
```js
reject(v => v > 0)([-1, 0, 1, 2]) // => [-1, 0]
```
<a name="set"></a>

## set(path, value, object) ⇒ <code>Object</code>
Set value of object at some path, returning a copy with that value.

**Returns**: <code>Object</code> - new collection with value  
**Since**: 0.2.0  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>Array</code> \| <code>string</code> | key/path to set |
| value | <code>\*</code> | value |
| object | <code>Object</code> | collection to set value in |

<a name="slice"></a>

## slice(start, end, array) ⇒ <code>Array</code>
Slice array densely.

**Returns**: <code>Array</code> - densely sliced array  
**See**: https://github.com/lodash/lodash/blob/master/slice.js  
**Since**: 0.1.0  

| Param | Type |
| --- | --- |
| start | <code>number</code> | 
| end | <code>number</code> | 
| array | <code>Array</code> | 

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
<a name="split"></a>

## split(delimeter, string) ⇒ <code>Array</code>
Split string into array by delimeter.

This is a safe, curried version of the `String.split` function.

**Returns**: <code>Array</code> - array of the split string  
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
<a name="values"></a>

## values(collection) ⇒ <code>Array</code>
Get values of collection.

**Returns**: <code>Array</code> - array of collection values, empty if not collection  
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
