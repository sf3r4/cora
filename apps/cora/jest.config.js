const { defaults } = require('jest-config');

module.exports = {
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFiles: ['./init-tests.js'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy'
  }
};
