var BinarySearchTree = function(value) {
  var tree = {};
  
  tree.value = value;
  tree.left = null;
  tree.right = null;
   
  tree.insert = function(value) {
    var traverseTree = function(node, value) {
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
        traverseTree(this.left, value);
      }
    } else if (this.value < value) {
        // if this.right !== Null
      if (this.right === null) {
        this.right = BinarySearchTree(value);
      } else {
        traverseTree(this.right, value);
      }
    }
  };
    
  tree.contains = function(value) {
    var searchNodesForValue = function(node, value) {debugger;
      //If the value matches the master root
      if (node.value === value) {
        //return true;
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
          return false;
        }
      }
    };
    return searchNodesForValue(this, value);
  };

  tree.depthFirstLog = function(cb) {
    //Will call callback on each node in the tree
    
  };

  return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */