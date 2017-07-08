var BinarySearchTree = function(value) {
  var tree = {};
  
  tree.value = value;
  tree.left = null;
  tree.right = null;
   
  tree.insert = function(value) {
    var traverseTreeCompareValue = function(node, value) {
      if (value < node.value) { 
        node.left = BinarySearchTree(value);
      } else if (value > node.value) { 
        node.right = BinarySearchTree(value);
      }
      return;
    };
    
    if (this.value > value) {
      // if this.left !== null/
      if (this.left === null) {
        //add node to this.left
        this.left = BinarySearchTree(value);
      } else {
        //enter recursion
        traverseTreeCompareValue(this.left, value);
      }
    } else if (this.value < value) {
        // if this.right !== Null
      if (this.right === null) {
        this.right = BinarySearchTree(value);
      } else {
        traverseTreeCompareValue(this.right, value);
      }
    }
  };
  
//Ask tech mentor to help explain the problem we were facing when it wwas returning true
// but then not returning true.
//We had to push the value of true into result and return result to get it to work.

  tree.contains = function(value) {
    var result;
    var searchNodesForValue = function(node, value) {
      //If the value matches the master root
      if (node.value === value) {
        //return true;
        result = true;
        return true;
      }
      // if this.value > value
      if (node.value > value) {
        //if this.left !== null
        if (node.left !== null) {
          //Search Nodes with this.left as the node
          searchNodesForValue(node.left, value);
        } else {
          //return false
          result = false;
          return false;
        }
      // else if this.value < value
      } else if (node.value < value) {
        //if this.right !== null
        if (node.right !== null) {
          //Search Nodes with this.right as the node
          searchNodesForValue(node.right, value);
        } else {
          //return false
          result = false;  
          return false;
        }
      }
    };
    searchNodesForValue(this, value);
    return result;
  };

  tree.depthFirstLog = function(cb) {
    //Define an empty array
    var results = [];
    //define recursive function
    var traverseTreeGetValues = function(node) {
      if (node.value) {
        results.push(cb(node.value));
      }
      // check if this.left is not null
      if (node.left !== null) {
        // run traverse trees on left
        traverseTreeGetValues(node.left);
      }
      // check if this.right is not null
      if (node.right !== null) {
        // run traverse trees on left
        traverseTreeGetValues(node.right);
      }
      
    };
    traverseTreeGetValues(this);
    
    //Run a recursive function on every node in tree
    return results;
  };

  return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */