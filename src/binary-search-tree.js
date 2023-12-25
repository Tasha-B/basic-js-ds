const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

class BinarySearchTree {
  constructor() {
    this.base = null;
  }
  root() {
    return this.base;
  }

  add(data) {
    this.base = addNode(this.base, data);
    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return search(this.base, data);
    function search(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      return data < node.data
        ? search(node.left, data)
        : search(node.right, data);
    }
  }

  find(data) {
    return findNode(this.base, data);
    function findNode(node, data) {
      if (!node) return null;
      if (node.data === data) return node;
      return data < node.data
        ? findNode(node.left, data)
        : findNode(node.right, data);
    }
  }

  remove(data) {
    this.base = delNode(this.base, data);

    function delNode(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = delNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = delNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;
        node.right = delNode(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.base) {
      return null;
    }

    let node = this.base;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.base) {
      return null;
    }

    let node = this.base;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
