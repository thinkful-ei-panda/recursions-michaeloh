const binary = function(input) {
  if(input <= 0) {
    return '';
  }
  let binaryForm = Math.floor(input % 2);
  return (binary(Math.floor(input / 2)) + binaryForm)
}

console.log(binary(25))