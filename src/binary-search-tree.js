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
    let current = this.rootTree;
    if (!this.rootTree) {
      this.rootTree = new Node(data);
    } else {
      while (current) {
        if (data > current.data) {
          if (!current.right) {
            current.right = new Node(data);
            return;
          }
          current = current.right
        } else {
          if (!current.left) {
            current.left = new Node(data);
            return;
          }
          current= current.left;
        }
      }
    }
  }

  has(data) {
    let current = this.rootTree;
    if (!this.rootTree) {
      return false;
    } else {
      while (current) {
        if (data === current.data) {
       return true;
        } else if (data > current.data) {
          if (!current.right) {
            return false;
          }
          current = current.right;
        } else {
          if(!current.left) {
            return false
          }
         current = current.left;
        }
      }
      return false;
    }
  }

  find(data) {
    let current = this.rootTree;
    if (!this.rootTree) {
      return null;
    } else {
      while (current) {
        if (data === current.data) {
         return current;
        } else if (data > current.data) {
          if (!current.right) {
            return null;
          }
          current = current.right;
        } else {
          if(!current.left) {
            return null;
          }
         current = current.left;
        }
      }
      return null;
    }
  }

  remove(data) {
    if (!this.rootTree) return null;
  }

  min() {
    let current = this.rootTree;
    while (current.left) {
      current = current.left
    }
    return current.data
  }

  max() {
    let current = this.rootTree;
    while (current.right) {
      current = current.right
    }
    return current.data
  }
}




module.exports = {
  BinarySearchTree
};