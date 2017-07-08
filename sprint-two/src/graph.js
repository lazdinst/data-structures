

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
  // [ {id: 2, edges: [3  ]},  {id: 3, edges: [ 2 ]}, {}]
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
  
  
  this.nodes = this.nodes.filter(function(currentNode) {
    return currentNode.id !== node;
  });
  
  if (this.edges.length) {
    var edgesToRemove = this.edges.filter(function(edge) {
      return edge[0] === node;
    });
    Graph.prototype.removeEdge.call(this, edgesToRemove[0][0], edgesToRemove[0][1]);
  }
  
  
  // nodesEdges.forEach(function(currentEdge) {
  //   //[2,3]
  //   removeEdge(currentEdge, node);
  // });

// debugger;

//   var nodeEdges = this.nodes.find(function(currentNode) {
//     return currentNode.id === node;
//   }).edges;

//   if (nodeEdges.length) {
//     for (var i = 0; i < nodeEdges.length; i++) {
//       currentEdgeToRemove = nodeEdges[i];
//       Graph.prototype.removeEdge.apply(this, [currentEdgeToRemove, node]);
//     }
//   }
  

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
  
//======================= OLD CODE =================================
  // return result === undefined ? false : true;

  //  if(currentNode.edges.includes(fromNode) && )
  
  // var hasToNode = this.nodes.filter(function(currentNode) {
  //   return currentNode.id === fromNode; 
  // })[0].edges.includes(toNode);

  // var hasFromNode = this.nodes.filter(function(currentNode) {
  //   return currentNode.id === toNode; 
  // })[0].edges.includes(fromNode);
  
  // return hasToNode && hasFromNode;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode]);
  this.edges.push([toNode, fromNode]);

//======================= OLD CODE =================================
  // this.nodes.forEach(function(currentNode) {
  //   if (currentNode.id === fromNode) {
  //     currentNode.edges.push(toNode);
  //   }
  //   if (currentNode.id === toNode) {
  //     currentNode.edges.push(fromNode);
  //   }
  // });
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
  // filter out all edges that have both forward or backward
  // set new this.edges to filtered arrray

//======================= OLD CODE =================================
  // this.nodes.forEach(function(currentNode) {
  //   if (currentNode.id === fromNode) {
  //     var toNodeIndex = currentNode.edges.indexOf(toNode);
  //     currentNode.edges.splice(toNodeIndex, 1);
  //   }
  //   if (currentNode.id === toNode) {
  //     var fromNodeIndex = currentNode.edges.indexOf(fromNode);
  //     currentNode.edges.splice(fromNodeIndex, 1);
  //   }
  // });
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  debugger;

  this.nodes.forEach(function(node) {
    cb(node.id);
  });
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */