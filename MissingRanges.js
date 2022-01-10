// You are given an inclusive range [lower, upper] and a sorted unique integer array nums, where all elements are in the inclusive range.

// A number x is considered missing if x is in the range [lower, upper] and x is not in nums.

// Return the smallest sorted list of ranges that cover every missing number exactly. That is, no element of nums is in any of the ranges, and each missing number is in one of the ranges.

// Each range [a,b] in the list should be output as:

// "a->b" if a != b
// "a" if a == b

function findMissingRanges(nums, lower, upper) {
  const res = [];
  nums = [lower - 1, ...nums, upper + 1];

  for (let i = 1; i < nums.length; i++) {
    const diff = nums[i] - nums[i - 1];

    if (diff === 2) {
      res.push(`${nums[i - 1] + 1}`);
    } else if (diff > 2) {
      res.push(`${nums[i - 1] + 1}->${nums[i] - 1}`);
    }
  }

  return res;
}
