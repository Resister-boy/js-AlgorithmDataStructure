function getNthFiboBetter(n, lastest, last) {
  if (n <= 1) {
    return n;
  } 
  if (n == 1) {
    return last;
  }
  return getNthFiboBetter(n - 1, last, lastest + last);
}