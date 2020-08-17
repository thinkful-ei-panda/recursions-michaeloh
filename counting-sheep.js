
const totalSheep = function(sheep) {
  if (sheep === 0) {
    return "All sheep jumped over the fence"
  }
  return `${sheep}: Another jumps over the fence` + '\n' + totalSheep(sheep-1)
    
}

let sheep = 3;
console.log(totalSheep(sheep))

