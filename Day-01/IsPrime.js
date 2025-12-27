///A prime number is a number greater than 1 that is divisible only by 1 and itself.

//Examples:

/// Prime : 2, 3, 5, 7, 11

/// Not Prime : 1, 4, 6, 8, 9, 10

function isPrime(n){

    if (n <= 1 ) 
        return false;

    for(let i = 2 ; i < n ; i++) { 
        if (n % i === 0)
        return false ;
    }
    return true;
    
}
console.log(isPrime(11))
