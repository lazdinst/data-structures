var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(val) {
  var keys = Object.keys(this.storage);
  this.storage[keys.length] = val;
  return keys.length;
};

stackMethods.pop = function() {
  var keys = Object.keys(this.storage);
  var popped = this.storage[keys.length - 1];
  delete this.storage[keys.length - 1];
  return popped;
};

stackMethods.size = function() {
  var keys = Object.keys(this.storage);
  return keys.length;
};

