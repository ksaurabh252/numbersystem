const numbers = [
  19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
];
let primeArray = []
// Function for prime numbers
function isPrimeNumber(numbers) {
  if (numbers <= 1) return false
  for (let i = 2; i <= Math.sqrt(numbers); i++) {
    if (numbers % i === 0) {
      return false
    }
  } return true
}
primeArray = numbers.filter(isPrimeNumber)
console.log(primeArray)

let maximum = Math.max(...primeArray)
let minimum = Math.min(...primeArray)
// let sum=0
let sumOfPrime = 0
for (let i = 0; i < primeArray.length; i++) {
  sumOfPrime += primeArray[i]
}

console.log("Maximum =", maximum)
console.log("Minimum =", minimum)
console.log("Sum =", sumOfPrime)
