var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this._storage[item]) {
    this._storage[item] = item;
    return item;
  } else {
    throw Error(item + ' is already in the set!');
  }
};

setPrototype.contains = function(item) {
  if (this._storage[item]) {
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item) {
  if (this._storage[item]) {
    delete this._storage[item];
  } else {
    throw Error(item + ' is not in the set!');
  }
  return 'Happy Days';
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
