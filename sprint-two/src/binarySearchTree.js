var BinarySearchTree = function(value) {
  var tree = {};
  
  tree.root = value;
  tree.left = null;
  tree.right = null;
   
  tree.insert = function(value) {debugger;
    var traverseTree = function(node, value) {
      if (value < node.root) { 
        node.left = BinarySearchTree(value);
      } else if (value > node.root) { 
        node.right = BinarySearchTree(value);
      }
      return;
    };
    
    if (this.root > value) {
      // if this.left !== null/
      if (this.left === null) {
        //add node to this.left
        this.left = BinarySearchTree(value);
      } else {
        //enter recursion
        traverseTree(this.left, value);
      }
    } else if (this.root < value) {
        // if this.right !== Null
      if (this.right === null) {
        this.right = BinarySearchTree(value);
      } else {
        traverseTree(this.right, value);
      }
        // if (this.right === null) {
        //   //add node to this.right
        //   this.right = BinarySearchTree(value);
        // } else {
        //   //enter recursion
        //   traverseTree(this.right);
        // }
    }
  
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