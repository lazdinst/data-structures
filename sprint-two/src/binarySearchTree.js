var BinarySearchTree = function(value) {
  var tree = {};
  
  tree.root = value;
  tree.left = null;
  tree.right = null; 
  tree.insert = function(value) {
  //If val < root
    if (this.root > value) {
      // if this.left !== null/
      if (this.left === null) {
        //add node to this.left
        this.left = BinarySearchTree(value);
      } else {
        //enter recursion
        traverseTree(this.left);
      }
    } else if (this.root < value) {
        // if this.right !== Null
        if (this.right === null) {
          //add node to this.right
          this.right = BinarySearchTree(value);
        } else {
          //enter recursion
          traverseTree(this.right);
        }
    }
  
    var traverseTree = function(value) {
      if (value < this.root) { 
        this.left = BinarySearchTree(value);
      } else if (value > this.root) { 
        this.right = BinarySearchTree(value);
      }
      return;
    };
  };
    
  tree.contains = function(value) {
    
    
    //returns boolean
  };

  tree.depthFirstLog = function(cb) {
    //Will call callback on each node in the tree
    
  };

  return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */