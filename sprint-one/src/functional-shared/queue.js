var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {}
  };
  
  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  enqueue: function(val) {
    var keys = Object.keys(this.storage);
    //Shift all elements by 1
    for (var i = keys.length - 1; i >= 0; i--) {
      this.storage[i + 1] = this.storage[i];
    }
    //Set first index as val
    this.storage[0] = val;
    return keys.length;
  },
  dequeue: function() {
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


