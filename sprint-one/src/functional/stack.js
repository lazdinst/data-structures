var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
  // add an element to the top of the stack (storage)
    storage[Object.keys(storage).length] = value;
  };

  someInstance.pop = function() {
    //removes the top element of the stack (storage)
    var keys = Object.keys(storage);
    var popped = storage[keys.length - 1];
    delete storage[keys.length - 1];
    return popped;
  };

  someInstance.size = function() {
    //Returns the size of storage 
    return Object.keys(storage).length;
  };

  return someInstance;
};