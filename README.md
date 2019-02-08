ast-metadata-inferer
======================
[![Build Status](https://travis-ci.org/amilajack/ast-metadata-inferer.svg?branch=master&maxAge=2592)](https://travis-ci.org/amilajack/ast-metadata-inferer)

A collection of metadata about browser API's. This collection is intended for tools that analyze JS. It currently supports `3993` compatibility records.

For all the API's it supports, it gives the
* AST node type of the API (`MemberExpression`, `NewExpression`, or `CallExpression`)
* If the API is statically invoked
* The kind of API it is

## Example
```js
import AstMetadata from 'ast-metadata-inferer';

const [firstRecord] = AstMetadata;
console.log(firstRecord);
// {
//   "apiType":"js-api",
//   "type":"js-api",
//   "protoChain":["document","querySelector"],
//   "protoChainId":"document.querySelector",
//   "astNodeTypes":["MemberExpression"],
//   "isStatic":true,
//   "compat": {
//     support: {
//       chrome: {
//         version_added: "14"
//       },
//       chrome_android: { version_added: "18" },
//       ...
//     }
//   }
// }
```
