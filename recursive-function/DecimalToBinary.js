function DecinalToBinary() {
  let binaryString = "";

  function DecinalToBinaryHelper(n) {
    if(n < 2) {
      binaryString += n;
      return ;
    } else {
      DecinalToBinaryHelper(Math.floor(n / 2));
      DecinalToBinaryHelper(n % 2);
    }
  }
  DecinalToBinaryHelper(5);
  return binaryString;
}

console.log(DecinalToBinary(231))