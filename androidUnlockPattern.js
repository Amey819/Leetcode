// Android devices have a special lock screen with a 3 x 3 grid of dots. Users can set an "unlock pattern" by connecting the dots in a specific sequence, forming a series of joined line segments where each segment's endpoints are two consecutive dots in the sequence. A sequence of k dots is a valid unlock pattern if both of the following are true:

// All the dots in the sequence are distinct.
// If the line segment connecting two consecutive dots in the sequence passes through the center of any other dot, the other dot must have previously appeared in the sequence. No jumps through the center non-selected dots are allowed.
// For example, connecting dots 2 and 9 without dots 5 or 6 appearing beforehand is valid because the line from dot 2 to dot 9 does not pass through the center of either dot 5 or 6.
// However, connecting dots 1 and 3 without dot 2 appearing beforehand is invalid because the line from dot 1 to dot 3 passes through the center of dot 2.
// Here are some example valid and invalid unlock patterns:

// The 1st pattern [4,1,3,6] is invalid because the line connecting dots 1 and 3 pass through dot 2, but dot 2 did not previously appear in the sequence.
// The 2nd pattern [4,1,9,2] is invalid because the line connecting dots 1 and 9 pass through dot 5, but dot 5 did not previously appear in the sequence.
// The 3rd pattern [2,4,1,3,6] is valid because it follows the conditions. The line connecting dots 1 and 3 meets the condition because dot 2 previously appeared in the sequence.
// The 4th pattern [6,5,4,1,9,2] is valid because it follows the conditions. The line connecting dots 1 and 9 meets the condition because dot 5 previously appeared in the sequence.
// Given two integers m and n, return the number of unique and valid unlock patterns of the Android grid lock screen that consist of at least m keys and at most n keys.

// Two unlock patterns are considered unique if there is a dot in one sequence that is not in the other, or the order of the dots is different.

//-------------------------------------------------------

// This problem is intimidating at first glance, but once you understand the jumping logic, the problem boils down to a simple DFS.

// For building the pattern using numbers 1 - 10 without duplicates we use dfs and keep track of numbers we have already used so that we avoid duplicates. Imagine a tree:

// 				1
// 			2 3 4 5 6 7 8 9 used{ 1 }
// 	3 4 5 6 7 8 9 used{ 1, 2 }    2 4 5 6 7 8 9 used{ 1, 3 } ...
// Our base case is when the current pattern length is at n (max length)

// Now we just need to consider the logic around jumping from one number to another number. Jumping here means going from one number to the next requires traversal of another number. We initialize a jumps array where:
// jumps[from][to] = jumped|undefined
// If we are jumping then we make sure the jump is valid by checking that our used set has the number that will be jumped.

// Runtime Complexity: O(n!) the upper bound for the number of patterns

let jumps = Array.from(new Array(10), () => new Array(10));

jumps[1][3] = jumps[3][1] = 2;
jumps[4][6] = jumps[6][4] = 5;
jumps[7][9] = jumps[9][7] = 8;
jumps[1][7] = jumps[7][1] = 4;
jumps[2][8] = jumps[8][2] = 5;
jumps[3][9] = jumps[9][3] = 6;
jumps[1][9] = jumps[9][1] = jumps[3][7] = jumps[7][3] = 5;

var numberOfPatterns = function (m, n) {
  let count = 0;
  buildPattern();
  return count;

  function buildPattern(curr = "", used = new Set()) {
    if (curr.length >= m) {
      count++;
    }
    if (curr.length === n) {
      return;
    }
    for (let i = 1; i < 10; i++) {
      if (used.has(i)) continue;
      let jumping = jumps[i][curr[curr.length - 1]];
      if (jumping) {
        if (!used.has(jumping)) continue;
      }
      used.add(i);
      buildPattern(curr + i, used);
      used.delete(i);
    }
  }
};
