

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];

  // [ {id: 2, edges: [3  ]},  {id: 3, edges: [ 2 ]}, {}]

  // Adjacency List ex [1,2]
  // Adjacency Matrix [  ]
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {id: node, edges: []};
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
  
  // nodesEdges.forEach(function(currentEdge) {
  //   //[2,3]
  //   removeEdge(currentEdge, node);
  // });
  var nodeEdges = this.nodes.find(function(currentNode) {
    return currentNode.id === node;
  }).edges;

  if (nodeEdges.length) {
    for (var i = 0; i < nodeEdges.length; i++) {
      currentEdgeToRemove = nodeEdges[i];
      Graph.prototype.removeEdge.apply(this, [currentEdgeToRemove, node]);
    }
  }

  this.nodes = this.nodes.filter(function(currentNode) {
    return currentNode.id !== node;
  });
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //  if(currentNode.edges.includes(fromNode) && )
  var hasToNode = this.nodes.filter(function(currentNode) {
    return currentNode.id === fromNode; 
  })[0].edges.includes(toNode);

  var hasFromNode = this.nodes.filter(function(currentNode) {
    return currentNode.id === toNode; 
  })[0].edges.includes(fromNode);
  
  return hasToNode && hasFromNode;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes.forEach(function(currentNode) {
    if (currentNode.id === fromNode) {
      currentNode.edges.push(toNode);
    }
    if (currentNode.id === toNode) {
      currentNode.edges.push(fromNode);
    }
  });
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.nodes.forEach(function(currentNode) {
    if (currentNode.id === fromNode) {
      var toNodeIndex = currentNode.edges.indexOf(toNode);
      currentNode.edges.splice(toNodeIndex, 1);
    }
    if (currentNode.id === toNode) {
      var fromNodeIndex = currentNode.edges.indexOf(fromNode);
      currentNode.edges.splice(fromNodeIndex, 1);
    }
  });
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */