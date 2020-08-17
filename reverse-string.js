const reverseString = function(string) {
    if (string.length ===1  ) {
        return string[0]
    }

    return (string.charAt(string.length - 1) + reverseString(string.slice(0, -1)))
}

console.log(reverseString('applsauce'))