var Promise = require('bluebird');
var Database = require('mongojs/lib/database');
var moduleId = require.resolve('mongojs/lib/database');

Database.prototype = Promise.promisifyAll(Database.prototype);
require.cache[moduleId].exports = Database;

var proto = Database.prototype;

proto.listCollectionsAsync = function() {
  var self = this;

  return Promise.fromCallback(function(callback) {
    proto.listCollections.call(self, callback);
  });
}
