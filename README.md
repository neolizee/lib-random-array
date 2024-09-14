# Lib-Random-Array

A JavaScript library for generating arrays with various data types. Easily create arrays containing random numbers, strings, boolean values, and objects. Suitable for testing, populating, and creating examples.

## Installation

```bash
npm i lib-random-array
```

## Example

```js
import { UseRandomArray } from "lib-random-array";

const random = new UseRandomArray();
```

Array of numbers

```js
console.log(random.number());
```

Array of strings

```js
console.log(random.string());
```

Array of boolean

```js
console.log(random.boolean());
```

## Parameters

**Method** number()

- `length` - array length. Default is 10

- `min` - minimum value. Default is 0

- `max` - maximum value. Default is 10

- `unique` - the uniqueness of numeric values. Default is TRUE

```js
console.log(random.number(20, 0, 100, true));
```

**Method** string()

- `length` - array length. Default is 10

- `character` - length of each string. Default is 10

```js
console.log(random.string(20, 30));
```

**Method** boolean()

- `length` - array length. Default is 10

```js
console.log(random.boolean(20));
```