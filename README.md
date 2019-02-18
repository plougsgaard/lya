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
<dt><a href="#flow">flow(...functions, value)</a></dt>
<dd><p>Threads a value through a series of functions.
If the last argument is not a function, it&#39;s applied as the value.</p>
</dd>
<dt><a href="#get">get(path, [collection])</a> ⇒ <code>*</code></dt>
<dd><p>Gets value from (nested) path in a collection.</p>
</dd>
<dt><a href="#identity">identity(value)</a> ⇒ <code>*</code></dt>
<dd><p>Takes a value and return the same value.</p>
</dd>
<dt><a href="#slice">slice(start, end, array)</a></dt>
<dd><p>Slice array densely.</p>
<p>Copied (more or less) from the lodash implementation</p>
</dd>
<dt><a href="#split">split(delimeter, string)</a></dt>
<dd><p>Split string into array by delimeter.</p>
</dd>
</dl>

<a name="flow"></a>

## flow(...functions, value)
Threads a value through a series of functions.
If the last argument is not a function, it's applied as the value.


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
<a name="slice"></a>

## slice(start, end, array)
Slice array densely.

Copied (more or less) from the lodash implementation

**See**: https://github.com/lodash/lodash/blob/master/slice.js  

| Param | Type |
| --- | --- |
| start | <code>number</code> | 
| end | <code>number</code> | 
| array | <code>Array</code> | 

<a name="split"></a>

## split(delimeter, string)
Split string into array by delimeter.


| Param | Type |
| --- | --- |
| delimeter | <code>string</code> | 
| string | <code>string</code> | 


* * *

&copy; plougsgaard
