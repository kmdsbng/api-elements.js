const { Fury } = require('fury');
const { expect } = require('chai');
const serializeJSON = require('../lib/serializeJSON');

const { minim: namespace } = new Fury();

describe('#serializeJSON', () => {
  it('can serialize a primitive element with value', () => {
    const element = new namespace.elements.String('hello world');

    expect(serializeJSON(element)).to.equal('"hello world"');
  });

  it('can serialize a primitive element with default value', () => {
    const element = new namespace.elements.String();
    element.attributes.set('default', 'hello world');

    expect(serializeJSON(element)).to.equal('"hello world"');
  });

  it('can serialize an element with references via parent tree', () => {
    const element = new namespace.elements.Element();
    element.element = 'message';

    new namespace.elements.Category([
      new namespace.elements.Category([
        new namespace.elements.String('hello world', { id: 'message' }),
      ], { classes: ['dataStructures'] }),
      element,
    ]).freeze();

    expect(serializeJSON(element)).to.equal('"hello world"');
  });
});
