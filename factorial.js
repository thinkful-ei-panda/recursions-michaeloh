const factorial = function(number) {
  if(number === 1) {
    return number;
  }
  return number * factorial(number - 1)
}

console.log(factorial(7))