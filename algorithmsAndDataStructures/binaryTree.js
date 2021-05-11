'use strict'

/* ========================     TREE     ========================== */
class Tree {
  constructor() {
    this.root = null
  }

  addValue(value) {
    let node = new Node(value)
    if (this.root == null) {
      this.root = node
    } else {
      this.root.addNode(node)
    }
  }

  // Inorder Traversal
  travers() {
    this.root.visit()
  }
}

/* ========================     NODE     ========================== */
class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  //   add new node
  addNode(node) {
    if (node.value < this.value) {
      if (this.left == null) {
        this.left = node
      } else {
        this.left.addNode(node)
      }
    } else if (node.value > this.value) {
      if (this.right == null) {
        this.right = node
      } else {
        this.right.addNode(node)
      }
    }
  }

  // visit a node
  visit() {
    // Recursively got left
    if (this.left != null) {
      this.left.visit()
    }

    console.log(this.value)

    // Recursively got right
    if (this.right != null) {
      this.right.visit()
    }
  }
}

// BUILD TREE

const tree = new Tree()

tree.addValue(1)
tree.addValue(5)
tree.addValue(3)
tree.addValue(7)
tree.addValue(6)

tree.travers()

console.log(tree)
