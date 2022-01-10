// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

var canFinish = function (numCourses, prerequisites) {
  const indegree = new Array(numCourses).fill(0); // [0,0,0,0]
  const queue = [];
  /**
   * The goal is to find whether the course graph has cycles.
   *
   * We are looking for the number of indgree for each course and
   * put the course with no indegree into the queue. As we go
   * through the courses in queue, we break off the dependency(edge)
   * from the current course in queue in all the prerequisite
   * pairs. Then we put all the courses with zero indegree into
   * the queue. Repeat until the queue is empty. We maintain a
   * count and increment it each time we pop the queue. The count
   * will equal to the number of courses when there's no cycle and it
   * is possible to take all the courses.
   *
   * directed graph denotes: [prereq] --> [course]
   */
  for (const [course, prereq] of prerequisites) {
    indegree[course] += 1; // [0,0,0,1]
  }
  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) {
      queue.push(i); // find the courses not dependent on any course
    }
  }
  let count = 0;
  // [[1,0],[2,0],[3,1]]
  while (queue.length !== 0) {
    const c = queue.pop(); // 0  1
    count += 1;

    for (const [course, prereq] of prerequisites) {
      if (prereq === c) {
        indegree[course] -= 1; // [0,0,0,0]
        if (indegree[course] === 0) {
          queue.push(course);
        } // [1,2,3]
      }
    }
  }
  return count === numCourses;
};
