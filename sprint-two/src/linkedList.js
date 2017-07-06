var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null; 
  

  list.addToTail = function(value) {
    // list.tail = value;
    if (list.head === null) {
      list.head = new Node(value);
      list.tail = list.head;
    } else if (list.head === list.tail) {
      var node = new Node(value);
      list.tail = node;
      list.head.next = list.tail;
    } else {
      // var node = new Node(value);
      // list.tail = node;
      //Do Something
    }

    // node.next = null;
  };

  list.removeHead = function() {
    var newHead = list.head.next;
    var formerHead = list.head.value;
    if (list.head.next === list.tail) {
      list.head = newHead;      
      
      // list.tail = list.head;
    } else {
      // list.head.next = list.head.next.next;  
      // list.head = newHead;
    }
    return formerHead;
  };

  list.contains = function(target) {
    var nextNode = list.head;
 
    while (nextNode !== null) {
      if (nextNode.value === target) {
        return true;
      } 
      nextNode = nextNode.next;
    }

    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

