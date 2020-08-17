const triangularNumber = function(number) {
    if(number === 1) {
        return number
    }
    return number + triangularNumber(number - 1)
}

console.log(triangularNumber(9))