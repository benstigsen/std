// deno-fmt-ignore-file
// deno-lint-ignore-file

// Copyright Joyent and Node contributors. All rights reserved. MIT license.
// Taken from Node 16.13.0
// This file is automatically generated by "node/_tools/setup.ts". Do not modify this file manually

'use strict';
require('../common');

const assert = require('assert');
const { Readable } = require('stream');

const readable = new Readable();

assert.throws(
  () => {
    readable.read();
  },
  {
    code: 'ERR_METHOD_NOT_IMPLEMENTED',
    name: 'Error',
    message: 'The _read() method is not implemented'
  }
);