const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }

  add(data) {
    this.rootTree = putIn(this.rootTree, value);

    function putIn(node, value) {
      if(!node) {
        return new Node(value);
      }
      if (node.value === value) {
        return node;
      }
      if (value < node.value) {
        node.left = putIn(node.left, value);
      } else {
        node.right = putIn(node.right, value);
      }
      return node;
    }
    
  }

  has(data) {
    
  }

  find(data) {
    
  }

  remove(data) {
    
  }

  min() {
    
  }

  max() {
    
  }
}

module.exports = {
  BinarySearchTree
};