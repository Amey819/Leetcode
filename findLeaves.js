// Given the root of a binary tree, collect a tree's nodes as if you were doing this:

// Collect all the leaf nodes.
// Remove all the leaf nodes.
// Repeat until the tree is empty.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// var findLeaves = function(root) {
//     // from root to end leaf
//     // get the height of the tree
//     // then when you reach null -> assign key value pairs
//     // key being the height from bottom : [node on that height]
//     // then we basically sort the dictionary based on key
//     // for value print it out an return

// };

var findLeaves = function (root) {
  let ans = [];

  let populateLeaves = (root) => {
    if (root == null) return 0;
    let leftDepth = populateLeaves(root.left);
    let rightDepth = populateLeaves(root.right);
    let d = Math.max(leftDepth, rightDepth);
    ans[d] = ans[d] || [];
    ans[d].push(root.val);
    return d + 1;
  };
  populateLeaves(root);
  return ans;
};
