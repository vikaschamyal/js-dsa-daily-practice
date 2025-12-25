//-------------------with method 
function isArmstrong(number) {
  let sum = 0;
  const numStr = number.toString();       // Convert number to string to count digits
  const digits = numStr.length;           // Number of digits

  let temp = number;                       // Temporary copy for processing

  while (temp > 0) {
    let digit = temp % 10;                 // Extract last digit
    sum += Math.pow(digit, digits);        // Raise to power and add to sum
    temp = Math.floor(temp / 10);          // Remove last digit
  }

  return sum === number;                    // Compare sum with original number
}

// Examples
console.log(isArmstrong(153));  // true
console.log(isArmstrong(9474)); // true
console.log(isArmstrong(123));  // false
console.log(isArmstrong(370));  // true



///=------------------------------- without method 
function isArmstrong(number) {
  let sum = 0;
  let temp = number;

  // Step 1: Count digits
  let digits = 0;
  let n = number;
  while (n > 0) {
    digits++;
    n = Math.floor(n / 10);
  }

  // Step 2: Calculate sum of each digit^digits
  n = number;
  while (n > 0) {
    let digit = n % 10;
    
    // calculate digit^digits manually
    let power = 1;
    for (let i = 0; i < digits; i++) {
      power *= digit;
    }

    sum += power;
    n = Math.floor(n / 10);
  }

  // Step 3: Compare sum with original number
  return sum === number;
}

// Examples
console.log(isArmstrong(153));  // true
console.log(isArmstrong(9474)); // true
console.log(isArmstrong(123));  // false
console.log(isArmstrong(370));  // true




