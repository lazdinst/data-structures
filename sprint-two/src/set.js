var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me ==== Need to change this to an object with values as the ids
  return set;
};
//Take the value and use it as an id in an object so that it is constant time

var setPrototype = {};

setPrototype.add = function(item) {
  if (this._storage.indexOf(item) < 0) {
    this._storage.push(item);
  } else {
    throw Error(item + ' is already in the set!');
  }
};

setPrototype.contains = function(item) {
  if (this._storage.indexOf(item) >= 0) {
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item) {
  var removeIndex = this._storage.indexOf(item);
  if (removeIndex >= 0) {
    this._storage.splice(removeIndex, 1);
  }
  return 'Happy Days';
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
