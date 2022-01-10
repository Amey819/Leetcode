// Suppose you have n integers labeled 1 through n. A permutation of those n integers perm (1-indexed) is considered a beautiful arrangement if for every i (1 <= i <= n), either of the following is true:

// perm[i] is divisible by i.
// i is divisible by perm[i].
// Given an integer n, return the number of the beautiful arrangements that you can construct.

// Runtime: 148 ms, faster than 88.40% of JavaScript online submissions for Beautiful Arrangement.
// Memory Usage: 39.2 MB, less than 49.72% of JavaScript online submissions for Beautiful Arrangement.

var countArrangement = function (n) {
  const visited = Array.from({ length: n }, () => 0);
  let count = 0;

  function findPerm(n, i) {
    if (i >= n) {
      return (count += 1);
    }
    for (let j = 1; j < n + 1; j++) {
      if (visited[j - 1] === 0 && (j % (i + 1) === 0 || (i + 1) % j === 0)) {
        visited[j - 1] = 1;
        findPerm(n, i + 1);
        visited[j - 1] = 0;
      }
    }
  }

  findPerm(n, 0);
  return count;
};
