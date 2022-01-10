// Suppose you are at a party with n people (labeled from 0 to n - 1), and among them, there may exist one celebrity. The definition of a celebrity is that all the other n - 1 people know him/her, but he/she does not know any of them.

// Now you want to find out who the celebrity is or verify that there is not one. The only thing you are allowed to do is to ask questions like: "Hi, A. Do you know B?" to get information about whether A knows B. You need to find out the celebrity (or verify there is not one) by asking as few questions as possible (in the asymptotic sense).

// You are given a helper function bool knows(a, b) which tells you whether A knows B. Implement a function int findCelebrity(n). There will be exactly one celebrity if he/she is in the party. Return the celebrity's label if there is a celebrity in the party. If there is no celebrity, return -1.

// The Idea
// Imagine people lined up and you ask from the first person c whether he/she knows i person, two situations are going to happen:
// he/she doesn't, this means, c person has the potential to become the celebrity while i person does not, we move on
// If he/she does, this automatically mark him/her as unqualified and we can mark i person as our new c, and the people in between automatically disqualified. Why? because in order to become a celebrity, everybody has to know you. and because of the set up, between c & i at least one person doesnt know him/her.
var solution = function (knows) {
  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  return function (n) {
    let c = 0;
    for (let i = 1; i < n; i++) {
      if (knows(c, i)) {
        c = i;
      }
    }

    for (let i = 0; i < n; i++) {
      if (i != c) {
        if (!knows(i, c) || knows(c, i)) {
          return -1;
        }
      }
    }

    return c;
  };
};
