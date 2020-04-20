# Fury Adapter JSON Serializer

## Usage

```javascript
const jsonSerializer = require('fury-adapter-json-serializer');
fury.use(jsonSerializer);

const mediaType = 'application/json';
fury.serialize({ api, mediaType }, (error, body) => {
  console.log(body);
});
```
