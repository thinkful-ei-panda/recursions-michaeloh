

const powerCalculator = function(integer, exponent) {
  if (exponent < 0) {
    return "exponent should be >= 0"
  } else if (exponent === 0) {
    return 1
  }
  return integer *  powerCalculator(integer, exponent - 1)
}

let int = 10
let exp = 1
console.log(powerCalculator(int, exp))