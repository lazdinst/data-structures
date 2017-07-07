
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(index) === undefined) {
    // no bucket found
    var bucket = [];
    var tuple = [k, v];
    bucket.push(tuple);
    this._storage.set(index, bucket);
  } else {
    var bucket = this._storage.get(index);
    
    if (HashTable.prototype.retrieve.call(this, k)) {
      // rewrite tuple
      // filter everything that doesn't have the key return array
      var filteredBucket = bucket.filter(function(tuple) {
        return tuple[0] !== k;
      });
      // push the new tuple into the bucket
      filteredBucket.push([k, v]);
      // set that bucket as the bucket
      this._storage.set(index, filteredBucket);
    } else {
      // new tuple
      var tuple = [k, v];
      bucket.push(tuple);
      this._storage.set(index, bucket);
    }
  }
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket !== undefined) {
    var tuple = bucket.find(function(tuple) {
      return tuple[0] === k;
    });
    return tuple ? tuple[1] : undefined;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  
  var filteredBucket = bucket.filter(function(tuple) {
    return tuple[0] !== k;
  }); 
  this._storage.set(index, filteredBucket); 
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


