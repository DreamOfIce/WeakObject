# WeakObject

A native-like object, but with a weak reference to all values, automatically deleting the corresponding property when the value is recycled.

- written in TypeScript
- zero dependence
- ESM support

## Requirement

This package uses ES2021 Syntax [WeakRef](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/WeakRef) and [FinalizationRegistry](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry).

> The following are the minimum versions that support these syntaxes:
>
> - Chromium >= 84
> - Firefox >= 79
> - Safari >= 14.1
> - Node.js >= 14.6.0

## Install

- Using `npm`:
  ```sh
  npm install weak-object
  ```
- Or using `pnpm`:
  ```sh
  pnpm add weak-object
  ```

## Quick start

```js
// first, import this module:
import WeakObject from "weak-object";

// or using CommonJS
const WeakObject = require("weak-object");

const weak = new WeakObject();
const obj = { foo: "bar" };

weak.add("baz", obj);
weak.has("baz"); // true

weak.delete("baz");
weak.has("baz"); // false
```

## API reference

> Generate with [jsdoc2mad](https://github.com/jsdoc2md/jsdoc-to-markdown)

<a name="WeakObject"></a>

### WeakObject

**Kind**: global class

- [WeakObject](#WeakObject)
  - [.get(prop)](#WeakObject+get) ⇒ <code>object</code> \| <code>undefined</code>
  - [.set(prop, value)](#WeakObject+set) ⇒ [<code>WeakObject</code>](#WeakObject)
  - [.has(prop)](#WeakObject+has) ⇒ <code>boolean</code>
  - [.delete(prop)](#WeakObject+delete) ⇒ <code>boolean</code>

<a name="WeakObject+get"></a>

#### weakObject.get(prop) ⇒ <code>object</code> \| <code>undefined</code>

Get a property of WeakObject

**Kind**: instance method of [<code>WeakObject</code>](#WeakObject)  
**Returns**: <code>object</code> \| <code>undefined</code> - value of property or undefined if the property not exists

| Param | Type                | Description   |
| ----- | ------------------- | ------------- |
| prop  | <code>string</code> | property name |

<a name="WeakObject+set"></a>

#### weakObject.set(prop, value) ⇒ [<code>WeakObject</code>](#WeakObject)

Set a property of WeakObject

**Kind**: instance method of [<code>WeakObject</code>](#WeakObject)  
**Returns**: [<code>WeakObject</code>](#WeakObject) - the WeakObject that called this method

| Param | Type                | Description   |
| ----- | ------------------- | ------------- |
| prop  | <code>string</code> | property name |
| value | <code>object</code> | value         |

<a name="WeakObject+has"></a>

#### weakObject.has(prop) ⇒ <code>boolean</code>

Determine if a property exists in WeakObject

**Kind**: instance method of [<code>WeakObject</code>](#WeakObject)  
**Returns**: <code>boolean</code> - returns true if the property exists, otherwise false

| Param | Type                | Description   |
| ----- | ------------------- | ------------- |
| prop  | <code>string</code> | property name |

<a name="WeakObject+delete"></a>

#### weakObject.delete(prop) ⇒ <code>boolean</code>

Delete a property of WeakObject if exists

**Kind**: instance method of [<code>WeakObject</code>](#WeakObject)  
**Returns**: <code>boolean</code> - returns true when the property exists and is successfully deleted, otherwise false

| Param | Type                | Description   |
| ----- | ------------------- | ------------- |
| prop  | <code>string</code> | property name |

## License

MIT
