// You are given a string s and an array of strings words. You should add a closed pair of bold tag <b> and </b> to wrap the substrings in s that exist in words. If two such substrings overlap, you should wrap them together with only one pair of closed bold-tag. If two substrings wrapped by bold tags are consecutive, you should combine them.

// Return s after adding the bold tags.

var addBoldTag = function (s, dict) {
  let marked = new Array(s.length).fill(false);

  for (let word of dict) {
    let start = s.indexOf(word);
    while (start > -1) {
      let end = start + word.length;
      for (let i = start; i < end; i++) {
        marked[i] = true;
      }
      start = s.indexOf(word, start + 1);
    }
  }
  let res = "";
  for (let i = 0; i < s.length; i++) {
    if (marked[i] && (i == 0 || !marked[i - 1])) {
      res += "<b>";
    }
    res += s[i];
    if (marked[i] && (i === s.length - 1 || !marked[i + 1])) {
      res += "</b>";
    }
  }
  return res;
};
