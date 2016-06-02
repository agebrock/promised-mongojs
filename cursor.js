var Promise = require('bluebird');
var Cursor = require('mongojs/lib/cursor');
var moduleId = require.resolve('mongojs/lib/cursor');
var self = require.cache[moduleId].exports = Cursor;

Cursor.prototype = Promise.promisifyAll(Cursor.prototype);

self.prototype.eachAsync = function(iterator) {
  return new Promise((resolve, reject) => {
    var nextStep = () => {
      this.next(function(error, value) {
        if (error) {
          return reject(error);
        }

        if (!value) {
          return resolve();
        }
        iterator(value, function() {
          setImmediate(nextStep);
        });
      });
    };

    nextStep();
  });
}
