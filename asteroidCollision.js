// We are given an array asteroids of integers representing asteroids in a row.

// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

var asteroidCollision = function (asteroids) {
  // [-1,-2,10,13,1,-25] case1
  // [10,15,20,-5,-10,-25] case 2
  // [1,2,3,4,5,5]
  // [-12,-8,-7,8,10,12]
  // [-1,-2,10,13]
  // continue till next is either larger or in same direction
  // so if - comes if less than the last element if pos then we dont even add
  // condition comes into picture only when sign opposite
  var result = [asteroids[0]]; // [-1]
  for (let i = 1; i < asteroids.length; i++) {
    var current = result[result.length - 1]; // -1 -2 10 13 -25
    if (!checkSign(current, asteroids[i])) {
      if (current > 0 && asteroids[i] < 0) {
        while (Math.abs(asteroids[i]) >= current) {
          // 25 > 1
          result.pop();
          current = result[result.length() - 1];
        }
      }
    }
    result.push(asteroids[i]);
  }

  function checkSign(current, next) {
    return (current > 0 && next > 0) || (current < 0 && next < 0);
  }
};
