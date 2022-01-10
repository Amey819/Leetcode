// Given an array of n integers nums and an integer target, find the number of index triplets i, j, k with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.

// The key to understanding this one is the purpose of the result += right - left line. Essentially, because the array is sorted, once we find a combination that is less than our target, ALL numbers between left and right ARE ALSO combinations less than our target. Instead of iterating through them just subtract left from right to get the correct count.
var threeSumSmaller = function (arr, target) {
  let result = 0;
  let length = arr.length;
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < length; i++) {
    let left = i + 1;
    let right = length - 1;
    while (left < right) {
      let currentSum = arr[i] + arr[left] + arr[right];
      if (currentSum < target) {
        result += right - left;
        console.log("result", result);
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};
