// customMap function
function customMap(arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i)); // fn is called here
  }
  return result;
}

////-------------------------------------

// Example usage: define fn inline
const numbers = [1, 2, 3, 4];

// Using customMap with an inline function (double the value + add index)
const mappedArray = customMap(numbers, function(value, index) {
  return value * 2 + index;
});

console.log(mappedArray); // Output: [2, 5, 8, 11]
