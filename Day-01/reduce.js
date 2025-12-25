function customReduce(nums, fn, init) {
  let acc = init; // accumulator starts with init value

  for (let i = 0; i < nums.length; i++) {
    // combine current accumulator with current element
    acc = fn(acc, nums[i]);
  }

  return acc; // final reduced value
}


//use the reduce 


const nums = [1, 2, 3, 4];

const sum = customReduce(nums, function (acc, curr) {
  return acc + curr;
}, 0);

console.log(sum); // 10
