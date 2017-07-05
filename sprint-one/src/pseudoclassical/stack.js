var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function(val) {
  var keys = Object.keys(this.storage);
  this.storage[keys.length] = val;
  return keys.length;
};

Stack.prototype.pop = function() {
  var keys = Object.keys(this.storage);
  var popped = this.storage[keys.length - 1];
  delete this.storage[keys.length - 1];
  return popped;
};

Stack.prototype.size = function() {
  var keys = Object.keys(this.storage);
  return keys.length;
};

var someInstance = new Stack();