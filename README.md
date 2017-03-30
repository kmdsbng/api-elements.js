# Fury Apiary Blueprint Parser

[![Build Status](https://img.shields.io/travis/apiaryio/fury-adapter-apiary-blueprint-parser.svg)](https://travis-ci.org/apiaryio/fury-adapter-apiary-blueprint-parser)
[![Test Coverage](https://img.shields.io/codeclimate/coverage/github/apiaryio/fury-adapter-apiary-blueprint-parser.svg)](https://codeclimate.com/github/apiaryio/fury-adapter-apiary-blueprint-parser/coverage)
[![NPM version](https://img.shields.io/npm/v/fury-adapter-apiary-blueprint-parser.svg)](https://www.npmjs.org/package/fury-adapter-apiary-blueprint-parser)
[![License](https://img.shields.io/npm/l/fury-adapter-apiary-blueprint-parser.svg)](https://www.npmjs.org/package/fury-adapter-apiary-blueprint-parser)

This adapter provides support for parsing the deprecated [Apiary
Blueprint](https://github.com/apiaryio/blueprint-parser) format in
[Fury.js](https://github.com/apiaryio/fury.js). *We do not recommend using this
adapter in any new development, it's only used for backwards compatibility with
the legacy format.

## Installation

```shell
$ npm install fury-adapter-apiary-blueprint-parser
```

## Usage

```javascript
import fury from 'fury';
import apiaryBlueprintAdapter from 'fury-adapter-apiary-blueprint-parser';

fury.use(apiaryBlueprintAdapter);

fury.parse({source: '--- Your Legacy Apiary Blueprint'}, (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  // The returned `result` is a Minim parse result element.
  console.log(result.api.title);
});
```
