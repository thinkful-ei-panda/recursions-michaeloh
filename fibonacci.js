const fibonacci = function(number) {
  if(number === 2){
    return [1,1];
  }
  let array = fibonacci(number - 1);
  array.push(array[array.length - 1] + array[array.length - 2]);
  return array
};
console.log(fibonacci(13));