var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {id: node};
  this.nodes.push(newNode);

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.map(function(currentNode) {
    return currentNode.id;
  }).includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  this.nodes = this.nodes.filter(function(currentNode) {
    return currentNode.id !== node;
  });
  
  if (this.edges.length) {
    var edgesToRemove = this.edges.filter(function(edge) {
      return edge[0] === node;
    });
    Graph.prototype.removeEdge.call(this, edgesToRemove[0][0], edgesToRemove[0][1]);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  var hasFromNode = this.edges.filter(function(edgeArray) {
    return edgeArray[0] === fromNode;
  });

  var hasToNode = this.edges.filter(function(edgeArray) {
    return edgeArray[0] === toNode;
  });

  return hasToNode.length && hasFromNode.length ? true : false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode]);
  this.edges.push([toNode, fromNode]);
  return [fromNode, toNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // create array [fromNode, toNode]
  var forwardEdge = [fromNode, toNode];
  var reverseEdge = [toNode, fromNode];
  // filter on the this.edges
  var result = this.edges.filter(function(edge) {
    return JSON.stringify(edge) !== JSON.stringify(forwardEdge) && JSON.stringify(edge) !== JSON.stringify(reverseEdge);
  });
  this.edges = result;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(function(node) {
    cb(node.id);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */