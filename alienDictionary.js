// There is a new alien language that uses the English alphabet. However, the order among the letters is unknown to you.

// You are given a list of strings words from the alien language's dictionary, where the strings in words are sorted lexicographically by the rules of this new language.

// Return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules. If there is no solution, return "". If there are multiple solutions, return any of them.

// A string s is lexicographically smaller than a string t if at the first letter where they differ, the letter in s comes before the letter in t in the alien language. If the first min(s.length, t.length) letters are the same, then s is smaller if and only if s.length < t.length.

function alienOrder(words) {
  var graph = {};
  words.forEach((w) => w.split("").forEach((ch) => (graph[ch] = new Set())));
  words.reduce((prev, curr) => {
    for (var i = 0; i < Math.min(prev.length, curr.length); i++) {
      if (prev[i] !== curr[i]) {
        graph[prev[i]].add(curr[i]);
        break;
      }
    }
    return curr;
  });

  var marked = {},
    visited = {};
  var str = "";
  var hasCycle = false;

  Object.keys(graph).map(visit);
  return hasCycle ? "" : str;

  function visit(n) {
    if (marked[n]) return;

    if (visited[n]) {
      hasCycle = true;
      return;
    }

    visited[n] = true;
    graph[n].forEach(visit);
    marked[n] = true;
    str = n + str;
  }
}
