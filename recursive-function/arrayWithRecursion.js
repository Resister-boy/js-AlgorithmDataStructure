function swap(strArr, index1, index2) {
  let temp = strArr[index1]
  strArr[index1] = strArr[index2]
  strArr[index2] = temp;
}

function permute(strArr, start, end) {
  if (start == end) {
    console.log(strArr)
  } else {
    for (let i = start; i < end; i++) {
      swap(strArr, start, i);
      permute(strArr, start + 1, end);
      swap(strArr, start, i)
    }
  }
}

function permuteArray(strArr) {
  permute(strArr, 0, strArr.length - 1)
}