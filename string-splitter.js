const stringSplitter = function(input, separator){
  if(input.length <= 1){
    input [0] === separator ? input [0] : ',';
  }
  const output = stringSplitter((input.substring(1, input.length -1 )), separator);
  return output;
};
console.log(stringSplitter('17/08/2020', '/'));


