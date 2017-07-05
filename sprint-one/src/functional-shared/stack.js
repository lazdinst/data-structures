var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {}
  };
  // extending someInstance with the stack methods _.extend
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function(val) {
    var keys = Object.keys(this.storage);
    this.storage[keys.length] = val;
    return this.storage[keys.length - 1];
  },
  pop: function() {
    var keys = Object.keys(this.storage);
    var popped = this.storage[keys.length - 1];
    delete this.storage[keys.length - 1];
    return popped;
  },
  size: function() {
    var keys = Object.keys(this.storage);
    return keys.length;
  }
};


