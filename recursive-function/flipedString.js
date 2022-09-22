function flipedString(word) {
  return filpedStringHelper(word, 0, word.length - 1)
}

function filpedStringHelper(word, start, end) {
  if (start >= end) {
    return true;
  }

  if (word.charAt(start) != word.charAt(end)) {
    return false;
  } else {
    return filpedStringHelper(word, start + 1, end - 1);
  }
}