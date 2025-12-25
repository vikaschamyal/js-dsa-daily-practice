let prev1 = 0;
let prev2 = 1;

console.log(prev1);
console.log(prev2);

for (let i = 2; i < 10; i++) {
  let total = prev1 + prev2;
  console.log(total);
  prev1 = prev2;
  prev2 = total;
}

