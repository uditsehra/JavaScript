/*
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself.
For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
 */

function isPrime(num)
{
  var i=2
  while(i<num){
    if(num%i==0)
    {
      return false
    }
    i++
  }
  return true
}

// Or we can use Sieve Of Erathosthenes Primes to get Primes
function getPrime(num){
    var sieve = []
    var i;
    var j;

    var prime = []
    for(i=2; i<=num; i++){
        if(!sieve[i]){
            prime.push(i);
            for(j=i<<1; j<=num; j+=i){
                sieve[j] = true
            }
        }
    }
    return prime
}

function sumPrimes(num) {
  var i=2
  var sum =0
  var prime = []
  while(i<=num){
    if(isPrime(i))
      prime.push(i)
    i++
  } 

  return prime.reduce((a,b)=> a+b)
}

console.log(sumPrimes(977))
console.log(getPrime(977))