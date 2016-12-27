# touchp

Simple touchp with promise support 🙀

## Install

This package is not hosted on the NPM registry.
You can install directly from GitHub using the npm or yarn client :

```bash
$ npm install alexbinary/touchp
# or
$ yarn add alexbinary/touchp
```

This will install the latest version from the `master` branch, which sould always be the latest stable version.

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
