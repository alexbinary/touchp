# touchp

Simple touchp with promise support 🙀

## Install

Install using npm or yarn :

```bash
$ npm install @alexbinary/touchp
# or
$ yarn add @alexbinary/touchp
```

## Usage

```javascript
let touchp = require('@alexbinary/touchp')

// promise
touchp('/foo/bar').then(() => {
  console.log('file created')
})

// callback
touchp('/foo/bar', (err) => {
  if (!err) {
    console.log('file created')
  }
})

// sync
touchp.sync('/foo/bar')
console.log('file created')
```

## Documentation

```javascript
let touchp = require('@alexbinary/touchp')
```

### touchp(filepath[, callback])

Creates an empty file at `filepath`.
Creates intermediary directories if necessary.

`callback` is an optional node style callback with no arguments except for a possible error.  
Always returns a Promise which resolves with no arguments.

### touchp.sync(filepath)

Synchronous version. Returns `undefined`.

## Licence

MIT
