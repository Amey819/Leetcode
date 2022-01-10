// Given the root of a complete binary tree, return the number of the nodes in the tree.

// According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

// Design an algorithm that runs in less than O(n) time complexity.

// Time Complexity = O(logN * logN). Because at each step during the binary search we're traversing logN height. At end of each binary search step we're discarding half the tree.
var countNodes = function (root) {
  function leftDepth(node) {
    if (!node) return 0;
    return leftDepth(node.left) + 1;
  }

  function rightDepth(node) {
    if (!node) return 0;
    return rightDepth(node.right) + 1;
  }

  function traverse(node) {
    const leftLen = leftDepth(node);
    const rightLen = rightDepth(node);

    if (leftLen === rightLen) return Math.pow(2, leftLen) - 1;
    return traverse(node.left) + traverse(node.right) + 1;
  }
  return traverse(root);
};
