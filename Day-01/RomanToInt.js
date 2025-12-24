function romanToInt(s){

  // Step 1: Roman symbols ko numbers me map kiya
  // Technique: Hash Map / Lookup Table

  const map ={
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  //final ans ko store krne ke liye variable chaiye 
  
  let total = 0 ;

  // Step 3: Roman string ko left se right traverse karna
  // Technique: Linear Traversal
  for (let i = 0 ; i < s.length ; i++ ){

    // Step 4: Current aur Next value compare kar rahe hain
    // IMPORTANT: next sirf comparison ke liye hai
    if(map[s[i]] < map[s[i]]) {
      // Step 5a: Agar current chhota hai next se
      // Roman rule: chhota pehle aaye → subtract
      total -= map[s[i]];
      
    }else{

      // Step 5b: Normal case → add current
      total += map[s[i]];
    }
    }
  // Step 6: Final converted integer return
  return total;
}


romanToInt(IVX);
