// https://leetcode.com/problems/backspace-string-compare/

// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Time Complexity: O(n)
// Space Comlexity: O(n)
n = Math.max(s.length, t.length);
/**
 * @param {string} s
 * @return {string}
 */
const process = (s) => {
  const res = [];
  for (x of s.split("")) {
    x === "#" ? res.pop() : res.push(x);
  }
  return res.join("");
};
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = (S, T) => process(S) == process(T);
