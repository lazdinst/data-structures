
// Usage:
//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'

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
//Right now we are handling our if conditionlsa correctly
//Retrivew is 
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket !== undefined) {
    var tuple = bucket.find(function(tuple) {
      return tuple[0] === k;
    });
    return tuple ? tuple[1] : undefined;
  } else if (bucket.length === 0) {
    return undefined;
  } else {
    return false;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  
  var filteredBucket = bucket.filter(function(tuple) {
    return tuple[0] !== k;
  });
  
  
  this._storage.set(index, filteredBucket); 
  debugger;
  
  // // If it has the tuple
  // // debugger;
  // //We have found the tuple
  // if (1) { //HashTable.prototype.retrieve.call(this, k)
  //   //filter the bucket for all tuples without key of k
    
  //   //push the filtered bucket back into the bucket at index.
  // } else {
  //   //Do Nothing, nothing to remove if it doesnt exist.
  // }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


