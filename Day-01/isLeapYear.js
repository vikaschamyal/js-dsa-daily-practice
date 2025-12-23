function isLeapYear(year) {
  // Leap year if divisible by 400
  if (year % 400 === 0) {
    return true;
  }

  // Not a leap year if divisible by 100
  if (year % 100 === 0) {
    return false;
  }

  // Leap year if divisible by 4
  if (year % 4 === 0) {
    return true;
  }

  return false;
}

isLeapYear(2024)
isLeapYear(2019)
isLeapYear(1900)
