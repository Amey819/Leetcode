// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

function findOrder(numCourses, prerequisites) {
  const seen = new Set();
  const seeing = new Set();
  const res = [];

  const adj = [...Array(numCourses)].map((r) => []);
  for (let [u, v] of prerequisites) {
    adj[v].push(u);
  }

  for (let c = 0; c < numCourses; c++) {
    if (!dfs(c)) {
      return [];
    }
  }
  return res.reverse();

  function dfs(v) {
    if (seen.has(v)) {
      return true;
    }
    if (seeing.has(v)) {
      return false;
    }

    seeing.add(v);
    for (let nv of adj[v]) {
      if (!dfs(nv)) {
        return false;
      }
    }
    seeing.delete(v);
    seen.add(v);
    res.push(v);
    return true;
  }
}
