function isPalindrome(x) {
    let original = x;
    let rev = 0;
  
    while (x > 0) {
      rev = rev * 10 + (x % 10);
      x = Math.floor(x / 10);
    }
  
    return rev === original;
  }
  