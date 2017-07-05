var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.enqueue = function(value) {
    var keys = Object.keys(storage);
    for (var i = keys.length - 1; i >= 0; i--) {
      var target = storage[i];
      storage[i + 1] = target;
    }
    storage[0] = value;
  };

  someInstance.dequeue = function() {
    var keys = Object.keys(storage);
    var popped = storage[keys.length - 1];
    delete storage[keys.length - 1];
    return popped;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
