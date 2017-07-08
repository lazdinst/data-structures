var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = Tree(value);
  this.children.push(node);
  return node.value;
};

treeMethods.contains = function(target) {
  var doesContainValue = false;
  if (this.value === target) {
    doesContainValue = true;
    return doesContainValue;
  }
  
  var transverse = function(parent) {
    if (parent.children.length !== 0 ) {
      parent.children.forEach(function(child) {
        if (child.value === target) {
          doesContainValue = true;
          return;
        } else {
          transverse(child);
        }
      });  
    }    
  };
  
  transverse(this);
  return doesContainValue;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */