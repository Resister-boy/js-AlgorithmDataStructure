function countDownToZero(n) {
  if(n < 0) { // 기저조건
    console.log("end!"); 
    return;
  } else {
    console.log(n);
    countDownToZero(n - 1); // 자기 자신을 호출
  }
}

countDownToZero(5);