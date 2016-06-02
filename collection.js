var Promise = require('bluebird');
var Collection = require('mongojs/lib/collection');
var moduleId = require.resolve('mongojs/lib/collection');

Collection.prototype = Promise.promisifyAll(Collection.prototype);
require.cache[moduleId].exports = Collection;

